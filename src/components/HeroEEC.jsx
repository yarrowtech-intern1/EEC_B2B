import React from "react";
import { Link } from "react-router-dom"; // remove if not using RR
import heroCenter from "/get_it_now.png"; // put in /public or /src/assets and update path if needed

export default function HeroEEC({
  title = "Power Your School To Build A",
  titleEmphasis = "Brighter Future",
  subBlue = "Bring and Deploy",
  subOrange = "Proven and Powerful Solutions",
  subTail = "With a High Lifetime Value",
  onDemoClick,
  onSalesClick,
}) {
  return (
    <section className="relative overflow-hidden">
      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full blur-3xl bg-blue-500/10 dark:bg-blue-400/10" />
        <div className="absolute bottom-0 right-1/4 h-64 w-80 rounded-full blur-3xl bg-amber-500/10 dark:bg-amber-400/10" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pb-20">
        {/* copy */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            {title}{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 pb-4">
              {titleEmphasis}
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-700">
            <span className="font-semibold text-blue-700">{subBlue}</span>{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-400">
              {subOrange}
            </span>{" "}
            <span className="font-medium">{subTail}</span>
          </p>

          {/* CTAs */}
          <div className="mt-8 flex items-center justify-center gap-3 sm:gap-4">
            {/* {onDemoClick ? (
              <button
                onClick={onDemoClick}
                className="rounded px-5 sm:px-6 py-2.5 text-sm sm:text-base font-semibold text-slate-800 bg-amber-400 hover:bg-amber-500 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-600/20"
              >
                Contact Us
              </button>
            ) : (
              <Link
                to="/book-demo"
                className="rounded px-5 sm:px-6 py-2.5 text-sm sm:text-base font-semibold text-slate-800 bg-amber-400 hover:bg-amber-500 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-600/20"
              >
                Contact Us
              </Link>
            )} */}
            <a
              href="mailto:info@electroniceducare.com?subject=Inquiry%20from%20Website"
              className="rounded px-5 sm:px-6 py-2.5 text-sm sm:text-base font-semibold text-slate-800 bg-amber-400 hover:bg-amber-500 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-600/20"
            >
              Contact Us
            </a>

            {/* <span className="text-slate-400 hidden sm:inline">or</span> */}

            {/* {onSalesClick ? (
              <button
                onClick={onSalesClick}
                className="rounded-xl px-5 sm:px-6 py-2.5 text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-900 bg-amber-400 hover:bg-amber-300 focus:outline-none focus:ring-4 focus:ring-amber-200 shadow-lg shadow-amber-500/20"
              >
                Contact 
              </button>
            ) : (
              <Link
                to="/contact-sales"
                className="rounded-xl px-5 sm:px-6 py-2.5 text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-900 bg-amber-400 hover:bg-amber-300 focus:outline-none focus:ring-4 focus:ring-amber-200 shadow-lg shadow-amber-500/20"
              >
                Contact Sales
              </Link>
            )} */}
          </div>
        </div>

        {/* single centered figure */}
        <div className="mt-12 lg:mt-16">
          <figure className="glass-card max-w-3xl mx-auto">
            <img
              src={heroCenter}
              alt="Modern edu team working with laptops"
              className="mx-auto w-full max-w-[720px] max-h-[22rem] object-contain"
              loading="eager"
              width="720"
              height="440"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
