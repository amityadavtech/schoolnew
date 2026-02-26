"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Microscope, Globe, Calculator, Palette, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const specialPrograms = [
  {
    title: "STEM Excellence Program",
    description:
      "Advanced science, technology, engineering, and mathematics curriculum with hands-on laboratory experiences.",
    icon: Microscope,
    features: ["State-of-the-art labs", "Robotics competitions", "Research projects", "Industry partnerships"],
    badge: "Advanced",
  },
  {
    title: "Advanced Mathematics Track",
    description: "Accelerated mathematics program for students showing exceptional aptitude in mathematical sciences.",
    icon: Calculator,
    features: ["Calculus by Grade 10", "Math competitions", "Peer tutoring", "University partnerships"],
    badge: "Accelerated",
  },
  {
    title: "Creative Arts Conservatory",
    description: "Comprehensive arts education including visual arts, theater, music, and digital media.",
    icon: Palette,
    features: ["Professional studios", "Performance opportunities", "Artist residencies", "Portfolio development"],
    badge: "Creative",
  },
]

export function ProgramsSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-block mb-4">
            <Badge className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">Special Programs</Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-3">Specialized Programs</h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Beyond our core curriculum, we offer focused programs that give students advanced opportunities to
            develop expertise and real-world experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specialPrograms.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <Card className="h-full rounded-3xl border-0 shadow-md hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <program.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-serif font-semibold text-lg md:text-xl text-slate-900 dark:text-white">{program.title}</h3>
                        <div className="mt-1">
                          <Badge className="bg-white/20 text-xs px-2 py-1 rounded-full text-slate-700">{program.badge}</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">{program.description}</p>
                  <ul className="space-y-3 mb-4">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex items-center justify-between">
                    <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:scale-[1.02]">
                      <Link href="#">Apply / Learn</Link>
                    </Button>
                    <div className="text-sm text-slate-500">Available to eligible grades</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
