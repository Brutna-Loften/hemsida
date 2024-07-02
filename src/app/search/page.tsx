import "@/app/globals.css";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import promises from "@/data/promises.json";

export default function Search() {
  return (
    <>
      <div className="container pt-4 px-4 md:px-6">
        <Input type="text" placeholder="Sök" className="mb-4" />

        <div className="grid gap-4">
          {promises.map((promise) => (
            <Card className="p-4">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>{promise.name}</CardTitle>
                <div className="flex max-md:flex-col items-end">
                  <div className="bg-muted/50 px-2 py-1 rounded-md md:mr-2 max-md:mb-2">
                    Pågående
                  </div>
                  <div className="bg-muted/50 px-2 py-1 rounded-md">
                    {promise.party}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <span className="text-muted-foreground">
                  {promise.description}
                </span>
              </CardContent>
              <CardFooter>
                {promise.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
