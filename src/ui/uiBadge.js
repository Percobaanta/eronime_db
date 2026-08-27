export default function Badge({ title, radius = "base" }) {
  const radiuss = {
    base: "rounded-lg",
    rounded: "rounded-xl",
    full: "rounded-full",
  };

  return (
    <span className="bg-zinc-600/60 rounded-md ml-auto text-[8px] p-1">
      {title}
    </span>
  );
}
