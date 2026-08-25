"use client";

import { useState } from "react";
import Button from "@/ui/uiButton";
import Link from "next/link";
import NavbarX from "@/ui/uiNavbarX";
import PostScroll from "@/ui/uiPostScroll";

export default function NewPage() {
  const [getSidebar, setSidebar] = useState(true);
  const [getTheme, setTheme] = useState(true);
  const [getCollapse, setCollapse] = useState(false);

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
            getSidebar ? "md:w-64 w-0 md:flex hidden" : "md:w-fit flex w-64"
          } bg-zinc-900 fixed top-0 left-0 md:relative z-20 borderR`}
        >
          <div
            className={`${
              getSidebar ? "md:w-fit w-0" : "md:w-fit w-fit"
            } bg-zinc-950 relative z-10 h-screen p-3`}
          >
            {/* logo */}
            <div className="mb-5">
              <Button icon="chat-heart-fill" variant="primary"></Button>
            </div>

            {/* navigation icon */}
            <nav className="mb-3" aria-label="Main Navigation">
              <ul className="space-y-3">
                {[
                  "person-video",
                  "person-vcard-fill",
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

          <div
            className={`overflow-y-scroll ${
              getSidebar ? "md:w-full" : "md:w-0 w-64"
            }`}
          >
            <div className="bg-zinc-900 sticky top-0 flex justify-between gap-3 p-3 pb-0 mb-5">
              <Button
                variant="baseActive"
                icon="collection-play-fill"
                iconEnd="caret-down-fill"
                className="w-full! justify-between!"
                onClick={() => setCollapse((prev) => !prev)}
              >
                Porn
              </Button>

              <Button
                variant="baseActive"
                icon="layout-sidebar"
                className="flex-none md:hidden"
                onClick={() => setSidebar((prev) => !prev)}
              ></Button>

              {getCollapse && (
                <div className="absolute top-full left-0 z-10 w-full p-3">
                  <div className="bg-zinc-800 rounded-lg">
                    <Button className="w-full! justify-start">Porn</Button>
                    <Button className="w-full! justify-start">Animated</Button>
                    <Button className="w-full! justify-start">Cosplay</Button>
                    <Button className="w-full! justify-start">Hentai</Button>
                  </div>
                </div>
              )}
            </div>

            {/* Sort */}
            <nav className="px-3 mb-3" aria-label="Main Navigation">
              <span className={`text-xs font-bold py-2`}>Sort</span>

              <ul className="max-h-64 overflow-y-scroll rounded-lg">
                {["Sort 1", "Sort 2", "Sort 3", "Sort 4"].map((e, i) => {
                  return (
                    <ul key={i}>
                      <Button
                        size="sm"
                        icon="arrow-return-right text-[8px]"
                        variant={i == 2 ? "baseActive" : "ghost"}
                        className="w-full! justify-start!"
                      >
                        {e}
                        <span className="bg-zinc-800 size-4 text-[8px] flex justify-center items-center rounded ml-auto">
                          12
                        </span>
                      </Button>
                    </ul>
                  );
                })}
              </ul>
            </nav>

            {/* Actress */}
            <nav className="px-3 mb-3" aria-label="Main Navigation">
              <span className={`text-xs font-bold py-2`}>Actress</span>

              <ul className="max-h-64 overflow-y-scroll rounded-lg">
                {["Actress 1", "Actress 2", "Actress 3", "Actress 4"].map(
                  (e, i) => {
                    return (
                      <ul key={i}>
                        <Button
                          size="sm"
                          icon="arrow-return-right text-[8px]"
                          variant={i == 2 ? "baseActive" : "ghost"}
                          className="w-full! justify-start!"
                        >
                          {e}
                          <span className="bg-zinc-800 size-4 text-[8px] flex justify-center items-center rounded ml-auto">
                            12
                          </span>
                        </Button>
                      </ul>
                    );
                  }
                )}
              </ul>
            </nav>

            {/* Tags */}
            <nav className="px-3 mb-3" aria-label="Main Navigation">
              <span className={`text-xs font-bold py-2`}>Tags</span>

              <ul className="max-h-64 overflow-y-scroll rounded-lg">
                {[
                  "Tags 1",
                  "Tags 2",
                  "Tags 3",
                  "Tags 4",
                  "Tags 1",
                  "Tags 2",
                  "Tags 3",
                  "Tags 4",
                  "Tags 2",
                  "Tags 3",
                  "Tags 4",
                  "Tags 1",
                  "Tags 2",
                  "Tags 3",
                  "Tags 4",
                ].map((e, i) => {
                  return (
                    <ul key={i}>
                      <Button
                        size="sm"
                        icon="arrow-return-right text-[8px]"
                        variant={i == 2 ? "baseActive" : "ghost"}
                        className="w-full! justify-start!"
                      >
                        {e}
                        <span className="bg-zinc-800 size-4 text-[8px] flex justify-center items-center rounded ml-auto">
                          12
                        </span>
                      </Button>
                    </ul>
                  );
                })}
              </ul>
            </nav>
          </div>

          {!getSidebar && (
            <div
              className="bg-zinc-950/50 md:hidden absolute top-0 -right-full h-full w-full z-10"
              onClick={(e) => setSidebar(!getSidebar)}
            ></div>
          )}
        </aside>

        <main className="bgBody min-w-0 flex-1 overflow-y-auto">
          <header className="bgBody borderB sticky top-0 flex gap-3 z-10 p-3">
            <Button
              variant="baseActive"
              icon="layout-sidebar"
              onClick={() => setSidebar((prev) => !prev)}
            ></Button>

            <Button className="text-white! text-xl! font-bold! lowercase mr-auto px-0!">
              <div className={getSidebar ? "md:hidden" : ""}>eronime</div>
            </Button>

            <Button variant="baseActive" rounded icon={"search"}></Button>

            <Button variant="baseActive" rounded icon={"bell"}></Button>

            {getTheme ? (
              <Button
                variant="baseActive"
                rounded
                icon={"moon-stars-fill"}
                onClick={() => setTheme((prev) => !prev)}
              ></Button>
            ) : (
              <Button
                variant="baseActive"
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
