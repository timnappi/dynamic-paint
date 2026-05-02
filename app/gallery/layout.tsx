import type { ReactNode } from "react"
import { JsonLd, breadcrumbJsonLd, pageJsonLd } from "../structured-data"
import { buildMetadata, seoRoutes } from "../seo"

export const metadata = buildMetadata(seoRoutes.gallery)

export default function GalleryLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={[pageJsonLd(seoRoutes.gallery, "ImageGallery"), breadcrumbJsonLd(seoRoutes.gallery)]} />
      {children}
    </>
  )
}
