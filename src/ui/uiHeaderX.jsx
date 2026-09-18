"use client";

import { useController } from "@/ui/Controller";
import { usePathname } from "next/navigation";
import ButtonX from "./uiButtonX";
import Divider from "./uiDivider";
import Label from "./uiLabel";
import Dropdown from "./uiDropdown";

export default function Header() {
  const pathname = usePathname();

  const {
    getSidebar,
    setSidebar,
    getSidebarMobile,
    setSidebarMobile,
    getCollapse,
    setCollapse,
    getFilter,
    setFilter,
  } = useController();

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="bg900 sticky top-0 rounded-lg flex justify-between gap-2 z-10">
        {/* Left Menu */}
        <div className="flex gap-2 p-2">
          <ButtonX
            icon="layout-sidebar-inset"
            variant="base"
            className="md:block! hidden!"
            onClick={() => {
              setSidebar(!getSidebar);
              setCollapse("");
            }}
          ></ButtonX>

          <ButtonX
            icon="list"
            variant="base"
            onClick={() => setSidebarMobile(!getSidebarMobile)}
            className="md:hidden flex-none"
          ></ButtonX>

          <Divider border="vertical" className="mx-1 md:block hidden" />

          <ButtonX
            href={"/"}
            className="lowercase text-base! font-semibold! md:hidden"
          >
            eronime
          </ButtonX>

          <ButtonX
            iconEnd={getFilter ? "dash" : "plus"}
            variant="base"
            className="md:flex! hidden!"
            onClick={() => setFilter((prev) => !prev)}
          >
            filter
          </ButtonX>
        </div>

        {/* Center Menu */}
        <div className="relative flex gap-2 p-2">
          <div className="md:flex hidden gap-3">
            <nav className="flex  gap-2 md:w-fit w-full overflow-auto scrollbar-none">
              <ButtonX href={"/porn"} className="relative">
                porn
                {(pathname === "/" || pathname === "/porn") && (
                  <span className="absolute bottom-0 w-2 border border-white rounded-full"></span>
                )}
              </ButtonX>

              <ButtonX href={"/animated"} className="relative">
                animated
                {pathname === "/animated" && (
                  <span className="absolute bottom-0 w-2 border border-white rounded-full"></span>
                )}
              </ButtonX>

              <ButtonX href={"/hentai"} className="relative">
                hentai
                {pathname === "/hentai" && (
                  <span className="absolute bottom-0 w-2 border border-white rounded-full"></span>
                )}
              </ButtonX>

              <ButtonX href={"/cosplay"} className="relative">
                cosplay
                {pathname === "/cosplay" && (
                  <span className="absolute bottom-0 w-2 border border-white rounded-full"></span>
                )}
              </ButtonX>

              <ButtonX href={"/manhwa"} className="relative">
                manhwa
                {pathname === "/manhwa" && (
                  <span className="absolute bottom-0 w-2 border border-white rounded-full"></span>
                )}
              </ButtonX>
            </nav>
          </div>
        </div>

        {/* Right Menu */}
        <div className="flex gap-2 p-2">
          {pathname === "/search" ? (
            <div className="bg800 flex rounded-md overflow-auto">
              <ButtonX icon={"search"}></ButtonX>

              <input
                className="bg800 w-full md:w-48 h-7 text-sm outline-0"
                autoFocus
              />
            </div>
          ) : (
            <ButtonX href={"/search"} icon={"search"}></ButtonX>
          )}

          <ButtonX icon={"bell"}></ButtonX>

          <Dropdown />
          {/* <ButtonX icon={"gear"}></ButtonX> */}
        </div>
      </div>

      {/* Filter Mobile */}
      <div className="md:hidden flex justify-between gap-2">
        <ButtonX
          iconEnd={getFilter ? "dash" : "plus"}
          variant="base"
          onClick={() => setFilter((prev) => !prev)}
        ></ButtonX>

        <Divider border="vertical" />

        <nav className="flex  gap-2 md:w-fit w-full overflow-auto scrollbar-none">
          <ButtonX href={"/porn"} className="relative">
            porn
            {(pathname === "/" || pathname === "/porn") && (
              <span className="absolute bottom-0 w-2 border border-white rounded-full"></span>
            )}
          </ButtonX>

          <ButtonX href={"/animated"} className="relative">
            animated
            {pathname === "/animated" && (
              <span className="absolute bottom-0 w-2 border border-white rounded-full"></span>
            )}
          </ButtonX>

          <ButtonX href={"/hentai"} className="relative">
            hentai
            {pathname === "/hentai" && (
              <span className="absolute bottom-0 w-2 border border-white rounded-full"></span>
            )}
          </ButtonX>

          <ButtonX href={"/cosplay"} className="relative">
            cosplay
            {pathname === "/cosplay" && (
              <span className="absolute bottom-0 w-2 border border-white rounded-full"></span>
            )}
          </ButtonX>

          <ButtonX href={"/manhwa"} className="relative">
            manhwa
            {pathname === "/manhwa" && (
              <span className="absolute bottom-0 w-2 border border-white rounded-full"></span>
            )}
          </ButtonX>
        </nav>
      </div>

      {/* Filter Dropdown */}
      {getFilter && (
        <div className="bg900 min-h-64 max-h-96 flex-1 rounded-lg overflow-auto">
          <div className="grid md:grid-cols-6 grid-cols-2 gap-x-6 gap-y-0 w-full borderB p-3">
            <div className="md:col-span-6 col-span-2">
              <Label title={"Actress"} size="sm" className={"pl-2"} muted />
            </div>

            {Array.from({ length: 26 }, (_, i) => (
              <ButtonX key={i} icon={"record"}>
                actress {i}
                <Label title={"23"} size="sm" className={"ml-auto"} />
              </ButtonX>
            ))}
          </div>

          <div className="grid md:grid-cols-6 grid-cols-2 gap-x-6 gap-y-0 w-full p-3">
            <div className="md:col-span-6 col-span-2">
              <Label title={"Actress"} size="sm" className={"pl-2"} muted />
            </div>

            {Array.from({ length: 26 }, (_, i) => (
              <ButtonX key={i} icon={"record"}>
                Tags {i}
                <Label title={"23"} size="sm" className={"ml-auto"} />
              </ButtonX>
            ))}
          </div>
        </div>
      )}

      {/* Label */}
      <div className="mb-5">
        <Label
          className="text-2xl! font-bold! uppercase"
          h1
          title={
            pathname === "/" || pathname === "/porn" ? (
              <>
                new porn <span className="textPrimary"> videos</span>
              </>
            ) : pathname === "/animated" ? (
              <>
                new animated <span className="textPrimary"> videos</span>
              </>
            ) : pathname === "/hentai" ? (
              <>
                new hentai <span className="textPrimary"> videos</span>
              </>
            ) : (
              <>
                new cosplay <span className="textPrimary"> collection</span>
              </>
            )
          }
        />

        <p className="text-sm text-zinc-400">
          Showing results for your selected filters
        </p>
      </div>
    </div>
  );
}
