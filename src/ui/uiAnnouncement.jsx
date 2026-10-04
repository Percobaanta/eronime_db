"use client";

import { useTheme } from "next-themes";
import { useController } from "@/ui/Controller";
import { useEffect, useRef, useState } from "react";
import ButtonX from "./uiButton";
import Label from "./uiLabel";

export default function Announcement() {
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

  return (
    <div ref={dropdownRef} className="relative w-fit">
      <ButtonX
        icon={getDropdown ? "bell-fill" : "bell"}
        onClick={() =>
          getDropdown === "setting" ? setDropdown("") : setDropdown("setting")
        }
      ></ButtonX>

      {/* Dropdown */}
      {getDropdown === "setting" && (
        <div className="bg800 absolute top-full right-0 mt-4 w-64 space-y-2 rounded p-2">
          <div className="space-y-2">
            <ul>
              <Label title="Announcement" className="text-xs" muted />
            </ul>
            <ul>
              <li>
                <div className="">
                  <Label title="update ui & more function" className="mb-0!" />
                  <Label title="10/01/2026" className="text-xs" muted />
                </div>
              </li>
              <li>
                <Label title="minor update" />
                <Label title="08/02/2026" className="text-xs" muted />
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
