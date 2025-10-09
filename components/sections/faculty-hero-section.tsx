"use client"

import { motion } from "framer-motion"
import { Users, Award, BookOpen, Heart } from "lucide-react"

export function FacultyHeroSection() {
  return (
  <section className="relative pt-[10px] pb-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Users className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-2xl font-extrabold font-sans tracking-tight sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 sm:mb-6">Our Faculty</h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto font-medium font-sans">
            Meet the exceptional educators who inspire, challenge, and guide our students every day. Our faculty
            combines academic excellence with genuine care for student success.
          </p>

          <div className="flex flex-col gap-6 md:grid md:grid-cols-4 md:gap-6">
            {[
              { icon: Award, label: "Excellence", detail: "Master's+ Degrees" },
              { icon: BookOpen, label: "Experience", detail: "15+ Years Average" },
              { icon: Users, label: "Dedication", detail: "Student-Centered" },
              { icon: Heart, label: "Passion", detail: "Lifelong Learning" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="rounded-2xl shadow-lg bg-white/80 dark:bg-background/80 p-5 flex flex-col items-center text-center border border-accent/10"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="text-lg font-semibold text-primary">{item.detail}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
