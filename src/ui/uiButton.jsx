import Link from "next/link";
// truncate! block! w-full

export default function ButtonX({
  children,
  href,
  icon,
  iconEnd,
  iconClass,
  size = "default",
  width = "default",
  variant = "default",
  font = "default",
  justify = "default",
  radius = "default",
  className = "",
  ...props
}) {
  const btnText = !!children;

  const sizes = {
    default: "h-8",
    lg: "h-9",
    sm: "h-7",
  };

  const icons = {
    default: "h-8 w-8",
    lg: "h-9 w-9",
    sm: "h-7 w-7",
  };

  const widths = {
    default: "w-fit",
    full: "w-full",
  };

  const variants = {
    default: "text-zinc-400 hover:text-zinc-100",
    active: "text-zinc-100",
    white: "bg-zinc-100 hover:bg-zinc-300 text-zinc-800",
    base: "bg-zinc-900 hover:bg-zinc-800",
    baseActive: "bg-zinc-800",
    ghost: "hover:bg-zinc-800",
    primary: "bg-yellow-200 text-zinc-800!",
  };

  const fonts = {
    default: "font-medium",
    bold: "font-bold",
    light: "font-light",
  };

  const justifys = {
    default: "justify-center",
    start: "justify-start",
    end: "justify-end",
  };

  const radiuss = {
    default: "rounded-md",
    rounded: "rounded-xl",
    full: "rounded-full",
  };

  const style = [
    "inline-flex flex-none items-center cursor-pointer font-sans!",

    btnText && `${fonts[font]} ${widths[width]} px-2 gap-2 text-xs capitalize`,
    !btnText && `${icons[size]} text-center!`,
    sizes[size],
    variants[variant],
    justifys[justify],
    radiuss[radius],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon && (
        <span className={iconClass}>
          <i className={`bi bi-${icon} text-[16px]`} aria-hidden="true" />
        </span>
      )}

      {children}

      {iconEnd && (
        <i className={`bi bi-${iconEnd} text-[16px]`} aria-hidden="true" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={style} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={style} {...props}>
      {content}
    </button>
  );
}
