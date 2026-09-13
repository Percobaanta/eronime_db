"use client";

import { useEffect, useState } from "react";
import Button from "@/ui/uiButton";

export default function Card({ getSetting, setSetting }) {
  return (
    <>
      <div className="container mx-auto">
        <div
          className={`grid gap-3 mb-5 p-3 ${
            getSetting
              ? getSetting.layout === "5"
                ? "md:grid-cols-5 grid-cols-2"
                : "md:grid-cols-6 grid-cols-3"
              : "md:grid-cols-5 grid-cols-2"
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
      </div>
    </>
  );
}
