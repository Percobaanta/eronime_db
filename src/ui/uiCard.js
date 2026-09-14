"use client";

import Button from "./uiButton";
import Label from "./uiLabel";

export default function Card({ getSetting, setSetting }) {
  return (
    <>
      <div className="container mx-auto p-3 space-y-5">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold uppercase">
            Explore <span className="textPrimary">Content</span>
          </h1>
          <p className="text-sm text-zinc-400">
            Showing results for your selected filters
          </p>
        </div>

        <div
          className={`grid gap-3 mb-5 ${
            getSetting
              ? getSetting.layout === "4"
                ? "md:grid-cols-4 grid-cols-2"
                : "md:grid-cols-5 grid-cols-3"
              : "md:grid-cols-4 grid-cols-2"
          }`}
        >
          {Array.from({ length: 100 }, (_, i) => (
            <div
              key={i}
              className={`bg900 rounded-lg ${
                getSetting?.style === "square"
                  ? "aspect-square"
                  : getSetting?.style === "landscape"
                  ? "aspect-[6/4]"
                  : "aspect-[2/2.5]"
              }`}
            >
              {i + 1}
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button>Load More</Button>
        </div>
      </div>
    </>
  );
}
