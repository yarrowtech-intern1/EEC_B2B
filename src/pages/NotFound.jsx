import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaHome, FaSearch } from "react-icons/fa";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="min-h-[90vh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-6 w-full max-w-3xl p-8 md:p-10  text-center"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-700 text-xs font-semibold">
          <span>Oops!</span>
          <span className="w-1 h-1 rounded-full bg-amber-400" />
          <span>Page not found</span>
        </div>

        {/* Big 404 */}
        <h1 className="mt-6 text-[64px] leading-none md:text-[96px] font-extrabold tracking-tight text-slate-900">
          4<span className="text-amber-500 drop-shadow">0</span>4
        </h1>

        <p className="mt-4 text-slate-700 max-w-xl mx-auto">
          The page you’re looking for doesn’t exist or has moved.
          Let’s get you back on track.
        </p>

        {/* Quick actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded bg-white border border-amber-200 hover:bg-amber-50 transition text-slate-900"
          >
            <FaArrowLeft className="opacity-80" />
            Go back
          </button>

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded bg-amber-500 hover:bg-amber-600 text-white transition shadow"
          >
            <FaHome />
            Home
          </Link>

          {/* <Link
            to="/search"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white border border-amber-200 hover:bg-amber-50 transition text-slate-900"
          >
            <FaSearch className="opacity-80" />
            Search
          </Link> */}
        </div>

        {/* Helpful links */}
        <div className="mt-6 text-sm text-slate-600">
          Or visit{" "}
          <Link to="/features" className="text-amber-700 underline-offset-4 hover:underline">
            Features
          </Link>{" "}
          •{" "}
          <Link to="/modules" className="text-amber-700 underline-offset-4 hover:underline">
            Modules
          </Link>{" "}
          {/* •{" "}
          <Link to="/contact" className="text-amber-700 underline-offset-4 hover:underline">
            Contact
          </Link> */}
        </div>
      </motion.div>
    </section>
  );
}
