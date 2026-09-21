"use client";

import { useController } from "@/ui/Controller";
import Post from "@/ui/uiPost";

export default function hentaiPage() {
  const { getHentai } = useController();

  return (
    <>
      <Post data={getHentai} />
    </>
  );
}
