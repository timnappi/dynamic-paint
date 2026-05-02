"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-sm shadow-lg shadow-lime-400/5" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2 group relative">
            <div className="absolute inset-0 bg-lime-400/10 blur-lg group-hover:bg-lime-400/20 transition-all duration-300" />
            <Image
              src="/dynamic-paint-logo-transparent.png"
              alt="Dynamic Paint Logo"
              width={580}
              height={371}
              className="group-hover:scale-105 transition-transform h-12 sm:h-14 md:h-16 w-auto object-contain drop-shadow-lg group-hover:drop-shadow-xl group-hover:drop-shadow-[0_0_20px_rgba(172,255,76,0.4)]"
              priority
              unoptimized
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/services" className="text-zinc-400 hover:text-lime-400 transition-colors font-medium uppercase text-sm tracking-wide">
              Services
            </Link>
            <Link href="/gallery" className="text-zinc-400 hover:text-lime-400 transition-colors font-medium uppercase text-sm tracking-wide">
              Gallery
            </Link>
            <Link href="/about" className="text-zinc-400 hover:text-lime-400 transition-colors font-medium uppercase text-sm tracking-wide">
              About
            </Link>
            <Link href="/contact" className="text-zinc-400 hover:text-lime-400 transition-colors font-medium uppercase text-sm tracking-wide">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button asChild className="hidden sm:inline-flex bg-lime-400 hover:bg-lime-300 text-black font-bold uppercase tracking-wide">
              <Link href="/quote">Get a Quote</Link>
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-zinc-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm md:hidden" onClick={closeMobileMenu} />
      )}

      <div
        className={`fixed top-16 sm:top-20 right-0 bottom-0 w-[min(20rem,85vw)] bg-zinc-950 border-l border-zinc-800 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-5 sm:p-6 gap-5 sm:gap-6">
          <Link
            href="/services"
            className="text-zinc-400 hover:text-lime-400 transition-colors text-lg font-medium uppercase tracking-wide"
            onClick={closeMobileMenu}
          >
            Services
          </Link>
          <Link
            href="/gallery"
            className="text-zinc-400 hover:text-lime-400 transition-colors text-lg font-medium uppercase tracking-wide"
            onClick={closeMobileMenu}
          >
            Gallery
          </Link>
          <Link
            href="/about"
            className="text-zinc-400 hover:text-lime-400 transition-colors text-lg font-medium uppercase tracking-wide"
            onClick={closeMobileMenu}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-zinc-400 hover:text-lime-400 transition-colors text-lg font-medium uppercase tracking-wide"
            onClick={closeMobileMenu}
          >
            Contact
          </Link>

          <div className="border-t border-zinc-800 pt-6">
            <Button asChild className="w-full bg-lime-400 hover:bg-lime-300 text-black font-bold uppercase tracking-wide">
              <Link href="/quote" onClick={closeMobileMenu}>
                Get a Quote
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
