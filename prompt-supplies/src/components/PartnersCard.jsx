/* eslint-disable react/prop-types */

export default function PartnersCard({ logoSrc }) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <img src={logoSrc} alt="Partner Logo" className="w-auto h-20" />
    </div>
  );
}
