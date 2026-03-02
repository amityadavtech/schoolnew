"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, BookOpen, Award } from "lucide-react"
import { LazyImage } from "@/components/ui/lazy-image"

const facultyMembers = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Principal",
    department: "Administration",
    image: "/school-faculty/principal.jpg",
    email: "s.johnson@pinnacleacademy.edu",
    phone: "(555) 123-4567",
    education: "Ph.D. Educational Leadership, Harvard University",
    experience: "20+ years in education",
    specialties: ["Educational Leadership", "Curriculum Development", "School Administration"],
    bio: "Dr. Johnson brings over two decades of educational excellence to Aira Bal Vidya Mandir Inter College. Her vision for innovative learning environments has transformed countless student experiences.",
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    title: "Head of Mathematics",
    department: "Mathematics",
    image: "/school-faculty/abhinav.jpg",
    email: "m.chen@pinnacleacademy.edu",
    phone: "(555) 123-4568",
    education: "M.S. Mathematics, MIT",
    experience: "15 years teaching experience",
    specialties: ["Advanced Calculus", "Statistics", "Mathematical Modeling"],
    bio: "Professor Chen's innovative approach to mathematics education has helped countless students discover their love for numbers and problem-solving.",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    title: "English Department Chair",
    department: "English",
    image: "/school-faculty/chandan.jpg",
    email: "e.rodriguez@pinnacleacademy.edu",
    phone: "(555) 123-4569",
    education: "Ph.D. English Literature, Yale University",
    experience: "18 years teaching experience",
    specialties: ["Creative Writing", "American Literature", "Literary Analysis"],
    bio: "Dr. Rodriguez inspires students to find their voice through the written word, fostering both analytical thinking and creative expression.",
  },
  {
    id: 4,
    name: "Mr. David Thompson",
    title: "Science Department Head",
    department: "Science",
    image: "/school-faculty/shivansh.jpg",
    email: "d.thompson@pinnacleacademy.edu",
    phone: "(555) 123-4570",
    education: "M.S. Chemistry, Stanford University",
    experience: "12 years teaching experience",
    specialties: ["Organic Chemistry", "Environmental Science", "Laboratory Research"],
    bio: "Mr. Thompson brings real-world scientific research experience into the classroom, making complex concepts accessible and exciting.",
  },
  {
    id: 5,
    name: "Ms. Lisa Park",
    title: "History Teacher",
    department: "Social Studies",
    image: "/school-faculty/saksham.png",
    email: "l.park@pinnacleacademy.edu",
    phone: "(555) 123-4571",
    education: "M.A. History, Columbia University",
    experience: "10 years teaching experience",
    specialties: ["World History", "Comparative Government", "Historical Research"],
    bio: "Ms. Park brings history to life through engaging storytelling and critical analysis, helping students understand the past to shape the future.",
  },
  {
    id: 6,
    name: "Mr. James Wilson",
    title: "Physical Education Director",
    department: "Physical Education",
    image: "/amit.png",
    email: "j.wilson@pinnacleacademy.edu",
    phone: "(555) 123-4572",
    education: "M.S. Kinesiology, UCLA",
    experience: "14 years coaching experience",
    specialties: ["Athletic Training", "Sports Psychology", "Health Education"],
    bio: "Mr. Wilson promotes physical wellness and teamwork, developing both athletic skills and character in every student.",
  },
  {
    id: 7,
    name: "Ms. Anna Martinez",
    title: "Art Department Chair",
    department: "Arts",
    image: "/school-faculty/shivansh.jpg",
    email: "a.martinez@pinnacleacademy.edu",
    phone: "(555) 123-4573",
    education: "M.F.A. Fine Arts, RISD",
    experience: "16 years teaching experience",
    specialties: ["Studio Art", "Art History", "Digital Media"],
    bio: "Ms. Martinez nurtures creativity and artistic expression, helping students develop their unique artistic voice and technical skills.",
  },
  {
    id: 8,
    name: "Dr. Robert Kim",
    title: "Computer Science Teacher",
    department: "Technology",
    image: "/school-faculty/chandan.jpg",
    email: "r.kim@pinnacleacademy.edu",
    phone: "(555) 123-4574",
    education: "Ph.D. Computer Science, Carnegie Mellon",
    experience: "8 years teaching experience",
    specialties: ["Programming", "Artificial Intelligence", "Cybersecurity"],
    bio: "Dr. Kim prepares students for the digital future with cutting-edge computer science education and hands-on technology projects.",
  },
]

const departments = [
  "All",
  "Administration",
  "Mathematics",
  "English",
  "Science",
  "Social Studies",
  "Physical Education",
  "Arts",
  "Technology",
]

