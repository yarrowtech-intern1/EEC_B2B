import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBrain, FaLaptopCode, FaChartLine, FaChartBar } from "react-icons/fa";
import eecLogo from "/service.jpg"; // keep in /public for best results

export default function WhyEEC() {
  const features = [
    { title: "LMS (Learning Management System)", desc: "Personalized study journeys for every class (1-12) with smart, adaptive content.", icon: <FaBrain className="text-3xl" /> },
    { title: "AI & ML Intelligence", desc: "Tracks student progress, recommends what to study next, and highlights weak areas instantly.", icon: <FaLaptopCode className="text-3xl" /> },
    { title: "ERP System", desc: "End-to-end school operations - from fees and HR to health records.", icon: <FaChartLine className="text-3xl" /> },
    { title: "Well-being & Emotional Care", desc: "With mood tracking, stress alerts, and well-being dashboards, ensure every child feels supported, balanced, and emotionally strong.", icon: <FaChartBar className="text-3xl" /> },
  ];

  const stats = [
    { value: "25+", label: "Successful Years" },
    { value: "2000+", label: "Schools" },
    { value: "4", label: "Products" },
    { value: "2M", label: "App Downloads" },
    { value: "28", label: "States" },
    { value: "400+", label: "Staff" },
  ];

  // track which cards are flipped (index -> boolean)
  const [flipped, setFlipped] = useState({});

  const toggleFlip = (idx) => {
    setFlipped((f) => ({ ...f, [idx]: !f[idx] }));
  };

  return (
    <section
      className="
        relative py-20 px-6
        bg-cover bg-center
        md:bg-fixed               /* parallax effect on md+ for better mobile perf */
      "
      style={{ backgroundImage: `url(${eecLogo})` }}
      aria-label="Why EEC section with background image"
    >
      {/* Dark overlay + subtle gradient for better text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-black/20"></div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-black/50 via-black/40 to-transparent"></div>

      {/* Right-side content */}
      <div className="relative max-w-7xl mx-auto flex justify-end">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2 space-y-6 text-white"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Why <span className="text-amber-300">EEC?</span>
          </h2>

          <p className="text-lg text-white/90">
            The First Choice for <strong>AI-Powered ERP &amp; LMS Solutions</strong> in Education.
            EEC transforms institutions from <span className="font-semibold text-amber-200">good to the best</span>.
          </p>

          {/* Features (glass cards) */}
          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            {features.map((f, i) => {
              const isFlipped = !!flipped[i];
              return (
                <div
                  key={i}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isFlipped}
                  onClick={() => toggleFlip(i)}
                  onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggleFlip(i)}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/10 backdrop-blur border border-white/10 cursor-pointer select-none isolate overflow-hidden"
                  style={{ perspective: "1000px" }}
                >
                  {/* 3D flip wrapper (this transforms) */}
                  <div
                    className="relative w-full transform-gpu will-change-transform"
                    style={{
                      transformStyle: "preserve-3d",
                      transition: "transform 600ms cubic-bezier(.2,.85,.25,1)",
                      transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                      // ⬇ responsive height so text has room on small screens
                      minHeight: "clamp(120px, 160px, 200px)",
                      // minHeight: "170px",
                    }}
                  >
                    {/* FRONT */}
                    <div
                      className="absolute inset-0 flex items-start gap-3"
                      style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
                    >
                      <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-amber-300">
                        {f.icon}
                      </div>
                      <div className="pr-2">
                        <h3 className="font-semibold text-sm sm:text-base leading-snug break-words">
                          {f.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-white/60 mt-1">Click to see details</p>
                      </div>
                    </div>

                    {/* BACK */}
                    <div
                      className="absolute inset-0 flex items-start gap-3"
                      style={{ transform: "rotateY(180deg) translateZ(0)", backfaceVisibility: "hidden" }}
                    >
                      <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-amber-300">
                        {f.icon}
                      </div>
                      <div className="pr-2 w-full overflow-auto">
                        <h3 className="font-semibold text-sm sm:text-base leading-snug break-words">
                          {f.title}
                        </h3>
                        {/* ⬇ tighter text + wrap to avoid overflow on tiny widths */}
                        <p className="text-[13px] sm:text-sm text-white/80 leading-snug break-words [overflow-wrap:anywhere]">
                          {f.desc}
                        </p>
                        <p className="text-[10px] sm:text-[11px] text-white/60 mt-1">Click to flip back</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats */}
          {/* <div className="mt-6 pt-6 grid grid-cols-2 sm:grid-cols-3 gap-6 text-center border-t border-white/20">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-xl md:text-2xl font-bold text-amber-300">{s.value}</p>
                <p className="text-sm text-white/85">{s.label}</p>
              </div>
            ))}
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
