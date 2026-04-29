"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { CheckCircle, Wrench, Paintbrush, Car } from "lucide-react"

export default function BodyRepairsPage() {
  const services = [
    "Bumper replacement & paint",
    "Fender replacement & blending",
    "Quarter panel dent repair",
    "Metal work & body filler",
    "Prep, prime & paint",
    "Factory OEM color matching",
    "Panel blending for seamless finish",
    "Minor collision repair",
  ]

  const processSteps = [
    {
      icon: Wrench,
      title: "Assessment & Metal Work",
      description: "We start by evaluating the damage. For dents and creases, we use precision metal work techniques to reshape the panel as close to original as possible before any filler is applied."
    },
    {
      icon: Paintbrush,
      title: "Prep & Prime",
      description: "Proper prep is everything. We sand, clean, and apply high-quality primer to create the perfect foundation. This ensures the paint adheres properly and lasts for years."
    },
    {
      icon: Car,
      title: "Paint & Blend",
      description: "Using factory OEM color codes, we match your vehicle's exact paint. We blend into adjacent panels so there's no visible line - the repair disappears completely."
    },
    {
      icon: CheckCircle,
      title: "Clear Coat & Finish",
      description: "Multiple layers of clear coat protect the paint and give that factory gloss. We wet sand and buff to perfection - you won't be able to tell where the repair was done."
    },
  ]

  const galleryImages = [
    { src: "/gallery/advanti-wheel.jpg" },
    { src: "/gallery/audi-matte-gray.jpg" },
    { src: "/gallery/red-bumper-paint.jpg" },
    { src: "/gallery/camaro-bumper-paint.jpg" },
    { src: "/camaro-before.jpg" },
    { src: "/camaro-after.jpg" },
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-lime-400 font-bold text-sm uppercase tracking-widest">Professional</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mt-2 mb-6 uppercase tracking-tight">
              Auto Body Paint Repair
            </h1>
            <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
              From minor dents to full panel replacement. We bring damaged vehicles back to factory-fresh condition with expert metal work, precision prep, and flawless OEM color matching.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-lime-400 hover:bg-lime-300 text-black font-bold uppercase tracking-wide"
            >
              <Link href="/quote">Get A Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-lime-400 font-bold text-sm uppercase tracking-widest">Light Body Work</span>
                <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-6 uppercase tracking-tight">
                  Factory Look, Every Time
                </h2>
                <p className="text-zinc-400 mb-6">
                  Light body work doesn't mean light results. Whether you need a new bumper painted and installed, a fender replaced after a fender bender, or quarter panel dents repaired with metal work and primer - we deliver dealership-quality results without the dealership price tag.
                </p>
                <p className="text-zinc-400 mb-8">
                  The key is in the details: proper metal work to reshape damaged panels, thorough prep and prime for a solid foundation, and expert color matching using your vehicle's factory OEM paint code. We blend adjacent panels so the repair is invisible - no one will ever know the damage was there.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-lime-400 flex-shrink-0" />
                      <span className="text-zinc-300 text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-square">
                <Image
                  src="/auto-body-paint-repair.jpg"
                  alt="Auto body paint repair"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 border-2 border-lime-400/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-24 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-lime-400 font-bold text-sm uppercase tracking-widest">Our Process</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 uppercase tracking-tight">
                How We Do It
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="bg-black border border-zinc-800 p-6 hover:border-lime-400/50 transition-colors">
                  <div className="bg-lime-400/10 w-12 h-12 flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-lime-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2 uppercase tracking-tight">{step.title}</h3>
                  <p className="text-zinc-500 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-lime-400 font-bold text-sm uppercase tracking-widest">Results</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 uppercase tracking-tight">
                Our Work
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative aspect-square overflow-hidden group">
                  <Image
                    src={image.src}
                    alt="Body repair work"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-lime-400 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 uppercase tracking-tight">
              Ready To Fix It Right?
            </h2>
            <p className="text-zinc-400 mb-8">
              Get a free quote for your body repair. We'll assess the damage and give you an honest price for factory-quality results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-lime-400 hover:bg-lime-300 text-black font-bold uppercase tracking-wide"
              >
                <Link href="/quote">Get A Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-zinc-700 text-white hover:bg-zinc-900 bg-transparent hover:border-lime-400 transition-all uppercase tracking-wide font-bold"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-zinc-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="mb-4 md:mb-0">
              <Image
                src="/dynamic-paint-logo.png"
                alt="Dynamic Paint Logo"
                width={500}
                height={250}
                className="h-16 w-auto"
                unoptimized
              />
            </div>
            <p className="text-zinc-600 text-sm">
              &copy; {new Date().getFullYear()} Dynamic Paint. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
