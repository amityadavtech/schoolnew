"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, GraduationCap, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const curriculumLevels = [
  {
    id: "primary",
    title: "Primary School",
    grades: "Grades K-5",
    icon: BookOpen,
    description: "Building strong foundations in literacy, numeracy, and critical thinking skills.",
    subjects: [
      "English Language Arts",
      "Mathematics",
      "Science Exploration",
      "Social Studies",
      "Art & Music",
      "Physical Education",
      "Technology Integration",
    ],
    highlights: [
      "Small class sizes (15-18 students)",
      "Individualized learning plans",
      "STEAM integration",
      "Character development programs",
    ],
  },
  {
    id: "secondary",
    title: "Secondary School",
    grades: "Grades 6-8",
    icon: Users,
    description: "Developing analytical skills and preparing for advanced academic challenges.",
    subjects: [
      "Advanced English & Literature",
      "Algebra & Geometry",
      "Biology & Chemistry",
      "World History & Geography",
      "Foreign Languages",
      "Fine Arts",
      "Computer Science",
    ],
    highlights: [
      "Honors and accelerated programs",
      "Project-based learning",
      "Leadership opportunities",
      "College preparation focus",
    ],
  },
  {
    id: "higher",
    title: "Higher Secondary",
    grades: "Grades 9-12",
    icon: GraduationCap,
    description: "Advanced placement courses and specialized tracks for college and career readiness.",
    subjects: [
      "AP & Honors Courses",
      "Advanced Mathematics",
      "Laboratory Sciences",
      "Literature & Composition",
      "Multiple Foreign Languages",
      "Advanced Arts Programs",
      "Career Pathways",
    ],
    highlights: [
      "15+ AP courses available",
      "College dual enrollment",
      "Internship programs",
      "University partnerships",
    ],
  },
]

export function CurriculumSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-950">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-24 -top-16 w-80 h-80 rounded-full bg-gradient-to-br from-blue-200/30 to-indigo-200/20 blur-3xl opacity-60"></div>
      <div className="pointer-events-none absolute -right-24 -bottom-16 w-72 h-72 rounded-full bg-gradient-to-br from-indigo-200/20 to-blue-200/10 blur-2xl opacity-50"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-block mb-4">
            <Badge className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">Curriculum</Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-3">Comprehensive Curriculum</h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Our curriculum provides a clear pathway from foundational skills to advanced studies, with personalized
            support and modern learning experiences at every level.
          </p>
        </motion.div>

        <div className="space-y-8">
          {curriculumLevels.map((level, index) => (
            <motion.div
              key={level.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              viewport={{ once: true }}
              id={level.id}
              className="group"
            >
              <Card className="overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="p-8 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-l-3xl group-hover:scale-105 transform transition-transform duration-300">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                          <level.icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">{level.title}</h3>
                          <div className="mt-1">
                            <Badge className="bg-white/20 text-white text-xs">{level.grades}</Badge>
                          </div>
                        </div>
                      </div>
                      <p className="text-white/90 leading-relaxed">{level.description}</p>
                      <div className="mt-6">
                      </div>
                    </div>

                    <div className="p-8 bg-white">
                      <h4 className="font-serif font-semibold text-lg mb-4 text-slate-900">Core Subjects</h4>
                      <ul className="grid grid-cols-1 gap-2">
                        {level.subjects.map((subject) => (
                          <li key={subject} className="flex items-start gap-3 text-sm text-slate-600">
                            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                            <span>{subject}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-8 bg-slate-50 dark:bg-slate-800">
                      <h4 className="font-serif font-semibold text-lg mb-4 text-slate-900 dark:text-white">Program Highlights</h4>
                      <ul className="space-y-3">
                        {level.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                            <div className="mt-1">
                              <CheckCircle className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>{highlight}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
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
