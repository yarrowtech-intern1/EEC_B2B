// src/pages/Features.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBook, FaUserGraduate, FaBrain, FaBusAlt, FaClipboardList, FaUsersCog, FaMoneyBillWave,
  FaCheckCircle, FaChartLine, FaTasks, FaChalkboardTeacher, FaAward, FaTrophy, FaRegLightbulb,
  FaClock, FaShieldAlt, FaSatelliteDish, FaRoute, FaFileAlt, FaListAlt, FaBullseye, FaBell,
  FaFileSignature, FaUserShield, FaIdCard, FaMoneyCheckAlt, FaReceipt, FaHistory, FaBellSlash
} from "react-icons/fa";
import { FaFileArrowDown } from "react-icons/fa6";
import { IMAGES } from "../data/images";

/** ----------------------------------------------------------------
 * DATA (unchanged): sections, images & features
 * ---------------------------------------------------------------- */
const categories = [
  {
    key: "academics",
    title: "Academics Management",
    tagline: "Revolutionise Your School With CampusCare 10X",
    image: IMAGES.academics,
    features: [
      { title: "Personalized Learning Paths", desc: "EEC offers tailored learning experiences, adapting to each student’s pace and abilities.", icon: <FaBullseye className="text-amber-600 text-xl" /> },
      { title: "Progress Tracking", desc: "Monitor progress via real-time analytics for timely interventions and goal adjustments.", icon: <FaAward className="text-emerald-600 text-xl" /> },
      { title: "Lesson & Resource Management", desc: "Upload and organize lessons, worksheets, videos, and assessments seamlessly.", icon: <FaFileArrowDown className="text-sky-600 text-xl" /> },
      { title: "Interactive Assessments", desc: "Quizzes and self-assessments unlock content and drive continuous learning.", icon: <FaListAlt className="text-indigo-600 text-xl" /> },
    ],
  },
  {
    key: "students",
    title: "Student Management",
    tagline: "Elevating Productivity, Efficiency, and Reputation",
    image: IMAGES.students,
    features: [
      { title: "Personalized Dashboard", desc: "Track progress, achievements, and upcoming lessons in one place.", icon: <FaUserGraduate className="text-indigo-600 text-xl" /> },
      { title: "Progress Monitoring", desc: "Real-time analytics highlight strengths and improvement areas.", icon: <FaChartLine className="text-pink-600 text-xl" /> },
      { title: "Progress Reward System", desc: "Gamified points and stages keep learners motivated.", icon: <FaTrophy className="text-amber-600 text-xl" /> },
      { title: "Learning Analytics", desc: "Insightful data patterns inform next best actions.", icon: <FaRegLightbulb className="text-emerald-600 text-xl" /> },
    ],
  },
  {
    key: "ai",
    title: "AI & ML Features",
    tagline: "Instant Insights. Smarter Outcomes.",
    image: IMAGES.ai,
    features: [
      { title: "Tailored Learning Journeys", desc: "AI adapts paths to performance, interests, and pace.", icon: <FaBrain className="text-amber-700 text-xl" /> },
      { title: "Smart Progress Insights", desc: "ML surfaces recommendations for targeted improvements.", icon: <FaFileAlt className="text-amber-600 text-xl" /> },
      { title: "Predictive Performance Alerts", desc: "Early signals help you intervene faster.", icon: <FaBell className="text-rose-600 text-xl" /> },
      { title: "Instant Automated Feedback", desc: "Immediate, personalized grading and feedback.", icon: <FaFileSignature className="text-indigo-600 text-xl" /> },
    ],
  },
  {
    key: "library",
    title: "E-Library & Transportation",
    tagline: "Reliable. Safe. Connected.",
    image: IMAGES.library,
    features: [
      { title: "Digital E-Library Access", desc: "Anytime e-books and resources for flexible learning.", icon: <FaBook className="text-orange-600 text-xl" /> },
      { title: "Real-Time Fleet Tracking", desc: "Live visibility across vehicles and routes.", icon: <FaSatelliteDish className="text-sky-600 text-xl" /> },
      { title: "Enhanced Safety Features", desc: "Vehicle health and driver behavior monitoring.", icon: <FaShieldAlt className="text-emerald-600 text-xl" /> },
      { title: "GPS-Based Student Tracking", desc: "Peace of mind from pick-up to drop-off.", icon: <FaRoute className="text-indigo-600 text-xl" /> },
    ],
  },
  {
    key: "exam",
    title: "Exam Management",
    tagline: "Plan. Conduct. Analyse.",
    image: IMAGES.exam,
    features: [
      { title: "Seamless Exam Scheduling", desc: "Smart timetables and automated reminders.", icon: <FaClipboardList className="text-amber-700 text-xl" /> },
      { title: "Secure Online Assessments", desc: "Flexible formats with academic integrity.", icon: <FaTasks className="text-red-600 text-xl" /> },
      { title: "Instant Result Generation", desc: "Immediate feedback for faster outcomes.", icon: <FaCheckCircle className="text-emerald-600 text-xl" /> },
      { title: "Performance Analytics", desc: "Deep dive into strengths and gaps.", icon: <FaChartLine className="text-indigo-600 text-xl" /> },
    ],
  },
  {
    key: "hr",
    title: "HR Management",
    tagline: "People. Policies. Performance.",
    image: IMAGES.hr,
    features: [
      { title: "Attendance Monitoring", desc: "Automated tracking with notifications.", icon: <FaIdCard className="text-rose-600 text-xl" /> },
      { title: "Leave Management", desc: "Streamlined requests and approvals.", icon: <FaClock className="text-amber-600 text-xl" /> },
      { title: "HR Insights", desc: "KPIs across performance and presence.", icon: <FaUserShield className="text-emerald-600 text-xl" /> },
      { title: "Employee Records", desc: "Centralized profiles and history.", icon: <FaFileAlt className="text-indigo-600 text-xl" /> },
    ],
  },
  {
    key: "finance",
    title: "Finance Management",
    tagline: "Collect. Reconcile. Report.",
    image: IMAGES.finance,
    features: [
      { title: "Fee Payment Management", desc: "Multi-gateway, frictionless collections.", icon: <FaMoneyCheckAlt className="text-emerald-600 text-xl" /> },
      { title: "Financial Due Reports", desc: "Live visibility on pending dues.", icon: <FaReceipt className="text-sky-600 text-xl" /> },
      { title: "Payment History Reports", desc: "Transparent historical statements.", icon: <FaHistory className="text-amber-600 text-xl" /> },
      { title: "Payment Reminders", desc: "Automated nudges for on-time payments.", icon: <FaBellSlash className="text-rose-600 text-xl" /> },
    ],
  },
];

