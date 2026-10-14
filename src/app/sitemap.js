const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const routes = [
  "",
  "/work/metamorphosis",
  "/work/financial-data-automation",
  "/work/football-talent",
  "/work/my-sports",
];

export default function sitemap() {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
  }));
}
