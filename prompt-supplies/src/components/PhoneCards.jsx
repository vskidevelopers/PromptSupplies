/* eslint-disable react/prop-types */

export default function PhoneCards({ image, title }) {
  return (
    <div className="relative w-64 h-96 bg-white rounded-lg shadow-xl overflow-hidden">
      <img src={image} alt={title} className="w-full  object-cover" />
    </div>
  );
}
