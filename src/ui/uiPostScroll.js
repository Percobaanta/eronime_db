import Button from "@/ui/uiButton";
import Link from "next/link";

export default function PostScroll({
  data,
  row = "2",
  slice = "10",
  label,
  ratio = "video",
  example,
}) {
  return (
    <section className="container mx-auto p-3">
      <h2 className="text-xl font-bold mb-5">{label}</h2>

      <div className="overflow-x-auto pb-3">
        <div className={`grid grid-flow-col grid-rows-${row} gap-3 w-max`}>
          {data.slice(0, slice).map((e, i) => (
            <article
              key={i}
              className="bgPrimary flex flex-col gap-3 rounded-xl shadow p-3 md:w-64 w-48 border"
            >
              <img
                src={example}
                className={`bg-zinc-800 object-cover rounded-lg shadow aspect-${ratio}`}
              />

              <div className="flex justify-between items-center">
                <span className="bg-indigo-400/40 w-fit rounded-full text-xs text-white px-2 py-1">
                  Animated
                </span>
                <span className="text-xs">
                  <i className="bi bi-eye-fill mr-2" />
                  {e.view}
                </span>
              </div>

              <h3 className="line-clamp-1 justify-center font-medium text-sm">
                {e.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
