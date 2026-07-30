import type { MetadataRoute } from "next";
import { business } from "@/content/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/carte", "/qr-menu", "/mentions-legales", "/confidentialite"];
  return routes.map((route) => ({ url: `${business.siteUrl}${route}`, lastModified: new Date(), changeFrequency: route === "" || route === "/carte" ? "weekly" : "yearly", priority: route === "" ? 1 : route === "/carte" ? 0.9 : 0.3 }));
}
