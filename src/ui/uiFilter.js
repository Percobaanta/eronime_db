import { useState } from "react";
import Button from "@/ui/uiButton";
import Label from "@/ui/uiLabel";
import Badge from "@/ui/uiBadge";

export default function uiFilter({ path }) {
  const [getFilter, setFilter] = useState(false);

  return (
    <>
      <div className="container relative mx-auto p-3">
        <div className="flex gap-3">
          <nav className="md:w-fit w-full overflow-auto scrollbar-none">
            <ul className="flex justify-between gap-2">
              <li className="md:w-24! w-full">
                <Button
                  icon={"person-video2"}
                  href={"/porn"}
                  variant={
                    path == "/" || path == "porn" ? "baseActive" : "base"
                  }
                  block
                >
                  porn
                </Button>
              </li>

              <li className="md:w-24! w-full">
                <Button
                  icon={"person-vcard-fill"}
                  href={"/animated"}
                  variant={path == "animated" ? "baseActive" : "base"}
                  block
                >
                  animated
                </Button>
              </li>

              <li className="md:w-24! w-full">
                <Button
                  href={"/hentai"}
                  icon={"collection-play-fill"}
                  variant={path == "hentai" ? "baseActive" : "base"}
                  block
                >
                  hentai
                </Button>
              </li>

              <li className="md:w-24! w-full">
                <Button
                  icon={"images"}
                  href={"/cosplay"}
                  variant={path == "cosplay" ? "baseActive" : "base"}
                  block
                >
                  cosplay
                </Button>
              </li>

              <li className="md:w-24! w-full">
                <Button
                  icon={"images"}
                  href={"/cosplay"}
                  variant={path == "cosplay" ? "baseActive" : "base"}
                  block
                >
                  manhwa
                </Button>
              </li>
            </ul>
          </nav>

          <Button
            variant={getFilter ? "baseActive" : "base"}
            icon={"filter"}
            onClick={() => setFilter((prev) => !prev)}
            className="flex-none ml-auto"
          >
            <span className="md:block hidden">Filter</span>
          </Button>
        </div>

        {getFilter && (
          <div className="bg900  min-h-64 max-h-72 rounded-lg mt-3 p-3 overflow-auto space-y-5">
            <div className="grid md:grid-cols-6 grid-cols-2 gap-x-6 gap-y-0 w-full">
              <div className="md:col-span-6 col-span-2">
                <Label
                  title={"Actress"}
                  size={"sm"}
                  icon={"file-person-fill"}
                />
              </div>

              {Array.from({ length: 26 }, (_, i) => (
                <Button key={i} size="sm" icon={"record"} className={"p-0!"}>
                  actress {i}
                  <Badge title={"23"} className={"ml-auto"} />
                </Button>
              ))}
            </div>

            <div className="grid md:grid-cols-6 grid-cols-2 gap-x-6 gap-y-0 w-full">
              <div className="md:col-span-6 col-span-2">
                <Label title={"Tags"} size={"sm"} icon={"file-person-fill"} />
              </div>

              {Array.from({ length: 26 }, (_, i) => (
                <Button key={i} size="sm" icon={"record"} className={"p-0!"}>
                  Tags {i}
                  <Badge title={"23"} className={"ml-auto"} />
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
