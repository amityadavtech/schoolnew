"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, BookOpen, Award, X } from "lucide-react"
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
  "All", "Administration", "Mathematics", "English", "Science",
  "Social Studies", "Physical Education", "Arts", "Technology",
]

type FacultyMember = typeof facultyMembers[0]

export function FacultyGridSection() {
  const [selectedDepartment, setSelectedDepartment] = useState("All")
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(null)

  const filteredFaculty =
    selectedDepartment === "All"
      ? facultyMembers
      : facultyMembers.filter((m) => m.department === selectedDepartment)

  return (
    <>
      <style>{`
       
        .fg-filter-btn {
          transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.18s;
          cursor: pointer;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          padding: 0.375rem 1rem;
          border-radius: 99px;
          border: 1px solid #bfdbfe;
          background: #fff;
          color: #475569;
        }
        .fg-filter-btn:hover {
          border-color: #2563eb;
          color: #1d4ed8;
          background: #eff6ff;
          transform: translateY(-1px);
        }
        .fg-filter-btn.active {
          background: #2563eb;
          color: #fff;
          border-color: #2563eb;
          box-shadow: 0 4px 12px -2px rgba(37,99,235,0.35);
        }

        .fg-card {
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease;
          cursor: pointer;
        }
        .fg-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 48px -8px rgba(37,99,235,0.13), 0 4px 16px -2px rgba(0,0,0,0.06);
        }
        .fg-card:hover .fg-avatar-ring {
          border-color: #2563eb;
        }
        .fg-card:hover .fg-view-btn {
          background: #2563eb;
          color: #fff;
          border-color: #2563eb;
        }

        .fg-avatar-ring {
          transition: border-color 0.25s ease;
        }
        .fg-view-btn {
          transition: background 0.22s, color 0.22s, border-color 0.22s;
        }

        .fg-modal-contact-btn {
          transition: background 0.2s, color 0.2s, transform 0.18s;
        }
        .fg-modal-contact-btn:hover {
          background: #2563eb !important;
          color: #fff !important;
          border-color: #2563eb !important;
          transform: translateY(-1px);
        }

        .fg-close-btn {
          transition: background 0.2s, transform 0.18s;
        }
        .fg-close-btn:hover {
          background: #dbeafe;
          transform: rotate(90deg);
        }

        /* Scrollbar for modal */
        .fg-modal-scroll::-webkit-scrollbar { width: 4px; }
        .fg-modal-scroll::-webkit-scrollbar-track { background: transparent; }
        .fg-modal-scroll::-webkit-scrollbar-thumb { background: #bfdbfe; border-radius: 99px; }
      `}</style>

      <section className="fg-root relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-blue-50/30 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 pt-16 pb-24 md:pt-24 md:pb-32">

        {/* Dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, #1d4ed8 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Glow orbs */}
        <div className="pointer-events-none absolute -left-32 -top-10 w-96 h-96 rounded-full bg-blue-200/20 dark:bg-blue-900/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 -bottom-10 w-80 h-80 rounded-full bg-blue-100/30 dark:bg-blue-800/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-blue-600 dark:bg-blue-400 rounded-full" />
              <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400">
                Our Faculty
              </span>
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-slate-900 dark:text-white leading-tight mb-4 max-w-xl">
              Meet Our Team
            </h2>
            <p className="text-base text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed font-light">
              Get to know the dedicated professionals who make learning at{" "}
              <span className="font-semibold text-blue-700 dark:text-blue-400">Aira Bal Vidya Mandir Inter College</span>{" "}
              an exceptional experience. Each faculty member brings unique expertise and passion to their field.
            </p>
          </motion.div>

          {/* ── Department Filter ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {departments.map((dept) => (
              <button
                key={dept}
                className={`fg-filter-btn${selectedDepartment === dept ? " active" : ""}`}
                onClick={() => setSelectedDepartment(dept)}
              >
                {dept}
              </button>
            ))}
          </motion.div>

          {/* ── Faculty Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <AnimatePresence mode="popLayout">
              {filteredFaculty.map((member, index) => (
                <motion.div
                  key={member.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setSelectedFaculty(member)}
                >
                  <div className="fg-card min-h-[260px] rounded-2xl border border-blue-100 dark:border-blue-900/40 bg-white dark:bg-slate-800/60 shadow-sm overflow-hidden flex flex-col">

                    {/* Top accent bar */}
                    <div className="h-[3px] bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400" />

                    <div className="p-7 md:p-8 flex flex-col items-center text-center gap-3 flex-1">

                      {/* Avatar */}
                      <div className="fg-avatar-ring w-24 h-24 rounded-full border-2 border-blue-100 dark:border-blue-800 overflow-hidden bg-blue-50 dark:bg-blue-900/30 shadow-sm flex-shrink-0">
                        <LazyImage
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          wrapperClassName="w-full h-full"
                          imgClassName="object-cover w-full h-full"
                        />
                      </div>

                      {/* Name + title */}
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white leading-snug mb-0.5">
                          {member.name}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-light">
                          {member.title}
                        </p>
                      </div>

                      {/* Dept badge */}
                      <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 px-2.5 py-0.5 rounded-full">
                        {member.department}
                      </span>

                      {/* Bio */}
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light line-clamp-4 flex-1">
                        {member.bio}
                      </p>

                      {/* Divider + View btn */}
                      <div className="w-full pt-3 border-t border-blue-50 dark:border-blue-900/40">
                        <button className="fg-view-btn w-full text-sm font-semibold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700/50 px-4 py-1.5 rounded-lg">
                          View Profile →
                        </button>
                      </div>

                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* ── Modal ── */}
        <AnimatePresence>
          {selectedFaculty && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4"
              onClick={() => setSelectedFaculty(null)}
            >
              <motion.div
                initial={{ y: 60, opacity: 0, scale: 0.97 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 60, opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="fg-modal-scroll w-full sm:max-w-3xl h-[92vh] sm:h-auto sm:max-h-[88vh] overflow-y-auto rounded-t-3xl sm:rounded-2xl bg-white dark:bg-slate-900 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal top accent */}
                <div className="h-[3px] bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400 rounded-t-2xl" />

                {/* Mobile drag handle */}
                <div className="flex justify-center pt-3 pb-1 sm:hidden">
                  <div className="w-10 h-1 bg-slate-200 dark:bg-slate-700 rounded-full" />
                </div>

                <div className="p-6 sm:p-8">

                  {/* Close button */}
                  <div className="flex justify-end mb-4">
                    <button
                      className="fg-close-btn w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400"
                      onClick={() => setSelectedFaculty(null)}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Profile top */}
                  <div className="flex flex-col sm:flex-row gap-5 mb-7">
                    <div className="flex-shrink-0 flex justify-center sm:block">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl border-2 border-blue-200 dark:border-blue-800 overflow-hidden bg-blue-50 dark:bg-blue-900/30 shadow-sm">
                        <LazyImage
                          src={selectedFaculty.image || "/placeholder.svg"}
                          alt={selectedFaculty.name}
                          wrapperClassName="w-full h-full"
                          imgClassName="object-cover w-full h-full"
                        />
                      </div>
                    </div>

                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1">
                        {selectedFaculty.name}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-light mb-3">
                        {selectedFaculty.title}
                      </p>
                      <span className="inline-block text-[0.65rem] font-semibold tracking-widest uppercase text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 px-2.5 py-0.5 rounded-full">
                        {selectedFaculty.department}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-blue-100 dark:bg-blue-900/40 mb-6" />

                  {/* Details grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">

                    {/* Education */}
                    <div className="rounded-xl border border-blue-100 dark:border-blue-900/40 bg-blue-50/60 dark:bg-blue-950/20 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                          <BookOpen className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-xs font-semibold tracking-widest uppercase text-blue-700 dark:text-blue-400">
                          Education
                        </span>
                      </div>
                      <p className="text-sm text-slate-700 dark:text-slate-300 font-light leading-relaxed">
                        {selectedFaculty.education}
                      </p>
                    </div>

                    {/* Experience */}
                    <div className="rounded-xl border border-blue-100 dark:border-blue-900/40 bg-blue-50/60 dark:bg-blue-950/20 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                          <Award className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-xs font-semibold tracking-widest uppercase text-blue-700 dark:text-blue-400">
                          Experience
                        </span>
                      </div>
                      <p className="text-sm text-slate-700 dark:text-slate-300 font-light leading-relaxed">
                        {selectedFaculty.experience}
                      </p>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-6">
                    <p className="text-[0.65rem] font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-3">
                      Specialties
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedFaculty.specialties.map((s, i) => (
                        <span
                          key={i}
                          className="text-xs font-medium text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 px-3 py-1 rounded-full"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="mb-7">
                    <p className="text-[0.65rem] font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-2">
                      About
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                      {selectedFaculty.bio}
                    </p>
                  </div>

                  {/* Contact buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-5 border-t border-blue-100 dark:border-blue-900/40">
                    <button className="fg-modal-contact-btn flex-1 flex items-center justify-center gap-2 text-sm font-semibold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 px-5 py-2.5 rounded-xl">
                      <Mail className="w-4 h-4" />
                      Email
                    </button>
                    <button className="fg-modal-contact-btn flex-1 flex items-center justify-center gap-2 text-sm font-semibold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 px-5 py-2.5 rounded-xl">
                      <Phone className="w-4 h-4" />
                      Call
                    </button>
                  </div>

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </section>
    </>
  )
}