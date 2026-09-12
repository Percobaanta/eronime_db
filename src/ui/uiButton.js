import Link from "next/link";

export default function Button({
  children,
  href,
  title,
  icon,
  iconEnd,
  btnLg,
  btnSm,
  btnPrimary,
  btnBase,
  btnActive,
  btnGhost,
  btnRounded,
  btnFlat,
  btnCenter,
  btnBlock,
  btnOutline,
  border,
  className = "",
  ...props
}) {
  const btnText = !!children;

  const iconsSize = btnLg ? "text-base" : btnSm ? "text-xs" : "text-sm";

  const style = [
    "inline-flex gap-2 items-center capitalize cursor-pointer",
    "text-xs font-medium rounded-md h-7 px-2",
    "dark:text-zinc-300 dark:hover:text-zinc-200 text-zinc-900 hover:text-zinc-800",

    !btnText && !btnLg && !btnSm && "w-7! min-h-7! px-0 justify-center",

    !btnText && btnLg && "w-8! h-8! px-0 justify-center text-lg!",

    !btnText && btnSm && "w-6! h-6! px-0 justify-center text-xs!",

    btnPrimary && "bg-yellow-200 text-zinc-800!",

    btnBase &&
      "dark:bg-zinc-900 dark:hover:bg-zinc-800 bg-zinc-100 hover:bg-zinc-200",

    btnActive && "dark:bg-zinc-800 bg-zinc-200",

    btnGhost && "dark:hover:bg-zinc-800",

    btnLg && "h-8!",

    btnSm && "h-6! font-normal!",

    btnBlock && "flex-1 w-full",

    btnCenter && "justify-center",

    btnRounded && "rounded-[10px]!",

    btnFlat && "rounded-none",

    btnOutline &&
      "border-2 dark:border-zinc-900 border-zinc-100 outline-2 outline-zinc-500/50",

    border && "border",

    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon && (
        <i className={`bi bi-${icon} ${iconsSize}`} aria-hidden="true" />
      )}
      {btnText && children}
      {iconEnd && (
        <i
          className={`bi bi-${iconEnd} ${iconsSize} ml-auto`}
          aria-hidden="true"
        />
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
