"use client";

import { useController } from "@/ui/Controller";
import { usePathname } from "next/navigation";
import Button from "./uiButton";
import Divider from "./uiDivider";
import Label from "./uiLabel";
import Setting from "./uiSetting";

export default function Header() {
  const pathname = usePathname();

  const {
    getPorn,
    getAnimated,
    getHentai,
    getCosplay,
    setSearch,
    getSidebar,
    setSidebar,
    getSidebarMobile,
    setSidebarMobile,
    getFilter,
    setFilter,
    getSort,
    setSort,
    getCreator,
    setCreator,
    getTag,
    setTag,
  } = useController();

  const getApi =
    pathname === "/" || pathname === "/porn"
      ? getPorn
      : pathname === "/animated"
      ? getAnimated
      : pathname === "/hentai"
      ? getHentai
      : getCosplay;

  // mengambil creator tanpa duplikat
  const creators = [...new Set(getApi?.flatMap((item) => item.xcreator || []))];

  // mengambil tag tanpa duplikat
  const tags = [...new Set(getApi?.flatMap((item) => item.xtags || []))];

  // multiple creator
  const toggleCreator = (creator) => {
    setCreator((prev) =>
      prev.includes(creator)
        ? prev.filter((item) => item !== creator)
        : [...prev, creator]
    );
  };

  // multiple tag
  const toggleTag = (tag) => {
    setTag((prev) =>
      prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]
    );
  };

  return (
    <>
      {/* Header */}
      <div className="bg-black sticky top-0 z-10">
        <div className="bg900s rounded flex justify-between gap-2 z-10">
          {/* Left Menu */}
          <div className="flex gap-2 p-2">
            <Button
              icon="layout-sidebar-inset"
              className="md:block! hidden!"
              onClick={() => setSidebar(!getSidebar)}
            ></Button>

            <Button
              icon="list"
              onClick={() => setSidebarMobile(!getSidebarMobile)}
              className="md:hidden flex-none"
            ></Button>

            <Divider border="vertical" className="mx-1" />

            <Button
              href={"/"}
              className="lowercase text-white! text-lg! font-semibold! md:hidden"
            >
              eronime
            </Button>

            <Button
              iconEnd={getFilter ? "dash" : "plus"}
              className="md:flex! hidden!"
              onClick={() => setFilter((prev) => !prev)}
            >
              filter
            </Button>
          </div>

          {/* Center Menu */}
          <div className="md:flex items-center hidden gap-2 p-2">
            <nav className="flex  gap-2 md:w-fit w-full overflow-auto scrollbar-none">
              <Button
                href={"/porn"}
                className="relative"
                onClick={() => {
                  setCreator([]), setTag([]);
                }}
              >
                porn
                {(pathname === "/" || pathname === "/porn") && (
                  <span className="absolute bottom-0 w-2 border border-white rounded-full"></span>
                )}
              </Button>

              <Button
                href={"/animated"}
                className="relative"
                onClick={() => {
                  setCreator([]), setTag([]);
                }}
              >
                animated
                {pathname === "/animated" && (
                  <span className="absolute bottom-0 w-2 border border-white rounded-full"></span>
                )}
              </Button>

              <Button
                href={"/hentai"}
                className="relative"
                onClick={() => {
                  setCreator([]), setTag([]);
                }}
              >
                hentai
                {pathname === "/hentai" && (
                  <span className="absolute bottom-0 w-2 border border-white rounded-full"></span>
                )}
              </Button>

              <Button
                href={"/cosplay"}
                className="relative"
                onClick={() => {
                  setCreator([]), setTag([]);
                }}
              >
                cosplay
                {pathname === "/cosplay" && (
                  <span className="absolute bottom-0 w-2 border border-white rounded-full"></span>
                )}
              </Button>

              <Button
                href={"/manhwa"}
                className="relative"
                onClick={() => {
                  setCreator([]), setTag([]);
                }}
              >
                manhwa
                {pathname === "/manhwa" && (
                  <span className="absolute bottom-0 w-2 border border-white rounded-full"></span>
                )}
              </Button>
            </nav>
          </div>

          {/* Right Menu */}
          <div className="flex gap-2 p-2">
            {pathname === "/search" ? (
              <div className="bg800 flex rounded-full overflow-auto">
                <Button icon={"search"}></Button>

                <input
                  className="bg800 w-full md:w-48 h-7 text-sm outline-0"
                  placeholder="Search..."
                  autoFocus
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            ) : (
              <Button href={"/search"} icon={"search"} radius="full">
                <span className="md:block hidden px-6">Search...</span>
              </Button>
            )}

            <Setting />
          </div>
        </div>
      </div>

      {/* Filter Mobile */}
      <div className="md:hidden flex justify-between gap-2 p-2">
        <Button
          iconEnd={getFilter ? "dash" : "plus"}
          variant="base"
          onClick={() => setFilter((prev) => !prev)}
        >
          filter
        </Button>

        <Divider border="vertical" />

        <nav className="flex gap-2 md:w-fit w-full overflow-auto scrollbar-none">
          <Button
            href={"/porn"}
            className="relative"
            onClick={() => {
              setCreator([]), setTag([]);
            }}
          >
            porn
            {(pathname === "/" || pathname === "/porn") && (
              <span className="absolute bottom-0 w-2 border border-white rounded-full"></span>
            )}
          </Button>

          <Button
            href={"/animated"}
            className="relative"
            onClick={() => {
              setCreator([]), setTag([]);
            }}
          >
            animated
            {pathname === "/animated" && (
              <span className="absolute bottom-0 w-2 border border-white rounded-full"></span>
            )}
          </Button>

          <Button
            href={"/hentai"}
            className="relative"
            onClick={() => {
              setCreator([]), setTag([]);
            }}
          >
            hentai
            {pathname === "/hentai" && (
              <span className="absolute bottom-0 w-2 border border-white rounded-full"></span>
            )}
          </Button>

          <Button
            href={"/cosplay"}
            className="relative"
            onClick={() => {
              setCreator([]), setTag([]);
            }}
          >
            cosplay
            {pathname === "/cosplay" && (
              <span className="absolute bottom-0 w-2 border border-white rounded-full"></span>
            )}
          </Button>

          <Button
            href={"/manhwa"}
            className="relative"
            onClick={() => {
              setCreator([]), setTag([]);
            }}
          >
            manhwa
            {pathname === "/manhwa" && (
              <span className="absolute bottom-0 w-2 border border-white rounded-full"></span>
            )}
          </Button>
        </nav>
      </div>

      {/* Filter Dropdown */}
      {getFilter && (
        <div className="p-2">
          <div className="bg900 min-h-48 max-h-72 flex-1 rounded-lg overflow-auto scrollbar-none">
            {/* --- sort section --- */}
            <div className="grid md:grid-cols-6 w-full borderB p-2">
              <div className="md:col-span-6 col-span-2">
                <Label title={"Sort by"} size="sm" className={"pl-2"} muted />
              </div>

              {[
                { id: "date", label: "date", icon: "arrow-down-short" },
                {
                  id: "date_down",
                  label: "date",
                  icon: "arrow-up-short",
                },
                {
                  id: "title",
                  label: "title",
                  icon: "arrow-down-short",
                },
                {
                  id: "title_down",
                  label: "title",
                  icon: "arrow-up-short",
                },
                { id: "view", label: "view", icon: "arrow-down-short" },
                {
                  id: "view_down",
                  label: "view",
                  icon: "arrow-up-short",
                },
              ].map((sortItem) => (
                <Button
                  key={sortItem.id}
                  size="sm"
                  width="full"
                  justify="start"
                  icon={getSort === sortItem.id ? "record-fill" : "record"}
                  iconEnd={`${sortItem.icon}`}
                  onClick={() => setSort(sortItem.id)}
                >
                  {sortItem.label}
                </Button>
              ))}
            </div>

            {/* ---  creator/brand/pornstar section --- */}
            <div className="grid md:grid-cols-6 grid-cols-2 w-full borderB p-2">
              <div className="md:col-span-6 col-span-2">
                <Label
                  title={"Actress (OR)"}
                  size="sm"
                  className={"pl-2"}
                  muted
                />
              </div>

              {creators.map((e, i) => (
                <Button
                  key={e}
                  size="sm"
                  width="full"
                  justify="start"
                  icon={getCreator.includes(e) ? "record-fill" : "record"}
                  variant={getCreator === e ? "active" : "default"}
                  onClick={() => toggleCreator(e)}
                >
                  {e}
                </Button>
              ))}
            </div>

            {/* --- tags section --- */}
            <div className="grid md:grid-cols-6 grid-cols-2 w-full p-2">
              <div className="md:col-span-6 col-span-2">
                <Label
                  title={"Tags (AND)"}
                  size="sm"
                  className={"pl-2"}
                  muted
                />
              </div>

              {tags.map((e) => (
                <Button
                  key={e}
                  size="sm"
                  width="full"
                  justify="start"
                  icon={getTag.includes(e) ? "record-fill" : "record"}
                  variant={getTag.includes(e) ? "active" : "default"}
                  onClick={() => toggleTag(e)}
                >
                  {e}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
