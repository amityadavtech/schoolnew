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
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Awards & Recognition</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our commitment to excellence has been recognized through numerous awards and accolades from educational
            organizations and community partners.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={`${achievement.year}-${achievement.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <achievement.icon className="h-6 w-6 text-accent" />
                    </div>
                    <Badge variant="secondary">{achievement.year}</Badge>
                  </div>
                  <h3 className="font-serif font-semibold text-lg mb-2 text-balance">{achievement.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3 text-pretty">{achievement.description}</p>
                  <Badge variant="outline" className="text-xs">
                    {achievement.category}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
