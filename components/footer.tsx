import Link from "next/link"
import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8" />
              <span className="text-xl font-serif font-bold">Aira Bal Vidya Mandir Inter College</span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Nurturing young minds and fostering academic excellence through innovative teaching methods and
              comprehensive development programs.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/academics"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="/faculty"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Faculty
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/academics#primary"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Primary School
                </Link>
              </li>
              <li>
                <Link
                  href="/academics#secondary"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Secondary School
                </Link>
              </li>
              <li>
                <Link
                  href="/academics#higher"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Higher Secondary
                </Link>
              </li>
              <li>
                <Link
                  href="/academics#extracurricular"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Extracurricular
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary-foreground/80" />
                <span className="text-primary-foreground/80">
                  123 Education Street
                  <br />
                  Academic District
                  <br />
                  City, State 12345
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary-foreground/80" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-foreground/80" />
                <span className="text-primary-foreground/80">info@abvmic.edu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; 2024 Aira Bal Vidya Mandir Inter College. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  )
}
