import Button from "@/ui/uiButton";
import { useParams, usePathname } from "next/navigation";

export default function NavbarY({ data }) {
  const pathname = usePathname();

  return (
    <>
      <div className="p-3">
        <nav className="mb-3" aria-label="Main Navigation">
          <ul className="space-y-3">
            {data.map((e, i) => {
              return (
                <ul key={i}>
                  <Button
                    href={e.url}
                    icon={e.icon}
                    variant={pathname == e.url ? "baseActive" : "ghost"}
                  ></Button>
                </ul>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
