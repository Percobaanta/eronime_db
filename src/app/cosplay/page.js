"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/ui/uiSidebar";
import Header from "@/ui/uiHeader";
import Filter from "@/ui/uiFilter";

export default function cosplayPage() {
  // Req Api
  const [getCosplay, setCosplay] = useState([]);

  // Core State
  const [getSidebar, setSidebar] = useState(false);
  const [getSidebarMobile, setSidebarMobile] = useState(false);
  const [getSetting, setSetting] = useState(null);

  useEffect(() => {
    async function getApi() {
      const resCosplay = await fetch("/api/apiCosplay");

      const jsonCosplay = await resCosplay.json();

      setCosplay(jsonCosplay);
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
        Cosplay
      </main>
    </>
  );
}
