"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { useState } from "react"

export default function CustomColorsPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const wheelImages = [
    { src: "/gallery/black-wheels-set.jpg", alt: "Gloss black custom wheel color finish" },
    { src: "/gallery/white-wheels-paint.jpg", alt: "White custom wheel paint finish" },
    { src: "/gallery/bmw-black-wheels.jpg", alt: "BMW wheels with custom black finish" },
    { src: "/gallery/lexus-wheel.jpg", alt: "Custom refinished Lexus wheel" },
    { src: "/custom-wheel-colors.jpg", alt: "Custom color wheel finish showcase" },
    { src: "/gallery/gloss-black-machined-wheel.png", alt: "Gloss black wheel with machined face custom finish" },
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
      <section className="pt-24 sm:pt-32 pb-10 sm:pb-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-lime-400 font-bold text-sm uppercase tracking-widest">Unlimited Options</span>
            <h1 className="text-3xl min-[390px]:text-4xl sm:text-5xl md:text-6xl font-black text-white mt-2 mb-5 sm:mb-6 uppercase tracking-tight">
              Custom Wheel Colors
            </h1>
            <p className="text-zinc-400 text-base sm:text-lg max-w-3xl mx-auto">
              Your imagination is the only limit. We bring your vision to life with fully customizable wheel finishes.
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 bg-zinc-950">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-5 sm:mb-6">
                Make It Yours
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 mb-5 sm:mb-6">
                Why settle for stock when you can stand out? At Dynamic Paint, we transform ordinary wheels into one-of-a-kind masterpieces. From subtle two-tone finishes to bold candy colors, matte black to chrome delete — if you can dream it, we can paint it.
              </p>
              <p className="text-sm sm:text-base text-zinc-400 mb-5 sm:mb-6">
                Our custom color work goes beyond just the face of the wheel. We offer full customization including barrel painting (inside and out), lip finishing, accent colors, and multi-tone combinations. Every wheel is meticulously prepped, primed, and finished with automotive-grade clear coat for durability that lasts.
              </p>
            </div>
            <div className="relative aspect-[4/3] md:aspect-square overflow-hidden">
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

      {/* Process Visual */}
      <section className="bg-black px-4 sm:px-6 py-8 sm:py-12">
        <div className="container mx-auto max-w-6xl">
          <div className="overflow-x-auto border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/40">
            <div className="min-w-[720px] sm:min-w-0">
              <Image
                src="/custom-wheel-process-style-guide.png"
                alt="Dynamic Paint custom wheel color process and finish options"
                width={1792}
                height={1024}
                sizes="(min-width: 1280px) 1152px, 720px"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Options Section */}
      <section className="pt-8 sm:pt-10 pb-12 sm:pb-16 px-4 sm:px-6 bg-black">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-6 sm:mb-8 text-center">
            Customization Options
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-zinc-950 border border-zinc-800 p-5 sm:p-6">
              <h3 className="text-lime-400 font-bold uppercase tracking-wide mb-2">Two-Tone</h3>
              <p className="text-zinc-400 text-sm">Contrasting colors on face and lip for a clean, layered look.</p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 p-5 sm:p-6">
              <h3 className="text-lime-400 font-bold uppercase tracking-wide mb-2">Barrel Paint</h3>
              <p className="text-zinc-400 text-sm">Color matched or contrasting barrel finish — inside and out.</p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 p-5 sm:p-6">
              <h3 className="text-lime-400 font-bold uppercase tracking-wide mb-2">Gloss Black</h3>
              <p className="text-zinc-400 text-sm">Sleek, deep black finish that never goes out of style.</p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 p-5 sm:p-6">
              <h3 className="text-lime-400 font-bold uppercase tracking-wide mb-2">Matte Finish</h3>
              <p className="text-zinc-400 text-sm">Low-sheen, aggressive look for a modern aesthetic.</p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 p-5 sm:p-6">
              <h3 className="text-lime-400 font-bold uppercase tracking-wide mb-2">Candy Colors</h3>
              <p className="text-zinc-400 text-sm">Vibrant, deep candy finishes with incredible depth.</p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 p-5 sm:p-6">
              <h3 className="text-lime-400 font-bold uppercase tracking-wide mb-2">Bronze & Gold</h3>
              <p className="text-zinc-400 text-sm">Premium metallic tones for that show-stopping look.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-zinc-950">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-6 sm:mb-8 text-center">
            Custom Work
          </h2>
          <div className="grid grid-cols-1 min-[460px]:grid-cols-2 lg:grid-cols-3 gap-4">
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
      <SiteFooter />

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md sm:bg-black/95 sm:p-0 sm:backdrop-blur-none">
          <button
            onClick={closeLightbox}
            className="absolute right-6 top-6 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-zinc-950/90 text-white shadow-xl shadow-black/40 transition-colors hover:bg-lime-400 hover:text-black sm:bg-transparent sm:shadow-none sm:hover:bg-transparent sm:hover:text-lime-400"
            aria-label="Close image preview"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={prevImage}
            className="absolute bottom-6 left-[calc(50%-4rem)] z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-zinc-950/90 p-0 text-white shadow-xl shadow-black/40 transition-colors hover:bg-lime-400 hover:text-black sm:left-4 sm:top-1/2 sm:h-auto sm:w-auto sm:-translate-y-1/2 sm:border-0 sm:bg-transparent sm:p-2 sm:shadow-none sm:hover:bg-transparent sm:hover:text-lime-400"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={nextImage}
            className="absolute bottom-6 right-[calc(50%-4rem)] z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-zinc-950/90 p-0 text-white shadow-xl shadow-black/40 transition-colors hover:bg-lime-400 hover:text-black sm:right-4 sm:top-1/2 sm:h-auto sm:w-auto sm:-translate-y-1/2 sm:border-0 sm:bg-transparent sm:p-2 sm:shadow-none sm:hover:bg-transparent sm:hover:text-lime-400"
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="relative h-[68vh] w-full max-w-[26rem] overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl shadow-black/70 sm:mx-4 sm:h-full sm:max-h-[80vh] sm:max-w-6xl sm:rounded-none sm:border-0 sm:bg-transparent sm:shadow-none">
            <Image
              src={wheelImages[lightboxIndex].src}
              alt={wheelImages[lightboxIndex].alt}
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-20 left-0 right-0 text-center sm:bottom-8">
            <p className="text-sm font-bold text-zinc-400">
              {lightboxIndex + 1} / {wheelImages.length}
            </p>
          </div>
        </div>
      )}
    </main>
  )
}
