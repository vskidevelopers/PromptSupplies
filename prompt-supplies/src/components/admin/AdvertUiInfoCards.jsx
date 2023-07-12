/* eslint-disable react/prop-types */

function AdvertUiInfoCards({ title, value, theme }) {
  return (
    <div className={`group bg-${theme} `}>
      <div className="h-full w-full bg-white  group-hover:bg-transparent py-6 px-2 shadow-xl transition-colors duration-700 ease-in-out">
        <div
          className={`divide-y divide-solid container text-${theme}  mx-auto px-5 flex flex-col  items-center gap-2 w-full group-hover:text-white`}
        >
          <h2 className={`font-semibold text-2xl text-center text-${theme}  `}>
            {title}
          </h2>

          <h3 className="text-lg font-bold xl:text-2xl sm:text-xl flex">
            {value}
          </h3>
        </div>
      </div>
      <div
        className={`h-2 bg-${theme} group-hover:bg-white transition-all duration-300 ease-in-out`}
      />
    </div>
  );
}

export default AdvertUiInfoCards;
