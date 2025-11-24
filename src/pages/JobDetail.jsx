// src/pages/JobDetail.jsx
import React, { useMemo, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { JOBS } from "../data/jobs";
import { FaShare, FaShareAlt } from "react-icons/fa";

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: "easeOut", delay: d },
});

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-white/70 px-3 py-1 text-xs font-medium text-amber-800 shadow-sm backdrop-blur">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-500" />
      {children}
    </span>
  );
}

function SectionCard({ title, children }) {
  return (
    <motion.section {...fade(0.05)} className="rounded-2xl border border-amber-200/70 bg-white/85 p-6 shadow-sm backdrop-blur">
      {title ? <h2 className="text-xl font-bold">{title}</h2> : null}
      <div className={title ? "mt-3" : ""}>{children}</div>
    </motion.section>
  );
}

export default function JobDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const jobIndex = useMemo(() => (JOBS || []).findIndex((j) => j.slug === slug), [slug]);
  const job = jobIndex >= 0 ? JOBS[jobIndex] : null;

  const prevJob = jobIndex > 0 ? JOBS[jobIndex - 1] : null;
  const nextJob = jobIndex >= 0 && jobIndex < JOBS.length - 1 ? JOBS[jobIndex + 1] : null;

  const [copied, setCopied] = useState(false);
  const onShare = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: job?.title || "Job", url });
      } else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }
    } catch (_) {
      // ignore
    }
  };

  if (!job) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-2xl font-bold">Role not found</h1>
        <Link className="mt-3 inline-block text-amber-700 font-semibold" to="/careers">
          Back to Careers
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full">
      <section className="mx-auto max-w-6xl px-6 pt-10 md:pt-14 pb-16">
        {/* Top actions */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="rounded-lg border border-amber-200 bg-white/80 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-white backdrop-blur"
          >
            ← Back
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onShare}
              className="rounded-lg border border-amber-200 bg-white/80 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-white backdrop-blur cursor-pointer"
              aria-label="Share role"
            >
              {copied ? "Link copied ✓" : <FaShareAlt className="inline-block" /> }
            </button>
            <Link
              to="/careers"
              className="rounded-lg border border-amber-200 bg-white/80 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-white backdrop-blur"
            >
              All roles
            </Link>
          </div>
        </div>

        {/* Header */}
        <motion.header {...fade(0)} className="mt-4">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">{job.title}</h1>
          {job.summary ? <p className="mt-2 max-w-3xl text-slate-700">{job.summary}</p> : null}

          {/* Meta pills (show only if present) */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {job.location ? <Pill>{job.location}</Pill> : null}
            {job.type ? <Pill>{job.type}</Pill> : null}
            {job.level ? <Pill>{job.level}</Pill> : null}
            {job.department ? <Pill>{job.department}</Pill> : null}
            {job.status ? <Pill>Status: {job.status}</Pill> : null}
          </div>
        </motion.header>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          {/* Left column */}
          <div className="space-y-6">
            {/* About the role */}
            {job.description ? (
              <SectionCard title="About the Role">
                <div className="prose prose-slate prose-sm md:prose-base max-w-none">
                  <p className="text-slate-700">{job.description}</p>
                </div>
              </SectionCard>
            ) : null}

            {/* Core Skills */}
            {Array.isArray(job.skills) && job.skills.length > 0 ? (
              <SectionCard title="Core Skills">
                <ul className="grid gap-2 sm:grid-cols-2">
                  {job.skills.map((s, i) => (
                    <li key={i} className="flex gap-2 text-[15px] text-slate-800">
                      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-amber-500" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </SectionCard>
            ) : null}

            {/* Requirements */}
            {Array.isArray(job.requirements) && job.requirements.length > 0 ? (
              <SectionCard title="Requirements">
                <ul className="grid gap-2">
                  {job.requirements.map((r, i) => (
                    <li key={i} className="flex gap-2 text-[15px] text-slate-800">
                      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-amber-500" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </SectionCard>
            ) : null}

            {/* Good to Have */}
            {Array.isArray(job.plus) && job.plus.length > 0 ? (
              <SectionCard title="Good to Have">
                <ul className="grid gap-2 sm:grid-cols-2">
                  {job.plus.map((p, i) => (
                    <li key={i} className="flex gap-2 text-[15px] text-slate-800">
                      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-amber-500" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </SectionCard>
            ) : null}

            {/* Process (static, optional) */}
            <SectionCard title="Hiring Process">
              <ol className="grid gap-3 md:grid-cols-4 text-sm">
                {["Application", "Screening", "Interview", "Offer"].map((step, i) => (
                  <li key={i} className="rounded-xl border border-amber-200 bg-white/70 p-3 text-center">
                    <div className="text-amber-800 font-semibold">{`0${i + 1}`}</div>
                    <div className="mt-1 text-slate-800">{step}</div>
                  </li>
                ))}
              </ol>
            </SectionCard>

            {/* Prev / Next navigation */}
            {(prevJob || nextJob) && (
              <motion.div {...fade(0.05)} className="flex flex-col md:flex-row gap-3 justify-between">
                {prevJob ? (
                  <Link
                    to={`/careers/${prevJob.slug}`}
                    className="flex-1 rounded-xl border border-amber-200 bg-white/80 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-white text-left"
                  >
                    ← Previous: {prevJob.title}
                  </Link>
                ) : <div />}
                {nextJob ? (
                  <Link
                    to={`/careers/${nextJob.slug}`}
                    className="flex-1 rounded-xl border border-amber-200 bg-white/80 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-white text-right"
                  >
                    Next: {nextJob.title} →
                  </Link>
                ) : <div />}
              </motion.div>
            )}
          </div>

          {/* Right column — Apply card */}
          <aside className="self-start">
            <motion.div
              {...fade(0.1)}
              className="sticky top-6 rounded-2xl border border-amber-200/70 bg-white/90 p-6 shadow-md backdrop-blur"
            >
              <div className="text-lg font-bold">Apply for {job.title}</div>
              <p className="mt-1 text-sm text-slate-700">
                Share your resume/portfolio and a short note about why you’re excited to join EEC.
              </p>

              {/* Optional meta rows */}
              <div className="mt-3 grid gap-2 text-sm text-slate-700">
                {job.ctc ? (
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Compensation</span>
                    <span>{job.ctc}</span>
                  </div>
                ) : null}
                {job.experience ? (
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Experience</span>
                    <span>{job.experience}</span>
                  </div>
                ) : null}
                {Array.isArray(job.tags) && job.tags.length ? (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {job.tags.map((t, i) => (
                      <span key={i} className="rounded-md border border-amber-200 bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-900">
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>

              <a
                href={`mailto:eec@electroniceducare.com?subject=Application%3A%20${encodeURIComponent(job.title)}`}
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-amber-600 px-5 py-3 text-white font-semibold shadow-lg shadow-amber-500/20 hover:bg-amber-700 transition"
              >
                Apply Now
              </a>

              <div className="mt-4 text-xs text-slate-600">
                Prefer forms? We can wire this to a hosted form or ATS link—just share the URL.
              </div>
            </motion.div>
          </aside>
        </div>
      </section>
    </div>
  );
}
