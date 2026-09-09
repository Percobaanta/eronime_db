import Link from "next/link";

export default function Button({
  children,
  href,
  title,
  icon,
  btnLg,
  btnSm,
  btnPrimary,
  btnBase,
  btnActive,
  btnGhost,
  border,
  iconEnd,
  btnRounded,
  btnFlat,
  btnBlock,
  btnCenter,
  className = "",
  ...props
}) {
  const btnText = !!children;

  const iconsSize = btnLg ? "text-lg" : btnSm ? "text-sm" : "text-base";

  const style = [
    "inline-flex gap-3 items-center capitalize cursor-pointer",
    "text-xs font-normal rounded-md h-8.5 px-3",
    "dark:text-zinc-400 dark:hover:text-zinc-200 text-zinc-800 hover:text-zinc-600",

    !btnText &&
      !btnLg &&
      !btnSm &&
      "w-8.5! h-8.5! px-0 justify-center text-base!",

    !btnText && btnLg && "w-10! h-10! px-0 justify-center text-lg!",

    !btnText && btnSm && "w-7.5! h-7.5! px-0 justify-center text-xs!",

    btnPrimary && "bg-yellow-200 text-zinc-800!",

    btnBase &&
      "dark:bg-zinc-900 dark:hover:bg-zinc-800 bg-zinc-100 hover:bg-zinc-200",

    btnActive && "dark:bg-zinc-800 bg-zinc-200",

    btnGhost && "dark:hover:bg-zinc-800",

    btnLg && "text-sm! font-semibold! h-10!",

    btnSm && "text-xs! font-light! h-7.5!",

    btnBlock && "flex-1",

    btnCenter && "justify-center",

    btnRounded && "rounded-xl",

    btnFlat && "rounded-none",

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
