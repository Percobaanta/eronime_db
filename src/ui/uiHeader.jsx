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
    getPorn,
    getAnimated,
    getHentai,
    getCosplay,
    setSearch,
    getSidebar,
    setSidebar,
    getSidebarMobile,
    setSidebarMobile,
    getFilter,
    setFilter,
  } = useController();

  return (
    <>
      <div className="bg-black sticky top-0 z-10">
        <div className="container mx-auto">
          <div className="bg900s rounded flex gap-3 z-10 p-3">
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
              className="lowercase text-white! text-lg! font-semibold! md:hidden"
            >
              eronime
            </Button>

            {/* <Button
              icon={"search"}
              radius="full"
              className="md:ml-0 ml-auto"
            ></Button> */}

            {pathname === "/search" ? (
              <div className="bg800 flex rounded-full overflow-auto md:ml-0 ml-auto">
                <Button icon={"search"}></Button>

                <input
                  className="bg800 w-full md:w-48 h-7 text-sm outline-0"
                  placeholder="Search..."
                  autoFocus
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            ) : (
              <Button
                href={"/search"}
                icon={"search"}
                radius="full"
                className="md:ml-0 ml-auto"
              >
                <span className="md:block hidden">Search...</span>
              </Button>
            )}

            <Button icon={"gear"} className=" md:ml-auto"></Button>

            {/* Left Menu */}
            <div className="flex gap-3 p-3 hidden">
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
                className="lowercase text-white! text-lg! font-semibold! md:hidden"
              >
                eronime
              </Button>
            </div>

            {/* Right Menu */}
            <div className="flex gap-3 p-3 hidden">
              <Button icon={"bookmark"} className="md:block hidden!"></Button>

              <Button icon={"bell"} className="md:block hidden!"></Button>

              <Setting />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
