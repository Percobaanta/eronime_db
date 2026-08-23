"use client";

import { useState } from "react";
import Button from "@/ui/uiButton";
import Link from "next/link";

export default function NewPage() {
  const [getSidebar, setSidebar] = useState(false);
  const [getTheme, setTheme] = useState(false);

  return (
    <>
      <div className="flex h-screen overflow-auto">
        <aside
          className={`fixed top-0 left-0 z-20 h-screen  md:relative md:translate-x-0
          ${getSidebar ? "translate-x-0" : "-translate-x-full"}
          ${getSidebar ? "md:w-64 w-full" : "md:w-fit"}
        `}
        >
          <div
            className={`relative bg-zinc-950 border-r border-zinc-700/40 h-screen z-10 ${
              getSidebar ? "w-64" : "md:w-fit"
            }`}
          >
            <div className="flex justify-between gap-3 mb-6 p-3">
              {getSidebar ? (
                <Button
                  size="lg"
                  icon="chat-heart-fill"
                  className="text-white! text-xl! font-bold! lowercase gap-4!"
                >
                  eronime
                </Button>
              ) : (
                <Button
                  size="lg"
                  icon="chat-heart-fill"
                  className="text-white! text-xl! font-bold!"
                ></Button>
              )}

              {getSidebar && (
                <Button
                  size="lg"
                  icon="layout-sidebar"
                  className="md:hidden "
                  onClick={() => setSidebar(!getSidebar)}
                />
              )}
            </div>

            {getSidebar && <div className="mb-2 px-6 text-xs">Navigation</div>}

            <nav className="p-3" aria-label="Main navigation">
              <ul>
                <li>
                  {getSidebar ? (
                    <Button
                      size="lg"
                      icon="collection-play-fill"
                      className="w-full! justify-start gap-4"
                    >
                      Animated
                    </Button>
                  ) : (
                    <Button
                      size="lg"
                      icon="collection-play-fill"
                      className="w-full!"
                    />
                  )}
                </li>

                <li>
                  {getSidebar ? (
                    <Button
                      size="lg"
                      icon="images"
                      className="w-full! justify-start gap-4"
                    >
                      Cosplay
                    </Button>
                  ) : (
                    <Button size="lg" icon="images" className="w-full!" />
                  )}
                </li>
              </ul>
            </nav>
          </div>

          <div className="absolute inset-0 bg-zinc-950/80"></div>
        </aside>

        <main className="min-w-0 flex-1 overflow-y-auto bg-zinc-900">
          <header className="sticky top-0 z-10 flex gap-3 border-b border-zinc-700/40 bg-zinc-900 p-3">
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

          <div className="container mx-auto">
            <section className="p-3">
              <h1>New Uploaded</h1>

              {Array.from({ length: 60 }, (_, index) => (
                <article key={index}>
                  <h2>Title {index + 1}</h2>
                </article>
              ))}
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
