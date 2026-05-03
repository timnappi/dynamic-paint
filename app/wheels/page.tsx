"use client"

import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function WheelsPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const wheelImages = [
    { src: "/gallery/black-wheels-set.jpg", alt: "Gloss black custom wheel set" },
    { src: "/gallery/white-wheels-paint.jpg", alt: "White painted wheels after refinishing" },
    { src: "/gallery/lexus-wheel.jpg", alt: "Lexus wheel repair and refinish detail" },
    { src: "/gallery/bmw-black-wheels.jpg", alt: "BMW wheels refinished in black" },
    { src: "/wheel-repair-before-after.jpg", alt: "Before and after wheel repair result" },
    { src: "/gallery/mazda-wheel-repair-before-after.png", alt: "Mazda wheel curb rash repair before and after" },
    { src: "/gallery/gloss-black-machined-wheel.png", alt: "Gloss black and machined face custom wheel finish" },
    { src: "/gallery/subaru-sti-silver-wheel.png", alt: "Subaru STI with silver performance wheels" },
  ]

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const nextImage = () => setLightboxIndex((prev) => (prev !== null ? (prev + 1) % wheelImages.length : 0))
  const prevImage = () => setLightboxIndex((prev) => (prev !== null ? (prev - 1 + wheelImages.length) % wheelImages.length : 0))

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-14 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wheel-repair-before-after.jpg"
            alt="Wheel restoration"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-lime-400 font-bold text-sm uppercase tracking-widest">Wheel Specialists</span>
            <h1 className="text-4xl min-[390px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mt-3 mb-5 sm:mb-6 text-balance uppercase tracking-tight leading-none drop-shadow-[0_4px_18px_rgba(0,0,0,0.85)]">
              Wheel Repairs <span className="text-lime-400">&amp;</span> Restoration
            </h1>
            <p className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto">
              From curb rash to custom colors. We bring your wheels back to life with expert craftsmanship and factory-matched precision.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-24 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-lime-400 font-bold text-sm uppercase tracking-widest">The Process</span>
                <h2 className="text-4xl sm:text-5xl font-black text-white mt-2 mb-6 uppercase tracking-tight">
                  How We Do It
                </h2>
                <p className="text-zinc-400 text-lg mb-6">
                  Curb rash, scratches, and scuffs happen to everyone. But that doesn&apos;t mean you have to live with marked-up wheels. Our wheel restoration process brings your rims back to factory-new condition — or better.
                </p>
                <p className="text-zinc-400 text-lg mb-8">
                  We start by cleaning, stripping, and sanding the affected area smooth. After that, we apply primer, base coat matched to your exact OEM color, and finish with a durable clear coat. The result? A clean refinish that blends with the wheel.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-zinc-300">
                    <CheckCircle className="w-5 h-5 text-lime-400 mt-1 flex-shrink-0" />
                    <span><strong className="text-white">Strip & Prep</strong> — Remove damaged material and clean the surface</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300">
                    <CheckCircle className="w-5 h-5 text-lime-400 mt-1 flex-shrink-0" />
                    <span><strong className="text-white">Sand & Smooth</strong> — Refine the surface for a clean, even base</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300">
                    <CheckCircle className="w-5 h-5 text-lime-400 mt-1 flex-shrink-0" />
                    <span><strong className="text-white">Prime & Paint</strong> — Apply primer and factory-matched color</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300">
                    <CheckCircle className="w-5 h-5 text-lime-400 mt-1 flex-shrink-0" />
                    <span><strong className="text-white">Clear Coat</strong> — Seal with durable, high-gloss clear for protection</span>
                  </li>
                </ul>
              </div>
              <div className="relative aspect-[4/3] md:aspect-square overflow-hidden">
                <Image
                  src="/wheel-repair-before-after.jpg"
                  alt="Wheel repair process"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="text-lime-400 font-bold text-sm uppercase tracking-widest">What We Fix</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2 mb-4 uppercase tracking-tight">
              Wheel Services
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-zinc-950 border border-zinc-800 p-6 hover:border-lime-400/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3 uppercase">Curb Rash Repair</h3>
              <p className="text-zinc-500">Scraped your wheel on a curb? We sand, prep, and refinish for a clean result.</p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 p-6 hover:border-lime-400/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3 uppercase">Scratch Removal</h3>
              <p className="text-zinc-500">Deep scratches and scuffs removed with professional refinishing.</p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 p-6 hover:border-lime-400/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3 uppercase">Color Matching</h3>
              <p className="text-zinc-500">Factory OEM color match for invisible repairs that blend perfectly.</p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 p-6 hover:border-lime-400/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3 uppercase">Polished Aluminum</h3>
              <p className="text-zinc-500">Bring raw aluminum wheels back with a clean, bright polished finish.</p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 p-6 hover:border-lime-400/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3 uppercase">Gloss Black Out</h3>
              <p className="text-zinc-500">Full gloss black refinish for that murdered-out look.</p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 p-6 hover:border-lime-400/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3 uppercase">Clear Coat Restore</h3>
              <p className="text-zinc-500">Peeling or faded clear coat? We strip and reapply for lasting shine.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-12 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 uppercase tracking-tight">
            Got Wheel Issues?
          </h2>
          <p className="text-zinc-400 text-base mb-6 max-w-xl mx-auto">
            Send us a pic and we&apos;ll give you a free quote. Most refinishing jobs are done same day.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-lime-400 hover:bg-lime-300 text-black font-bold px-7 uppercase tracking-wide"
          >
            <Link href="/quote">Get Wheel Quote</Link>
          </Button>
        </div>
      </section>

      {/* Wheel Gallery */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-lime-400 font-bold text-sm uppercase tracking-widest">Our Work</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mt-2 mb-4 uppercase tracking-tight">
              Wheel Gallery
            </h2>
          </div>

          <div className="grid grid-cols-1 min-[460px]:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {wheelImages.map((image, index) => (
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
                />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-lime-400 transition-all" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-lime-400 transition-colors z-50"
            aria-label="Close image preview"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-lime-400 transition-colors z-50 p-2"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-lime-400 transition-colors z-50 p-2"
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="relative w-full h-full max-w-5xl max-h-[80vh] mx-4">
            <Image
              src={wheelImages[lightboxIndex].src}
              alt={wheelImages[lightboxIndex].alt}
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-8 left-0 right-0 text-center">
            <p className="text-zinc-500 text-sm">
              {lightboxIndex + 1} / {wheelImages.length}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
