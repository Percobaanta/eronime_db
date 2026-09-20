export default function Label({
  h1,
  h2,
  h3,
  title,
  icon,
  size = "md",
  justify = "start",
  muted,
  className,
}) {
  const sizes = {
    lg: "text-medium",
    md: "text-sm",
    sm: "text-xs",
  };

  const justifys = {
    start: "justify-start",
    center: "justify-center",
    between: "justify-between",
    end: "justify-end",
  };

  const finalStyles = [
    ``,
    h1 && "font-bold",
    h2 && "font-semibold",
    h3 && "font-light",
    muted && "textMuted",
    justifys[justify],
    sizes[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (h1) {
    return (
      <h1 className={finalStyles}>
        {icon && <i className={`bi bi-${icon} mr-2`} aria-hidden="true"></i>}
        {title}
      </h1>
    );
  }
  if (h2) {
    return (
      <h2 className={finalStyles}>
        {icon && <i className={`bi bi-${icon} mr-2`} aria-hidden="true"></i>}
        {title}
      </h2>
    );
  }
  if (h3) {
    return (
      <h3 className={finalStyles}>
        {icon && <i className={`bi bi-${icon} mr-2`} aria-hidden="true"></i>}
        {title}
      </h3>
    );
  }

  return (
    <span className={finalStyles}>
      {icon && <i className={`bi bi-${icon} mr-2`} aria-hidden="true"></i>}
      {title}
    </span>
  );
}
