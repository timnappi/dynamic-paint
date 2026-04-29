import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Palette, Wrench, Car, Sun, CircleDot, Truck, CheckCircle, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: Palette,
      title: "Custom Wheel Colors",
      href: "/custom-colors",
      image: "/custom-wheel-colors.jpg",
      description: "Bold custom painted wheels, from subtle accents to full color changes.",
      features: [
        "Unlimited color options",
        "Matte, gloss, metallic & candy finishes",
        "Durable, long-lasting results",
      ],
    },
    {
      icon: Wrench,
      title: "Wheel Repairs",
      href: "/wheels",
      image: "/wheel-repair-before-after.jpg",
      description: "Curb rash, scratches, and scuffs refinished with a clean factory-style result.",
      features: [
        "Curb rash repair",
        "Scratch and scuff removal",
        "OEM finish restoration",
      ],
    },
    {
      icon: Car,
      title: "Auto Body Small Repairs",
      href: "/body-repairs",
      image: "/auto-body-paint-repair.jpg",
      description: "Fast fixes for smaller body and bumper issues without the body shop hassle.",
      features: [
        "Bumper scuffs and scratches",
        "Minor paint touch-ups",
        "Quick turnaround times",
      ],
    },
    {
      icon: Sun,
      title: "Window Tinting",
      href: "/quote?service=window-tinting",
      image: "/window-tinting-service.jpg",
      description: "Clean tint installs for style, privacy, heat rejection, and UV protection.",
      features: [
        "Multiple tint percentages",
        "UV protection",
        "Heat rejection technology",
      ],
    },
    {
      icon: CircleDot,
      title: "Paintless Dent Repair",
      href: "/quote?service=paintless-dent-repair",
      image: "/paintless-dent-repair.jpg",
      description: "Remove dents and dings while preserving the original factory finish.",
      features: [
        "No repainting required",
        "Preserves original finish",
        "Cost-effective solution",
      ],
    },
    {
      icon: Truck,
      title: "Mobile Services",
      href: "/quote?service=mobile",
      image: "/mobile-wheel-repair.jpg",
      description: "Mobile wheel and bumper repair at your home, job, or wherever the car is.",
      features: [
        "On-site wheel repairs",
        "Mobile bumper touch-ups",
        "Same quality as in-shop",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-custom-wheels-street-style.jpg"
            alt="Services"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <span className="text-lime-400 font-bold text-sm uppercase tracking-widest">What We Offer</span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 text-balance uppercase tracking-tight mt-2">Our Services</h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto text-balance">
            From custom wheel paint jobs to factory-fresh restoration. Whatever your ride needs, we got you covered.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-4 sm:gap-5 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Link key={index} href={service.href} className="group block">
                <Card className="bg-zinc-950 border-zinc-800 overflow-hidden transition-all duration-300 group-hover:border-lime-400/60 group-hover:bg-zinc-900">
                  <CardContent className="p-0">
                    <div className="grid gap-5 p-5 sm:p-6 lg:grid-cols-[1fr_1fr_200px] lg:items-stretch">
                      <div>
                        <div className="bg-lime-400/10 w-12 h-12 flex items-center justify-center mb-3 transition-colors group-hover:bg-lime-400/20">
                          <service.icon className="w-6 h-6 text-lime-400" />
                        </div>
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-xl sm:text-2xl font-black text-white mb-2 uppercase tracking-tight">{service.title}</h3>
                          <ArrowUpRight className="w-5 h-5 text-lime-400 opacity-70 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>
                        <p className="text-sm sm:text-base text-zinc-500 transition-colors group-hover:text-zinc-400">{service.description}</p>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-zinc-400 mb-3 uppercase tracking-wide">What&apos;s Included:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <CheckCircle className="w-4 h-4 text-lime-400 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-zinc-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="relative min-h-36 sm:min-h-40 overflow-hidden border border-zinc-800 bg-black">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(min-width: 1024px) 200px, calc(100vw - 40px)"
                          className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-zinc-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 text-balance uppercase tracking-tight">
            Ready to transform your ride?
          </h2>
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            Get a free quote and let&apos;s make it happen.
          </p>
          <Button asChild size="lg" className="bg-lime-400 hover:bg-lime-300 text-black font-bold text-lg px-8 uppercase tracking-wide">
            <Link href="/quote">Get Your Quote</Link>
          </Button>
        </div>
      </section>

      <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div>
              <div className="mb-4">
                <Image
                  src="/dynamic-paint-logo-transparent.png"
                  alt="Dynamic Paint Logo"
                  width={100}
                  height={100}
                />
              </div>
              <p className="text-zinc-500 text-sm">
                Your one-stop shop for automotive reconditioning. Custom style or factory fresh - we make it happen.
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
