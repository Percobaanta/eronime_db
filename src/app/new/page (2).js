"use client";

import { useState } from "react";
import Button from "@/ui/uiButton";
import Link from "next/link";

export default function NewPage() {
  const [getSidebar, setSidebar] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-30 w-full">
        <div className="flex">
          <div className="bg-[#192231] flex-none w-64 p-4 border">
            <Button
              size="lg"
              icon="layout-sidebar"
              onClick={() => setSidebar(!getSidebar)}
            />
          </div>
          <div className="bg-zinc-800 w-full p-4"></div>
        </div>
      </header>

      <div className="flex min-h-screen pt-10">
        <aside
          className={`fixed left-0 top-10 bottom-0 z-20 w-64 bg-[#192231] p-5  transition-all duration-300
          ${getSidebar ? "translate-x-0 w-64" : "-translate-x-full w-64"}
          ${getSidebar ? "md:w-64" : "md:w-20"}`}
        >
          Sidebar
        </aside>

        <main className="min-h-screen flex-1 overflow-y-auto pl-64">
          <div className="container mx-auto bg-zinc-800">
            <section className="p-3!">
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

      <div className="flex h-screen overflow-hidden bg-[#192231] hidden">
        <aside
          className={`fixed top-0 left-0 z-20 h-screen bg-[#192231] border-r border-[#2c3a4e] transition-all duration-300 md:relative md:translate-x-0
          ${getSidebar ? "translate-x-0 w-64" : "-translate-x-full w-64"}
          ${getSidebar ? "md:w-64" : "md:w-20"}
        `}
        >
          <div className="flex justify-between gap-3 mb-6 p-3">
            <Button size="lg" icon="back text-indigo-400" />

            {getSidebar && (
              <Button
                size="lg"
                icon="layout-sidebar"
                onClick={() => setSidebar(!getSidebar)}
              />
            )}
          </div>

          {getSidebar && <div className="mb-4 px-3 text-xs">Navigation</div>}

          <nav aria-label="Main navigation">
            <ul className="space-y-2 px-3">
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
        </aside>

        <main className="min-w-0 flex-1 overflow-y-auto bg-[#1f2937]">
          <div className="container mx-auto">
            <header className="sticky top-0 z-10 flex gap-3 border-b border-[#2c3a4e] bg-[#1f2937] p-3">
              <Button
                size="lg"
                icon="list"
                onClick={() => setSidebar(!getSidebar)}
              >
                cosplay
              </Button>

              <input
                type="search"
                placeholder="Search..."
                className="w-full md:max-w-96 rounded-md! border border-[#2c3a4e] bg-[#2a3441] px-4 py-1 text-sm outline-none mr-auto"
              />

              <Button size="lg">About</Button>
              <Button size="lg">Tos</Button>
              <Button size="lg">Profile</Button>
            </header>

            <section className="p-3!">
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
