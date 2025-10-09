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
  <section className="pt-8 pb-16 sm:py-16" id="process">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl font-extrabold font-sans tracking-tight sm:text-3xl md:text-4xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3 sm:mb-4">
            Join Our Community: Admission Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base font-medium font-sans">
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
              <Card className="rounded-2xl shadow-lg bg-white/80 dark:bg-background/80 p-5 flex flex-col items-center text-center border border-accent/10 h-full relative">
                <CardContent className="p-0 flex flex-col items-center">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-3 font-bold shadow-md">
                      {step.step}
                    </div>
                    <step.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-serif font-semibold text-base sm:text-lg mb-2 text-primary">{step.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base font-sans mb-2">{step.description}</p>
                  <div className="text-xs text-accent font-medium">{step.timeline}</div>
                </CardContent>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-accent/30" />
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
