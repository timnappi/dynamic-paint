"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function WheelsPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const wheelImages = [
    { src: "/gallery/black-wheels-set.jpg" },
    { src: "/gallery/white-wheels-paint.jpg" },
    { src: "/gallery/lexus-wheel.jpg" },
    { src: "/gallery/bmw-black-wheels.jpg" },
    { src: "/wheel-repair-before-after.jpg" },
  ]

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const nextImage = () => setLightboxIndex((prev) => (prev !== null ? (prev + 1) % wheelImages.length : 0))
  const prevImage = () => setLightboxIndex((prev) => (prev !== null ? (prev - 1 + wheelImages.length) % wheelImages.length : 0))

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pb-24 overflow-hidden">
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
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mt-2 mb-6 uppercase tracking-normal leading-[0.95]">
              Wheel Repairs & Restoration
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
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
              <div className="relative aspect-square overflow-hidden">
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

      {/* Services Offered */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="text-lime-400 font-bold text-sm uppercase tracking-widest">What We Fix</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mt-2 mb-4 uppercase tracking-tight">
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

      {/* Wheel Gallery */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-lime-400 font-bold text-sm uppercase tracking-widest">Our Work</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mt-2 mb-4 uppercase tracking-tight">
              Wheel Gallery
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
            {wheelImages.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="relative w-[300px] aspect-[16/9] overflow-hidden group cursor-pointer flex-shrink-0"
              >
                <Image
                  src={image.src}
                  alt="Wheel work"
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
      <footer className="bg-zinc-950 border-t border-zinc-800 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="relative overflow-hidden border border-zinc-800 bg-black min-h-[320px] sm:min-h-[280px]">
              <Image
                src="/wheels-footer-banner.png"
                alt=""
                fill
                sizes="(min-width: 1280px) 1152px, calc(100vw - 32px)"
                className="object-cover object-right opacity-55"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/35" />
              <div className="relative z-10 grid gap-8 p-6 sm:p-8 md:grid-cols-[240px_1fr] md:items-center">
                <Image
                  src="/dynamic-paint-logo-transparent.png"
                  alt="Dynamic Paint Logo"
                  width={541}
                  height={235}
                  className="w-56 max-w-full object-contain"
                  unoptimized
                />
                <div className="max-w-xl border-l border-lime-400/70 pl-6">
                  <p className="text-2xl sm:text-3xl font-black uppercase tracking-[0.18em] text-white">
                    Built on passion.
                  </p>
                  <p className="text-xl sm:text-2xl font-black uppercase tracking-[0.18em] text-white">
                    <span className="text-lime-400">Driven</span> by detail.
                  </p>
                  <p className="mt-5 max-w-md text-sm sm:text-base leading-7 text-zinc-300">
                    At Dynamic Paint, we don&apos;t just change wheels. We transform them. Every detail matters, and every finish reflects our standard.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-zinc-600 text-sm text-center mt-6">
              &copy; {new Date().getFullYear()} Dynamic Paint. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-lime-400 transition-colors z-50"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-lime-400 transition-colors z-50 p-2"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-lime-400 transition-colors z-50 p-2"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="relative w-full h-full max-w-5xl max-h-[80vh] mx-4">
            <Image
              src={wheelImages[lightboxIndex].src}
              alt="Wheel work"
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
