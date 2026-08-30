import Button from "@/ui/uiButton";
import Badge from "@/ui/uiBadge";
import Link from "next/link";

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
        <nav className="max-h-96 overflow-y-auto ">
          <ul className="space-y-1">
            {Array.from({ length: 8 }, (_, i) => (
              <li key={i}>
                <Link href={"#"} className="flex justify-between">
                  <p className="truncate md:w-32 w-4/5 text-xs font-light">
                    aksjdhklajshdka hsdkljahlskdhalks hdlakshdlaksjhd
                  </p>
                  <Badge title={"porn"} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
