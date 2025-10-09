"use client"

import { motion } from "framer-motion"
import { GraduationCap, Users, Award, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AdmissionsHeroSection() {
  return (
    <section className="relative pt-8 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center justify-center mb-6 gap-2 sm:flex-row">
            <GraduationCap className="h-10 w-10 sm:h-12 sm:w-12 text-accent mb-2 sm:mb-0 sm:mr-4" />
            <h1 className="text-2xl font-extrabold font-sans tracking-tight sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 sm:mb-6">
              Join Our Community
            </h1>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-medium font-sans">
            Begin your journey at <span className="font-bold text-primary">Pinnacle Academy</span>, where academic excellence meets personal growth. We're excited to welcome passionate learners who are ready to make their mark on the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button size="lg" className="text-base sm:text-lg px-8 rounded-full font-bold shadow-md">
              Apply Now
            </Button>
            <Button variant="outline" size="lg" className="text-base sm:text-lg px-8 rounded-full bg-transparent font-bold shadow-md">
              Schedule Tour
            </Button>
          </div>

          <div className="flex flex-col gap-6 md:grid md:grid-cols-4 md:gap-6">
            {[
              { icon: Users, label: "Small Classes", detail: "15:1 Ratio" },
              { icon: Award, label: "Excellence", detail: "Top 5% Schools" },
              { icon: BookOpen, label: "Programs", detail: "20+ Courses" },
              { icon: GraduationCap, label: "Success", detail: "98% Graduation" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="rounded-2xl shadow-lg bg-white/80 dark:bg-background/80 p-5 flex flex-col items-center text-center border border-accent/10"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-3">
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
