"use client";

import { useController } from "@/ui/Controller";
import { useState } from "react";
import Button from "./uiButton";
import Label from "./uiLabel";
import Link from "next/link";

export default function Search() {
  const { getPorn, getAnimated, getHentai, getCosplay } = useController();

  const getApi = [...getPorn, ...getAnimated, ...getHentai, ...getCosplay];

  const [getModal, setModal] = useState(false);
  const [getSearch, setSearch] = useState("");

  const searchData = getApi?.filter((doc) =>
    doc?.xtitle?.toLowerCase().includes(getSearch.toLowerCase())
  );

  return (
    <>
      <Button
        icon="search"
        onClick={() => setModal(true)}
        className="ml-auto"
      ></Button>

      {getModal && (
        <div className="fixed inset-0 z-50 px-10">
          <div
            className="absolute inset-0 bg-zinc-950/90"
            onClick={() => setModal(false)}
          />

          <div className="relative z-10 mx-auto mt-24 w-full rounded-lg bg-zinc-900 md:w-96">
            <div className="flex items-center gap-3 p-3">
              <Label icon="search" className="mb-0!"></Label>

              <input
                placeholder="Search..."
                autoFocus
                className="text-sm w-full h-8 outline-0"
                onChange={(e) => setSearch(e.target.value)}
              />

              <Button icon="x" onClick={() => setModal(false)} />
            </div>

            <div className="max-h-96 overflow-auto">
              {searchData.slice(0, 10).map((items, i) => (
                <Link
                  key={i}
                  href={`${items.xtype}/${items.xtitle}`}
                  className="hover:bg-zinc-800 flex flex-col p-3"
                >
                  <span className="text-xs truncate block">{items.xtitle}</span>

                  <span className="text-xs textMuted capitalize">
                    {items.xtype}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
