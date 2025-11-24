// Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Swap these with your own assets in /assets if you like
const IMAGES = [
  "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1200&auto=format&fit=crop",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const up = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft gradient BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-800/90 to-slate-900" />
      {/* glow blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        variants={container}
        className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 md:py-28"
      >
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* LEFT: Copy */}
          <div className="text-center md:text-left">
            <motion.span
              variants={up}
              className="inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-white/80"
            >
              Trusted by teams across India
            </motion.span>

            <motion.h1
              variants={up}
              className="mt-4 text-4xl font-extrabold leading-tight text-white md:text-5xl"
            >
              Empowering Excellence, Everywhere
            </motion.h1>

            <motion.p
              variants={up}
              className="mt-4 text-base leading-relaxed text-white/80 md:text-lg"
            >
              A comprehensive solution that saves time, reduces admin work, and
              keeps everyone in sync—from management to parents—on web and mobile.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={up}
              className="mt-6 flex flex-col items-center gap-3 sm:flex-row md:justify-start"
            >
              <Link
                to="/enquiry"
                className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-5 py-3 font-semibold text-slate-900 shadow-lg shadow-yellow-300/30 transition hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-200"
                aria-label="Get a demo"
              >
                Get a Demo
              </Link>
              <Link
                to="/features"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                aria-label="Explore features"
              >
                Explore Features
              </Link>
            </motion.div>

            {/* quick stats */}
            <motion.div
              variants={up}
              className="mt-8 grid grid-cols-3 gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/90 backdrop-blur md:max-w-md"
            >
              <div className="text-center">
                <div className="text-xl font-bold">120+</div>
                <div className="text-[11px] opacity-80">Institutions</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold">50k+</div>
                <div className="text-[11px] opacity-80">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold">99.9%</div>
                <div className="text-[11px] opacity-80">Uptime</div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Collage */}
          <motion.div
            variants={fade}
            className="relative mx-auto grid max-w-xl grid-cols-3 gap-3 md:max-w-none"
          >
            {/* Tall left card */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="col-span-1 row-span-2 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur"
            >
              <img
                src={IMAGES[0]}
                alt="Platform overview"
                className="h-full w-full rounded-xl object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* Top-right */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
              className="col-span-2 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur"
            >
              <img
                src={IMAGES[1]}
                alt="Analytics dashboard"
                className="h-48 w-full rounded-xl object-cover md:h-60"
                loading="lazy"
              />
            </motion.div>

            {/* Bottom-right */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}
              className="col-span-2 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur"
            >
              <img
                src={IMAGES[2]}
                alt="Mobile experience"
                className="h-40 w-full rounded-xl object-cover md:h-52"
                loading="lazy"
              />
            </motion.div>

            {/* floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="pointer-events-none absolute -right-2 -top-2 hidden rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur sm:block"
            >
              Live • Secure • Scalable
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
