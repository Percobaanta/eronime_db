"use client";

import { useEffect, useState } from "react";
import Button from "@/ui/uiButton";

export default function Card() {
  const [getSetting, setSetting] = useState(null);

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

  const [getdodo, setdodo] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("setting");
    const initialSetting = stored
      ? JSON.parse(stored)
      : {
          theme: "dark",
          layout: "5",
          style: "square",
        };

    setdodo(initialSetting);
  }, []);
  return (
    <>
      {/* Theme */}
      {getdodo?.layout}
      <Button onClick={() => updateSetting({ theme: "dark" })}>
        Dark Theme
      </Button>

      <Button onClick={() => updateSetting({ theme: "light" })}>
        Light Theme
      </Button>

      {/* Layout */}

      <Button onClick={() => updateSetting({ layout: "5" })}>5 Grid</Button>

      <Button onClick={() => updateSetting({ layout: "6" })}>6 Grid</Button>

      {/* Style */}

      <Button onClick={() => updateSetting({ style: "square" })}>Square</Button>

      <Button onClick={() => updateSetting({ style: "landscape" })}>
        Landscape
      </Button>

      <Button onClick={() => updateSetting({ style: "portrait" })}>
        Portrait
      </Button>

      {/* Grid */}

      {/* <div
        className={`grid gap-3 mb-5 p-5 ${
          getSetting.layout === "5" ? "grid-cols-5" : "grid-cols-6"
        }`}
      >
        {Array.from({ length: 100 }, (_, i) => (
          <div
            key={i}
            className={`bg900 ${
              getSetting.style === "square"
                ? "aspect-square"
                : getSetting.style === "landscape"
                ? "aspect-[3/2]"
                : "aspect-[2/3]"
            }`}
          >
            asd
          </div>
        ))}
      </div> */}
    </>
  );
}
