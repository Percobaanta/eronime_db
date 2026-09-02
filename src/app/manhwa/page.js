"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/ui/uiSidebar";
import Header from "@/ui/uiHeader";
import Filter from "@/ui/uiFilter";
import Post from "@/ui/uiPost";

export default function manhwaPage() {
  // Req Api
  const [getManhwa, setManhwa] = useState([]);

  // Global state
  const [getSidebar, setSidebar] = useState(true);

  useEffect(() => {
    async function getApi() {
      const resManhwa = await fetch("/api/apiManhwa");

      const jsonManhwa = await resManhwa.json();

      setManhwa(jsonManhwa);
    }

    getApi();
  }, []);

  return (
    <div className="flex h-screen">
      <div className="border mt-20 w-full px-3 py-20">
        manhwa manhwa manhwa manhwa manhwa manhwa manhwa manhwa manhwa manhwa
        manhwa manhwa manhwa manhwa manhwa manhwa manhwa manhwa manhwa manhwa
        manhwa manhwa manhwa manhwa{" "}
      </div>
    </div>
  );
}
