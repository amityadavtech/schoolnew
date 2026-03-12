"use client"

import { motion } from "framer-motion"
import { GraduationCap, Users, Award, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 sm:pt-12 pb-12 sm:pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-white  to-slate-100 dark:from-slate-900 dark:to-slate-950">
      <div className="absolute inset-0 -z-10">
        <img
          src="School-Image/modern-school-campus-with-students-walking--bright.jpg"
          alt="School Campus"
          className="w-full h-full object-cover"
        />
      </div>

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 -z-10"></div>


      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex flex-col items-center gap-3 sm:gap-4 mb-6 ">
            
            <div className="text-center max-w-3xl mx-auto">

              {/* Label */}
              <span className="inline-block mb-3 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-700 bg-blue-100 rounded-full">
                About Our Institution
              </span>

              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Aira Bal Vidya Mandir
                <span className="block text-blue-700 dark:text-blue-400">
                  Inter College
                </span>
              </h1>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
                For nearly four decades,
                <span className="font-semibold text-blue-700 ">
                  {" "}Aira Bal Vidya Mandir Inter College
                </span>{" "}
                has nurtured generations of students through academic excellence,
                strong values, and a future-ready learning environment.
              </p>

            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <motion.div whileHover={{ y: -6 }} className="rounded-2xl p-4 sm:p-6 bg-white shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <div className="w-12 sm:w-14 h-12 sm:h-14 mx-auto bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-3">
                <Users className="w-6 sm:w-7 h-6 sm:h-7 text-blue-600 " />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1">Community Focused</h3>
              <p className="text-xs sm:text-sm text-slate-600">Building strong relationships within our educational community.</p>
            </motion.div>

            <motion.div whileHover={{ y: -6 }} className="rounded-2xl p-4 sm:p-6 bg-white shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <div className="w-12 sm:w-14 h-12 sm:h-14 mx-auto bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-3">
                <Award className="w-6 sm:w-7 h-6 sm:h-7 text-blue-600 " />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1">Excellence Driven</h3>
              <p className="text-xs sm:text-sm text-slate-600">Committed to high standards in academics and character development.</p>
            </motion.div>

            <motion.div whileHover={{ y: -6 }} className="rounded-2xl p-4 sm:p-6 bg-white shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <div className="w-12 sm:w-14 h-12 sm:h-14 mx-auto bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-3">
                <Sparkles className="w-6 sm:w-7 h-6 sm:h-7 text-blue-600 " />
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
