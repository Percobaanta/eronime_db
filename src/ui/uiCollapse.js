import Button from "@/ui/uiButton";

export default function Collapse({ title, getDropdown, setDropdown }) {
  return (
    <>
      <Button
        iconEnd={getDropdown == title ? "dash-lg" : "plus-lg"}
        className={"justify-between!"}
        block
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
                  icon={"hash"}
                  iconEnd={"circle text-[8px] ml-auto"}
                  size="sm"
                  className="w-full! justify-start!"
                >
                  Sort
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
