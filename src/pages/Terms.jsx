import React from "react";
import { motion } from "framer-motion";

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: "easeOut", delay: d },
});

export default function Terms() {
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
            Terms of Service
          </span>
        </motion.div>

        <motion.h1 {...fade(0.05)} className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">
          Terms of Service
        </motion.h1>
        <motion.p {...fade(0.1)} className="mt-2 text-slate-700 max-w-3xl">
          These Terms govern your access to and use of EEC. By using our services, you agree to these Terms.
        </motion.p>
        <motion.p {...fade(0.1)} className="mt-1 text-sm text-slate-600">
          <span className="font-medium text-slate-800">Last updated:</span> {lastUpdated}
        </motion.p>

        {/* TOC */}
        <motion.nav {...fade(0.15)} className="mt-6 rounded-2xl border border-amber-200/70 bg-white/80 p-4 shadow-sm backdrop-blur">
          <ul className="grid gap-2 text-sm text-amber-900 md:grid-cols-2">
            {[
              ["Acceptance of Terms", "acceptance"],
              ["Accounts & Access", "accounts"],
              ["Acceptable Use", "acceptable"],
              ["Fees & Payments", "fees"],
              ["Intellectual Property", "ip"],
              ["Third-Party Services", "thirdparty"],
              ["Confidentiality", "confidentiality"],
              ["Data Protection", "dataprotection"],
              ["Termination", "termination"],
              ["Disclaimers", "disclaimers"],
              ["Limitation of Liability", "liability"],
              ["Indemnification", "indemnification"],
              ["Governing Law & Disputes", "governing"],
              ["Changes to Terms", "changes"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <li key={id}>
                <a className="hover:text-amber-700" href={`#${id}`}>• {label}</a>
              </li>
            ))}
          </ul>
        </motion.nav>

        {/* Sections */}
        <div className="mt-8 space-y-6">
          <motion.section {...fade(0.2)} id="acceptance" className="rounded-2xl border border-amber-200/70 bg-white/85 p-6 shadow-sm backdrop-blur">
            <h2 className="text-xl font-bold">Acceptance of Terms</h2>
            <p className="mt-2 text-sm text-slate-700">
              By accessing or using EEC, you agree to be bound by these Terms and our Privacy Policy.
            </p>
          </motion.section>

          <motion.section {...fade(0.25)} id="accounts" className="rounded-2xl border border-amber-200/70 bg-white/85 p-6 shadow-sm backdrop-blur">
            <h2 className="text-xl font-bold">Accounts & Access</h2>
            <ul className="mt-3 grid gap-2 text-sm text-slate-700">
              <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-500" /> You are responsible for safeguarding your credentials.</li>
              <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-500" /> Access levels are controlled by institutional admins.</li>
            </ul>
          </motion.section>

          <motion.section {...fade(0.3)} id="acceptable" className="rounded-2xl border border-amber-200/70 bg-white/85 p-6 shadow-sm backdrop-blur">
            <h2 className="text-xl font-bold">Acceptable Use</h2>
            <p className="mt-2 text-sm text-slate-700">
              Do not misuse the service. Prohibited behavior includes unauthorized access, violating privacy, and transmitting harmful content.
            </p>
          </motion.section>

          <motion.section {...fade(0.35)} id="fees" className="rounded-2xl border border-amber-200/70 bg-white/85 p-6 shadow-sm backdrop-blur">
            <h2 className="text-xl font-bold">Fees & Payments</h2>
            <p className="mt-2 text-sm text-slate-700">
              Fees are set by agreement with your institution. Invoices, due dates, and taxes are governed by the applicable order form.
            </p>
          </motion.section>

          <motion.section {...fade(0.4)} id="ip" className="rounded-2xl border border-amber-200/70 bg-white/85 p-6 shadow-sm backdrop-blur">
            <h2 className="text-xl font-bold">Intellectual Property</h2>
            <p className="mt-2 text-sm text-slate-700">
              EEC, its logos, and software are owned by Electronic Educare or its licensors. You retain rights to content you upload.
            </p>
          </motion.section>

          <motion.section {...fade(0.45)} id="thirdparty" className="rounded-2xl border border-amber-200/70 bg-white/85 p-6 shadow-sm backdrop-blur">
            <h2 className="text-xl font-bold">Third-Party Services</h2>
            <p className="mt-2 text-sm text-slate-700">
              We may integrate third-party tools (e.g., analytics, payments). Their terms and privacy policies apply to their features.
            </p>
          </motion.section>

          <motion.section {...fade(0.5)} id="confidentiality" className="rounded-2xl border border-amber-200/70 bg-white/85 p-6 shadow-sm backdrop-blur">
            <h2 className="text-xl font-bold">Confidentiality</h2>
            <p className="mt-2 text-sm text-slate-700">
              Non-public information shared for the service must be protected and used only for permitted purposes.
            </p>
          </motion.section>

          <motion.section {...fade(0.55)} id="dataprotection" className="rounded-2xl border border-amber-200/70 bg-white/85 p-6 shadow-sm backdrop-blur">
            <h2 className="text-xl font-bold">Data Protection</h2>
            <p className="mt-2 text-sm text-slate-700">
              We process data as described in our Privacy Policy and applicable data protection laws. Institutions may be data controllers.
            </p>
          </motion.section>

          <motion.section {...fade(0.6)} id="termination" className="rounded-2xl border border-amber-200/70 bg-white/85 p-6 shadow-sm backdrop-blur">
            <h2 className="text-xl font-bold">Termination</h2>
            <p className="mt-2 text-sm text-slate-700">
              We may suspend or terminate access for breach of these Terms or legal obligations. Institutions can deactivate accounts.
            </p>
          </motion.section>

          <motion.section {...fade(0.65)} id="disclaimers" className="rounded-2xl border border-amber-200/70 bg-white/85 p-6 shadow-sm backdrop-blur">
            <h2 className="text-xl font-bold">Disclaimers</h2>
            <p className="mt-2 text-sm text-slate-700">
              Services are provided “as is” without warranties, to the fullest extent permitted by law.
            </p>
          </motion.section>

          <motion.section {...fade(0.7)} id="liability" className="rounded-2xl border border-amber-200/70 bg-white/85 p-6 shadow-sm backdrop-blur">
            <h2 className="text-xl font-bold">Limitation of Liability</h2>
            <p className="mt-2 text-sm text-slate-700">
              To the maximum extent permitted, EEC is not liable for indirect, incidental, or consequential damages; total liability is limited to amounts paid for the service during the prior 12 months.
            </p>
          </motion.section>

          <motion.section {...fade(0.75)} id="indemnification" className="rounded-2xl border border-amber-200/70 bg-white/85 p-6 shadow-sm backdrop-blur">
            <h2 className="text-xl font-bold">Indemnification</h2>
            <p className="mt-2 text-sm text-slate-700">
              You agree to indemnify EEC against claims arising from your misuse of the services or violation of these Terms.
            </p>
          </motion.section>

          <motion.section {...fade(0.8)} id="governing" className="rounded-2xl border border-amber-200/70 bg-white/85 p-6 shadow-sm backdrop-blur">
            <h2 className="text-xl font-bold">Governing Law & Disputes</h2>
            <p className="mt-2 text-sm text-slate-700">
              These Terms are governed by the laws of India, without regard to conflict of laws principles. Disputes will be subject to the courts of your institution’s jurisdiction unless otherwise agreed in writing.
            </p>
          </motion.section>

          <motion.section {...fade(0.85)} id="changes" className="rounded-2xl border border-amber-200/70 bg-white/85 p-6 shadow-sm backdrop-blur">
            <h2 className="text-xl font-bold">Changes to Terms</h2>
            <p className="mt-2 text-sm text-slate-700">
              We may update these Terms. Continued use after updates constitutes acceptance of the revised Terms.
            </p>
          </motion.section>

          <motion.section {...fade(0.9)} id="contact" className="rounded-2xl border border-amber-200/70 bg-white/85 p-6 shadow-sm backdrop-blur">
            <h2 className="text-xl font-bold">Contact</h2>
            <p className="mt-2 text-sm text-slate-700">
              Questions about these Terms? Email <a className="text-amber-700 font-medium" href="mailto:eec@electroniceducare.com">eec@electroniceducare.com</a>.
            </p>
          </motion.section>

          {/* <p className="text-[12px] text-slate-500">
            These Terms are a template and not legal advice. Customize for your jurisdiction and agreements.
          </p> */}
        </div>
      </section>
    </div>
  );
}
