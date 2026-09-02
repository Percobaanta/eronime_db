"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "@/ui/uiButton";
import Badge from "@/ui/uiBadge";
import Divider from "@/ui/uiDivider";
import Dropdown from "@/ui/uiDropdown";
import Label from "@/ui/uiLabel";
import Collapse from "@/ui/uiCollapse";
import Theme from "@/ui/uiTheme";

export default function Side() {
  const pathname = usePathname();

  // Global state
  const [getCollapse, setCollapse] = useState(false);
  const [getSidebar, setSidebar] = useState(true);
  const [getDropdown, setDropdown] = useState("");
  const [getActivity, setActivity] = useState("");

  console.log(getSidebar);
  return (
    <>
      {/* Aside */}
      <aside
        className={`md:relative fixed flex h-screen md:w-min w-full z-20
       ${getSidebar ? "md:flex hidden" : "md:flex"}
      `}
      >
        {/* Sidebar navigation */}
        <div className="bg800 overflow-auto borderR">
          <div className="bg800 sticky top-0 p-3">
            <Button
              href={"/"}
              variant="primary"
              icon={"chat-heart-fill"}
              radius={"rounded"}
              outline
            ></Button>
          </div>

          <Divider />

          <nav aria-label="Sidebar navigation" className="p-3">
            <ul className="space-y-3">
              <li>
                <Button
                  href={"/porn"}
                  variant={
                    pathname == "/" || pathname == "/porn"
                      ? "baseActive"
                      : "base"
                  }
                  icon={"person-video2"}
                  radius={"rounded"}
                ></Button>
              </li>
              <li>
                <Button
                  href={"/animated"}
                  variant={pathname == "/animated" ? "baseActive" : "base"}
                  icon={"person-vcard-fill"}
                  radius={"rounded"}
                ></Button>
              </li>
              <li>
                <Button
                  href={"/hentai"}
                  variant={pathname == "/hentai" ? "baseActive" : "base"}
                  icon={"collection-play-fill"}
                  radius={"rounded"}
                ></Button>
              </li>
              <li>
                <Button
                  href={"/cosplay"}
                  variant={pathname == "/cosplay" ? "baseActive" : "base"}
                  icon={"images"}
                  radius={"rounded"}
                ></Button>
              </li>
              <li>
                <Button
                  href={"/manhwa"}
                  variant={pathname == "/manhwa" ? "baseActive" : "base"}
                  icon={"file-image-fill"}
                  radius={"rounded"}
                ></Button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Sidebar activity */}
        <div
          className={`bg900 flex-none overflow-auto md:w-48 w-72 borderR  ${
            getSidebar ? "md:block" : "md:hidden"
          }`}
        >
          <div className="bg900 sticky top-0 p-3">
            <Dropdown
              getCollapse={getCollapse}
              setCollapse={setCollapse}
              setSidebar={setSidebar}
            ></Dropdown>
          </div>

          <div className="flex flex-col p-3">
            <Label
              title={`${pathname.replace("/", "")} activity`}
              size={"sm"}
              className={"capitalize"}
              muted
            />

            <nav aria-label="Sidebar activity">
              <ul>
                <li>
                  <Button
                    icon={"bookmark-fill"}
                    iconEnd={
                      getActivity === "bookmark"
                        ? "dash-lg ml-auto"
                        : "plus-lg ml-auto"
                    }
                    justify={"start"}
                    block
                    className={"p-0!"}
                    onClick={() =>
                      getActivity === "bookmark"
                        ? setActivity("")
                        : setActivity("bookmark")
                    }
                  >
                    bookmark
                  </Button>

                  <ul
                    className={`${
                      getActivity === "bookmark" ? "visible" : "hidden"
                    } space-y-2 pl-1`}
                  >
                    {Array.from({ length: 8 }, (_, i) => (
                      <li key={i}>
                        <Link href={"#"} className="flex justify-between">
                          <p className="truncate text-xs font-light">
                            aksjdhklajshdka hsdkljahlskdhalks hdlakshdlaksjhd
                            dodo
                          </p>
                          <Badge title={"porn"} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                <li>
                  <Button
                    icon={"hand-thumbs-up-fill"}
                    iconEnd={
                      getActivity === "reaction"
                        ? "dash-lg ml-auto"
                        : "plus-lg ml-auto"
                    }
                    justify={"start"}
                    block
                    className={"p-0!"}
                    onClick={() =>
                      getActivity === "reaction"
                        ? setActivity("")
                        : setActivity("reaction")
                    }
                  >
                    reaction
                  </Button>

                  <ul
                    className={`${
                      getActivity === "reaction" ? "visible" : "hidden"
                    } space-y-2 pl-1`}
                  >
                    {Array.from({ length: 8 }, (_, i) => (
                      <li key={i}>
                        <Link href={"#"} className="flex justify-between">
                          <p className="truncate text-xs font-light">
                            aksjdhklajshdka hsdkljahlskdhalks hdlakshdlaksjhd
                            dodo
                          </p>
                          <Badge title={"porn"} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Sidebar Overlay */}
        <div
          className="bg-zinc-950/70 grow"
          onClick={() => setSidebar((prev) => !prev)}
        ></div>
      </aside>

      {/* Header */}
      <header
        className={`bg900 fixed flex gap-3 top-0 right-0 p-3 z-10 borderB ${
          getSidebar
            ? "w-full md:w-[calc(100%-15.5rem)]"
            : "w-[calc(100%-3.5rem)]"
        }`}
      >
        <Button
          variant="base"
          icon={"layout-sidebar"}
          outline
          onClick={() => setSidebar((prev) => !prev)}
        ></Button>

        <Divider border={"vertical"} />

        <Button className="dark:text-white! text-black! text-xl! font-bold! lowercase px-0! mr-auto">
          eronime
        </Button>

        <Button icon={"search"} />

        <Button icon={"bell"} />

        <Theme />
      </header>
    </>
  );
}
