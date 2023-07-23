/* eslint-disable react/prop-types */
// LeftSideSection.js

const LeftSideSection = ({ title, description }) => {
  return (
    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
      <div className="order-1 w-1/12 md:w-5/12"></div>
      <div className="order-1 w-11/12 md:w-5/12 px-1 py-4 text-right">
        <p className="mb-3 text-lg text-[#FDB715] underline">{title}</p>
        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
          {description}
        </p>
      </div>
    </div>
  );
};

export default LeftSideSection;
