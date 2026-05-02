import { absoluteUrl, seoRoutes, serviceItems, siteConfig, type SeoRoute } from "./seo"

const areaServed = ["Ocean County, New Jersey", "Atlantic County, New Jersey", "Monmouth County, New Jersey"]

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[]
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  )
}

export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${absoluteUrl("/")}#business`,
    name: siteConfig.name,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/dynamic-paint-logo-transparent.png"),
    image: absoluteUrl(siteConfig.ogImage),
    email: siteConfig.email,
    description: siteConfig.description,
    areaServed,
    makesOffer: serviceItems.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: absoluteUrl(service.url),
      },
    })),
  }
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${absoluteUrl("/")}#website`,
    name: siteConfig.name,
    url: absoluteUrl("/"),
    publisher: {
      "@id": `${absoluteUrl("/")}#business`,
    },
    about: serviceItems.map((service) => service.name),
  }
}

export function serviceJsonLd(route: SeoRoute, serviceType: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(route.path)}#service`,
    name: route.title,
    serviceType,
    description: route.description,
    url: absoluteUrl(route.path),
    provider: {
      "@id": `${absoluteUrl("/")}#business`,
    },
    areaServed,
    mainEntityOfPage: absoluteUrl(route.path),
  }
}

export function breadcrumbJsonLd(route: SeoRoute) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: route.title,
        item: absoluteUrl(route.path),
      },
    ],
  }
}

export function serviceCatalogJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${absoluteUrl(seoRoutes.services.path)}#services`,
    name: "Dynamic Paint Services",
    itemListElement: serviceItems.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: absoluteUrl(service.url),
        provider: {
          "@id": `${absoluteUrl("/")}#business`,
        },
      },
    })),
  }
}

export function pageJsonLd(route: SeoRoute, pageType = "WebPage") {
  return {
    "@context": "https://schema.org",
    "@type": pageType,
    "@id": `${absoluteUrl(route.path)}#webpage`,
    name: route.title,
    description: route.description,
    url: absoluteUrl(route.path),
    isPartOf: {
      "@id": `${absoluteUrl("/")}#website`,
    },
    publisher: {
      "@id": `${absoluteUrl("/")}#business`,
    },
  }
}
