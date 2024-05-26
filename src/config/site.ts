import type { FooterItem, MainNavItem } from "@/types";

export type SiteConfig = typeof siteConfig;

const links = {
  x: "https://twitter.com/snlwtn",
  github: "https://github.com/slawton3/ezvoice",
  githubAccount: "https://github.com/slawton3",
  calDotCom: "https://cal.com/seanlawton",
};

export const siteConfig = {
  name: "ezVoice",
  description:
    "ezVoice a custom invoice template creation platform for integrating with QuickBooks Online, Xero, and other accounting software.",
  url: "https://ezvoice.io",
  ogImage: "https://ezvoice.io/opengraph-image.png",
  links,
  mainNav: [
    {
      title: "Home",
      items: [
        {
          title: "Technology",
          href: "/tech",
          description: "All the tech used in ezVoice.",
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
          title: "ezVoice",
          href: "https://ezvoice.io",
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
        {
          title: "T3 Stack",
          href: "https://create.t3.gg/",
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
