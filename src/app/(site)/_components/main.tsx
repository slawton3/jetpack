import { Shell } from "@/components/shell";

import SignupForm from "./signup-form";

export async function Main() {
  return (
    <Shell className="max-w-6xl">
      <section className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-8 py-24 text-center md:py-32">
        <h1
          className="animate-fade-up text-balance font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.20s", animationFillMode: "both" }}
        >
          Professional Invoices <br />
          Made <span className="text-primary">Simple</span>
        </h1>
        <p
          className="max-w-2xl animate-fade-up text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8"
          style={{ animationDelay: "0.30s", animationFillMode: "both" }}
        >
          Create custom invoice templates for QuickBooks Online, Xero, and more
        </p>
        <div
          className="flex flex-col animate-fade-up flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "0.40s", animationFillMode: "both" }}
        >
          <p className="text-foreground">
            Sign up for early access to our beta!
          </p>
          <SignupForm />
        </div>
      </section>

      {/* <ContentSection
        title="Technologies"
        description="This template comes pre-configured with the latest technologies"
        linkText="View all technologies"
        className="pt-8 md:py-10 lg:py-12"
        href="/tech"
        asChild
      >
        <Technologies />
      </ContentSection> */}
    </Shell>
  );
}
