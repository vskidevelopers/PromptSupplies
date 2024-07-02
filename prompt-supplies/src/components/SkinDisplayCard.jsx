import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function SkinDisplayCard({ i, category }) {
  // const id = i;
  return (
    <div className="flex mr-2 flex-col h-96 w-60 sm:w-64 md:w-72 bg-slate-500">
      <div className="h-2/3 bg-red-700 rounded-md">{/* image */}</div>
      <div className="h-1/3 ">
        <h1 className="font-semibold text-xl">{i}</h1>
        <h1>title</h1>
        <h1>price</h1>
        <h1>Description</h1>
        <Link to={`/skins/collections/${category}/id-1`}> add to cart</Link>
      </div>
    </div>
  );
}

export default SkinDisplayCard;
