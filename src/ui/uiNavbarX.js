import Button from "@/ui/uiButton";

export default function NavbarX({
  title = [],
  icon = [],
  className = "",
  setSidebar,
}) {
  return (
    <nav className={className}>
      <ul className="flex md:justify-start justify-between">
        {title.map((e, i) => (
          <li key={i} className="md:grow-0 grow">
            <Button
              icon={icon[i]}
              variant="ghost"
              block
              onClick={() => setSidebar((prev) => !prev)}
            >
              {e !== "filter" && e}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
