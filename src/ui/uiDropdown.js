import Button from "@/ui/uiButton";

export default function Dropdown({ setSidebar, setCollapse, getCollapse }) {
  return (
    <div className="bg-zinc-900 sticky top-0 flex justify-between gap-3 p-3">
      <Button
        variant="baseActive"
        icon="collection-play-fill"
        iconEnd="caret-down-fill"
        className="w-full! justify-between!"
        onClick={() => setCollapse((prev) => !prev)}
      >
        eronime
      </Button>

      <Button
        variant="baseActive"
        icon="layout-sidebar"
        className="flex-none md:hidden"
        onClick={() => setSidebar((prev) => !prev)}
      ></Button>

      {getCollapse && (
        <div className="absolute top-full left-0 z-10 w-full p-3 pt-0">
          <div className="bg-zinc-800 rounded-lg shadow">
            <Button className="w-full! justify-start">Home</Button>
            <Button className="w-full! justify-start">Porn</Button>
            <Button className="w-full! justify-start">Animated</Button>
            <Button className="w-full! justify-start">Cosplay</Button>
            <Button className="w-full! justify-start">Hentai</Button>
          </div>
        </div>
      )}
    </div>
  );
}
