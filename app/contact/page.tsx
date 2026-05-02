import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { Mail, Clock, Phone, Truck, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { JsonLd, breadcrumbJsonLd, pageJsonLd } from "../structured-data"
import { buildMetadata, seoRoutes } from "../seo"

export const metadata = buildMetadata(seoRoutes.contact)

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <JsonLd data={[pageJsonLd(seoRoutes.contact, "ContactPage"), breadcrumbJsonLd(seoRoutes.contact)]} />
      <Navigation />

      <section className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/mobile-wheel-repair.jpg"
            alt="Mobile wheel repair service vehicle setup"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <span className="text-lime-400 font-bold text-sm uppercase tracking-widest">Get In Touch</span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-5 sm:mb-6 text-balance uppercase tracking-tight mt-2">Contact</h1>
          <p className="text-base sm:text-xl text-zinc-400 max-w-3xl mx-auto text-balance">
            Questions? Ready to book? Hit us up. We&apos;re here to help.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              <Card className="bg-zinc-950 border-zinc-800 hover:border-lime-400/30 transition-colors">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-lime-400/10 w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-lime-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">Email</h3>
                      <a
                        href="mailto:dynamicpaintnj@gmail.com"
                        className="text-zinc-400 hover:text-lime-400 transition-colors"
                      >
                        dynamicpaintnj@gmail.com
                      </a>
                      <p className="text-zinc-600 text-sm mt-1">We respond within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-950 border-zinc-800 hover:border-lime-400/30 transition-colors">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-lime-400/10 w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-lime-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">Phone</h3>
                      <p className="text-zinc-400">
                        Call or text for quick responses
                      </p>
                      <p className="text-zinc-600 text-sm mt-1">Best way to get a fast quote</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-950 border-zinc-800 hover:border-lime-400/30 transition-colors">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-lime-400/10 w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Instagram className="w-6 h-6 text-lime-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">Instagram</h3>
                      <a
                        href="https://www.instagram.com/dynamicpaintnj/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-lime-400 transition-colors"
                      >
                        @dynamicpaintnj
                      </a>
                      <p className="text-zinc-600 text-sm mt-1">See recent work and project updates</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-950 border-zinc-800 hover:border-lime-400/30 transition-colors">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-lime-400/10 w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-lime-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">Hours</h3>
                      <div className="text-zinc-400 space-y-1">
                        <p>Monday - Friday: 8am - 6pm</p>
                        <p>Saturday: 9am - 4pm</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-950 border-zinc-800 hover:border-lime-400/30 transition-colors">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-lime-400/10 w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Truck className="w-6 h-6 text-lime-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">Mobile Service</h3>
                      <p className="text-zinc-400">
                        We come to you! Mobile wheel and bumper repair available at your home or workplace.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button asChild size="lg" className="w-full bg-lime-400 hover:bg-lime-300 text-black font-bold uppercase tracking-wide">
                <Link href="/quote">Get a Quote Now</Link>
              </Button>
            </div>

            <div className="lg:sticky lg:top-24 h-fit">
              <Card className="bg-zinc-950 border-zinc-800">
                <CardContent className="p-5 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-black text-white mb-6 uppercase tracking-tight">Send a Message</h2>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2 uppercase tracking-wide">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 focus:border-lime-400 focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2 uppercase tracking-wide">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 focus:border-lime-400 focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-zinc-400 mb-2 uppercase tracking-wide">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-white focus:border-lime-400 focus:outline-none transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="wheels">Custom Wheel Colors</option>
                        <option value="repair">Wheel Repairs</option>
                        <option value="tint">Window Tinting</option>
                        <option value="pdr">Paintless Dent Repair</option>
                        <option value="body">Auto Body Repairs</option>
                        <option value="mobile">Mobile Service</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2 uppercase tracking-wide">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 focus:border-lime-400 focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    <Button type="submit" className="w-full bg-lime-400 hover:bg-lime-300 text-black font-bold uppercase tracking-wide">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 uppercase tracking-tight">Service Area</h2>
            <p className="text-zinc-400 mb-8">
              Dynamic Paint is based in New Jersey and services Ocean County, Atlantic County, and Monmouth County. For in-shop work, contact us for our current location. We&apos;re flexible and happy to work with your schedule.
            </p>
            <div className="bg-zinc-900 border border-zinc-800 p-6 sm:p-8">
              <div className="mb-5 flex flex-wrap justify-center gap-3">
                {["Ocean County, NJ", "Atlantic County, NJ", "Monmouth County, NJ"].map((county) => (
                  <span key={county} className="border border-lime-400/25 bg-lime-400/10 px-3 py-2 text-xs font-bold uppercase tracking-wide text-lime-300">
                    {county}
                  </span>
                ))}
              </div>
              <p className="text-zinc-500 text-lg">
                Mobile service is available for wheel repairs and bumper touch-ups across our New Jersey service area.
              </p>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}

