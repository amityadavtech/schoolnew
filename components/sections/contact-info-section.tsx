"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Users, Calendar } from "lucide-react"

const contactInfo = [
  {
    title: "Main Office",
    icon: Phone,
    details: [
      { label: "Phone", value: "(555) 123-4567" },
      { label: "Fax", value: "(555) 123-4568" },
      { label: "Email", value: "info@pinnacleacademy.edu" },
    ],
  },
  {
    title: "Admissions Office",
    icon: Users,
    details: [
      { label: "Phone", value: "(555) 123-4569" },
      { label: "Email", value: "admissions@pinnacleacademy.edu" },
      { label: "Hours", value: "Mon-Fri 8AM-5PM" },
    ],
  },
  {
    title: "Student Services",
    icon: Calendar,
    details: [
      { label: "Phone", value: "(555) 123-4570" },
      { label: "Email", value: "services@pinnacleacademy.edu" },
      { label: "Hours", value: "Mon-Fri 8AM-4PM" },
    ],
  },
]

export function ContactInfoSection() {
  return (
    <section className="relative pt-[10px] pb-16 sm:pt-[10px] sm:pb-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center justify-center mb-6 gap-2 sm:flex-row">
            <MapPin className="h-10 w-10 sm:h-12 sm:w-12 text-accent mb-2 sm:mb-0 sm:mr-4" />
            <h2 className="text-3xl font-extrabold font-sans tracking-tight sm:text-4xl md:text-6xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-lg">
              Find Us
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed font-[500] font-sans">
            Our dedicated team is here to assist you with any questions about admissions, academics, or student life at <span className="font-bold text-primary">Pinnacle Academy</span>.
          </p>
          <div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-8 mt-8">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="rounded-2xl shadow-lg bg-white/80 dark:bg-background/80 p-6 flex flex-col items-center text-center border border-accent/10"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                  <info.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-serif font-semibold text-lg sm:text-xl mb-1 text-primary">{info.title}</h3>
                <div className="space-y-2 w-full">
                  {info.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex justify-between">
                      <span className="text-muted-foreground text-sm">{detail.label}:</span>
                      <span className="text-sm font-medium">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl shadow-lg bg-primary text-primary-foreground p-8 mt-10 flex flex-col items-center text-center border border-accent/10">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="h-8 w-8 mr-3" />
              <div>
                <h3 className="text-2xl font-serif font-bold">Visit Our Campus</h3>
                <p className="text-primary-foreground/90">123 Education Boulevard, Excellence City, EC 12345</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Experience our beautiful campus firsthand. Schedule a tour to see our state-of-the-art facilities, meet our faculty, and discover what makes Pinnacle Academy special.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Schedule a Tour
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Virtual Tour
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
