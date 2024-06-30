import { Scale } from "lucide-react";

import Link from "next/link";
import "@/app/globals.css";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none pb-2">
                    Se vilka politiker som lever upp till sina ord
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Brutna Löften är en databas som spårar och analyserar
                    politiska löften. Vi håller koll på vad politiker säger och
                    vad de faktiskt gör.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Sök i databasen
                  </Link>
                </div>
              </div>

              <Scale size={"75%"} className="place-self-center" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
