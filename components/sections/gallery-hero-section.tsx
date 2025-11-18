"use client"

import { motion } from "framer-motion"
import { Camera, Users, Calendar, Trophy } from "lucide-react"

export function GalleryHeroSection() {
  return (
    <section className="relative pt-[10px] pb-16 sm:pt-[10px] sm:pb-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center justify-center mb-6 gap-2 sm:flex-row">
            <Camera className="h-10 w-10 sm:h-12 sm:w-12 text-accent mb-2 sm:mb-0 sm:mr-4" />
            <h1 className="text-3xl font-extrabold font-sans tracking-tight sm:text-4xl md:text-6xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-lg">
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
                className="rounded-2xl shadow-lg bg-white/80 dark:bg-background/80 p-6 flex flex-col items-center text-center border border-accent/10"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                  <item.icon className="h-7 w-7 text-accent" />
                </div>
                <div className="text-2xl font-bold text-primary">{item.count}</div>
                <div className="font-serif font-semibold text-lg sm:text-xl mb-1 text-primary">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
