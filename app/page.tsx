"use client"

import { useState, useEffect } from "react"
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
  // popup visibility state; start hidden and open after a short delay
  const [showPopup, setShowPopup] = useState(false)

  // open the popup once the client component mounts, after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setShowPopup(false)
  }

  return (
    <div className="min-h-screen max-w-screen">
      <Navigation />

      {/* fixed campus background for parallax reveal */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <img
          src="/School-Image/modern-school-campus-with-students-walking--bright.jpg"
          alt="Campus background"
          className="w-full h-full object-cover"
        />
      </div>

      <main>
        {/* Modern Popup Modal - Static data from lib/popup-data.ts */}
        <ModernPopup
          isOpen={showPopup}
          onClose={handleClose}
          image={popupData.image}
          title={popupData.title}
          badge={popupData.badge}
          description={popupData.description}
        />
        <HeroSection />


        {/* subsequent sections with alternating solid/transparent backgrounds */}
        <div className="bg-white">
          <FeaturesSection />
        </div>

        <div className="bg-black/60 backdrop-blur-[2px]">
          <StatsSection />
        </div>

        <div className="bg-white">
          <PhotoGallerySection />
        </div>

        <div className="bg-black/60 backdrop-blur-[2px]">
          <TestimonialsSection />
        </div>

        <div className="bg-white">
          <CTASection />
        </div>

        <div className="bg-white">
          <MapSection />
        </div>

        <div className="bg-black/60 backdrop-blur-[2px]">
          <ContactFormSection variant="image" />
        </div>
      </main>
      <Footer />
    </div>
  )
}
