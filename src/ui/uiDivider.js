export default function Divider({ border = "horizontal", className }) {
  const borders = {
    horizontal: "w-[calc(100%-1.75rem)] h-0 mx-auto",
    vertical: "h-5  w-0 my-auto",
  };

  return <div className={`border ${className} ${borders[border]}`}></div>;
}
