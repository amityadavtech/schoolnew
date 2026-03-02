"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"
import { motion } from "framer-motion"

export function PrincipalMessageSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Accent line */}
          <div className="mb-6">
            <div className="h-1 w-28 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto" />
          </div>

          <Card className="rounded-3xl shadow-md hover:shadow-2xl transition-shadow duration-300 border-0">
            <CardContent className="p-6 md:p-10">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-36 h-36 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                    <Avatar className="w-full h-full">
                      <AvatarImage src="/amit.png" alt="Dr. Margaret Thompson" />
                      <AvatarFallback className="text-2xl">MT</AvatarFallback>
                    </Avatar>
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Quote className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900 dark:text-white">A Message from the Principal</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Committed to excellence, character and care.</p>
                    </div>
                  </div>

                  <blockquote className="mt-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed italic">
                    "At Aira Bal Vidya Mandir Inter College, we believe every child has the potential to achieve greatness.
                    Our role is to provide a nurturing environment, exceptional teaching and comprehensive support so each
                    student can discover and develop their talents to the fullest. We educate not only minds, but also
                    character — shaping leaders and compassionate citizens for tomorrow."
                  </blockquote>

                  <div className="mt-6">
                    <p className="font-serif font-semibold text-lg text-slate-900 dark:text-white">Mr. Israj Ali</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Principal, Aira Bal Vidya Mandir Inter College</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">• 25+ years experience</p>
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
