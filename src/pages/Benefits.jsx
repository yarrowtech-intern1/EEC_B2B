// src/pages/Benefits.jsx
import React from "react";
import { motion } from "framer-motion";

const HERO_IMAGE = "/Benefits.jpg"; // keep in /public

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: "easeOut", delay: d },
});

// Minimal icon set (you can swap these easily)
const I = {
  erp: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M4 7h16M4 12h10M4 17h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="3" y="4" width="18" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M12 3v3m0 12v3M3 12h3m12 0h3M6 6l2 2m8 8 2 2m-12 0 2-2m8-8 2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3.8" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  analytics: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M4 20V6m4 14V10m4 10V8m4 12V4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  ),
  admin: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <rect x="3" y="4" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M7 20h10M9 8h6M9 12h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  exam: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <rect x="5" y="3" width="14" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 7h8M8 11h8M8 15h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M4 18v-8a3 3 0 013-3h10a3 3 0 013 3v5a3 3 0 01-3 3H9l-5 3v-3z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  adaptive: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M12 3l3 5-3 5-3-5 3-5zM5 16h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <circle cx="6" cy="19" r="1" /><circle cx="12" cy="19" r="1" /><circle cx="18" cy="19" r="1" />
    </svg>
  ),
  dashboards: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <rect x="3" y="4" width="8" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <rect x="13" y="4" width="8" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <rect x="3" y="13" width="8" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <rect x="13" y="13" width="8" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
    </svg>
  ),
  finance: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M4 20h16M6 16l4-6 3 4 5-8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" fill="none" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M7 18a4 4 0 010-8 5 5 0 119.8 1.1A3.5 3.5 0 1116.5 18H7z" stroke="currentColor" strokeWidth="1.4" fill="none" />
    </svg>
  ),
};

const BENEFITS = [
  { title: "Integrated ERP & LMS", intro: "EEC seamlessly combines ERP and LMS functionalities, streamlining school management and delivering an engaging, personalized learning experience. From student attendance tracking to interactive lessons and real-time assessments, EEC covers it all.", icon: I.erp },
  { title: "AI & ML Personalization", intro: "EEC leverages AI and machine learning to provide personalized learning paths, adapting to each student's unique needs. Our AI-driven insights identify strengths and areas for improvement, while ML algorithms refine content delivery for optimal student engagement.", icon: I.ai },
  { title: "Real-Time Analytics", intro: "Powered by AI, EEC offers advanced analytics to track student performance and behavior. Teachers and administrators receive real-time data to make informed decisions, creating targeted interventions for improved learning outcomes.", icon: I.analytics },
  { title: "Streamlined Administrative Processes", intro: "EEC’s ERP system simplifies school administration, including fee management, scheduling, payroll, and more. It automates routine tasks, enhances financial transparency, and ensures efficient school operations, so educators can focus on student success.", icon: I.admin },
  { title: "Smart Exam Reporting", intro: "With automated exam scheduling, result generation, and detailed reporting, EEC’s system ensures assessments are managed efficiently. AI algorithms analyze results to provide deeper insights into student performance.", icon: I.exam },
  { title: "AI-Driven Communication & Collaboration", intro: "EEC fosters seamless communication among teachers, students, and parents with AI-powered chatbots and real-time updates, ensuring that everyone stays informed and connected.", icon: I.chat },
  { title: "Adaptive Learning Tools", intro: "Our LMS, enhanced by AI and ML, adapts content and assessments to each student’s progress. It provides engaging, interactive lessons and gamified content to keep students motivated and focused on their educational goals.", icon: I.adaptive },
  { title: "Centralized Data & Customizable Dashboards", intro: "EEC centralizes all school data into one platform, allowing administrators, teachers, and parents to view and customize dashboards that track performance, attendance, fees, and more.", icon: I.dashboards },
  { title: "Comprehensive Financial Management", intro: "The ERP system ensures smooth fee collection, billing, and financial reporting. With automated reminders and secure payment processing, EEC provides complete financial transparency and efficiency.", icon: I.finance },
  { title: "Cloud-Based Access & Security", intro: "EEC operates on a secure cloud platform, providing access anytime, anywhere. With end-to-end encryption and backup systems, it guarantees data security while offering easy accessibility for all users.", icon: I.cloud },
];

