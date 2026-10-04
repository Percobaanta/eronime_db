"use client";

import { useController } from "@/ui/Controller";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import Link from "next/link";
import Filter from "./uiFilter";
import Label from "./uiLabel";

export default function Card({ data }) {
  const pathname = usePathname();

  const {
    getPorn,
    getAnimated,
    getHentai,
    getCosplay,
    getSetting,
    getFilter,
    getCreator,
    getTag,
    getSort,
  } = useController();

  const [loadCount, setLoadCount] = useState(30);

  const getApi =
    pathname === "/" || pathname === "/porn"
      ? getPorn
      : pathname === "/animated"
      ? getAnimated
      : pathname === "/hentai"
      ? getHentai
      : pathname === "/cosplay"
      ? getCosplay
      : pathname === "/Search"
      ? getSearch
      : getBookmark;

  const result = useMemo(() => {
    let data = [...(getApi || [])];

    // CREATOR (OR
    if (getFilter?.creators?.length) {
      data = data.filter((items) =>
        getFilter?.creators.some((creator) => items.xcreator?.includes(creator))
      );
    }

    // TAG (AND)
    if (getFilter?.tags?.length) {
      data = data.filter((items) =>
        getFilter?.tags.every((tag) => items.xtags?.includes(tag))
      );
    }

    // SORT
    if (getFilter?.sort === "view_asc") {
      data.sort(
        (a, b) =>
          (parseInt(b.id.slice(-4), 10) || 0) -
          (parseInt(a.id.slice(-4), 10) || 0)
      );
    } else if (getFilter?.sort === "view_desc") {
      data.sort(
        (a, b) =>
          (parseInt(a.id.slice(-4), 10) || 0) -
          (parseInt(b.id.slice(-4), 10) || 0)
      );
    } else if (getFilter?.sort === "title_asc") {
      data.sort((a, b) => a.xtitle.localeCompare(b.xtitle));
    } else if (getFilter?.sort === "title_desc") {
      data.sort((a, b) => b.xtitle.localeCompare(a.xtitle));
    } else if (getFilter?.sort === "date_asc") {
      data.sort((a, b) => Number(b.id) - Number(a.id));
    } else if (getFilter?.sort === "date_desc") {
      data.sort((a, b) => Number(a.id) - Number(b.id));
    }

    return data;
  }, [getApi, getFilter]);

  return (
    <>
      <section className="container mx-auto">
        <div className="mb-5">
          <Label
            className="text-2xl! font-bold! uppercase"
            h1
            title={
              pathname === "/" || pathname === "/porn" ? (
                <>
                  new porn <span className="text-yellow-200"> videos</span>
                </>
              ) : pathname === "/animated" ? (
                <>
                  new animated <span className="text-yellow-200"> videos</span>
                </>
              ) : pathname === "/hentai" ? (
                <>
                  new hentai <span className="text-yellow-200"> videos</span>
                </>
              ) : pathname === "/cosplay" ? (
                <>
                  new cosplay
                  <span className="text-yellow-200"> collection</span>
                </>
              ) : pathname === "/search" ? (
                <>
                  explore
                  <span className="text-yellow-200"> content</span>
                </>
              ) : (
                <>
                  new cosplay
                  <span className="text-yellow-200"> Reaction</span>
                </>
              )
            }
          />

          <p className="text-sm text-zinc-400">
            Showing results for your selected filters
          </p>
        </div>

        {getSetting && (
          <div
            className={`grid gap-x-3 gap-y-5 ${
              getSetting.layout === "5"
                ? "md:grid-cols-5 grid-cols-2"
                : "md:grid-cols-6 grid-cols-2"
            }`}
          >
            {result?.slice(0, loadCount).map((e, i) => (
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
        )}
      </section>
    </>
  );
}
