"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"
import { motion } from "framer-motion"

export function PrincipalMessageSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white  to-slate-100 dark:from-slate-900 dark:to-slate-950 overflow-hidden">

      {/* background decorative blur */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >

          {/* Heading */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 text-xs font-semibold tracking-widest text-blue-700 bg-blue-100 rounded-full">
              LEADERSHIP MESSAGE
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white">
              A Message from the Principal
            </h2>

            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Inspiring students to learn, grow and lead.
            </p>
          </div>

          <Card className="rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-800">
            <CardContent className="p-8 md:p-12">

              <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">

                {/* principal image */}
                <div className="flex-shrink-0 text-center">
                  <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-xl">
                    <Avatar className="w-full h-full">
                      <AvatarImage src="/amit.png" alt="Principal" />
                      <AvatarFallback>PA</AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="mt-4">
                    <p className="font-serif font-semibold text-lg text-slate-900 dark:text-white">
                      Mr. Israj Ali
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Principal
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      25+ Years Experience
                    </p>
                  </div>
                </div>

                {/* message */}
                <div className="flex-1">

                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                      <Quote className="w-6 h-6 text-blue-600" />
                    </div>

                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      Our Vision for Students
                    </h3>
                  </div>

                  <blockquote className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed italic border-l-4 border-blue-600 pl-5">
                    At Aira Bal Vidya Mandir Inter College, we believe every child has the
                    potential to achieve greatness. Our mission is to create a nurturing
                    learning environment where students develop knowledge, confidence,
                    and strong moral values.
                    <br /><br />
                    We strive not only to educate minds but also to shape character,
                    preparing young individuals to become responsible citizens and
                    future leaders of society.
                  </blockquote>

                </div>

              </div>

            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}