import { Icons } from "@/components/icons";

type Technology = {
  id: string;
  name: string;
  icon: keyof typeof Icons;
  description: string;
};

const technologies: Technology[] = [
  {
    id: "nextjs",
    name: "Next.js",
    icon: "nextjs",
    description:
      "Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.",
  },
  {
    id: "bun",
    name: "Bun",
    icon: "bun",
    description:
      "Develop, test, run, and bundle JavaScript & TypeScript projects—all with Bun. Bun is an all-in-one JavaScript runtime & toolkit designed for speed, complete with a bundler, test runner, and Node.js-compatible package manager.",
  },
  {
    id: "shadcn-ui",
    name: "Shadcn-ui",
    icon: "shadcn",
    description:
      "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
  },
  {
    id: "drizzle",
    name: "Drizzle",
    icon: "drizzle",
    description: "TypeScript ORM that is production ready",
  },
  {
    id: "supabase",
    name: "Supabase",
    icon: "supabase",
    description:
      "Supabase is an open source Firebase alternative. Start your project with a Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, Storage, and Vector embeddings.",
  },
  {
    id: "clerk",
    name: "Clerk",
    icon: "clerk",
    description:
      "Need more than just a sign-in box? Clerk is a complete suite of embeddable UIs, flexible APIs, and admin dashboards to authenticate and manage your users.",
  },
  {
    id: "resend",
    name: "Resend",
    icon: "resend",
    description: "Resend is the email API for developers.",
  },
  {
    id: "docker",
    name: "Docker",
    icon: "docker",
    description:
      "Docker helps developers build, share, run, and verify applications anywhere — without tedious environment configuration or management.",
  },
];

export { technologies };
export type { Technology };
