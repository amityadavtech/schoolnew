import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FacultyHeroSection } from "@/components/sections/faculty-hero-section"
import { FacultyGridSection } from "@/components/sections/faculty-grid-section"
import { FacultyStatsSection } from "@/components/sections/faculty-stats-section"

export const metadata = {
  title: "Faculty - Aira Bal Vidya Mandir Inter College",
  description:
    "Meet our exceptional faculty members who are dedicated to providing world-class education and mentorship at Aira Bal Vidya Mandir Inter College.",
}

export default function FacultyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <FacultyHeroSection />
        <FacultyStatsSection />
        <FacultyGridSection />
      </main>
      <Footer />
    </div>
  )
}
