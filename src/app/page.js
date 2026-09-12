"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import SidebarX from "@/ui/uiSidebarX";
import HeaderX from "@/ui/uiHeaderX";
import Filter from "@/ui/uiFilter";
import Card from "@/ui/uiCard";
import Button from "@/ui/uiButton";
import Label from "@/ui/uiLabel";

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

  const menu = [
    {
      name: "porn",
      icon: "person-video2",
    },
    {
      name: "animated",
      icon: "person-vcard-fill",
    },
    {
      name: "hentai",
      icon: "collection-play-fill",
    },
    {
      name: "cosplay",
      icon: "images",
    },
  ];

  const activity = [
    {
      name: "bookmark",
      icon: "bookmark-fill",
    },
    {
      name: "announcement",
      icon: "bell-fill",
    },
    {
      name: "setting",
      icon: "gear-fill",
    },
  ];

  const [getSidebar, setSidebar] = useState(false);
  const [getSidebarMobile, setSIdebarMobile] = useState(false);
  const [getCollapse, setCollapse] = useState("");

  return (
    <>
      <>
        {/* Mobile Button */}
        <Button
          btnActive
          icon={getSidebarMobile ? "x-lg" : "list"}
          onClick={() => setSIdebarMobile(!getSidebarMobile)}
          className="fixed right-2 top-2 z-50  md:hidden"
        ></Button>

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
          ${getSidebar ? "min-w-0" : "w-52"}
          ${getSidebarMobile ? "translate-x-0" : "-translate-x-full"}
        `}
        >
          {/* Logo */}
          <div className="bg900 sticky top-0 flex p-2">
            <div
              className={`flex min-w-0 items-center rounded-xl gap-3 flex-1 ${
                getSidebar ? "px-0 py-2" : "bg800 p-2"
              }`}
            >
              <Button icon={"chat-heart-fill"} btnPrimary btnRounded></Button>

              {!getSidebar && (
                <Button
                  href={"/"}
                  // icon={"chat-heart-fill"}
                  btnBlock
                  className="lowercase text-xl! font-semibold!"
                >
                  eronime
                </Button>
              )}
            </div>
          </div>

          {/* Menu */}
          <nav className="p-2">
            {!getSidebar && <Label muted title="Page" className={"pl-3"} />}

            <ul className="space-y-1">
              {menu.map((item) => (
                <li key={item.name}>
                  <Button
                    href={item.name}
                    icon={item.icon}
                    btnActive
                    btnBlock
                    btnSm
                    btnRounded={getSidebar}
                  >
                    {!getSidebar && item.name}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="p-2">
            {!getSidebar && <Label muted title="Page" className={"pl-3"} />}

            <ul className="space-y-1">
              {menu.map((item) => (
                <li key={item.name}>
                  <Button
                    href={item.name}
                    icon={item.icon}
                    btnActive
                    btnBlock
                    btnLg
                    btnRounded={getSidebar}
                  >
                    {!getSidebar && item.name}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="p-2">
            {!getSidebar && <Label muted title="Page" className={"pl-3"} />}

            <ul className="space-y-1">
              {menu.map((item) => (
                <li key={item.name}>
                  <Button
                    href={item.name}
                    icon={item.icon}
                    btnActive
                    btnBlock
                    btnRounded={getSidebar}
                  >
                    {!getSidebar && item.name}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Activity */}
          <nav className="p-2">
            {!getSidebar && <Label muted title="Activity" className={"pl-3"} />}

            <ul className="space-y-1">
              {activity.map((item) => (
                <li key={item.name}>
                  <Button
                    icon={item.icon}
                    iconEnd={!getSidebar && "arrow-right-short"}
                    btnBlock
                    btnActive
                    btnRounded={getSidebar}
                    onClick={() =>
                      getCollapse === item.name
                        ? setCollapse("")
                        : setCollapse(item.name)
                    }
                  >
                    {!getSidebar && item.name}
                  </Button>

                  <div className="pl-5">
                    <div className="borderL max-h-96 overflow-auto space-y-1">
                      {getCollapse === item.name && (
                        <>
                          {Array.from({ length: 60 }, (_, i) => (
                            <Button key={i} btnSm btnBlock btnActive>
                              bookmark 1
                            </Button>
                          ))}
                        </>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main
          className={`h-screen transition-all w-full overflow-auto
          ${getSidebar ? "md:ml-14" : "md:ml-52"}
        `}
        >
          <div className="bg950 sticky top-0 px-2 py-4 flex-1 borderB">
            {/* Collapse Button */}
            <Button
              icon={"layout-sidebar-inset"}
              className="md:inline-flex! hidden!"
              onClick={() => setSidebar(!getSidebar)}
            ></Button>

            <Button
              btnActive
              icon={getSidebarMobile ? "x-lg" : "list"}
              onClick={() => setSIdebarMobile(!getSidebarMobile)}
              className="md:hidden"
            ></Button>
          </div>

          {Array.from({ length: 60 }, (_, i) => (
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
