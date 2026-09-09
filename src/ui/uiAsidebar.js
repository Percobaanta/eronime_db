"use client";

import { useEffect, useRef, useState } from "react";
import Button from "./uiButton";
import Divider from "./uiDivider";
import Label from "./uiLabel";

export default function Asidebar({ setSidebar, setSetting, setting }) {
  const [getDropdown, setDropdown] = useState("");
  // const [setting, setSetting] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Load setting dari localStorage
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

  // Apply theme ketika setting berubah
  useEffect(() => {
    if (!setting) return;

    document.documentElement.classList.toggle("dark", setting.theme === "dark");
  }, [setting?.theme]);

  // Update setting
  const updateSetting = (newValue) => {
    const update = {
      ...setting,
      ...newValue,
    };

    setSetting(update);

    localStorage.setItem("setting", JSON.stringify(update));
  };

  if (!setting) {
    return null;
  }

  return (
    <div className="bg950 flex gap-3 p-3 borderB">
      <Button
        radius={"rounded"}
        icon={"layout-sidebar-inset"}
        className="md:hidden"
        onClick={() => setSidebar((prev) => !prev)}
      ></Button>

      <Button
        href={"/"}
        btnPrimary
        className="text-white! lowercase font-semibold! text-base! p-0! mr-auto md:hidden"
      >
        eronime
      </Button>

      <Button icon={"search"} className="md:mr-auto" />

      <Button icon={"bell-fill"} />

      <div ref={dropdownRef} className="relative">
        <Button
          variant="primary"
          icon="gear-fill"
          onClick={() =>
            getDropdown === "setting" ? setDropdown("") : setDropdown("setting")
          }
        />

        {getDropdown === "setting" && (
          <div className="bg800 absolute right-0 top-full mt-3 w-48 space-y-3 rounded-lg">
            <div className="">
              <Label title="Theme" className={"text-xs px-3"} muted />

              <Button
                icon={"moon-stars-fill"}
                btnBlock
                onClick={() => updateSetting({ theme: "dark" })}
              >
                Dark Mode
              </Button>

              <Button
                icon={"sun-fill"}
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
                iconEnd={"record ml-auto"}
                btnBlock
                onClick={() => updateSetting({ style: "square" })}
              >
                Square
              </Button>
              <Button
                icon={"phone-fill"}
                iconEnd={"record ml-auto"}
                btnBlock
                onClick={() => updateSetting({ style: "landscape" })}
              >
                Potrait
              </Button>
              <Button
                icon={"phone-landscape-fill"}
                iconEnd={"record ml-auto"}
                btnBlock
                onClick={() => updateSetting({ style: "portrait" })}
              >
                Landscape
              </Button>
            </div>

            <div className="">
              <Label title="Layout" className={"text-xs px-3"} muted />

              <Button
                icon={"grid-fill"}
                iconEnd={"record ml-auto"}
                btnBlock
                onClick={() => {
                  updateSetting({ layout: "5" });
                  window.location.reload();
                }}
              >
                5x5
              </Button>
              <Button
                icon={"grid-3x3-gap-fill"}
                iconEnd={"record ml-auto"}
                btnBlock
                onClick={() => {
                  updateSetting({ layout: "6" });
                  window.location.reload();
                }}
              >
                6x6
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
