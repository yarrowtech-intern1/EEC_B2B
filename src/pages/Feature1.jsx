import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaBook,
  FaUserGraduate,
  FaBrain,
  FaBusAlt,
  FaClipboardList,
  FaUsersCog,
  FaMoneyBillWave,
  FaCheckCircle,
  FaChartLine,
  FaTasks,
  FaChalkboardTeacher,
} from "react-icons/fa";

const categories = [
  {
    key: "academics",
    title: "Academics Management",
    icon: <FaBook className="text-2xl text-green-600" />,
    features: [
      {
        title: "Personalized Learning Paths",
        desc: "Tailored learning experiences for each student’s pace and ability.",
        icon: <FaTasks className="text-blue-500 text-xl" />,
      },
      {
        title: "Progress Tracking",
        desc: "Monitor performance and generate insights for timely interventions.",
        icon: <FaChartLine className="text-green-500 text-xl" />,
      },
    ],
  },
  {
    key: "students",
    title: "Student Management",
    icon: <FaUserGraduate className="text-2xl text-blue-600" />,
    features: [
      { title: "Attendance", desc: "Track student attendance in real-time.", icon: <FaCheckCircle className="text-indigo-500 text-xl" /> },
      { title: "Profiles", desc: "Centralized student data and academic history.", icon: <FaChalkboardTeacher className="text-pink-500 text-xl" /> },
    ],
  },
  {
    key: "ai",
    title: "AI & ML Features",
    icon: <FaBrain className="text-2xl text-purple-600" />,
    features: [
      { title: "AI Insights", desc: "Data-driven recommendations for learning.", icon: <FaBrain className="text-purple-500 text-xl" /> },
      { title: "Predictive Analysis", desc: "Forecast performance trends.", icon: <FaChartLine className="text-yellow-500 text-xl" /> },
    ],
  },
  {
    key: "library",
    title: "E-Library & Transportation",
    icon: <FaBusAlt className="text-2xl text-orange-600" />,
    features: [
      { title: "Digital Resources", desc: "Access e-books and study materials.", icon: <FaBook className="text-orange-500 text-xl" /> },
      { title: "Transport Tracking", desc: "Real-time bus and route tracking.", icon: <FaBusAlt className="text-blue-500 text-xl" /> },
    ],
  },
  {
    key: "exam",
    title: "Exam Management",
    icon: <FaClipboardList className="text-2xl text-yellow-600" />,
    features: [
      { title: "Exam Scheduling", desc: "Organize and automate exam schedules.", icon: <FaClipboardList className="text-yellow-500 text-xl" /> },
      { title: "Online Assessments", desc: "Conduct digital tests securely.", icon: <FaTasks className="text-red-500 text-xl" /> },
    ],
  },
  {
    key: "hr",
    title: "HR Management",
    icon: <FaUsersCog className="text-2xl text-red-600" />,
    features: [
      { title: "Staff Profiles", desc: "Manage teacher and staff information.", icon: <FaUsersCog className="text-red-500 text-xl" /> },
      { title: "Payroll", desc: "Automated salary and benefits processing.", icon: <FaMoneyBillWave className="text-green-500 text-xl" /> },
    ],
  },
  {
    key: "finance",
    title: "Finance Management",
    icon: <FaMoneyBillWave className="text-2xl text-green-600" />,
    features: [
      { title: "Fee Collection", desc: "Seamless online fee payments.", icon: <FaMoneyBillWave className="text-emerald-500 text-xl" /> },
      { title: "Expense Reports", desc: "Track and optimize expenses.", icon: <FaChartLine className="text-blue-500 text-xl" /> },
    ],
  },
];

const Features = () => {
  const [active, setActive] = useState("academics");
  const activeCategory = categories.find((c) => c.key === active);

  return (
    <section className="relative py-20 px-6 bg-white overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-12"
      >
        Our Features
      </motion.h2>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        {categories.map((cat) => (
          <motion.button
            key={cat.key}
            onClick={() => setActive(cat.key)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-3 px-6 py-3 rounded-full shadow-md transition-all duration-300 ${
              active === cat.key
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat.icon}
            <span className="font-medium">{cat.title}</span>
          </motion.button>
        ))}
      </div>

      {/* Features List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {activeCategory.features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative p-6 rounded-3xl shadow-xl bg-white/80 backdrop-blur-xl border border-gray-200 hover:shadow-2xl transition group"
          >
            {/* Gradient Glow Corners */}
            <div className="absolute -top-5 -left-5 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition" />
            <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-3">{f.icon}</div>
              <h3 className="font-bold text-lg text-blue-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-700">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
