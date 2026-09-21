"use client";

import { useController } from "@/ui/Controller";
import { usePathname } from "next/navigation";
import Button from "./uiButton";
import Divider from "./uiDivider";
import Label from "./uiLabel";
import Setting from "./uiSetting";

export default function Header() {
  const pathname = usePathname();

  const {
    getSidebar,
    setSidebar,
    getSidebarMobile,
    setSidebarMobile,
    getFilter,
    setFilter,
  } = useController();

  return (
    <>
      {/* Header */}
      <div className="bg-black sticky top-0 z-10">
        <div className="bg900s rounded flex justify-between gap-2 z-10">
          {/* Left Menu */}
          <div className="flex gap-2 p-2">
            <Button
              icon="layout-sidebar-inset"
              className="md:block! hidden!"
              onClick={() => setSidebar(!getSidebar)}
            ></Button>

            <Button
              icon="list"
              onClick={() => setSidebarMobile(!getSidebarMobile)}
              className="md:hidden flex-none"
            ></Button>

            <Divider border="vertical" className="mx-1" />

            <Button
              href={"/"}
              className="lowercase text-base! font-semibold! md:hidden"
            >
              eronime
            </Button>

            <Button
              iconEnd={getFilter ? "dash" : "plus"}
              className="md:flex! hidden!"
              onClick={() => setFilter((prev) => !prev)}
            >
              filter
            </Button>
          </div>

          {/* Center Menu */}
          <div className="md:flex items-center hidden gap-2 p-2">
            <nav className="flex  gap-2 md:w-fit w-full overflow-auto scrollbar-none">
              <Button href={"/porn"} className="relative">
                porn
                {(pathname === "/" || pathname === "/porn") && (
                  <span className="absolute bottom-0 w-2 border border-white rounded-full"></span>
                )}
              </Button>

              <Button href={"/animated"} className="relative">
                animated
                {pathname === "/animated" && (
                  <span className="absolute bottom-0 w-2 border border-white rounded-full"></span>
                )}
              </Button>

              <Button href={"/hentai"} className="relative">
                hentai
                {pathname === "/hentai" && (
                  <span className="absolute bottom-0 w-2 border border-white rounded-full"></span>
                )}
              </Button>

              <Button href={"/cosplay"} className="relative">
                cosplay
                {pathname === "/cosplay" && (
                  <span className="absolute bottom-0 w-2 border border-white rounded-full"></span>
                )}
              </Button>

              <Button href={"/manhwa"} className="relative">
                manhwa
                {pathname === "/manhwa" && (
                  <span className="absolute bottom-0 w-2 border border-white rounded-full"></span>
                )}
              </Button>
            </nav>
          </div>

          {/* Right Menu */}
          <div className="flex gap-2 p-2">
            {pathname === "/search" ? (
              <div className="bg800 flex rounded-md overflow-auto">
                <Button icon={"search"}></Button>

                <input
                  className="bg800 w-full md:w-48 h-7 text-sm outline-0"
                  autoFocus
                />
              </div>
            ) : (
              <Button
                href={"/search"}
                icon={"search"}
                variant="white"
                radius="full"
              >
                <span className="md:block hidden px-6">Browse</span>
              </Button>
            )}

            <Setting />
          </div>
        </div>
      </div>

      {/* Filter Mobile */}
      <div className="md:hidden flex justify-between gap-2 p-2">
        <Button
          iconEnd={getFilter ? "dash" : "plus"}
          variant="base"
          onClick={() => setFilter((prev) => !prev)}
        ></Button>

        <Divider border="vertical" />

        <nav className="flex gap-2 md:w-fit w-full overflow-auto scrollbar-none">
          <Button href={"/porn"} className="relative">
            porn
            {(pathname === "/" || pathname === "/porn") && (
              <span className="absolute bottom-0 w-2 border border-white rounded-full"></span>
            )}
          </Button>

          <Button href={"/animated"} className="relative">
            animated
            {pathname === "/animated" && (
              <span className="absolute bottom-0 w-2 border border-white rounded-full"></span>
            )}
          </Button>

          <Button href={"/hentai"} className="relative">
            hentai
            {pathname === "/hentai" && (
              <span className="absolute bottom-0 w-2 border border-white rounded-full"></span>
            )}
          </Button>

          <Button href={"/cosplay"} className="relative">
            cosplay
            {pathname === "/cosplay" && (
              <span className="absolute bottom-0 w-2 border border-white rounded-full"></span>
            )}
          </Button>

          <Button href={"/manhwa"} className="relative">
            manhwa
            {pathname === "/manhwa" && (
              <span className="absolute bottom-0 w-2 border border-white rounded-full"></span>
            )}
          </Button>
        </nav>
      </div>

      {/* Filter Dropdown */}
      {getFilter && (
        <div className="p-2">
          <div className="bg900 min-h-64 max-h-96 flex-1 rounded-lg overflow-auto scrollbar-none">
            <div className="grid md:grid-cols-6 grid-cols-2 gap-x-6 gap-y-0 w-full borderB p-3">
              <div className="md:col-span-6 col-span-2">
                <Label title={"Actress"} size="sm" className={"pl-2"} muted />
              </div>

              {Array.from({ length: 26 }, (_, i) => (
                <Button key={i} icon={"record"}>
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
                <Button key={i} icon={"record"}>
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
