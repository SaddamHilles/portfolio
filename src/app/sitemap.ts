import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/work", "/about", "/contact"];
  const pages = locales.flatMap((locale) =>
    routes.map((path) => ({
      url: `${site.url}/${locale}${path}`,
      lastModified: new Date(),
    })),
  );

  const work = locales.flatMap((locale) =>
    projects.map((project) => ({
      url: `${site.url}/${locale}/work/${project.slug}`,
      lastModified: new Date(),
    })),
  );

  return [...pages, ...work];
}
