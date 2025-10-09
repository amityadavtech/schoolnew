"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const stats = [
  { number: 1200, label: "Active Students", suffix: "+" },
  { number: 95, label: "College Acceptance Rate", suffix: "%" },
  { number: 75, label: "Expert Faculty Members", suffix: "+" },
  { number: 50, label: "Awards & Recognition", suffix: "+" },
]

function AnimatedNumber({ number, suffix = "" }: { number: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setCount((prev) => {
          if (prev < number) {
            return Math.min(prev + Math.ceil(number / 50), number)
          }
          return number
        })
      }, 30)

      return () => clearInterval(timer)
    }
  }, [isInView, number])

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-accent">
      {count}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Achievements in Numbers</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            These numbers reflect our commitment to excellence and the success of our educational community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <AnimatedNumber number={stat.number} suffix={stat.suffix} />
              <p className="text-primary-foreground/80 mt-2 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
