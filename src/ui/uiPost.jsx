"use client";

import { useController } from "@/ui/Controller";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "./uiButton";
import Label from "./uiLabel";

export default function Card({ data }) {
  const pathname = usePathname();

  const { getSetting } = useController();

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
              className={`grid gap-x-4 gap-y-6 ${
                getSetting.layout === "5"
                  ? "md:grid-cols-5 grid-cols-2"
                  : "md:grid-cols-6 grid-cols-2"
              }`}
            >
              {data?.map((e, i) => (
                <Link href={`/porn/${e.id}`} key={i}>
                  <img
                    src={
                      e?.xtype === "cosplay"
                        ? `/img/${e?.id}/(1).webp`
                        : `/img/pah/${e?.id}.webp`
                    }
                    alt={e.xtitle}
                    width={512}
                    height={512}
                    loading="lazy"
                    decoding="async"
                    className={`${
                      getSetting.style === "square"
                        ? "aspect-square"
                        : getSetting.style === "landscape"
                        ? "aspect-[6/4]"
                        : "aspect-[2/2.5]"
                    } bg-zinc-800 object-cover rounded-lg`}
                  />

                  <span className="text-zinc-400 text-xs font-light capitalize">
                    {e?.id
                      ? parseInt(e.id.slice(-4), 10).toLocaleString("en-US")
                      : 0}
                  </span>

                  <h2 className="block line-clamp-1 whitespace-nowrap text-ellipsis text-xs text-zinc-200 font-semibold capitalize">
                    {e.xtitle}
                  </h2>
                </Link>
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
