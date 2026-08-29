import Button from "@/ui/uiButton";
import Badge from "@/ui/uiBadge";

export default function Collapse({ title, icon, getDropdown, setDropdown }) {
  return (
    <>
      <Button
        icon={icon}
        iconEnd={getDropdown == title ? "dash-lg ml-auto" : "plus-lg ml-auto"}
        justify={"between"}
        block
        className="p-0!"
        onClick={(e) =>
          getDropdown == title ? setDropdown("") : setDropdown(title)
        }
      >
        {title}
      </Button>

      {getDropdown == title && (
        <nav className="max-h-96 overflow-y-auto">
          <ul>
            {Array.from({ length: 8 }, (_, i) => (
              <li key={i}>
                <Button
                  key={i}
                  size={"sm"}
                  icon={"record"}
                  justify={"start"}
                  block
                  className="pl-1! pr-0!"
                >
                  tag list
                  <Badge title={"23"} className={"ml-auto"} />
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
