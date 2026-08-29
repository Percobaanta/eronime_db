"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/ui/uiSidebar";
import Header from "@/ui/uiHeader";
import Filter from "@/ui/uiFilter";
import Post from "@/ui/uiPost";

export default function hentaiPage() {
  // Req Api
  const [getHentai, setHentai] = useState([]);

  // Global state
  const [getSidebar, setSidebar] = useState(true);

  useEffect(() => {
    async function getApi() {
      const resHentai = await fetch("/api/apiHentai");

      const jsonHentai = await resHentai.json();

      setHentai(jsonHentai);
    }

    getApi();
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar
        path={"hentai"}
        getSidebar={getSidebar}
        setSidebar={setSidebar}
      />

      <main className="bg950 w-full overflow-auto">
        <Header setSidebar={setSidebar} />

        <Filter path={"hentai"} />

        <Post />
      </main>
    </div>
  );
}
