import { TechnologyCard } from "@/app/(site)/_components/technology-card";
import { technologies } from "@/config/technologies";

export function Technologies() {
  return (
    <section
      className="grid animate-fade-up grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-4"
      style={{ animationDelay: "0.50s", animationFillMode: "both" }}
    >
      {technologies.map((technology) => (
        <TechnologyCard key={technology.name} technology={technology} />
      ))}
    </section>
  );
}
