import Link from "next/link";

export default function Button({
  children,
  href,
  variant = "default",
  size = "md",
  radius = "base",
  justify = "center",
  icon,
  iconEnd,
  block,
  outline,
  border,
  shadow,
  className = "",
  ...props
}) {
  const hasText = !!children;

  const variants = {
    default: "text-zinc-400 hover:text-zinc-300",
    ghost: "hover:bg-zinc-800 hover:text-zinc-300",
    base: "bg-zinc-800 text-zinc-400 hover:bg-zinc-700",
    baseActive: "bg-zinc-700 text-zinc-400",
    primary: "bg-yellow-200 text-zinc-900 hover:bg-yellow-300",
    primaryActive: "bg-yellow-300 text-zinc-900",
  };

  const radiuss = {
    base: "rounded-lg",
    rounded: "rounded-xl",
    full: "rounded-full",
  };

  const justifys = {
    start: "justify-start",
    center: "justify-center",
    between: "justify-between",
    end: "justify-end",
  };

  const sizes = {
    sm: "h-6.5 text-xs gap-2",
    md: "h-8 text-xs gap-2 font-semibold",
    lg: "h-10 text-sm gap-3 font-semibold",
  };

  const icons = {
    sm: "w-6.5 h-6.5 px-0",
    md: "w-8 h-8 px-0",
    lg: "w-10 h-10 px-0",
  };

  const atribut = hasText ? `px-3 ${sizes[size]}` : icons[size];

  const finalStyles = [
    `flex items-center capitalize cursor-pointer transition-colors duration-200 active:scale-98
    ${outline ? "border-2 border-zinc-900 outline-2 outline-zinc-600/60" : ""} 
    ${block ? "w-full!" : ""} 
    ${border ? "border" : ""} 
    ${shadow ? "shadow" : ""}
    `,
    variants[variant],
    justifys[justify],
    radiuss[radius],
    atribut,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon && <i className={`bi bi-${icon}`} aria-hidden="true"></i>}
      {hasText && children}
      {iconEnd && <i className={`bi bi-${iconEnd}`} aria-hidden="true"></i>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={finalStyles} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={finalStyles} {...props}>
      {content}
    </button>
  );
}
