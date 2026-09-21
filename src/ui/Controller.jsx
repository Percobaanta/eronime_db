"use client";

import { createContext, useContext, useEffect, useState } from "react";

import Sidebar from "./uiSidebar";
import Header from "./uiHeader";

const ControllerContext = createContext(null);

export function useController() {
  return useContext(ControllerContext);
}

export function Controller({ children }) {
  // Req Api
  const [getDoodstream, setDoodstream] = useState([]);
  const [getStreamtape, setStreamtape] = useState([]);
  const [getPorn, setPorn] = useState([]);
  const [getAnimated, setAnimated] = useState([]);
  const [getHentai, setHentai] = useState([]);
  const [getCosplay, setCosplay] = useState([]);

  // Core State
  const [getSidebar, setSidebar] = useState(false);
  const [getSidebarMobile, setSidebarMobile] = useState(false);
  const [getFilter, setFilter] = useState(false);
  const [getSetting, setSetting] = useState(null);
  const [theme, setTheme] = useState("dark");

  // Async Api
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
    <ControllerContext.Provider
      value={{
        getPorn,
        setPorn,
        getAnimated,
        setAnimated,
        getHentai,
        setHentai,
        getCosplay,
        setCosplay,
        getSidebar,
        setSidebar,
        getSidebarMobile,
        setSidebarMobile,
        getFilter,
        setFilter,
        getSetting,
        setSetting,
      }}
    >
      <Sidebar />

      <main>
        <Header />

        {children}
      </main>
    </ControllerContext.Provider>
  );
}
