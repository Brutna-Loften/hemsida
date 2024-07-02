import "@/app/globals.css";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import promises from "@/data/promises.json";

export default function Search() {
  return (
    <>
      <div className="container pt-4 px-4 md:px-6">
        <Input type="text" placeholder="Sök" className="mb-4" />

        <div className="grid gap-4">
          {promises.map((promise) => (
            <Card className="bg-background p-4 rounded-lg shadow-sm w-full">
              <div className="flex items-center justify-between mb-2">
                <div className="text-lg font-medium">{promise.name}</div>
                <Badge variant="default" className="text-xs">
                  Pågående
                </Badge>
              </div>
              <div className="text-muted-foreground text-sm mb-2">
                {promise.description}
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                {promise.tags.map((tag, index) => (
                  <div key={index} className="bg-muted/50 px-2 py-1 rounded-md">
                    {tag}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
