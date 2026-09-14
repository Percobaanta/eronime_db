"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/ui/uiSidebar";
import Header from "@/ui/uiHeader";
import Filter from "@/ui/uiFilter";
import Card from "@/ui/uiCard";

export default function animatedPage() {
  // Req Api
  const [getAnimated, setAnimated] = useState([]);

  // Core State
  const [getSidebar, setSidebar] = useState(false);
  const [getSidebarMobile, setSidebarMobile] = useState(false);
  const [getSetting, setSetting] = useState(null);

  useEffect(() => {
    async function getApi() {
      const resAnimated = await fetch("/api/apiAnimated");

      const jsonAnimated = await resAnimated.json();

      setAnimated(jsonAnimated);
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
        Animated
      </main>
    </>
  );
}
