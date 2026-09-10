"use client";

import { useEffect, useState } from "react";
import Button from "@/ui/uiButton";

export default function Card({ getSetting, setSetting }) {
  // const [getSetting, setSetting] = useState(null);

  // Load setting dari localStorage
  // useEffect(() => {
  //   const stored = localStorage.getItem("setting");

  //   const initialSetting = stored
  //     ? JSON.parse(stored)
  //     : {
  //         theme: "dark",
  //         layout: "5",
  //         style: "square",
  //       };

  //   setSetting(initialSetting);
  // }, []);

  // // Apply theme ketika setting berubah
  // useEffect(() => {
  //   if (!getSetting) return;

  //   document.documentElement.classList.toggle(
  //     "dark",
  //     getSetting.theme === "dark"
  //   );
  // }, [getSetting?.theme]);

  // // Update setting
  // const updateSetting = (newValue) => {
  //   const update = {
  //     ...getSetting,
  //     ...newValue,
  //   };

  //   setSetting(update);

  //   localStorage.setItem("setting", JSON.stringify(update));
  // };

  // if (!getSetting) {
  //   return null;
  // }

  useEffect(() => {
    const stored = localStorage.getItem("setting");
    const initialSetting = stored
      ? JSON.parse(stored)
      : {
          theme: "dark",
          layout: "5",
          style: "square",
        };

    setSetting(initialSetting);
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <div
          className={`grid gap-3 mb-5 p-3 ${
            getSetting?.layout === "5"
              ? "md:grid-cols-5 grid-cols-2"
              : "md:grid-cols-4 grid-cols-3"
          }`}
        >
          {Array.from({ length: 100 }, (_, i) => (
            <div
              key={i}
              className={`bg900 rounded-lg ${
                getSetting?.style === "square"
                  ? "aspect-square"
                  : getSetting?.style === "landscape"
                  ? "aspect-[3/2]"
                  : "aspect-[2/3]"
              }`}
            >
              asd
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
