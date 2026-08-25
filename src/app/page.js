"use client";

import { useState } from "react";
import Button from "@/ui/uiButton";
import Link from "next/link";
import NavbarX from "@/ui/uiNavbarX";
import PostScroll from "@/ui/uiPostScroll";

export default function NewPage() {
  const [getSidebar, setSidebar] = useState(true);
  const [getTheme, setTheme] = useState(true);

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
      <div className="flex h-screen overflow-auto">
        <aside
          className={`${
            getSidebar ? "md:min-w-64 w-0" : "md:w-fit w-full"
          } bg-zinc-950 fixed top-0 left-0 md:relative overflow-hidden z-20 flex borderR hidden`}
        >
          <div
            className={`${
              getSidebar ? "md:w-fit w-0" : "md:w-fit w-64"
            } bg-zinc-900 relative z-10 h-screen p-3`}
          >
            {/* logo */}
            <div className="flex justify-between gap-3 mb-5">
              <Button icon="chat-heart-fill" variant="primary"></Button>
            </div>

            {/* navigation icon */}
            <nav className="mb-3" aria-label="Main Navigation">
              <ul>
                {[
                  "collection-play-fill",
                  "collection-play-fill",
                  "collection-play-fill",
                  "images",
                ].map((e, i) => {
                  return (
                    <ul key={i}>
                      <Button
                        icon={e}
                        variant={i == 0 ? "baseActive" : "ghost"}
                      ></Button>
                    </ul>
                  );
                })}
              </ul>
            </nav>
          </div>

          {getSidebar && (
            <div className="w-full p-3">
              <div className="flex justify-between gap-3 mb-5">
                <Button className="text-white! font-semibold! lowercase w-full">
                  eronime
                </Button>
              </div>

              {/* navigation menu */}
              <nav className="mb-3" aria-label="Main Navigation">
                <span
                  className={`text-xs py-2 ${
                    getSidebar ? "block" : "md:hidden block"
                  }`}
                >
                  Porn Page
                </span>

                <ul>
                  {["tag1", "Animated", "Hentai", "Cosplay"].map((e, i) => {
                    return (
                      <ul key={i}>
                        <Button
                          icon={e}
                          className="w-full! justify-start borderL rounded-none!"
                        >
                          {e}
                        </Button>
                      </ul>
                    );
                  })}
                </ul>
              </nav>
            </div>
          )}

          {/* {!getSidebar && (
            <div
              className="bg-zinc-950/70 md:hidden absolute inset-0  z-0"
              onClick={(e) => setSidebar(!getSidebar)}
            ></div>
          )} */}
        </aside>

        <aside
          className={`fixed top-0 left-0 md:relative overflow-hidden z-20
            ${getSidebar ? "md:min-w-64 w-0" : "md:w-fit w-full"}
          `}
        >
          <div
            className={`bgPrimary relative z-10 h-screen p-3 borderR
             ${getSidebar ? "md:w-64 w-0" : "md:w-fit w-64"}
          `}
          >
            {/* logo */}
            <div className="flex justify-between gap-3 mb-5">
              <Button
                size="lg"
                icon="chat-heart-fill"
                className="text-white! text-xl! font-bold! lowercase"
              >
                <div className={getSidebar ? "md:block" : "md:hidden"}>
                  eronime
                </div>
              </Button>

              {!getSidebar && (
                <Button
                  size="lg"
                  icon="layout-sidebar"
                  className="md:hidden"
                  onClick={(e) => setSidebar(!getSidebar)}
                ></Button>
              )}
            </div>

            {/* navigation menu */}
            <nav className="mb-3" aria-label="Main Navigation">
              <span
                className={`text-xs px-3 py-2 ${
                  getSidebar ? "block" : "md:hidden block"
                }`}
              >
                Navigation
              </span>

              <ul>
                {[
                  {
                    title: "Porn",
                    icon: "collection-play-fill",
                  },
                  {
                    title: "Animated",
                    icon: "collection-play-fill",
                  },
                  {
                    title: "Hentai",
                    icon: "collection-play-fill",
                  },
                  {
                    title: "Cosplay",
                    icon: "images",
                  },
                ].map((doc, i) => {
                  return (
                    <ul key={i}>
                      <Button
                        size="lg"
                        icon={doc.icon}
                        className="w-full! justify-start gap-4"
                      >
                        <div className={getSidebar ? "md:block" : "md:hidden"}>
                          {doc.title}
                        </div>
                      </Button>
                    </ul>
                  );
                })}
              </ul>
            </nav>

            {/* navigation activity */}
            <nav className="mb-3" aria-label="Main Navigation">
              <span
                className={`text-xs px-3 py-2 ${
                  getSidebar ? "block" : "md:hidden block"
                }`}
              >
                Activity
              </span>

              <ul>
                {[
                  {
                    title: "Bookmark",
                    icon: "bookmark-fill",
                  },
                  {
                    title: "History",
                    icon: "clock-fill",
                  },
                ].map((doc, i) => {
                  return (
                    <ul key={i}>
                      <Button
                        size="lg"
                        icon={doc.icon}
                        className="w-full! justify-start gap-4"
                      >
                        <div className={getSidebar ? "md:block" : "md:hidden"}>
                          {doc.title}
                        </div>
                      </Button>
                    </ul>
                  );
                })}
              </ul>
            </nav>
          </div>

          {!getSidebar && (
            <div
              className="bg-zinc-950/70 md:hidden absolute inset-0  z-0"
              onClick={(e) => setSidebar(!getSidebar)}
            ></div>
          )}
        </aside>

        <main className="bgBody min-w-0 flex-1 overflow-y-auto">
          <header className="bgBody borderB sticky top-0 flex gap-3 z-10 p-3">
            <Button
              size="lg"
              icon="layout-sidebar"
              onClick={() => setSidebar(!getSidebar)}
            ></Button>

            <Button
              size="lg"
              className="text-white! text-xl! font-bold! lowercase mr-auto"
            >
              <div className={getSidebar ? "md:hidden" : ""}>eronime</div>
            </Button>

            <Button size="lg" icon={"search"}></Button>

            <Button size="lg" icon={"bell"}></Button>

            {getTheme ? (
              <Button
                size="lg"
                icon={"moon-stars-fill"}
                onClick={() => setTheme(!getTheme)}
              ></Button>
            ) : (
              <Button
                size="lg"
                icon={"sun-fill"}
                onClick={() => setTheme(!getTheme)}
              ></Button>
            )}
          </header>

          {/* Navbar menu mobile only */}
          <div className="container mx-auto p-3 md:hidden">
            <NavbarX title={["page1", "page2", "page3", "page4"]} />
          </div>

          <PostScroll
            data={posts}
            row={2}
            slice={12}
            label={"Hot Porn Video"}
            ratio={"5/3"}
            example={"https://www.eronime.com/img/pah/1786343738451.webp"}
          ></PostScroll>

          <PostScroll
            data={posts}
            row={1}
            slice={10}
            label={"Hot Hentai Video"}
            ratio={"2/2.5"}
            example={"https://www.eronime.com/img/pah/1777809485628.webp"}
          ></PostScroll>
        </main>
      </div>
    </>
  );
}
