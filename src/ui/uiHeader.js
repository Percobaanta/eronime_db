"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Button from "@/ui/uiButton";
import Dropdown from "@/ui/uiDropdown";
import Divider from "@/ui/uiDivider";
import Label from "@/ui/uiLabel";

export default function Header({
  getSidebarMobile,
  setSidebarMobile,
  getSidebar,
  setSidebar,
  getSetting,
  setSetting,
}) {
  const pathname = usePathname();
  const [getFilter, setFilter] = useState(false);

  return (
    <>
      <div className="bg950 sticky top-0 p-3 flex flex-1 justify-between">
        {/* Left Menu */}
        <div className="flex md:gap-3 gap-1">
          <Button
            icon="layout-sidebar-inset"
            className="md:inline-flex! hidden!"
            onClick={() => setSidebar(!getSidebar)}
          ></Button>

          <Button
            icon="layout-sidebar-inset"
            onClick={() => setSidebarMobile(!getSidebarMobile)}
            className="md:hidden flex-none"
          ></Button>

          <Divider border="vertical" className={"mx-1"} />

          <Button
            href={"/"}
            icon={"chat-heart-fill"}
            className={
              pathname === "/search"
                ? "hidden!"
                : "lowercase text-base! font-semibold!"
            }
          >
            eronime
          </Button>
        </div>

        {/* Center Menu */}
        <div className="absolute left-1/2 -translate-x-1/2 flex md:gap-3 gap-1">
          <div className="md:flex hidden gap-3">
            <nav className="flex gap-2 md:w-fit w-full overflow-auto scrollbar-none">
              <Button href={"/porn"} btnCenter>
                porn
                {(pathname === "/" || pathname === "/porn") && (
                  <span className="absolute bottom-0 w-2 border-1 rounded"></span>
                )}
              </Button>

              <Button href={"/animated"} btnCenter>
                animated
                {pathname === "/animated" && (
                  <span className="absolute bottom-0 w-2 border-1 rounded"></span>
                )}
              </Button>

              <Button href={"/hentai"} btnCenter>
                hentai
                {pathname === "/hentai" && (
                  <span className="absolute bottom-0 w-2 border-1 rounded"></span>
                )}
              </Button>

              <Button href={"/cosplay"} btnCenter>
                cosplay
                {pathname === "/cosplay" && (
                  <span className="absolute bottom-0 w-2 border-1 rounded"></span>
                )}
              </Button>

              <Button href={"/manhwa"} btnCenter>
                manhwa
                {pathname === "/manhwa" && (
                  <span className="absolute bottom-0 w-2 border-1 rounded"></span>
                )}
              </Button>
            </nav>
          </div>

          <Button
            iconEnd={"filter"}
            className="flex-none"
            onClick={() => setFilter((prev) => !prev)}
          >
            <span className="md:hidden">
              {pathname === "/" || pathname === "/porn"
                ? "porn"
                : pathname === "/animated"
                ? "animated"
                : pathname === "/hentai"
                ? "hentai"
                : "cosplay"}
            </span>
          </Button>
        </div>

        {/* Right Menu */}
        <div className="flex md:gap-3 gap-1">
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

      {/* Filter Dropdown */}
      {getFilter && (
        <div className="container mx-auto p-3">
          <div className="bg900 min-h-64 max-h-96 flex-1 rounded-lg overflow-auto space-y-5s p-3s">
            <div className="grid md:grid-cols-6 grid-cols-2 gap-x-6 gap-y-0 w-full borderB p-3">
              <div className="md:col-span-6 col-span-2">
                <Label
                  title={"Navigation"}
                  size="sm"
                  className={"pl-2"}
                  muted
                />
              </div>

              <Button
                href={"/porn"}
                btnBase={pathname !== "/" && pathname !== "/porn"}
                btnActive={pathname === "/" || pathname === "/porn"}
                btnSm
              >
                porn
              </Button>
              <Button
                href={"/animated"}
                btnBase={pathname !== "/animated"}
                btnActive={pathname === "/animated"}
                btnSm
              >
                animated
              </Button>
              <Button
                href={"/hentai"}
                btnBase={pathname !== "/hentai"}
                btnActive={pathname === "/hentai"}
                btnGhost
                btnSm
              >
                hentai
              </Button>
              <Button
                href={"/cosplay"}
                btnBase={pathname !== "/cosplay"}
                btnActive={pathname === "/cosplay"}
                btnSm
              >
                cosplay
              </Button>
            </div>

            <div className="grid md:grid-cols-6 grid-cols-2 gap-x-6 gap-y-0 w-full borderB p-3">
              <div className="md:col-span-6 col-span-2">
                <Label title={"Actress"} size="sm" className={"pl-2"} muted />
              </div>

              {Array.from({ length: 26 }, (_, i) => (
                <Button key={i} icon={"record"} btnSm>
                  actress {i}
                  <Label title={"23"} size="sm" className={"ml-auto"} />
                </Button>
              ))}
            </div>

            <div className="grid md:grid-cols-6 grid-cols-2 gap-x-6 gap-y-0 w-full p-3">
              <div className="md:col-span-6 col-span-2">
                <Label title={"Actress"} size="sm" className={"pl-2"} muted />
              </div>

              {Array.from({ length: 26 }, (_, i) => (
                <Button key={i} icon={"record"} btnSm>
                  Tags {i}
                  <Label title={"23"} size="sm" className={"ml-auto"} />
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
