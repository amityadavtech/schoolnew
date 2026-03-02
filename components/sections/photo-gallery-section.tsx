"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, Download, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useGalleryImages } from "@/lib/gallery-store"
import Link from "next/link"

const galleryCategories = ["All", "Campus Life", "Events", "Sports", "Arts","School Tour","Graduation","Amit"]



export function PhotoGallerySection({ showAll = false }: { showAll?: boolean }) {
  const { images } = useGalleryImages()
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
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-950">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8 sm:mb-10 md:mb-12 text-center">
          <div className="inline-block mb-3 sm:mb-4">
            <Badge variant="secondary" className="text-xs sm:text-sm bg-blue-50 text-blue-700">Gallery</Badge>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-2">Gallery</h2>
          <div className="h-1 w-20 sm:w-24 md:w-28 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8" />
        </div>
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10 md:mb-12"
        >
          {galleryCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="rounded-full text-xs sm:text-sm"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
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
                onClick={() => openLightbox(image)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/5 aspect-[4/3] shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt || image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 left-3">
                    <Badge className="text-xs bg-blue-50 text-blue-700/90 px-2 py-1 rounded-full shadow-sm">{image.category}</Badge>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <div className="bg-gradient-to-t from-black/60 to-transparent rounded-md p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-white font-semibold text-sm mb-1">{image.title}</h3>
                      <p className="text-white/80 text-xs line-clamp-2">{image.description}</p>
                    </div>
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
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="relative max-w-4xl w-full max-h-[92vh]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  aria-label="Close"
                  className="absolute top-3 right-3 z-20 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Image Panel */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 p-4 border border-gray-100">
                  <div className="flex items-center justify-center bg-black rounded-xl p-6">
                    <img
                      src={selectedImage.src || "/placeholder.svg"}
                      alt={selectedImage.alt || selectedImage.title}
                      className="w-full h-auto max-h-[68vh] object-contain rounded-lg"
                    />
                  </div>

                  {/* Controls */}
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <button onClick={() => navigateImage("prev")} className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20">
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                  </div>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <button onClick={() => navigateImage("next")} className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20">
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </div>

                  {/* Meta area */}
                  <div className="mt-4 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-gray-100">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 dark:text-white mb-1">{selectedImage.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{selectedImage.description}</p>
                        <div className="mt-3 flex items-center gap-3">
                          <Badge className="bg-blue-50 text-blue-700">{selectedImage.category}</Badge>
                          {filteredImages.length > 1 && (
                            <span className="text-sm text-gray-500">{currentImageIndex + 1} of {filteredImages.length}</span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <a href={selectedImage.src} download className="inline-flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg shadow hover:brightness-105">
                          <Download className="w-4 h-4 mr-2" /> Download
                        </a>
                        <button className="inline-flex items-center px-3 py-2 border border-gray-200 rounded-lg shadow hover:shadow-md">
                          <Share2 className="w-4 h-4 mr-2" /> Share
                        </button>
                      </div>
                    </div>
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
