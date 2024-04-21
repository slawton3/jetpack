/** Originally from `t3-env-docs`
 * @link https://github.com/t3-oss/t3-env/blob/main/docs/src/components/mdx/code-block.tsx
 */
import { CheckCircledIcon } from "@radix-ui/react-icons";
import * as React from "react";
import JSONPretty from "react-json-pretty";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";

// empty json string
const emptyJson = "{'error': 'general model cannot be written to json'}";

type CodeBlockProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLPreElement>,
  HTMLPreElement
> & {
  raw: string;
};

export function CodeWrapper({ children, raw, ...props }: CodeBlockProps) {
  const [copied, setCopied] = React.useState<boolean>(false);
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">JSON</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <ScrollArea className="relative h-[500px]">
          <pre className="shadcn-border-100 w-full overflow-auto rounded-lg border bg-muted p-4 font-mono text-sm">
            <JSONPretty data={!raw ? emptyJson : raw} />
          </pre>
          <Button
            className="absolute right-2 top-2"
            size="sm"
            variant="outline"
            onClick={async () => {
              await navigator.clipboard.writeText(raw);
              setCopied(true);
            }}
          >
            {copied ? (
              <CheckCircledIcon className="h-4 w-4 text-lime-500" />
            ) : (
              "Copy"
            )}
          </Button>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
