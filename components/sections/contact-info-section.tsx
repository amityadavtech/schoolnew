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
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-950">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-24 -top-16 w-80 h-80 rounded-full bg-gradient-to-br from-blue-200/30 to-indigo-200/20 blur-3xl opacity-60"></div>
      <div className="pointer-events-none absolute -right-24 -bottom-16 w-72 h-72 rounded-full bg-gradient-to-br from-indigo-200/20 to-blue-200/10 blur-2xl opacity-50"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-center mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-7 h-7 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">Find Us</h2>
          </div>
          <p className="mt-2 text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Our dedicated team is here to assist you with any questions about admissions, academics, or student life at <span className="font-semibold text-blue-700 dark:text-blue-400">Aira Bal Vidya Mandir Inter College</span>.
          </p>
          <div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-8 mt-8">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="rounded-2xl p-6 bg-white shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mb-3">
                  <info.icon className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="font-serif font-semibold text-lg sm:text-xl mb-1 text-slate-900">{info.title}</h3>
                <div className="space-y-2 w-full">
                  {info.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex justify-between">
                      <span className="text-slate-600 text-sm">{detail.label}:</span>
                      <span className="text-sm font-medium">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))} 
          </div>
          <div className="rounded-2xl shadow-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-8 mt-10 flex flex-col items-center text-center border border-gray-100">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="h-8 w-8 mr-3 text-white" />
              <div>
                <h3 className="text-2xl font-serif font-bold text-white">Visit Our Campus</h3>
                <p className="text-white/90">123 Education Boulevard, Excellence City, EC 12345</p>
              </div>
            </div>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Experience our beautiful campus firsthand. Schedule a tour to see our state-of-the-art facilities, meet our faculty, and discover what makes Aira Bal Vidya Mandir Inter College special.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md">
                Schedule a Tour
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent"
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
