"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { StatsSection } from "@/components/sections/stats-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CTASection } from "@/components/sections/cta-section"
import { MapSection } from "@/components/sections/map-section"
import { ContactFormSection } from "@/components/sections/contact-form-section"
import { PhotoGallerySection } from "@/components/sections/photo-gallery-section"
import { ModernPopup } from "@/components/sections/modern-popup"
import { popupData } from "@/lib/popup-data"

export default function HomePage() {
  // Keep popup component available but paused (not shown) by default.
  // To enable the popup again, set the initial state to `true`.
  const [showPopup, setShowPopup] = useState(false)

  const handleClose = () => {
    setShowPopup(false)
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Modern Popup Modal - Static data from lib/popup-data.ts */}
        <ModernPopup
          isOpen={showPopup}
          onClose={handleClose}
          image={popupData.image}
          title={popupData.title}
          description={popupData.description}
        />
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <PhotoGallerySection />
        <TestimonialsSection />
        <CTASection />
        <MapSection />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  )
}
