"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, User, GraduationCap, Heart } from "lucide-react"

const requirements = [
  {
    category: "Academic Documents",
    icon: FileText,
    items: [
      "Official transcripts from previous schools",
      "Standardized test scores (if applicable)",
      "Academic recommendation letters (2)",
      "Portfolio or work samples (for arts programs)",
    ],
  },
  {
    category: "Personal Information",
    icon: User,
    items: [
      "Completed application form",
      "Personal statement or essay",
      "Extracurricular activities list",
      "Community service documentation",
    ],
  },
  {
    category: "Assessment Requirements",
    icon: GraduationCap,
    items: [
      "Entrance examination (age-appropriate)",
      "English proficiency test (international students)",
      "Personal interview with admissions team",
      "Parent/guardian meeting",
    ],
  },
  {
    category: "Health & Wellness",
    icon: Heart,
    items: [
      "Medical examination report",
      "Immunization records",
      "Emergency contact information",
      "Dietary restrictions or allergies",
    ],
  },
]

export function RequirementsSection() {
  return (
    <section className="py-16 bg-muted/30" id="requirements">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Admission Requirements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            To ensure we can provide the best educational experience for your child, please prepare the following
            documents and information for your application.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {requirements.map((req, index) => (
            <motion.div
              key={req.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mr-3">
                      <req.icon className="h-5 w-5 text-accent" />
                    </div>
                    {req.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {req.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Card className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80 text-primary-foreground shadow-2xl backdrop-blur-xl">
            <CardContent className="p-8 sm:p-10 flex flex-col items-center text-center space-y-6">

              {/* Icon Circle */}
              <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center shadow-inner shadow-black/30 backdrop-blur-md">
                <GraduationCap className="h-9 w-9 text-white drop-shadow-md" />
              </div>

              {/* Heading */}
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-white/90 to-accent bg-clip-text text-transparent drop-shadow-lg">
                Need Help?
              </h3>

              {/* Description */}
              <p className="text-primary-foreground/85 leading-relaxed max-w-xl mx-auto text-sm sm:text-base font-medium">
                Our admissions team is here to guide you through every step of the process. <br className="hidden sm:block" />
                <span className="font-semibold text-white">Don't hesitate to reach out if you have questions or need assistance with your application.</span>
              </p>

              {/* Contact Options */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 w-full">
                <div className="px-6 py-3 rounded-xl bg-white/90 text-primary font-semibold text-base shadow-md transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-lg cursor-pointer">
                  📧 admissions@pinnacleacademy.edu
                </div>
                <div className="px-6 py-3 rounded-xl bg-white/90 text-primary font-semibold text-base shadow-md transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-lg cursor-pointer">
                  📞 (555) 123-4567
                </div>
              </div>

              {/* Subtle bottom glow effect */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-accent/40 blur-3xl rounded-full pointer-events-none"></div>
            </CardContent>
          </Card>

        </motion.div>
      </div>
    </section>
  )
}
