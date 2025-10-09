"use client"

import { motion } from "framer-motion"
import { BookOpen, Microscope, Palette, Calculator } from "lucide-react"

export function AcademicsHeroSection() {
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
            <BookOpen className="h-10 w-10 sm:h-12 sm:w-12 text-accent mb-2 sm:mb-0 sm:mr-4" />
            <h1 className="text-3xl font-extrabold font-sans tracking-tight sm:text-4xl md:text-6xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-lg">
              Academic Excellence
            </h1>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed font-[500] font-sans">
            Our comprehensive academic programs are designed to <span className="font-bold text-primary">challenge</span>, <span className="italic text-accent">inspire</span>, and prepare students for success in higher education and beyond. From foundational skills to advanced studies, we provide a rigorous and engaging curriculum that nurtures intellectual growth.
          </p>
          <div className="flex flex-col gap-6 md:grid md:grid-cols-4 md:gap-6 mt-8">
            <div className="rounded-2xl shadow-lg bg-white/80 dark:bg-background/80 p-5 flex flex-col items-center text-center border border-accent/10">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-2">
                <BookOpen className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-serif font-semibold text-base sm:text-lg mb-1 text-primary">Literature & Language</h3>
            </div>
            <div className="rounded-2xl shadow-lg bg-white/80 dark:bg-background/80 p-5 flex flex-col items-center text-center border border-accent/10">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-2">
                <Calculator className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-serif font-semibold text-base sm:text-lg mb-1 text-primary">Mathematics</h3>
            </div>
            <div className="rounded-2xl shadow-lg bg-white/80 dark:bg-background/80 p-5 flex flex-col items-center text-center border border-accent/10">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-2">
                <Microscope className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-serif font-semibold text-base sm:text-lg mb-1 text-primary">Sciences</h3>
            </div>
            <div className="rounded-2xl shadow-lg bg-white/80 dark:bg-background/80 p-5 flex flex-col items-center text-center border border-accent/10">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-2">
                <Palette className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-serif font-semibold text-base sm:text-lg mb-1 text-primary">Arts & Creativity</h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
