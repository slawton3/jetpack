import { Icons } from "@/components/icons";
import { Card, CardTitle } from "@/components/ui/card";
import type { Technology } from "@/config/technologies";

interface TechnologyCardProps {
  technology: Technology;
}

export function TechnologyCard({ technology }: TechnologyCardProps) {
  const Icon = Icons[technology.icon];
  return (
    <Card className="relative flex size-full flex-row bg-muted p-4 transition-colors hover:border-primary hover:border hover:shadow-xl justify-center items-center gap-2">
      <div className="h-10 w-10">
        <Icon className="size-10" />
      </div>
      <div className="flex flex-1 flex-col space-y-1.5">
        <CardTitle>{technology.name}</CardTitle>
      </div>
    </Card>
  );
}
