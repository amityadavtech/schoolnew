"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { TrendingUp, Users, Target, UserCheck, Award } from "lucide-react"

const stats = [
  { number: 1200, label: "Active Students", suffix: "+", icon: Users },
  { number: 95, label: "College Acceptance Rate", suffix: "%", icon: Target },
  { number: 75, label: "Expert Faculty Members", suffix: "+", icon: UserCheck },
  { number: 50, label: "Awards & Recognition", suffix: "+", icon: Award },
]

function AnimatedNumber({ number, suffix = "" }: { number: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setCount((prev) => {
          if (prev < number) {
            return Math.min(prev + Math.ceil(number / 50), number)
          }
          return number
        })
      }, 30)

      return () => clearInterval(timer)
    }
  }, [isInView, number])

  return (
    <span ref={ref} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
      {count}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100/50 dark:bg-blue-900/30 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full">
              Our Impact
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-gray-900 dark:text-white mb-2 sm:mb-4">
            Our Achievements in Numbers
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed px-2">
            These numbers reflect our commitment to excellence and the success of our educational community.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full bg-white flex text-center flex-col dark:bg-slate-800 rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-200 dark:border-slate-700 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 dark:from-blue-500/10 dark:to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-transparent" />

                {/* Icon with background */}
                <div className="relative mb-4 sm:mb-5 md:mb-6">
                  <div className="inline-flex items-center justify-center w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-blue-600 dark:text-blue-400" aria-hidden />
                  </div>
                </div>

                {/* Number */}
                <div className="relative mb-2 sm:mb-3">
                  <AnimatedNumber number={stat.number} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <p className="relative text-gray-600 dark:text-gray-300 font-semibold text-xs sm:text-sm leading-relaxed">
                  {stat.label}
                </p>

                {/* Trending indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
