// src/components/Footer.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaPhone, FaFacebookF } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

export default function Footer() {
  // scroll-to-top visibility (you kept the FAB commented out; this is harmless to keep)
  useEffect(() => {
    const btn = document.getElementById("eec-top-btn");
    const onScroll = () => {
      if (!btn) return;
      if (window.scrollY > 240) btn.classList.remove("opacity-0", "pointer-events-none");
      else btn.classList.add("opacity-0", "pointer-events-none");
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 text-slate-800 mb-8">
      {/* Warm rounded band (no blue) */}
      <div className="mx-3 md:mx-6 lg:mx-10 rounded-3xl bg-amber-100/80">
        {/* Raised contact+map card */}
        <div className="relative -top-10 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden shadow-xl">
            {/* Left: contact panel (amber gradient) */}
            <div className="bg-gradient-to-b from-amber-300 to-amber-400 text-slate-800 p-8 md:p-10">
              <h3 className="text-lg font-semibold">Get In Touch With Us</h3>
              <div className="mt-2 h-0.5 w-12 bg-black/70 rounded" />

              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-black/95">
                    <FaPhone />
                  </div>
                  <div className="text-sm leading-6">
                    <p className="font-semibold">Phone Number</p>
                    <p className="opacity-95">Contact: +91-9830590929</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-black/95">
                    <FaEnvelope />
                  </div>
                  <div className="text-sm leading-6">
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:eec@electroniceducare.com"
                      className="opacity-95 hover:opacity-100 underline underline-offset-4"
                    >
                      eec@electroniceducare.com
                    </a>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-sm font-semibold mb-2">Follow Us:</p>
                  <div className="flex items-center gap-3 text-base">
                    {/* <a
                      href="#"
                      aria-label="Facebook"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 transition"
                    >
                      <FaFacebookF />
                    </a> */}
                    <a
                      target="_blank"
                      href="https://www.instagram.com/its_eec_?igsh=djllcXR4dW16NWty"
                      aria-label="Instagram"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 transition"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/electroniceducare-eec-413ba6328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      aria-label="LinkedIn"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 transition"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: map/illustration */}
            <div className="bg-white">
              <iframe
                title="EEC Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.017692149047!2d88.348228!3d22.568716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a7b4b0f15b%3A0x4a0d4e2c0f8c1e8!2s19-B%2C%20Jawaharlal%20Nehru%20Rd%2C%20Maidan%2C%20New%20Market%20Area%2C%20Dharmatala%2C%20Taltala%2C%20Kolkata%2C%20West%20Bengal%20700087!5e0!3m2!1sen!2sin!4v1700000000000"
                loading="lazy"
                className="h-full w-full min-h-[280px]"
              />
            </div>
          </div>
        </div>

        {/* Links + logo row */}
        <div className="mx-auto max-w-6xl px-6 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
            {/* Columns */}
            <div className="md:col-span-3">
              <h4 className="text-slate-900 font-semibold">Links</h4>
              <div className="mt-2 h-0.5 w-10 bg-amber-300 rounded" />
              <ul className="mt-3 text-[13px] leading-6 text-slate-700 space-y-1">
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/about">About Us</Link></li>
                <li> <Link to="/gallery">Gallery</Link></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-slate-900 font-semibold">Important Links</h4>
              <div className="mt-2 h-0.5 w-10 bg-amber-300 rounded" />
              <ul className="mt-3 text-[13px] leading-6 text-slate-700 space-y-1">
                <li><Link to="/features">Features</Link></li>
                <li><Link to="/modules">Modules</Link></li>
                <li><Link to="/careers">Careers</Link></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-slate-900 font-semibold">Contact Us</h4>
              <div className="mt-2 h-0.5 w-10 bg-amber-300 rounded" />
              <ul className="mt-3 text-[13px] leading-6 text-slate-700 space-y-1">
                <li><Link to="mailto:eec@electroniceducare.com" className="hover:text-amber-700">Contact Us</Link></li>
                <li><Link to="/careers" className="hover:text-amber-700">Career</Link></li>
                {/* <li><Link to="/terms-of-services" className="hover:text-amber-700">Terms & Conditions</Link></li>
                <li><Link to="/privacy-policy" className="hover:text-amber-700">Privacy and </Link></li> */}
              </ul>
            </div>

            {/* Right block: logo + subline */}
            <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between">
              <div className="flex flex-col items-start md:items-end">
                <Link to="/">
                  <img
                    src="/logo_new.png"
                    alt="EEC"
                    className="h-14 md:h-16 object-contain"
                  />
                  <p className="text-[12px] text-slate-600 mt-1">
                    Accelerating School’s Growth
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* subtle divider */}
          <div className="mt-6 border-t border-amber-200/70" />

          {/* copyright row */}
          <div className="py-4 text-center text-[12px] text-slate-600">
            © Copyright {year}, All Rights Reserved With EEC.
          </div>
        </div>
      </div>

      {/* If you want the floating buttons back later, just uncomment
      the buttons you already have below; the amber theme will still fit. */}
    </footer>
  );
}
