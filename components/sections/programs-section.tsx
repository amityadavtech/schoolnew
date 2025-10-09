"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Microscope, Globe, Calculator, Palette } from "lucide-react"
import { motion } from "framer-motion"

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
    title: "International Baccalaureate",
    description: "Globally recognized program preparing students for international universities and careers.",
    icon: Globe,
    features: ["IB Diploma Programme", "Multilingual education", "Global perspectives", "University recognition"],
    badge: "Global",
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
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Specialized Programs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Beyond our core curriculum, we offer specialized programs designed to nurture specific talents and
            interests, providing students with opportunities to excel in their areas of passion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specialPrograms.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <program.icon className="h-6 w-6 text-accent" />
                    </div>
                    <Badge variant="secondary">{program.badge}</Badge>
                  </div>
                  <h3 className="font-serif font-semibold text-xl mb-3 text-balance">{program.title}</h3>
                  <p className="text-muted-foreground mb-4 text-pretty">{program.description}</p>
                  <div className="space-y-2">
                    {program.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
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
