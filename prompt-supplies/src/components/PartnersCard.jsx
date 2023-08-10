/* eslint-disable react/prop-types */

export default function PartnersCard({ logoSrc }) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="w-auto h-1/2">
        <img src={logoSrc} alt="Partner Logo" className="h-[10rem] w-auto" />
      </div>
    </div>
  );
}
