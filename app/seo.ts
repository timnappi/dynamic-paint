import type { Metadata } from "next"

export const siteConfig = {
  name: "Dynamic Paint",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://dynamicpaintnj.com",
  email: "dynamicpaintnj@gmail.com",
  description:
    "New Jersey custom wheel colors, wheel repair, auto body paint repair, window tinting, paintless dent repair, and mobile automotive reconditioning for Ocean, Atlantic, and Monmouth County.",
  ogImage: "/og-dynamic-paint-preview.png",
}

export type SeoRoute = {
  path: string
  title: string
  description: string
  keywords: string[]
  image?: string
}

export const seoRoutes = {
  home: {
    path: "/",
    title: "Custom Wheels, Repairs & Auto Reconditioning",
    description:
      "Dynamic Paint handles custom wheel colors, wheel repairs, window tinting, paintless dent repair, light auto body paint repair, and mobile reconditioning in New Jersey.",
    keywords: [
      "New Jersey auto reconditioning",
      "Ocean County wheel repair",
      "Atlantic County wheel repair",
      "Monmouth County wheel repair",
      "custom wheel colors",
      "wheel repair",
      "auto reconditioning",
      "window tinting",
      "paintless dent repair",
      "mobile wheel repair",
    ],
    image: "/og-dynamic-paint-preview.png",
  },
  services: {
    path: "/services",
    title: "Auto Reconditioning Services",
    description:
      "Explore New Jersey auto reconditioning services including custom wheel colors, wheel restoration, light auto body repair, paint correction, tint, PDR, and mobile service.",
    keywords: [
      "Ocean County auto reconditioning",
      "Atlantic County auto reconditioning",
      "Monmouth County auto reconditioning",
      "auto reconditioning services",
      "custom wheel paint",
      "wheel restoration",
      "paint correction",
      "bumper repair",
      "mobile auto repair",
    ],
    image: "/og-dynamic-paint-preview.png",
  },
  wheels: {
    path: "/wheels",
    title: "Wheel Repair & Restoration",
    description:
      "Repair curb rash, scratches, scuffs, faded clear coat, and damaged wheels with OEM color matching, refinishing, and custom color options.",
    keywords: [
      "New Jersey wheel repair",
      "Ocean County wheel repair",
      "Atlantic County wheel repair",
      "Monmouth County wheel repair",
      "wheel repair",
      "curb rash repair",
      "wheel restoration",
      "rim repair",
      "OEM wheel color matching",
      "mobile wheel repair",
    ],
    image: "/wheel-repair-before-after.jpg",
  },
  customColors: {
    path: "/custom-colors",
    title: "Custom Wheel Colors",
    description:
      "Custom painted wheels with gloss, matte, metallic, candy, two-tone, barrel paint, chrome-delete, and color-matched finishes.",
    keywords: [
      "New Jersey custom wheel colors",
      "Ocean County custom wheels",
      "Atlantic County custom wheels",
      "Monmouth County custom wheels",
      "custom wheel colors",
      "custom painted wheels",
      "wheel color change",
      "gloss black wheels",
      "matte wheel finish",
      "two tone wheels",
    ],
    image: "/custom-wheel-colors.jpg",
  },
  bodyRepairs: {
    path: "/body-repairs",
    title: "Auto Body Paint Repair",
    description:
      "Light auto body paint repair for bumper damage, fenders, quarter panels, minor collision repair, OEM color matching, prep, prime, paint, and blending.",
    keywords: [
      "New Jersey auto body paint repair",
      "Ocean County bumper paint repair",
      "Atlantic County bumper paint repair",
      "Monmouth County bumper paint repair",
      "auto body paint repair",
      "bumper paint repair",
      "fender repair",
      "minor collision repair",
      "OEM color matching",
      "panel blending",
    ],
    image: "/auto-body-paint-repair.jpg",
  },
  windowTint: {
    path: "/window-tint",
    title: "Window Tinting",
    description:
      "Professional window tinting for a cleaner look, cooler cabin, glare control, privacy, UV protection, and careful film installation.",
    keywords: [
      "New Jersey window tinting",
      "Ocean County window tinting",
      "Atlantic County window tinting",
      "Monmouth County window tinting",
      "window tinting",
      "car window tint",
      "automotive tint",
      "UV protection tint",
      "heat rejection tint",
      "privacy window tint",
    ],
    image: "/window-tint-dynamic-paint.png",
  },
  paintlessDentRepair: {
    path: "/paintless-dent-repair",
    title: "Paintless Dent Repair",
    description:
      "Paintless dent repair removes minor dents and dings while preserving factory paint, avoiding filler, repainting, and traditional body work.",
    keywords: [
      "New Jersey paintless dent repair",
      "Ocean County PDR",
      "Atlantic County PDR",
      "Monmouth County PDR",
      "paintless dent repair",
      "door ding repair",
      "hail damage repair",
      "factory paint dent repair",
      "dent repair without paint",
      "no body filler dent repair",
    ],
    image: "/paintless-dent-repair-suv.png",
  },
  gallery: {
    path: "/gallery",
    title: "Project Gallery",
    description:
      "See Dynamic Paint project photos including custom wheel finishes, wheel repair, body paint work, window tint, and automotive reconditioning results.",
    keywords: [
      "custom wheel gallery",
      "wheel repair before and after",
      "auto paint gallery",
      "window tint gallery",
      "automotive reconditioning photos",
    ],
    image: "/gallery/all-projects-blue-mustang.jpg",
  },
  about: {
    path: "/about",
    title: "About Dynamic Paint",
    description:
      "Learn about Dynamic Paint's approach to wheel repairs, custom finishes, tinting, paint correction, light body work, and mobile automotive service.",
    keywords: [
      "about Dynamic Paint",
      "automotive reconditioning shop",
      "custom wheel specialists",
      "mobile automotive service",
    ],
    image: "/hero-custom-wheels-street-style.jpg",
  },
  contact: {
    path: "/contact",
    title: "Contact Dynamic Paint",
    description:
      "Contact Dynamic Paint for quotes, questions, service area checks, mobile wheel repair, bumper touch-ups, tinting, and auto reconditioning work.",
    keywords: [
      "contact Dynamic Paint",
      "auto reconditioning quote",
      "wheel repair quote",
      "mobile wheel repair service area",
    ],
    image: "/mobile-wheel-repair.jpg",
  },
  quote: {
    path: "/quote",
    title: "Get an Auto Reconditioning Quote",
    description:
      "Request a free quote for custom wheel colors, wheel repair, window tint, paintless dent repair, body paint repair, paint correction, or mobile service.",
    keywords: [
      "auto reconditioning quote",
      "custom wheel quote",
      "wheel repair estimate",
      "window tint quote",
      "paint repair quote",
    ],
    image: "/wheel-services-overview.png",
  },
} satisfies Record<string, SeoRoute>

