import { useState } from "react";
import Button from "@/ui/uiButton";
import Label from "@/ui/uiLabel";
import Badge from "@/ui/uiBadge";

export default function uiFilter({ path }) {
  const [getFilter, setFilter] = useState(false);

  return (
    <>
      <div className="container mx-auto p-3">
        <div className="flex gap-3">
          <nav className="flex gap-2 md:w-fit w-full overflow-auto scrollbar-none">
            <Button
              href={"/porn"}
              icon={"person-video2"}
              btnBase
              btnCenter
              className="min-w-28"
            >
              porn
            </Button>

            <Button
              icon={"person-vcard-fill"}
              href={"/animated"}
              btnBase
              btnCenter
              className="min-w-28"
            >
              animated
            </Button>

            <Button
              href={"/hentai"}
              icon={"collection-play-fill"}
              btnBase
              btnCenter
              className="min-w-28"
            >
              hentai
            </Button>

            <Button
              icon={"images"}
              href={"/cosplay"}
              btnBase
              btnCenter
              className="min-w-28"
            >
              cosplay
            </Button>

            <Button
              icon={"images"}
              href={"/cosplay"}
              btnBase
              btnCenter
              className="min-w-28"
            >
              manhwa
            </Button>
          </nav>

          <Button
            variant={getFilter ? "baseActive" : "base"}
            icon={"filter"}
            btnBase
            onClick={() => setFilter((prev) => !prev)}
            className="flex-none ml-auto"
          ></Button>
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
