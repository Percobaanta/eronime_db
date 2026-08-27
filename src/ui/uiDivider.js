export default function Divider({ border = "horizontal" }) {
  const borders = {
    horizontal: "w-4 h-0 mx-auto",
    vertical: "h-4 w-0 my-auto",
  };

  return <div className={`border ${borders[border]}`}></div>;
}
