"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/ui/uiSidebar";
import Header from "@/ui/uiHeader";
import Filter from "@/ui/uiFilter";
import Post from "@/ui/uiPost";

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

  return (
    <div className="flex h-screen">
      <Sidebar path={"/"} getSidebar={getSidebar} setSidebar={setSidebar} />

      <main className="bg950 w-full overflow-auto">
        <Header setSidebar={setSidebar} />

        <Filter path={"/"} />

        <Post />
      </main>
    </div>
  );
}
