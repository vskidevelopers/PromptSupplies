import React from "react";

export default function QuotationDivider() {
  return (
    <div className="relative h-52 ">
      {/* Background Image */}
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://t3.ftcdn.net/jpg/02/18/65/58/360_F_218655870_yaQvQxD9n4mFIUFIx082pmhP4PqC4Elt.jpg')",
        }}
      >
        {/* Black Shade Overlay */}
        <div className="absolute inset-0 h-full w-full bg-[#FDB715]/80"></div>
      </div>
      <div className="absolute h-full w-full container mx-auto px-20 text-white ">
        <div className="h-full w-full  flex justify-between items-center ">
          <div className="w-3/5">
            <h2 className="text-3xl font-bold">
              You Always Get the Best Guidance
            </h2>
            <p>
              {" "}
              Unleash the Full Potential of Your Business with Tailored
              Solutions - Take the Next Step and Click Here to Request Your
              Personalized Quote Today"
            </p>
          </div>
          <div className="pt-5">
            <button className="border border-white text-md text-white hover:text-black hover:border-white hover:bg-[#FDB715] py-4 px-8">
              Request a quote
            </button>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
