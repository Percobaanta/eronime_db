import Button from "./uiButton";
import Divider from "./uiDivider";
import Collapse from "./uiCollapse";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Badge from "@/ui/uiBadge";
export default function Aside({ getSidebar, setSidebar }) {
  const pathname = usePathname();

  // Global state
  const [getCollapse, setCollapse] = useState(false);
  const [getDropdown, setDropdown] = useState("");
  const [getActivity, setActivity] = useState("");
  return (
    <div
      className={`md:relative h-screen fixed flex md:w-min w-full z-20
    ${getSidebar ? "md:flex hidden" : "md:flex"}
    `}
    >
      {/* Sidebar icon */}
      <div className="bg900 h-screen flex flex-col borderR">
        <div className="p-3">
          <Button
            icon={getSidebar ? "x-lg" : "layout-sidebar-inset"}
            btnRounded
            btnActive
            onClick={() => setSidebar((prev) => !prev)}
          ></Button>
        </div>

        <Divider />

        <div className="flex flex-col overflow-auto space-y-2 p-3">
          <Button
            href={"/porn"}
            icon={"person-video2"}
            btnActive={pathname === "/" || pathname === "/porn"}
            btnGhost={pathname !== "/" || pathname !== "/porn"}
            btnRounded
          ></Button>

          <Button
            href={"/animated"}
            icon={"person-vcard-fill"}
            btnActive={pathname === "/animated"}
            btnGhost={pathname !== "/animated"}
            btnRounded
          ></Button>

          <Button
            href={"/hentai"}
            icon={"collection-play-fill"}
            btnActive={pathname === "/hentai"}
            btnGhost={pathname !== "/hentai"}
            btnRounded
          ></Button>

          <Button
            href={"/cosplay"}
            icon={"images"}
            btnActive={pathname === "/cosplay"}
            btnGhost={pathname !== "/cosplay"}
            btnRounded
          ></Button>

          <Button
            href={"/manhwa"}
            icon={"file-image-fill"}
            btnActive={pathname === "/manhwa"}
            btnGhost={pathname !== "/manhwa"}
            btnRounded
          ></Button>
        </div>
      </div>

      {/* Sidebar Activity */}
      <div
        className={`bg900 h-screen flex-col borderR md:w-48 w-64 ${
          getSidebar ? "md:flex" : "md:hidden flex"
        }`}
      >
        <div className="flex gap-3 p-3">
          <Button
            href={"/"}
            icon={"chat-heart-fill"}
            btnBlock
            className="text-white! lowercase font-semibold! text-base! p-0!"
          >
            eronime
          </Button>
        </div>

        <div className="flex-1 overflow-auto space-y-2 mt-3">
          <div>
            <Button
              icon={"bookmark-fill"}
              iconEnd={
                getCollapse === "bookmark"
                  ? "dash-lg ml-auto"
                  : "plus-lg ml-auto"
              }
              btnBlock
              onClick={() =>
                getCollapse === "bookmark"
                  ? setCollapse("")
                  : setCollapse("bookmark")
              }
            >
              Bookmark
            </Button>

            <div className="bg800 max-h-48 overflow-auto">
              {getCollapse === "bookmark" && (
                <>
                  {Array.from({ length: 60 }, (_, i) => (
                    <Button key={i} btnSm btnBlock>
                      bookmark 1
                    </Button>
                  ))}
                </>
              )}
            </div>
          </div>

          <div>
            <Button
              icon={"hand-thumbs-up-fill"}
              iconEnd={
                getCollapse == "reaction"
                  ? "dash-lg ml-auto"
                  : "plus-lg ml-auto"
              }
              btnBlock
              onClick={() =>
                getCollapse === "reaction"
                  ? setCollapse("")
                  : setCollapse("reaction")
              }
            >
              reaction
            </Button>

            <div className="bg800 max-h-48 overflow-auto">
              {getCollapse === "reaction" && (
                <>
                  {Array.from({ length: 60 }, (_, i) => (
                    <Button key={i} btnSm btnBlock>
                      reaction 1
                    </Button>
                  ))}
                </>
              )}
            </div>
          </div>

          <div>
            <Button
              icon={"bell-fill"}
              iconEnd={
                getCollapse === "notification"
                  ? "dash-lg ml-auto"
                  : "plus-lg ml-auto"
              }
              btnBlock
              onClick={() =>
                getCollapse === "notification"
                  ? setCollapse("")
                  : setCollapse("notification")
              }
            >
              notification
            </Button>

            <div className="bg800 max-h-48 overflow-auto">
              {getCollapse === "notification" && (
                <>
                  {Array.from({ length: 60 }, (_, i) => (
                    <Button key={i} btnSm btnBlock>
                      notification 1
                    </Button>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay Mobile */}
      <div
        className="bg-zinc-950/70 grow"
        onClick={() => setSidebar((prev) => !prev)}
      ></div>
    </div>
  );
}
