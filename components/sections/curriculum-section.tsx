"use client"

import { BookOpen, Users, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"

const curriculumLevels = [
  {
    id: "primary",
    title: "Primary School",
    grades: "Grades K–5",
    icon: BookOpen,
    label: "Foundation",
    num: "01",
    description:
      "Building strong foundations in literacy, numeracy, and critical thinking through hands-on exploration and play-based learning.",
    subjects: [
      "English Language Arts",
      "Mathematics",
      "Science Exploration",
      "Social Studies",
      "Art & Music",
      "Physical Education",
      "Technology Integration",
    ],
    highlights: [
      "Small class sizes (15–18 students)",
      "Individualized learning plans",
      "STEAM integration",
      "Character development programs",
    ],
  },
  {
    id: "secondary",
    title: "Secondary School",
    grades: "Grades 6–8",
    icon: Users,
    label: "Development",
    num: "02",
    description:
      "Developing analytical thinking, fostering independence, and preparing students for rigorous academic challenges ahead.",
    subjects: [
      "Advanced English & Literature",
      "Algebra & Geometry",
      "Biology & Chemistry",
      "World History & Geography",
      "Foreign Languages",
      "Fine Arts",
      "Computer Science",
    ],
    highlights: [
      "Honors and accelerated programs",
      "Project-based learning",
      "Leadership opportunities",
      "College preparation focus",
    ],
  },
  {
    id: "higher",
    title: "Higher Secondary",
    grades: "Grades 9–12",
    icon: GraduationCap,
    label: "Excellence",
    num: "03",
    description:
      "Advanced placement courses and specialized career tracks designed for university readiness and lifelong success.",
    subjects: [
      "AP & Honors Courses",
      "Advanced Mathematics",
      "Laboratory Sciences",
      "Literature & Composition",
      "Multiple Foreign Languages",
      "Advanced Arts Programs",
      "Career Pathways",
    ],
    highlights: [
      "15+ AP courses available",
      "College dual enrollment",
      "Internship programs",
      "University partnerships",
    ],
  },
]

function CheckIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      className="flex-shrink-0 mt-0.5 text-blue-600 dark:text-blue-400"
    >
      <circle cx="8.5" cy="8.5" r="8.5" className="fill-blue-100 dark:fill-blue-900/40" />
      <path
        d="M5 8.8l2.3 2.4 4.7-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CurriculumSection() {
  return (
    <>
      <style>{`

        .cs-card {
          transition: transform 0.32s cubic-bezier(0.22,1,0.36,1), box-shadow 0.32s ease;
        }
        .cs-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 48px -8px rgba(37,99,235,0.13), 0 4px 16px -2px rgba(0,0,0,0.06);
        }

        .cs-ghost-num {
          font-family: 'Playfair Display', serif;
          font-size: 7rem;
          font-weight: 800;
          letter-spacing: -0.05em;
          line-height: 1;
          position: absolute;
          top: -0.75rem;
          right: 1rem;
          pointer-events: none;
          user-select: none;
          opacity: 0.07;
        }

        @media (max-width: 640px) {
          .cs-ghost-num { font-size: 4.5rem; top: -0.4rem; }
        }

        .cs-learn-btn {
          transition: background 0.2s, transform 0.18s;
        }
        .cs-learn-btn:hover {
          background: rgb(219 234 254);
          transform: translateY(-1px);
        }
      `}</style>

      <section className="cs-root relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-blue-50/30 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 pt-16 pb-24 md:pt-24 md:pb-32">

        {/* Background dot grid */}
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

          {/* ── Section Header ── */}
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
                Curriculum
              </span>
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-slate-900 dark:text-white leading-tight mb-4 max-w-xl">
              A Clear Path from<br />Foundation to Excellence
            </h2>
            <p className="text-base text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed font-light">
              Our curriculum guides every student from their first day of school to university readiness —
              with personalized support and modern learning at every stage.
            </p>
          </motion.div>

          {/* ── Cards ── */}
          <div className="flex flex-col gap-6">
            {curriculumLevels.map((level, index) => (
              <motion.div
                key={level.id}
                id={level.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                <div className="cs-card rounded-2xl border border-blue-100 dark:border-blue-900/40 bg-white dark:bg-slate-800/60 shadow-sm overflow-hidden">

                  {/* Top accent bar */}
                  <div className="h-[3px] bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400" />

                  {/* 3-col grid — stacks on mobile */}
                  <div className="grid grid-cols-1 lg:grid-cols-3">

                    {/* ── LEFT: Identity ── */}
                    <div className="relative p-7 md:p-8 bg-blue-50/70 dark:bg-blue-950/30 border-b lg:border-b-0 lg:border-r border-blue-100 dark:border-blue-900/40 overflow-hidden">
                      <span className="cs-ghost-num text-blue-700 dark:text-blue-400">
                        {level.num}
                      </span>

                      <div className="relative z-10 flex flex-col gap-4">
                        {/* Icon + badge */}
                        <div className="flex items-center gap-3 flex-wrap">
                          <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm shadow-blue-200 dark:shadow-blue-900/40">
                            <level.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-[0.68rem] font-semibold tracking-widest uppercase text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-700/50 px-3 py-1 rounded-full">
                            {level.label}
                          </span>
                        </div>

                        {/* Title + grades */}
                        <div>
                          <h3 className="text-2xl md:text-[1.6rem] font-bold text-slate-900 dark:text-white leading-snug mb-2">
                            {level.title}
                          </h3>
                          <span className="inline-block text-xs font-medium text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 px-2.5 py-0.5 rounded-md">
                            {level.grades}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light max-w-xs">
                          {level.description}
                        </p>

                        {/* CTA */}
                        <div>
                          <button className="cs-learn-btn text-xs font-semibold text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700/50 px-4 py-1.5 rounded-lg">
                            Learn More →
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* ── MIDDLE: Subjects ── */}
                    <div className="p-7 md:p-8 border-b lg:border-b-0 lg:border-r border-blue-100 dark:border-blue-900/40">
                      <p className="text-[0.65rem] font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-5">
                        Core Subjects
                      </p>
                      <ul className="flex flex-col gap-2.5">
                        {level.subjects.map((subject) => (
                          <li key={subject} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300 font-light">
                            <CheckIcon />
                            <span>{subject}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* ── RIGHT: Highlights ── */}
                    <div className="p-7 md:p-8">
                      <p className="text-[0.65rem] font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-5">
                        Program Highlights
                      </p>
                      <ul className="flex flex-col gap-3.5">
                        {level.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-3">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 flex-shrink-0" />
                            <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-light">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Decorative divider */}
                      <div className="mt-8 pt-6 border-t border-blue-100 dark:border-blue-900/40">
                        <div className="flex items-center gap-2">
                          <div className="h-px flex-1 bg-gradient-to-r from-blue-200 to-transparent dark:from-blue-800" />
                          <span className="text-blue-300 dark:text-blue-700 text-base">✦</span>
                          <div className="h-px flex-1 bg-gradient-to-l from-blue-200 to-transparent dark:from-blue-800" />
                        </div>
                      </div>
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