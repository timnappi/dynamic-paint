import type { ReactNode } from "react"
import { JsonLd, breadcrumbJsonLd, serviceJsonLd } from "../structured-data"
import { buildMetadata, seoRoutes } from "../seo"

export const metadata = buildMetadata(seoRoutes.customColors)

export default function CustomColorsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={[serviceJsonLd(seoRoutes.customColors, "Custom wheel painting"), breadcrumbJsonLd(seoRoutes.customColors)]} />
      {children}
    </>
  )
}
