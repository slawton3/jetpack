import { Shell } from "@/components/shell";
import { technologies } from "@/config/technologies";
import { TechnologyDetailedCard } from "./technology-detailed-card";

export async function TechMain() {
  return (
    <Shell>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 md:p-6">
        <div className="max-w-3xl w-full space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              Technologies in our Next.js Boilerplate
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Our boilerplate is built with the latest and greatest tools to
              ensure a smooth and efficient development experience.
            </p>
          </div>
          {technologies.map((technology) => (
            <TechnologyDetailedCard
              technology={technology}
              key={technology.name}
            />
          ))}
        </div>
      </div>
    </Shell>
  );
}
