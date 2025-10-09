"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart } from "lucide-react"
import { motion } from "framer-motion"

export function MissionVisionSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">Our Mission</h2>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  To provide exceptional education that nurtures intellectual curiosity, develops critical thinking
                  skills, and instills strong moral values, preparing students to become confident, compassionate, and
                  capable leaders in their communities and beyond.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-accent" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">Our Vision</h2>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  To be recognized as the premier educational institution that transforms lives through innovative
                  teaching, personalized learning experiences, and a commitment to excellence that empowers every
                  student to reach their full potential and make a positive impact on the world.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">Our Values</h2>
                <div className="text-muted-foreground text-pretty leading-relaxed space-y-2">
                  <p className="font-medium">Excellence • Integrity • Innovation</p>
                  <p className="font-medium">Compassion • Respect • Responsibility</p>
                  <p className="text-sm">
                    These core values guide every decision we make and every interaction we have within our school
                    community.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