export default function Benefits({ items = BENEFITS }) {
  return (
    <div className="min-h-screen w-full">
      {/* ===== PARALLAX HERO (light, right-aligned like FeaturesPage) ===== */}
      <section className="relative h-[54vh] md:h-[66vh]">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(${HERO_IMAGE})`,
            backgroundAttachment: "fixed",
          }}
        />
        {/* soft top-left vignette; bottom fades to white */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#120f08]/20 via-white/10 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full w-full items-center px-6">
          <motion.div {...fade(0)} className="w-full">
            <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow text-right w-full">
              Benefits of EEC
            </h1>
          </motion.div>
        </div>
        <div className="pointer-events-none absolute -bottom-1 left-0 right-0 h-10 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* ===== BENEFITS • PRO SPEC-SHEETS (light EEC theme) ===== */}
      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((b, i) => (
            <motion.article
              key={b.title + i}
              {...fade(0.05 * (i + 1))}
              className="
          group relative isolate overflow-hidden rounded-3xl
          bg-white shadow-[0_10px_28px_rgba(17,24,39,0.08)]
          transition-all will-change-transform hover:-translate-y-0.5
        "
            >
              {/* Gradient outline */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-transparent [background:
            linear-gradient(#fff,#fff) padding-box,
            linear-gradient(135deg, rgba(251,191,36,.8), rgba(99,102,241,.65)) border-box] border border-transparent" />

              {/* Embossed header strip */}
              <div className="absolute inset-x-0 top-0 h-10 bg-[linear-gradient(180deg,rgba(255,255,255,.9),rgba(255,255,255,.65))] border-b border-amber-200/70" />

              {/* Floating icon medallion */}
              <div className="absolute left-5 -top-3 grid h-14 w-14 place-items-center rounded-2xl
                        bg-amber-500 text-white shadow-xl shadow-amber-500/25 ring-2 ring-amber-200">
                <div className="h-7 w-7 opacity-95 mt-3">{b.icon}</div>
              </div>

              {/* “Pro” badge on the right */}
              {/* <div className="absolute right-4 -top-0 rounded-full bg-amber-50 px-3 py-1 text-[11px] font-semibold text-amber-800 border border-amber-200 shadow-sm">
                EEC Benefit
              </div> */}

              {/* Content */}
              <div className="relative z-10 p-6 pt-12">
                <h3 className="text-lg md:text-xl font-extrabold tracking-tight text-slate-900">
                  {b.title}
                </h3>

                {/* Perforation divider */}
                <div className="mt-3 flex items-center gap-3">
                  <span className="h-px flex-1 bg-[repeating-linear-gradient(90deg,#e2e8f0_0_10px,transparent_10px_20px)]" />
                  <span className="inline-block h-2 w-2 rounded-full bg-amber-500" />
                </div>

                <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-slate-700">
                  {b.intro}
                </p>

                {/* Footer meta line */}
                <div className="mt-6 flex items-center justify-between">
                  {/* <span className="inline-flex items-center gap-2 text-[12px] font-medium text-slate-600">
                    <span className="inline-block h-2 w-2 rounded-full bg-amber-400" />
                    Optimized workflow
                  </span> */}
                  {/* <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-amber-700 group-hover:translate-x-0.5 transition-transform">
                    Learn more
                    <svg viewBox="0 0 24 24" className="h-4 w-4">
                      <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </span> */}
                </div>
              </div>

              {/* Soft hover aurora */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity
                        [background:radial-gradient(420px_140px_at_18%_0%,rgba(251,191,36,0.14),transparent_60%)]" />
            </motion.article>
          ))}
        </div>
      </section>


    </div>
  );
}
