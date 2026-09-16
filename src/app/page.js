"use client";

import { useController } from "@/ui/Controller";
import ButtonX from "@/ui/uiButtonX";

export default function App() {
  const { sidebar, setSidebar, theme, setTheme } = useController();

  return (
    <div className="container mx-auto border">
      <div className="grid grid-cols-2 gap-4">
        {Array.from({ length: 100 }, (_, i) => (
          <div key={i} className="bg900">
            Tags {i}
          </div>
        ))}
      </div>
    </div>
  );
}
