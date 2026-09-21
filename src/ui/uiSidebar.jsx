"use client";

import { useController } from "@/ui/Controller";
import { usePathname, useRouter } from "next/navigation";
import Button from "./uiButton";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const { getSidebar, setSidebar, getSidebarMobile, setSidebarMobile } =
    useController();

  const navigation = [
    {
      href: "/porn",
      title: "porn",
      icon: "play-btn",
    },
    {
      href: "/animated",
      title: "animated",
      icon: "play-btn",
    },
    {
      href: "/hentai",
      title: "hentai",
      icon: "play-btn",
    },
    {
      href: "/cosplay",
      title: "cosplay",
      icon: "image",
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
            variant="baseActive"
            radius="full"
            icon={getSidebarMobile ? "x-lg" : "list"}
            onClick={() => setSidebarMobile(!getSidebarMobile)}
            className="absolute top-4 right-6"
          ></Button>
        </div>
      )}

      {/* Sidebar */}
      <aside
        className={`dark:md:bg-black md:bg-white bg-zinc-900 md:sticky fixed flex flex-none flex-col gap-5 left-0 top-0 z-40 h-screen md:translate-x-0 overflow-auto
        ${getSidebar ? "min-w-0" : "w-60"}
        ${getSidebarMobile ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="md:bg-black bg-zinc-900 sticky top-0 flex gap-2">
          <Button
            href={"/"}
            width="full"
            justify="start"
            className={!getSidebar ? "p-2 h-min!" : "h-min! p-2!"}
          >
            <div className="bg-indigo-500 text-zinc-100 flex items-center justify-center rounded-xl size-8">
              <i className="bi bi-chat-heart-fill text-[18px]" />
            </div>

            {!getSidebar && (
              <div className="flex flex-col leading-4">
                <label className="lowercase text-[18px] font-semibold!">
                  eronime
                </label>
                <label className="text-[10px]">v.1.0.0</label>
              </div>
            )}
          </Button>
        </div>

        {getSidebar ? (
          <nav className="p-2">
            <ul className="space-y-2">
              {navigation.map((e, i) => (
                <li key={i}>
                  <Button
                    href={e.href}
                    icon={
                      pathname === "/"
                        ? e.href === "/porn"
                          ? `${e.icon}-fill`
                          : e.icon
                        : pathname === e.href
                        ? `${e.icon}-fill`
                        : e.icon
                    }
                    variant={
                      pathname === "/"
                        ? e.href === "/porn"
                          ? "baseActive"
                          : "base"
                        : pathname === e.href
                        ? "baseActive"
                        : "base"
                    }
                    radius="rounded"
                  ></Button>
                </li>
              ))}
            </ul>
          </nav>
        ) : (
          <nav className="space-y-2 p-2">
            {!getSidebar && (
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <div className="bg-zinc-800 flex items-center justify-center size-6 text-xs rounded">
                  <i className="bi bi-layers" />
                </div>

                <p>NAVIGATION</p>
              </div>
            )}

            <ul className="border-l border-dashed border-zinc-800 ml-3 pl-3">
              {navigation.map((e, i) => (
                <li key={i}>
                  <Button
                    href={e.href}
                    iconEnd={
                      !getSidebar
                        ? pathname === "/"
                          ? e.href === "/porn" && "dot ml-auto"
                          : pathname === e.href && "dot ml-auto"
                        : ""
                    }
                    variant={
                      !getSidebar
                        ? pathname === "/"
                          ? e.href === "/porn"
                            ? "active"
                            : "default"
                          : pathname === e.href
                          ? "active"
                          : "default"
                        : ""
                    }
                    width="full"
                    justify="start"
                  >
                    {!getSidebar && e.title}
                  </Button>
                </li>
              ))}
            </ul>

            {!getSidebar && (
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <div className="bg-zinc-800 flex items-center justify-center size-6 text-xs rounded">
                  <i className="bi bi-bookmark" />
                </div>

                <p>BOOKMARK</p>
              </div>
            )}

            <ul className="border-l border-dashed border-zinc-800 ml-3 pl-3">
              {navigation.map((e, i) => (
                <li key={i}>
                  <Button href={"#"} width="full" justify="start">
                    {!getSidebar && e.title}
                  </Button>
                </li>
              ))}
            </ul>

            {!getSidebar && (
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <div className="bg-zinc-800 flex items-center justify-center size-6 text-xs rounded">
                  <i className="bi bi-hand-thumbs-up" />
                </div>

                <p>REACTION</p>
              </div>
            )}

            <ul className="border-l border-dashed border-zinc-800 ml-3 pl-3">
              {navigation.map((e, i) => (
                <li key={i}>
                  <Button href={"#"} width="full" justify="start">
                    {!getSidebar && e.title}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div className="md:hidden mt-auto p-2">
          <Button
            icon="layout-sidebar-inset"
            variant={!getSidebar ? "base" : "baseActive"}
            radius={!getSidebar ? "default" : "rounded"}
            onClick={() => setSidebar(!getSidebar)}
          />
        </div>
      </aside>
    </>
  );
}
