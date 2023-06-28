/* eslint-disable react/prop-types */

function AdvertInfoCards({ title, value }) {
  return (
    <div className="">
      <div className="h-full bg-white py-6 px-2 rounded-xl shadow-xl ">
        <div className="flex flex-col items-baseline gap-2">
          <div className="w-1/4"> {title}</div>
          <div className="w-3/4 whitespace-normal">
            <h3 className="text-lg font-bold  sm:text-xl flex ">{value}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvertInfoCards;
