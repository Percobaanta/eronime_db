export default function Divider({ border = "horizontal", className }) {
  const borders = {
    horizontal: "w-[calc(100%-1.75rem)] h-0 mx-auto",
    vertical: "h-[calc(100%-1.75rem)]  w-0 my-auto",
  };

  return <div className={`borderB ${className} ${borders[border]}`}></div>;
}
