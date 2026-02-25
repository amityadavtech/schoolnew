"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Send, CheckCircle } from "lucide-react"

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
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <section className="py-12 sm:py-16 px-4" id="application">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto text-center"
        >
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-indigo-100 rounded-3xl shadow-xl">
            <CardContent className="p-6 sm:p-8">
              <div className="w-14 sm:w-16 h-14 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-md">
                <CheckCircle className="h-7 sm:h-8 w-7 sm:w-8 text-blue-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-800 mb-2 sm:mb-3">Application Submitted!</h3>
              <p className="text-blue-700 text-xs sm:text-sm mb-4 sm:mb-5">
                Thank you for your interest. Our admissions team will contact you within 2-3 business days.
              </p>
              <div className="bg-white rounded-xl p-3 border text-xs sm:text-sm text-blue-700 shadow-sm">
                Application ID: PA-2024-{Math.random().toString(36).substr(2, 6).toUpperCase()}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    )
  }

  return (
    <section className="py-12 sm:py-16 px-4" id="application">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <Card className="rounded-3xl shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-100 bg-white p-4 sm:p-6">
          <CardHeader className="pb-3 sm:pb-4">
            <CardTitle className="flex items-center justify-center text-lg sm:text-xl font-extrabold text-slate-900">
              <Send className="h-4 sm:h-5 w-4 sm:w-5 mr-2 text-blue-600" />
              Apply Now
            </CardTitle>
          </CardHeader>

          <CardContent className="pt-2">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Two column layout on larger screens */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {/* Student Info */}
                <div className="sm:col-span-2">
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-2 sm:mb-3">Student Info</h3>
                </div>
                <Input placeholder="First Name *" value={formData.studentFirstName} onChange={(e) => handleInputChange("studentFirstName", e.target.value)} required className="rounded-full text-sm" />
                <Input placeholder="Last Name *" value={formData.studentLastName} onChange={(e) => handleInputChange("studentLastName", e.target.value)} required className="rounded-full text-sm" />
                <Input type="date" value={formData.dateOfBirth} onChange={(e) => handleInputChange("dateOfBirth", e.target.value)} required className="rounded-full sm:col-span-2 text-sm" />
                <Select onValueChange={(v) => handleInputChange("grade", v)}>
                  <SelectTrigger className="rounded-full sm:col-span-2 text-sm">
                    <SelectValue placeholder="Select Grade *" />
                  </SelectTrigger>
                  <SelectContent>
                    {[...Array(12)].map((_, i) => (
                      <SelectItem key={i + 1} value={(i + 1).toString()}>Grade {i + 1}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Parent Info */}
                <div className="sm:col-span-2">
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-2 sm:mb-3">Parent/Guardian</h3>
                </div>
                <Input placeholder="Parent First Name *" value={formData.parentFirstName} onChange={(e) => handleInputChange("parentFirstName", e.target.value)} required className="rounded-full text-sm" />
                <Input placeholder="Parent Last Name *" value={formData.parentLastName} onChange={(e) => handleInputChange("parentLastName", e.target.value)} required className="rounded-full text-sm" />
                <Input placeholder="Email *" type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} required className="rounded-full sm:col-span-2 text-sm" />
                <Input placeholder="Phone *" type="tel" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} required className="rounded-full sm:col-span-2 text-sm" />

                {/* Address */}
                <div className="sm:col-span-2">
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-2 sm:mb-3">Address</h3>
                </div>
                <Input placeholder="Street Address *" value={formData.address} onChange={(e) => handleInputChange("address", e.target.value)} required className="rounded-full sm:col-span-2 text-sm" />
                <Input placeholder="City *" value={formData.city} onChange={(e) => handleInputChange("city", e.target.value)} required className="rounded-full text-sm" />
                <Input placeholder="State *" value={formData.state} onChange={(e) => handleInputChange("state", e.target.value)} required className="rounded-full text-sm" />
                <Input placeholder="ZIP Code *" value={formData.zipCode} onChange={(e) => handleInputChange("zipCode", e.target.value)} required className="rounded-full text-sm" />
              </div>

              {/* Statement */}
              <div className="sm:col-span-2">
                <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-2">Personal Statement</h3>
                <Textarea placeholder="Tell us about your child..." value={formData.personalStatement} onChange={(e) => handleInputChange("personalStatement", e.target.value)} className="rounded-2xl min-h-[100px] text-sm" />
              </div>

              {/* Tour Interest */}
              <div className="sm:col-span-2">
                <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-2">Campus Tour</h3>
                <RadioGroup value={formData.tourInterest} onValueChange={(v) => handleInputChange("tourInterest", v)} className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="tour-yes" />
                    <Label htmlFor="tour-yes" className="text-sm">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="tour-no" />
                    <Label htmlFor="tour-no" className="text-sm">No</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Terms */}
              <div className="flex items-start space-x-2 sm:col-span-2">
                <Checkbox id="terms" checked={formData.agreeToTerms} onCheckedChange={(c) => handleInputChange("agreeToTerms", c)} required className="mt-1" />
                <Label htmlFor="terms" className="text-xs sm:text-sm leading-relaxed">I agree to the terms and confirm all details are correct *</Label>
              </div>

              {/* Submit */}
              <Button type="submit" size="lg" className="w-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg sm:col-span-2 text-sm sm:text-base">
                <Send className="h-4 w-4 mr-2" /> Submit Application
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
