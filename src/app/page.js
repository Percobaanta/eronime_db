"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import SidebarX from "@/ui/uiSidebarX";
import HeaderX from "@/ui/uiHeaderX";
import Filter from "@/ui/uiFilter";
import Card from "@/ui/uiCard";

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
  const [getSidebar, setSidebar] = useState(true);
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

  console.log(getSetting);
  return (
    <>
      <SidebarX getSidebar={getSidebar} setSidebar={setSidebar} />

      <div className="w-full h-screen overflow-auto">
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
