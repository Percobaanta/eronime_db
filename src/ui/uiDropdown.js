import Button from "@/ui/uiButton";

export default function Dropdown({ setSidebar, setCollapse, getCollapse }) {
  return (
    <div className="flex gap-3">
      <Button
        variant={"base"}
        size={"lg"}
        icon={"collection-play-fill"}
        iconEnd={"caret-down-fill"}
        justify={"between"}
        width={"full"}
        outline
        block
        onClick={() => setCollapse((prev) => !prev)}
      >
        eronime
      </Button>

      <Button
        variant={"base"}
        size={"lg"}
        icon={"layout-sidebar"}
        outline
        className={"flex-none md:hidden"}
        onClick={() => setSidebar((prev) => !prev)}
      ></Button>

      {getCollapse && (
        <div className="absolute top-full left-0 z-10 w-full p-3 pt-0 ">
          <div className="bg-zinc-800 rounded-lg shadow">
            <Button icon={"house-fill"} justify={"start"} block>
              Home
            </Button>
            <Button icon={"person-video2"} justify={"start"} block>
              Porn
            </Button>
            <Button icon={"person-vcard-fill"} justify={"start"} block>
              Animated
            </Button>
            <Button icon={"collection-play-fill"} justify={"start"} block>
              Cosplay
            </Button>
            <Button icon={"images"} justify={"start"} block>
              Hentai
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
