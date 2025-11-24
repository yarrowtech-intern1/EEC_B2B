import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaHome } from "react-icons/fa";

export default function TryOuts() {
  const navigate = useNavigate();

  return (
    <section className="min-h-[90vh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-6 w-full max-w-3xl p-8 md:p-10 text-center"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-700 text-xs font-semibold">
          <span>Notice</span>
          {/* <span className="w-1 h-1 rounded-full bg-amber-400" /> */}
          {/* <span>Service Unavailable</span> */}
        </div>

        {/* Big Message */}
        <h1 className="mt-6 text-[48px] leading-none md:text-[50px] font-extrabold tracking-tight text-slate-900">
          We are <span className="text-amber-500"> Not Available </span> at your Location currently
        </h1>

        {/* <p className="mt-4 text-slate-700 max-w-xl mx-auto">
          We are currently not available at your location.  
          Please check again later.
        </p> */}

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded bg-white border border-amber-200 hover:bg-amber-50 transition text-slate-900"
          >
            <FaArrowLeft className="opacity-80" />
            Go Back
          </button>

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded bg-amber-500 hover:bg-amber-600 text-white transition shadow"
          >
            <FaHome />
            Home
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
