// Contact.jsx
import React, { useMemo, useState } from "react";

const EMAIL_RE =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => {
    const e = {};
    if (!values.name.trim()) e.name = "Please enter your name.";
    if (!values.email.trim()) e.email = "Please enter your email.";
    else if (!EMAIL_RE.test(values.email)) e.email = "Enter a valid email address.";
    if (!values.message.trim()) e.message = "Please write a message.";
    else if (values.message.trim().length < 10) e.message = "Message should be at least 10 characters.";
    return e;
  }, [values]);

  const isValid = Object.keys(errors).length === 0;

  const onSubmit = (ev) => {
    ev.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (!isValid) return;
    // TODO: integrate with your backend or a service (EmailJS / Formspree).
    setSubmitted(true);
    setValues({ name: "", email: "", message: "" });
    setTouched({ name: false, email: false, message: false });
  };

  const inputBase =
    "w-full rounded-xl border px-4 py-3 outline-none transition backdrop-blur " +
    "bg-white/80 border-amber-200/70 focus:ring-2 focus:ring-amber-400 placeholder-slate-400";

  return (
    <div className="min-h-screen w-full bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(251,191,36,0.16),transparent_60%),radial-gradient(700px_360px_at_0%_0%,rgba(245,158,11,0.14),transparent_60%)] bg-amber-50 text-slate-900">
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* Heading */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/70 px-3 py-1 text-xs font-medium text-amber-800 shadow-sm backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-500" />
            Contact Us
          </span>
          <h1 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">
            Let’s talk about EEC
          </h1>
          <p className="mt-2 max-w-2xl text-slate-700">
            Have questions, need a demo, or want a custom rollout? Send us a message— we’ll get back within 1–2 business days.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-[1.15fr_1fr]">
          {/* Form card */}
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-2xl border border-amber-200/70 bg-white/85 p-6 shadow-[0_6px_20px_rgba(17,24,39,0.08)] backdrop-blur"
          >
            {submitted && (
              <div className="mb-4 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-800">
                ✅ Thanks! Your message has been sent. We’ll respond soon.
              </div>
            )}

            <div className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-semibold">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={(e) => setValues((s) => ({ ...s, name: e.target.value }))}
                  onBlur={() => setTouched((s) => ({ ...s, name: true }))}
                  className={`${inputBase} ${touched.name && errors.name ? "border-red-300 focus:ring-red-300" : ""}`}
                  aria-invalid={!!(touched.name && errors.name)}
                  aria-describedby="name-err"
                  placeholder="Jane Doe"
                  autoComplete="name"
                />
                {touched.name && errors.name && (
                  <p id="name-err" className="mt-1 text-xs text-red-600">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-semibold">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={(e) => setValues((s) => ({ ...s, email: e.target.value }))}
                  onBlur={() => setTouched((s) => ({ ...s, email: true }))}
                  className={`${inputBase} ${touched.email && errors.email ? "border-red-300 focus:ring-red-300" : ""}`}
                  aria-invalid={!!(touched.email && errors.email)}
                  aria-describedby="email-err"
                  placeholder="you@school.edu"
                  autoComplete="email"
                />
                {touched.email && errors.email && (
                  <p id="email-err" className="mt-1 text-xs text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={values.message}
                  onChange={(e) => setValues((s) => ({ ...s, message: e.target.value }))}
                  onBlur={() => setTouched((s) => ({ ...s, message: true }))}
                  className={`${inputBase} ${touched.message && errors.message ? "border-red-300 focus:ring-red-300" : ""}`}
                  aria-invalid={!!(touched.message && errors.message)}
                  aria-describedby="message-err"
                  placeholder="Tell us a bit about your needs…"
                />
                <div className="mt-1 flex items-center justify-between text-xs text-slate-500">
                  <span>Min 10 characters</span>
                  <span>{values.message.trim().length} / 1000</span>
                </div>
                {touched.message && errors.message && (
                  <p id="message-err" className="mt-1 text-xs text-red-600">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={!isValid}
                className={`mt-2 w-full rounded-xl px-5 py-3 font-semibold text-white shadow-lg transition
                ${isValid ? "bg-amber-600 hover:bg-amber-700 shadow-amber-500/20" : "bg-amber-300 cursor-not-allowed"}`}
              >
                Send Message
              </button>

              {/* Small privacy note */}
              <p className="text-xs text-slate-500">
                By submitting, you agree to let us store and process your info to contact you about EEC. No spam—ever.
              </p>
            </div>
          </form>

          {/* Map card */}
          <div className="self-start rounded-2xl border border-amber-200/70 bg-white/85 p-2 shadow-[0_6px_20px_rgba(17,24,39,0.08)] backdrop-blur">
            {/* Replace the src below with your exact embed link (Google Maps → Share → Embed a map) */}
            <iframe
              title="EEC Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.017692149047!2d88.348228!3d22.568716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a7b4b0f15b%3A0x4a0d4e2c0f8c1e8!2s19-B%2C%20Jawaharlal%20Nehru%20Rd%2C%20Maidan%2C%20New%20Market%20Area%2C%20Dharmatala%2C%20Taltala%2C%20Kolkata%2C%20West%20Bengal%20700087!5e0!3m2!1sen!2sin!4v1700000000000"
              className="h-[360px] w-full rounded-xl"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Alternate contacts */}
        {/* <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            ["Email", "eec@electroniceducare.com"],
            ["Phone", "+91-00000-00000"],
            ["Address", "19-B, Jawaharlal Nehru Rd, Kolkata, WB 700087"],
          ].map(([label, val]) => (
            <div
              key={label}
              className="rounded-xl border border-amber-200/70 bg-white/80 p-4 text-sm shadow-sm backdrop-blur"
            >
              <div className="font-semibold text-slate-900">{label}</div>
              <div className="text-slate-700">{val}</div>
            </div>
          ))}
        </div> */}
      </section>
    </div>
  );
}
