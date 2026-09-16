"use client";

import { createContext, useContext, useState } from "react";

import ButtonX from "./uiButtonX";

const ControllerContext = createContext(null);

export function useController() {
  return useContext(ControllerContext);
}

export function Controller({ children }) {
  const [sidebar, setSidebar] = useState(true);
  const [theme, setTheme] = useState("dark");

  return (
    <ControllerContext.Provider
      value={{ sidebar, setSidebar, theme, setTheme }}
    >
      <div className="flex w-full">
        <div className="bg900 h-screen overflow-auto w-64 p-3">
          <div className="grid grid-cols-1 gap-4">
            {Array.from({ length: 30 }, (_, i) => (
              <div key={i} className="bg900">
                Tags {i}
              </div>
            ))}
          </div>
        </div>

        <div className="h-screen overflow-auto grow p-3">{children}</div>
      </div>
    </ControllerContext.Provider>
  );
}
