import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"

export function SiteFooter() {
  return (
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
              Your one-stop shop for automotive reconditioning. Custom style or factory fresh - we make it happen.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wide mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/custom-colors" className="text-zinc-500 hover:text-lime-400 transition-colors text-sm">
                  Custom Wheel Colors
                </Link>
              </li>
              <li>
                <Link href="/wheels" className="text-zinc-500 hover:text-lime-400 transition-colors text-sm">
                  Wheel Repairs
                </Link>
              </li>
              <li>
                <Link href="/window-tint" className="text-zinc-500 hover:text-lime-400 transition-colors text-sm">
                  Window Tinting
                </Link>
              </li>
              <li>
                <Link href="/paintless-dent-repair" className="text-zinc-500 hover:text-lime-400 transition-colors text-sm">
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
                <a href="mailto:dynamicpaintnj@gmail.com" className="hover:text-lime-400 transition-colors">
                  dynamicpaintnj@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="https://www.instagram.com/dynamicpaintnj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-lime-400 transition-colors"
                >
                  <Instagram className="hidden sm:block h-4 w-4" />
                  @dynamicpaintnj
                </a>
              </p>
              <p className="text-zinc-600">Mobile services available</p>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-xs text-zinc-600">
          <p>&copy; {new Date().getFullYear()} Dynamic Paint. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
