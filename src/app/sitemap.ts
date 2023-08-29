import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tranbuutai.com",
      lastModified: new Date(),
    },
  ];
}
