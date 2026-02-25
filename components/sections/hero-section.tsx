"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Play, Award, Users, BookOpen, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const HERO_SLIDES = [
  {
    image: "/modern-school-campus-with-students-walking--bright.jpg",
    title: "Shaping Tomorrow's Leaders Today",
    subtitle: "Excellence in Education Since 1985",
  },
  {
    image: "/school-graduation-ceremony-with-students-in-caps-a.jpg",
    title: "Academic Excellence & Personal Growth",
    subtitle: "Preparing Students for Success",
  },
  {
    image: "/students-playing-basketball-in-school-gymnasium.jpg",
    title: "Holistic Development Through Sports",
    subtitle: "Building Strong Character & Confidence",
  },
  {
    image: "/school-cultural-festival-with-diverse-students-cel.jpg",
    title: "Celebrating Diversity & Culture",
    subtitle: "Creating Inclusive Learning Communities",
  },
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  // Auto-slide effect
  useEffect(() => {
    if (!isAutoPlay) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlay])

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
    setIsAutoPlay(false)
  }

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length)
    setIsAutoPlay(false)
  }

  const goToSlide = (index: number) => {
    setCurrent(index)
    setIsAutoPlay(false)
  }

  const slide = HERO_SLIDES[current]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <style>{`
        @media (max-width: 768px) {
          .hero-content-wrapper {
            min-height: calc(100vh - 4rem);
            padding: 2rem 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .hero-title {
            font-size: 1.875rem;
            line-height: 1.2;
            word-spacing: 0.1em;
          }

          .hero-subtitle-text {
            font-size: 0.95rem;
            line-height: 1.5;
          }

          .hero-button-group {
            gap: 0.75rem;
          }

          .hero-button {
            min-height: 44px;
            padding: 0.875rem 1.25rem;
            font-size: 0.95rem;
          }

          .hero-stats-grid {
            gap: 1rem;
            padding: 0 0.5rem;
          }

          .hero-stat-card {
            padding: 1rem 0.75rem;
          }

          .hero-stat-value {
            font-size: 1.5rem;
          }

          .hero-stat-label {
            font-size: 0.75rem;
            line-height: 1.25;
          }

          .hero-stat-icon {
            width: 1.25rem;
            height: 1.25rem;
          }

          .carousel-controls {
            bottom: 1.5rem;
            gap: 0.75rem;
          }

          .carousel-button {
            padding: 0.5rem;
          }

          .carousel-button svg {
            width: 1rem;
            height: 1rem;
          }

          .slide-indicator {
            height: 0.375rem;
            margin: 0 0.25rem;
          }

          .slide-indicator.active {
            width: 1rem;
          }

          .slide-indicator.inactive {
            width: 0.375rem;
          }
        }

        @media (max-width: 480px) {
          .hero-content-wrapper {
            padding: 1.5rem 0.75rem;
          }

          .hero-title {
            font-size: 1.5rem;
            margin-bottom: 0.75rem;
          }

          .hero-subtitle-text {
            font-size: 0.9rem;
            margin-bottom: 1.25rem;
            padding: 0 0.5rem;
          }

          .hero-button-group {
            gap: 0.625rem;
            margin-bottom: 1.5rem;
          }

          .hero-stat-card {
            padding: 0.875rem 0.5rem;
          }

          .hero-stat-value {
            font-size: 1.375rem;
          }

          .carousel-controls {
            bottom: 1rem;
            gap: 0.5rem;
          }
        }
      `}</style>
      <AnimatePresence>
        {/* Background Carousel */}
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Vignette Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
          {/* Top-to-bottom gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white hero-content-wrapper">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto w-full"
        >
          <Badge variant="secondary" className="mb-4 sm:mb-6 text-white bg-white/20 border border-white/30 backdrop-blur-sm text-xs sm:text-sm inline-flex">
            <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            <span className="truncate">{slide.subtitle}</span>
          </Badge>

          <h1 className="hero-title text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 sm:mb-6 text-balance text-white drop-shadow-lg">
            {slide.title}
          </h1>

          <p className="hero-subtitle-text text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto text-pretty leading-relaxed drop-shadow-md px-2 sm:px-0">
            At Aira Bal Vidya Mandir Inter College, we nurture young minds through innovative teaching methods, comprehensive development
            programs, and a commitment to academic excellence that prepares students for a bright future.
          </p>

          <div className="hero-button-group flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-0 sm:px-2 w-full">
            <Button asChild size="lg" className="hero-button bg-blue-600 hover:bg-blue-700 text-white shadow-lg w-full sm:w-auto">
              <Link href="/admissions" className="flex justify-center items-center">
                Apply for Admission
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              className="hero-button border border-white/40 text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm shadow-lg w-full sm:w-auto"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Virtual Tour
            </Button>
          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-stats-grid grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto px-2 sm:px-0"
          >
            <div className="hero-stat-card text-center bg-white/10 backdrop-blur-md p-3 sm:p-4 rounded-lg border border-white/20">
              <div className="flex items-center justify-center mb-2">
                <Users className="hero-stat-icon h-5 sm:h-6 w-5 sm:w-6 mr-2 text-blue-400" />
                <span className="hero-stat-value text-xl sm:text-2xl font-bold text-white">1,200+</span>
              </div>
              <p className="hero-stat-label text-white/80 text-xs sm:text-sm">Active Students</p>
            </div>
            <div className="hero-stat-card text-center bg-white/10 backdrop-blur-md p-3 sm:p-4 rounded-lg border border-white/20">
              <div className="flex items-center justify-center mb-2">
                <BookOpen className="hero-stat-icon h-5 sm:h-6 w-5 sm:w-6 mr-2 text-blue-400" />
                <span className="hero-stat-value text-xl sm:text-2xl font-bold text-white">95%</span>
              </div>
              <p className="hero-stat-label text-white/80 text-xs sm:text-sm">College Acceptance</p>
            </div>
            <div className="hero-stat-card text-center bg-white/10 backdrop-blur-md p-3 sm:p-4 rounded-lg border border-white/20">
              <div className="flex items-center justify-center mb-2">
                <Award className="hero-stat-icon h-5 sm:h-6 w-5 sm:w-6 mr-2 text-blue-400" />
                <span className="hero-stat-value text-2xl font-bold text-white">50+</span>
              </div>
              <p className="hero-stat-label text-white/80 text-sm">Awards Won</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Carousel Controls - Hide on very small screens */}
      <div className="carousel-controls absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-3 sm:gap-6 px-2">
        {/* Previous Button */}
        <button
          onClick={goToPrev}
          className="carousel-button p-1.5 sm:p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 transition-all duration-200 text-white"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="flex gap-1.5 sm:gap-2">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`slide-indicator rounded-full transition-all duration-300 ${
                index === current
                  ? "slide-indicator active w-6 sm:w-8 h-1.5 sm:h-2 bg-blue-500"
                  : "slide-indicator inactive w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="carousel-button p-1.5 sm:p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 transition-all duration-200 text-white"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-16 sm:bottom-24 left-1/2 transform -translate-x-1/2 z-10 hidden sm:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}
