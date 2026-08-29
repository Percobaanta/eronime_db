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
      <Sidebar path={"porn"} getSidebar={getSidebar} setSidebar={setSidebar} />

      <main className="bg950 w-full overflow-auto">
        <Header setSidebar={setSidebar} />

        <Filter path={"porn"} />

        <Post />
      </main>
    </div>
  );
}
