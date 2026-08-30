"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/ui/uiSidebar";
import Sidebar2 from "@/ui/uiSidebar2";
import Header from "@/ui/uiHeader";
import Filter from "@/ui/uiFilter";
import Post from "@/ui/uiPost";
import Button from "@/ui/uiButton";

export default function App() {
  // Req Api
  const [getDoodstream, setDoodstream] = useState([]);
  const [getStreamtape, setStreamtape] = useState([]);
  const [getPorn, setPorn] = useState([]);
  const [getAnimated, setAnimated] = useState([]);
  const [getHentai, setHentai] = useState([]);
  const [getCosplay, setCosplay] = useState([]);

  // Global state
  const [getSidebar, setSidebar] = useState(true);

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

  console.log(getSidebar);
  return (
    <div className="flex h-screen">
      {/* <Sidebar2 path={"/"} getSidebar={getSidebar} setSidebar={setSidebar} /> */}
      <aside
        className={`bg900 flex flex-col gap-2 relative p-3
        ${getSidebar ? "w-64" : "w-auto"}
      `}
      >
        <Button icon={"chat-heart-fill"} variant="primary"></Button>
        <Button
          icon={"chat-heart-fill"}
          variant="primary"
          justify={getSidebar ? "start" : "center"}
          block={getSidebar}
          outline
          radius={getSidebar ? "base" : "rounded"}
          className="font-bold! text-xl! lowercase"
        >
          {getSidebar && "eronime"}
        </Button>
        <Button
          icon={"person-video2"}
          variant="base"
          justify={getSidebar ? "start" : "center"}
          block={getSidebar}
          radius={getSidebar ? "base" : "rounded"}
        >
          {getSidebar && "porn"}
        </Button>
        <Button
          icon={"person-vcard-fill"}
          variant="base"
          justify={getSidebar ? "start" : "center"}
          block={getSidebar}
          radius={getSidebar ? "base" : "rounded"}
        >
          {getSidebar && "animated"}
        </Button>
        <Button
          icon={"collection-play-fill"}
          variant="base"
          justify={getSidebar ? "start" : "center"}
          block={getSidebar}
          radius={getSidebar ? "base" : "rounded"}
        >
          {getSidebar && "hentai"}
        </Button>
        <Button
          icon={"images"}
          variant="base"
          justify={getSidebar ? "start" : "center"}
          block={getSidebar}
          radius={getSidebar ? "base" : "rounded"}
        >
          {getSidebar && "cosplay"}
        </Button>
        <Button
          icon={"file-image-fill"}
          variant="base"
          justify={getSidebar ? "start" : "center"}
          block={getSidebar}
          radius={getSidebar ? "base" : "rounded"}
        >
          {getSidebar && "manhwa"}
        </Button>
      </aside>

      <main className="bg950 w-full overflow-auto">
        <Header setSidebar={setSidebar} />

        <Filter path={"/"} />

        <Post />
      </main>
    </div>
  );
}
