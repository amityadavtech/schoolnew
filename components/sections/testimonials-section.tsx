"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Parent of Emma (Grade 8)",
    content:
  "Aira Bal Vidya Mandir Inter College has exceeded our expectations. The teachers are incredibly dedicated, and Emma has grown both academically and personally. The school's commitment to excellence is evident in everything they do.",
    rating: 5,
    avatar: "/professional-woman-smiling.png",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Alumni, Class of 2020",
    content:
  "The education I received at Aira Bal Vidya Mandir Inter College prepared me exceptionally well for university. The critical thinking skills and confidence I developed here have been invaluable in my college journey.",
    rating: 5,
    avatar: "/young-professional-man-smiling.png",
  },
  {
    id: 3,
    name: "Dr. Amanda Rodriguez",
    role: "Parent of twins (Grade 5)",
    content:
      "As an educator myself, I appreciate the innovative teaching methods and personalized attention each student receives. My twins love coming to school every day, which speaks volumes about the positive environment.",
    rating: 5,
    avatar: "/professional-latina-woman-smiling.png",
  },
]

export function TestimonialsSection() {
  // Carousel state for mobile
  const [current, setCurrent] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  useEffect(() => {
    if (!isMobile) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isMobile]);

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4  dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <div className="inline-block mb-3 sm:mb-4">
            <span className="mb-5 sm:mb-6 text-white bg-white/15 border border-white/25 backdrop-blur-md text-xs sm:text-sm inline-flex px-3 py-1.5 rounded-full shadow-lg">
              Client Stories
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-white dark:text-grey mb-3 sm:mb-4">What Our Community Says</h2>
          <p className="text-sm sm:text-base md:text-lg text-white dark:text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
            Hear from parents, students, and alumni about their experiences at Aira Bal Vidya Mandir Inter College.
          </p>
        </motion.div>

        {/* Mobile carousel */}
        <div className="block md:hidden overflow-x-hidden relative">
          <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${current * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="min-w-full px-1 sm:px-2">
                <div className="relative h-full bg-white dark:bg-slate-800 rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-200 dark:border-slate-700 shadow-md overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 dark:from-blue-500/10 dark:to-indigo-500/10 pointer-events-none" />
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-transparent" />
                  
                  <div className="relative flex flex-col h-full">
                    <div className="flex items-center mb-3 sm:mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-3 sm:h-4 w-3 sm:w-4 fill-blue-500 text-blue-500" />
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-pretty italic flex-grow text-xs sm:text-sm leading-relaxed">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <Avatar className="h-8 sm:h-10 w-8 sm:w-10 mr-2 sm:mr-3">
                        <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                        <AvatarFallback>
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">{testimonial.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full bg-white dark:bg-slate-800 rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-200 dark:border-slate-700 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 dark:from-blue-500/10 dark:to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-transparent" />
                
                <div className="relative flex flex-col h-full">
                  <div className="flex items-center mb-4 sm:mb-5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 sm:h-5 w-4 sm:w-5 fill-blue-500 text-blue-500" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-pretty italic leading-relaxed flex-grow text-xs sm:text-sm">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <Avatar className="h-10 sm:h-12 w-10 sm:w-12 mr-3 sm:mr-4">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">{testimonial.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
