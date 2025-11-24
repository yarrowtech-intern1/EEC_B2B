import React from "react";
import { motion } from "framer-motion";

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: "easeOut", delay: d },
});

export default function Privacy() {
  const lastUpdated = new Date().toLocaleDateString(undefined, {
    year: "numeric", month: "long", day: "numeric",
  });

  return (
    <div className="min-h-screen w-full">
      <section className="mx-auto max-w-7xl px-6 pt-12 md:pt-16 pb-16">
        {/* Header */}
        <motion.div {...fade(0)}>
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/70 px-3 py-1 text-xs font-medium text-amber-800 shadow-sm backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-500" />
            Privacy Policy
          </span>
        </motion.div>

        <motion.h1 {...fade(0.05)} className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">
          Privacy Policy
        </motion.h1>
        <motion.p {...fade(0.1)} className="mt-2 text-slate-700 max-w-3xl">
          Your privacy matters to us. This policy explains what data we collect, how we use it, and the choices you have.
        </motion.p>
        <motion.p {...fade(0.1)} className="mt-1 text-sm text-slate-600">
          <span className="font-medium text-slate-800">Last updated:</span> {lastUpdated}
        </motion.p>

        {/* TOC */}
        <motion.nav {...fade(0.15)} className="mt-6 rounded-2xl border border-amber-200/70 bg-white/80 p-4 shadow-sm backdrop-blur">
          <ul className="grid gap-2 text-sm text-amber-900 md:grid-cols-2">
            {[
              ["Information We Collect", "collect"],
              ["How We Use Information", "use"],
              ["Sharing & Disclosure", "sharing"],
              ["Data Retention", "retention"],
              ["Your Rights & Choices", "rights"],
              ["Security", "security"],
              ["Children’s Privacy", "children"],
              ["International Transfers", "transfers"],
              ["Changes to This Policy", "changes"],
              ["Contact Us", "contact"],
            ].map(([label, id]) => (
              <li key={id}>
                <a className="hover:text-amber-700" href={`#${id}`}>• {label}</a>
              </li>
            ))}
          </ul>
        </motion.nav>

        {/* Sections */}
        <div className="mt-8 space-y-6">
          <motion.section {...fade(0.2)} id="collect" className="rounded-2xl border border-amber-200/70 bg-white/85 p-6 shadow-sm backdrop-blur">
            <h2 className="text-xl font-bold">Information We Collect</h2>
            <ul className="mt-3 grid gap-2 text-sm text-slate-700">
              <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-500" /> Account & profile details (name, email, role).</li>
              <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-500" /> Usage data (pages, actions, device info, approximate location).</li>
              <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-500" /> Content you submit (assignments, messages, files) per your institution’s settings.</li>
              <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-500" /> Cookies and similar technologies for session and analytics.</li>
            </ul>
          </motion.section>

          <motion.section {...fade(0.25)} id="use" className="rounded-2xl border border-amber-200/70 bg-white/85 p-6 shadow-sm backdrop-blur">
            <h2 className="text-xl font-bold">How We Use Information</h2>
            <p className="mt-2 text-sm text-slate-700">
              We use data to provide and improve EEC services, personalize learning, ensure security, and comply with legal obligations.
            </p>
          </motion.section>

          <motion.section {...fade(0.3)} id="sharing" className="rounded-2xl border border-amber-200/70 bg-white/85 p-6 shadow-sm backdrop-blur">
            <h2 className="text-xl font-bold">Sharing & Disclosure</h2>
            <ul className="mt-3 grid gap-2 text-sm text-slate-700">
              <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-500" /> Within your institution per role-based permissions.</li>
              <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-500" /> Service providers (hosting, analytics, support) under strict contracts.</li>
              <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-500" /> Legal compliance, safety, and protection of rights when required.</li>
            </ul>
          </motion.section>

          <motion.section {...fade(0.35)} id="retention" className="rounded-2xl border border-amber-200/70 bg-white/85 p-6 shadow-sm backdrop-blur">
            <h2 className="text-xl font-bold">Data Retention</h2>
            <p className="mt-2 text-sm text-slate-700">
              We retain personal data for as long as needed to deliver the service and meet legal or contractual requirements. Institutions may set their own retention rules.
            </p>
          </motion.section>

          <motion.section {...fade(0.4)} id="rights" className="rounded-2xl border border-amber-200/70 bg-white/85 p-6 shadow-sm backdrop-blur">
            <h2 className="text-xl font-bold">Your Rights & Choices</h2>
            <p className="mt-2 text-sm text-slate-700">
              Depending on your location, you may request access, correction, deletion, portability, or object to processing. Some requests are managed via your institution’s admin.
            </p>
          </motion.section>

          <motion.section {...fade(0.45)} id="security" className="rounded-2xl border border-amber-200/70 bg-white/85 p-6 shadow-sm backdrop-blur">
            <h2 className="text-xl font-bold">Security</h2>
            <p className="mt-2 text-sm text-slate-700">
              We apply technical and organizational measures (encryption in transit, role-based access, audits). No method is 100% secure; please keep credentials safe.
            </p>
          </motion.section>

          <motion.section {...fade(0.5)} id="children" className="rounded-2xl border border-amber-200/70 bg-white/85 p-6 shadow-sm backdrop-blur">
            <h2 className="text-xl font-bold">Children’s Privacy</h2>
            <p className="mt-2 text-sm text-slate-700">
              Student data is handled according to institutional agreements and applicable law, with parental/guardian involvement where required.
            </p>
          </motion.section>

          <motion.section {...fade(0.55)} id="transfers" className="rounded-2xl border border-amber-200/70 bg-white/85 p-6 shadow-sm backdrop-blur">
            <h2 className="text-xl font-bold">International Transfers</h2>
            <p className="mt-2 text-sm text-slate-700">
              Data may be processed in other countries by vetted providers with appropriate safeguards.
            </p>
          </motion.section>

          <motion.section {...fade(0.6)} id="changes" className="rounded-2xl border border-amber-200/70 bg-white/85 p-6 shadow-sm backdrop-blur">
            <h2 className="text-xl font-bold">Changes to This Policy</h2>
            <p className="mt-2 text-sm text-slate-700">
              We may update this policy. Material changes will be highlighted in-app or via email.
            </p>
          </motion.section>

          <motion.section {...fade(0.65)} id="contact" className="rounded-2xl border border-amber-200/70 bg-white/85 p-6 shadow-sm backdrop-blur">
            <h2 className="text-xl font-bold">Contact Us</h2>
            <p className="mt-2 text-sm text-slate-700">
              Questions? Write to <a className="text-amber-700 font-medium" href="mailto:eec@electroniceducare.com">eec@electroniceducare.com</a>.
            </p>
          </motion.section>

          {/* <p className="text-[12px] text-slate-500">
            This policy is provided for general information and is not legal advice.
          </p> */}
        </div>
      </section>
    </div>
  );
}
