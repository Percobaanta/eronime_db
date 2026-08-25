"use client";

import { useState } from "react";
import Button from "@/ui/uiButton";
import Link from "next/link";
import NavbarX from "@/ui/uiNavbarX";
import PostScroll from "@/ui/uiPostScroll";
import Dropdown from "@/ui/uiDropdown";
import Collapse from "@/ui/uiCollapse";
import NavbarY from "@/ui/uiNavbarY";

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
  ];

  return (
    <>
      <div className="flex h-screen">
        <aside
          className={`md:relative fixed h-screen md:w-min w-full flex flex-row z-20
          ${getSidebar ? "md:flex hidden" : "md:flex"}
        `}
        >
          {/* Icon */}
          <div className="bg-zinc-900 borderR">
            <div className="p-3">
              <Button variant="primary" icon={"chat-heart-fill"}></Button>
            </div>

            <NavbarY
              data={[
                { url: "/", icon: "house-fill" },
                { url: "/porn", icon: "person-video2" },
                { url: "/animated", icon: "person-vcard-fill" },
                { url: "/hentai", icon: "collection-play-fill" },
                { url: "/cosplay", icon: "images" },
              ]}
            ></NavbarY>

            <div className="border w-4 mx-auto"></div>

            <NavbarY
              data={[
                { url: "bookmark", icon: "bookmark-fill" },
                { url: "history", icon: "clock-fill" },
              ]}
            ></NavbarY>
          </div>

          {/* Filter */}
          <div
            className={`bg-zinc-900 flex flex-col min-w-52
            ${getSidebar ? "md:flex" : "md:hidden"}
          `}
          >
            <Dropdown
              getCollapse={getCollapse}
              setCollapse={setCollapse}
              setSidebar={setSidebar}
            ></Dropdown>

            <div className="flex flex-col p-3">
              <Collapse
                title={"sort"}
                setDropdown={setDropdown}
                getDropdown={getDropdown}
              ></Collapse>

              <Collapse
                title={"actress"}
                setDropdown={setDropdown}
                getDropdown={getDropdown}
              ></Collapse>

              <Collapse
                title={"tags"}
                setDropdown={setDropdown}
                getDropdown={getDropdown}
              ></Collapse>
            </div>
          </div>

          {/* Overlay Mobile */}
          <div
            className="bg-zinc-950/70 h-full w-full"
            onClick={() => setSidebar((prev) => !prev)}
          ></div>
        </aside>

        <main className="bg-black min-w-0 flex-auto overflow-y-auto">
          <header className="bg-black sticky top-0 flex gap-3 z-10 p-3">
            <Button
              icon="layout-sidebar"
              onClick={() => setSidebar((prev) => !prev)}
            ></Button>

            <span className="border h-4 my-auto"></span>

            <Button className="text-white! text-xl! font-bold! lowercase mr-auto px-0!">
              eronime
            </Button>

            <Button rounded icon={"search"}></Button>

            <Button rounded icon={"bell"}></Button>

            {getTheme ? (
              <Button
                rounded
                icon={"moon-stars-fill"}
                onClick={() => setTheme((prev) => !prev)}
              ></Button>
            ) : (
              <Button
                rounded
                icon={"sun-fill"}
                onClick={() => setTheme((prev) => !prev)}
              ></Button>
            )}
          </header>

          {/* Navbar menu mobile only */}
          <div className="container mx-auto p-3 md:hidden">
            <NavbarX title={["page1", "page2", "page3", "page4"]} />
          </div>

          <PostScroll
            data={posts}
            row={"2"}
            slice={"12"}
            label={"Hot Porn Video"}
            ratio={"square"}
            example={"https://www.eronime.com/img/pah/1786343738451.webp"}
          ></PostScroll>

          <PostScroll
            data={posts}
            row={"1"}
            slice={"10"}
            label={"Hot Hentai Video"}
            ratio={"square"}
            example={"https://www.eronime.com/img/pah/1777809485628.webp"}
          ></PostScroll>
        </main>
      </div>
    </>
  );
}
