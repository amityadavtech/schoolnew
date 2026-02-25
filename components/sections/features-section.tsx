"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Award, Globe, Microscope, Palette, Music, Trophy } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description: "Comprehensive curriculum designed to challenge and inspire students at every level.",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Dedicated teachers with advanced degrees and years of educational experience.",
  },
  {
    icon: Award,
    title: "Recognition & Awards",
    description: "Consistently ranked among the top schools with numerous academic achievements.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "International programs and cultural exchange opportunities for well-rounded education.",
  },
  {
    icon: Microscope,
    title: "STEM Programs",
    description: "State-of-the-art laboratories and innovative science, technology, and math curricula.",
  },
  {
    icon: Palette,
    title: "Arts & Creativity",
    description: "Comprehensive arts programs including visual arts, drama, and creative writing.",
  },
  {
    icon: Music,
    title: "Music & Performance",
    description: "Award-winning music programs with orchestra, band, and individual instruction.",
  },
  {
    icon: Trophy,
    title: "Sports Excellence",
    description: "Competitive athletics programs that build character, teamwork, and physical fitness.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100/50 dark:bg-blue-900/30 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full">
              Our Strengths
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-gray-900 dark:text-white mb-3 sm:mb-4">
            Why Choose Aira Bal Vidya Mandir?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            We provide a comprehensive educational experience that nurtures academic excellence, character development, and lifelong learning through innovative programs and world-class facilities.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full bg-white dark:bg-slate-800 rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/* Gradient accent on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 dark:from-blue-500/10 dark:to-indigo-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />

                {/* Icon Container */}
                <div className="relative mb-4 sm:mb-5">
                  <div className="w-12 sm:w-13 md:w-14 h-12 sm:h-13 md:h-14 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 sm:w-7 md:w-7 h-6 sm:h-7 md:h-7 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 font-serif">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-xs sm:text-sm">
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full group-hover:w-12 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
