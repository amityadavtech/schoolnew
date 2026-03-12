"use client"

import { Music, Trophy, Users, Palette, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const activities = [
  {
    category: "Arts & Culture",
    icon: Palette,
    activities: ["Drama Club", "Art Society", "Creative Writing"],
  },
  {
    category: "Dance & Performance",
    icon: Music,
    activities: ["School Events"],
  },
  {
    category: "Sports & Athletics",
    icon: Trophy,
    activities: ["Basketball", "Soccer", "Tennis", "Swimming", "Track & Field", "Cross Country"],
  },
  {
    category: "Leadership & Service",
    icon: Users,
    activities: ["Student Government", "Peer Mentoring", "Community Service", "Environmental Club", "Volunteer Corps"],
  },
]

const cardIndex = ["01", "02", "03", "04"]

export function ExtracurricularSection() {
  return (
    <>
      <style>{`


        .ec-card {
          transition: transform 0.32s cubic-bezier(0.22,1,0.36,1), box-shadow 0.32s ease;
        }
        .ec-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 48px -8px rgba(37,99,235,0.13), 0 4px 16px -2px rgba(0,0,0,0.06);
        }
        .ec-card:hover .ec-icon-wrap {
          background: #2563eb;
        }
        .ec-card:hover .ec-icon-wrap svg {
          color: #ffffff;
        }

        .ec-icon-wrap {
          transition: background 0.25s ease;
        }

        .ec-ghost-num {
          font-family: 'Playfair Display', serif;
          font-size: 5rem;
          font-weight: 800;
          letter-spacing: -0.05em;
          line-height: 1;
          position: absolute;
          bottom: 1rem;
          right: 1.25rem;
          pointer-events: none;
          user-select: none;
          opacity: 0.055;
          color: #1d4ed8;
        }

        .ec-view-btn {
          transition: background 0.2s, color 0.2s, transform 0.18s;
        }
        .ec-view-btn:hover {
          background: #dbeafe;
          transform: translateY(-1px);
        }
      `}</style>

      <section
        className="ec-root relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-blue-50/30 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 py-20 md:py-28"
        id="extracurricular"
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
        <div className="pointer-events-none absolute -left-32 top-0 w-96 h-96 rounded-full bg-blue-200/20 dark:bg-blue-900/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 w-80 h-80 rounded-full bg-blue-100/30 dark:bg-blue-800/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-blue-600 dark:bg-blue-400 rounded-full" />
              <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400">
                Beyond the Classroom
              </span>
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-slate-900 dark:text-white leading-tight mb-4 max-w-xl">
              Life Beyond<br />the Classroom
            </h2>
            <p className="text-base text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed font-light">
              Our extracurricular program empowers students to explore interests, build skills, and connect
              with peers through a wide range of clubs and activities.
            </p>
          </motion.div>

          {/* ── Cards Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {activities.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                <div className="ec-card relative h-full rounded-2xl border border-blue-100 dark:border-blue-900/40 bg-white dark:bg-slate-800/60 shadow-sm overflow-hidden flex flex-col">

                  {/* Top accent bar */}
                  <div className="h-[3px] bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400" />

                  {/* Ghost number */}
                  <span className="ec-ghost-num">{cardIndex[index]}</span>

                  <div className="p-6 flex flex-col flex-1 relative z-10">

                    {/* Icon */}
                    <div
                      className="ec-icon-wrap w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 flex items-center justify-center mb-5"
                    >
                      <category.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>

                    {/* Title + count */}
                    <div className="mb-5">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug mb-1">
                        {category.category}
                      </h3>
                      <span className="inline-block text-[0.68rem] font-semibold tracking-widest uppercase text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 px-2.5 py-0.5 rounded-full">
                        {category.activities.length} {category.activities.length === 1 ? "activity" : "activities"}
                      </span>
                    </div>

                    {/* Activity list */}
                    <ul className="flex flex-col gap-2.5 flex-1">
                      {category.activities.map((activity) => (
                        <li
                          key={activity}
                          className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300 font-light"
                        >
                          <svg
                            width="17" height="17" viewBox="0 0 17 17" fill="none"
                            className="flex-shrink-0 mt-0.5 text-blue-600 dark:text-blue-400"
                          >
                            <circle cx="8.5" cy="8.5" r="8.5" className="fill-blue-100 dark:fill-blue-900/40" />
                            <path
                              d="M5 8.8l2.3 2.4 4.7-5"
                              stroke="currentColor" strokeWidth="1.6"
                              strokeLinecap="round" strokeLinejoin="round"
                            />
                          </svg>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Divider + CTA */}
                    <div className="mt-6 pt-5 border-t border-blue-100 dark:border-blue-900/40 flex items-center justify-between">

                      <span className="text-[0.65rem] font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500">
                        Popular
                      </span>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}