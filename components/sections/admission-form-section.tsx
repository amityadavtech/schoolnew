"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle, User, Users, MapPin, FileText, School } from "lucide-react"

const inputClass = `
  w-full text-sm text-slate-700 dark:text-slate-300 placeholder:text-slate-400
  bg-white dark:bg-slate-800/60
  border border-blue-100 dark:border-blue-900/40
  rounded-xl px-4 py-2.5
  outline-none
  transition-all duration-200
  focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/40
  hover:border-blue-300
`

const sectionHeadingClass = `
  flex items-center gap-2.5 mb-4
`

function SectionHeading({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <div className={sectionHeadingClass}>
      <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
        <Icon className="w-3.5 h-3.5 text-white" />
      </div>
      <span className="text-xs font-semibold tracking-widest uppercase text-blue-700 dark:text-blue-400">
        {label}
      </span>
      <div className="flex-1 h-px bg-blue-100 dark:bg-blue-900/40" />
    </div>
  )
}

export function AdmissionFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    studentFirstName: "",
    studentLastName: "",
    dateOfBirth: "",
    grade: "",
    parentFirstName: "",
    parentLastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    previousSchool: "",
    personalStatement: "",
    tourInterest: "",
    agreeToTerms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  // ── Success State ──
  if (isSubmitted) {
    return (
      <>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500;600&display=swap');
          .af-root { font-family: 'DM Sans', sans-serif; }
          .af-root h2, .af-root h3 { font-family: 'Playfair Display', serif; }
        `}</style>
        <section className="af-root relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-blue-50/30 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 py-20 px-4" id="application">
          <div className="pointer-events-none absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, #1d4ed8 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-md mx-auto"
          >
            <div className="rounded-2xl border border-blue-100 dark:border-blue-900/40 bg-white dark:bg-slate-800/60 shadow-sm overflow-hidden text-center">
              <div className="h-[3px] bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400" />
              <div className="p-8 flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center shadow-md shadow-blue-200 dark:shadow-blue-900/40">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Application Submitted!</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                    Thank you for your interest. Our admissions team will contact you within 2–3 business days.
                  </p>
                </div>
                <div className="w-full rounded-xl border border-blue-100 dark:border-blue-900/40 bg-blue-50/60 dark:bg-blue-950/20 px-4 py-3">
                  <span className="text-xs font-semibold tracking-widest uppercase text-blue-700 dark:text-blue-400">
                    Application ID: PA-2024-{Math.random().toString(36).substr(2, 6).toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </>
    )
  }

  // ── Form ──
  return (
    <>
      <style>{`
       
        .af-input {
          width: 100%;
          font-size: 0.875rem;
          color: #334155;
          background: #fff;
          border: 1px solid #bfdbfe;
          border-radius: 0.75rem;
          padding: 0.625rem 1rem;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          font-family: 'DM Sans', sans-serif;
        }
        .af-input::placeholder { color: #94a3b8; }
        .af-input:hover { border-color: #93c5fd; }
        .af-input:focus { border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37,99,235,0.1); }
        .dark .af-input { background: rgba(30,41,59,0.6); border-color: rgba(37,99,235,0.3); color: #cbd5e1; }
        .dark .af-input:focus { border-color: #60a5fa; box-shadow: 0 0 0 3px rgba(96,165,250,0.1); }

        .af-textarea {
          width: 100%;
          font-size: 0.875rem;
          color: #334155;
          background: #fff;
          border: 1px solid #bfdbfe;
          border-radius: 0.75rem;
          padding: 0.625rem 1rem;
          outline: none;
          min-height: 100px;
          resize: vertical;
          transition: border-color 0.2s, box-shadow 0.2s;
          font-family: 'DM Sans', sans-serif;
        }
        .af-textarea::placeholder { color: #94a3b8; }
        .af-textarea:hover { border-color: #93c5fd; }
        .af-textarea:focus { border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37,99,235,0.1); }
        .dark .af-textarea { background: rgba(30,41,59,0.6); border-color: rgba(37,99,235,0.3); color: #cbd5e1; }

        .af-submit-btn {
          transition: transform 0.22s cubic-bezier(0.22,1,0.36,1), box-shadow 0.22s ease, filter 0.2s;
        }
        .af-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px -4px rgba(37,99,235,0.4);
          filter: brightness(1.05);
        }
        .af-submit-btn:active {
          transform: translateY(0);
        }

        /* Override shadcn Select trigger to match theme */
        .af-select [data-radix-select-trigger] {
          border-radius: 0.75rem;
          border-color: #bfdbfe;
          font-size: 0.875rem;
        }
      `}</style>

      <section
        className="af-root relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-blue-50/30 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 py-16 md:py-24 px-4"
        id="application"
      >
        {/* Dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "radial-gradient(circle, #1d4ed8 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="pointer-events-none absolute -left-32 -top-10 w-96 h-96 rounded-full bg-blue-200/20 dark:bg-blue-900/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 -bottom-10 w-80 h-80 rounded-full bg-blue-100/30 dark:bg-blue-800/10 blur-3xl" />

        <div className="relative mx-auto max-w-2xl">

          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-blue-600 dark:bg-blue-400 rounded-full" />
              <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400">
                Admissions
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-3">
              Apply Now
            </h2>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-light leading-relaxed">
              Fill in the details below and our admissions team will get back to you within 2–3 business days.
            </p>
          </motion.div>

          {/* ── Form Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl border border-blue-100 dark:border-blue-900/40 bg-white dark:bg-slate-800/60 shadow-sm overflow-hidden">
              <div className="h-[3px] bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400" />

              <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-7">

                {/* ── Student Info ── */}
                <div>
                  <SectionHeading icon={User} label="Student Info" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input className="af-input" placeholder="First Name *" value={formData.studentFirstName} onChange={(e) => handleInputChange("studentFirstName", e.target.value)} required />
                    <input className="af-input" placeholder="Last Name *" value={formData.studentLastName} onChange={(e) => handleInputChange("studentLastName", e.target.value)} required />
                    <input className="af-input sm:col-span-2" type="date" value={formData.dateOfBirth} onChange={(e) => handleInputChange("dateOfBirth", e.target.value)} required />
                    <div className="af-select sm:col-span-2">
                      <Select onValueChange={(v) => handleInputChange("grade", v)}>
                        <SelectTrigger className="rounded-xl border-blue-100 text-sm focus:ring-blue-100 focus:border-blue-500">
                          <SelectValue placeholder="Select Grade *" />
                        </SelectTrigger>
                        <SelectContent>
                          {[...Array(12)].map((_, i) => (
                            <SelectItem key={i + 1} value={(i + 1).toString()}>Grade {i + 1}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* ── Parent Info ── */}
                <div>
                  <SectionHeading icon={Users} label="Parent / Guardian" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input className="af-input" placeholder="Parent First Name *" value={formData.parentFirstName} onChange={(e) => handleInputChange("parentFirstName", e.target.value)} required />
                    <input className="af-input" placeholder="Parent Last Name *" value={formData.parentLastName} onChange={(e) => handleInputChange("parentLastName", e.target.value)} required />
                    <input className="af-input sm:col-span-2" type="email" placeholder="Email *" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} required />
                    <input className="af-input sm:col-span-2" type="tel" placeholder="Phone *" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} required />
                  </div>
                </div>

                {/* ── Address ── */}
                <div>
                  <SectionHeading icon={MapPin} label="Address" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input className="af-input sm:col-span-2" placeholder="Street Address *" value={formData.address} onChange={(e) => handleInputChange("address", e.target.value)} required />
                    <input className="af-input" placeholder="City *" value={formData.city} onChange={(e) => handleInputChange("city", e.target.value)} required />
                    <input className="af-input" placeholder="State *" value={formData.state} onChange={(e) => handleInputChange("state", e.target.value)} required />
                    <input className="af-input sm:col-span-2" placeholder="ZIP Code *" value={formData.zipCode} onChange={(e) => handleInputChange("zipCode", e.target.value)} required />
                  </div>
                </div>

                {/* ── Personal Statement ── */}
                <div>
                  <SectionHeading icon={FileText} label="Personal Statement" />
                  <textarea
                    className="af-textarea"
                    placeholder="Tell us about your child..."
                    value={formData.personalStatement}
                    onChange={(e) => handleInputChange("personalStatement", e.target.value)}
                  />
                </div>

                {/* ── Campus Tour ── */}
                <div>
                  <SectionHeading icon={School} label="Campus Tour" />
                  <RadioGroup
                    value={formData.tourInterest}
                    onValueChange={(v) => handleInputChange("tourInterest", v)}
                    className="flex gap-6"
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="yes" id="tour-yes" className="border-blue-300 text-blue-600" />
                      <Label htmlFor="tour-yes" className="text-sm text-slate-700 dark:text-slate-300 cursor-pointer">Yes, I'm interested</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="no" id="tour-no" className="border-blue-300 text-blue-600" />
                      <Label htmlFor="tour-no" className="text-sm text-slate-700 dark:text-slate-300 cursor-pointer">No, thank you</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* ── Terms ── */}
                <div className="flex items-start gap-3 p-4 rounded-xl border border-blue-100 dark:border-blue-900/40 bg-blue-50/50 dark:bg-blue-950/20">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(c) => handleInputChange("agreeToTerms", c)}
                    required
                    className="mt-0.5 border-blue-300 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                  />
                  <Label htmlFor="terms" className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed cursor-pointer font-light">
                    I agree to the terms and conditions and confirm that all the details provided are accurate and complete. *
                  </Label>
                </div>

                {/* ── Submit ── */}
                <button
                  type="submit"
                  className="af-submit-btn w-full flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white bg-blue-600 rounded-xl px-6 py-3 shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  Submit Application
                </button>

              </form>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  )
}