"use client";

import { useController } from "@/ui/Controller";
import Search from "@/ui/uiSearch";

export default function App() {
  const { getPorn, getAnimated, getHentai, getCosplay, getSearch } =
    useController();

  const getApi = [...getPorn, ...getAnimated, ...getHentai, ...getCosplay];

  return (
    <>
      <Search getApi={getApi} getSearch={getSearch} />
    </>
  );
}
