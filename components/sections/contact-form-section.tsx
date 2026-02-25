"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Send, CheckCircle } from "lucide-react"

export function ContactFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  // ---------------- SUCCESS SCREEN ----------------

  if (isSubmitted) {
    return (
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/20 shadow-2xl p-12 text-center"
          >
            <div className="absolute -top-20 -right-20 h-56 w-56 bg-blue-300/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-14 -left-14 h-40 w-40 bg-indigo-300/20 blur-3xl rounded-full" />

            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 rounded-full bg-blue-50 dark:bg-blue-950 flex items-center justify-center shadow-inner">
                <CheckCircle className="h-10 w-10 text-blue-600" />
              </div>
            </div>

            <h3 className="text-3xl font-serif font-semibold text-gray-900 dark:text-white mb-3">
              Message Sent Successfully!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
              Thank you for contacting us. We’ve received your message and our team will get back to you within 24 hours.
            </p>

            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="mt-8 border-blue-200 text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800"
            >
              Send Another Message
            </Button>
          </motion.div>
        </div>
      </section>
    )
  }

  // ---------------- FORM SCREEN ----------------

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container mx-auto max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-1.5 text-sm font-semibold rounded-full bg-blue-100/60 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300">
            Get In Touch
          </span>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mt-4">
            Send Us a Message
          </h2>

          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
            We're here to help. Fill out the form below and our team will get back to you shortly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Gradient glows */}
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <div className="absolute -top-32 -left-10 w-72 h-72 bg-blue-200/20 dark:bg-blue-900/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -right-10 w-72 h-72 bg-indigo-200/20 dark:bg-indigo-900/20 rounded-full blur-3xl" />
          </div>

          <div className="relative p-10 rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-2xl border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-8">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label>First Name *</Label>
                  <Input
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    required
                    className="rounded-xl h-12 px-4 bg-white/70 dark:bg-slate-800/60 border border-gray-200/50 dark:border-slate-700/50 backdrop-blur-md focus:ring-2 focus:ring-blue-500/40 transition-all"
                  />
                </div>

                <div>
                  <Label>Last Name *</Label>
                  <Input
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    required
                    className="rounded-xl h-12 px-4 bg-white/70 dark:bg-slate-800/60 border border-gray-200/50 dark:border-slate-700/50 backdrop-blur-md focus:ring-2 focus:ring-blue-500/40 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label>Email Address *</Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="rounded-xl h-12 px-4 bg-white/70 dark:bg-slate-800/60 border border-gray-200/50 dark:border-slate-700/50 backdrop-blur-md focus:ring-2 focus:ring-blue-500/40 transition-all"
                  />
                </div>

                <div>
                  <Label>Phone Number (Optional)</Label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="rounded-xl h-12 px-4 bg-white/70 dark:bg-slate-800/60 border border-gray-200/50 dark:border-slate-700/50 backdrop-blur-md focus:ring-2 focus:ring-blue-500/40 transition-all"
                  />
                </div>
              </div>

              <div>
                <Label>Inquiry Type *</Label>
                <Select onValueChange={(value) => handleInputChange("inquiryType", value)}>
                  <SelectTrigger className="rounded-xl h-12 bg-white/70 dark:bg-slate-800/60 border border-gray-200/50 dark:border-slate-700/50 px-4 backdrop-blur-md focus:ring-2 focus:ring-blue-500/40 transition-all">
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admissions">Admissions</SelectItem>
                    <SelectItem value="academics">Academics</SelectItem>
                    <SelectItem value="extracurricular">Extracurricular</SelectItem>
                    <SelectItem value="tour">Campus Tour</SelectItem>
                    <SelectItem value="general">General Inquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Subject *</Label>
                <Input
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  required
                  className="rounded-xl h-12 px-4 bg-white/70 dark:bg-slate-800/60 border border-gray-200/50 dark:border-slate-700/50 backdrop-blur-md focus:ring-2 focus:ring-blue-500/40 transition-all"
                />
              </div>

              <div>
                <Label>Message *</Label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  required
                  className="rounded-xl min-h-[150px] px-4 py-3 bg-white/70 dark:bg-slate-800/60 border border-gray-200/50 dark:border-slate-700/50 backdrop-blur-md focus:ring-2 focus:ring-blue-500/40 transition-all"
                />
              </div>

              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  className="px-12 h-12 rounded-xl text-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg hover:brightness-105 transition-all flex items-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </Button>
              </div>

            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
