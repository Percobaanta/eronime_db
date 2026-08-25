import Button from "@/ui/uiButton";

export default function NavbarX({ title = [], icon = [], className = "" }) {
  return (
    <nav className={className}>
      <ul className="flex md:justify-start justify-between gap-3">
        {title.map((e, i) => (
          <li key={i} className="md:grow-0 grow">
            <Button href={e} icon={icon[i]}>
              {e}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
