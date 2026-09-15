"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

import Button from "./uiButton";
import Divider from "./uiDivider";
import Label from "./uiLabel";

export default function Sidebar({
  getSidebarMobile,
  setSidebarMobile,
  getSidebar,
  setSidebar,
}) {
  const [getCollapse, setCollapse] = useState("");

  const pageMenu = [
    {
      name: "porn",
      icon: "play-btn",
      child: [
        {
          url: "#",
          title: "example bookmark example bookmark example bookmark 1",
        },
        {
          url: "#",
          title: "example bookmark example bookmark example bookmark 2",
        },
        {
          url: "#",
          title: "example bookmark example bookmark example bookmark 3",
        },
      ],
    },
    {
      name: "animated",
      icon: "play-btn",
      child: [
        { url: "#", title: "example announcement 1" },
        { url: "#", title: "example announcement 2" },
        { url: "#", title: "example announcement 3" },
      ],
    },
    {
      name: "hentai",
      icon: "play-btn",
      child: [
        { url: "#", title: "example setting 1" },
        { url: "#", title: "example setting 2" },
        { url: "#", title: "example setting 3" },
      ],
    },
    {
      name: "cosplay",
      icon: "image",
      child: [
        { url: "#", title: "example setting 1" },
        { url: "#", title: "example setting 2" },
        { url: "#", title: "example setting 3" },
      ],
    },
  ];

  const activity = [
    {
      name: "bookmark",
      icon: "bookmark",
      child: [
        {
          url: "#",
          title: "example bookmark example bookmark example bookmark 1",
        },
        {
          url: "#",
          title: "example bookmark example bookmark example bookmark 2",
        },
        {
          url: "#",
          title: "example bookmark example bookmark example bookmark 3",
        },
      ],
    },
    {
      name: "reaciton",
      icon: "hand-thumbs-up",
      child: [
        { url: "#", title: "judul" },
        { url: "#", title: "judul" },
        { url: "#", title: "example setting 3" },
      ],
    },
    {
      name: "announcement",
      icon: "bell",
      child: [
        { url: "#", title: "example announcement 1" },
        { url: "#", title: "example announcement 2" },
        { url: "#", title: "example announcement 3" },
      ],
    },
  ];

  return (
    <>
      {/* Overlay Mobile */}
      {getSidebarMobile && (
        <div
          onClick={() => setSidebarMobile(false)}
          className="fixed inset-0 z-30 bg-black/70 md:hidden"
        >
          <Button
            btnActive
            btnCircle
            icon={getSidebarMobile ? "x-lg" : "list"}
            onClick={() => setSidebarMobile(!getSidebarMobile)}
            className="absolute top-3 right-3"
          ></Button>
        </div>
      )}

      {/* Sidebar */}
      <aside
        className={`bg900 md:relative fixed left-0 top-0 z-40 h-screen md:translate-x-0 borderR overflow-auto
          ${getSidebar ? "min-w-0" : "w-60"}
          ${getSidebarMobile ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo */}
        <div className="bg900 sticky top-0 flex p-3">
          <div
            className={`flex min-w-0 items-center rounded-md gap-2 flex-1 
              ${getSidebar ? "p-0" : "hover:bg-zinc-800 p-2"}`}
          >
            <Button
              href={"/"}
              icon={"chat-heart-fill"}
              btnPrimary
              btnRounded
              btnOutline
              border
            ></Button>

            {!getSidebar && (
              <Button
                href={"/"}
                btnBlock
                className="lowercase text-base! font-semibold!"
              >
                eronime
              </Button>
            )}
          </div>
        </div>

        {getSidebar && <Divider />}

        {/* Navigation */}
        <nav className="p-3">
          {!getSidebar && (
            <Label size="sm" muted title="Navigation" className={"pl-2"} />
          )}

          <ul className="space-y-1">
            {pageMenu.map((item) => (
              <li key={item.name}>
                {/* Parent menu */}
                <div className="flex">
                  <Button
                    href={getSidebar && item.name}
                    icon={
                      getCollapse === item.name
                        ? `${item.icon}-fill`
                        : item.icon
                    }
                    btnBase
                    btnBlock
                    btnRounded={getSidebar}
                    onClick={() =>
                      getCollapse === item.name
                        ? setCollapse("")
                        : setCollapse(item.name)
                    }
                  >
                    {!getSidebar && item.name}
                  </Button>

                  {!getSidebar && (
                    <Button
                      href={item.name}
                      icon="arrow-right-short"
                      btnBase
                    ></Button>
                  )}
                </div>

                {/* Child menu */}
                {!getSidebar && getCollapse === item.name && (
                  <div className="ml-4">
                    <div className="pl-2 borderL border-dashed max-h-64 overflow-auto space-y-1">
                      {item.child.map((child, i) => (
                        <Button
                          key={i}
                          btnGhost
                          className="block! w-full! truncate! text-start"
                        >
                          {child.title}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {getSidebar && <Divider />}

        {/* Activity */}
        <nav className="p-3">
          {!getSidebar && (
            <Label size="sm" muted title="Activity" className={"pl-2"} />
          )}

          <ul className="space-y-1">
            {activity.map((item) => (
              <li key={item.name}>
                {/* Parent menu */}
                <div className="flex">
                  <Button
                    icon={
                      getCollapse === item.name
                        ? `${item.icon}-fill`
                        : item.icon
                    }
                    btnBase
                    btnBlock
                    btnRounded={getSidebar}
                    onClick={() =>
                      getCollapse === item.name
                        ? setCollapse("")
                        : setCollapse(item.name)
                    }
                  >
                    {!getSidebar && item.name}
                  </Button>

                  {!getSidebar && (
                    <Button
                      href={item.name}
                      icon="arrow-right-short"
                      btnBase
                    ></Button>
                  )}
                </div>

                {/* Child menu */}
                {!getSidebar && getCollapse === item.name && (
                  <div className="ml-4">
                    <div className="pl-2 borderL border-dashed max-h-64 overflow-auto space-y-1">
                      {item.child.map((child, i) => (
                        <Button
                          key={i}
                          btnGhost
                          className="block! w-full! truncate! text-start"
                        >
                          {child.title}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
