"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Car, Bus } from "lucide-react"

export function MapSection() {
  return (
  <section className="pt-4 pb-16 sm:pt-8 sm:pb-20 bg-gradient-to-br from-primary/5 to-accent/5">
  <div className="container mx-auto px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center justify-center mb-6 gap-2 sm:flex-row">
            <MapPin className="h-10 w-10 sm:h-12 sm:w-12 text-accent mb-2 sm:mb-0 sm:mr-4" />
            <h2 className="text-3xl font-extrabold font-sans tracking-tight sm:text-4xl md:text-6xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-lg">
              Find Us
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed font-[500] font-sans max-w-2xl mx-auto">
            Located in the heart of Excellence City, our campus is easily accessible by car, public transportation, and school bus services.
          </p>
        </motion.div>

  <div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-8 mt-8">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <Card className="h-full rounded-2xl shadow-lg bg-white/80 dark:bg-background/80 border border-accent/10">
              <CardContent className="p-0">
                <div className="relative h-80 sm:h-96 bg-muted rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.123456789!2d-74.0059413!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNCJX!5e0!3m2!1sen!2sus!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Location Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="rounded-2xl shadow-lg bg-white/80 dark:bg-background/80 border border-accent/10">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-7 w-7 text-accent mr-3" />
                  <h3 className="font-serif font-semibold text-lg sm:text-xl mb-1 text-primary">Address</h3>
                </div>
                <p className="text-muted-foreground text-sm sm:text-base font-sans mb-4">
                  123 Education Boulevard
                  <br />
                  Excellence City, EC 12345
                  <br />
                  United States
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  <Navigation className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg bg-white/80 dark:bg-background/80 border border-accent/10">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Car className="h-7 w-7 text-accent mr-3" />
                  <h3 className="font-serif font-semibold text-lg sm:text-xl mb-1 text-primary">Parking</h3>
                </div>
                <ul className="text-muted-foreground text-sm sm:text-base font-sans space-y-2">
                  <li>• Free visitor parking available</li>
                  <li>• Student parking permits required</li>
                  <li>• Handicap accessible spaces</li>
                  <li>• Electric vehicle charging stations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg bg-white/80 dark:bg-background/80 border border-accent/10">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Bus className="h-7 w-7 text-accent mr-3" />
                  <h3 className="font-serif font-semibold text-lg sm:text-xl mb-1 text-primary">Transportation</h3>
                </div>
                <ul className="text-muted-foreground text-sm sm:text-base font-sans space-y-2">
                  <li>• School bus service available</li>
                  <li>• Metro bus stop nearby</li>
                  <li>• Bike racks on campus</li>
                  <li>• Carpool coordination program</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
