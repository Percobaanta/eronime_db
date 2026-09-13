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

export default function App() {
  const param = useParams;

  // Req Api
  const [getDoodstream, setDoodstream] = useState([]);
  const [getStreamtape, setStreamtape] = useState([]);
  const [getPorn, setPorn] = useState([]);
  const [getAnimated, setAnimated] = useState([]);
  const [getHentai, setHentai] = useState([]);
  const [getCosplay, setCosplay] = useState([]);

  // Global state
  // const [getSidebar, setSidebar] = useState(true);
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

  return (
    <>
      <>
        {/* Overlay Mobile */}
        {getSidebarMobile && (
          <div
            onClick={() => setSIdebarMobile(false)}
            className="fixed inset-0 z-30 bg-black/50 md:hidden"
          ></div>
        )}

        {/* Sidebar */}
        <aside
          className={`bg900 fixed left-0 top-0 z-40 h-screen transition-all md:translate-x-0 borderR overflow-auto
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
              <Button icon={"chat-heart-fill"} btnPrimary btnRounded></Button>

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
          className={`h-screen transition-all w-full overflow-auto
          ${getSidebar ? "md:ml-12" : "md:ml-60"}
        `}
        >
          <div className="bg950 sticky top-0 px-2 py-4 flex-1 borderB">
            <div className="flex gap-2">
              {/* Collapse Button */}
              <Button
                icon={"layout-sidebar-inset"}
                className="md:inline-flex! hidden!"
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
                iconEnd={"arrow-down-short"}
                className="mr-auto"
              >
                Porn
              </Button>

              {getSearch && (
                <input
                  className="bg900 rounded-md w-full md:w-48 h-7 px-4 text-sm outline-0"
                  autoFocus
                ></input>
              )}

              <Button
                icon={"search"}
                onClick={() => setSearch(!getSearch)}
              ></Button>

              <Button icon={"bell"}></Button>

              <Button icon={"gear"}></Button>

              <Button icon={"person-circle"}>
                <span className="md:block hidden">dashboard</span>
              </Button>
            </div>
          </div>

          {Array.from({ length: 5 }, (_, i) => (
            <div key={i} className="p-10">
              {i}
            </div>
          ))}
        </main>
      </>

      {/* <SidebarX getSidebar={getSidebar} setSidebar={setSidebar} /> */}
      <div className="w-full h-screen overflow-auto  hidden">
        <HeaderX
          setSidebar={setSidebar}
          getSetting={getSetting}
          setSetting={setSetting}
        />

        <Filter />

        <main>
          <Card getSetting={getSetting} setSetting={setSetting} />
        </main>
      </div>
    </>
  );
}
