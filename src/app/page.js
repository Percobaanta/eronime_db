"use client";

import { useController } from "@/ui/Controller";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Label from "@/ui/uiLabel";
import ButtonX from "@/ui/uiButton";
import Card from "@/ui/uiCard";

export default function App() {
  const pathname = usePathname();
  const { getFilter, setFilter, getSetting, setSetting } = useController();

  return (
    <>
      <Card />
    </>
  );
}
