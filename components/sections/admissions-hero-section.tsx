"use client"

import { motion } from "framer-motion"
import { GraduationCap, Users, Award, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AdmissionsHeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center justify-center mb-6 gap-4 sm:flex-row sm:items-center sm:justify-center">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-3xl font-serif font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 dark:text-white leading-tight mb-2 sm:mb-6">
              Join Our Community
            </h1>
          </div>
          <p className="mt-2 text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium">
            Begin your journey at <span className="font-semibold text-blue-700 dark:text-blue-400">Aira Bal Vidya Mandir Inter College</span>, where academic excellence meets personal growth. We're excited to welcome passionate learners who are ready to make their mark on the world.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 px-4 sm:px-0">

            <Button asChild
              size="lg"
              className="
      w-full sm:w-auto
      bg-gradient-to-r from-blue-600 to-indigo-600
      text-white
      shadow-md
      hover:scale-[1.02]
      text-base sm:text-lg
      px-6 sm:px-8
      py-3
      rounded-full
      font-bold
    "
            >
              <a href="#application">Apply Now</a>
            </Button>


          </div>

          <div className="flex flex-col gap-6 md:grid md:grid-cols-4 md:gap-6">
            {[
              { icon: Users, label: "Small Classes", detail: "15:1 Ratio" },
              { icon: Award, label: "Excellence", detail: "Top 5% Schools" },
              { icon: BookOpen, label: "Programs", detail: "20+ Courses" },
              { icon: GraduationCap, label: "Success", detail: "98% Graduation" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="rounded-2xl p-6 bg-white shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mb-3">
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
