import type { MetadataRoute } from "next";

const SITE_URL = "https://otito.site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/privacy", "/refund", "/terms"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
