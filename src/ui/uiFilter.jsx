"use client";

import { useController } from "@/ui/Controller";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "@/ui/uiButton";
import Label from "@/ui/uiLabel";
import Divider from "@/ui/uiDivider";

export default function uiFilter({ path }) {
  const pathname = usePathname();

  const {
    getPorn,
    getAnimated,
    getHentai,
    getCosplay,

    getFilter,
    setFilter,
    getSort,
    setSort,
    getCreator,
    setCreator,
    getTag,
    setTag,
  } = useController();

  const [getCollapse, setCollapse] = useState(false);

  // GET API
  const getApi =
    pathname === "/" || pathname === "/porn"
      ? getPorn
      : pathname === "/animated"
      ? getAnimated
      : pathname === "/hentai"
      ? getHentai
      : getCosplay;

  // GET CREATOR WITHOUT DUPLICATE
  const creators = [...new Set(getApi?.flatMap((item) => item.xcreator || []))];

  // GET CREATOR WITHOUT DUPLICATE
  const tags = [...new Set(getApi?.flatMap((item) => item.xtags || []))];

  // SET MULTITPLE TAG
  const toggleCreators = (items) => {
    setFilter((prev) => ({
      ...prev,
      creators: prev.creators.includes(items)
        ? prev.creators.filter((e) => e !== items)
        : [...prev.creators, items],
    }));
  };

  // SET MULTITPLE TAG
  const toggleTags = (items) => {
    setFilter((prev) => ({
      ...prev,
      tags: prev.tags.includes(items)
        ? prev.tags.filter((e) => e !== items)
        : [...prev.tags, items],
    }));
  };

  return (
    <>
      <div className="md:hidden mb-5">
        {pathname !== "/search" && (
          <div className="flex gap-3 mb-3">
            <nav className="flex md:w-fit w-full overflow-auto scrollbar-none">
              <Button
                href={"/porn"}
                size="sm"
                radius="full"
                variant={
                  pathname === "/" || pathname === "/porn" ? "base" : "default"
                }
                className="min-w-24"
                onClick={() =>
                  getCollapse === "porn"
                    ? setCollapse(null)
                    : setCollapse("porn")
                }
              >
                porn
              </Button>

              <Button
                href={"/animated"}
                size="sm"
                radius="full"
                variant={pathname === "/animated" ? "base" : "default"}
                className="min-w-24"
                onClick={() =>
                  getCollapse === "porn"
                    ? setCollapse(null)
                    : setCollapse("porn")
                }
              >
                animated
              </Button>

              <Button
                href={"/hentai"}
                size="sm"
                radius="full"
                variant={pathname === "/hentai" ? "base" : "default"}
                className="min-w-24"
                onClick={() =>
                  getCollapse === "porn"
                    ? setCollapse(null)
                    : setCollapse("porn")
                }
              >
                hentai
              </Button>

              <Button
                href={"/cosplay"}
                size="sm"
                radius="full"
                variant={pathname === "/cosplay" ? "base" : "default"}
                className="min-w-24"
                onClick={() =>
                  getCollapse === "porn"
                    ? setCollapse(null)
                    : setCollapse("porn")
                }
              >
                cosplay
              </Button>

              <Button
                href={"/manhwa"}
                size="sm"
                radius="full"
                variant={pathname === "/manhwa" ? "base" : "default"}
                className="min-w-24"
                onClick={() =>
                  getCollapse === "porn"
                    ? setCollapse(null)
                    : setCollapse("porn")
                }
              >
                manhwa
              </Button>
            </nav>

            <Button
              variant={getCollapse ? "white" : "base"}
              icon="filter"
              size="sm"
              radius="full"
              onClick={() => setCollapse(!getCollapse)}
            ></Button>
          </div>
        )}

        {getCollapse && (
          <div className="bg900 min-h-48 max-h-72 flex-1 rounded-lg overflow-auto scrollbar-none">
            {/* SORT */}
            <div className="grid grid-cols-2 w-full p-2 borderB">
              <div className="col-span-2">
                <Label title="Sort by" size="sm" className="pl-2" muted />
              </div>

              {[
                {
                  title: "by date",
                  sort: "date_asc",
                  icon: "arrow-down-short",
                },
                {
                  title: "by date",
                  sort: "date_desc",
                  icon: "arrow-up-short",
                },
                {
                  title: "by title",
                  sort: "title_asc",
                  icon: "arrow-down-short",
                },
                {
                  title: "by title",
                  sort: "title_desc",
                  icon: "arrow-up-short",
                },
                {
                  title: "by view",
                  sort: "view_asc",
                  icon: "arrow-down-short",
                },
                {
                  title: "by view",
                  sort: "view_desc",
                  icon: "arrow-up-short",
                },
              ].map((items, i) => (
                <Button
                  key={i}
                  icon={
                    getFilter?.sort === items.sort
                      ? "record-fill text-xs!"
                      : "record text-xs!"
                  }
                  size="sm"
                  width="full"
                  justify="start"
                  aria-label={items.title}
                  iconEnd={items.icon}
                  onClick={() =>
                    setFilter((prev) => ({ ...prev, sort: items.sort }))
                  }
                >
                  {items.title}
                </Button>
              ))}
            </div>

            {/* CREATORS */}
            <div className="grid grid-cols-2 w-full p-2 borderB">
              <div className="col-span-2">
                <Label
                  title={pathname === "/hentai" ? "Brand (OR)" : "Actress (OR)"}
                  size="sm"
                  className="pl-2"
                  muted
                />
              </div>

              {creators.map((items, i) => (
                <Button
                  key={i}
                  icon={
                    getFilter.creators.includes(items)
                      ? "record-fill text-xs!"
                      : "record text-xs!"
                  }
                  size="sm"
                  width="full"
                  justify="start"
                  aria-label={items}
                  onClick={() => toggleCreators(items)}
                >
                  {items}
                </Button>
              ))}
            </div>

            {/* TAGS */}
            <div className="grid grid-cols-2 w-full p-2">
              <div className="col-span-2">
                <Label title="Tags (AND)" size="sm" className="pl-2" muted />
              </div>

              {tags.map((items, i) => (
                <Button
                  key={i}
                  icon={
                    getFilter.tags.includes(items)
                      ? "record-fill text-xs!"
                      : "record text-xs!"
                  }
                  size="sm"
                  width="full"
                  justify="start"
                  aria-label={items}
                  onClick={() => toggleTags(items)}
                >
                  {items}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
