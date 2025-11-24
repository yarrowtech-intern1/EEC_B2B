// Gallery.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";

// ===== Hero image (place /gallery.jpg in /public) =====
const HERO_IMAGE = "/gallery.jpg";

// Animate on mount
const fade = (d = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: "easeOut", delay: d },
});

const POP = {
  initial: { opacity: 0, scale: 0.96, y: 8 },
  animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.22, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.98, y: 4, transition: { duration: 0.18, ease: "easeIn" } },
};

// ===== Your gallery images (kept) =====
import img1 from "/gallery1.jpeg";
import img2 from "/gallery2.jpeg";
import img3 from "/gallery3.jpeg";
import img4 from "/gallery4.jpeg";
import img5 from "/gallery5.jpeg";
import img6 from "/gallery6.jpeg";
import img7 from "/gallery7.jpeg";
import img8 from "/gallery8.jpeg";
import img9 from "/gallery9.jpeg";
import img10 from "/gallery10.jpeg";
import img11 from "/gallery11.jpeg";

// “Masonry” columns
const COLS = [[img1], [img2], [img3], [img4], [img6], [img7], [img5], [img8], [img9], [img10], [img11]];

/* ---------- Lightbox ---------- */
function useEsc(handler) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && handler();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handler]);
}

function Lightbox({ open, onClose, src }) {
  const cardRef = useRef(null);
  useEsc(() => open && onClose());

  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement;
    return () => prev && prev.focus?.();
  }, [open]);

  return (
    <AnimatePresence>
      <Helmet>
        <title>Gallery – Electronic Educare | Explore Our Gallery</title>
        <meta
          name="description"
          content="Explore the gallery of Electronic Educare (EEC) – showcasing our vibrant school community, events, and learning moments captured through images."
        />
        <meta name="keywords" content="Gallery, Electronic Educare, School LMS, School ERP, AI Learning, School Events" />
        <meta property="og:title" content="Gallery – Electronic Educare | Explore Our Gallery" />
        <meta
          property="og:description"
          content="Discover the story, mission, and vision behind EEC, the AI-powered school ecosystem designed to empower schools, teachers, parents, and students."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      {open && (
        <motion.div
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            {...POP}
            ref={cardRef}
            className="relative mx-auto mt-20 w-[92%] max-w-3xl rounded-3xl border border-amber-200/70 bg-white/95 p-1.5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={src} alt="Preview" className="w-full h-auto max-h-[78vh] object-contain rounded-2xl" />
            <button
              onClick={onClose}
              className="absolute top-3 right-3 rounded-lg bg-white/90 px-3 py-1.5 text-sm font-medium text-slate-700 shadow hover:bg-white"
              aria-label="Close"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------- Page ---------- */
export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const allImages = useMemo(() => COLS.flat(), []);
  const openLightbox = (src) => { setImgSrc(src); setOpen(true); };

  return (
    <div className="min-h-screen w-full">
      {/* ===== PARALLAX HERO (same structure as FeaturesPage) ===== */}
      <section className="relative h-[54vh] md:h-[66vh]">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(${HERO_IMAGE})`,
            backgroundAttachment: "fixed", // native parallax
          }}
        />
        {/* gentle vignette and fade to white to keep it light */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#120f08]/20 via-white/10 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full w-full items-center px-6">
          <motion.div {...fade(0)} className="w-full">
            <h1
              className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-white antialiased text-right w-full"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.35)" }}
            >
              Explore Our Gallery
            </h1>
          </motion.div>

        </div>
        <div className="pointer-events-none absolute -bottom-1 left-0 right-0 h-10 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* ===== MASONRY (Pinterest-style) GRID ===== */}
      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <motion.p {...fade(0.05)} className="text-slate-700">
          Curated moments in a flowing masonry album — clean EEC theme.
        </motion.p>

        {/* columns create the masonry flow; balance keeps columns even */}
        <div className="mt-6 columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          {allImages.map((src, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, ease: "easeOut", delay: 0.04 * i }}
              onClick={() => openLightbox(src)}
              className="
          group relative isolate w-full mb-4 break-inside-avoid focus:outline-none
          rounded-[18px] bg-white/90 ring-1 ring-amber-200/70 p-2
          shadow-[0_8px_22px_rgba(17,24,39,0.10)]
          hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(17,24,39,0.16)]
          transition-all
        "
            >

              {/* subtle glow */}
              <div className="pointer-events-none absolute inset-0 rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity [background:radial-gradient(220px_72px_at_18%_0%,rgba(251,191,36,0.14),transparent_60%)]" />
              <div className="absolute left-3 top-2 flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                <span className="h-2 w-2 rounded-full bg-indigo-400" />
              </div>
              {/* image keeps natural height for masonry effect */}
              <div className="relative overflow-hidden rounded-[12px] bg-white">

                <img
                  src={src}
                  alt={`EEC gallery ${i}`}
                  className="w-full h-auto block object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                {/* caption */}
                <div className="absolute -bottom-2 left-1/2 w-[80%] -translate-x-1/2 rounded-lg
                          bg-white/90 backdrop-blur px-3 py-1 text-[12px] font-medium
                          text-slate-800 shadow ring-1 ring-amber-200/70">
                  EEC • Moment
                </div>
              </div>

              {/* lift shadow */}
              <div className="mt-4 h-5 rounded-xl bg-gradient-to-b from-transparent to-black/6 blur-[6px] opacity-70" />
            </motion.button>
          ))}
        </div>
      </section>



      {/* Lightbox */}
      <Lightbox open={open} onClose={() => setOpen(false)} src={imgSrc} />
    </div>
  );
}
