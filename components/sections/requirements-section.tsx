"use client"

import { motion } from "framer-motion"
import { FileText, User, GraduationCap, Heart } from "lucide-react"

const requirements = [
  {
    category: "Academic Documents",
    icon: FileText,
    num: "01",
    items: [
      "Official transcripts from previous schools",
      "Standardized test scores (if applicable)",
      "Academic recommendation letters (2)",
      "Portfolio or work samples (for arts programs)",
    ],
  },
  {
    category: "Personal Information",
    icon: User,
    num: "02",
    items: [
      "Completed application form",
      "Personal statement or essay",
      "Extracurricular activities list",
      "Community service documentation",
    ],
  },
  {
    category: "Assessment Requirements",
    icon: GraduationCap,
    num: "03",
    items: [
      "Entrance examination (age-appropriate)",
      "English proficiency test (international students)",
      "Personal interview with admissions team",
      "Parent/guardian meeting",
    ],
  },
  {
    category: "Health & Wellness",
    icon: Heart,
    num: "04",
    items: [
      "Medical examination report",
      "Immunization records",
      "Emergency contact information",
      "Dietary restrictions or allergies",
    ],
  },
]

export function RequirementsSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        .rq-root { font-family: 'DM Sans', sans-serif; }
        .rq-root h2, .rq-root h3 { font-family: 'Playfair Display', serif; }

        .rq-card {
          transition: transform 0.32s cubic-bezier(0.22,1,0.36,1), box-shadow 0.32s ease;
        }
        .rq-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 48px -8px rgba(37,99,235,0.13), 0 4px 16px -2px rgba(0,0,0,0.06);
        }
        .rq-card:hover .rq-icon-wrap {
          background: #2563eb;
          border-color: #2563eb;
        }
        .rq-card:hover .rq-icon-wrap svg {
          color: #ffffff;
        }
        .rq-icon-wrap {
          transition: background 0.25s ease, border-color 0.25s ease;
        }

        .rq-ghost-num {
          font-family: 'Playfair Display', serif;
          font-size: 5rem;
          font-weight: 800;
          letter-spacing: -0.05em;
          line-height: 1;
          position: absolute;
          bottom: 0.75rem;
          right: 1rem;
          pointer-events: none;
          user-select: none;
          opacity: 0.055;
          color: #1d4ed8;
        }

        .rq-email-btn {
          transition: background 0.2s, transform 0.18s, box-shadow 0.2s;
        }
        .rq-email-btn:hover {
          background: #f0f9ff !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px -4px rgba(255,255,255,0.25);
        }

        .rq-call-btn {
          transition: background 0.2s, transform 0.18s;
        }
        .rq-call-btn:hover {
          background: rgba(255,255,255,0.12) !important;
          transform: translateY(-2px);
        }
      `}</style>

      <section
        className="rq-root relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-blue-50/30 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 pt-16 pb-24 md:pt-24 md:pb-32"
        id="requirements"
      >
        {/* Dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, #1d4ed8 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Glow orbs */}
        <div className="pointer-events-none absolute -left-32 -top-10 w-96 h-96 rounded-full bg-blue-200/20 dark:bg-blue-900/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 -bottom-10 w-80 h-80 rounded-full bg-blue-100/30 dark:bg-blue-800/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-blue-600 dark:bg-blue-400 rounded-full" />
              <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400">
                Requirements
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-4 max-w-xl">
              Admission Requirements
            </h2>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed font-light">
              To ensure we can provide the best educational experience for your child, please prepare the
              following documents and information for your application.
            </p>
          </motion.div>

          {/* ── Requirements Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            {requirements.map((req, index) => (
              <motion.div
                key={req.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.52, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                <div className="rq-card relative h-full rounded-2xl border border-blue-100 dark:border-blue-900/40 bg-white dark:bg-slate-800/60 shadow-sm overflow-hidden flex flex-col">

                  {/* Top accent bar */}
                  <div className="h-[3px] bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400" />

                  {/* Ghost number */}
                  <span className="rq-ghost-num">{req.num}</span>

                  <div className="p-6 sm:p-7 flex flex-col gap-5 relative z-10 flex-1">

                    {/* Icon + title */}
                    <div className="flex items-center gap-3">
                      <div className="rq-icon-wrap w-11 h-11 rounded-xl bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 flex items-center justify-center flex-shrink-0">
                        <req.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                        {req.category}
                      </h3>
                    </div>

                    {/* Items list */}
                    <ul className="flex flex-col gap-2.5 flex-1">
                      {req.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 flex-shrink-0" />
                          <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Help Banner ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-blue-500/20">

              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500" />

              {/* Dot overlay */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              {/* Glow accents */}
              <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-blue-400/20 blur-3xl pointer-events-none" />
              <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-blue-800/30 blur-3xl pointer-events-none" />

              <div className="relative z-10 p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

                  {/* Left: text */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                        Need Help With Admissions?
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed max-w-lg font-light">
                        Our admissions team is ready to assist you at every step of the application process.
                        Get in touch anytime for guidance, support, or answers to your questions.
                      </p>
                    </div>
                  </div>

                  {/* Right: buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                    <a
                      href="mailto:admissions@school.edu"
                      className="rq-email-btn text-sm font-semibold bg-white text-blue-700 px-6 py-2.5 rounded-xl border border-white/30 shadow-sm flex items-center justify-center gap-2"
                    >
                      📧 Email Admissions
                    </a>
                    <a
                      href="tel:+911234567890"
                      className="rq-call-btn text-sm font-semibold text-white bg-white/10 border border-white/25 px-6 py-2.5 rounded-xl flex items-center justify-center gap-2"
                    >
                      📞 Call Now
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  )
}