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
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">What Our Community Says</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from parents, students, and alumni about their experiences at Aira Bal Vidya Mandir Inter College.
          </p>
        </motion.div>

        {/* Mobile carousel */}
        <div className="block md:hidden overflow-x-hidden relative">
          <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${current * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="min-w-full sm:px-2">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 text-pretty italic">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <Avatar className="h-9 w-9 mr-3 sm:h-12 sm:w-12 sm:mr-4">
                        <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                        <AvatarFallback>
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-primary">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 text-pretty italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <Avatar className="h-9 w-9 mr-3 sm:h-12 sm:w-12 sm:mr-4">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-primary">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
