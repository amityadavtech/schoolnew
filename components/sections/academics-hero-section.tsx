"use client"

import { motion } from "framer-motion"
import { BookOpen, Microscope, Palette, Calculator } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AcademicsHeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-950">
      {/* Decorative accents */}
      <div className="pointer-events-none absolute -left-20 -top-10 w-72 h-72 rounded-full bg-gradient-to-br from-blue-200/30 to-indigo-200/20 blur-3xl opacity-60" />
      <div className="pointer-events-none absolute -right-20 -bottom-10 w-72 h-72 rounded-full bg-gradient-to-br from-indigo-200/20 to-blue-200/10 blur-2xl opacity-50" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center justify-center mb-6 gap-4 sm:flex-row sm:gap-6">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Academic Excellence
              </h1>
              <div className="mt-3 text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-3xl">
                <p>
                  Our comprehensive academic programs are designed to <span className="font-semibold text-blue-700">challenge</span>, <span className="italic text-indigo-600">inspire</span>, and prepare students for success in higher education and beyond.
                </p>
              </div>
            </div>
          </div>

         

          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
            <motion.div whileHover={{ y: -6 }} className="rounded-2xl p-6 bg-white shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-100 text-center">
              <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center shadow-sm">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900">Literature & Language</h3>
            </motion.div>

            <motion.div whileHover={{ y: -6 }} className="rounded-2xl p-6 bg-white shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-100 text-center">
              <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center shadow-sm">
                <Calculator className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900">Mathematics</h3>
            </motion.div>

            <motion.div whileHover={{ y: -6 }} className="rounded-2xl p-6 bg-white shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-100 text-center">
              <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center shadow-sm">
                <Microscope className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900">Sciences</h3>
            </motion.div>

            <motion.div whileHover={{ y: -6 }} className="rounded-2xl p-6 bg-white shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-100 text-center">
              <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center shadow-sm">
                <Palette className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900">Arts & Creativity</h3>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
