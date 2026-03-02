"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
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
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  /* ---------------- SUCCESS SCREEN ---------------- */

  if (isSubmitted) {
    return (
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:to-slate-900">

        <div className="max-w-md mx-auto">

          <motion.div
            initial={{ opacity: 0, scale: .95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 text-center"
          >

            <div className="flex justify-center mb-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-50 dark:bg-blue-950 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white mb-2">
              Message Sent Successfully
            </h3>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Our team will respond within 24 hours.
            </p>

            <Button
              onClick={() => setIsSubmitted(false)}
              className="mt-6 w-full h-11 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
            >
              Send Another Message
            </Button>

          </motion.div>

        </div>

      </section>
    )
  }

  /* ---------------- FORM SCREEN ---------------- */

  return (

    <section className="py-14 sm:py-20 px-4 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:to-slate-900">

      <div className="max-w-4xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >

          <span className="inline-block text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 mb-4">
            Contact Us
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Get in Touch
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
            Fill the form and our team will contact you shortly.
          </p>

        </motion.div>


        {/* Form Card */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10">

            <form
              onSubmit={handleSubmit}
              className="space-y-5 sm:space-y-6"
            >

              {/* Name row */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <div className="space-y-1.5">
                  <Label>First Name</Label>

                  <Input
                    required
                    value={formData.firstName}
                    onChange={e =>
                      handleInputChange("firstName", e.target.value)
                    }
                    className="h-11 rounded-xl"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label>Last Name</Label>

                  <Input
                    required
                    value={formData.lastName}
                    onChange={e =>
                      handleInputChange("lastName", e.target.value)
                    }
                    className="h-11 rounded-xl"
                  />
                </div>

              </div>


              {/* Email row */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <div className="space-y-1.5">
                  <Label>Email</Label>

                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e =>
                      handleInputChange("email", e.target.value)
                    }
                    className="h-11 rounded-xl"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label>Phone</Label>

                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={e =>
                      handleInputChange("phone", e.target.value)
                    }
                    className="h-11 rounded-xl"
                  />
                </div>

              </div>


              {/* Inquiry */}

              <div className="space-y-1.5">

                <Label>Inquiry Type</Label>

                <Select
                  onValueChange={value =>
                    handleInputChange("inquiryType", value)
                  }
                >

                  <SelectTrigger className="h-11 rounded-xl">
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>

                  <SelectContent>

                    <SelectItem value="admissions">
                      Admissions
                    </SelectItem>

                    <SelectItem value="academics">
                      Academics
                    </SelectItem>

                    <SelectItem value="general">
                      General Inquiry
                    </SelectItem>

                  </SelectContent>

                </Select>

              </div>


              {/* Subject */}

              <div className="space-y-1.5">

                <Label>Subject</Label>

                <Input
                  required
                  value={formData.subject}
                  onChange={e =>
                    handleInputChange("subject", e.target.value)
                  }
                  className="h-11 rounded-xl"
                />

              </div>


              {/* Message */}

              <div className="space-y-1.5">

                <Label>Message</Label>

                <Textarea
                  required
                  value={formData.message}
                  onChange={e =>
                    handleInputChange("message", e.target.value)
                  }
                  className="min-h-[130px] sm:min-h-[150px] rounded-xl"
                />

              </div>


              {/* Button */}

              <div className="pt-2">

                <Button
                  type="submit"
                  className="
                  w-full
                  h-11 sm:h-12
                  rounded-xl
                  bg-gradient-to-r
                  from-blue-600
                  to-indigo-600
                  text-white
                  font-medium
                  shadow-md
                  hover:scale-[1.02]
                  active:scale-[0.98]
                  transition
                  flex items-center justify-center gap-2
                  "
                >

                  <Send className="w-4 h-4" />
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