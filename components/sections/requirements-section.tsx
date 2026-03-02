"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, User, GraduationCap, Heart } from "lucide-react"

const requirements = [
  {
    category: "Academic Documents",
    icon: FileText,
    items: [
      "Official transcripts from previous schools",
      "Standardized test scores (if applicable)",
      "Academic recommendation letters (2)",
      "Portfolio or work samples (for arts programs)",
    ],
  },
  {
    category: "Personal Information",
    icon: User,
    items: [
      "Completed application form",
      "Personal statement or essay",
      "Extracurricular activities list",
      "Community service documentation",
    ],
  },
  {
    category: "Assessment Requirements",
    icon: GraduationCap,
    items: [
      "Entrance examination (age-appropriate)",
      "English proficiency test (international students)",
      "Personal interview with admissions team",
      "Parent/guardian meeting",
    ],
  },
  {
    category: "Health & Wellness",
    icon: Heart,
    items: [
      "Medical examination report",
      "Immunization records",
      "Emergency contact information",
      "Dietary restrictions or allergies",
    ],
  },
]

export function RequirementsSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-950" id="requirements">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-24 -top-16 w-80 h-80 rounded-full bg-gradient-to-br from-blue-200/30 to-indigo-200/20 blur-3xl opacity-60"></div>
      <div className="pointer-events-none absolute -right-24 -bottom-16 w-72 h-72 rounded-full bg-gradient-to-br from-indigo-200/20 to-blue-200/10 blur-2xl opacity-50"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4">Admission Requirements</h2>
          <p className="mt-2 text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            To ensure we can provide the best educational experience for your child, please prepare the following
            documents and information for your application.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {requirements.map((req, index) => (
            <motion.div
              key={req.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-100 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mr-3">
                      <req.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-slate-900 font-semibold">{req.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {req.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-slate-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full flex justify-center px-4 sm:px-6 mt-16"
        >
          <div className="relative w-full max-w-3xl">

            {/* Glow background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-indigo-500/30 to-blue-500/30 blur-3xl rounded-[2rem] opacity-60"></div>

            {/* Main Card */}
            <div className="
      relative
      bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700
      rounded-2xl sm:rounded-3xl
      shadow-xl sm:shadow-2xl
      border border-white/10
      px-6 py-8 sm:px-10 sm:py-12
      text-center
      overflow-hidden
    ">

              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-white/70 to-transparent"></div>

              {/* Icon */}
              <div className="
        mx-auto mb-5 sm:mb-6
        w-14 h-14 sm:w-16 sm:h-16
        rounded-xl sm:rounded-2xl
        bg-white/10
        backdrop-blur-md
        border border-white/20
        flex items-center justify-center
        shadow-lg
      ">
                <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>

              {/* Heading */}
              <h3 className="
        text-xl sm:text-3xl
        font-bold
        text-white
        mb-3
        tracking-tight
      ">
                Need Help With Admissions?
              </h3>

              {/* Description */}
              <p className="
        text-white/85
        text-sm sm:text-base
        leading-relaxed
        max-w-xl
        mx-auto
        mb-6 sm:mb-8
      ">
                Our admissions team is ready to assist you at every step of the application process.
                Get in touch anytime for guidance, support, or answers to your questions.
              </p>

              {/* Contact Buttons */}
              <div className="
        flex flex-col sm:flex-row
        gap-3 sm:gap-4
        justify-center
        items-center
      ">

                {/* Email Button */}
                <a
                  href="mailto:admissions@school.edu"
                  className="
            w-full sm:w-auto
            flex items-center justify-center gap-2
            px-5 py-3
            rounded-lg sm:rounded-xl
            bg-white
            text-blue-700
            font-semibold
            text-sm sm:text-base
            shadow-md
            hover:shadow-xl
            hover:scale-[1.04]
            active:scale-[0.97]
            transition-all duration-300
          "
                >
                  📧 Email Admissions
                </a>

                {/* Call Button */}
                <a
                  href="tel:+911234567890"
                  className="
            w-full sm:w-auto
            flex items-center justify-center gap-2
            px-5 py-3
            rounded-lg sm:rounded-xl
            bg-transparent
            border border-white/30
            text-white
            font-semibold
            text-sm sm:text-base
            backdrop-blur-md
            hover:bg-white/10
            hover:scale-[1.04]
            active:scale-[0.97]
            transition-all duration-300
          "
                >
                  📞 Call Now
                </a>

              </div>

              {/* Bottom Glow */}
              <div className="
        absolute
        bottom-[-40px]
        left-1/2
        -translate-x-1/2
        w-[70%]
        h-[80px]
        bg-blue-400/40
        blur-3xl
        rounded-full
      "></div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
