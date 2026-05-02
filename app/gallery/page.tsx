"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { CheckCircle, ChevronLeft, ChevronRight, X, Zap, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function GalleryPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const galleryImages = [
    { src: "/gallery/all-projects-blue-mustang.png", alt: "Blue Mustang with custom automotive finish" },
    { src: "/gallery/all-projects-porsche-gt.png", alt: "Porsche GT project after reconditioning work" },
    { src: "/gallery/all-projects-window-tint-mustang.png", alt: "Mustang with completed window tint" },
    { src: "/gallery/all-projects-vw-before-after.png", alt: "Volkswagen wheel repair before and after" },
    { src: "/gallery/all-projects-classic-gray-car.jpeg", alt: "Classic gray car restoration detail" },
    { src: "/gallery/all-projects-black-truck.png", alt: "Black truck after paint and reconditioning work" },
    { src: "/gallery/all-projects-porsche-spyder.png", alt: "Porsche Spyder project detail" },
    { src: "/gallery/all-projects-bmw-x7.png", alt: "BMW X7 wheel and finish project" },
    { src: "/gallery/all-projects-blue-shelby.png", alt: "Blue Shelby GT350 custom finish" },
    { src: "/gallery/all-projects-red-camaro-after.png", alt: "Red Camaro after body paint repair" },
    { src: "/gallery/all-projects-red-camaro-before.png", alt: "Red Camaro before body paint repair" },
  ]

  const featuredSlides = [
    galleryImages[1],
    galleryImages[0],
    ...galleryImages.slice(2),
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
      <section className="relative pt-20 sm:pt-24 pb-8 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <span className="text-lime-400 font-bold text-sm uppercase tracking-widest">Our Work</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-4 uppercase tracking-tight mt-2">Gallery</h1>
            <p className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto">
              Real work. Real results. Swipe through our recent projects.
            </p>
          </div>

          {/* Main Slideshow */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative aspect-[16/9] overflow-hidden bg-zinc-900">
              <Image
                key={currentSlide}
                src={featuredSlides[currentSlide].src}
                alt={featuredSlides[currentSlide].alt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 1024px"
              />

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

          <div className="grid grid-cols-1 min-[460px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="relative w-full aspect-[16/10] overflow-hidden group cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 459px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
                />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-lime-400 transition-all" />
              </button>
            ))}
          </div>
          {galleryImages.length === 0 && (
            <div className="max-w-2xl mx-auto border border-zinc-800 bg-black/40 p-8 text-center">
              <p className="text-zinc-500 uppercase tracking-wide text-sm">
                New project photos coming soon.
              </p>
            </div>
          )}
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
              alt={galleryImages[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
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
      <section className="bg-zinc-950 border-y border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto py-12 sm:py-16">
            <div className="text-center group">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="w-12 h-12 bg-lime-400/10 flex items-center justify-center group-hover:bg-lime-400/20 transition-colors">
                  <CheckCircle className="w-6 h-6 text-lime-400" />
                </div>
                <div className="text-3xl sm:text-5xl font-black text-white">Premium</div>
              </div>
              <p className="text-zinc-500 uppercase tracking-wide text-sm font-medium">Show-Quality Finish</p>
            </div>
            <div className="text-center group">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="w-12 h-12 bg-lime-400/10 flex items-center justify-center group-hover:bg-lime-400/20 transition-colors">
                  <Zap className="w-6 h-6 text-lime-400" />
                </div>
                <div className="text-3xl sm:text-5xl font-black text-white">Mobile</div>
              </div>
              <p className="text-zinc-500 uppercase tracking-wide text-sm font-medium">Service Available</p>
            </div>
            <div className="text-center group">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="w-12 h-12 bg-lime-400/10 flex items-center justify-center group-hover:bg-lime-400/20 transition-colors">
                  <Users className="w-6 h-6 text-lime-400" />
                </div>
                <div className="text-3xl sm:text-5xl font-black text-white">OEM+</div>
              </div>
              <p className="text-zinc-500 uppercase tracking-wide text-sm font-medium">Color Matching</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
            Want results like these?
          </h2>
          <p className="text-base sm:text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            Hit us up for a free quote. Let&apos;s make your ride look sick.
          </p>
          <Button asChild size="lg" className="bg-lime-400 hover:bg-lime-300 text-black font-bold text-lg px-8 uppercase tracking-wide">
            <Link href="/quote">Get Your Quote</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}

