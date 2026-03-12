"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, Building, Trophy } from "lucide-react"
import { motion } from "framer-motion"

const milestones = [
  {
    year: "1985",
    title: "Foundation",
    description:
      "Aira Bal Vidya Mandir Inter College was established with a vision to provide quality education to 150 students.",
    icon: Building,
  },
  {
    year: "1995",
    title: "Expansion",
    description: "Added secondary education programs and expanded to accommodate 500 students.",
    icon: Users,
  },
  {
    year: "2005",
    title: "Recognition",
    description: "Received state recognition for academic excellence and innovative teaching methods.",
    icon: Trophy,
  },
  {
    year: "2015",
    title: "Modernization",
    description: "Launched digital learning initiatives and state-of-the-art STEM laboratories.",
    icon: Calendar,
  },
]

export function HistorySection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white  to-slate-100 dark:from-slate-900 dark:to-slate-950">
      {/* subtle decorative gradient */}
      <div className="pointer-events-none absolute -left-20 top-4 w-72 h-72 rounded-full bg-gradient-to-br from-blue-200/20 to-indigo-200/10 blur-3xl opacity-40" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <span className="inline-block text-sm font-semibold bg-blue-50 text-blue-700 px-3 py-1 rounded-full">Milestones</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white">Our Journey Through Time</h2>
          <p className="mt-3 text-sm md:text-base text-slate-600 dark:text-slate-300">
            From humble beginnings to a thriving learning community — these milestones reflect our commitment to
            growth, innovation, and student success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <Card className="h-full rounded-3xl border-0 shadow-md hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <milestone.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-blue-700">{milestone.year}</div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{milestone.title}</h3>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{milestone.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
