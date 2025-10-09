"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, Building, Trophy } from "lucide-react"
import { motion } from "framer-motion"

const milestones = [
  {
    year: "1985",
    title: "Foundation",
    description: "Pinnacle Academy was established with a vision to provide quality education to 150 students.",
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
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Our Journey Through Time</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From humble beginnings to becoming a leading educational institution, our history reflects our commitment to
            growth and excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <milestone.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-accent mb-2">{milestone.year}</div>
                  <h3 className="font-serif font-semibold text-lg mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground text-sm text-pretty">{milestone.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
