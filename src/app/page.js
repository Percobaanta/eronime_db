"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/ui/uiSidebar";
import Sidebar2 from "@/ui/uiSidebar2";
import Header from "@/ui/uiHeader";
import Filter from "@/ui/uiFilter";
import Post from "@/ui/uiPost";
import Button from "@/ui/uiButton";
import Link from "next/link";
import Badge from "@/ui/uiBadge";
import { useParams } from "next/navigation";

export default function App() {
  const param = useParams;
  // Req Api
  const [getDoodstream, setDoodstream] = useState([]);
  const [getStreamtape, setStreamtape] = useState([]);
  const [getPorn, setPorn] = useState([]);
  const [getAnimated, setAnimated] = useState([]);
  const [getHentai, setHentai] = useState([]);
  const [getCosplay, setCosplay] = useState([]);

  // Global state
  const [getSidebar, setSidebar] = useState(true);

  useEffect(() => {
    async function getApi() {
      const resDoodstream = await fetch("/api/apiDoodstream");
      const resStreamtape = await fetch("/api/apiStreamtape");
      const resPorn = await fetch("/api/apiPorn");
      const resAnimated = await fetch("/api/apiAnimated");
      const resHentai = await fetch("/api/apiHentai");
      const resCosplay = await fetch("/api/apiCosplay");

      const jsonDoodstream = await resDoodstream.json();
      const jsonStreamtape = await resStreamtape.json();
      const jsonPorn = await resPorn.json();
      const jsonAnimated = await resAnimated.json();
      const jsonHentai = await resHentai.json();
      const jsonCosplay = await resCosplay.json();

      setDoodstream(jsonDoodstream);
      setStreamtape(jsonStreamtape);
      setPorn(jsonPorn);
      setAnimated(jsonAnimated);
      setHentai(jsonHentai);
      setCosplay(jsonCosplay);
    }

    getApi();
  }, []);

  console.log(param.query);
  return (
    <>
      <div className="mt-15 w-full px-3">
        {Array.from({ length: 26 }, (_, i) => (
          <Button key={i} size="sm" icon={"record"} className={"p-0!"}>
            actress {i}
            <Badge title={"23"} className={"ml-auto"} />
          </Button>
        ))}
      </div>

      <div className="flex h-screen hidden">
        {/* <Sidebar2 path={"/"} getSidebar={getSidebar} setSidebar={setSidebar} /> */}

        <main className="bg950 w-full overflow-auto border">
          <Header setSidebar={setSidebar} />

          <Filter path={"/"} />

          <ul className="border w-48 m-10">
            <li>
              <Link href={"#"} className="flex justify-between">
                <p className="truncate text-xs font-light">
                  aksjdhklajshdka hsdkljahlskdhalks hdlakshdlaksjhd
                </p>
                <Badge title={"porn"} />
              </Link>
            </li>
          </ul>
          <Post />
        </main>
      </div>
    </>
  );
}
