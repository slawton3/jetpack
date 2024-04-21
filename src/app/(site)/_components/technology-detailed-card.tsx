import { Icons } from "@/components/icons";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import type { Technology } from "@/config/technologies";

interface TechnologyDetailedCardProps {
  technology: Technology;
}

export function TechnologyDetailedCard({
  technology,
}: TechnologyDetailedCardProps) {
  const Icon = Icons[technology.icon];
  return (
    <Card className="rounded-lg shadow-md p-6 flex flex-col gap-4 bg-muted hover:border-primary">
      <div className="flex items-center gap-4">
        <Avatar>
          <Icon className="size-10" />
        </Avatar>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          {technology.name}
        </h2>
      </div>
      <p className="text-gray-600 dark:text-gray-400">
        {technology.description}
      </p>
    </Card>
  );
}
