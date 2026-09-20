import { useState } from "react";
import Button from "@/ui/uiButton";
import Label from "@/ui/uiLabel";
import { usePathname } from "next/navigation";

export default function uiFilter({ path }) {
  const pathname = usePathname();
  const [getFilter, setFilter] = useState(false);

  return (
    <>
      <div className="container mx-auto p-3 space-y-5">
        <div>
          <Label
            className="text-2xl! font-bold! uppercase"
            h1
            title={
              pathname === "/" || pathname === "/porn" ? (
                <>
                  new porn <span className="textPrimary"> videos</span>
                </>
              ) : pathname === "/animated" ? (
                <>
                  new animated <span className="textPrimary"> videos</span>
                </>
              ) : pathname === "/hentai" ? (
                <>
                  new hentai <span className="textPrimary"> videos</span>
                </>
              ) : (
                <>
                  new cosplay <span className="textPrimary"> collection</span>
                </>
              )
            }
          />

          <p className="text-sm text-zinc-400">
            Showing results for your selected filters
          </p>
        </div>

        <div className="flex gap-3">
          <nav className="flex gap-2 md:w-fit w-full overflow-auto scrollbar-none">
            <Button
              href={"/porn"}
              icon={pathname === "/porn" ? "play-btn-fill" : "play-btn"}
              className="min-w-28"
              btnBase
              btnCenter
            >
              porn
            </Button>

            <Button
              href={"/animated"}
              icon={pathname === "/animated" ? "play-btn-fill" : "play-btn"}
              className="min-w-28"
              btnBase
              btnCenter
            >
              animated
            </Button>

            <Button
              href={"/hentai"}
              icon={pathname === "/hentai" ? "play-btn-fill" : "play-btn"}
              className="min-w-28"
              btnBase
              btnCenter
            >
              hentai
            </Button>

            <Button
              href={"/cosplay"}
              icon={pathname === "/cosplay" ? "image-fill" : "image"}
              className="min-w-28"
              btnBase
              btnCenter
            >
              cosplay
            </Button>

            <Button
              href={"/manhwa"}
              icon={pathname === "/manhwa" ? "image-fill" : "image"}
              className="min-w-28"
              btnBase
              btnCenter
            >
              manhwa
            </Button>
          </nav>

          <Button
            variant={getFilter ? "baseActive" : "base"}
            icon={"filter"}
            onClick={() => setFilter((prev) => !prev)}
            className="flex-none ml-auto"
            btnBase
          ></Button>
        </div>

        {getFilter && (
          <div className="bg900  min-h-64 max-h-72 rounded-lg mt-3 p-3 overflow-auto space-y-5">
            <div className="grid md:grid-cols-6 grid-cols-2 gap-x-6 gap-y-0 w-full">
              <div className="md:col-span-6 col-span-2">
                <Label title={"Actress"} size="sm" className={"pl-2"} muted />
              </div>

              {Array.from({ length: 26 }, (_, i) => (
                <Button key={i} icon={"record"} btnSm>
                  actress {i}
                  <Label title={"23"} size="sm" className={"ml-auto"} />
                </Button>
              ))}
            </div>

            <div className="grid md:grid-cols-6 grid-cols-2 gap-x-6 gap-y-0 w-full">
              <div className="md:col-span-6 col-span-2">
                <Label title={"Actress"} size="sm" className={"pl-2"} muted />
              </div>

              {Array.from({ length: 26 }, (_, i) => (
                <Button key={i} icon={"record"} btnSm>
                  Tags {i}
                  <Label title={"23"} size="sm" className={"ml-auto"} />
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
