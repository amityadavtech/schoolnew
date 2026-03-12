"use client"

import { motion } from "framer-motion"
import { Phone, MapPin, Users, Calendar } from "lucide-react"

const contactInfo = [
  {
    title: "Main Office",
    icon: Phone,
    num: "01",
    details: [
      { label: "Phone", value: "(555) 123-4567" },
      { label: "Fax", value: "(555) 123-4568" },
      { label: "Email", value: "info@pinnacleacademy.edu" },
    ],
  },
  {
    title: "Admissions Office",
    icon: Users,
    num: "02",
    details: [
      { label: "Phone", value: "(555) 123-4569" },
      { label: "Email", value: "admissions@pinnacleacademy.edu" },
      { label: "Hours", value: "Mon-Fri 8AM-5PM" },
    ],
  },
  {
    title: "Student Services",
    icon: Calendar,
    num: "03",
    details: [
      { label: "Phone", value: "(555) 123-4570" },
      { label: "Email", value: "services@pinnacleacademy.edu" },
      { label: "Hours", value: "Mon-Fri 8AM-4PM" },
    ],
  },
]

export function ContactInfoSection() {
  return (
    <>
      <style>{`
        
        .ci-card {
          transition: transform 0.32s cubic-bezier(0.22,1,0.36,1), box-shadow 0.32s ease;
        }
        .ci-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 48px -8px rgba(37,99,235,0.13), 0 4px 16px -2px rgba(0,0,0,0.06);
        }
        .ci-card:hover .ci-icon-wrap {
          background: #2563eb;
          border-color: #2563eb;
        }
        .ci-card:hover .ci-icon-wrap svg {
          color: #ffffff;
        }
        .ci-icon-wrap {
          transition: background 0.25s ease, border-color 0.25s ease;
        }

        .ci-ghost-num {
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

        .ci-tour-btn-primary {
          transition: background 0.2s, transform 0.18s, box-shadow 0.2s;
        }
        .ci-tour-btn-primary:hover {
          background: #ffffff !important;
          color: #1d4ed8 !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px -4px rgba(255,255,255,0.3);
        }

        .ci-tour-btn-outline {
          transition: background 0.2s, transform 0.18s;
        }
        .ci-tour-btn-outline:hover {
          background: rgba(255,255,255,0.12) !important;
          transform: translateY(-2px);
        }
      `}</style>

      <section
        className="ci-root relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-blue-50/30 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 pt-16 pb-24 md:pt-24 md:pb-32"
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-4 justify-center">
              <span className="h-px w-8 bg-blue-600 dark:bg-blue-400 rounded-full" />
              <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400">
                Contact Us
              </span>
              <span className="h-px w-8 bg-blue-600 dark:bg-blue-400 rounded-full" />

            </div>

            <div className="flex flex-col items-center gap-5 mb-4 justify-center ">
              <div className="flex flex-row justify-center  gap-3"> 
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center shadow-md shadow-blue-200 dark:shadow-blue-900/40">
                <MapPin className="w-7 h-7 text-white" />
              </div>
                <h2 className="text-3xl md:text-[2.75rem] font-bold text-slate-900 dark:text-white leading-tight flex justify-center items-center gap-2">
                  Find Us
                </h2></div>

              <p className="text-base justify-center text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed font-light text-center">
                Our dedicated team is here to assist you with any questions about admissions, academics, or student life at{" "}
                <span className="font-semibold text-blue-700 dark:text-blue-400">
                  Aira Bal Vidya Mandir Inter College
                </span>.
              </p>
            </div>


          </motion.div>

          {/* ── Contact Cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 + index * 0.09, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="ci-card relative h-full rounded-2xl border border-blue-100 dark:border-blue-900/40 bg-white dark:bg-slate-800/60 shadow-sm overflow-hidden flex flex-col">

                  {/* Top accent bar */}
                  <div className="h-[3px] bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400" />

                  {/* Ghost number */}
                  <span className="ci-ghost-num">{info.num}</span>

                  <div className="p-6 flex flex-col gap-5 relative z-10 flex-1">

                    {/* Icon + Title */}
                    <div className="flex items-center gap-3">
                      <div className="ci-icon-wrap w-11 h-11 rounded-xl bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                        {info.title}
                      </h3>
                    </div>

                    {/* Details */}
                    <div className="flex flex-col gap-2.5 flex-1">
                      {info.details.map((detail, i) => (
                        <div
                          key={i}
                          className="flex items-start justify-between gap-3 py-2 border-b border-blue-50 dark:border-blue-900/30 last:border-0"
                        >
                          <span className="text-xs font-semibold tracking-wide uppercase text-slate-400 dark:text-slate-500 flex-shrink-0 mt-0.5">
                            {detail.label}
                          </span>
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300 text-right break-all">
                            {detail.value}
                          </span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Visit Campus Banner ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-blue-500/20">
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500" />

              {/* Subtle pattern overlay */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              {/* Glow */}
              <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-blue-400/20 blur-3xl pointer-events-none" />
              <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-blue-800/30 blur-3xl pointer-events-none" />

              <div className="relative z-10 p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

                  {/* Left: text */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                        Visit Our Campus
                      </h3>
                      <p className="text-white/70 text-sm mb-3">
                        123 Education Boulevard, Excellence City, EC 12345
                      </p>
                      <p className="text-white/85 text-sm leading-relaxed max-w-lg font-light">
                        Experience our beautiful campus firsthand. Schedule a tour to see our state-of-the-art
                        facilities, meet our faculty, and discover what makes{" "}
                        <span className="font-semibold text-white">Aira Bal Vidya Mandir Inter College</span> special.
                      </p>
                    </div>
                  </div>

                  {/* Right: buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                    <button className="ci-tour-btn-primary text-sm font-semibold bg-white text-blue-700 px-6 py-2.5 rounded-xl border border-white/30 shadow-sm">
                      Schedule a Tour
                    </button>
                    <button className="ci-tour-btn-outline text-sm font-semibold text-white bg-white/10 border border-white/25 px-6 py-2.5 rounded-xl">
                      Virtual Tour
                    </button>
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