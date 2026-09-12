"use client";

import { useEffect, useRef, useState } from "react";
import Button from "@/ui/uiButton";
import Label from "@/ui/uiLabel";

export default function Header({ setSidebar, getSetting, setSetting }) {
  const [getDropdown, setDropdown] = useState("");
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
    <header className="sticky top-0">
      <div className="bg950 flex gap-3 p-3 borderB">
        <Button
          radius={"rounded"}
          icon={"layout-sidebar-inset"}
          // className="md:hidden"
          onClick={() => setSidebar((prev) => !prev)}
        ></Button>

        <Button
          icon={"grid-fill"}
          btnRounded
          btnPrimary
          onClick={() => setSidebar((prev) => !prev)}
        ></Button>

        <Button
          href={"/"}
          className="text-white! lowercase font-semibold! text-base! p-0! mr-auto md:hidden"
        >
          eronime
        </Button>

        <div className="bg900 w-64 rounded-lg md:mr-auto">
          <Button icon={"search"} className="md:mr-auto" />
        </div>

        <Button icon={"bell-fill"} />

        <div className="relative">
          <Button
            variant="primary"
            icon="gear-fill"
            onClick={() =>
              getDropdown === "setting"
                ? setDropdown("")
                : setDropdown("setting")
            }
          />

          {getDropdown === "setting" && (
            <div className="bg800 absolute right-0 top-full mt-3 w-48 space-y-3 rounded-lg">
              <div className="">
                <Label title="Theme" className={"text-xs px-3"} muted />

                <Button
                  icon={"moon-stars-fill"}
                  iconEnd={"record ml-auto"}
                  btnBlock
                  onClick={() => updateSetting({ theme: "dark" })}
                >
                  Dark Mode
                </Button>

                <Button
                  icon={"sun-fill"}
                  iconEnd={"record ml-auto"}
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
                  onClick={() => updateSetting({ style: "potrait" })}
                >
                  Potrait
                </Button>
                <Button
                  icon={"phone-landscape-fill"}
                  iconEnd={"record ml-auto"}
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
                  iconEnd={"record ml-auto"}
                  btnBlock
                  onClick={() => {
                    updateSetting({ layout: "5" });
                    // window.location.reload();
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
                    // window.location.reload();
                  }}
                >
                  6x6
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