export const sitemapRoutes = Object.values(seoRoutes)

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString()
}

export function buildMetadata(route: SeoRoute): Metadata {
  const image = route.image || siteConfig.ogImage
  const title = route.path === "/" ? `${siteConfig.name} | ${route.title}` : route.title

  return {
    title,
    description: route.description,
    keywords: route.keywords,
    alternates: {
      canonical: route.path,
    },
    openGraph: {
      title: route.path === "/" ? title : `${route.title} | ${siteConfig.name}`,
      description: route.description,
      url: route.path,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - ${route.title}`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: route.path === "/" ? title : `${route.title} | ${siteConfig.name}`,
      description: route.description,
      images: [image],
    },
  }
}

export const serviceItems = [
  { name: "Custom Wheel Colors", url: "/custom-colors", description: seoRoutes.customColors.description },
  { name: "Wheel Repair & Restoration", url: "/wheels", description: seoRoutes.wheels.description },
  { name: "Auto Body Paint Repair", url: "/body-repairs", description: seoRoutes.bodyRepairs.description },
  { name: "Window Tinting", url: "/window-tint", description: seoRoutes.windowTint.description },
  {
    name: "Paintless Dent Repair",
    url: "/paintless-dent-repair",
    description: "Paintless dent repair for dents and dings without repainting or disturbing the original finish.",
  },
  {
    name: "Mobile Automotive Service",
    url: "/services",
    description: "Mobile wheel and bumper repair available at home or work, depending on the service area.",
  },
]
