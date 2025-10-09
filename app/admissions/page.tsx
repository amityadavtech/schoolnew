import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AdmissionsHeroSection } from "@/components/sections/admissions-hero-section"
import { AdmissionProcessSection } from "@/components/sections/admission-process-section"
import { AdmissionFormSection } from "@/components/sections/admission-form-section"
import { RequirementsSection } from "@/components/sections/requirements-section"

export const metadata = {
  title: "Admissions - Pinnacle Academy",
  description:
    "Join our exceptional learning community. Learn about our admission process, requirements, and apply to Pinnacle Academy today.",
}

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <AdmissionsHeroSection />
        <AdmissionProcessSection />
        <RequirementsSection />
        <AdmissionFormSection />
      </main>
      <Footer />
    </div>
  )
}
