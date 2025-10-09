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
import { Dialog, DialogContent } from "@/components/ui/dialog"

export default function HomePage() {
  // Pop-up image modal state
  const [showPopup, setShowPopup] = useState(true)

  // Optionally, you can use localStorage to show only once per session
  useEffect(() => {
    if (typeof window !== "undefined") {
      const seen = window.sessionStorage.getItem("popupSeen")
      if (seen) setShowPopup(false)
    }
  }, [])

  const handleClose = () => {
    setShowPopup(false)
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("popupSeen", "1")
    }
  }


  // Use uploaded popup image and text from localStorage if available, else show skeleton
  const [popupImage, setPopupImage] = useState<string | null>(null)
  const [popupHeader, setPopupHeader] = useState<string>("")
  const [popupParagraph, setPopupParagraph] = useState<string>("")
  const [headerBold, setHeaderBold] = useState(false)
  const [headerItalic, setHeaderItalic] = useState(false)
  const [headerUnderline, setHeaderUnderline] = useState(false)
  const [paraBold, setParaBold] = useState(false)
  const [paraItalic, setParaItalic] = useState(false)
  const [paraUnderline, setParaUnderline] = useState(false)
  const [popupLoading, setPopupLoading] = useState(true)
  // Load popup content from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      setPopupLoading(true)
      const url = window.localStorage.getItem("popupImageUrl")
      setPopupImage(url || null)
      setPopupHeader(window.localStorage.getItem("popupHeader") || "")
      setPopupParagraph(window.localStorage.getItem("popupParagraph") || "")
      setHeaderBold(window.localStorage.getItem("popupHeaderBold") === "1")
      setHeaderItalic(window.localStorage.getItem("popupHeaderItalic") === "1")
      setHeaderUnderline(window.localStorage.getItem("popupHeaderUnderline") === "1")
      setParaBold(window.localStorage.getItem("popupParaBold") === "1")
      setParaItalic(window.localStorage.getItem("popupParaItalic") === "1")
      setParaUnderline(window.localStorage.getItem("popupParaUnderline") === "1")
      setPopupLoading(false)
    }
  }, [showPopup])

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Pop-up Image Modal: Only show if popupImage is set */}
        {popupImage && (
          <Dialog open={showPopup} onOpenChange={setShowPopup}>
            <DialogContent showCloseButton onInteractOutside={handleClose} onEscapeKeyDown={handleClose}>
              <div className="flex flex-col items-center">
                {popupLoading ? (
                  <div className="w-[320px] h-[200px] bg-muted animate-pulse rounded-lg mb-4" />
                ) : (
                  <img
                    src={popupImage}
                    alt="Popup"
                    className="rounded-lg shadow-lg max-w-full h-auto mb-4"
                    style={{ maxHeight: 350 }}
                  />
                )}
                <div className="text-center">
                  <h2
                    className="mb-2"
                    style={{
                      fontWeight: headerBold ? "bold" : "normal",
                      fontStyle: headerItalic ? "italic" : "normal",
                      textDecoration: headerUnderline ? "underline" : "none",
                      fontSize: "1.25rem"
                    }}
                  >
                    {popupHeader}
                  </h2>
                  <p
                    className="text-muted-foreground mb-2"
                    style={{
                      fontWeight: paraBold ? "bold" : "normal",
                      fontStyle: paraItalic ? "italic" : "normal",
                      textDecoration: paraUnderline ? "underline" : "none"
                    }}
                  >
                    {popupParagraph}
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
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
