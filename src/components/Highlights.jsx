import React from "react";

const Highlights = () => {
  const highlights = [
    {
      title: "Personalized Learning Paths",
      desc: "Adapts to each student’s pace and abilities.",
      icon: "📘",
    },
    {
      title: "Progress Tracking",
      desc: "Monitor performance with real-time reports.",
      icon: "📊",
    },
    {
      title: "Lesson & Resource Management",
      desc: "Upload and share lessons, videos, and resources.",
      icon: "📚",
    },
    {
      title: "Interactive Assessments",
      desc: "Engage students with quizzes and gamified learning.",
      icon: "📝",
    },
  ];

  return (
    <section className="py-20 px-6 text-center bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
        Our Features
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Explore the key features that make EEC a complete educational solution.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {highlights.map((h, i) => (
          <div
            key={i}
            className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="text-4xl mb-3">{h.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{h.title}</h3>
            <p className="text-sm text-gray-600">{h.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
