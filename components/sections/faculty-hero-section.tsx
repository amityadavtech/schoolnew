"use client"

import { motion } from "framer-motion"
import { Users, Award, BookOpen, Heart } from "lucide-react"

export function FacultyHeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-950">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-24 -top-16 w-80 h-80 rounded-full bg-gradient-to-br from-blue-200/30 to-indigo-200/20 blur-3xl opacity-60"></div>
      <div className="pointer-events-none absolute -right-24 -bottom-16 w-72 h-72 rounded-full bg-gradient-to-br from-indigo-200/20 to-blue-200/10 blur-2xl opacity-50"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-center mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Users className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight mb-2 sm:mb-6">Our Faculty</h1>
          </div>

          <p className="mt-2 text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium">
            Meet the exceptional educators who inspire, challenge, and guide our students every day. Our faculty combines academic excellence with genuine care for student success.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Award, label: "Excellence", detail: "Master's+ Degrees" },
              { icon: BookOpen, label: "Experience", detail: "15+ Years Average" },
              { icon: Users, label: "Dedication", detail: "Student-Centered" },
              { icon: Heart, label: "Passion", detail: "Lifelong Learning" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="rounded-2xl p-6 bg-white shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mb-3">
                  <item.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-lg font-semibold text-slate-900">{item.detail}</div>
                <div className="text-sm text-slate-600">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
