"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import SidebarX from "@/ui/uiSidebarX";
import HeaderX from "@/ui/uiHeaderX";
import Filter from "@/ui/uiFilter";
import Card from "@/ui/uiCard";
import Button from "@/ui/uiButton";
import Label from "@/ui/uiLabel";
import Divider from "@/ui/uiDivider";
import Dropdown from "@/ui/uiDropdownX";

export default function App() {
  const param = useParams;

  // Req Api
  const [getDoodstream, setDoodstream] = useState([]);
  const [getStreamtape, setStreamtape] = useState([]);
  const [getPorn, setPorn] = useState([]);
  const [getAnimated, setAnimated] = useState([]);
  const [getHentai, setHentai] = useState([]);
  const [getCosplay, setCosplay] = useState([]);

  const [getSetting, setSetting] = useState(null);

  useEffect(() => {
    async function getApi() {
      const resDoodstream = await fetch("/api/apiDoodstream");
      const resStreamtape = await fetch("/api/apiStreamtape");
      const resPorn = await fetch("/api/apiPorn");
      const resAnimated = await fetch("/api/apiAnimated");
      const resHentai = await fetch("/api/apiHentai");
      const resCosplay = await fetch("/api/apiCosplay");

      const jsonDoodstream = await resDoodstream.json();
      const jsonStreamtape = await resStreamtape.json();
      const jsonPorn = await resPorn.json();
      const jsonAnimated = await resAnimated.json();
      const jsonHentai = await resHentai.json();
      const jsonCosplay = await resCosplay.json();

      setDoodstream(jsonDoodstream);
      setStreamtape(jsonStreamtape);
      setPorn(jsonPorn);
      setAnimated(jsonAnimated);
      setHentai(jsonHentai);
      setCosplay(jsonCosplay);
    }

    getApi();
  }, []);

  const pageMenu = [
    {
      name: "porn",
      icon: "collection-play",
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
      icon: "collection-play",
      child: [
        { url: "#", title: "example announcement 1" },
        { url: "#", title: "example announcement 2" },
        { url: "#", title: "example announcement 3" },
      ],
    },
    {
      name: "hentai",
      icon: "collection-play",
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

  const [getSidebar, setSidebar] = useState(false);
  const [getSidebarMobile, setSIdebarMobile] = useState(false);
  const [getCollapse, setCollapse] = useState("");
  const [getSearch, setSearch] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("setting");
    const initialSetting = stored
      ? JSON.parse(stored)
      : {
          theme: "dark",
          layout: "5",
          style: "square",
        };

    setSetting(initialSetting);
  }, []);

  return (
    <>
      <>
        {/* Overlay Mobile */}
        {getSidebarMobile && (
          <div
            onClick={() => setSIdebarMobile(false)}
            className="fixed inset-0 z-30 bg-black/70 md:hidden"
          >
            <Button
              btnActive
              btnCircle
              icon={getSidebarMobile ? "x-lg" : "list"}
              onClick={() => setSIdebarMobile(!getSidebarMobile)}
              className="absolute top-4 right-2"
            ></Button>
          </div>
        )}

        {/* Sidebar */}
        <aside
          className={`bg900 fixed left-0 top-0 z-40 h-screen md:translate-x-0 borderR overflow-auto
          ${getSidebar ? "min-w-0" : "w-60"}
          ${getSidebarMobile ? "translate-x-0" : "-translate-x-full"}
        `}
        >
          {/* Logo */}
          <div className="bg900 sticky top-0 flex p-2">
            <div
              className={`flex min-w-0 items-center rounded-md gap-2 flex-1 
              ${getSidebar ? "px-0 py-2" : "hover:bg-zinc-800 p-2"}`}
            >
              <Button
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

          {/* Page Menu */}
          <nav className="p-2">
            {!getSidebar && (
              <Label size="sm" muted title="Page Menu" className={"pl-2"} />
            )}

            <ul className="space-y-1">
              {pageMenu.map((item) => (
                <li key={item.name}>
                  {/* Parent menu */}
                  <div className="flex gap-2">
                    <Button
                      href={getSidebar && item.name}
                      icon={
                        getCollapse === item.name
                          ? `${item.icon}-fill`
                          : item.icon
                      }
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
          <nav className="p-2">
            {!getSidebar && (
              <Label size="sm" muted title="Activity" className={"pl-2"} />
            )}

            <ul className="space-y-1">
              {activity.map((item) => (
                <li key={item.name}>
                  {/* Parent menu */}
                  <div className="flex gap-2">
                    <Button
                      icon={
                        getCollapse === item.name
                          ? `${item.icon}-fill`
                          : item.icon
                      }
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

        {/* Main Content */}
        <main
          className={`h-screen w-full overflow-auto
          ${getSidebar ? "md:ml-11" : "md:ml-60"}
        `}
        >
          <div className="bg950 sticky top-0 px-2 py-4 flex-1">
            <div className="flex md:gap-3 gap-1">
              <Button
                icon={"layout-sidebar-inset"}
                className="md:inline-flex! hidden! md:mr-auto"
                onClick={() => setSidebar(!getSidebar)}
              ></Button>

              <Button
                icon={getSidebarMobile ? "x-lg" : "list"}
                onClick={() => setSIdebarMobile(!getSidebarMobile)}
                className="md:hidden"
              ></Button>

              {/* <Divider border="vertical" className={"mx-1"} /> */}

              <Button
                href={"/"}
                className="lowercase text-base! font-semibold! mr-auto md:hidden"
              >
                eronime
              </Button>

              <div className="bg800 flex rounded-md overflow-auto">
                <Button icon={"search"}></Button>

                <input className="bg800 w-full md:w-48 h-7 text-sm outline-0" />
              </div>

              <Button icon={"bell"}></Button>

              <Dropdown getSetting={getSetting} setSetting={setSetting} />

              <Button icon={"person-circle"}></Button>
            </div>
          </div>

          <div className="container mx-auto p-2">
            <div
              className={`grid gap-3 mb-5 p-3 ${
                getSetting?.layout === "5"
                  ? "md:grid-cols-5 grid-cols-2"
                  : "md:grid-cols-6 grid-cols-3"
              }`}
            >
              {Array.from({ length: 100 }, (_, i) => (
                <div
                  key={i}
                  className={`bg900 rounded-lg ${
                    getSetting?.style === "square"
                      ? "aspect-square"
                      : getSetting?.style === "landscape"
                      ? "aspect-[3/2]"
                      : "aspect-[2/3]"
                  }`}
                >
                  asd
                </div>
              ))}
            </div>
          </div>
        </main>
      </>

      {/* <SidebarX getSidebar={getSidebar} setSidebar={setSidebar} /> */}
      {/* <div className="w-full h-screen overflow-auto  hidden">
        <HeaderX
          setSidebar={setSidebar}
          getSetting={getSetting}
          setSetting={setSetting}
        />

        <Filter />

        <main>
          <Card getSetting={getSetting} setSetting={setSetting} />
        </main>
      </div> */}
    </>
  );
}
