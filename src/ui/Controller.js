"use client";

import { createContext, useContext, useState } from "react";

import { usePathname } from "next/navigation";

import ButtonX from "./uiButtonX";

const ControllerContext = createContext(null);

export function useController() {
  return useContext(ControllerContext);
}

export function Controller({ children }) {
  const pathname = usePathname();

  const [getSidebar, setSidebar] = useState(false);
  const [getSidebarMobile, setSidebarMobile] = useState(false);
  const [theme, setTheme] = useState("dark");

  return (
    <ControllerContext.Provider
      value={{ getSidebar, setSidebar, theme, setTheme }}
    >
      {/* Overlay Mobile */}
      {getSidebarMobile && (
        <div
          onClick={() => setSidebarMobile(false)}
          className="fixed inset-0 z-30 bg-black/70 md:hidden"
        >
          <ButtonX
            icon={getSidebarMobile ? "x-lg" : "list"}
            onClick={() => setSidebarMobile(!getSidebarMobile)}
            className="absolute top-3 right-3"
          ></ButtonX>
        </div>
      )}

      {/* Sidebar */}
      <aside
        className={`bg900 md:sticky fixed left-0 top-0 z-40 h-screen md:translate-x-0 borderR overflow-auto
        ${getSidebar ? "min-w-0" : "w-60"}
        ${getSidebarMobile ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex gap-2 p-2">
          <ButtonX icon="chat-heart-fill" variant="primary"></ButtonX>
          {!getSidebar && (
            <ButtonX
              href={"/"}
              width="full"
              justify="start"
              className="lowercase text-base! font-semibold!"
            >
              eronime
            </ButtonX>
          )}
        </div>

        <div className="grid grid-cols-1">
          {Array.from({ length: 10 }, (_, i) => (
            <ButtonX key={i} variant="ghost" justify="start" width="full">
              Button {i}
            </ButtonX>
          ))}
        </div>
      </aside>

      <main>
        <div className="flex md:gap-3 gap-1 mb-3">
          <ButtonX
            icon="layout-sidebar-inset"
            variant="base"
            className="md:inline-flex! hidden!"
            onClick={() => setSidebar(!getSidebar)}
          />

          <ButtonX
            icon="list"
            onClick={() => setSidebarMobile(!getSidebarMobile)}
            className="md:hidden flex-none"
          />
        </div>

        {children}
      </main>
    </ControllerContext.Provider>
  );
}
