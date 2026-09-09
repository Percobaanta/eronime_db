"use client";

import Aside from "@/ui/uiAside";
import Asidebar from "@/ui/uiAsidebar";
import Filter from "@/ui/uiFilter";
import { useState } from "react";

export default function LayoutClient({ children }) {
  const [getSidebar, setSidebar] = useState(true);
  const [setting, setSetting] = useState(null);

  return (
    <>
      <aside aria-label="Sidebar">
        <Aside getSidebar={getSidebar} setSidebar={setSidebar} />
      </aside>

      <div className="w-full h-screen overflow-auto">
        <header className="sticky top-0">
          <Asidebar
            getSidebar={getSidebar}
            setSidebar={setSidebar}
            setSetting={setSetting}
            setting={setting}
          />
        </header>

        <nav>
          <Filter />
        </nav>

        <main>
          <div className="container mx-auto">{children}</div>
        </main>
      </div>
    </>
  );
}
