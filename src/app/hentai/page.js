"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/ui/uiSidebar";
import Header from "@/ui/uiHeader";
import Filter from "@/ui/uiFilter";

export default function hentaiPage() {
  // Req Api
  const [getHentai, setHentai] = useState([]);

  // Core State
  const [getSidebar, setSidebar] = useState(false);
  const [getSidebarMobile, setSidebarMobile] = useState(false);
  const [getSetting, setSetting] = useState(null);

  useEffect(() => {
    async function getApi() {
      const resHentai = await fetch("/api/apiHentai");

      const jsonHentai = await resHentai.json();

      setHentai(jsonHentai);
    }

    getApi();
  }, []);

  return (
    <>
      <Sidebar
        getSidebarMobile={getSidebarMobile}
        setSidebarMobile={setSidebarMobile}
        getSidebar={getSidebar}
        setSidebar={setSidebar}
      />

      <main>
        <Header
          getSidebarMobile={getSidebarMobile}
          setSidebarMobile={setSidebarMobile}
          getSidebar={getSidebar}
          setSidebar={setSidebar}
          getSetting={getSetting}
          setSetting={setSetting}
        />
        <Filter />
        Hentai
      </main>
    </>
  );
}
