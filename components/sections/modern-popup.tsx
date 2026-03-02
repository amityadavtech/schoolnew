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
  description?: string
}

export function ModernPopup({
  isOpen,
  onClose,
  image = "",
  title = "",
  description = "",
}: ModernPopupProps) {

  // ESC key close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    if (isOpen) document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [isOpen, onClose])

  // Disable scroll on body
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
            key="bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md"
          />

          {/* POPUP WRAPPER */}
          <motion.div
            key="panel"
            initial={{ opacity: 0, scale: 0.98, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 18 }}
            transition={{ duration: 0.22, ease: [0.2, 0.9, 0.25, 1] }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-6"
          >
            {/* POPUP CARD */}
            <div
              className="relative w-full max-w-md sm:max-w-xl bg-white dark:bg-[#0e0f12] rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden border border-white/10 backdrop-blur-xl flex flex-col mx-2 sm:mx-0"
            >

              {/* CLOSE BUTTON */}
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute right-3 top-3 z-20 p-2 rounded-full bg-white/90 dark:bg-white/10 hover:bg-white/95 dark:hover:bg-white/20 backdrop-blur-md transition"
              >
                <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>

              {/* IMAGE (NEVER FULL HEIGHT) */}
              {image && (
                <div className="relative w-full h-36 sm:h-56 overflow-hidden">
                  <LazyImage
                    src={image}
                    alt={title}
                    wrapperClassName="w-full h-full"
                    imgClassName="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              )}

              {/* CONTENT */}
              <div className="p-5 sm:p-7 overflow-auto min-w-0">

                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white truncate">
                  {title}
                </h2>

                <p className="mt-3 text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed break-words">
                  {description}
                </p>

                {/* BUTTONS */}
                <div className="mt-7 flex flex-col sm:flex-row gap-3">

                  <button
                    onClick={onClose}
                    className="
                      w-full sm:w-auto px-6 py-3
                      rounded-xl text-white font-semibold
                      bg-gradient-to-r from-blue-600 to-blue-700
                      shadow-lg shadow-blue-600/30
                      hover:scale-[1.02] transition-transform
                    "
                  >
                    Continue
                  </button>

                  <button
                    onClick={onClose}
                    className="
                      w-full sm:w-auto px-6 py-3 rounded-xl
                      border border-gray-300 dark:border-gray-700
                      text-gray-900 dark:text-gray-200
                      bg-white dark:bg-transparent
                      hover:bg-gray-50 dark:hover:bg-gray-900 transition
                    "
                  >
                    Learn More
                  </button>

                </div>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
