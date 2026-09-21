"use client";

import { useController } from "@/ui/Controller";
import Post from "@/ui/uiPost";

export default function pornPage() {
  const { getPorn } = useController();

  return (
    <>
      <Post data={getPorn} />
    </>
  );
}
