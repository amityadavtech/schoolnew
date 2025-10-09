"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Music, Trophy, Users, BookOpen, Palette, Heart, Zap } from "lucide-react"
import { motion } from "framer-motion"

const activities = [
  {
    category: "Arts & Culture",
    icon: Palette,
    activities: ["Drama Club", "Art Society", "Photography Club", "Creative Writing", "Film Production"],
  },
  {
    category: "Music & Performance",
    icon: Music,
    activities: ["School Orchestra", "Jazz Band", "Choir", "Musical Theater", "Individual Lessons"],
  },
  {
    category: "Sports & Athletics",
    icon: Trophy,
    activities: ["Basketball", "Soccer", "Tennis", "Swimming", "Track & Field", "Cross Country"],
  },
  {
    category: "Academic Clubs",
    icon: BookOpen,
    activities: ["Debate Team", "Model UN", "Science Olympiad", "Math Club", "National Honor Society"],
  },
  {
    category: "Leadership & Service",
    icon: Users,
    activities: ["Student Government", "Peer Mentoring", "Community Service", "Environmental Club", "Volunteer Corps"],
  },
  {
    category: "Technology & Innovation",
    icon: Zap,
    activities: ["Robotics Team", "Coding Club", "Tech Support", "Digital Media", "Innovation Lab"],
  },
]

export function ExtracurricularSection() {
  return (
    <section className="py-16" id="extracurricular">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Beyond the Classroom</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our extensive extracurricular program provides students with opportunities to explore their interests,
            develop new skills, and build lasting friendships while contributing to our vibrant school community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mr-3">
                      <category.icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-serif font-semibold text-lg">{category.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.activities.map((activity) => (
                      <li key={activity} className="text-muted-foreground text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
            <CardContent className="p-8">
              <Heart className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-2xl font-serif font-bold mb-4">Join Our Community</h3>
              <p className="text-primary-foreground/90 max-w-2xl mx-auto">
                With over 40 clubs and activities to choose from, every student can find their passion and make
                meaningful connections. Our dedicated faculty advisors ensure that each program provides valuable
                learning experiences and personal growth opportunities.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
