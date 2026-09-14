"use client";

import { useEffect, useRef, useState } from "react";
import Button from "./uiButton";
import Label from "./uiLabel";

export default function Dropdown({ getSetting, setSetting }) {
  const dropdownRef = useRef(null);
  const [getDropdown, setDropdown] = useState(false);

  // fungsi dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Setingan awal atau meengambil dari localStorage
  useEffect(() => {
    const stored = localStorage.getItem("setting");

    const initialSetting = stored
      ? JSON.parse(stored)
      : {
          theme: "dark",
          layout: "4",
          style: "square",
        };

    setSetting(initialSetting);
  }, []);

  // Apply theme ketika setting berubah
  useEffect(() => {
    if (!getSetting) return;

    document.documentElement.classList.toggle(
      "dark",
      getSetting.theme === "dark"
    );
  }, [getSetting?.theme]);

  // Update setting
  const updateSetting = (newValue) => {
    const update = {
      ...getSetting,
      ...newValue,
    };

    setSetting(update);

    localStorage.setItem("setting", JSON.stringify(update));
  };

  // masalah fliker ada di bawah sini
  if (!getSetting) {
    return null;
  }

  return (
    <div ref={dropdownRef} className="relative w-fit">
      <Button
        variant="primary"
        icon={getDropdown ? "gear-fill" : "gear"}
        onClick={() =>
          getDropdown === "setting" ? setDropdown("") : setDropdown("setting")
        }
      />

      {/* Dropdown */}
      {getDropdown === "setting" && (
        <div className="bg800 absolute right-0 top-full mt-3 w-48 space-y-3 rounded-lg p-2">
          <div className="">
            <Label title="Theme" className={"text-xs px-3"} muted />

            <Button
              icon={"moon-stars-fill"}
              iconEnd={
                getSetting?.theme === "dark"
                  ? "record-fill ml-auto"
                  : "record ml-auto"
              }
              btnBlock
              onClick={() => updateSetting({ theme: "dark" })}
            >
              Dark Mode
            </Button>

            <Button
              icon={"sun-fill"}
              iconEnd={
                getSetting?.theme === "light"
                  ? "record-fill ml-auto"
                  : "record ml-auto"
              }
              btnBlock
              onClick={() => updateSetting({ theme: "light" })}
            >
              Light Mode
            </Button>
          </div>

          <div className="">
            <Label title="Style" className={"text-xs px-3"} muted />

            <Button
              icon={"square-fill"}
              iconEnd={
                getSetting?.style === "square"
                  ? "record-fill ml-auto"
                  : "record ml-auto"
              }
              btnBlock
              onClick={() => updateSetting({ style: "square" })}
            >
              Square
            </Button>
            <Button
              icon={"phone-fill"}
              iconEnd={
                getSetting?.style === "portrait"
                  ? "record-fill ml-auto"
                  : "record ml-auto"
              }
              btnBlock
              onClick={() => updateSetting({ style: "portrait" })}
            >
              Portrait
            </Button>
            <Button
              icon={"phone-landscape-fill"}
              iconEnd={
                getSetting?.style === "landscape"
                  ? "record-fill ml-auto"
                  : "record ml-auto"
              }
              btnBlock
              onClick={() => updateSetting({ style: "landscape" })}
            >
              Landscape
            </Button>
          </div>

          <div className="">
            <Label title="Layout" className={"text-xs px-3"} muted />

            <Button
              icon={"grid-fill"}
              iconEnd={
                getSetting?.layout === "4"
                  ? "record-fill ml-auto"
                  : "record ml-auto"
              }
              btnBlock
              onClick={() => {
                updateSetting({ layout: "4" });
              }}
            >
              <span className="md:block hidden">4x4</span>
              <span className="md:hidden">2x2</span>
            </Button>
            <Button
              icon={"grid-3x3-gap-fill"}
              iconEnd={
                getSetting?.layout === "5"
                  ? "record-fill ml-auto"
                  : "record ml-auto"
              }
              btnBlock
              onClick={() => {
                updateSetting({ layout: "5" });
              }}
            >
              <span className="md:block hidden">5x5</span>
              <span className="md:hidden">3x3</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
