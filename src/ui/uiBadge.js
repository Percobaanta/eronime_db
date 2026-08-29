export default function Badge({ title, radius = "base", className }) {
  const radiuss = {
    base: "rounded-md",
    rounded: "rounded-lg",
    full: "rounded-full",
  };

  const finalStyles = [
    `bg-zinc-600/40 text-[8px] p-1`,
    radiuss[radius],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <span className={finalStyles}>{title}</span>;
}
