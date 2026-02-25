"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-center shadow-2xl border border-blue-200/50 dark:border-slate-700 bg-white dark:bg-slate-800"
        >
          {/* Gradient background overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 opacity-50" />
          
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-transparent" />
          
          {/* Decorative shapes */}
          <div className="absolute -top-20 -right-20 w-32 sm:w-40 h-32 sm:h-40 bg-blue-200/20 rounded-full blur-3xl dark:bg-blue-500/10" />
          <div className="absolute -bottom-20 -left-20 w-32 sm:w-40 h-32 sm:h-40 bg-indigo-200/20 rounded-full blur-3xl dark:bg-indigo-500/10" />
          
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-gray-900 dark:text-white mb-4 sm:mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xs sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
              Take the first step towards your child's bright future.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold shadow-lg text-sm sm:text-base">
                <Link href="/admissions">
                  Start Application
                  <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 bg-transparent font-bold shadow-md text-sm sm:text-base"
              >
                <Link href="/contact">
                  <Calendar className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                  Schedule Tour
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
