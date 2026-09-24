"use client";

import { useController } from "@/ui/Controller";
import { useState } from "react";
import Button from "@/ui/uiButton";
import Card from "@/ui/uiCard";
import Link from "next/link";
import Label from "@/ui/uiLabel";

export default function Search({ getApi, getSearch = "" }) {
  const { getSetting } = useController();

  const [visibleCount, setVisibleCount] = useState(15);

  const searchData = getApi?.filter((doc) =>
    doc?.xtitle?.toLowerCase().includes(getSearch.toLowerCase())
  );

  return (
    <section className="container mx-auto p-2 pb-10 space-y-5">
      <div>
        <Label
          className="text-2xl! font-bold! uppercase"
          h1
          title={
            <>
              explore
              <span className="text-yellow-200"> content</span>
            </>
          }
        ></Label>
        <p className="text-sm text-zinc-400">
          Showing results for your selected filters
        </p>
      </div>

      {getSetting && (
        <div
          className={`grid gap-x-2 gap-y-6 ${
            getSetting.layout === "5"
              ? "md:grid-cols-5 grid-cols-2"
              : "md:grid-cols-6 grid-cols-2"
          }`}
        >
          {searchData.map((doc) => (
            <article key={doc.id}>
              <Card
                href={`/${doc.xtype}/${doc.id}`}
                src={
                  doc?.xtype === "cosplay"
                    ? `/img/${doc?.id}/(1).webp`
                    : `/img/pah/${doc?.id}.webp`
                }
                type={doc.xtype}
                variant={getSetting.style}
                title={doc.xtitle}
              ></Card>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
