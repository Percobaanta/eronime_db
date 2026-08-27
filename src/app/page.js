"use client";

import { useState } from "react";
import Button from "@/ui/uiButton";
import Link from "next/link";
import NavbarX from "@/ui/uiNavbarX";
import PostScroll from "@/ui/uiPostScroll";
import Dropdown from "@/ui/uiDropdown";
import Collapse from "@/ui/uiCollapse";
import NavbarY from "@/ui/uiNavbarY";
import Theme from "@/ui/uiTheme";
import Divider from "@/ui/uiDivider";

export default function NewPage() {
  const [getSidebar, setSidebar] = useState(true);
  const [getTheme, setTheme] = useState(true);
  const [getCollapse, setCollapse] = useState(false);
  const [getDropdown, setDropdown] = useState("");

  const posts = [
    { id: 1, title: "Post 1", view: 234234 },
    { id: 2, title: "Post 2", view: 4234 },
    { id: 3, title: "Post 3", view: 243 },
    { id: 4, title: "Post 4", view: 464 },
    { id: 5, title: "Post 5", view: 23523 },
    { id: 6, title: "Post 6", view: 4564 },
    { id: 7, title: "Post 7", view: 241 },
    { id: 8, title: "Post 8", view: 3453 },
    { id: 9, title: "Post 9", view: 2342 },
    { id: 10, title: "Post 10", view: 5675 },
    { id: 11, title: "Post 11", view: 5675 },
    { id: 12, title: "Post 12", view: 5675 },
    { id: 5, title: "Post 5", view: 23523 },
    { id: 6, title: "Post 6", view: 4564 },
    { id: 7, title: "Post 7", view: 241 },
    { id: 8, title: "Post 8", view: 3453 },
    { id: 9, title: "Post 9", view: 2342 },
    { id: 10, title: "Post 10", view: 5675 },
    { id: 11, title: "Post 11", view: 5675 },
    { id: 12, title: "Post 12", view: 5675 },
  ];

  return (
    <>
      <div className="flex h-screen">
        {/* SIDEBAR START */}
        <aside
          className={`md:relative h-screen fixed flex md:w-min w-full z-20
          ${getSidebar ? "md:flex hidden" : "md:flex"}
          `}
        >
          <div className="bg800 flex-none overflow-auto borderR">
            <div className="bg800 sticky top-0 p-3">
              <Button
                size="lg"
                variant="primary"
                icon={"chat-heart-fill"}
                radius={"rounded"}
                outline
              ></Button>
            </div>

            <Divider />

            <div className="flex flex-col gap-2 p-3 ">
              <Button
                size="lg"
                variant="baseActive"
                icon={"house-fill"}
                radius={"rounded"}
              ></Button>

              <Button
                size="lg"
                variant="base"
                icon={"person-video2"}
                radius={"rounded"}
              ></Button>

              <Button
                size="lg"
                variant="base"
                icon={"person-vcard-fill"}
                radius={"rounded"}
              ></Button>

              <Button
                size="lg"
                variant="base"
                icon={"collection-play-fill"}
                radius={"rounded"}
              ></Button>

              <Button
                size="lg"
                variant="base"
                icon={"images"}
                radius={"rounded"}
              ></Button>

              <div className="border w-4 mx-auto"></div>

              <Button
                size="lg"
                variant="base"
                icon={"bookmark-fill"}
                radius={"rounded"}
              ></Button>

              <Button
                size="lg"
                variant="base"
                icon={"clock-fill"}
                radius={"rounded"}
              ></Button>
            </div>
          </div>

          <div
            className={`bg900 overflow-auto borderR min-w-48
            ${getSidebar ? "md:block" : "md:hidden"}
          `}
          >
            <div className="bg900 sticky top-0 p-3">
              <Dropdown
                getCollapse={getCollapse}
                setCollapse={setCollapse}
                setSidebar={setSidebar}
              ></Dropdown>
            </div>

            <div className="flex flex-col p-3">
              <span className="text-xs mb-1 textMuted">Navigation</span>

              <Collapse
                title={"sort"}
                icon={"funnel-fill"}
                iconEnd={""}
                setDropdown={setDropdown}
                getDropdown={getDropdown}
              ></Collapse>

              <Collapse
                title={"actress"}
                icon={"file-person-fill"}
                setDropdown={setDropdown}
                getDropdown={getDropdown}
              ></Collapse>

              <Collapse
                title={"tags"}
                icon={"tag-fill"}
                setDropdown={setDropdown}
                getDropdown={getDropdown}
              ></Collapse>
            </div>
          </div>

          {/* Overlay Mobile */}
          <div
            className="bg-zinc-950/70 grow"
            onClick={() => setSidebar((prev) => !prev)}
          ></div>
        </aside>
        {/* SIDEBAR END */}

        {/* MAIN START */}
        <main className="bg950 w-full overflow-auto">
          <header className="bg950 sticky top-0 flex gap-3 z-10 p-3 borderB">
            <Button
              size={"lg"}
              icon={"layout-sidebar"}
              onClick={() => setSidebar((prev) => !prev)}
            ></Button>

            <Divider border={"vertical"} />

            <Button
              size={"lg"}
              className="text-white! text-xl! font-bold! lowercase px-0! mr-auto"
            >
              eronime
            </Button>

            <Button size={"lg"} icon={"search"}></Button>

            <Button size={"lg"} icon={"bell"}></Button>

            <Theme></Theme>
          </header>

          <div className="container mx-auto p-3 md:hidden">
            <NavbarX
              setSidebar={setSidebar}
              title={[
                "home",
                "porn",
                "animated",
                "hentai",
                "cosplay",
                "filter",
              ]}
              icon={["", "", "", "", "", "filter "]}
            />
          </div>

          <PostScroll
            data={posts}
            row={"2"}
            slice={"14"}
            label={"Hot Porn Video"}
            ratio={"square"}
            example={"https://www.eronime.com/img/pah/1786343738451.webp"}
          ></PostScroll>

          <PostScroll
            data={posts}
            row={"1"}
            slice={"10"}
            label={"Hot Hentai Video"}
            ratio={"image"}
            example={"https://www.eronime.com/img/pah/1777809485628.webp"}
          ></PostScroll>
        </main>
        {/* SIDEBAR END */}
      </div>
    </>
  );
}
