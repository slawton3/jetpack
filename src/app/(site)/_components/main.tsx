import Link from "next/link";

import { Icons } from "@/components/icons";
import { Shell } from "@/components/shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { type getGithubStars } from "@/lib/actions/github";

import { ContentSection } from "@/components/content-section";
import { Technologies } from "@/components/technologies";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

interface MainProps {
  githubStarsPromise: ReturnType<typeof getGithubStars>;
}

export async function Main({ githubStarsPromise }: MainProps) {
  // See the "Parallel data fetching" docs: https://nextjs.org/docs/app/building-your-application/data-fetching/patterns#parallel-data-fetching
  const githubStars = Promise.resolve(githubStarsPromise);

  return (
    <Shell className="max-w-6xl">
      <section className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-4 py-24 text-center md:py-32">
        <div
          className="flex animate-fade-up flex-col space-y-2"
          style={{ animationDelay: "0.10s", animationFillMode: "both" }}
        >
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <Badge
              aria-hidden="true"
              className="rounded-full px-3.5 py-1.5"
              variant="secondary"
            >
              <Icons.github className="mr-2 size-3.5" aria-hidden="true" />
              {githubStars} stars on GitHub
            </Badge>
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
        <h1
          className="animate-fade-up text-balance font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.20s", animationFillMode: "both" }}
        >
          Boost your productivity with{" "}
          <span className="text-primary">Jetpack</span>
        </h1>
        <p
          className="max-w-2xl animate-fade-up text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8"
          style={{ animationDelay: "0.30s", animationFillMode: "both" }}
        >
          Turbocharge your development with a modern, typesafe Next.js template
        </p>
        <div
          className="flex animate-fade-up flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "0.40s", animationFillMode: "both" }}
        >
          <Button asChild>
            <Link
              href="https://github.com/slawton3/jetpack"
              target="_blank"
              className="cursor-pointer flex items-center"
            >
              Clone now{" "}
              <ExternalLinkIcon className="ml-2 size-4" aria-hidden="true" />
              <span className="sr-only">Clone now</span>
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/demo">
              Learn more
              <span className="sr-only">Learn more</span>
            </Link>
          </Button>
        </div>
      </section>

      <ContentSection
        title="Technologies"
        description="This template comes pre-configured with the latest technologies"
        linkText="View all technologies"
        className="pt-8 md:py-10 lg:py-12"
        href="/tech"
        asChild
      >
        <Technologies />
      </ContentSection>
    </Shell>
  );
}
