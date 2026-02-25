"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Car, Bus } from "lucide-react"

export function MapSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center justify-center mb-6 gap-3 sm:flex-row">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 flex items-center justify-center mr-0 sm:mr-4">
              <MapPin className="h-7 w-7 text-blue-600 dark:text-blue-300" />
            </div>

            <div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
                Find Us
              </h2>
              <div className="h-1 w-24 mx-auto sm:mx-0 mt-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600" />
            </div>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-medium max-w-2xl mx-auto">
            Located in the heart of Excellence City, our campus is easily accessible by car, public transportation, and school bus services.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-8 mt-10">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-slate-800">
              {/* Decorative gradient panel */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 opacity-60 pointer-events-none" />
              <div className="relative p-4 sm:p-6">
                <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden shadow-inner">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.123456789!2d-74.0059413!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNCJX!5e0!3m2!1sen!2sus!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full block"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Location Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="rounded-2xl overflow-hidden">
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="absolute -top-6 -right-10 w-32 h-32 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 mr-3">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-lg sm:text-xl mb-1 text-gray-900 dark:text-white">Address</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-4">
                      123 Education Boulevard<br />
                      Excellence City, EC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-transparent border-blue-200 text-blue-600">
                  <Navigation className="h-4 w-4 mr-2 text-blue-600" />
                  Get Directions
                </Button>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden">
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="absolute -left-10 -bottom-8 w-28 h-28 rounded-full bg-indigo-100/30 blur-3xl pointer-events-none" />
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-100 to-blue-100 mr-3">
                    <Car className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-lg sm:text-xl mb-1 text-gray-900 dark:text-white">Parking</h3>
                    <ul className="text-gray-600 dark:text-gray-300 text-sm sm:text-base space-y-2">
                      <li>• Free visitor parking available</li>
                      <li>• Student parking permits required</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden">
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-blue-100/30 blur-3xl pointer-events-none" />
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 mr-3">
                    <Bus className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-lg sm:text-xl mb-1 text-gray-900 dark:text-white">Transportation</h3>
                    <ul className="text-gray-600 dark:text-gray-300 text-sm sm:text-base space-y-2">
                      <li>• School bus service available</li>
                      <li>• Metro bus stop nearby</li>
                      <li>• Bike racks on campus</li>
                      <li>• Carpool coordination program</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
