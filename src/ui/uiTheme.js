"use client";

import { useEffect, useState } from "react";
import Button from "./uiButton";

export default function Theme() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    // Jika belum pernah memilih theme → default dark
    if (!theme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
      return;
    }

    const isDark = theme === "dark";

    document.documentElement.classList.toggle("dark", isDark);

    setDark(isDark);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;

    const newTheme = !dark;

    html.classList.toggle("dark", newTheme);

    localStorage.setItem("theme", newTheme ? "dark" : "light");

    setDark(newTheme);
  };

  return (
    <Button
      icon={dark ? "moon-stars-fill" : "sun-fill"}
      onClick={toggleTheme}
    ></Button>
  );
}
