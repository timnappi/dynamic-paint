import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { Target, Users, Wrench, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { JsonLd, breadcrumbJsonLd, pageJsonLd } from "../structured-data"
import { buildMetadata, seoRoutes } from "../seo"

export const metadata = buildMetadata(seoRoutes.about)

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Quality First",
      description: "We don't cut corners. Every job gets quality materials, careful prep, and expert attention.",
    },
    {
      icon: Users,
      title: "Customer Focused",
      description: "Your vision matters. We listen, give honest guidance, and keep the work aligned with your goals.",
    },
    {
      icon: Wrench,
      title: "Always Evolving",
      description: "New techniques, better finishes, and sharper results. We keep improving the way we work.",
    },
    {
      icon: Heart,
      title: "Car Culture",
      description: "We're enthusiasts too. Your ride is handled by people who care about the details.",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <JsonLd data={[pageJsonLd(seoRoutes.about, "AboutPage"), breadcrumbJsonLd(seoRoutes.about)]} />
      <Navigation />

      <section className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-custom-wheels-street-style.jpg"
            alt="Custom wheel finish on a modified car"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <span className="text-lime-400 font-bold text-sm uppercase tracking-widest">Who We Are</span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-5 sm:mb-6 text-balance uppercase tracking-tight mt-2">About Us</h1>
          <p className="text-base sm:text-xl text-zinc-400 max-w-3xl mx-auto text-balance">
            Detail-focused automotive reconditioning for clean repairs, custom finishes, and a sharper-looking ride.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-zinc-950 border-zinc-800">
              <CardContent className="p-5 sm:p-8 md:p-12">
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-5 sm:mb-6 uppercase tracking-tight">Our Story</h2>
                <div className="space-y-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
                  <p>
                    Dynamic Paint started because we were tired of the same old auto shops with their sky-high prices and cookie-cutter results. We saw a gap — people who wanted quality work on their wheels and body without getting ripped off or waiting weeks.
                  </p>
                  <p>
                    So we built something different. A one-stop shop for automotive reconditioning that speaks to the younger generation who care about how their ride looks. Whether you want custom colors that turn heads or just want your car looking factory-fresh again, we&apos;ve got you.
                  </p>
                  <p>
                    We specialize in custom wheel colors, wheel repairs, window tinting, paintless dent repair, and mobile services. That last part is key — we know you&apos;re busy. So we come to you.
                  </p>
                  <p>
                    We have worked in many different body shop environments, from large corporate operations to small family-owned shops. That experience taught us what customers really look for in a completed job: clear communication, clean fit and finish, honest expectations, and work that feels worth it when they pick up the keys.
                  </p>
                  <p>
                    Our approach is simple: quality work, fair prices, and treating every car like it&apos;s our own. We keep the customer&apos;s needs first, which leads to better results and higher satisfaction.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-black text-white text-center mb-4 uppercase tracking-tight">What We Stand For</h2>
          <p className="text-zinc-500 text-center mb-8 sm:mb-12 text-base sm:text-lg">Our core values drive everything we do</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800 text-center hover:border-lime-400/30 transition-colors">
                <CardContent className="p-5 sm:p-6">
                  <div className="bg-lime-400/10 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-lime-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tight">{value.title}</h3>
                  <p className="text-zinc-500">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-white text-center mb-8 sm:mb-12 uppercase tracking-tight">Why Dynamic Paint?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-zinc-950 border-zinc-800 hover:border-lime-400/30 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tight">One-Stop Shop</h3>
                  <p className="text-zinc-500">
                    Wheels, tint, dents, body work — all under one roof. No running around to different shops.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-950 border-zinc-800 hover:border-lime-400/30 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tight">Fair Pricing</h3>
                  <p className="text-zinc-500">
                    No hidden fees, no surprises. You know what you&apos;re paying before we start.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-950 border-zinc-800 hover:border-lime-400/30 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tight">Fast Turnaround</h3>
                  <p className="text-zinc-500">
                    We respect your time. Most jobs done same-day or next-day.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-950 border-zinc-800 hover:border-lime-400/30 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tight">Mobile Option</h3>
                  <p className="text-zinc-500">
                    Can&apos;t come to us? We&apos;ll come to you. Convenience on your terms.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-zinc-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 sm:mb-6 text-balance uppercase tracking-tight">
            Ready to work with us?
          </h2>
          <p className="text-base sm:text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            Get in touch or request a quote. Let&apos;s make something happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-lime-400 hover:bg-lime-300 text-black font-bold text-lg px-8 uppercase tracking-wide">
              <Link href="/quote">Get a Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-zinc-700 text-white hover:bg-zinc-900 text-lg px-8 bg-transparent hover:border-lime-400 uppercase tracking-wide font-bold"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}

