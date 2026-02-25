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
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-950"> 
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-24 -top-16 w-80 h-80 rounded-full bg-gradient-to-br from-blue-200/30 to-indigo-200/20 blur-3xl opacity-60"></div>
      <div className="pointer-events-none absolute -right-24 -bottom-16 w-72 h-72 rounded-full bg-gradient-to-br from-indigo-200/20 to-blue-200/10 blur-2xl opacity-50"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4">Faculty Excellence</h2>
          <p className="mt-2 text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
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
              <Card className="rounded-2xl p-6 bg-white shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-100 text-center h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                  <div className="font-semibold text-lg mb-2 text-slate-900">{stat.label}</div>
                  <p className="text-slate-600 text-sm">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
