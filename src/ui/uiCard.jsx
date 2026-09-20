"use client";

import { useController } from "@/ui/Controller";
import { usePathname } from "next/navigation";
import Button from "./uiButton";
import Label from "./uiLabel";

export default function Card() {
  const pathname = usePathname();

  const { getFilter, setFilter, getSetting, setSetting } = useController();

  return (
    <>
      <div className="container mx-auto p-2 pb-10 space-y-5">
        <div>
          <Label
            className="text-2xl! font-bold! uppercase"
            h1
            title={
              pathname === "/" || pathname === "/porn" ? (
                <>
                  new porn <span className="text-indigo-500"> videos</span>
                </>
              ) : pathname === "/animated" ? (
                <>
                  new animated <span className="text-indigo-500"> videos</span>
                </>
              ) : pathname === "/hentai" ? (
                <>
                  new hentai <span className="text-indigo-500"> videos</span>
                </>
              ) : (
                <>
                  new cosplay{" "}
                  <span className="text-indigo-500"> collection</span>
                </>
              )
            }
          />

          <p className="text-sm text-zinc-400">
            Showing results for your selected filters
          </p>
        </div>

        {getSetting && (
          <>
            <div
              className={`grid gap-2 ${
                getSetting.layout === "4"
                  ? "md:grid-cols-4 grid-cols-2"
                  : "md:grid-cols-5 grid-cols-2"
              }`}
            >
              {Array.from({ length: 20 }, (_, i) => (
                <div
                  key={i}
                  className={`bg900 rounded ${
                    getSetting.style === "square"
                      ? "aspect-square"
                      : getSetting.style === "landscape"
                      ? "aspect-[6/4]"
                      : "aspect-[2/2.5]"
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <Button>Load More</Button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
