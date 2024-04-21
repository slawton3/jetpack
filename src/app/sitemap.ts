import { type MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    "",
    "/dashboard/account",
    "/dashboard/stores",
    "/dashboard/billing",
  ].map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date().toISOString(),
  }));

  // add dynamic routes here

  return [...routes];
}
