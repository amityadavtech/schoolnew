"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { LazyImage } from "@/components/ui/lazy-image"

interface ModernPopupProps {
  isOpen: boolean
  onClose: () => void
  image?: string
  title?: string
  badge?: string
  description?: string
}

export function ModernPopup({
  isOpen,
  onClose,
  image = "",
  title = "",
  badge = "",
  description = "",
  
}: ModernPopupProps) {

  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    if (isOpen) document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [isOpen, onClose])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
    return () => { document.body.style.overflow = "auto" }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md"
          />

          {/* POPUP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2"
          >
            <div className="relative w-full max-w-xl bg-white dark:bg-[#0e0f12] rounded-2xl shadow-2xl overflow-hidden border border-white/10">

              {/* CLOSE */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-20 p-2 rounded-full bg-white/90 dark:bg-white/10 hover:bg-white/95 dark:hover:bg-white/20 backdrop-blur-md transition"
              >
                <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>

              {/* IMAGE */}
              {image && (
                <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                  <LazyImage
                    src={image}
                    alt={title}
                    wrapperClassName="w-full h-full"
                    imgClassName="object-cover"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* badge */}
                  <div className="absolute left-5 bottom-5 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {badge}
                  </div>
                </div>
              )}

              {/* CONTENT */}
              <div className="p-6 sm:p-4 text-center">

                <h2 className="font-bold text-gray-900 dark:text-white text-2xl sm:text-3xl">
                  {title}
                </h2>

                <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {description}
                </p>

            

              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}