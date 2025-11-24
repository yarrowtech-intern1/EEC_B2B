// Modules.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";

/* ===== Parallax hero image (place /Modules.jpg in /public) ===== */
const HERO_IMAGE = "/Modules.jpg";

/* ===== Animations ===== */
const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: "easeOut", delay: d },
});
const pop = {
  initial: { opacity: 0, scale: 0.96, y: 10 },
  animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.98, y: 4, transition: { duration: 0.18, ease: "easeIn" } },
};

/* ===== Icons (unchanged) ===== */
const I = {
  fee: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M4 7h16M4 12h16M8 17h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="3" y="4" width="18" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  bus: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <rect x="4" y="5" width="16" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M7 17v1M17 17v1M6 10h12M7 14h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  hr: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <circle cx="12" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  mobile: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <rect x="7" y="2" width="10" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="18" r="1" />
    </svg>
  ),
  exam: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <rect x="5" y="3" width="14" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  parent: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M4 18v-6a3 3 0 013-3h10a3 3 0 013 3v3a3 3 0 01-3 3H9l-5 3v-3z" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  lms: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M4 7h16M7 3h10M6 11h7m-7 4h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="3" y="5" width="18" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  web: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  content: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <rect x="4" y="4" width="16" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 9h8M8 13h6M8 17h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
};

/* ===== Data (cards stay the same design) ===== */
const MODULES = [
  /* Finance Management */
  {
    key: "fee",
    title: "Fee Collection",
    accent: "text-sky-600",
    icon: I.fee,
    bullets: [
      "Online payments (cards, UPI, net banking).",
      "Auto-generated receipts and reminders.",
      "Dues, concessions, scholarships tracking.",
      "Export to finance & audit logs.",
    ],
  },
  /* Transport (part of ERP) */
  {
    key: "school_administration",
    title: "School Administration",
    accent: "text-green-600",
    icon: I.bus,
    bullets: [
      "Paperless Smart Administration",
      "Centralized Analytics",
      "Fees Management",
      "Examination Management",
    ],
  },
  {
    key: "student",
    title: "Students",
    accent: "text-blue-600",
    icon: I.parent,
    bullets: [
      "Academic progress Tracking",
      "Assignment view",
      "Attendence Tracking",
      "Course Progress view",
      "Health & Well-being Updates",
      "AI-powered Personalized Learning",
    ],
  },
  {
    key: "teacher",
    title: "Teachers",
    accent: "text-blue-600",
    icon: I.parent,
    bullets: [
      "Student Progress Tracking",
      "Student Health Insights",
      "Academic Performance Analytics",
      "Automated Lesson Plan",
      // "Health & Well-being Updates",
      // "AI-powered Personalized Learning",
    ],
  },
  {
    key: "parent",
    title: "Parents",
    accent: "text-blue-600",
    icon: I.parent,
    bullets: [
      "Student Progress Dashboard",
      "Health Observation Tools",
      "Attendence Tracking",
      "Communication Bridge",
      "Fees Payment (All in one)",
      "Complaint & Feedback System",
      "Results View",
      "Course Progress View",
      "Achievements View",
    ],
  },
  /* HR Management */
  {
    key: "hr",
    title: "HR Management",
    accent: "text-violet-600",
    icon: I.hr,
    bullets: [
      "Staff onboarding & digital records.",
      "Attendance, leaves & payroll add-ons.",
      "Role-based permissions and approvals.",
      "Performance reviews & documents.",
    ],
  },
  /* LMS portals & apps */

  /* Exam Management */
  {
    key: "exam",
    title: "Exam Management",
    accent: "text-indigo-600",
    icon: I.exam,
    bullets: [
      "Schedules, seating & hall tickets.",
      "Question banks & objective/subjective.",
      "On-screen evaluation & analytics.",
      "Report cards & transcripts.",
    ],
  },
  /* Parent Communication (in ERP) */
  // {
  //   key: "parent",
  //   title: "Parent Communication",
  //   accent: "text-amber-700",
  //   icon: I.parent,
  //   bullets: [
  //     "Announcements & two-way chat.",
  //     "Attendance/fee alerts & reminders.",
  //     "PTM scheduling & feedback loops.",
  //     "Media gallery & document vault.",
  //   ],
  // },
  /* LMS (new: keeps same card design) */
  {
    key: "everyday",
    title: "Everyday Essentials",
    accent: "text-slate-900",
    icon: I.lms,
    bullets: [
      "Digital assignments & homework hub",
      "Notes & study materials",
      "Subject-wise progress tracking",
      "Class timetables & reminders",
      "Centralized Content Repository",
      "Teacher uploads",
    ],
  },
  {
    key: "mobile",
    title: "Advanced Learning Experience",
    accent: "text-pink-600",
    icon: I.mobile,
    bullets: [
      "Interactive e-books",
      "Adaptive tests & smart quizzes",
      "Auto-grading & instant results",
      "Gamification & rewards",
      "Early performance alerts",
      "Doubt-solving forums",
      "Multi-format assignments",
      "Feedback tools",
      "Curriculum mapping",
    ],
  },
  /* Digital Content (new) */
  {
    key: "digital",
    title: "Digital Content",
    accent: "text-emerald-700",
    icon: I.content,
    bullets: [
      "Curriculum-mapped videos & HD assets.",
      "Interactive content & gamified modules.",
      "Question banks & worksheets.",
      "Licensing, playlists & offline access.",
    ],
  },
  /* Website / CMS (new) */
  {
    key: "website",
    title: "Website & CMS",
    accent: "text-blue-700",
    icon: I.web,
    bullets: [
      "Admissions forms & lead capture.",
      "SEO-ready pages & blog CMS.",
      "Events, galleries & notice board.",
      "Role-based publishing workflow.",
    ],
  },
  {
    key: "daily",
    title: "Daily Mood Journals",
    accent: "text-rose-600",          // you can keep your old accent if you prefer
    icon: I.content,                  // reusing existing icon set to avoid design changes
    bullets: [
    ],
  },
  {
    key: "early",
    title: "Early Stress Alerts",
    accent: "text-rose-600",          // you can keep your old accent if you prefer
    icon: I.content,                  // reusing existing icon set to avoid design changes
    bullets: [
    ],
  },
  {
    key: "well",
    title: "Well-being Dashboards",
    accent: "text-rose-600",          // you can keep your old accent if you prefer
    icon: I.content,                  // reusing existing icon set to avoid design changes
    bullets: [
    ],
  },
  {
    key: "balance",
    title: "Balance Builder",
    accent: "text-rose-600",          // you can keep your old accent if you prefer
    icon: I.content,                  // reusing existing icon set to avoid design changes
    bullets: [
    ],
  },
  {
    key: "programs",
    title: "Resilience Programs",
    accent: "text-rose-600",          // you can keep your old accent if you prefer
    icon: I.content,                  // reusing existing icon set to avoid design changes
    bullets: [
    ],
  },
  {
    key: "recognition",
    title: "Recognition for Healthy Habits",
    accent: "text-rose-600",          // you can keep your old accent if you prefer
    icon: I.content,                  // reusing existing icon set to avoid design changes
    bullets: [
    ],
  },
  {
    key: "rewards",
    title: "Rewards",
    accent: "text-rose-600",          // you can keep your old accent if you prefer
    icon: I.content,                  // reusing existing icon set to avoid design changes
    bullets: [
    ],
  },

];

