"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, Award, Globe } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: "45",
    label: "Faculty Members",
    description: "Dedicated educators committed to excellence",
  },
  {
    icon: GraduationCap,
    number: "98%",
    label: "Advanced Degrees",
    description: "Master's and Doctoral level qualifications",
  },
  {
    icon: Award,
    number: "15+",
    label: "Years Experience",
    description: "Average teaching experience per faculty member",
  },
  {
    icon: Globe,
    number: "12",
    label: "Countries",
    description: "International backgrounds and perspectives",
  },
]

export function FacultyStatsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Faculty Excellence</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our faculty represents the highest standards of academic achievement and teaching excellence, bringing
            diverse expertise and passion to every classroom.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="font-semibold text-lg mb-2">{stat.label}</div>
                  <p className="text-muted-foreground text-sm">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
