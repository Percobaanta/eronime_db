import Button from "@/ui/uiButton";
import Badge from "@/ui/uiBadge";

export default function Dropdown({ setSidebar, setCollapse, getCollapse }) {
  return (
    <div className="flex gap-3">
      <Button
        variant={"base"}
        icon={"collection-play-fill"}
        iconEnd={"caret-down-fill"}
        justify={"between"}
        width={"full"}
        outline
        block
        onClick={() => setCollapse((prev) => !prev)}
      >
        porn
      </Button>

      <Button
        variant={"base"}
        icon={"layout-sidebar"}
        outline
        className={"flex-none md:hidden"}
        onClick={() => setSidebar((prev) => !prev)}
      ></Button>

      {getCollapse && (
        <div className="absolute top-full left-0 z-10 w-full p-3 pt-0 ">
          <div className="bg-zinc-800 rounded-lg overflow-auto shadow">
            <Button
              variant="baseActive"
              icon={"person-video2"}
              justify={"start"}
              radius={"flat"}
              block
            >
              Porn
              <Badge title={"18+"} className={"ml-auto"} />
            </Button>

            <Button
              icon={"person-vcard-fill"}
              justify={"start"}
              radius={"flat"}
              block
            >
              Animated <Badge title={"18+"} className={"ml-auto"} />
            </Button>

            <Button
              icon={"collection-play-fill"}
              justify={"start"}
              radius={"flat"}
              block
            >
              Hentai <Badge title={"18+"} className={"ml-auto"} />
            </Button>

            <Button icon={"images"} justify={"start"} radius={"flat"} block>
              Cosplay <Badge title={"18+"} className={"ml-auto"} />
            </Button>

            <Button
              icon={"file-image-fill"}
              justify={"start"}
              radius={"flat"}
              block
            >
              Manhwa <Badge title={"18+"} className={"ml-auto"} />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
