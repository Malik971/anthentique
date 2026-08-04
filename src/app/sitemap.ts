import type { MetadataRoute } from "next";
import { business } from "@/content/business";

// Export statique : le sitemap est figé au moment du build.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/carte/", "/qr-menu/", "/mentions-legales/", "/confidentialite/"];
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${business.siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "/" || route === "/carte/" ? "weekly" : "yearly",
    priority: route === "/" ? 1 : route === "/carte/" ? 0.9 : 0.3,
  }));
}
