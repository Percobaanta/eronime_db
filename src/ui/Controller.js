"use client";

import { createContext, useContext, useState } from "react";
import { usePathname } from "next/navigation";
import Button from "./uiButton";

const ControllerContext = createContext(null);

export function useController() {
  return useContext(ControllerContext);
}

export default function Controller({ children }) {
  const pathname = usePathname();
  const [getDropdown, setDropdown] = useState(false);

  const [dodo, setdodo] = useState("asdhakshdkahsd");
  const [sidebar, setSidebar] = useState(true);
  const [theme, setTheme] = useState("dark");

  return (
    <>
      <ControllerContext.Provider
        value={{
          dodo,
          setdodo,
          sidebar,
          setSidebar,
          theme,
          setTheme,
        }}
      >
        <div className="flex flex-col">
          <Button onClick={() => setDropdown(!getDropdown)}>{dodo}</Button>

          {getDropdown && (
            <div className="bg900 p-3">
              <Button href={"/"}>/</Button>
              <Button href={"/animated"}>animated</Button>
            </div>
          )}
        </div>

        <div className="flex flex-col w-full">{children}</div>
      </ControllerContext.Provider>
    </>
  );
}
