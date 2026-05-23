import type { MetadataRoute } from "next";
import { siteConfig } from "./seo";

export const dynamic = "force-static";

const routes = [
  {
    path: "/",
    priority: 1,
  },
  {
    path: "/skills",
    priority: 0.8,
  },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route.path, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
