"use client";

import { useController } from "@/ui/Controller";
import Post from "@/ui/uiPost";

export default function App() {
  const { getPorn } = useController();

  return (
    <>
      <Post data={getPorn} />
    </>
  );
}
