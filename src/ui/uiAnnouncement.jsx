"use client";

import { useController } from "@/ui/Controller";
import { useEffect, useRef, useState } from "react";
import ButtonX from "./uiButton";
import Label from "./uiLabel";

export default function Announcement() {
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

  return (
    <div ref={dropdownRef} className="relative w-fit">
      <ButtonX
        icon={getDropdown ? "bell-fill" : "bell"}
        onClick={() =>
          getDropdown === "announcement"
            ? setDropdown("")
            : setDropdown("announcement")
        }
      ></ButtonX>

      {/* Dropdown */}
      {getDropdown === "announcement" && (
        <div className="bg800 absolute top-full -right-2 mt-4 w-48 rounded p-2 z-90">
          <ButtonX width="full" justify="start">
            announcement
          </ButtonX>

          <ButtonX width="full" justify="start">
            announcement
          </ButtonX>

          <ButtonX width="full" justify="start">
            announcement
          </ButtonX>
        </div>
      )}
    </div>
  );
}
