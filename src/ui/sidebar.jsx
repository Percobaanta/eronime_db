"use client";

import { useController } from "@/ui/Controller";
import { usePathname } from "next/navigation";
import Button from "./uiButton";
import { useState } from "react";

export default function Navbar({}) {
  const pathname = usePathname();

  const {
    getPorn,
    getAnimated,
    getHentai,
    getCosplay,
    getSidebar,
    getFilter,
    setFilter,
  } = useController();

  const [getCollapse, setCollapse] = useState("porn");

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
      {getSidebar && (
        <div className="flex-none h-screen overflow-auto md:block hidden w-52 space-y-2 pt-20 p-3">
          {/* NAVIGATION */}
          <div className="flex flex-col">
            <Button
              iconEnd={getCollapse === "porn" ? "dash ml-auto" : "plus ml-auto"}
              width="full"
              className="pl-0"
              onClick={() =>
                getCollapse === "porn" ? setCollapse(null) : setCollapse("porn")
              }
            >
              <div className="bg-zinc-800 flex items-center justify-center size-6 text-xs rounded-lg">
                <i className="bi bi-layers" />
              </div>
              NAVIGATION
            </Button>

            <div className="ml-3 border-l border-dashed border-zinc-800">
              {getCollapse === "porn" &&
                [
                  { title: "porn", url: "/porn" },
                  { title: "animated", url: "/animated" },
                  { title: "hentai", url: "/hentai" },
                  { title: "cosplay", url: "/cosplay" },
                ].map((e, i) => (
                  <Button
                    key={i}
                    href={e.url}
                    iconEnd={
                      pathname === "/"
                        ? e.url === "/porn"
                          ? "record-fill text-xs! ml-auto"
                          : "record text-xs! ml-auto"
                        : pathname === e.url
                        ? "record-fill text-xs! ml-auto"
                        : "record text-xs! ml-auto"
                    }
                    aria-label={e.title}
                    className="justify-between! w-full! pl-5"
                    onClick={() =>
                      setFilter((prev) => ({
                        ...prev,
                        sort: "date_asc",
                        creators: [],
                        tags: [],
                      }))
                    }
                  >
                    {e.title}
                  </Button>
                ))}
            </div>
          </div>

          {/* SORT */}
          <div className="flex flex-col">
            <Button
              iconEnd={getCollapse === "sort" ? "dash ml-auto" : "plus ml-auto"}
              width="full"
              className="pl-0"
              onClick={() =>
                getCollapse === "sort" ? setCollapse(null) : setCollapse("sort")
              }
            >
              <div className="bg-zinc-800 flex items-center justify-center size-6 text-xs rounded-lg">
                <i className="bi bi-filter" />
              </div>
              SORT
            </Button>

            <div className="ml-3 border-l border-dashed border-zinc-800">
              {getCollapse === "sort" &&
                [
                  {
                    title: "by date",
                    sort: "date_asc",
                    icon: "arrow-down-circle",
                  },
                  {
                    title: "by date",
                    sort: "date_desc",
                    icon: "arrow-up-circle",
                  },
                  {
                    title: "by title",
                    sort: "title_asc",
                    icon: "arrow-down-circle",
                  },
                  {
                    title: "by title",
                    sort: "title_desc",
                    icon: "arrow-up-circle",
                  },
                  {
                    title: "by view",
                    sort: "view_asc",
                    icon: "arrow-down-circle",
                  },
                  {
                    title: "by view",
                    sort: "view_desc",
                    icon: "arrow-up-circle",
                  },
                ].map((items, i) => (
                  <Button
                    key={i}
                    iconEnd={
                      getFilter?.sort === items.sort
                        ? `${items.icon}-fill text-xs! ml-auto`
                        : `${items.icon} text-xs! ml-auto`
                    }
                    aria-label={items.title}
                    className="justify-between! w-full! pl-5"
                    onClick={() =>
                      setFilter((prev) => ({ ...prev, sort: items.sort }))
                    }
                  >
                    {items.title}
                  </Button>
                ))}
            </div>
          </div>

          {/* CREATOR */}
          <div className="flex flex-col">
            <Button
              iconEnd={
                getCollapse === "creator" ? "dash ml-auto" : "plus ml-auto"
              }
              width="full"
              className="pl-0"
              onClick={() =>
                getCollapse === "creator"
                  ? setCollapse(null)
                  : setCollapse("creator")
              }
            >
              <div className="bg-zinc-800 flex items-center justify-center size-6 text-xs rounded-lg">
                <i className="bi bi-person" />
              </div>
              CREATOR
            </Button>

            <div className="ml-3 border-l border-dashed border-zinc-800">
              {getCollapse === "creator" &&
                creators.map((items, i) => (
                  <Button
                    key={i}
                    iconEnd={
                      getFilter.creators.includes(items)
                        ? "record-fill text-xs! ml-auto"
                        : "record text-xs! ml-auto"
                    }
                    aria-label={items}
                    className="justify-between! w-full! pl-5"
                    onClick={() => toggleCreators(items)}
                  >
                    {items}
                  </Button>
                ))}
            </div>
          </div>

          {/* TAGS */}
          <div className="flex flex-col">
            <Button
              iconEnd={getCollapse === "tag" ? "dash ml-auto" : "plus ml-auto"}
              width="full"
              className="pl-0"
              onClick={() =>
                getCollapse === "tag" ? setCollapse(null) : setCollapse("tag")
              }
            >
              <div className="bg-zinc-800 flex items-center justify-center size-6 text-xs rounded-lg">
                <i className="bi bi-tag" />
              </div>
              TAGS
            </Button>

            <div className="ml-3 border-l border-dashed border-zinc-800">
              {getCollapse === "tag" &&
                tags.map((items, i) => (
                  <Button
                    key={i}
                    iconEnd={
                      getFilter.tags.includes(items)
                        ? "record-fill text-xs! ml-auto"
                        : "record text-xs! ml-auto"
                    }
                    aria-label={items}
                    className="justify-between! w-full! pl-5"
                    onClick={() => toggleTags(items)}
                  >
                    {items}
                  </Button>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
