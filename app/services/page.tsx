import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { Palette, Wrench, Car, Sun, CircleDot, Truck, CheckCircle, ArrowUpRight, Sparkles, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { JsonLd, breadcrumbJsonLd, pageJsonLd, serviceCatalogJsonLd } from "../structured-data"
import { buildMetadata, seoRoutes } from "../seo"

export const metadata = buildMetadata(seoRoutes.services)

export default function ServicesPage() {
  const services = [
    {
      icon: Palette,
      title: "Custom Wheel Colors",
      href: "/custom-colors",
      image: "/custom-wheel-colors.jpg",
      description: "Turn heads with bold, custom painted wheels. From neon accents to full color changes, we bring your vision to life.",
      features: [
        "Unlimited color options",
        "Matte, gloss, metallic & candy finishes",
        "Professional prep and clear coat",
        "Color matching available",
        "Durable, long-lasting results",
      ],
    },
    {
      icon: Wrench,
      title: "Wheel Repairs",
      href: "/wheels",
      image: "/wheel-repair-before-after.jpg",
      description: "Curb rash, scratches, and scuffs? We restore your wheels to their former glory — or make them even better.",
      features: [
        "Curb rash repair",
        "Scratch and scuff removal",
        "Bent wheel straightening",
        "Crack repair",
        "OEM finish restoration",
      ],
    },
    {
      icon: Car,
      title: "Auto Body Small Repairs",
      href: "/body-repairs",
      image: "/auto-body-paint-repair.jpg",
      description: "Minor body damage fixed fast. No need for expensive body shop visits for small issues.",
      features: [
        "Bumper scuffs and scratches",
        "Minor paint touch-ups",
        "Plastic trim restoration",
        "Fender repairs",
        "Quick turnaround times",
      ],
    },
    {
      icon: Sparkles,
      title: "Paint Corrections",
      href: "/quote?service=paint-correction",
      image: "/paint-correction-buffing.png",
      description: "Bring dull, scratched, or aged paint back to life with professional wet sanding, buffing, and polishing.",
      features: [
        "Wet sanding for deeper defects",
        "Buffing and polishing",
        "Surface scratch removal",
        "Aged clear coat restoration",
        "Gloss and shine enhancement",
      ],
    },
    {
      icon: Sun,
      title: "Window Tinting",
      href: "/window-tint",
      image: "/window-tint-dynamic-paint.png",
      description: "Premium window tint for style, privacy, and protection. Multiple shade levels to match your vibe.",
      features: [
        "Multiple tint percentages available",
        "UV protection",
        "Heat rejection technology",
        "Lifetime warranty options",
        "Legal compliance guidance",
      ],
    },
    {
      icon: CircleDot,
      title: "Paintless Dent Repair",
      href: "/quote?service=paintless-dent-repair",
      image: "/paintless-dent-repair-suv.png",
      description: "Remove dents and dings without affecting your factory paint. The smart way to fix hail damage and door dings.",
      features: [
        "No repainting required",
        "Preserves original finish",
        "Same-day service available",
        "Hail damage specialists",
        "Cost-effective solution",
      ],
    },
    {
      icon: Truck,
      title: "Mobile Services",
      href: "/quote?service=mobile",
      image: "/mobile-wheel-repair.jpg",
      description: "Can't come to us? We come to you. Mobile wheel and bumper repair at your convenience.",
      features: [
        "On-site wheel repairs",
        "Mobile bumper touch-ups",
        "Flexible scheduling",
        "Service at home or work",
        "Same quality as in-shop",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <JsonLd data={[pageJsonLd(seoRoutes.services, "CollectionPage"), breadcrumbJsonLd(seoRoutes.services), serviceCatalogJsonLd()]} />
      <Navigation />

      <section className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-custom-wheels-street-style.jpg"
            alt="Custom wheels and automotive reconditioning services"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <span className="text-lime-400 font-bold text-sm uppercase tracking-widest">What We Offer</span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-5 sm:mb-6 text-balance uppercase tracking-tight mt-2">Our Services</h1>
          <p className="text-base sm:text-xl text-zinc-400 max-w-3xl mx-auto text-balance">
            From custom wheel paint jobs to factory-fresh restoration. Whatever your ride needs, we got you covered.
          </p>
          <div className="mt-6 inline-flex max-w-[22rem] sm:max-w-none flex-wrap items-center justify-center gap-2 border border-zinc-800 bg-black/50 px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wide text-zinc-400">
            <MapPin className="h-4 w-4 text-lime-400" />
            <span>Serving Ocean County, Atlantic County &amp; Monmouth County, NJ</span>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Link key={index} href={service.href} className="group block">
                <Card className="bg-zinc-950 border-zinc-800 overflow-hidden transition-all duration-300 group-hover:border-lime-400/60 group-hover:bg-zinc-900">
                  <CardContent className="p-0">
                    <div className="grid gap-5 sm:gap-6 p-5 sm:p-8 lg:grid-cols-[1fr_1.05fr_240px] lg:items-stretch">
                      <div>
                        <div className="bg-lime-400/10 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 transition-colors group-hover:bg-lime-400/20">
                          <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-lime-400" />
                        </div>
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-xl sm:text-2xl font-black text-white mb-3 uppercase tracking-tight">{service.title}</h3>
                          <ArrowUpRight className="w-6 h-6 text-lime-400 opacity-70 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>
                        <p className="text-sm sm:text-base text-zinc-500 transition-colors group-hover:text-zinc-400">{service.description}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-zinc-400 mb-4 uppercase tracking-wide">What&apos;s Included:</h4>
                        <ul className="space-y-2 sm:space-y-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-lime-400 flex-shrink-0 mt-0.5" />
                              <span className="text-sm sm:text-base text-zinc-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="relative min-h-44 sm:min-h-48 overflow-hidden border border-zinc-800 bg-black">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(min-width: 1024px) 240px, calc(100vw - 64px)"
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

      <section className="py-14 sm:py-20 bg-zinc-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 sm:mb-6 text-balance uppercase tracking-tight">
            Ready to transform your ride?
          </h2>
          <p className="text-base sm:text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            Get a free quote and let&apos;s make it happen.
          </p>
          <Button asChild size="lg" className="bg-lime-400 hover:bg-lime-300 text-black font-bold text-lg px-8 uppercase tracking-wide">
            <Link href="/quote">Get Your Quote</Link>
          </Button>
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}

