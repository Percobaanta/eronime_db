"use client";

import { useController } from "@/ui/Controller";
import Post from "@/ui/uiPost";

export default function animatednPage() {
  const { getAnimated } = useController();

  return (
    <>
      <Post data={getAnimated} />
    </>
  );
}
