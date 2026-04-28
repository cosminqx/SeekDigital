import type { MetadataRoute } from "next";

const baseUrl = "https://devbysilviu.ro";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/servicii",
    "/pachete",
    "/portofoliu",
    "/despre",
    "/contact",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
