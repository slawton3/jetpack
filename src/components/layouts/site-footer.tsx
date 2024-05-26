// import { EnvelopeClosedIcon, MobileIcon } from "@radix-ui/react-icons";
// import Link from "next/link";

import { Icons } from "../icons";

// import { JoinNewsletterForm } from "@/components/forms/join-newsletter-form";
// import { Icons } from "@/components/icons";
// import { ThemeToggle } from "@/components/layouts/theme-toggle";
// import { Shell } from "@/components/shell";
// import { buttonVariants } from "@/components/ui/button";
// import { siteConfig } from "@/config/site";
// import { cn } from "@/lib/utils";

// export function SiteFooter() {
//   return (
//     <footer className="w-full border-t bg-background">
//       <Shell as="div">
//         <section
//           id="footer-content"
//           aria-labelledby="footer-content-heading"
//           className="flex flex-col gap-10 lg:flex-row lg:gap-20"
//         >
//           <section
//             id="footer-branding"
//             aria-labelledby="footer-branding-heading"
//             className="flex flex-col gap-3"
//           >
//             <Link href="/" className="flex w-fit items-center space-x-2 pb-3">
//               <Icons.logo className="size-8" aria-hidden="true" />
//               <span className="font-bold">{siteConfig.name}</span>
//               <span className="sr-only">Home</span>
//             </Link>
//             <p className="text-xs text-muted-foreground">1234 N Startup Rd</p>

//             <Link
//               href="mailto:sean@ledgerbox.io"
//               className="inline-flex text-muted-foreground"
//             >
//               <EnvelopeClosedIcon className="mr-2" />{" "}
//               <p className="text-xs">info@mystartup.io</p>
//             </Link>
//             <Link
//               href="tel:2627017134"
//               className="inline-flex text-muted-foreground"
//             >
//               <MobileIcon className="mr-2" />{" "}
//               <p className="text-xs">(262) 222-2222</p>
//             </Link>
//           </section>
//           <section
//             id="footer-links"
//             aria-labelledby="footer-links-heading"
//             className="grid flex-1 grid-cols-1 gap-10 xxs:grid-cols-2 sm:grid-cols-3 xl:pl-20"
//           >
//             {siteConfig.footerNav.map((item) => (
//               <div key={item.title} className="space-y-3">
//                 <h4 className="text-base font-medium">{item.title}</h4>
//                 <ul className="space-y-3">
//                   {item.items.map((link) => (
//                     <li key={link.title}>
//                       <Link
//                         href={link.href}
//                         target={link?.external ? "_blank" : undefined}
//                         rel={link?.external ? "noreferrer" : undefined}
//                         className="text-sm text-muted-foreground transition-colors hover:text-foreground"
//                       >
//                         {link.title}
//                         <span className="sr-only">{link.title}</span>
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </section>
//           <section
//             id="newsletter"
//             aria-labelledby="newsletter-heading"
//             className="space-y-3"
//           >
//             <h4 className="text-base font-medium">
//               Subscribe to our newsletter
//             </h4>
//             <JoinNewsletterForm />
//           </section>
//         </section>
//         <section
//           id="footer-bottom"
//           aria-labelledby="footer-bottom-heading"
//           className="flex items-center space-x-4"
//         >
//           <div className="flex-1 text-left text-sm leading-loose text-muted-foreground">
//             <p>© {new Date().getFullYear()} Powered by Verifax LLC</p>
//           </div>
//           <div className="flex items-center space-x-1">
//             <Link
//               href={siteConfig.links.github}
//               target="_blank"
//               rel="noreferrer"
//               className={cn(
//                 buttonVariants({
//                   size: "icon",
//                   variant: "ghost",
//                 }),
//               )}
//             >
//               <Icons.github className="h-4 w-4" aria-hidden="true" />
//               <span className="sr-only">GitHub</span>
//             </Link>
//             <ThemeToggle />
//           </div>
//         </section>
//       </Shell>
//     </footer>
//   );
// }

export function SiteFooter() {
  return (
    <footer className="p-4 w-full border-t">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icons.logo className="w-6 h-6" />
          <span className="text-sm font-bold">ezVoice</span>
        </div>
        <p className="text-xs">
          © {new Date().getFullYear()} Powered by Verifax LLC
        </p>
      </div>
    </footer>
  );
}
