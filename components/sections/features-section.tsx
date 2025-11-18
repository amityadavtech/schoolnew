"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Award, Globe, Microscope, Palette, Music, Trophy } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description: "Comprehensive curriculum designed to challenge and inspire students at every level.",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Dedicated teachers with advanced degrees and years of educational experience.",
  },
  {
    icon: Award,
    title: "Recognition & Awards",
    description: "Consistently ranked among the top schools with numerous academic achievements.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "International programs and cultural exchange opportunities for well-rounded education.",
  },
  {
    icon: Microscope,
    title: "STEM Programs",
    description: "State-of-the-art laboratories and innovative science, technology, and math curricula.",
  },
  {
    icon: Palette,
    title: "Arts & Creativity",
    description: "Comprehensive arts programs including visual arts, drama, and creative writing.",
  },
  {
    icon: Music,
    title: "Music & Performance",
    description: "Award-winning music programs with orchestra, band, and individual instruction.",
  },
  {
    icon: Trophy,
    title: "Sports Excellence",
    description: "Competitive athletics programs that build character, teamwork, and physical fitness.",
  },
]

export function FeaturesSection() {
  return (
  <section className="pt-8 pb-16 sm:py-18">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl font-extrabold font-sans tracking-tight sm:text-3xl md:text-4xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3 sm:mb-4 ">
            Why Choose Aira Bal Vidya Mandir Inter College?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base font-medium font-sans">
            We provide a comprehensive educational experience that nurtures academic excellence, character development, and lifelong learning.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="rounded-2xl shadow-lg bg-white/80 dark:bg-background/80 p-5 flex flex-col items-center text-center border border-accent/10 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0 flex flex-col items-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-serif font-semibold text-base sm:text-lg mb-1 text-primary">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base font-sans">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
