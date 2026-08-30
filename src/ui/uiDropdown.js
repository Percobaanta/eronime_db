import Button from "@/ui/uiButton";
import Badge from "@/ui/uiBadge";
import Label from "./uiLabel";
import Divider from "./uiDivider";

export default function Dropdown({ setSidebar, setCollapse, getCollapse }) {
  return (
    <div className="flex gap-3">
      <Button
        variant={"base"}
        icon={"gear-fill"}
        iconEnd={"caret-down-fill"}
        justify={"between"}
        width={"full"}
        outline
        block
        onClick={() => setCollapse((prev) => !prev)}
      >
        Setting
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
              icon={"moon-stars-fill"}
              iconEnd={"record ml-auto"}
              justify={"start"}
              radius={"flat"}
              block
            >
              Dark Mode
            </Button>
            <Button
              icon={"sun-fill"}
              iconEnd={"record ml-auto"}
              justify={"start"}
              radius={"flat"}
              block
            >
              Light Mode
            </Button>

            <Divider className={"w-full"} />

            <Button
              icon={"square-fill"}
              iconEnd={"record ml-auto"}
              justify={"start"}
              radius={"flat"}
              block
            >
              Square
            </Button>
            <Button
              icon={"phone-fill"}
              iconEnd={"record ml-auto"}
              justify={"start"}
              radius={"flat"}
              block
            >
              Potrait
            </Button>
            <Button
              icon={"phone-landscape-fill"}
              iconEnd={"record ml-auto"}
              justify={"start"}
              radius={"flat"}
              block
            >
              Landscape
            </Button>

            <Divider className={"w-full"} />

            <Button
              icon={"grid-fill"}
              iconEnd={"record ml-auto"}
              justify={"start"}
              radius={"flat"}
              block
            >
              5x5
            </Button>
            <Button
              icon={"list"}
              iconEnd={"record ml-auto"}
              justify={"start"}
              radius={"flat"}
              block
            >
              6x6
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
