"use client";

import { createContext, useContext, useState } from "react";

import { usePathname, useRouter } from "next/navigation";

import ButtonX from "./uiButtonX";
import Label from "./uiLabel";
import Divider from "./uiDivider";

const ControllerContext = createContext(null);

export function useController() {
  return useContext(ControllerContext);
}

export function Controller({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const [getSidebar, setSidebar] = useState(false);
  const [getSidebarMobile, setSidebarMobile] = useState(false);
  const [getFilter, setFilter] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [getCollapse, setCollapse] = useState("");

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

  console.log(getCollapse);
  return (
    <ControllerContext.Provider
      value={{ getSidebar, setSidebar, theme, setTheme }}
    >
      {/* Overlay Mobile */}
      {getSidebarMobile && (
        <div
          onClick={() => setSidebarMobile(false)}
          className="fixed inset-0 z-30 bg-black/70 md:hidden"
        >
          <ButtonX
            icon={getSidebarMobile ? "x-lg" : "list"}
            onClick={() => setSidebarMobile(!getSidebarMobile)}
            className="absolute top-3 right-3"
          ></ButtonX>
        </div>
      )}

      {/* Sidebar */}
      <aside
        className={`bg900 md:sticky fixed flex flex-col left-0 top-0 z-40 h-screen md:translate-x-0 borderR overflow-auto
        ${getSidebar ? "min-w-0" : "w-60"}
        ${getSidebarMobile ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex gap-2 p-2">
          <ButtonX
            href={"/"}
            width="full"
            justify="start"
            variant="base"
            className={!getSidebar ? "p-2 h-min!" : "p-0!"}
          >
            <div className="bg-yellow-200 text-zinc-900 flex items-center justify-center rounded-xl size-8">
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
          </ButtonX>
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

          <ul className="space-y-2">
            {navigation.map((e, i) => (
              <li key={i}>
                <ButtonX
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
                  variant={!getSidebar ? "base" : "baseActive"}
                  radius={!getSidebar ? "default" : "rounded"}
                  width="full"
                  justify={!getSidebar ? "start" : "default"}
                >
                  {!getSidebar && e.title}
                </ButtonX>
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

          <ul className="space-y-2">
            {activity.map((e, i) => (
              <li key={i}>
                <ButtonX
                  icon={getCollapse === e.title ? `${e.icon}-fill` : e.icon}
                  iconEnd={
                    !getSidebar
                      ? getCollapse === e.title
                        ? "dash ml-auto"
                        : "plus ml-auto"
                      : ""
                  }
                  variant={!getSidebar ? "base" : "baseActive"}
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
                </ButtonX>

                {getCollapse === e.title && (
                  <div className="ml-4 borderL border-dashed">
                    <div className="pl-2">
                      {Array.from({ length: 5 }, (_, i) => (
                        <ButtonX
                          key={i}
                          variant="base"
                          size="sm"
                          width="full"
                          justify="start"
                        >
                          asdasd
                        </ButtonX>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:hidden mt-auto p-2">
          <ButtonX
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

      <main className="p-3">
        {/* Header */}
        <div className="bg900 border rounded-lg flex justify-between md:gap-3 gap-2 mb-3">
          {/* Left Menu */}
          <div className="flex md:gap-3 gap-1 p-2">
            <ButtonX
              icon="layout-sidebar-inset"
              variant="baseActive"
              className="md:block! hidden!"
              onClick={() => {
                setSidebar(!getSidebar);
                setCollapse("");
              }}
            ></ButtonX>

            <ButtonX
              icon="list"
              variant="baseActive"
              onClick={() => setSidebarMobile(!getSidebarMobile)}
              className="md:hidden flex-none"
            ></ButtonX>

            <Divider border="vertical" className="mx-1 md:block hidden" />

            <ButtonX
              iconEnd={getFilter ? "dash" : "plus"}
              variant="baseActive"
              className="md:block! hidden!"
              onClick={() => setFilter((prev) => !prev)}
            >
              {pathname === "/" || pathname === "/porn"
                ? "porn"
                : pathname === "/animated"
                ? "animated"
                : pathname === "/hentai"
                ? "hentai"
                : "cosplay"}
            </ButtonX>
          </div>

          {/* Center Menu */}
          <div className="relative flex md:gap-3 gap-1 p-2">
            <div className="md:flex hidden gap-3">
              <nav className="flex  gap-2 md:w-fit w-full overflow-auto scrollbar-none">
                <ButtonX href={"/porn"} variant="base" className="relative">
                  porn
                  {(pathname === "/" || pathname === "/porn") && (
                    <span className="absolute bottom-0 w-2 border-1 rounded"></span>
                  )}
                </ButtonX>

                <ButtonX href={"/animated"} variant="base" className="relative">
                  animated
                  {pathname === "/animated" && (
                    <span className="absolute bottom-0 w-2 border-1 rounded"></span>
                  )}
                </ButtonX>

                <ButtonX href={"/hentai"} variant="base" className="relative">
                  hentai
                  {pathname === "/hentai" && (
                    <span className="absolute bottom-0 w-2 border-1 rounded"></span>
                  )}
                </ButtonX>

                <ButtonX href={"/cosplay"} variant="base" className="relative">
                  cosplay
                  {pathname === "/cosplay" && (
                    <span className="absolute bottom-0 w-2 border-1 rounded"></span>
                  )}
                </ButtonX>

                <ButtonX href={"/manhwa"} variant="base" className="relative">
                  manhwa
                  {pathname === "/manhwa" && (
                    <span className="absolute bottom-0 w-2 border-1 rounded"></span>
                  )}
                </ButtonX>
              </nav>
            </div>

            <ButtonX
              href={"/"}
              icon={"chat-heart-fill"}
              className="lowercase text-base! font-semibold! md:hidden"
            >
              eronime
            </ButtonX>
          </div>

          {/* Right Menu */}
          <div className="flex md:gap-3 gap-1 p-2">
            {pathname === "/search" ? (
              <div className="bg800 flex rounded-md overflow-auto">
                <ButtonX icon={"search"}></ButtonX>

                <input
                  className="bg800 w-full md:w-48 h-7 text-sm outline-0"
                  autoFocus
                />
              </div>
            ) : (
              <ButtonX href={"/search"} icon={"search"}></ButtonX>
            )}

            <ButtonX icon={"bell"}></ButtonX>

            <ButtonX icon={"gear"}></ButtonX>
          </div>
        </div>

        {/* Filter Mobile */}
        <div className="md:flex hidden justify-between md:gap-3 gap-1">
          <nav className="flex gap-2 md:w-fit w-full overflow-auto scrollbar-none">
            <ButtonX href={"/porn"}>
              porn
              {(pathname === "/" || pathname === "/porn") && (
                <span className="absolute bottom-0 w-2 border-1 rounded"></span>
              )}
            </ButtonX>

            <ButtonX href={"/animated"}>
              animated
              {pathname === "/animated" && (
                <span className="absolute bottom-0 w-2 border-1 rounded"></span>
              )}
            </ButtonX>

            <ButtonX href={"/hentai"}>
              hentai
              {pathname === "/hentai" && (
                <span className="absolute bottom-0 w-2 border-1 rounded"></span>
              )}
            </ButtonX>

            <ButtonX href={"/cosplay"}>
              cosplay
              {pathname === "/cosplay" && (
                <span className="absolute bottom-0 w-2 border-1 rounded"></span>
              )}
            </ButtonX>

            <ButtonX href={"/manhwa"}>
              manhwa
              {pathname === "/manhwa" && (
                <span className="absolute bottom-0 w-2 border-1 rounded"></span>
              )}
            </ButtonX>
          </nav>

          <ButtonX
            iconEnd={"filter"}
            className="flex-none"
            onClick={() => setFilter((prev) => !prev)}
          >
            <span className="md:hidden">
              {pathname === "/" || pathname === "/porn"
                ? "porn"
                : pathname === "/animated"
                ? "animated"
                : pathname === "/hentai"
                ? "hentai"
                : "cosplay"}
            </span>
          </ButtonX>
        </div>

        {/* Filter Dropdown */}
        {getFilter && (
          <div className="bg900 min-h-64 max-h-96 flex-1 rounded-lg overflow-auto border">
            <div className="grid md:grid-cols-6 grid-cols-2 gap-x-6 gap-y-0 w-full borderB p-3">
              <ButtonX
                href={"/porn"}
                variant="baseActive"
                size="sm"
                width="full"
              >
                porn
              </ButtonX>
              <ButtonX
                href={"/animated"}
                variant="baseActive"
                size="sm"
                width="full"
              >
                animated
              </ButtonX>
              <ButtonX
                href={"/hentai"}
                variant="baseActive"
                size="sm"
                width="full"
              >
                hentai
              </ButtonX>
              <ButtonX
                href={"/cosplay"}
                variant="baseActive"
                size="sm"
                width="full"
              >
                cosplay
              </ButtonX>
            </div>

            <div className="grid md:grid-cols-6 grid-cols-2 gap-x-6 gap-y-0 w-full borderB p-3">
              <div className="md:col-span-6 col-span-2">
                <Label title={"Actress"} size="sm" className={"pl-2"} muted />
              </div>

              {Array.from({ length: 26 }, (_, i) => (
                <ButtonX key={i} icon={"record"}>
                  actress {i}
                  <Label title={"23"} size="sm" className={"ml-auto"} />
                </ButtonX>
              ))}
            </div>

            <div className="grid md:grid-cols-6 grid-cols-2 gap-x-6 gap-y-0 w-full p-3">
              <div className="md:col-span-6 col-span-2">
                <Label title={"Actress"} size="sm" className={"pl-2"} muted />
              </div>

              {Array.from({ length: 26 }, (_, i) => (
                <ButtonX key={i} icon={"record"}>
                  Tags {i}
                  <Label title={"23"} size="sm" className={"ml-auto"} />
                </ButtonX>
              ))}
            </div>
          </div>
        )}

        {/* Label */}
        <div className="mb-5">
          <Label
            className="text-2xl! font-bold! uppercase"
            h1
            title={
              pathname === "/" || pathname === "/porn" ? (
                <>
                  new porn <span className="textPrimary"> videos</span>
                </>
              ) : pathname === "/animated" ? (
                <>
                  new animated <span className="textPrimary"> videos</span>
                </>
              ) : pathname === "/hentai" ? (
                <>
                  new hentai <span className="textPrimary"> videos</span>
                </>
              ) : (
                <>
                  new cosplay <span className="textPrimary"> collection</span>
                </>
              )
            }
          />

          <p className="text-sm text-zinc-400">
            Showing results for your selected filters
          </p>
        </div>

        {children}
      </main>
    </ControllerContext.Provider>
  );
}
