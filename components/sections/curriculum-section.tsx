"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"

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
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Comprehensive Curriculum</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our curriculum is carefully designed to provide age-appropriate challenges and support students'
            intellectual growth at every stage of their educational journey.
          </p>
        </motion.div>

        <div className="space-y-8">
          {curriculumLevels.map((level, index) => (
            <motion.div
              key={level.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              id={level.id}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    <div className="bg-primary text-primary-foreground p-8">
                      <div className="flex items-center mb-4">
                        <level.icon className="h-8 w-8 mr-3" />
                        <div>
                          <h3 className="text-2xl font-serif font-bold">{level.title}</h3>
                          <Badge variant="secondary" className="mt-1 bg-primary-foreground/20 text-primary-foreground">
                            {level.grades}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-primary-foreground/90 text-pretty">{level.description}</p>
                    </div>
                    <div className="p-8">
                      <h4 className="font-serif font-semibold text-lg mb-4 text-primary">Core Subjects</h4>
                      <ul className="space-y-2">
                        {level.subjects.map((subject) => (
                          <li key={subject} className="text-muted-foreground text-sm flex items-center">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                            {subject}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-8 bg-secondary/30">
                      <h4 className="font-serif font-semibold text-lg mb-4 text-primary">Program Highlights</h4>
                      <ul className="space-y-2">
                        {level.highlights.map((highlight) => (
                          <li key={highlight} className="text-muted-foreground text-sm flex items-center">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                            {highlight}
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
