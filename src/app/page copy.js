"use client";

import { useState } from "react";
import Button from "@/ui/uiButton";
import Link from "next/link";
import NavbarX from "@/ui/uiFilter";
import PostScroll from "@/ui/uiPostScroll";
import Dropdown from "@/ui/uiDropdown";
import Collapse from "@/ui/uiCollapse";
import NavbarY from "@/ui/uiNavbarY";
import Theme from "@/ui/uiTheme";
import Divider from "@/ui/uiDivider";
import Label from "@/ui/uiLabel";
import Post from "@/ui/uiPost";
import Sidebar from "@/ui/uiSidebar";

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
        <Sidebar getSidebar={getSidebar} setSidebar={setSidebar} />
        {/* SIDEBAR END */}

        {/* MAIN START */}
        <main className="bg950 w-full overflow-auto">
          <header className="bg950 sticky top-0 flex gap-3 z-10 p-3 borderB">
            <Button
              icon={"layout-sidebar"}
              onClick={() => setSidebar((prev) => !prev)}
            ></Button>

            <Divider border={"vertical"} />

            <Button className="text-white! text-xl! font-bold! lowercase px-0! mr-auto">
              eronime
            </Button>

            <Button icon={"search"}></Button>

            <Button icon={"bell"}></Button>

            <Theme></Theme>
          </header>

          <NavbarX />

          <Post />

          {/* <PostScroll
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
          ></PostScroll> */}
        </main>
        {/* SIDEBAR END */}
      </div>
    </>
  );
}
