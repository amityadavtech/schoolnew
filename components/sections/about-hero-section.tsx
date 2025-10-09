"use client"

import { motion } from "framer-motion"
import { GraduationCap, Users, Award } from "lucide-react"

export function AboutHeroSection() {
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
            <GraduationCap className="h-10 w-10 sm:h-12 sm:w-12 text-accent mb-2 sm:mb-0 sm:mr-4" />
            <h1 className="text-3xl font-extrabold font-sans tracking-tight sm:text-4xl md:text-6xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-lg">
              About Pinnacle Academy
            </h1>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed font-[500] font-sans">
            For nearly four decades, <span className="font-bold text-primary">Pinnacle Academy</span> has been at the forefront of educational excellence, nurturing young minds and shaping tomorrow's leaders through <span className="italic text-accent">innovative teaching</span>, comprehensive development, and unwavering commitment to student success.
          </p>
          <div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-8 mt-8">
            <div className="rounded-2xl shadow-lg bg-white/80 dark:bg-background/80 p-6 flex flex-col items-center text-center border border-accent/10">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                <Users className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-serif font-semibold text-lg sm:text-xl mb-1 text-primary">Community Focused</h3>
              <p className="text-muted-foreground text-sm sm:text-base font-sans">
                Building strong relationships within our educational community
              </p>
            </div>
            <div className="rounded-2xl shadow-lg bg-white/80 dark:bg-background/80 p-6 flex flex-col items-center text-center border border-accent/10">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                <Award className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-serif font-semibold text-lg sm:text-xl mb-1 text-primary">Excellence Driven</h3>
              <p className="text-muted-foreground text-sm sm:text-base font-sans">
                Committed to the highest standards in education and character
              </p>
            </div>
            <div className="rounded-2xl shadow-lg bg-white/80 dark:bg-background/80 p-6 flex flex-col items-center text-center border border-accent/10">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                <GraduationCap className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-serif font-semibold text-lg sm:text-xl mb-1 text-primary">Future Ready</h3>
              <p className="text-muted-foreground text-sm sm:text-base font-sans">
                Preparing students for success in an ever-changing world
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
