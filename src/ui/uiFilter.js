import { useState } from "react";
import Button from "@/ui/uiButton";
import Label from "@/ui/uiLabel";
import Badge from "@/ui/uiBadge";

export default function uiFilter({ path }) {
  const [getFilter, setFilter] = useState(false);

  return (
    <>
      <div className="container relative mx-auto p-3">
        <nav>
          <ul className="flex  gap-3">
            <li className="md:w-24! w-full">
              <Button
                href={"/porn"}
                variant={path == "/" || path == "porn" ? "baseActive" : "ghost"}
                block
              >
                porn
              </Button>
            </li>

            <li className="md:w-24! w-full">
              <Button
                href={"/animated"}
                variant={path == "animated" ? "baseActive" : "ghost"}
                block
              >
                animated
              </Button>
            </li>

            <li className="md:w-24! w-full">
              <Button
                href={"/hentai"}
                variant={path == "hentai" ? "baseActive" : "ghost"}
                block
              >
                hentai
              </Button>
            </li>

            <li className="md:w-24! w-full">
              <Button
                href={"/cosplay"}
                variant={path == "cosplay" ? "baseActive" : "ghost"}
                block
              >
                cosplay
              </Button>
            </li>

            <li className="md:w-24! w-full">
              <Button
                href={"/manhwa"}
                variant={path == "manhwa" ? "baseActive" : "ghost"}
                block
              >
                manhwa
              </Button>
            </li>

            <li className="grow">
              <Button
                variant={getFilter ? "baseActive" : "ghost"}
                icon={"filter"}
                onClick={() => setFilter((prev) => !prev)}
                className="ml-auto"
              ></Button>
            </li>
          </ul>
        </nav>

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
