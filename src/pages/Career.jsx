// src/pages/Career.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { JOBS } from "../data/jobs";
import {
  FaBolt, FaUsers, FaLaptopCode, FaClock, FaMoneyBillWave, FaShieldAlt,
  FaGraduationCap, FaChartLine, FaGlobeAsia
} from "react-icons/fa";
import { Helmet } from "react-helmet";

/* ===== Parallax hero image ===== */
const HERO_IMAGE = "/career.jpg";

/* ===== Animations ===== */
const fade = (d = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: "easeOut", delay: d },
});

/* small helper to get initials */
const initials = (t = "") =>
  t.split(" ").slice(0, 2).map(w => w[0] || "").join("").toUpperCase();

export default function Career() {
  return (
    <div className="min-h-screen w-full">
      <Helmet>
        <title>Careers Page – Electronic Educare | Explore our Career</title>
        <meta
          name="description"
          content="Learn about Electronic Educare (EEC) – our story, our mission to transform education, and our vision to empower schools with AI-powered, holistic learning technology."
        />
        <meta name="keywords" content="About EEC, Electronic Educare, School LMS, School ERP, AI Learning, Vision Mission" />
        <meta property="og:title" content="Careers Page – Electronic Educare | Explore our Career" />
        <meta
          property="og:description"
          content="Discover the story, mission, and vision behind EEC, the AI-powered school ecosystem designed to empower schools, teachers, parents, and students."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* ===== PARALLAX HERO (right-aligned like FeaturesPage) ===== */}
      <section className="relative h-[54vh] md:h-[66vh]">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${HERO_IMAGE})`, backgroundAttachment: "fixed" }}
        />
        {/* gentle vignette & fade to white to keep it light */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#120f08]/20 via-white/10 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full w-full items-center px-6">
          <motion.div {...fade(0)} className="w-full">
            <h1
              className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-white antialiased text-right w-full"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.35)" }}
            >
              Build Your Career at{" "}
              <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">
                EEC
              </span>
            </h1>
          </motion.div>

        </div>
        <div className="pointer-events-none absolute -bottom-1 left-0 right-0 h-10 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* ===== ROLE RIBBONS (unique, professional, not cardy) ===== */}
      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <motion.p {...fade(0.05)} className="max-w-3xl text-slate-700">
          Join a product-driven team shaping a modern LMS + ERP—clear design, reliable tech, and real impact.
        </motion.p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {(JOBS ?? []).map((job, i) => (
            <motion.article
              key={job.slug || i}
              {...fade(0.06 * (i + 1))}
              className="
                group relative isolate overflow-hidden rounded-[28px]
                bg-white/90 backdrop-blur
                shadow-[0_8px_26px_rgba(17,24,39,0.10)]
                ring-1 ring-amber-200/70
                hover:shadow-[0_14px_36px_rgba(17,24,39,0.16)]
                transition-all hover:-translate-y-0.5
              "
            >
              {/* ambient glow rail */}
              <div
                className="pointer-events-none absolute -inset-x-2 -inset-y-1 rounded-[32px] opacity-0 blur-xl transition group-hover:opacity-100"
                style={{ background: "linear-gradient(90deg, rgba(251,191,36,.22), rgba(99,102,241,.22))" }}
              />

              {/* angled brand stripe */}
              <div className="pointer-events-none absolute -left-24 top-0 h-full w-48 -skew-x-12 bg-gradient-to-b from-amber-200/45 to-indigo-200/45" />

              {/* content */}
              <div className="relative z-10 flex items-start gap-4 px-6 py-6">
                {/* medallion with initials */}
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-amber-600 to-yellow-500 text-white font-extrabold shadow-lg shadow-amber-500/30 ring-4 ring-white/70">
                  {initials(job.title)}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-extrabold tracking-tight text-slate-900">
                    {job.title}
                  </h3>
                  <p className="mt-1 text-slate-700">{job.summary}</p>

                  <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                    {(job.bullets || []).slice(0, 3).map((b, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-amber-500" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-600">
                      <span className="inline-block h-2 w-2 rounded-full bg-amber-400" />
                      Full-time • Product Team
                    </span>
                    <Link
                      to={`/careers/${job.slug}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-4 py-2 text-white text-sm font-semibold shadow-lg shadow-amber-500/20 hover:bg-amber-700 transition"
                    >
                      View details
                      <svg viewBox="0 0 24 24" className="h-4 w-4">
                        <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </Link>
                  </div>

                  {/* floating shadow puck */}
                  <div className="mt-5 h-6 rounded-2xl bg-gradient-to-b from-transparent to-black/5 blur-[6px] opacity-70" />
                </div>
              </div>
            </motion.article>
          ))}

          {(!JOBS || JOBS.length === 0) && (
            <motion.div
              {...fade(0.1)}
              className="md:col-span-2 rounded-2xl border border-amber-200 bg-white/85 p-6 text-slate-700"
            >
              No openings right now. Please check back soon.
            </motion.div>
          )}
        </div>
      </section>

      {/* ===== Why Join (refreshed but light & simple) ===== */}
      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <motion.h2 {...fade(0)} className="text-2xl md:text-3xl font-extrabold tracking-tight text-center">
          Why Join EEC?
        </motion.h2>

        <div className="mt-6 grid gap-6 md:grid-cols-1">
          {/* {[
            { icon: <FaBolt />, title: "Meaningful Impact", desc: "Ship features that improve learning outcomes for thousands." },
            { icon: <FaUsers />, title: "Small, Senior Team", desc: "Work with caring peers who value clarity and ownership." },
            { icon: <FaLaptopCode />, title: "Modern Stack", desc: "React + Vite + Tailwind with thoughtful DX." },
          ].map((x, i) => (
            <motion.div
              key={x.title}
              {...fade(0.05 * (i + 1))}
              className="relative overflow-hidden rounded-2xl border border-amber-200/70 bg-white/85 p-6 shadow-sm backdrop-blur"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 [background:radial-gradient(300px_100px_at_18%_0%,rgba(251,191,36,0.14),transparent_60%)] group-hover:opacity-100 transition-opacity" />
              <div className="text-xl font-bold flex items-center gap-2">
                <span className="text-amber-600">{x.icon}</span>
                {x.title}
              </div>
              <p className="mt-2 text-slate-700">{x.desc}</p>
            </motion.div>
          ))} */}
          <span>EEC is more than just a learning app — it’s a smart education ecosystem that helps schools run smoother and students learn better. With AI-powered tools, personalized learning, and holistic growth, EEC makes education simple, engaging, and future-ready.</span>
        </div>

        {/* Perks row */}
        <motion.div {...fade(0.2)} className="mt-10 rounded-2xl border border-amber-200/70 bg-white/85 p-6 shadow-sm backdrop-blur">
          <h3 className="text-xl font-bold">Perks & Benefits</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-sm text-slate-800">
            <div className="flex items-start gap-3"><FaClock className="mt-0.5 text-amber-600" /><div><div className="font-semibold">Flexible Hours</div><p className="text-slate-700">Optimize for flow, not facetime.</p></div></div>
            <div className="flex items-start gap-3"><FaMoneyBillWave className="mt-0.5 text-amber-600" /><div><div className="font-semibold">Competitive Pay</div><p className="text-slate-700">Fair, transparent compensation.</p></div></div>
            <div className="flex items-start gap-3"><FaShieldAlt className="mt-0.5 text-amber-600" /><div><div className="font-semibold">Health & Wellness</div><p className="text-slate-700">Coverage & wellness support.</p></div></div>
            <div className="flex items-start gap-3"><FaGraduationCap className="mt-0.5 text-amber-600" /><div><div className="font-semibold">Learning Budget</div><p className="text-slate-700">Books, courses, conferences.</p></div></div>
            <div className="flex items-start gap-3"><FaChartLine className="mt-0.5 text-amber-600" /><div><div className="font-semibold">Career Growth</div><p className="text-slate-700">Clear ladders & mentorship.</p></div></div>
            <div className="flex items-start gap-3"><FaGlobeAsia className="mt-0.5 text-amber-600" /><div><div className="font-semibold">Hybrid-Remote</div><p className="text-slate-700">Anywhere with occasional jams.</p></div></div>
          </div>
        </motion.div>

        <motion.div {...fade(0.35)} className="mt-10 text-center">
          <Link
            to="/careers"
            className="inline-flex items-center justify-center rounded-xl bg-amber-600 px-6 py-3 text-white font-semibold shadow-lg shadow-amber-500/20 hover:bg-amber-700 transition"
          >
            See open roles
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
