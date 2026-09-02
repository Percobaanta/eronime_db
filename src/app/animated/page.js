"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/ui/uiSidebar";
import Header from "@/ui/uiHeader";
import Filter from "@/ui/uiFilter";
import Post from "@/ui/uiPost";

export default function animatedPage() {
  // Req Api
  const [getAnimated, setAnimated] = useState([]);

  // Global state
  const [getSidebar, setSidebar] = useState(true);

  useEffect(() => {
    async function getApi() {
      const resAnimated = await fetch("/api/apiAnimated");

      const jsonAnimated = await resAnimated.json();

      setAnimated(jsonAnimated);
    }

    getApi();
  }, []);

  return (
    <div className="flex h-screen">
      <div className="border mt-20 w-full px-3 py-20">
        Animated Animated Animated Animated Animated Animated Animated Animated
        Animated Animated Animated Animated Animated Animated Animated Animated
        Animated Animated Animated Animated Animated Animated Animated Animated{" "}
      </div>
    </div>
  );
}