/** Small helper for tab bar “chip” */
const Tab = ({ label, active, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={[
      "rounded-full px-4 py-1.5 text-sm font-medium transition",
      active
        ? "bg-blue-600 text-white shadow"
        : "bg-white text-slate-700 hover:bg-slate-100",
    ].join(" ")}
    role="tab"
    aria-selected={active}
  >
    {label}
  </button>
);

export default function Features() {
  const [active, setActive] = useState(categories[0].key);
  const activeCat = useMemo(
    () => categories.find((c) => c.key === active) || categories[0],
    [active]
  );

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative text-center pt-12 md:pt-16 text-4xl md:text-5xl font-extrabold text-slate-900"
      >
        EEC Helps Everyone To Perform
        <span className="block text-base md:text-lg font-semibold mt-2 text-amber-600">
          Reaching Better Results
        </span>
      </motion.h2>

      {/* Tabs */}
      <div className="relative mx-auto max-w-5xl mt-8 flex items-center justify-center gap-2 flex-wrap">
        {categories.map((c) => (
          <Tab
            key={c.key}
            label={
              c.key === "academics" ? "ERP"
                : c.key === "students" ? "LMS"
                  : c.key === "ai" ? "Digital Content"
                    : c.key === "library" ? "Website"
                      : c.title
            }
            active={active === c.key}
            onClick={() => setActive(c.key)}
          />
        ))}
      </div>

      {/* Card area */}
      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT: copy + bullet list with dotted separators */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCat.key}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="relative"
            >
              <div className="mb-2 inline-flex items-center gap-2">
                <span className="text-[11px] tracking-widest uppercase text-amber-600 font-semibold">
                  {activeCat.tagline || "ERP Excellence"}
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                {activeCat.title}
              </h3>

              {/* Feature rows */}
              <ul className="mt-6 divide-y divide-dotted divide-slate-200 border-t border-b border-dotted border-slate-200">
                {activeCat.features.map((f, i) => (
                  <li key={f.title} className="py-3 md:py-4">
                    <div className="flex items-start gap-3">
                      <div className="relative shrink-0 mt-1 flex items-center justify-center">
                        {/* ping animation */}
                        <span className="absolute inline-flex h-6 w-6 rounded-full bg-amber-400 opacity-75 animate-ping"></span>

                        {/* actual icon */}
                        <span className="relative text-amber-500">{f.icon}</span>
                      </div>

                      <div className="w-full">
                        <div className="flex items-center justify-between">
                          <p className="text-sm md:text-base font-semibold text-slate-800">
                            {f.title}
                          </p>
                          {/* subtle progress bar like screenshot */}
                          {/* <span className="ml-4 hidden md:block h-1 w-40 rounded bg-slate-200 relative overflow-hidden">
                            <motion.i
                              className="absolute left-0 top-0 h-full bg-blue-600"
                              initial={{ width: "0%" }}
                              whileInView={{ width: ["45%", "60%", "55%"] }}
                              transition={{ duration: 1.2, delay: i * 0.05 }}
                              style={{ display: "block" }}
                            />
                          </span> */}
                        </div>
                        <p className="text-xs md:text-sm text-slate-600 mt-1">
                          {f.desc}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* CTA style pill to echo the screenshot’s “ERP Excellence” */}
              {/* <div className="mt-5">
                <button
                  type="button"
                  className="rounded-full bg-blue-600 text-white text-sm font-medium px-4 py-2 shadow hover:bg-blue-700 transition"
                >
                  ERP Excellence
                </button>
              </div> */}
            </motion.div>
          </AnimatePresence>

          {/* RIGHT: big illustration */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCat.image}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.35 }}
              className="relative"
            >
              <div className="absolute -inset-6 -z-10 " />
              <img
                src={activeCat.image}
                alt={activeCat.title}
                className="w-full max-w-[720px] mx-auto object-contain"
                loading="lazy"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* subtle bottom spacing */}
      <div className="h-12 md:h-20" />

      {/* Local styles for dotted divider on Safari fallback (optional) */}
      <style>{`
        /* Nothing heavy here; Tailwind dotted borders do most of the work */
      `}</style>
    </section>
  );
}
