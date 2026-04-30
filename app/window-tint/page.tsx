import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { CheckCircle, Droplets, Shield, Sun, ThermometerSun, Wrench } from "lucide-react"

export default function WindowTintPage() {
  const benefits = [
    {
      icon: Sun,
      title: "Glare Control",
      description: "Cuts harsh sunlight so the cabin feels calmer and easier to drive in."
    },
    {
      icon: ThermometerSun,
      title: "Heat Rejection",
      description: "Quality film helps reduce interior heat and keeps the car more comfortable."
    },
    {
      icon: Shield,
      title: "UV Protection",
      description: "Tint film helps block UV exposure that can fade interiors and wear on passengers."
    },
  ]

  const processSteps = [
    {
      title: "Film & Shade Selection",
      description: "We help pick the right shade and film style for the look, comfort, and legal visibility you want."
    },
    {
      title: "Deep Glass Prep",
      description: "Every window is cleaned, scraped, and checked so dust, oils, and residue do not get trapped under the film."
    },
    {
      title: "Pattern & Heat Form",
      description: "The film is shaped to the glass, then heat-formed where needed so it lays smooth on curved windows."
    },
    {
      title: "Wet Install & Squeegee",
      description: "Film is applied with slip solution, positioned cleanly, and squeegeed tight to push out water and air."
    },
    {
      title: "Edges, Dry Time & Final Check",
      description: "Edges are inspected, the glass is wiped down, and we walk you through cure time so the finish settles correctly."
    },
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/window-tint-dynamic-paint.png"
            alt="Window tint on black vehicle"
            fill
            className="object-cover opacity-45"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-lime-950/20" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <span className="text-lime-400 font-bold text-sm uppercase tracking-widest">Privacy + Protection</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mt-3 mb-6 uppercase tracking-tight leading-none">
              Window Tinting
            </h1>
            <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl mb-8">
              Clean, professional tint work for a darker look, cooler cabin, better privacy, and a more finished ride.
            </p>
            <Button asChild size="lg" className="bg-lime-400 hover:bg-lime-300 text-black font-bold uppercase tracking-wide">
              <Link href="/quote">Get Tint Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center max-w-6xl mx-auto">
            <div>
              <span className="text-lime-400 font-bold text-sm uppercase tracking-widest">What You Get</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-6 uppercase tracking-tight">
                Cooler, Cleaner, Sharper
              </h2>
              <p className="text-zinc-400 mb-6">
                Window tint is not just about going darker. A good install improves comfort, reduces glare, protects the interior, and gives the vehicle a cleaner custom look.
              </p>
              <p className="text-zinc-400">
                We focus on clean prep, careful film handling, tight edges, and a final finish that looks like it belongs on the car.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-black border border-zinc-800 p-5">
                  <div className="w-12 h-12 bg-lime-400/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-lime-400" />
                  </div>
                  <h3 className="text-white font-bold uppercase tracking-tight mb-2">{benefit.title}</h3>
                  <p className="text-zinc-500 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/window-tint-tools.png"
                alt="Window tint tools"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
            </div>
            <div>
              <span className="text-lime-400 font-bold text-sm uppercase tracking-widest">The Setup</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-6 uppercase tracking-tight">
                Prep Makes The Finish
              </h2>
              <p className="text-zinc-400 mb-6">
                The best tint jobs start before film ever touches glass. The windows are cleaned thoroughly, contamination is removed, and the film is handled carefully so the final result looks smooth and professional.
              </p>
              <div className="space-y-3">
                {["Clean glass and seals", "Protect interior panels", "Use proper slip solution", "Inspect edges and finish"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle className="w-5 h-5 text-lime-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-lime-400 font-bold text-sm uppercase tracking-widest">Install Process</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 uppercase tracking-tight">
                How We Do It
              </h2>
            </div>
            <div className="grid md:grid-cols-5 gap-4">
              {processSteps.map((step, index) => (
                <div key={index} className="bg-black border border-zinc-800 p-5 hover:border-lime-400/50 transition-colors">
                  <div className="text-lime-400 font-black text-3xl mb-4">{String(index + 1).padStart(2, "0")}</div>
                  <h3 className="text-white font-bold uppercase tracking-tight mb-3">{step.title}</h3>
                  <p className="text-zinc-500 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <span className="text-lime-400 font-bold text-sm uppercase tracking-widest">Clean Install</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-6 uppercase tracking-tight">
                Smooth Film, Sharp Edges
              </h2>
              <p className="text-zinc-400 mb-6">
                Tint film needs time to settle after installation. Small haze or moisture pockets can be normal during curing, then clear up as the film dries. We explain what to expect before you leave.
              </p>
              <Button asChild className="bg-lime-400 hover:bg-lime-300 text-black font-bold uppercase tracking-wide">
                <Link href="/quote">Book Window Tint</Link>
              </Button>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/window-tint-install.png"
                alt="Window tint film installation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 border-2 border-lime-400/20" />
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-zinc-950 border-t border-zinc-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Image
              src="/dynamic-paint-logo-transparent.png"
              alt="Dynamic Paint Logo"
              width={500}
              height={250}
              className="h-16 w-auto"
              unoptimized
            />
            <p className="text-zinc-600 text-sm">
              &copy; {new Date().getFullYear()} Dynamic Paint. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
