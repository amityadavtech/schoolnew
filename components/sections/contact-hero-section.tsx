"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function ContactHeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-white  to-slate-100 dark:from-slate-900  dark:to-slate-950">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-24 -top-16 w-80 h-80 rounded-full bg-gradient-to-br from-blue-200/30 to-indigo-200/20 blur-3xl opacity-60"></div>
      <div className="pointer-events-none absolute -right-24 -bottom-16 w-72 h-72 rounded-full bg-gradient-to-br from-indigo-200/20 to-blue-200/10 blur-2xl opacity-50"></div>

      <div className="container mx-auto px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-center mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-7 h-7 text-blue-600" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Contact Us
            </h1>
          </div> 
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed font-[500] font-sans max-w-2xl mx-auto">
            We're here to answer your questions and help you learn more about the Aira Bal Vidya Mandir Inter College experience. Reach out to us anytime - we'd love to hear from you.
          </p>

          <div className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 mt-8">
            {[
              {
                icon: Phone,
                title: "Call Us",
                info: "(555) 123-4567",
                subInfo: "Mon-Fri 8AM-5PM",
              },
              {
                icon: Mail,
                title: "Email Us",
                info: "info@pinnacleacademy.edu",
                subInfo: "We reply within 24hrs",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                info: "123 Education Blvd",
                subInfo: "Excellence City, EC 12345",
              },
              {
                icon: Clock,
                title: "Office Hours",
                info: "Mon-Fri: 8AM-5PM",
                subInfo: "Sat: 9AM-2PM",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="rounded-2xl p-6 bg-white shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mb-3">
                  <item.icon className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="font-serif font-semibold text-lg sm:text-xl mb-1 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-sm sm:text-base font-sans">{item.info}</p>
                <p className="text-xs text-slate-600">{item.subInfo}</p>
              </motion.div>
            ))} 
          </div>
        </motion.div>
      </div>
    </section>
  )
}
