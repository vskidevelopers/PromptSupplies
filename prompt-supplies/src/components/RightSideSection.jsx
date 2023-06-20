/* eslint-disable react/prop-types */
// RightSideSection.js

const RightSideSection = ({ title, description }) => {
  return (
    <div className="mb-8 flex justify-between items-center w-full right-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="order-1  w-5/12 px-1 py-4 text-left">
        <p className="mb-3 text-lg text-[#FDB715] underline">{title}</p>
        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
          {description}
        </p>
      </div>
    </div>
  );
};

export default RightSideSection;
