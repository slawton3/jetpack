import type { FooterItem, MainNavItem } from "@/types";

export type SiteConfig = typeof siteConfig;

const links = {
  x: "https://twitter.com/snlwtn",
  github: "https://github.com/slawton3/jetpack",
  githubAccount: "https://github.com/slawton3",
  calDotCom: "https://cal.com/seanlawton",
};

export const siteConfig = {
  name: "Jetpack",
  description:
    "Jetpack is an open source Next.js 14 starter template configured for Bun, Shadcn, Supabase and Drizzle including Docker, Clerk, TypeScript, ESLint, Prettier, and more.",
  url: "https://tryjetpack.dev",
  ogImage: "https://tryjetpack.dev/opengraph-image.png",
  links,
  mainNav: [
    {
      title: "Home",
      items: [
        {
          title: "Technology",
          href: "/tech",
          description: "All the tech used in Jetpack.",
          items: [],
        },
        {
          title: "Demo (Coming soon)",
          href: "/#",
          description: "Check out the demo.",
          items: [],
        },
        {
          title: "Blog (Coming soon)",
          href: "/#",
          description: "Read our latest blog posts.",
          items: [],
        },
      ],
    },
  ] satisfies MainNavItem[],
  footerNav: [
    {
      title: "Credits",
      items: [
        {
          title: "Jetpack",
          href: "https://tryjetpack.dev",
          external: true,
        },
        {
          title: "Taxonomy",
          href: "https://tx.shadcn.com/",
          external: true,
        },
        {
          title: "shadcn/ui",
          href: "https://ui.shadcn.com",
          external: true,
        },
      ],
    },
    {
      title: "Our Company",
      items: [
        {
          title: "About",
          href: "/#",
          external: false,
        },
        {
          title: "Contact",
          href: "/#",
          external: false,
        },
        {
          title: "Terms",
          href: "/#",
          external: false,
        },
        {
          title: "Privacy",
          href: "/#",
          external: false,
        },
      ],
    },
    {
      title: "Social",
      items: [
        {
          title: "X",
          href: links.x,
          external: true,
        },
        {
          title: "GitHub",
          href: links.githubAccount,
          external: true,
        },
        {
          title: "cal.com",
          href: links.calDotCom,
          external: true,
        },
      ],
    },
  ] satisfies FooterItem[],
};
