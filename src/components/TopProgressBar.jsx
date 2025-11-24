// src/components/TopProgressBar.jsx
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

/** ---------- Speed Test Helpers ---------- **/

/**
 * Try to read user's network hints if available.
 */
function readConnectionInfo() {
  const nav = typeof navigator !== "undefined" ? navigator : null;
  const c = nav?.connection || nav?.mozConnection || nav?.webkitConnection;
  return c
    ? {
        effType: c.effectiveType || "unknown",
        downMbpsHint: typeof c.downlink === "number" ? c.downlink : null, // Mbps
        rttHintMs: typeof c.rtt === "number" ? c.rtt : null,
      }
    : { effType: "unknown", downMbpsHint: null, rttHintMs: null };
}

/**
 * Measure download throughput (Mbps) by fetching a small binary file.
 * Prefers a local static file /speed-test.bin (you can add ~256–512 KB random bytes to /public).
 * Falls back to a public endpoint if the local file 404s or fails.
 */
async function measureDownloadMbps({ signal } = {}) {
  const candidates = [
    // 1) Local static file (add one to /public to avoid external calls)
    `/speed-test.bin?cb=${Math.random().toString(36).slice(2)}`,
    // 2) Public tiny payload (Cloudflare’s speed test endpoint)
    `https://speed.cloudflare.com/__down?bytes=250000&cb=${Math.random().toString(36).slice(2)}`,
  ];

  let lastError = null;

  for (const url of candidates) {
    try {
      const t0 = performance.now();
      const res = await fetch(url, {
        cache: "no-store",
        headers: { "cache-control": "no-store", pragma: "no-cache" },
        signal,
        // credentials: "omit", mode: "no-cors" // don't use no-cors; it hides body/size
      });
      if (!res.ok) throw new Error(`speed test fetch ${res.status}`);

      // If streaming supported, count bytes as we read:
      if (res.body && "getReader" in res.body) {
        const reader = res.body.getReader();
        let bytes = 0;
        // eslint-disable-next-line no-constant-condition
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          bytes += value?.length || 0;
        }
        const ms = Math.max(1, performance.now() - t0);
        const mb = bytes / (1024 * 1024);
        return (mb / (ms / 1000)); // Mbps (MB/s * 8) – but value is MiB/s; close enough for pacing
      } else {
        // Fallback: blob read (less precise)
        const blob = await res.blob();
        const ms = Math.max(1, performance.now() - t0);
        const mb = blob.size / (1024 * 1024);
        return (mb / (ms / 1000));
      }
    } catch (err) {
      lastError = err;
      // try next candidate
    }
  }

  // If everything failed, return null to indicate we couldn't measure
  console.warn("Speed test failed:", lastError);
  return null;
}

/** Patch fetch & XHR once and publish network state on window */
function ensureNetworkPatches() {
  if (typeof window === "undefined") return;
  if (window.__EEC_NETPATCHED__) return;
  window.__EEC_NETPATCHED__ = true;

  const state = (window.__EEC_NETSTATE__ = {
    active: 0,
    avgMs: 600,            // moving average of request time
    downlinkMbps: null,    // measured Mbps (null if unknown)
    effType: "unknown",    // effectiveType hint
    listeners: new Set(),
  });

  const emit = () =>
    state.listeners.forEach((fn) =>
      fn({
        active: state.active,
        avgMs: state.avgMs,
        downlinkMbps: state.downlinkMbps,
        effType: state.effType,
      })
    );

  const updateAvg = (ms) => {
    // EMA: 20% new sample
    state.avgMs = Math.max(80, state.avgMs * 0.8 + ms * 0.2);
  };

  // fetch patch
  const origFetch = window.fetch?.bind(window);
  if (origFetch) {
    window.fetch = async (...args) => {
      const t0 = performance.now();
      state.active += 1;
      emit();
      try {
        return await origFetch(...args);
      } finally {
        const dt = performance.now() - t0;
        updateAvg(dt);
        state.active = Math.max(0, state.active - 1);
        emit();
      }
    };
  }

  // XHR patch
  const OrigXHR = window.XMLHttpRequest;
  if (OrigXHR) {
    function PatchedXHR() {
      const xhr = new OrigXHR();
      let started = false;
      let t0 = 0;

      const open = xhr.open;
      xhr.open = function (...args) {
        return open.apply(xhr, args);
      };

      const send = xhr.send;
      xhr.send = function (...args) {
        started = true;
        t0 = performance.now();
        state.active += 1;
        emit();

        xhr.addEventListener("readystatechange", function () {
          if (xhr.readyState === 4 && started) {
            const dt = performance.now() - t0;
            updateAvg(dt);
            state.active = Math.max(0, state.active - 1);
            emit();
          }
        });

        return send.apply(xhr, args);
      };

      return xhr;
    }
    window.XMLHttpRequest = PatchedXHR;
  }

  // simple subscribe API
  window.__EEC_SUBSCRIBE_NET__ = (fn) => {
    state.listeners.add(fn);
    // immediate ping
    fn({
      active: state.active,
      avgMs: state.avgMs,
      downlinkMbps: state.downlinkMbps,
      effType: state.effType,
    });
    return () => state.listeners.delete(fn);
  };

  /** ---------- Speed test loop ---------- **/
  const runSpeedTest = async (signal) => {
    // blend connection hints first
    const hints = readConnectionInfo();
    if (hints.effType) state.effType = hints.effType;

    // Start with browser hint if present (useful until we measure)
    if (hints.downMbpsHint != null && !Number.isNaN(hints.downMbpsHint)) {
      state.downlinkMbps =
        state.downlinkMbps == null
          ? hints.downMbpsHint
          : state.downlinkMbps * 0.7 + hints.downMbpsHint * 0.3; // gentle blend
      emit();
    }

    // Active measurement
    const mbps = await measureDownloadMbps({ signal });
    if (mbps != null && !Number.isNaN(mbps) && mbps > 0) {
      // Blend to avoid jumps
      state.downlinkMbps =
        state.downlinkMbps == null ? mbps : state.downlinkMbps * 0.5 + mbps * 0.5;
      emit();
    }
  };

  const ac = new AbortController();

  // kick once on load, then periodically
  runSpeedTest(ac.signal);
  const interval = setInterval(() => runSpeedTest(ac.signal), 45_000);

  // Refresh when tab becomes visible (helps laptops/mobile)
  const onVis = () => {
    if (document.visibilityState === "visible") runSpeedTest(ac.signal);
  };
  document.addEventListener("visibilitychange", onVis);

  // teardown when page unloads (best effort)
  window.addEventListener("beforeunload", () => {
    ac.abort();
    clearInterval(interval);
    document.removeEventListener("visibilitychange", onVis);
  });
}

