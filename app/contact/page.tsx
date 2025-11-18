import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactHeroSection } from "@/components/sections/contact-hero-section"
import { ContactFormSection } from "@/components/sections/contact-form-section"
import { ContactInfoSection } from "@/components/sections/contact-info-section"
import { MapSection } from "@/components/sections/map-section"

export const metadata = {
  title: "Contact Us - Aira Bal Vidya Mandir Inter College",
  description: "Get in touch with Aira Bal Vidya Mandir Inter College. Find our location, contact information, and send us a message.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ContactHeroSection />
        <ContactInfoSection />
        <ContactFormSection />
        <MapSection />
      </main>
      <Footer />
    </div>
  )
}
