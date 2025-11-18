import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AcademicsHeroSection } from "@/components/sections/academics-hero-section"
import { CurriculumSection } from "@/components/sections/curriculum-section"
import { ProgramsSection } from "@/components/sections/programs-section"
import { ExtracurricularSection } from "@/components/sections/extracurricular-section"

export const metadata = {
  title: "Academics - Aira Bal Vidya Mandir Inter College",
  description:
    "Explore our comprehensive academic programs, curriculum, and educational opportunities at Aira Bal Vidya Mandir Inter College.",
}

export default function AcademicsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <AcademicsHeroSection />
        <CurriculumSection />
        <ProgramsSection />
        <ExtracurricularSection />
      </main>
      <Footer />
    </div>
  )
}
