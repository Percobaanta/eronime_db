"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/ui/uiSidebar";
import Header from "@/ui/uiHeader";
import Filter from "@/ui/uiFilter";
import Post from "@/ui/uiPost";

export default function pornPage() {
  // Req Api
  const [getPorn, setPorn] = useState([]);

  // Global state
  const [getSidebar, setSidebar] = useState(true);

  useEffect(() => {
    async function getApi() {
      const resPorn = await fetch("/api/apiPorn");

      const jsonPorn = await resPorn.json();

      setPorn(jsonPorn);
    }

    getApi();
  }, []);

  return (
    <div className="flex h-screen">
      <div className="border mt-20 w-full px-3 py-20">
        Porn Porn Porn Porn Porn Porn Porn Porn Porn Porn Porn Porn Porn Porn{" "}
        Porn Porn Porn Porn Porn Porn Porn Porn Porn Porn{" "}
      </div>
    </div>
  );
}
