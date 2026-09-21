"use client";

import { useTheme } from "next-themes";
import { useController } from "@/ui/Controller";
import { useEffect, useRef, useState } from "react";
import ButtonX from "./uiButton";
import Label from "./uiLabel";

export default function Setting() {
  const { theme, setTheme } = useTheme();
  const { getSetting, setSetting } = useController();

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
          layout: "4",
          style: "square",
        };

    setSetting(initialSetting);
  }, []);

  // Update setting
  const updateSetting = (newValue) => {
    const update = {
      ...getSetting,
      ...newValue,
    };

    setSetting(update);

    localStorage.setItem("setting", JSON.stringify(update));
  };

  return (
    <div ref={dropdownRef} className="relative w-fit">
      <ButtonX
        icon={getDropdown ? "gear-fill" : "gear"}
        onClick={() =>
          getDropdown === "setting" ? setDropdown("") : setDropdown("setting")
        }
      ></ButtonX>

      {/* Dropdown */}
      {getDropdown === "setting" && (
        <div className="bg800 absolute top-full right-0 mt-4 w-48 space-y-2 rounded p-2">
          <div className="space-y-2">
            <ul>
              <Label title="Theme" className={"text-xs px-2"} muted />
            </ul>
            <ul>
              <li>
                <ButtonX
                  icon="moon-stars-fill"
                  iconEnd={
                    theme === "dark" ? "record-fill ml-auto" : "record ml-auto"
                  }
                  width="full"
                  onClick={() => setTheme("dark")}
                >
                  Dark Mode
                </ButtonX>
              </li>
              <li>
                <ButtonX
                  icon="sun-fill"
                  iconEnd={
                    theme === "light" ? "record-fill ml-auto" : "record ml-auto"
                  }
                  width="full"
                  onClick={() => setTheme("light")}
                >
                  Light Mode
                </ButtonX>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <ul>
              <Label title="Style" className={"text-xs px-2"} muted />
            </ul>
            <ul>
              <li>
                <ButtonX
                  icon={"square-fill"}
                  iconEnd={
                    getSetting?.style === "square"
                      ? "record-fill ml-auto"
                      : "record ml-auto"
                  }
                  width="full"
                  onClick={() => updateSetting({ style: "square" })}
                >
                  Square
                </ButtonX>
              </li>
              <li>
                <ButtonX
                  icon={"phone-fill"}
                  iconEnd={
                    getSetting?.style === "portrait"
                      ? "record-fill ml-auto"
                      : "record ml-auto"
                  }
                  width="full"
                  onClick={() => updateSetting({ style: "portrait" })}
                >
                  Portrait
                </ButtonX>
              </li>
              <li>
                <ButtonX
                  icon={"phone-landscape-fill"}
                  iconEnd={
                    getSetting?.style === "landscape"
                      ? "record-fill ml-auto"
                      : "record ml-auto"
                  }
                  width="full"
                  onClick={() => updateSetting({ style: "landscape" })}
                >
                  Landscape
                </ButtonX>
              </li>
            </ul>
          </div>

          <div className="space-y-2 md:block hidden">
            <ul>
              <Label title="Layout" className={"text-xs px-2"} muted />
            </ul>
            <ul>
              <li>
                <ButtonX
                  icon={"grid-fill"}
                  iconEnd={
                    getSetting?.layout === "5"
                      ? "record-fill ml-auto"
                      : "record ml-auto"
                  }
                  width="full"
                  onClick={() => {
                    updateSetting({ layout: "5" });
                  }}
                >
                  5x5
                </ButtonX>
              </li>
              <li>
                <ButtonX
                  icon={"grid-3x3-gap-fill"}
                  iconEnd={
                    getSetting?.layout === "6"
                      ? "record-fill ml-auto"
                      : "record ml-auto"
                  }
                  width="full"
                  onClick={() => {
                    updateSetting({ layout: "6" });
                  }}
                >
                  6x6
                </ButtonX>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
