"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function GalleryPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const galleryImages = [
    { src: "/gallery/black-wheels-set.jpg" },
    { src: "/gallery/c10-truck-side.jpg" },
    { src: "/gallery/camaro-bumper-paint.jpg" },
    { src: "/gallery/charger-daytona.jpg" },
    { src: "/gallery/porsche-carrera-gt.jpg" },
    { src: "/gallery/c10-truck-front.jpg" },
    { src: "/gallery/mustang-blue.jpg" },
    { src: "/gallery/silverado-black.jpg" },
    { src: "/gallery/white-wheels-paint.jpg" },
    { src: "/gallery/shelby-gt350.jpg" },
    { src: "/gallery/lexus-wheel.jpg" },
    { src: "/gallery/pontiac-classic.jpg" },
    { src: "/gallery/mustang-shop-work.jpg" },
    { src: "/camaro-after.jpg" },
    { src: "/camaro-before.jpg" },
    { src: "/gallery/porsche-spyder-rs.jpg" },
    { src: "/gallery/mustang-honeycomb-wrap.jpg" },
    { src: "/gallery/porsche-cayenne-black.jpg" },
    { src: "/gallery/shelby-gt350-blue.jpg" },
    { src: "/gallery/bmw-x7-gray.jpg" },
    { src: "/gallery/bmw-black-wheels.jpg" },
    { src: "/gallery/mustang-blue-bronze.jpg" },
  ]

  // Only full car photos for the slideshow
  const featuredSlides = [
    { src: "/gallery/c10-truck-front.jpg" },
    { src: "/gallery/charger-daytona.jpg" },
    { src: "/gallery/porsche-carrera-gt.jpg" },
    { src: "/gallery/mustang-blue.jpg" },
    { src: "/gallery/silverado-black.jpg" },
    { src: "/gallery/shelby-gt350.jpg" },
    { src: "/gallery/pontiac-classic.jpg" },
    { src: "/gallery/mustang-shop-work.jpg" },
    { src: "/camaro-after.jpg" },
    { src: "/gallery/porsche-spyder-rs.jpg" },
    { src: "/gallery/mustang-honeycomb-wrap.jpg" },
    { src: "/gallery/porsche-cayenne-black.jpg" },
    { src: "/gallery/shelby-gt350-blue.jpg" },
    { src: "/gallery/mustang-blue-bronze.jpg" },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredSlides.length) % featuredSlides.length)
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextLightbox = () => {
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevLightbox = () => {
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Slideshow */}
      <section className="relative pt-24 pb-8 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <span className="text-lime-400 font-bold text-sm uppercase tracking-widest">Our Work</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 uppercase tracking-tight mt-2">Gallery</h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Real work. Real results. Swipe through our recent projects.
            </p>
          </div>

          {/* Main Slideshow */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative aspect-[16/9] overflow-hidden bg-zinc-900">
              {featuredSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                >
                  <Image
                    src={slide.src}
                    alt="Gallery image"
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-lime-400 text-white hover:text-black flex items-center justify-center transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-lime-400 text-white hover:text-black flex items-center justify-center transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {featuredSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 transition-all ${
                    index === currentSlide ? "bg-lime-400 w-8" : "bg-zinc-700 hover:bg-zinc-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Thumbnail Grid */}
      <section className="py-16 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">All Projects</h2>
            <p className="text-zinc-500 mt-2">Click any image to view full size</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-7xl mx-auto">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="relative w-[280px] aspect-[16/9] overflow-hidden group cursor-pointer flex-shrink-0"
              >
                <Image
                  src={image.src}
                  alt="Gallery image"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-lime-400 transition-all" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-zinc-900 hover:bg-lime-400 text-white hover:text-black flex items-center justify-center transition-all z-10"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevLightbox}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-zinc-900 hover:bg-lime-400 text-white hover:text-black flex items-center justify-center transition-all z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextLightbox}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-zinc-900 hover:bg-lime-400 text-white hover:text-black flex items-center justify-center transition-all z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="relative w-full h-full max-w-6xl max-h-[80vh] mx-4">
            <Image
              src={galleryImages[lightboxIndex].src}
              alt="Gallery image"
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-8 left-0 right-0 text-center">
            <p className="text-zinc-500 text-sm">
              {lightboxIndex + 1} / {galleryImages.length}
            </p>
          </div>
        </div>
      )}

      {/* Stats */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-5xl font-black text-lime-400 mb-2">2K+</div>
              <div className="text-zinc-500 uppercase tracking-wide text-sm">Wheels Done</div>
            </div>
            <div>
              <div className="text-5xl font-black text-lime-400 mb-2">500+</div>
              <div className="text-zinc-500 uppercase tracking-wide text-sm">Tint Jobs</div>
            </div>
            <div>
              <div className="text-5xl font-black text-lime-400 mb-2">100%</div>
              <div className="text-zinc-500 uppercase tracking-wide text-sm">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
            Want results like these?
          </h2>
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            Hit us up for a free quote. Let&apos;s make your ride look sick.
          </p>
          <Button asChild size="lg" className="bg-lime-400 hover:bg-lime-300 text-black font-bold text-lg px-8 uppercase tracking-wide">
            <Link href="/quote">Get Your Quote</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div>
              <div className="mb-4">
                <Image
                  src="/dynamic-paint-logo.jpeg"
                  alt="Dynamic Paint Logo"
                  width={200}
                  height={200}
                  className="h-24 w-auto"
                />
              </div>
              <p className="text-zinc-500 text-sm">
                Your one-stop shop for automotive reconditioning. Custom style or factory fresh — we make it happen.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase tracking-wide mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/services" className="text-zinc-500 hover:text-lime-400 transition-colors text-sm">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-zinc-500 hover:text-lime-400 transition-colors text-sm">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-zinc-500 hover:text-lime-400 transition-colors text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-zinc-500 hover:text-lime-400 transition-colors text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase tracking-wide mb-4">Contact</h4>
              <div className="space-y-2 text-zinc-500 text-sm">
                <p>
                  <a href="mailto:info@dynamicpaint.com" className="hover:text-lime-400 transition-colors">
                    info@dynamicpaint.com
                  </a>
                </p>
                <p className="text-zinc-600">
                  Mobile services available
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-xs text-zinc-600">
            <p>&copy; {new Date().getFullYear()} Dynamic Paint. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
