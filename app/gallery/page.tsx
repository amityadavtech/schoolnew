import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GalleryHeroSection } from "@/components/sections/gallery-hero-section"
import { PhotoGallerySection } from "@/components/sections/photo-gallery-section"

export const metadata = {
  title: "Gallery - Aira Bal Vidya Mandir Inter College",
  description:
    "Explore our vibrant school community through photos of campus life, events, and student achievements at Aira Bal Vidya Mandir Inter College.",
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <GalleryHeroSection />
        <PhotoGallerySection showAll />
      </main>
      <Footer />
    </div>
  )
}
