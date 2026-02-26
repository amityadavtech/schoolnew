"use client"

import { motion } from "framer-motion"
import { GraduationCap, Users, Award, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 sm:pt-12 pb-12 sm:pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-950">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-20 sm:-left-24 -top-12 sm:-top-16 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-gradient-to-br from-blue-200/30 to-indigo-200/20 blur-3xl opacity-60"></div>
      <div className="pointer-events-none absolute -right-20 sm:-right-24 -bottom-12 sm:-bottom-16 w-56 sm:w-72 h-56 sm:h-72 rounded-full bg-gradient-to-br from-indigo-200/20 to-blue-200/10 blur-2xl opacity-50"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex flex-col items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="w-6 sm:w-7 h-6 sm:h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                About Aira Bal Vidya Mandir Inter College
              </h1>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-2xl px-2">
                For nearly four decades, <span className="font-semibold text-blue-700 dark:text-blue-400">Aira Bal Vidya Mandir Inter College</span> has led in educational excellence — fostering curiosity, character and modern skills through a balanced, student-first approach.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <motion.div whileHover={{ y: -6 }} className="rounded-2xl p-4 sm:p-6 bg-white shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <div className="w-12 sm:w-14 h-12 sm:h-14 mx-auto bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-3">
                <Users className="w-6 sm:w-7 h-6 sm:h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1">Community Focused</h3>
              <p className="text-xs sm:text-sm text-slate-600">Building strong relationships within our educational community.</p>
            </motion.div>

            <motion.div whileHover={{ y: -6 }} className="rounded-2xl p-4 sm:p-6 bg-white shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <div className="w-12 sm:w-14 h-12 sm:h-14 mx-auto bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-3">
                <Award className="w-6 sm:w-7 h-6 sm:h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1">Excellence Driven</h3>
              <p className="text-xs sm:text-sm text-slate-600">Committed to high standards in academics and character development.</p>
            </motion.div>

            <motion.div whileHover={{ y: -6 }} className="rounded-2xl p-4 sm:p-6 bg-white shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <div className="w-12 sm:w-14 h-12 sm:h-14 mx-auto bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-3">
                <Sparkles className="w-6 sm:w-7 h-6 sm:h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1">Future Ready</h3>
              <p className="text-xs sm:text-sm text-slate-600">Preparing students with modern skills for a rapidly changing world.</p>
            </motion.div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button asChild className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:scale-[1.02] text-sm sm:text-base">
              <Link href="/contact" className="text-xs sm:text-sm font-medium text-blue-700 hover:underline">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
