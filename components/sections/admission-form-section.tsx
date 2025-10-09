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
  <section className="pt-[10px] pb-12 px-4" id="application">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto text-center"
        >
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 rounded-3xl shadow-xl">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-3">Application Submitted!</h3>
              <p className="text-green-700 text-sm mb-5">
                Thank you for your interest. Our admissions team will contact you within 2-3 business days.
              </p>
              <div className="bg-white rounded-xl p-3 border text-sm text-green-700 shadow-sm">
                Application ID: PA-2024-{Math.random().toString(36).substr(2, 6).toUpperCase()}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    )
  }

  return (
  <section className="pt-[10px] pb-10 px-3" id="application">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-md mx-auto"
      >
        <Card className="rounded-3xl shadow-2xl border-0 bg-gradient-to-b from-white via-accent/10 to-primary/5 dark:from-zinc-900 dark:via-zinc-800/80 dark:to-accent/10 p-5">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center justify-center text-xl font-extrabold text-primary">
              <Send className="h-5 w-5 mr-2 text-accent" />
              Apply Now
            </CardTitle>
          </CardHeader>

          <CardContent className="pt-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Student Info */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-primary">Student Info</h3>
                <Input placeholder="First Name *" value={formData.studentFirstName} onChange={(e) => handleInputChange("studentFirstName", e.target.value)} required className="rounded-full" />
                <Input placeholder="Last Name *" value={formData.studentLastName} onChange={(e) => handleInputChange("studentLastName", e.target.value)} required className="rounded-full" />
                <Input type="date" value={formData.dateOfBirth} onChange={(e) => handleInputChange("dateOfBirth", e.target.value)} required className="rounded-full" />
                <Select onValueChange={(v) => handleInputChange("grade", v)}>
                  <SelectTrigger className="rounded-full">
                    <SelectValue placeholder="Select Grade *" />
                  </SelectTrigger>
                  <SelectContent>
                    {[...Array(12)].map((_, i) => (
                      <SelectItem key={i + 1} value={(i + 1).toString()}>Grade {i + 1}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Parent Info */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-primary">Parent/Guardian</h3>
                <Input placeholder="Parent First Name *" value={formData.parentFirstName} onChange={(e) => handleInputChange("parentFirstName", e.target.value)} required className="rounded-full" />
                <Input placeholder="Parent Last Name *" value={formData.parentLastName} onChange={(e) => handleInputChange("parentLastName", e.target.value)} required className="rounded-full" />
                <Input placeholder="Email *" type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} required className="rounded-full" />
                <Input placeholder="Phone *" type="tel" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} required className="rounded-full" />
              </div>

              {/* Address */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-primary">Address</h3>
                <Input placeholder="Street Address *" value={formData.address} onChange={(e) => handleInputChange("address", e.target.value)} required className="rounded-full" />
                <Input placeholder="City *" value={formData.city} onChange={(e) => handleInputChange("city", e.target.value)} required className="rounded-full" />
                <Input placeholder="State *" value={formData.state} onChange={(e) => handleInputChange("state", e.target.value)} required className="rounded-full" />
                <Input placeholder="ZIP Code *" value={formData.zipCode} onChange={(e) => handleInputChange("zipCode", e.target.value)} required className="rounded-full" />
              </div>

              {/* Statement */}
              <div>
                <h3 className="text-base font-semibold text-primary">Personal Statement</h3>
                <Textarea placeholder="Tell us about your child..." value={formData.personalStatement} onChange={(e) => handleInputChange("personalStatement", e.target.value)} className="rounded-2xl min-h-[100px]" />
              </div>

              {/* Tour Interest */}
              <div>
                <h3 className="text-base font-semibold text-primary">Campus Tour</h3>
                <RadioGroup value={formData.tourInterest} onValueChange={(v) => handleInputChange("tourInterest", v)} className="mt-2 space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="tour-yes" />
                    <Label htmlFor="tour-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="tour-no" />
                    <Label htmlFor="tour-no">No</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Terms */}
              <div className="flex items-start space-x-2">
                <Checkbox id="terms" checked={formData.agreeToTerms} onCheckedChange={(c) => handleInputChange("agreeToTerms", c)} required />
                <Label htmlFor="terms" className="text-xs leading-relaxed">I agree to the terms and confirm all details are correct *</Label>
              </div>

              {/* Submit */}
              <Button type="submit" size="lg" className="w-full rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-lg">
                <Send className="h-4 w-4 mr-2" /> Submit Application
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
