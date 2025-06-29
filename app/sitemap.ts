import { getAllProjects } from "@/lib/strapi";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const BASE_URL = "https://www.pebblesdevries.nl";

  const projects = await getAllProjects();

  const projectPages: MetadataRoute.Sitemap = projects.data.map((project) => {
    console.log(project);
    return {
      url: `${BASE_URL}/projecten/${project.documentId}`,
      lastModified: new Date(project.updatedAt) || new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    };
  });

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/projecten`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/over-mij`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...projectPages,
  ];
}
