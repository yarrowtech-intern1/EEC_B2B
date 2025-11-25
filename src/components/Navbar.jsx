// Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const LINKS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Features", path: "/features" },
  // { name: "Benefits", path: "/benefits" },
  { name: "Modules", path: "/modules" },
  // { name: "Enquiry", path: "/enquiry" },
  { name: "Gallery", path: "/gallery" },
  { name: "Careers", path: "/careers" },
  { name: "Try Outs", path: "/try-outs" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const firstLinkRef = useRef(null);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : original || "";
    return () => (document.body.style.overflow = original || "");
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* soft glass nav with white/yellow theme */}
      <nav className="px-4 sm:px-6 py-3 backdrop-blur-xl bg-white/70 border-b border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          {/* Brand */}
          <Link to="/" className="flex flex-col justify-center items-center">
            <img src="/logo_new.png" alt="EEC Logo" className="h-12 w-auto ml-10 hover:scale-105 transition-all" />
            <span className="w-full font-extrabold text-xs text-center tracking-tight text-slate-900">
              <span className="text-yellow-400 w-full text-center tracking-wide pl-10">Electronic Educare</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            {LINKS.map((link) => {
              const active = location.pathname === link.path;
              return (
                <li key={link.path} className="relative group">
                  <Link
                    to={link.path}
                    className={`transition-colors duration-300 ${active ? "text-amber-700" : "text-slate-700 hover:text-slate-900"}`}
                  >
                    {link.name}
                  </Link>
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-tr from-yellow-200 via-yellow-400 to-yellow-600 transition-all duration-300 group-hover:w-full ${active ? "w-full" : ""}`}
                  />
                </li>
              );
            })}
          </ul>

          {/* CTA + Mobile Burger */}
          <div className="flex items-center gap-4">
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfazcYIEEoStrgJnXDHat2UJItsOU-MFicqIRw9LfrLLwEczg/viewform?usp=header"
              // className="hidden md:inline-block rounded bg-gradient-to-tr from-yellow-200 via-yellow-400 to-yellow-600 text-slate-900 px-4 py-2 font-semibold shadow hover:bg-amber-500 transition-all"
              className="hidden md:inline-block rounded bg-amber-400 text-slate-900 px-4 py-2 font-semibold shadow hover:bg-amber-300 transition-all"
            >
              Get a Demo
            </a>

            <a
              target="_blank"
              href="https://eec-tryout.vercel.app/"
              // className="hidden md:inline-block rounded bg-gradient-to-tr from-yellow-200 via-yellow-400 to-yellow-600 text-slate-900 px-4 py-2 font-semibold shadow hover:bg-amber-500 transition-all"
              className="hidden md:inline-block rounded hover:bg-amber-400 border border-amber-400 text-slate-900 px-4 py-2 font-semibold shadow hover:bg-amber-300 transition-all"
            >
              Explore
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-amber-200/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Open menu"
              aria-controls="mobile-menu"
              aria-expanded={open}
            >
              <svg width="26" height="26" fill="none" stroke="currentColor" className="text-slate-900">
                <path strokeWidth="2.5" strokeLinecap="round" d="M4 7h18M4 13h18M4 19h18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        className={`md:hidden fixed inset-0 bg-black/40 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Menu */}
      <aside
        id="mobile-menu"
        ref={panelRef}
        className={`md:hidden fixed right-0 top-0 h-[100dvh] w-80 max-w-[85%] bg-white text-slate-900 shadow-2xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b bg-amber-50">
          <div className="flex items-center gap-2">
            <img src="/logo_new.png" alt="EEC Logo" className="h-8 w-auto" />
            {/* <span className="font-bold text-lg text-slate-900">EEC</span> */}
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-md p-2 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Close menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor">
              <path strokeWidth="2.5" strokeLinecap="round" d="M6 6l12 12M18 6l-12 12" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <nav className="px-3 py-5">
          <ul className="flex flex-col space-y-2">
            {LINKS.map((link, idx) => {
              const active = location.pathname === link.path;
              return (
                <li key={link.path}>
                  <Link
                    ref={idx === 0 ? firstLinkRef : null}
                    to={link.path}
                    className={`flex items-center justify-between px-3 py-3 rounded-lg text-base transition-colors ${
                      active ? "bg-amber-100 text-amber-800 font-semibold" : "hover:bg-slate-100 text-slate-800"
                    }`}
                  >
                    {link.name}
                    {active && <span className="ml-2 inline-block h-2 w-2 rounded-full bg-amber-600" />}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="mt-6 px-1">
            <a
              // target="_parent"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfazcYIEEoStrgJnXDHat2UJItsOU-MFicqIRw9LfrLLwEczg/viewform?usp=header"
              className="block w-full text-center rounded bg-amber-400 text-slate-900 py-2.5 font-semibold shadow hover:bg-amber-500 transition-all"
            >
              Get a Demo
            </a>
          </div>

          <div className="px-3 py-6 text-xs text-slate-500">
            © {new Date().getFullYear()} EEC. All rights reserved.
          </div>
        </nav>
      </aside>
    </header>
  );
}
