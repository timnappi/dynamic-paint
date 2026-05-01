"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navigation } from "@/components/navigation"
import { Upload } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function QuotePage() {
  const [showOtherService, setShowOtherService] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [fileError, setFileError] = useState("")
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).slice(0, 5)
      const totalSize = filesArray.reduce((sum, file) => sum + file.size, 0)

      if (totalSize > 10 * 1024 * 1024) {
        setSelectedFiles([])
        setFileError("Photos are too large. Upload 10MB total or less, or send the form without photos and reply with images after we contact you.")
        e.target.value = ""
        return
      }

      setFileError("")
      setSelectedFiles(filesArray)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (fileError) {
      setSubmitStatus("error")
      setSubmitMessage(fileError)
      return
    }

    setSubmitStatus("sending")
    setSubmitMessage("Sending your quote request...")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formsubmit.co/ajax/dynamicpaintnj@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      const result = await response.json().catch(() => null)

      if (!response.ok || result?.success === "false" || result?.success === false) {
        throw new Error("Quote request failed")
      }

      setSubmitStatus("success")
      setSubmitMessage("Quote request sent. We'll get back to you ASAP.")
      form.reset()
      setSelectedFiles([])
      setShowOtherService(false)
      setFileError("")
    } catch {
      setSubmitStatus("error")
      setSubmitMessage("Something went wrong sending the quote. Try again, or email dynamicpaintnj@gmail.com directly.")
    }
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-lime-400 font-bold text-sm uppercase tracking-widest">Free Quote</span>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight mt-2">Get Your Quote</h1>
            <p className="text-zinc-500 text-lg">
              Fill out the form below. Upload some pics if you got &apos;em. We&apos;ll hit you back ASAP.
            </p>
          </div>

          <Card className="bg-zinc-950 border-zinc-800">
            <CardContent className="p-8">
              <form
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <input type="hidden" name="_subject" value="New Dynamic Paint Quote Request" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
                <div className="space-y-4">
                  <h2 className="text-xl font-black text-white uppercase tracking-tight">Your Info</h2>

                  <div>
                    <Label htmlFor="name" className="text-zinc-400 uppercase tracking-wide text-sm">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="bg-zinc-900 border-zinc-800 text-white placeholder-zinc-600 focus:border-lime-400 mt-2"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-zinc-400 uppercase tracking-wide text-sm">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="bg-zinc-900 border-zinc-800 text-white placeholder-zinc-600 focus:border-lime-400 mt-2"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-zinc-400 uppercase tracking-wide text-sm">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="bg-zinc-900 border-zinc-800 text-white placeholder-zinc-600 focus:border-lime-400 mt-2"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-black text-white uppercase tracking-tight">What Do You Need?</h2>

                  <div>
                    <Label className="text-zinc-400 mb-3 block uppercase tracking-wide text-sm">Select Services</Label>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Checkbox id="custom-wheels" name="services" value="Custom Wheel Colors" className="border-zinc-700 data-[state=checked]:bg-lime-400 data-[state=checked]:border-lime-400" />
                        <label htmlFor="custom-wheels" className="text-white cursor-pointer">
                          Custom Wheel Colors
                        </label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Checkbox id="wheel-repair" name="services" value="Wheel Repairs" className="border-zinc-700 data-[state=checked]:bg-lime-400 data-[state=checked]:border-lime-400" />
                        <label htmlFor="wheel-repair" className="text-white cursor-pointer">
                          Wheel Repairs
                        </label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Checkbox id="window-tint" name="services" value="Window Tinting" className="border-zinc-700 data-[state=checked]:bg-lime-400 data-[state=checked]:border-lime-400" />
                        <label htmlFor="window-tint" className="text-white cursor-pointer">
                          Window Tinting
                        </label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Checkbox id="pdr" name="services" value="Paintless Dent Repair" className="border-zinc-700 data-[state=checked]:bg-lime-400 data-[state=checked]:border-lime-400" />
                        <label htmlFor="pdr" className="text-white cursor-pointer">
                          Paintless Dent Repair
                        </label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Checkbox id="body-repair" name="services" value="Auto Body Small Repairs" className="border-zinc-700 data-[state=checked]:bg-lime-400 data-[state=checked]:border-lime-400" />
                        <label htmlFor="body-repair" className="text-white cursor-pointer">
                          Auto Body Small Repairs
                        </label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Checkbox id="mobile" name="services" value="Mobile Service" className="border-zinc-700 data-[state=checked]:bg-lime-400 data-[state=checked]:border-lime-400" />
                        <label htmlFor="mobile" className="text-white cursor-pointer">
                          Mobile Service (we come to you)
                        </label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Checkbox 
                          id="other" 
                          name="services"
                          value="Other"
                          className="border-zinc-700 data-[state=checked]:bg-lime-400 data-[state=checked]:border-lime-400"
                          onCheckedChange={(checked) => setShowOtherService(checked as boolean)} 
                        />
                        <label htmlFor="other" className="text-white cursor-pointer">
                          Other
                        </label>
                      </div>
                      {showOtherService && (
                        <Input
                          name="otherService"
                          type="text"
                          className="bg-zinc-900 border-zinc-800 text-white placeholder-zinc-600 focus:border-lime-400 mt-2"
                          placeholder="What else do you need?"
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-black text-white uppercase tracking-tight">Vehicle Details</h2>

                  <div>
                    <Label htmlFor="vehicle" className="text-zinc-400 uppercase tracking-wide text-sm">
                      Year, Make & Model
                    </Label>
                    <Input
                      id="vehicle"
                      name="vehicle"
                      type="text"
                      className="bg-zinc-900 border-zinc-800 text-white placeholder-zinc-600 focus:border-lime-400 mt-2"
                      placeholder="e.g. 2022 BMW M4"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="wheel-count" className="text-zinc-400 uppercase tracking-wide text-sm">
                        # of Wheels
                      </Label>
                        <Select name="wheelCount">
                        <SelectTrigger id="wheel-count" className="bg-zinc-900 border-zinc-800 text-white mt-2">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="4">4</SelectItem>
                          <SelectItem value="other">5+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="wheel-size" className="text-zinc-400 uppercase tracking-wide text-sm">
                        Wheel Size
                      </Label>
                        <Select name="wheelSize">
                        <SelectTrigger id="wheel-size" className="bg-zinc-900 border-zinc-800 text-white mt-2">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="17">17&quot;</SelectItem>
                          <SelectItem value="18">18&quot;</SelectItem>
                          <SelectItem value="19">19&quot;</SelectItem>
                          <SelectItem value="20">20&quot;</SelectItem>
                          <SelectItem value="21">21&quot;</SelectItem>
                          <SelectItem value="22+">22&quot;+</SelectItem>
                          <SelectItem value="idk">Not sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-black text-white uppercase tracking-tight">Upload Photos</h2>

                  <div>
                    <Label htmlFor="photos" className="text-zinc-400 uppercase tracking-wide text-sm">
                      Show us what you&apos;re working with (Max 5 photos)
                    </Label>
                    <div className="mt-2">
                      <label
                        htmlFor="photos"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-zinc-800 border-dashed cursor-pointer bg-zinc-900 hover:bg-zinc-800/50 transition-colors"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-10 h-10 mb-2 text-zinc-600" />
                          <p className="mb-2 text-sm text-zinc-500">
                            <span className="font-semibold text-lime-400">Click to upload</span> or drag files
                          </p>
                          <p className="text-xs text-zinc-600">PNG, JPG or JPEG. 10MB total max.</p>
                        </div>
                        <input
                          id="photos"
                          name="attachment"
                          type="file"
                          className="hidden"
                          multiple
                          accept="image/*"
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>
                    {selectedFiles.length > 0 && (
                      <div className="mt-2">
                        <p className="text-sm text-zinc-400">{selectedFiles.length} file(s) selected:</p>
                        <ul className="text-xs text-zinc-500 mt-1">
                          {selectedFiles.map((file, index) => (
                            <li key={index}>{file.name}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {fileError && (
                      <p className="text-sm text-red-400 mt-2">
                        {fileError}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-black text-white uppercase tracking-tight">Anything Else?</h2>

                  <div>
                    <Label htmlFor="description" className="text-zinc-400 uppercase tracking-wide text-sm">
                      Details, ideas, questions - let us know
                    </Label>
                    <Textarea
                      id="description"
                      name="description"
                      rows={4}
                      className="bg-zinc-900 border-zinc-800 text-white placeholder-zinc-600 focus:border-lime-400 mt-2 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={submitStatus === "sending"}
                  className="w-full bg-lime-400 hover:bg-lime-300 text-black font-bold text-lg py-6 uppercase tracking-wide disabled:opacity-60"
                >
                  {submitStatus === "sending" ? "Sending..." : "Send Quote Request"}
                </Button>
                {submitMessage && (
                  <p className={`text-sm text-center ${submitStatus === "success" ? "text-lime-400" : submitStatus === "error" ? "text-red-400" : "text-zinc-400"}`}>
                    {submitMessage}
                  </p>
                )}
                <p className="text-xs text-zinc-500 text-center">
                  Quote requests are sent directly to dynamicpaintnj@gmail.com. If photos are attached, total upload size must stay under 10MB.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

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

