"use client";

import { useController } from "@/ui/Controller";
import Post from "@/ui/uiPost";

export default function cosplayPage() {
  const { getCosplay } = useController();

  return (
    <>
      <Post data={getCosplay} />
    </>
  );
}
