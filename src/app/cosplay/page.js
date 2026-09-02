"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/ui/uiSidebar";
import Header from "@/ui/uiHeader";
import Filter from "@/ui/uiFilter";
import Post from "@/ui/uiPost";

export default function cosplayPage() {
  // Req Api
  const [getCosplay, setCosplay] = useState([]);

  // Global state
  const [getSidebar, setSidebar] = useState(true);

  useEffect(() => {
    async function getApi() {
      const resCosplay = await fetch("/api/apiCosplay");

      const jsonCosplay = await resCosplay.json();

      setCosplay(jsonCosplay);
    }

    getApi();
  }, []);

  return (
    <div className="flex h-screen">
      <div className="border mt-20 w-full px-3 py-20">
        cosplay cosplay cosplay cosplay cosplay cosplay cosplay cosplay cosplay
        cosplay cosplay cosplay cosplay cosplay cosplay cosplay cosplay cosplay
        cosplay cosplay cosplay cosplay cosplay cosplay{" "}
      </div>
    </div>
  );
}
