import type { MetadataRoute } from "next";
import { business } from "@/content/business";

// Export statique : robots.txt est généré au moment du build.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${business.siteUrl}/sitemap.xml`,
    host: business.siteUrl,
  };
}
