"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Users, CheckCircle, Calendar } from "lucide-react"

const processSteps = [
  {
    step: 1,
    icon: FileText,
    title: "Submit Application",
    description: "Complete our online application form with all required documents and information.",
    timeline: "Rolling Admissions",
  },
  {
    step: 2,
    icon: Users,
    title: "Interview & Assessment",
    description: "Participate in a personal interview and complete our academic assessment.",
    timeline: "Within 2 weeks",
  },
  {
    step: 3,
    icon: CheckCircle,
    title: "Review & Decision",
    description: "Our admissions committee reviews your application and makes a decision.",
    timeline: "Within 1 week",
  },
  {
    step: 4,
    icon: Calendar,
    title: "Enrollment",
    description: "Accept your offer and complete enrollment procedures to secure your place.",
    timeline: "Upon acceptance",
  },
]

export function AdmissionProcessSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-950" id="process">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-24 -top-16 w-80 h-80 rounded-full bg-gradient-to-br from-blue-200/30 to-indigo-200/20 blur-3xl opacity-60"></div>
      <div className="pointer-events-none absolute -right-24 -bottom-16 w-72 h-72 rounded-full bg-gradient-to-br from-indigo-200/20 to-blue-200/10 blur-2xl opacity-50"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
            Join Our Community: Admission Process
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium">
            Our streamlined admission process is designed to get to know you better while making the application experience as smooth as possible.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="rounded-2xl p-6 bg-white shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center h-full relative">
                <CardContent className="p-0 flex flex-col items-center">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mr-3 font-bold shadow-sm">
                      <span className="text-blue-700">{step.step}</span>
                    </div>
                    <step.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-serif font-semibold text-base sm:text-lg mb-2 text-slate-900">{step.title}</h3>
                  <p className="text-slate-600 text-sm sm:text-base font-sans mb-2">{step.description}</p>
                  <div className="text-sm text-slate-600 font-medium">{step.timeline}</div>
                </CardContent>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-slate-200" />
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
