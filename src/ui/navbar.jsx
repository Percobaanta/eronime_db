"use client";

import { useController } from "@/ui/Controller";
import { usePathname } from "next/navigation";
import Button from "./uiButton";
import Setting from "./uiSetting";
import Announcement from "./uiAnnouncement";

export default function Navbar({}) {
  const pathname = usePathname();

  const { getSidebar, setSidebar, setSearch, setFilter } = useController();

  return (
    <>
      <div className="bg-black fixed top-0 w-full flex-1 flex z-20">
        <div className="flex justify-between md:w-52 p-3">
          <Button
            href="/"
            width="full"
            justify="start"
            className="font-semibold! text-[16px] lowercase! text-white! md:pl-0"
            onClick={() =>
              setFilter((prev) => ({
                ...prev,
                sort: "date_asc",
                creators: [],
                tags: [],
              }))
            }
          >
            <div className="bg-yellow-200 text-black flex items-center justify-center size-7 rounded-lg">
              <i className="bi bi-chat-heart-fill" />
            </div>
            eronime
          </Button>
        </div>

        <div className="flex gap-3 grow p-3">
          <Button
            icon="layout-sidebar-inset"
            className="md:inline-flex! hidden!"
            onClick={() => setSidebar(!getSidebar)}
          ></Button>

          {pathname === "/search" ? (
            <div className="bg-zinc-900 flex md:w-64 w-full rounded-full overflow-auto ml-auto">
              <Button icon={"search"}></Button>

              <input
                className="w-full text-sm h-full outline-0"
                placeholder="Search..."
                autoFocus
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          ) : (
            <Button href="/search" icon="search" className="ml-auto"></Button>
          )}

          <Announcement />

          <Setting />
        </div>
      </div>
    </>
  );
}
