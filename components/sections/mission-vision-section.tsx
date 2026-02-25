"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart } from "lucide-react"
import { motion } from "framer-motion"

export function MissionVisionSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <span className="inline-block text-xs sm:text-sm font-semibold bg-blue-50 text-blue-700 px-3 py-1 rounded-full">Mission & Vision</span>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white">Our Mission, Vision & Values</h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto px-2">
            We combine tradition with modern teaching to prepare students for a successful future — intellectually,
            morally and socially.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full rounded-3xl border-0 shadow-md hover:shadow-2xl transition-shadow duration-300 transform-gpu hover:-translate-y-2">
              <CardContent className="p-5 sm:p-6 md:p-8 text-center">
                <div className="mx-auto mb-3 sm:mb-4 w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center ring-1 ring-blue-100">
                  <Target className="w-6 sm:w-7 h-6 sm:h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2 sm:mb-3">Our Mission</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To provide exceptional education that nurtures intellectual curiosity, develops critical thinking,
                  and instills strong moral values to prepare students for leadership and service.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            viewport={{ once: true }}
          >
            <Card className="h-full rounded-3xl border-0 shadow-md hover:shadow-2xl transition-shadow duration-300 transform-gpu hover:-translate-y-2">
              <CardContent className="p-5 sm:p-6 md:p-8 text-center">
                <div className="mx-auto mb-3 sm:mb-4 w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-gradient-to-br from-indigo-50 to-blue-50 flex items-center justify-center ring-1 ring-indigo-100">
                  <Eye className="w-6 sm:w-7 h-6 sm:h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2 sm:mb-3">Our Vision</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To be recognized as a leading institution that transforms lives by combining innovative teaching
                  with personalized learning experiences, empowering every student to reach their potential.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <Card className="h-full rounded-3xl border-0 shadow-md hover:shadow-2xl transition-shadow duration-300 transform-gpu hover:-translate-y-2">
              <CardContent className="p-5 sm:p-6 md:p-8 text-center">
                <div className="mx-auto mb-3 sm:mb-4 w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center ring-1 ring-blue-100">
                  <Heart className="w-6 sm:w-7 h-6 sm:h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2 sm:mb-3">Our Values</h3>
                <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-1 sm:space-y-2">
                  <p className="font-medium">Excellence • Integrity • Innovation</p>
                  <p className="font-medium">Compassion • Respect • Responsibility</p>
                  <p className="text-xs">These values guide our decisions and define our school culture.</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
