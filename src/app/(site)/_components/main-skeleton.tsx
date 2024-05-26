import Link from "next/link";

import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import { TechnologyCardSkeleton } from "./technology-card-skeleton";

export function MainSkeleton() {
  return (
    <Shell className="max-w-6xl">
      <section className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-4 py-24 text-center md:py-32">
        <Skeleton className="h-7 w-44" />
        <Skeleton className="h-7 w-44" />
        <h1 className="text-balance font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          Boost your productivity with{" "}
          <span className="text-primary">ezVoice</span>
        </h1>
        <p className="max-w-2xl text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Turbocharge your development with a modern, typesafe Next.js template
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild>
            <Link href="/products">
              Clone now
              <span className="sr-only">Buy now</span>
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/dashboard/stores">
              Learn more
              <span className="sr-only">Sell now</span>
            </Link>
          </Button>
        </div>
      </section>
      <section className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <TechnologyCardSkeleton key={i} />
        ))}
      </section>
    </Shell>
  );
}
