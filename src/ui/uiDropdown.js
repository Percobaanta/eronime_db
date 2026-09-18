"use client";

import { useController } from "@/ui/Controller";
import { useEffect, useRef, useState } from "react";
import ButtonX from "./uiButtonX";
import Label from "./uiLabel";

export default function Dropdown() {
  const dropdownRef = useRef(null);
  const [getDropdown, setDropdown] = useState(false);

  const { getSetting, setSetting } = useController();

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
      <ButtonX
        variant="base"
        icon={getDropdown ? "gear-fill" : "gear"}
        onClick={() =>
          getDropdown === "setting" ? setDropdown("") : setDropdown("setting")
        }
      />

      {/* Dropdown */}
      {getDropdown === "setting" && (
        <div className="bg900 absolute top-full -right-2 mt-4 w-48 space-y-2 rounded-lg p-2">
          <div>
            <ul>Theme</ul>
            <ul>
              <li>Dark Theme</li>
              <li>Light Theme</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <Label title="Theme" className={"text-xs px-2"} muted />

            <ButtonX
              icon="moon-stars-fill"
              iconEnd={
                getSetting?.theme === "dark"
                  ? "record-fill ml-auto"
                  : "record ml-auto"
              }
              variant="base"
              width="full"
              onClick={() => updateSetting({ theme: "dark" })}
            >
              Dark Mode
            </ButtonX>

            <ButtonX
              icon="sun-fill"
              iconEnd={
                getSetting?.theme === "light"
                  ? "record-fill ml-auto"
                  : "record ml-auto"
              }
              variant="base"
              width="full"
              onClick={() => updateSetting({ theme: "light" })}
            >
              Light Mode
            </ButtonX>
          </div>

          <div className="">
            <Label title="Style" className={"text-xs px-2"} muted />

            <ButtonX
              icon={"square-fill"}
              iconEnd={
                getSetting?.style === "square"
                  ? "record-fill ml-auto"
                  : "record ml-auto"
              }
              onClick={() => updateSetting({ style: "square" })}
            >
              Square
            </ButtonX>
            <ButtonX
              icon={"phone-fill"}
              iconEnd={
                getSetting?.style === "portrait"
                  ? "record-fill ml-auto"
                  : "record ml-auto"
              }
              onClick={() => updateSetting({ style: "portrait" })}
            >
              Portrait
            </ButtonX>
            <ButtonX
              icon={"phone-landscape-fill"}
              iconEnd={
                getSetting?.style === "landscape"
                  ? "record-fill ml-auto"
                  : "record ml-auto"
              }
              onClick={() => updateSetting({ style: "landscape" })}
            >
              Landscape
            </ButtonX>
          </div>

          <div className="">
            <Label title="Layout" className={"text-xs px-2"} muted />

            <ButtonX
              icon={"grid-fill"}
              iconEnd={
                getSetting?.layout === "4"
                  ? "record-fill ml-auto"
                  : "record ml-auto"
              }
              onClick={() => {
                updateSetting({ layout: "4" });
              }}
            >
              <span className="md:block hidden">4x4</span>
              <span className="md:hidden">2x2</span>
            </ButtonX>
            <ButtonX
              icon={"grid-3x3-gap-fill"}
              iconEnd={
                getSetting?.layout === "5"
                  ? "record-fill ml-auto"
                  : "record ml-auto"
              }
              onClick={() => {
                updateSetting({ layout: "5" });
              }}
            >
              <span className="md:block hidden">5x5</span>
              <span className="md:hidden">3x3</span>
            </ButtonX>
          </div>
        </div>
      )}
    </div>
  );
}
