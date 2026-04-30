import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Palette, Wrench, Car, Sun, CircleDot, Truck, CheckCircle, Zap, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const services = [
    {
      icon: Palette,
      title: "Custom Wheel Colors",
      description: "Stand out from the crowd with bold, custom painted wheels in any color you can imagine.",
    },
    {
      icon: Wrench,
      title: "Wheel Repairs",
      description: "Curb rash? Scratches? We bring your wheels back to life with expert repairs.",
    },
    {
      icon: Car,
      title: "Auto Body Repairs",
      description: "Minor dents, scratches, and bumper damage fixed fast without the dealership prices.",
    },
    {
      icon: Sun,
      title: "Window Tinting",
      description: "Premium window tint for style, privacy, and UV protection. Multiple shade options.",
    },
    {
      icon: CircleDot,
      title: "Paintless Dent Repair",
      description: "Remove dents without repainting. Quick, affordable, and keeps your original finish.",
    },
    {
      icon: Truck,
      title: "Mobile Services",
      description: "We come to you! Mobile wheel and bumper repair at your home or workplace.",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/high-end-luxury-car-wheel-close-up-dark-automotive.jpg"
            alt="Dark custom wheel detail"
            fill
            className="object-cover object-center opacity-35"
            priority
          />
          <Image
            src="/custom-wheel-colors.jpg"
            alt=""
            fill
            className="object-cover object-right opacity-15 mix-blend-screen saturate-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-lime-950/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/25" />
          
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center pt-20">
          <div className="inline-flex items-center gap-2 bg-lime-400/10 border border-lime-400/30 px-4 py-2 mb-6 animate-fade-in-up">
            <Zap className="w-4 h-4 text-lime-400" />
            <span className="text-lime-400 text-sm font-bold uppercase tracking-wider">Your Ride. Your Style.</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 text-balance animate-fade-in-up [animation-delay:100ms] uppercase tracking-tight leading-none">
            Built <span className="text-lime-400">Different.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 mb-8 max-w-3xl mx-auto text-balance animate-fade-in-up [animation-delay:200ms]">
            Custom wheel colors, repairs, window tinting & more. One-stop shop for automotive reconditioning. Factory fresh or full custom — we got you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:300ms] px-4">
            <Button
              asChild
              size="lg"
              className="bg-lime-400 hover:bg-lime-300 text-black font-bold text-lg px-8 shadow-lg shadow-lime-400/30 hover:shadow-lime-400/50 transition-all hover:scale-105 uppercase tracking-wide"
            >
              <Link href="/quote">Get Your Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-zinc-700 text-white hover:bg-zinc-900 text-lg px-8 bg-transparent hover:border-lime-400 transition-all uppercase tracking-wide font-bold"
            >
              <Link href="/services">See Services</Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-zinc-600 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-lime-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-y border-zinc-800">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="w-12 h-12 bg-lime-400/10 flex items-center justify-center group-hover:bg-lime-400/20 transition-colors">
                  <CheckCircle className="w-6 h-6 text-lime-400" />
                </div>
                <div className="text-4xl sm:text-5xl font-black text-white">Premium</div>
              </div>
              <p className="text-zinc-500 uppercase tracking-wide text-sm font-medium">Show-Quality Finish</p>
            </div>
            <div className="text-center group">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="w-12 h-12 bg-lime-400/10 flex items-center justify-center group-hover:bg-lime-400/20 transition-colors">
                  <Zap className="w-6 h-6 text-lime-400" />
                </div>
                <div className="text-4xl sm:text-5xl font-black text-white">Mobile</div>
              </div>
              <p className="text-zinc-500 uppercase tracking-wide text-sm font-medium">Service Available</p>
            </div>
            <div className="text-center group">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="w-12 h-12 bg-lime-400/10 flex items-center justify-center group-hover:bg-lime-400/20 transition-colors">
                  <Users className="w-6 h-6 text-lime-400" />
                </div>
                <div className="text-4xl sm:text-5xl font-black text-white">OEM+</div>
              </div>
              <p className="text-zinc-500 uppercase tracking-wide text-sm font-medium">Color Matching</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-lime-400 font-bold text-sm uppercase tracking-widest">
              What We Do
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mt-2 mb-4 uppercase tracking-tight">
              Our Services
            </h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
              From custom paint jobs to OEM restoration. Whatever your vibe, we make it happen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto mb-8">
            <Link href="/wheels" className="relative aspect-square sm:col-span-2 sm:row-span-2 overflow-hidden group block cursor-pointer">
              <Image
                src="/wheel-repair-before-after.jpg"
                alt="Before and after wheel repair"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-lime-400 font-bold text-xs uppercase tracking-widest mb-2">Featured</span>
                <p className="text-white font-black text-2xl uppercase tracking-tight">Wheel Restoration</p>
                <p className="text-zinc-400 text-sm">From wrecked to fresh</p>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-lime-400 transition-all" />
            </Link>

            <Link href="/custom-colors" className="relative aspect-square overflow-hidden group block cursor-pointer">
              <Image
                src="/custom-wheel-colors.jpg"
                alt="Custom wheel colors"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent flex items-end">
                <div className="p-4">
                  <span className="text-lime-400 text-xs font-bold uppercase tracking-widest">Custom</span>
                  <p className="text-white font-bold">Color Options</p>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-lime-400 transition-all" />
            </Link>

            <div className="relative aspect-square overflow-hidden group">
              <Image
                src="/window-tint-dynamic-paint.png"
                alt="Window tinting"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end">
                <div className="p-4">
                  <span className="text-lime-400 text-xs font-bold uppercase tracking-widest">Tint</span>
                  <p className="text-white font-bold">Window Tint</p>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-lime-400 transition-all" />
            </div>

            <div className="relative aspect-square sm:col-span-2 overflow-hidden group">
              <Image
                src="/paintless-dent-repair-suv.png"
                alt="Paintless dent repair"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end">
                <div className="p-6">
                  <span className="text-lime-400 text-xs font-bold uppercase tracking-widest">PDR</span>
                  <p className="text-white font-black text-xl uppercase">Paintless Dent Repair</p>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-lime-400 transition-all" />
            </div>

            <Link href="/body-repairs" className="relative aspect-square overflow-hidden group block cursor-pointer">
              <Image
                src="/auto-body-paint-repair.jpg"
                alt="Auto body paint repair"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end">
                <div className="p-4">
                  <span className="text-lime-400 text-xs font-bold uppercase tracking-widest">Paint</span>
                  <p className="text-white font-bold">Body Repairs</p>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-lime-400 transition-all" />
            </Link>
          </div>

          <div className="text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-zinc-700 text-white hover:bg-zinc-900 bg-transparent hover:border-lime-400 transition-all uppercase tracking-wide font-bold"
            >
              <Link href="/gallery">View All Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/oem-restoration-truck.jpg"
                  alt="OEM Restoration - Classic C10"
                  fill
                  className="object-cover brightness-[0.6] contrast-[1.1] saturate-[0.8]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
              </div>
              <div>
                <span className="text-lime-400 font-bold text-sm uppercase tracking-widest">Factory Fresh</span>
                <h2 className="text-4xl sm:text-5xl font-black text-white mt-2 mb-4 uppercase tracking-tight">
                  OEM Restorations
                </h2>
                <p className="text-zinc-400 text-lg mb-6">
                  Not everyone wants loud. Sometimes you just want your ride looking factory-new. We restore wheels and body work to clean, original spec — no flash, just flawless.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle className="w-5 h-5 text-lime-400" />
                    OEM color matching
                  </li>
                  <li className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle className="w-5 h-5 text-lime-400" />
                    Factory finish restoration
                  </li>
                  <li className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle className="w-5 h-5 text-lime-400" />
                    Invisible repairs
                  </li>
                </ul>
                <Button
                  asChild
                  className="bg-lime-400 hover:bg-lime-300 text-black font-bold uppercase tracking-wide"
                >
                  <Link href="/quote">Get OEM Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-lime-400 font-bold text-sm uppercase tracking-widest">Mobile Service</span>
                <h2 className="text-4xl sm:text-5xl font-black text-white mt-2 mb-4 uppercase tracking-tight">
                  We Come To You
                </h2>
                <p className="text-zinc-400 text-lg mb-6">
                  No time to drop off your ride? No problem. Our mobile wheel and bumper repair service comes straight to your location — home, work, wherever.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle className="w-5 h-5 text-lime-400" />
                    On-site wheel repairs
                  </li>
                  <li className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle className="w-5 h-5 text-lime-400" />
                    Bumper scratch & scuff removal
                  </li>
                  <li className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle className="w-5 h-5 text-lime-400" />
                    Flexible scheduling
                  </li>
                </ul>
                <Button
                  asChild
                  className="bg-lime-400 hover:bg-lime-300 text-black font-bold uppercase tracking-wide"
                >
                  <Link href="/quote">Book Mobile Service</Link>
                </Button>
              </div>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/mobile-wheel-repair.jpg"
                  alt="Mobile wheel repair service"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/custom-wheel-colors.jpg"
            alt="CTA Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-lime-950/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 text-balance uppercase tracking-tight">
            Ready to <span className="text-lime-400">level up</span> your ride?
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            Get a free quote today. Custom or clean — we make your vision real.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-lime-400 hover:bg-lime-300 text-black font-bold text-xl px-12 py-6 shadow-2xl shadow-lime-400/40 hover:shadow-lime-400/60 transition-all hover:scale-105 uppercase tracking-wide"
          >
            <Link href="/quote">Get Started</Link>
          </Button>
        </div>
      </section>

      <footer className="bg-zinc-950 border-t border-zinc-800 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="mb-4">
                <Image
                  src="/dynamic-paint-logo-transparent.png"
                  alt="Dynamic Paint Logo"
                  width={580}
                  height={371}
                  className="h-20 w-auto object-contain"
                  unoptimized
                />
              </div>
              <p className="text-zinc-500 text-sm">
                Your one-stop shop for automotive reconditioning. Custom style or factory fresh — we make it happen.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase tracking-wide mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/services" className="text-zinc-500 hover:text-lime-400 transition-colors text-sm">
                    Custom Wheel Colors
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-zinc-500 hover:text-lime-400 transition-colors text-sm">
                    Wheel Repairs
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-zinc-500 hover:text-lime-400 transition-colors text-sm">
                    Window Tinting
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-zinc-500 hover:text-lime-400 transition-colors text-sm">
                    Paintless Dent Repair
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase tracking-wide mb-4">Navigation</h4>
              <ul className="space-y-2">
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
                <li>
                  <Link href="/quote" className="text-zinc-500 hover:text-lime-400 transition-colors text-sm">
                    Get a Quote
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
