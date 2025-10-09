"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl p-6 sm:p-10 md:p-12 text-center shadow-xl border border-accent/20 bg-white/90 dark:bg-zinc-900/90 dark:border-zinc-700"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-sans mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Ready to Join Our Community?
          </h2>
          <p className="text-zinc-700 dark:text-zinc-200 text-base sm:text-lg mb-8 max-w-2xl mx-auto font-medium font-sans">
            Take the first step towards your child's bright future.<br className="hidden sm:block" />
            <span className="text-accent font-semibold">Schedule a campus tour</span> or <span className="text-primary font-semibold">start your application today</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-md">
              <Link href="/admissions">
                Start Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-accent text-primary dark:text-accent-foreground hover:bg-accent/10 bg-transparent font-bold shadow-md"
            >
              <Link href="/contact">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Tour
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
