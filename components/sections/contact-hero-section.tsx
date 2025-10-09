"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function ContactHeroSection() {
  return (
  <section className="relative pt-4 pb-16 sm:pt-6 sm:pb-20 bg-gradient-to-br from-primary/5 to-accent/5">
  <div className="container mx-auto px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center justify-center mb-6 gap-2 sm:flex-row">
            <Mail className="h-10 w-10 sm:h-12 sm:w-12 text-accent mb-2 sm:mb-0 sm:mr-4" />
            <h1 className="text-3xl font-extrabold font-sans tracking-tight sm:text-4xl md:text-6xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-lg">
              Contact Us
            </h1>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed font-[500] font-sans max-w-2xl mx-auto">
            We're here to answer your questions and help you learn more about the Pinnacle Academy experience. Reach out to us anytime - we'd love to hear from you.
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
                className="rounded-2xl shadow-lg bg-white/80 dark:bg-background/80 p-6 flex flex-col items-center text-center border border-accent/10"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                  <item.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-serif font-semibold text-lg sm:text-xl mb-1 text-primary">{item.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base font-sans">{item.info}</p>
                <p className="text-xs text-muted-foreground">{item.subInfo}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