function useNetworkActivity() {
  const [info, setInfo] = useState({
    active: 0,
    avgMs: 600,
    downlinkMbps: null,
    effType: "unknown",
  });
  useEffect(() => {
    ensureNetworkPatches();
    if (!window.__EEC_SUBSCRIBE_NET__) return;
    return window.__EEC_SUBSCRIBE_NET__(setInfo);
  }, []);
  return info;
}

export default function TopProgressBar() {
  const { pathname } = useLocation();
  const { active, avgMs, downlinkMbps, effType } = useNetworkActivity();

  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const manualNavRef = useRef(0); // ms remaining for manual nav progress
  const rafRef = useRef(0);

  // Start a brief progress on route change (helps when no network requests happen)
  useEffect(() => {
    manualNavRef.current = 500;
    setVisible(true);
    if (progress < 0.08) setProgress(0.08);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    let last = performance.now();

    const tick = () => {
      const now = performance.now();
      const dt = now - last;
      last = now;

      // manual nav timer
      if (manualNavRef.current > 0) {
        manualNavRef.current = Math.max(0, manualNavRef.current - dt);
      }

      const activeNow = active > 0 || manualNavRef.current > 0;

      if (activeNow) {
        if (!visible) setVisible(true);

        // Target ceiling while active
        const target = 0.92;

        /**
         * Base speed uses both:
         *  - avgMs (moving-avg request duration)
         *  - downlinkMbps (measured throughput)
         *
         *  - Slower networks => slower progress
         *  - Faster networks => faster, but capped for smoothness
         */
        const avgMsTerm = 400 / Math.max(120, avgMs); // smaller when avgMs is large
        // Mbps factor: ~0.7x at <1 Mbps, ~1.0x at 5 Mbps, ~1.3x at 50+ Mbps (capped)
        const mbps = typeof downlinkMbps === "number" ? downlinkMbps : null;
        const mbpsFactor =
          mbps == null
            ? 1.0
            : Math.min(1.3, 0.7 + Math.log2(1 + mbps) / 3.2);

        // slight boost for more concurrent requests (but keep smooth)
        const concurrentBoost = 1 + Math.min(0.6, (active - 1) * 0.12);

        // Final base per millisecond
        const basePerMs = Math.min(
          0.0042,
          Math.max(0.0006, (avgMsTerm / 1000) * mbpsFactor)
        );

        const next = progress + dt * basePerMs * concurrentBoost;

        // approach target but never exceed it while active
        setProgress(Math.min(target, next));
      } else {
        // Finish to 100%, then hide
        if (progress < 1) {
          const finishStep = Math.max(0.012, (1 - progress) * 0.06);
          setProgress(Math.min(1, progress + finishStep));
        } else {
          // small delay for the eye, then reset
          setTimeout(() => {
            setVisible(false);
            setProgress(0);
          }, 120);
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, avgMs, visible, progress, downlinkMbps]);

  const percent = Math.max(0, Math.min(100, progress * 100));

  return (
    <div
      className={[
        "fixed left-0 right-0 top-0 h-[3px] md:h-[3px] z-[9999]",
        "transition-opacity duration-200",
        visible ? "opacity-100" : "opacity-0 pointer-events-none",
      ].join(" ")}
      aria-hidden={!visible}
    >
      {/* Bar */}
      <div
        className="h-full bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 shadow-[0_1px_6px_rgba(251,191,36,0.6)]"
        style={{ width: `${percent}%` }}
      />
      {/* Shimmer/peg */}
      <div
        className="absolute right-0 top-0 h-full w-24 opacity-50 mix-blend-screen pointer-events-none"
        style={{
          transform: `translateX(${percent - 100}%)`,
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)",
        }}
      />

      {/* Optional tiny debug badge (comment out if not needed) */}
      {/* <div className="absolute right-2 top-1.5 -translate-y-full text-[10px] px-1.5 py-0.5 rounded bg-black/60 text-white">
        {downlinkMbps ? `${downlinkMbps.toFixed(2)} Mbps` : effType}
      </div> */}
    </div>
  );
}
