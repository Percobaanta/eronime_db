"use client";

import { useState } from "react";
import Button from "@/ui/uiButton";
import Link from "next/link";

export default function NewPage() {
  const [getSidebar, setSidebar] = useState(true);
  const [getTheme, setTheme] = useState(true);

  return (
    <>
      <div className="flex h-screen overflow-auto">
        <aside
          className={`fixed top-0 left-0 md:relative overflow-hidden z-20
            ${getSidebar ? "md:min-w-64 w-0" : "md:w-fit w-full"}
          `}
        >
          <div
            className={`bg-zinc-950 relative z-10 h-screen p-3 borderR
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
                <li>
                  <Button
                    size="lg"
                    icon="collection-play-fill"
                    className="w-full! justify-start gap-4"
                  >
                    <div className={getSidebar ? "md:block" : "md:hidden"}>
                      animation
                    </div>
                  </Button>
                </li>
                <li>
                  <Button
                    size="lg"
                    icon="images"
                    className="w-full! justify-start gap-4"
                  >
                    <div className={getSidebar ? "md:block" : "md:hidden"}>
                      cosplay
                    </div>
                  </Button>
                </li>
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
                <li>
                  <Button
                    size="lg"
                    icon="bookmark-fill"
                    className="w-full! justify-start gap-4"
                  >
                    <div className={getSidebar ? "md:block" : "md:hidden"}>
                      Bookmark
                    </div>
                  </Button>
                </li>
                <li>
                  <Button
                    size="lg"
                    icon="clock-fill"
                    className="w-full! justify-start gap-4"
                  >
                    <div className={getSidebar ? "md:block" : "md:hidden"}>
                      History
                    </div>
                  </Button>
                </li>
              </ul>
            </nav>
          </div>

          {!getSidebar && (
            <div
              className="md:hidden absolute inset-0 bg-zinc-950/70 z-0"
              onClick={(e) => setSidebar(!getSidebar)}
            ></div>
          )}
        </aside>

        <main className="bg-zinc-900 min-w-0 flex-1 overflow-y-auto">
          <header className="sticky top-0  flex gap-3 borderB bg-zinc-900 p-3">
            <Button
              size="lg"
              icon="layout-sidebar"
              className="mr-auto"
              onClick={() => setSidebar(!getSidebar)}
            ></Button>

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

          <section className="container mx-auto p-3">
            <h1>New Uploaded</h1>

            {Array.from({ length: 60 }, (_, index) => (
              <article key={index}>
                <h2>Title {index + 1}</h2>
              </article>
            ))}
          </section>
        </main>
      </div>
    </>
  );
}
