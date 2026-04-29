"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { useState } from "react"

export default function CustomColorsPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const wheelImages = [
    { src: "/gallery/black-wheels-set.jpg" },
    { src: "/gallery/white-wheels-paint.jpg" },
    { src: "/gallery/bmw-black-wheels.jpg" },
    { src: "/gallery/lexus-wheel.jpg" },
    { src: "/custom-wheel-colors.jpg" },
  ]

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % wheelImages.length)
  }

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + wheelImages.length) % wheelImages.length)
  }

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-lime-400 font-bold text-sm uppercase tracking-widest">Unlimited Options</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mt-2 mb-6 uppercase tracking-tight">
              Custom Wheel Colors
            </h1>
            <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
              Your imagination is the only limit. We bring your vision to life with fully customizable wheel finishes.
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-12 px-4 sm:px-6 bg-zinc-950">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6">
                Make It Yours
              </h2>
              <p className="text-zinc-400 mb-6">
                Why settle for stock when you can stand out? At Dynamic Paint, we transform ordinary wheels into one-of-a-kind masterpieces. From subtle two-tone finishes to bold candy colors, matte black to chrome delete — if you can dream it, we can paint it.
              </p>
              <p className="text-zinc-400 mb-6">
                Our custom color work goes beyond just the face of the wheel. We offer full customization including barrel painting (inside and out), lip finishing, accent colors, and multi-tone combinations. Every wheel is meticulously prepped, primed, and finished with automotive-grade clear coat for durability that lasts.
              </p>
            </div>
            <div className="relative aspect-square">
              <Image
                src="/custom-wheel-colors.jpg"
                alt="Custom wheel colors showcase"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Options Section */}
      <section className="py-16 px-4 sm:px-6 bg-black">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-8 text-center">
            Customization Options
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-zinc-950 border border-zinc-800 p-6">
              <h3 className="text-lime-400 font-bold uppercase tracking-wide mb-2">Two-Tone</h3>
              <p className="text-zinc-400 text-sm">Contrasting colors on face and lip for a clean, layered look.</p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 p-6">
              <h3 className="text-lime-400 font-bold uppercase tracking-wide mb-2">Barrel Paint</h3>
              <p className="text-zinc-400 text-sm">Color matched or contrasting barrel finish — inside and out.</p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 p-6">
              <h3 className="text-lime-400 font-bold uppercase tracking-wide mb-2">Gloss Black</h3>
              <p className="text-zinc-400 text-sm">Sleek, deep black finish that never goes out of style.</p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 p-6">
              <h3 className="text-lime-400 font-bold uppercase tracking-wide mb-2">Matte Finish</h3>
              <p className="text-zinc-400 text-sm">Low-sheen, aggressive look for a modern aesthetic.</p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 p-6">
              <h3 className="text-lime-400 font-bold uppercase tracking-wide mb-2">Candy Colors</h3>
              <p className="text-zinc-400 text-sm">Vibrant, deep candy finishes with incredible depth.</p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 p-6">
              <h3 className="text-lime-400 font-bold uppercase tracking-wide mb-2">Bronze & Gold</h3>
              <p className="text-zinc-400 text-sm">Premium metallic tones for that show-stopping look.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 sm:px-6 bg-zinc-950">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-8 text-center">
            Custom Work
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {wheelImages.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="relative w-[280px] aspect-[16/9] overflow-hidden group cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt="Custom wheel"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-lime-400 transition-all" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-4">
            Ready to Customize?
          </h2>
          <p className="text-zinc-400 mb-8">
            Send us your ideas and let&apos;s make your wheels unique.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-lime-400 hover:bg-lime-300 text-black font-bold uppercase tracking-wide"
          >
            <Link href="/quote">Get a Quote</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="mb-4 md:mb-0">
              <Image
                src="/dynamic-paint-logo.jpeg"
                alt="Dynamic Paint Logo"
                width={500}
                height={250}
                className="h-16 w-auto"
                unoptimized
              />
            </div>
            <p className="text-zinc-500 text-sm">
              &copy; {new Date().getFullYear()} Dynamic Paint. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-lime-400 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-lime-400 transition-colors p-2"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-lime-400 transition-colors p-2"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="relative w-full h-full max-w-6xl max-h-[80vh] mx-4">
            <Image
              src={wheelImages[lightboxIndex].src}
              alt="Custom wheel"
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
    </main>
  )
}
