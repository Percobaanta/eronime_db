"use client";

import { useController } from "@/ui/Controller";
import Button from "./uiButton";
import Setting from "./uiSetting";
import Search from "./uiSearch";
import { usePathname } from "next/navigation";

export default function Navbar({}) {
  const pathname = usePathname();

  const { getSidebar, setSidebar, setFilter } = useController();

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

          <Search />

          <Button
            href={"bookmark"}
            icon={pathname === "/bookmark" ? "bookmark-fill" : "bookmark"}
          ></Button>

          <Setting />
        </div>
      </div>
    </>
  );
}
