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
      <div className="border mt-20 w-full px-3 py-20">
        dhentai dhentai dhentai dhentai dhentai dhentai dhentai dhentai dhentai
        dhentai dhentai dhentai dhentai dhentai dhentai dhentai dhentai dhentai
        dhentai dhentai dhentai dhentai dhentai dhentai{" "}
      </div>
    </div>
  );
}
