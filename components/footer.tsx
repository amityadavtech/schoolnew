import Link from "next/link"
import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-t from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 border-t border-gray-100 dark:border-slate-800">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {/* School Info */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-5 sm:w-6 h-5 sm:h-6" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-serif font-bold text-slate-900 dark:text-white">Aira Bal Vidya Mandir</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Inter College</div>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Nurturing young minds and fostering academic excellence through innovative teaching and comprehensive
              development programs.
            </p>
            <div className="flex space-x-2 sm:space-x-3">
              <Link href="#" className="inline-flex items-center justify-center w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-white shadow hover:scale-105 transition-transform text-blue-600">
                <Facebook className="h-3 sm:h-4 w-3 sm:w-4" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="inline-flex items-center justify-center w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-white shadow hover:scale-105 transition-transform text-blue-500">
                <Twitter className="h-3 sm:h-4 w-3 sm:w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="inline-flex items-center justify-center w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-white shadow hover:scale-105 transition-transform text-pink-500">
                <Instagram className="h-3 sm:h-4 w-3 sm:w-4" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="inline-flex items-center justify-center w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-white shadow hover:scale-105 transition-transform text-red-600">
                <Youtube className="h-3 sm:h-4 w-3 sm:w-4" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <li>
                <Link href="/about" className="hover:text-blue-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-blue-600 transition-colors">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-blue-600 transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="hover:text-blue-600 transition-colors">
                  Faculty
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">Programs</h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <li>
                <Link href="/academics#primary" className="hover:text-blue-600 transition-colors">
                  Primary School
                </Link>
              </li>
              <li>
                <Link href="/academics#secondary" className="hover:text-blue-600 transition-colors">
                  Secondary School
                </Link>
              </li>
              <li>
                <Link href="/academics#higher" className="hover:text-blue-600 transition-colors">
                  Higher Secondary
                </Link>
              </li>
              <li>
                <Link href="/academics#extracurricular" className="hover:text-blue-600 transition-colors">
                  Extracurricular
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">Contact Info</h3>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <MapPin className="h-4 sm:h-5 w-4 sm:w-5 mt-0.5 flex-shrink-0 text-blue-600" />
                <span className="leading-relaxed">
                  123 Education Street
                  <br />
                  Academic District
                  <br />
                  City, State 12345
                </span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="h-4 sm:h-5 w-4 sm:w-5 flex-shrink-0 text-blue-600" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Mail className="h-4 sm:h-5 w-4 sm:w-5 flex-shrink-0 text-blue-600" />
                <span className="break-all">info@abvmic.edu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">&copy; 2024 Aira Bal Vidya Mandir Inter College. All rights reserved.</p>
          <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Privacy Policy &nbsp;|&nbsp; Terms of Service</div>
        </div>
      </div>
    </footer>
  )
}
