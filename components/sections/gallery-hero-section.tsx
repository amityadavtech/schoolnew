"use client"

import { motion } from "framer-motion"
import { Camera, Users, Calendar, Trophy } from "lucide-react"

export function GalleryHeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-950">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-24 -top-16 w-80 h-80 rounded-full bg-gradient-to-br from-blue-200/30 to-indigo-200/20 blur-3xl opacity-60"></div>
      <div className="pointer-events-none absolute -right-24 -bottom-16 w-72 h-72 rounded-full bg-gradient-to-br from-indigo-200/20 to-blue-200/10 blur-2xl opacity-50"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-center mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Camera className="w-7 h-7 text-blue-600" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Our Gallery
            </h1>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed font-[500] font-sans">
            Discover the vibrant life at <span className="font-bold text-primary">Aira Bal Vidya Mandir Inter College</span> through our collection of memorable moments, achievements, and daily experiences that make our school community special.
          </p>
          <div className="flex flex-col gap-6 md:grid md:grid-cols-4 md:gap-8 mt-8">
            {[
              { icon: Users, label: "Campus Life", count: "200+" },
              { icon: Calendar, label: "Events", count: "150+" },
              { icon: Trophy, label: "Achievements", count: "100+" },
              { icon: Camera, label: "Memories", count: "500+" },
            ].map((item, index) => (
              <div
                key={item.label}
                className="rounded-2xl p-6 bg-white shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mb-3">
                  <item.icon className="h-7 w-7 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900">{item.count}</div>
                <div className="font-serif font-semibold text-lg sm:text-xl mb-1 text-slate-600">{item.label}</div>
              </div>
            ))} 
          </div>
        </motion.div>
      </div>
    </section>
  )
}
