"use client";

import { useController } from "@/ui/Controller";
import { usePathname, useRouter } from "next/navigation";
import Button from "./uiButton";
import Divider from "./uiDivider";
import Label from "./uiLabel";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const {
    getSidebar,
    setSidebar,
    getSidebarMobile,
    setSidebarMobile,
    getCollapse,
    setCollapse,
  } = useController();

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

  const activity = [
    {
      href: "/bookmark",
      title: "bookmark",
      icon: "bookmark",
    },
    {
      href: "/reaction",
      title: "reaction",
      icon: "hand-thumbs-up",
    },
    {
      href: "/announcement",
      title: "announcement",
      icon: "bell",
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
        className={`dark:md:bg-black md:bg-white bg-zinc-900 md:sticky fixed flex flex-none flex-col left-0 top-0 z-40 h-screen md:translate-x-0 overflow-auto
        ${getSidebar ? "min-w-0" : "w-60"}
        ${getSidebarMobile ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex gap-2 p-2">
          <Button
            href={"/"}
            width="full"
            justify="start"
            variant="ghost"
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

        {getSidebar && <Divider />}

        <nav className="space-y-2 p-2">
          {!getSidebar && (
            <ul>
              <li>
                <Label title="Navigation" muted className="ml-2 text-xs" />
              </li>
            </ul>
          )}

          <ul className="space-y-2 p-2">
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
                  iconEnd={
                    !getSidebar
                      ? pathname === "/"
                        ? e.href === "/porn"
                          ? "record2 ml-auto"
                          : "record ml-auto"
                        : pathname === e.href
                        ? "record2 ml-auto"
                        : "record ml-auto"
                      : ""
                  }
                  variant={!getSidebar ? "ghost" : "base"}
                  radius={!getSidebar ? "default" : "rounded"}
                  width="full"
                  justify={!getSidebar ? "start" : "default"}
                >
                  {!getSidebar && e.title}
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        {getSidebar && <Divider />}

        <nav className="space-y-2 p-2">
          {!getSidebar && (
            <ul>
              <li>
                <Label title="Activity" muted className="ml-2 text-xs" />
              </li>
            </ul>
          )}

          <ul className="space-y-2 p-2">
            {activity.map((e, i) => (
              <li key={i}>
                <Button
                  icon={getCollapse === e.title ? `${e.icon}-fill` : e.icon}
                  iconEnd={
                    !getSidebar
                      ? getCollapse === e.title
                        ? "dash ml-auto"
                        : "plus ml-auto"
                      : ""
                  }
                  variant={!getSidebar ? "ghost" : "base"}
                  radius={!getSidebar ? "default" : "rounded"}
                  width="full"
                  justify={!getSidebar ? "start" : "default"}
                  onClick={() =>
                    getSidebar
                      ? router.push(e.href)
                      : getCollapse === e.title
                      ? setCollapse("")
                      : setCollapse(e.title)
                  }
                >
                  {!getSidebar && e.title}
                </Button>

                {getCollapse === e.title && (
                  <div className="ml-4 borderL border-dashed">
                    <div className="pl-2">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Button
                          key={i}
                          variant="ghost"
                          size="sm"
                          width="full"
                          justify="start"
                        >
                          asdasd
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:hidden mt-auto p-2">
          <Button
            icon="layout-sidebar-inset"
            variant={!getSidebar ? "base" : "baseActive"}
            radius={!getSidebar ? "default" : "rounded"}
            onClick={() => {
              setSidebar(!getSidebar);
              setCollapse("");
            }}
          />
        </div>
      </aside>
    </>
  );
}
