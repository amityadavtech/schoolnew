"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"
import { motion } from "framer-motion"

export function PrincipalMessageSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card>
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="flex-shrink-0">
                  <Avatar className="w-32 h-32">
                    <AvatarImage src="/principal-professional-portrait.png" alt="Dr. Margaret Thompson" />
                    <AvatarFallback className="text-2xl">MT</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <Quote className="h-8 w-8 text-accent mb-4 mx-auto md:mx-0" />
                  <blockquote className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed italic">
                    "At Pinnacle Academy, we believe that every child has the potential to achieve greatness. Our role
                    is to provide the nurturing environment, exceptional teaching, and comprehensive support that allows
                    each student to discover their unique talents and develop them to the fullest. We are not just
                    educating students; we are shaping the leaders, innovators, and compassionate citizens of tomorrow."
                  </blockquote>
                  <div>
                    <p className="font-serif font-semibold text-lg text-primary">Dr. Margaret Thompson</p>
                    <p className="text-muted-foreground">Principal, Pinnacle Academy</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Ed.D. Educational Leadership, 25+ years experience
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