/* ===== Tabs mapping (which cards show under each inner tab) ===== */
const INNER_TABS = {
  main: ["ERP", "LMS", "Emmotional Well-being"],
  extra: ["GPS Bus Tracking", "Canteen Management", "CCTV-based Attendence", "Bookstore Management", "Hostel Management"],
};

const TAB_TO_KEYS = {
  // MAIN
  ERP: ["school_administration", "student", "teacher", "parent"], // core operational modules (you can add more keys here)
  LMS: ["everyday", "mobile"],
  "Emmotional Well-being": ["daily", "early", "well", "balance", "programs", "recognition", "rewards"],
  "Digital Content": ["digital"],
  Website: ["website"],

  // EXTRA
  // "GPS Bus Tracking": ["exam"],
  // "Canteen Management": ["hr"],
  // "CCTV-based Attendence": ["fee"],
  // "Bookstore Management": ["fee"],
  // "Hostel Management": ["fee"],
};

/* ===== Modal (kept) ===== */
function useOnKeyDown(handler) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") handler(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handler]);
}

function Modal({ open, onClose, title, items, icon, accent = "" }) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (open && cardRef.current) {
      const btn = cardRef.current.querySelector("[data-close]");
      btn?.focus();
    }
  }, [open]);
  useOnKeyDown(() => open && onClose());

  return (
    <AnimatePresence>
      <Helmet>
        <title>Modules Page – Electronic Educare | Explore our modules</title>
        <meta
          name="description"
          content="Learn about Electronic Educare (EEC) – our story, our mission to transform education, and our vision to empower schools with AI-powered, holistic learning technology."
        />
        <meta name="keywords" content="About EEC, Electronic Educare, School LMS, School ERP, AI Learning, Vision Mission" />
        <meta property="og:title" content="Modules Page – Electronic Educare | Explore our modules" />
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
          aria-modal="true"
          role="dialog"
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" onClick={onClose} />
          <motion.div
            {...pop}
            ref={cardRef}
            className="relative mx-auto mt-24 w-[92%] max-w-2xl rounded-3xl border border-amber-200/70 bg-white/95 p-5 md:p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <header className="flex items-start gap-3">
              <div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 border border-amber-200 ${accent}`} aria-hidden="true">
                {icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-extrabold tracking-tight">{title}</h3>
                <p className="text-sm text-slate-600">Detailed features available in this module</p>
              </div>
              <button
                data-close
                onClick={onClose}
                className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100"
                aria-label="Close"
              >
                ✕
              </button>
            </header>

            <div className="mt-4 grid gap-2">
              {items?.map((t, i) => (
                <div key={i} className="flex gap-2 text-[15px] text-slate-800">
                  <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ===== Page ===== */
export default function Modules() {
  const [active, setActive] = useState(null);

  // top-level tab
  const [group, setGroup] = useState("main"); // "main" | "extra"
  // inner tab per group
  const [innerTab, setInnerTab] = useState(INNER_TABS["main"][0]); // default to first inner tab

  const selected = useMemo(() => MODULES.find((m) => m.key === active), [active]);

  const visibleKeys = TAB_TO_KEYS[innerTab] || [];
  const visibleModules = useMemo(
    () => MODULES.filter((m) => visibleKeys.includes(m.key)),
    [visibleKeys]
  );

  return (
    <div className="min-h-screen w-full">
      {/* ===== PARALLAX HERO ===== */}
      <section className="relative h-[54vh] md:h-[66vh]">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(${HERO_IMAGE})`,
            backgroundAttachment: "fixed",
          }}
        />
        {/* gentle vignette & white fade to keep it light */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#120f08]/20 via-white/10 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full w-full items-center px-6">
          <motion.div {...fadeUp(0)} className="w-full">
            <h1
              className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-white antialiased text-right w-full"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.35)" }}
            >
              Our Modules
            </h1>
          </motion.div>

        </div>
        <div className="pointer-events-none absolute -bottom-1 left-0 right-0 h-10 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* ===== TAB NAVIGATION ===== */}
      <section className="mx-auto max-w-7xl px-6 pt-8 md:pt-10">
        {/* Main / Extra */}
        <div className="flex items-center justify-center gap-2">
          {["main", "extra"].map((g) => {
            const isActive = g === group;
            return (
              <button
                key={g}
                onClick={() => {
                  setGroup(g);
                  setInnerTab(INNER_TABS[g][0]); // reset inner tab when switching group
                }}
                className={`rounded-full px-4 py-2 text-sm font-semibold border transition
                  ${isActive ? "bg-amber-400 text-slate-900 border-amber-300" : "bg-white/80 text-slate-700 border-amber-200 hover:bg-amber-50"}`}
              >
                {g === "main" ? "Main" : "Add-On Features"}
              </button>
            );
          })}
        </div>

        {/* Inner Tabs */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {INNER_TABS[group].map((tab) => {
            const activeInner = tab === innerTab;
            return (
              <button
                key={tab}
                onClick={() => setInnerTab(tab)}
                className={`rounded-xl px-3.5 py-2 text-sm font-medium border transition
                  ${activeInner ? "bg-amber-400 text-slate-900 border-amber-300 shadow-sm" : "bg-white/70 text-slate-700 border-amber-200 hover:bg-white"}`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </section>

      {/* ===== CARDS (UNCHANGED DESIGN) ===== */}
      <section className="mx-auto max-w-7xl px-6 py-8 md:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {visibleModules.map((m, i) => (
            <motion.button
              key={m.key}
              {...fadeUp(0.05 * (i + 1))}
              onClick={() => setActive(m.key)}
              className="
                group relative isolate overflow-hidden text-left rounded-[28px]
                bg-white/85 backdrop-blur
                shadow-[0_8px_26px_rgba(17,24,39,0.10)]
                ring-1 ring-amber-200/70
                hover:shadow-[0_14px_36px_rgba(17,24,39,0.16)]
                transition-all hover:-translate-y-0.5 focus:outline-none
              "
            >
              {/* Glow rail */}
              <div
                className="pointer-events-none absolute -inset-x-2 -inset-y-1 rounded-[32px] opacity-0 blur-xl transition group-hover:opacity-100"
                style={{ background: "linear-gradient(90deg, rgba(251,191,36,.25), rgba(99,102,241,.25))" }}
              />
              {/* Ribbon inner with angled stripe */}
              <div className="relative rounded-[26px] bg-white/90">
                <div className="pointer-events-none absolute -left-20 top-0 h-full w-40 -skew-x-12 bg-gradient-to-b from-amber-600/40 to-indigo-200/40" />

                <div className="relative z-10 flex flex-col gap-4 px-6 py-6">
                  {/* Icon medallion */}
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-amber-600 to-yellow-500 text-white shadow-lg shadow-amber-500/30 ring-4 ring-white/70 grid place-items-center">
                    {m.icon}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-extrabold tracking-tight text-slate-900">
                      {m.title}
                    </h3>
                    <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                      {m.bullets.slice(0, 3).map((b, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-amber-400" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer line + CTA hint */}
                  <div className="mt-4 flex items-center justify-end w-full">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 group-hover:translate-x-0.5 transition-transform">
                      View details
                      <svg viewBox="0 0 24 24" className="h-4 w-4">
                        <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* ===== Modal ===== */}
      <Modal
        open={!!active}
        onClose={() => setActive(null)}
        title={selected?.title}
        items={selected?.bullets || []}
        icon={selected?.icon}
        accent={selected?.accent}
      />
    </div>
  );
}
