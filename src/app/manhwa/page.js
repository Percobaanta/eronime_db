"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/ui/uiSidebar";
import Header from "@/ui/uiHeader";
import Filter from "@/ui/uiFilter";

export default function manhwaPage() {
  // Req Api
  const [getManhwa, setManhwa] = useState([]);

  // Core State
  const [getSidebar, setSidebar] = useState(false);
  const [getSidebarMobile, setSidebarMobile] = useState(false);
  const [getSetting, setSetting] = useState(null);

  useEffect(() => {
    async function getApi() {
      const resManhwa = await fetch("/api/apiManhwa");

      const jsonManhwa = await resManhwa.json();

      setManhwa(jsonManhwa);
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
        Manhwa
      </main>
    </>
  );
}
