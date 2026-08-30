import { useState } from "react";
import Button from "@/ui/uiButton";
import Dropdown from "@/ui/uiDropdown";
import Collapse from "@/ui/uiCollapse";
import Divider from "@/ui/uiDivider";
import Label from "@/ui/uiLabel";

export default function Sidebar({ path, getSidebar, setSidebar }) {
  const [getCollapse, setCollapse] = useState(false);
  const [getDropdown, setDropdown] = useState("");

  return (
    <aside
      className={`md:relative h-screen fixed flex md:w-min w-full z-20
          ${getSidebar ? "md:flex hidden" : "md:flex"}
          `}
    >
      <div className="bg800 flex-none overflow-auto borderR">
        <div className="bg800 sticky top-0 p-3">
          <Button
            href={"/"}
            variant="primary"
            icon={"chat-heart-fill"}
            radius={"rounded"}
            outline
          ></Button>
        </div>

        <Divider />

        <div className="flex flex-col gap-2 p-3 ">
          <Button
            href={"/porn"}
            variant={path == "/" || path == "porn" ? "baseActive" : "base"}
            icon={"person-video2"}
            radius={"rounded"}
            outline={path == "/" || path == "porn"}
          ></Button>

          <Button
            href={"/animated"}
            variant={path == "animated" ? "baseActive" : "base"}
            icon={"person-vcard-fill"}
            radius={"rounded"}
            outline={path == "animated"}
          ></Button>

          <Button
            href={"/hentai"}
            variant={path == "hentai" ? "baseActive" : "base"}
            icon={"collection-play-fill"}
            radius={"rounded"}
            outline={path == "hentai"}
          ></Button>

          <Button
            href={"/cosplay"}
            variant={path == "cosplay" ? "baseActive" : "base"}
            icon={"images"}
            radius={"rounded"}
            outline={path == "cosplay"}
          ></Button>

          <Button
            href={"/manhwa"}
            variant={path == "manhwa" ? "baseActive" : "base"}
            icon={"file-image-fill"}
            radius={"rounded"}
            outline={path == "manhwa"}
          ></Button>

          <div className="border w-4 mx-auto"></div>

          <Button
            variant="base"
            icon={"bookmark-fill"}
            radius={"rounded"}
          ></Button>

          <Button
            variant="base"
            icon={"clock-fill"}
            radius={"rounded"}
          ></Button>
        </div>
      </div>

      <div
        className={`bg900 overflow-auto borderR min-w-48
            ${getSidebar ? "md:block" : "md:hidden"}
          `}
      >
        <div className="bg900 sticky top-0 p-3">
          <Dropdown
            getCollapse={getCollapse}
            setCollapse={setCollapse}
            setSidebar={setSidebar}
          ></Dropdown>
        </div>

        <div className="flex flex-col p-3">
          <Label title={"Filter Menu"} size={"sm"} muted />

          <Collapse
            title={"sort"}
            icon={"funnel-fill"}
            iconEnd={""}
            setDropdown={setDropdown}
            getDropdown={getDropdown}
          ></Collapse>

          <Collapse
            title={"actress"}
            icon={"file-person-fill"}
            setDropdown={setDropdown}
            getDropdown={getDropdown}
          ></Collapse>

          <Collapse
            title={"tags"}
            icon={"tag-fill"}
            setDropdown={setDropdown}
            getDropdown={getDropdown}
          ></Collapse>
        </div>
      </div>

      {/* Overlay Mobile */}
      <div
        className="bg-zinc-950/70 grow"
        onClick={() => setSidebar((prev) => !prev)}
      ></div>
    </aside>
  );
}
