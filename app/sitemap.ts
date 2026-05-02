import type { MetadataRoute } from "next"
import { absoluteUrl, sitemapRoutes } from "./seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return sitemapRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.path === "/" ? "weekly" : "monthly",
    priority: route.path === "/" ? 1 : route.path === "/quote" ? 0.9 : 0.8,
  }))
}
