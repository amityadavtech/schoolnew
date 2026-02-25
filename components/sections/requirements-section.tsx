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
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-950" id="requirements">
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4">Admission Requirements</h2>
          <p className="mt-2 text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
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
              <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-100 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mr-3">
                      <req.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-slate-900 font-semibold">{req.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {req.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-slate-600 text-sm">{item}</span>
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
          <Card className="relative overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-2xl backdrop-blur-xl">
            <CardContent className="p-8 sm:p-10 flex flex-col items-center text-center space-y-6">

              {/* Icon Circle */}
              <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center shadow-inner shadow-black/30 backdrop-blur-md">
                <GraduationCap className="h-9 w-9 text-white drop-shadow-md" />
              </div>

              {/* Heading */}
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white drop-shadow-lg">
                Need Help?
              </h3>

              {/* Description */}
              <p className="text-white/90 leading-relaxed max-w-xl mx-auto text-sm sm:text-base font-medium">
                Our admissions team is here to guide you through every step of the process. <br className="hidden sm:block" />
                <span className="font-semibold text-white">Don't hesitate to reach out if you have questions or need assistance with your application.</span>
              </p>

              {/* Contact Options */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 w-full">
                <div className="px-6 py-3 rounded-xl bg-white/90 text-blue-700 font-semibold text-base shadow-md transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-lg cursor-pointer">
                  📧 admissions@pinnacleacademy.edu
                </div>
                <div className="px-6 py-3 rounded-xl bg-white/90 text-blue-700 font-semibold text-base shadow-md transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-lg cursor-pointer">
                  📞 (555) 123-4567
                </div>
              </div>

              {/* Subtle bottom glow effect */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-indigo-400/30 blur-3xl rounded-full pointer-events-none"></div>
            </CardContent>
          </Card>

        </motion.div>
      </div>
    </section>
  )
}
