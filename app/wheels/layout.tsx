import type { ReactNode } from "react"
import { JsonLd, breadcrumbJsonLd, serviceJsonLd } from "../structured-data"
import { buildMetadata, seoRoutes } from "../seo"

export const metadata = buildMetadata(seoRoutes.wheels)

export default function WheelsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={[serviceJsonLd(seoRoutes.wheels, "Wheel repair and restoration"), breadcrumbJsonLd(seoRoutes.wheels)]} />
      {children}
    </>
  )
}
