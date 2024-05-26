import * as React from "react";

import { getGithubStars } from "@/lib/actions/github";

import { Main } from "./_components/main";
import { MainSkeleton } from "./_components/main-skeleton";

export default function IndexPage() {
  /**
   * To avoid sequential waterfall requests, multiple promises are passed to fetch data parallelly.
   * These promises are also passed to the `Main` component, making them hot promises. This means they can execute without being awaited, further preventing sequential requests.
   * @see https://www.youtube.com/shorts/A7GGjutZxrs
   * @see https://nextjs.org/docs/app/building-your-application/data-fetching/patterns#parallel-data-fetching
   */
  const githubStarsPromise = getGithubStars();

  return (
    <React.Suspense fallback={<MainSkeleton />}>
      <Main githubStarsPromise={githubStarsPromise} />
    </React.Suspense>
  );
}
