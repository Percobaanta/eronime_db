"use client";

import { createContext, useContext, useState } from "react";

import SidebarX from "./uiSidebarX";
import HeaderX from "./uiHeaderX";

const ControllerContext = createContext(null);

export function useController() {
  return useContext(ControllerContext);
}

export function Controller({ children }) {
  const [getCollapse, setCollapse] = useState(false);
  const [getSidebar, setSidebar] = useState(false);
  const [getSidebarMobile, setSidebarMobile] = useState(false);
  const [getFilter, setFilter] = useState(false);
  const [getSetting, setSetting] = useState("");
  const [theme, setTheme] = useState("dark");

  return (
    <ControllerContext.Provider
      value={{
        getSidebar,
        setSidebar,
        getSidebarMobile,
        setSidebarMobile,
        getCollapse,
        setCollapse,
        getFilter,
        setFilter,
        getSetting,
        setSetting,
      }}
    >
      <SidebarX />

      <main>
        <HeaderX />

        {children}
      </main>
    </ControllerContext.Provider>
  );
}
