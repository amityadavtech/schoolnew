"use client"

import { Suspense, lazy, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

// lazy-load the HeroSection to show a spinner while it mounts
const HeroSection = lazy(() =>
  import("@/components/sections/hero-section").then((mod) => ({ default: mod.HeroSection }))
)
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
    <div className="min-h-screen max-w-screen">
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
        <Suspense
          fallback={
            <div className="flex items-center justify-center py-12">
              {/* spinner component */}
              <div className="w-16 h-16 rounded-full animate-spin" style={{ border: "4px solid var(--muted)", borderTopColor: "var(--primary)" }} />
            </div>
          }
        >
          <HeroSection />
        </Suspense>
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
