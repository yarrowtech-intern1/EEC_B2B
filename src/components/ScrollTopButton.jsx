import React, { useEffect, useState } from "react";

/**
 * Floating "scroll to top" button.
 * - Hidden while the anchor (e.g., #hero) is visible.
 * - If anchor not found, falls back to showing after user scrolls ~320px.
 *
 * Usage:
 *   <ScrollTopButton anchorId="hero" />
 * Make sure your landing/hero section has id="hero" (or change the prop).
 */
export default function ScrollTopButton({ anchorId = "hero", threshold = 320 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const anchor = document.getElementById(anchorId);

    // Prefer IntersectionObserver against the landing section (hero)
    if (anchor && "IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        ([entry]) => {
          // Show the button only when hero is NOT intersecting
          setVisible(!entry.isIntersecting);
        },
        { root: null, threshold: 0.01 }
      );
      io.observe(anchor);
      return () => io.disconnect();
    }

    // Fallback: simple scroll distance check
    const onScroll = () => setVisible(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [anchorId, threshold]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={[
        "fixed bottom-6 right-6 z-50",
        "rounded-full bg-amber-600 text-white shadow-xl",
        "hover:bg-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400",
        "transition-all duration-300",
        "p-3 md:p-3.5",
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none",
      ].join(" ")}
    >
      {/* Up arrow icon (inline SVG) */}
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 5l-7 7m7-7l7 7M12 5v14" stroke="currentColor" strokeWidth="2" className="text-white" />
      </svg>
    </button>
  );
}
