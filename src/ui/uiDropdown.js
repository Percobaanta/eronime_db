import Button from "@/ui/uiButton";
import Badge from "@/ui/uiBadge";
import Label from "./uiLabel";
import Divider from "./uiDivider";
import { useEffect, useState } from "react";

export default function Dropdown({ setSidebar, setCollapse, getCollapse }) {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    // Jika belum pernah memilih theme → default dark
    if (!theme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
      return;
    }

    const isDark = theme === "dark";

    document.documentElement.classList.toggle("dark", isDark);

    setDark(isDark);
  }, []);

  const darkTheme = () => {
    const html = document.documentElement;

    const newTheme = true;

    html.classList.toggle("dark", newTheme);

    localStorage.setItem("theme", "dark");

    setDark(newTheme);
  };

  const lightTheme = () => {
    const html = document.documentElement;

    const newTheme = false;

    html.classList.toggle("dark", newTheme);

    localStorage.setItem("theme", "light");

    setDark(newTheme);
  };

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
          <div className="dark:bg-zinc-800 bg-zinc-200 rounded-lg overflow-auto shadow">
            <Button
              variant={dark ? "baseActive" : "base"}
              iconEnd={dark ? "record-fill ml-auto" : "record ml-auto"}
              justify={"start"}
              radius={"flat"}
              icon={"moon-stars-fill"}
              onClick={darkTheme}
              block
            >
              Dark Mode
            </Button>
            <Button
              variant={!dark ? "baseActive" : "base"}
              iconEnd={!dark ? "record-fill ml-auto" : "record ml-auto"}
              justify={"start"}
              radius={"flat"}
              icon={"sun-fill"}
              onClick={lightTheme}
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