export function FacultyGridSection() {
  const [selectedDepartment, setSelectedDepartment] = useState("All")
  const [selectedFaculty, setSelectedFaculty] = useState<(typeof facultyMembers)[0] | null>(null)

  const filteredFaculty =
    selectedDepartment === "All"
      ? facultyMembers
      : facultyMembers.filter((member) => member.department === selectedDepartment)

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-950">
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4">Meet Our Team</h2>
          <p className="mt-2 text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Get to know the dedicated professionals who make learning at Aira Bal Vidya Mandir Inter College an exceptional experience.
            Each faculty member brings unique expertise and passion to their field.
          </p>
        </motion.div>

        {/* Department Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {departments.map((department) => (
            <Button
              key={department}
              variant={selectedDepartment === department ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedDepartment(department)}
              className={`rounded-full ${selectedDepartment === department ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md' : ''}`}
            >
              {department}
            </Button>
          ))}
        </motion.div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFaculty.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className="h-full rounded-2xl p-6 bg-white shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-100 cursor-pointer"
                onClick={() => setSelectedFaculty(member)}
              >
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 overflow-hidden shadow-inner">
                      <LazyImage
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        wrapperClassName="w-full h-full"
                        imgClassName="object-cover"
                      />
                    </div>
                    <h3 className="font-serif font-bold text-lg mb-1 text-slate-900">{member.name}</h3>
                    <p className="text-slate-600 font-medium text-sm mb-2">{member.title}</p>
                    <Badge variant="secondary" className="mb-3 bg-blue-50 text-blue-700">
                      {member.department}
                    </Badge>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-3">{member.bio}</p>
                    <div className="flex justify-center gap-2">
                      <Button variant="outline" size="sm" className="bg-transparent text-blue-600">
                        <Mail className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="bg-transparent text-blue-600">
                        <Phone className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Faculty Detail Modal */}
        {selectedFaculty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
      fixed inset-0 z-50
      bg-black/60 backdrop-blur-sm
      flex items-end sm:items-center justify-center
      p-0 sm:p-4
    "
            onClick={() => setSelectedFaculty(null)}
          >
            <motion.div
              initial={{ y: 80, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 80, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="
        bg-background
        w-full sm:max-w-2xl
        h-[92vh] sm:h-auto
        rounded-t-3xl sm:rounded-2xl
        overflow-y-auto
        shadow-2xl
      "
              onClick={(e) => e.stopPropagation()}
            >
              <Card className="border-none shadow-none">
                <CardContent className="p-5 sm:p-8">

                  {/* Close button mobile top */}
                  <div className="flex justify-between items-center mb-4 sm:hidden">
                    <div className="w-12 h-1.5 bg-muted rounded-full mx-auto"></div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setSelectedFaculty(null)}
                      className="absolute right-4 top-4"
                    >
                      ✕
                    </Button>
                  </div>

                  {/* Main layout */}
                  <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">

                    {/* Image */}
                    <div className="flex justify-center sm:block">
                      <div className="
                w-24 h-24 sm:w-32 sm:h-32
                rounded-full
                bg-muted
                overflow-hidden
                shadow-md
              ">
                        <LazyImage
                          src={selectedFaculty.image || "/placeholder.svg"}
                          alt={selectedFaculty.name}
                          wrapperClassName="w-full h-full"
                          imgClassName="object-cover w-full h-full"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center sm:text-left">

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
                        {selectedFaculty.name}
                      </h3>

                      <p className="text-slate-600 text-sm sm:text-base mb-2">
                        {selectedFaculty.title}
                      </p>

                      <Badge className="mb-4 bg-blue-50 text-blue-700">
                        {selectedFaculty.department}
                      </Badge>

                      <div className="space-y-4 text-sm sm:text-base">

                        {/* Education */}
                        <div>
                          <div className="flex items-center justify-center sm:justify-start mb-1">
                            <BookOpen className="h-4 w-4 text-blue-600 mr-2" />
                            <span className="font-semibold">Education</span>
                          </div>
                          <p className="text-slate-600">
                            {selectedFaculty.education}
                          </p>
                        </div>

                        {/* Experience */}
                        <div>
                          <div className="flex items-center justify-center sm:justify-start mb-1">
                            <Award className="h-4 w-4 text-blue-600 mr-2" />
                            <span className="font-semibold">Experience</span>
                          </div>
                          <p className="text-slate-600">
                            {selectedFaculty.experience}
                          </p>
                        </div>

                        {/* Specialties */}
                        <div>
                          <h4 className="font-semibold mb-2">Specialties</h4>
                          <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                            {selectedFaculty.specialties.map((specialty, index) => (
                              <Badge key={index} variant="outline">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* About */}
                        <div>
                          <h4 className="font-semibold mb-2">About</h4>
                          <p className="text-slate-600">
                            {selectedFaculty.bio}
                          </p>
                        </div>

                        {/* Contact Buttons */}
                        <div className="
                  flex flex-col sm:flex-row
                  gap-3
                  pt-4
                ">
                          <Button
                            variant="outline"
                            className="w-full sm:w-auto text-blue-600"
                          >
                            <Mail className="h-4 w-4 mr-2" />
                            Email
                          </Button>

                          <Button
                            variant="outline"
                            className="w-full sm:w-auto text-blue-600"
                          >
                            <Phone className="h-4 w-4 mr-2" />
                            Call
                          </Button>
                        </div>

                      </div>

                    </div>

                  </div>

                  {/* Close desktop */}
                  <div className="hidden sm:flex justify-end mt-6">
                    <Button onClick={() => setSelectedFaculty(null)}>
                      Close
                    </Button>
                  </div>

                </CardContent>
              </Card>

            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
