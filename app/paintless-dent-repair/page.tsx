import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { CheckCircle, CircleDot, Factory, Paintbrush, ShieldCheck, Sparkles, Wrench } from "lucide-react"
import { JsonLd, breadcrumbJsonLd, serviceJsonLd } from "../structured-data"
import { buildMetadata, seoRoutes } from "../seo"

export const metadata = buildMetadata(seoRoutes.paintlessDentRepair)

export default function PaintlessDentRepairPage() {
  const benefits = [
    {
      icon: Factory,
      title: "Keeps Factory Paint",
      description: "PDR repairs the dent from behind the panel without sanding, filler, primer, or repainting.",
    },
    {
      icon: ShieldCheck,
      title: "No Paint Damage",
      description: "When the paint is still intact, PDR helps preserve the original finish your vehicle came with.",
    },
    {
      icon: Sparkles,
      title: "Brand-New Look",
      description: "Door dings and small dents can be worked back smooth so the panel looks clean again.",
    },
  ]

  const comparison = [
    "No body filler",
    "No repainting",
    "No blending adjacent panels",
    "No color-match risk",
    "Keeps the original factory finish",
    "Often faster than traditional body repair",
  ]

  const processSteps = [
    {
      icon: CircleDot,
      title: "Inspect The Dent",
      description: "We check the size, depth, paint condition, and access behind the panel to make sure PDR is the right repair.",
    },
    {
      icon: Wrench,
      title: "Access The Panel",
      description: "Using specialized tools, we reach behind the dent through safe access points where possible.",
    },
    {
      icon: CheckCircle,
      title: "Work It Back",
      description: "The metal is slowly massaged back into shape with controlled pressure until the surface is smooth again.",
    },
  ]

  return (
    <main className="min-h-screen bg-black">
      <JsonLd data={[serviceJsonLd(seoRoutes.paintlessDentRepair, "Paintless dent repair"), breadcrumbJsonLd(seoRoutes.paintlessDentRepair)]} />
      <Navigation />

      <section className="relative pt-24 sm:pt-40 pb-14 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/paintless-dent-repair-suv.png"
            alt="Paintless dent repair on a vehicle panel"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-lime-950/20" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <span className="text-lime-400 font-bold text-sm uppercase tracking-widest">Factory Paint Dent Repair</span>
            <h1 className="text-3xl min-[390px]:text-4xl sm:text-5xl md:text-7xl font-black text-white mt-3 mb-5 sm:mb-6 uppercase tracking-tight leading-none">
              Paintless Dent Repair
            </h1>
            <p className="text-zinc-400 text-base sm:text-xl max-w-2xl mb-8">
              PDR removes small dents and door dings without damaging your factory paint. No filler, no repaint, no body work when the paint is still intact.
            </p>
            <Button asChild size="lg" className="bg-lime-400 hover:bg-lime-300 text-black font-bold uppercase tracking-wide">
              <Link href="/quote?service=paintless-dent-repair">Get PDR Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-10 items-center max-w-6xl mx-auto">
            <div>
              <span className="text-lime-400 font-bold text-sm uppercase tracking-widest">What Is PDR?</span>
              <h2 className="text-2xl sm:text-4xl font-black text-white mt-2 mb-5 sm:mb-6 uppercase tracking-tight">
                Dent Repair Without Repainting
              </h2>
              <p className="text-zinc-400 mb-6">
                Paintless Dent Repair is a specialized method for removing dents by carefully working the metal back into shape from behind the panel.
              </p>
              <p className="text-zinc-400">
                If the paint is not cracked, chipped, or stretched too far, PDR can restore the shape of the panel while keeping your original factory paint untouched.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="bg-black border border-zinc-800 p-5">
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

      <section className="py-12 sm:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/paintless-dent-repair.jpg"
                alt="Paintless dent repair panel work"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div>
              <span className="text-lime-400 font-bold text-sm uppercase tracking-widest">Why It Is Better</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-6 uppercase tracking-tight">
                Preserve What Came From The Factory
              </h2>
              <p className="text-zinc-400 mb-6">
                Traditional dent repair usually means sanding the damaged area, adding body filler, priming, repainting, and blending. That can be necessary for damaged paint or severe dents, but it is more invasive.
              </p>
              <p className="text-zinc-400 mb-8">
                PDR is the cleaner option when the damage qualifies. It keeps the original paint, avoids unnecessary body work, and helps the vehicle look brand new without disturbing the factory finish.
              </p>
              <div className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-3">
                {comparison.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle className="w-5 h-5 text-lime-400 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-lime-400 font-bold text-sm uppercase tracking-widest">The Process</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 uppercase tracking-tight">
                How PDR Works
              </h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
              {processSteps.map((step) => (
                <div key={step.title} className="bg-black border border-zinc-800 p-6 hover:border-lime-400/50 transition-colors">
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

      <section className="py-12 sm:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <Paintbrush className="mx-auto mb-5 h-10 w-10 text-lime-400" />
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 uppercase tracking-tight">
              Keep The Paint. Lose The Dent.
            </h2>
            <p className="text-zinc-400 mb-8">
              Send a photo of the dent and we will let you know if PDR is the right move for your vehicle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-lime-400 hover:bg-lime-300 text-black font-bold uppercase tracking-wide">
                <Link href="/quote?service=paintless-dent-repair">Get PDR Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-zinc-700 text-white hover:bg-zinc-900 bg-transparent hover:border-lime-400 transition-all uppercase tracking-wide font-bold">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
