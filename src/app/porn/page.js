"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/ui/uiSidebar";
import Header from "@/ui/uiHeader";
import Filter from "@/ui/uiFilter";

export default function pornPage() {
  // Req Api
  const [getPorn, setPorn] = useState([]);

  // Core State
  const [getSidebar, setSidebar] = useState(false);
  const [getSidebarMobile, setSidebarMobile] = useState(false);
  const [getSetting, setSetting] = useState(null);

  useEffect(() => {
    async function getApi() {
      const resPorn = await fetch("/api/apiPorn");

      const jsonPorn = await resPorn.json();

      setPorn(jsonPorn);
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
        Porn
      </main>
    </>
  );
}
