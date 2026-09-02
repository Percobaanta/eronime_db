import Button from "./uiButton";
import Divider from "./uiDivider";
import Theme from "./uiTheme";

export default function Header({ setSidebar }) {
  return (
    <header className="bg950 sticky top-0 flex gap-3 z-10 p-3 borderB">
      <Button
        icon={"layout-sidebar"}
        onClick={() => setSidebar((prev) => !prev)}
      />

      <Divider border={"vertical"} />

      <Button className="dark:text-white! text-dark! text-xl! font-bold! lowercase px-0! mr-auto">
        eronime
      </Button>

      <Button icon={"search"} />

      <Button icon={"bell"} />

      <Theme />
    </header>
  );
}
