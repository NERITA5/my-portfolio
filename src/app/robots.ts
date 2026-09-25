import type { MetadataRoute } from "next";

const siteUrl = "https://kettynerita.dev"; // [UPDATE once the site has a real domain]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
