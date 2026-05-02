import type { ReactNode } from "react"
import { JsonLd, breadcrumbJsonLd, serviceJsonLd } from "../structured-data"
import { buildMetadata, seoRoutes } from "../seo"

export const metadata = buildMetadata(seoRoutes.bodyRepairs)

export default function BodyRepairsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={[serviceJsonLd(seoRoutes.bodyRepairs, "Auto body paint repair"), breadcrumbJsonLd(seoRoutes.bodyRepairs)]} />
      {children}
    </>
  )
}
