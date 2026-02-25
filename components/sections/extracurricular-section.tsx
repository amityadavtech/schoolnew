"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Music, Trophy, Users, BookOpen, Palette, Heart, Zap, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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
    <section className="relative py-20 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900" id="extracurricular">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-block mb-4">
            <Badge className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">Beyond the Classroom</Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-3">Beyond the Classroom</h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Our extracurricular program empowers students to explore interests, build skills, and connect with peers
            through a wide range of clubs and activities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <Card className="h-full rounded-3xl border-0 shadow-md hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mr-1">
                      <category.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-lg text-slate-900 dark:text-white">{category.category}</h3>
                      <div className="text-xs text-slate-500">{category.activities.length} activities</div>
                    </div>
                  </div>

                  <ul className="grid grid-cols-1 gap-3">
                    {category.activities.map((activity) => (
                      <li key={activity} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center justify-between">
                    <Button asChild variant="ghost" className="text-blue-700 hover:bg-blue-50">
                      <Link href="#">View Details</Link>
                    </Button>
                    <div className="text-xs text-slate-400">Popular</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Card className="rounded-3xl border-0 shadow-lg overflow-hidden">
            <div className="p-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <Heart className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-2xl font-serif font-bold mb-4">Join Our Community</h3>
              <p className="max-w-2xl mx-auto text-sm">
                With over 40 clubs and activities, every student can find something they love. Our faculty advisors
                provide mentorship and guidance to support growth and leadership.
              </p>
              <div className="mt-6 flex items-center justify-center gap-4">
                <Button asChild className="bg-white text-blue-700">
                  <Link href="/contact">Get Involved</Link>
                </Button>
                <Button asChild variant="ghost" className="text-white border border-white/20">
                  <Link href="/clubs">See All Clubs</Link>
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
