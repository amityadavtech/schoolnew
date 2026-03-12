"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Star, Award, Medal } from "lucide-react"
import { motion } from "framer-motion"

const achievements = [
  {
    year: "2024",
    title: "National Excellence Award",
    description: "Recognized as one of the top 50 schools in the country for academic achievement.",
    category: "Academic",
    icon: Trophy,
  },
  {
    year: "2023",
    title: "STEM Innovation Prize",
    description: "Awarded for outstanding science and technology education programs.",
    category: "STEM",
    icon: Star,
  },
  {
    year: "2023",
    title: "Community Service Recognition",
    description: "Honored for exceptional community outreach and service learning programs.",
    category: "Community",
    icon: Award,
  },
  {
    year: "2022",
    title: "Arts Excellence Medal",
    description: "Celebrated for comprehensive arts education and student achievements in creative fields.",
    category: "Arts",
    icon: Medal,
  },
  {
    year: "2022",
    title: "Environmental Leadership",
    description: "Recognized for sustainability initiatives and environmental education programs.",
    category: "Environment",
    icon: Trophy,
  },
  {
    year: "2021",
    title: "Digital Innovation Award",
    description: "Acknowledged for pioneering digital learning technologies and online education excellence.",
    category: "Technology",
    icon: Star,
  },
]

export function AchievementsSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-slate-100 dark:from-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-block mb-4">
            <Badge className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">Awards & Recognition</Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-3">Awards & Recognition</h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Our commitment to excellence has been recognized through awards and accolades across academics, arts,
            community and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={`${achievement.year}-${achievement.title}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <Card className="h-full rounded-3xl border-0 shadow-md hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <achievement.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-blue-700">{achievement.year}</div>
                        <h3 className="font-serif font-semibold text-lg md:text-xl text-slate-900 dark:text-white">{achievement.title}</h3>
                      </div>
                    </div>
                    <Badge className="bg-white/60 text-xs px-2 py-1 rounded-full text-slate-700">{achievement.category}</Badge>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">{achievement.description}</p>

                  <div className="flex items-center gap-3">
                    <div className="text-xs text-slate-500">Recognized</div>
                    <div className="flex-1 border-t border-slate-100" />
                    <div className="text-xs text-slate-500">{achievement.year}</div>
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
