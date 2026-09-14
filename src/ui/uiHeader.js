"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Button from "@/ui/uiButton";
import Dropdown from "@/ui/uiDropdown";

export default function Header({
  getSidebarMobile,
  setSidebarMobile,
  getSidebar,
  setSidebar,
  getSetting,
  setSetting,
}) {
  const pathname = usePathname();

  return (
    <div className="bg950 sticky top-0 p-3 flex-1 borderB">
      <div className="flex md:gap-3 gap-1">
        <Button
          icon={"layout-sidebar-inset"}
          className="md:inline-flex! hidden! md:mr-auto"
          onClick={() => setSidebar(!getSidebar)}
        ></Button>

        <Button
          icon={getSidebarMobile ? "x-lg" : "list"}
          onClick={() => setSidebarMobile(!getSidebarMobile)}
          className="md:hidden"
        ></Button>

        {/* <Divider border="vertical" className={"mx-1"} /> */}

        <Button
          href={"/"}
          className="lowercase text-base! font-semibold! mr-auto md:hidden"
        >
          eronime
        </Button>

        {pathname === "/search" ? (
          <div className="bg800 flex rounded-md overflow-auto">
            <Button icon={"search"}></Button>

            <input
              className="bg800 w-full md:w-48 h-7 text-sm outline-0"
              autoFocus
            />
          </div>
        ) : (
          <Button href={"/search"} icon={"search"}></Button>
        )}

        <Button icon={"bell"}></Button>

        <Dropdown getSetting={getSetting} setSetting={setSetting} />
      </div>
    </div>
  );
}
