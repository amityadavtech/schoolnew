"use client"

import { motion } from "framer-motion"
import { FileText, Users, CheckCircle, Calendar } from "lucide-react"

const processSteps = [
  {
    step: 1,
    icon: FileText,
    title: "Submit Application",
    description: "Complete our online application form with all required documents and information.",
    timeline: "Rolling Admissions",
  },
  {
    step: 2,
    icon: Users,
    title: "Interview & Assessment",
    description: "Participate in a personal interview and complete our academic assessment.",
    timeline: "Within 2 weeks",
  },
  {
    step: 3,
    icon: CheckCircle,
    title: "Review & Decision",
    description: "Our admissions committee reviews your application and makes a decision.",
    timeline: "Within 1 week",
  },
  {
    step: 4,
    icon: Calendar,
    title: "Enrollment",
    description: "Accept your offer and complete enrollment procedures to secure your place.",
    timeline: "Upon acceptance",
  },
]

export function AdmissionProcessSection() {
  return (
    <>
      <style>{`
     
        .ap-card {
          transition: transform 0.32s cubic-bezier(0.22,1,0.36,1), box-shadow 0.32s ease;
        }
        .ap-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 48px -8px rgba(37,99,235,0.13), 0 4px 16px -2px rgba(0,0,0,0.06);
        }
        .ap-card:hover .ap-icon-wrap {
          background: #2563eb;
          border-color: #2563eb;
        }
        .ap-card:hover .ap-icon-wrap svg {
          color: #ffffff;
        }
        .ap-icon-wrap {
          transition: background 0.25s ease, border-color 0.25s ease;
        }

        /* Connector line between cards on desktop */
        .ap-connector {
          position: absolute;
          top: 2.75rem;
          right: -1.25rem;
          width: 2.5rem;
          height: 2px;
          background: linear-gradient(90deg, #bfdbfe, #93c5fd);
          z-index: 10;
        }
        .ap-connector::after {
          content: '';
          position: absolute;
          right: -4px;
          top: -3px;
          width: 8px;
          height: 8px;
          border-top: 2px solid #93c5fd;
          border-right: 2px solid #93c5fd;
          transform: rotate(45deg);
        }
      `}</style>

      <section
        className="ap-root relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-blue-50/30 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 pt-16 pb-24 md:pt-24 md:pb-32"
        id="process"
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
                Admissions
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-4 max-w-xl">
              Join Our Community:<br />Admission Process
            </h2>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed font-light">
              Our streamlined admission process is designed to get to know you better while making the application experience as smooth as possible.
            </p>
          </motion.div>

          {/* ── Steps Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.52, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connector arrow — desktop only, not on last card */}
                {index < processSteps.length - 1 && (
                  <div className="ap-connector hidden lg:block" />
                )}

                <div className="ap-card h-full rounded-2xl border border-blue-100 dark:border-blue-900/40 bg-white dark:bg-slate-800/60 shadow-sm overflow-hidden flex flex-col">

                  {/* Top accent bar */}
                  <div className="h-[3px] bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400" />

                  <div className="p-6 flex flex-col items-center text-center gap-3 flex-1">

                    {/* Step number + icon */}
                    <div className="flex items-center gap-3 mb-1">
                      <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 shadow-sm shadow-blue-200 dark:shadow-blue-900/40">
                        {step.step}
                      </span>
                      <div className="ap-icon-wrap w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-light flex-1">
                      {step.description}
                    </p>

                    {/* Timeline badge */}
                    <div className="w-full pt-3 border-t border-blue-50 dark:border-blue-900/40">
                      <span className="inline-block text-xs font-semibold text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 px-3 py-1 rounded-full tracking-wide">
                        {step.timeline}
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