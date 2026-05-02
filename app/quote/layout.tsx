import type { ReactNode } from "react"
import { JsonLd, breadcrumbJsonLd, pageJsonLd } from "../structured-data"
import { buildMetadata, seoRoutes } from "../seo"

export const metadata = buildMetadata(seoRoutes.quote)

export default function QuoteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={[pageJsonLd(seoRoutes.quote, "ContactPage"), breadcrumbJsonLd(seoRoutes.quote)]} />
      {children}
    </>
  )
}
