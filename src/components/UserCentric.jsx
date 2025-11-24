import React from "react";
import { motion } from "framer-motion";

// Use your uploaded images
import speedImg from "/Speed Optimized for All Users.jpg";
import webImg from "/Web-Based Convenience.jpg";
import uiImg from "/Intuitive Interface.jpg";

const userCentricFeatures = [
  {
    title: "Speed Optimized for All Users",
    desc: "At EEC, we understand that internet speeds can vary. To ensure a smooth experience, we’ve made our app lightweight and optimized for fast loading, so you can access content quickly, even with slower internet connections.",
    img: speedImg,
  },
  {
    title: "Web-Based Convenience",
    desc: "EEC is fully web-based, requiring no software installation. Access the platform easily from any device with an internet connection, offering flexibility and convenience for students, teachers, and parents, wherever you are.",
    img: webImg,
  },
  {
    title: "Intuitive Interface",
    desc: "EEC offers an easy-to-use platform with a simple, intuitive interface. Whether you’re a student, teacher, or parent, the navigation is straightforward, ensuring everyone can access the features effortlessly. No prior technical knowledge is required, making it ideal for all age groups and user experience levels.",
    img: uiImg,
  },
];

const UserCentric = () => {
  return (
    <section className="relative py-20 ">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-slate-900 mb-16"
      >
        User-Centric Design & Seamless Access
      </motion.h2>

      <div className="grid gap-12 md:grid-cols-3 max-w-7xl mx-auto px-6">
        {userCentricFeatures.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-[1.04] transition"
          >
            {/* Image Section */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={feature.img}
                alt={feature.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
              />
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col items-center text-center space-y-3">
              <h3 className="text-xl font-bold text-slate-900">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>

            {/* Gradient overlay for hover effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-amber-200/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UserCentric;
