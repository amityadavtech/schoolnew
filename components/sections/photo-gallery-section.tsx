"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, Download, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useGalleryStore } from "@/lib/gallery-store"
import Link from "next/link"

const galleryCategories = ["All", "Campus Life", "Events", "Sports", "Arts", "Academics", "Graduation"]


export function PhotoGallerySection({ showAll = false }: { showAll?: boolean }) {
  const { images } = useGalleryStore()
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<(typeof images)[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // If showAll is true, show all images, else show up to 8
  const displayedImages = showAll
    ? (selectedCategory === "All" ? images : images.filter((img) => img.category === selectedCategory))
    : (selectedCategory === "All" ? images : images.filter((img) => img.category === selectedCategory)).slice(0, 8)

  const filteredImages = selectedCategory === "All" ? images : images.filter((img) => img.category === selectedCategory)

  const openLightbox = (image: (typeof images)[0]) => {
    setSelectedImage(image)
    setCurrentImageIndex(filteredImages.findIndex((img) => img.id === image.id))
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: "prev" | "next") => {
    const newIndex =
      direction === "prev"
        ? (currentImageIndex - 1 + filteredImages.length) % filteredImages.length
        : (currentImageIndex + 1) % filteredImages.length

    setCurrentImageIndex(newIndex)
    setSelectedImage(filteredImages[newIndex])
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4 text-center w-full">Gallery</h2>
        </div>
  {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {galleryCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </motion.div>

  {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          <AnimatePresence>
            {displayedImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden rounded-lg bg-muted aspect-[4/3]">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt || image.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="text-xs">
                      {image.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white font-semibold text-sm mb-1">{image.title}</h3>
                    <p className="text-white/80 text-xs line-clamp-2">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

  {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-2xl sm:max-w-4xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-3 right-3 z-10 text-white hover:bg-white/20 backdrop-blur"
                  onClick={closeLightbox}
                >
                  <X className="h-6 w-6" />
                </Button>

                {/* Navigation Buttons */}
                {filteredImages.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 backdrop-blur"
                      onClick={() => navigateImage("prev")}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 backdrop-blur"
                      onClick={() => navigateImage("next")}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  </>
                )}

                {/* Image */}
                <div className="relative rounded-2xl shadow-2xl bg-white/10 dark:bg-background/30 backdrop-blur-lg border border-white/20">
                  <img
                    src={selectedImage.src || "/placeholder.svg"}
                    alt={selectedImage.alt || selectedImage.title}
                    className="w-full h-auto max-h-[60vh] object-contain rounded-2xl"
                  />
                </div>

                {/* Image Info */}
                <div className="bg-white/80 dark:bg-background/80 rounded-2xl shadow-lg p-6 mt-4 border border-accent/10">
                  <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-2">{selectedImage.title}</h3>
                      <p className="text-muted-foreground text-sm sm:text-base">{selectedImage.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{selectedImage.category}</Badge>
                    {filteredImages.length > 1 && (
                      <span className="text-sm text-muted-foreground">
                        {currentImageIndex + 1} of {filteredImages.length}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Show More Button at Bottom (only if not showAll) */}
        {!showAll && (
          <div className="flex justify-center mt-8">
            <Link href="/gallery">
              <Button variant="outline" className="font-semibold">
                Show More
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
