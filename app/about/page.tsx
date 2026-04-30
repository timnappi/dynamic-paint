import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Target, Users, Wrench, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Quality First",
      description: "We don&apos;t cut corners. Every job gets premium materials and expert attention.",
    },
    {
      icon: Users,
      title: "Customer Focused",
      description: "Your vision matters. We listen, advise, and deliver exactly what you want.",
    },
    {
      icon: Wrench,
      title: "Always Evolving",
      description: "New techniques, new finishes, new possibilities. We stay ahead of the game.",
    },
    {
      icon: Heart,
      title: "Car Culture",
      description: "We&apos;re enthusiasts too. Your ride is in hands that actually care.",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-custom-wheels-street-style.jpg"
            alt="About Us"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <span className="text-lime-400 font-bold text-sm uppercase tracking-widest">Who We Are</span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 text-balance uppercase tracking-tight mt-2">About Us</h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto text-balance">
            We&apos;re not your typical auto shop. We&apos;re here to make your ride stand out.
          </p>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-zinc-950 border-zinc-800">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">Our Story</h2>
                <div className="space-y-4 text-zinc-400 leading-relaxed">
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
                    Our approach is simple: quality work, fair prices, and treating every car like it&apos;s our own. From full-custom builds to quick touch-ups, we bring the same energy and attention to detail.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-white text-center mb-4 uppercase tracking-tight">What We Stand For</h2>
          <p className="text-zinc-500 text-center mb-12 text-lg">Our core values drive everything we do</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800 text-center hover:border-lime-400/30 transition-colors">
                <CardContent className="p-6">
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

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black text-white text-center mb-12 uppercase tracking-tight">Why Dynamic Paint?</h2>
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

      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 text-balance uppercase tracking-tight">
            Ready to work with us?
          </h2>
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
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

      <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div>
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
                  <a href="mailto:dynamicpaintnj@gmail.com" className="hover:text-lime-400 transition-colors">
                    dynamicpaintnj@gmail.com
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

