import React from "react";

export default function Team() {
  return (
    <div>
      <div className="container mx-auto px-20">
        <div className="relative flex flex-col justify-center items-center py-10">
          <div className="w-1/2 text-center">
            <h2 className="text-[#FDB715] text-md font-semibold uppercase ">
              Meet the Team
            </h2>
            <h1 className="text-3xl font-bold">
              Empowering Organizations through Result-Driven Solutions
            </h1>
          </div>
          <div className="absolute top-0 left-0 h-full w-full flex justify-start items-center opacity-10">
            <h1 className="text-9xl font-bold">Team</h1>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 my-5">
          <div className="flex gap-2 items-center">
            <div className="">
              <p>IG</p>
              <p>FB</p>
              <p>TW</p>
            </div>

            <div>
              <div className="rounded-full overflow-clip">
                <img
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                  className="h-30 md:h-52 xl:h-60 w-auto"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* Right Div */}
          <div className="col-span-2 flex items-center">
            <div>
              <h2 className="font-bold mb-2 text-[#FDB715] ">Name</h2>
              <h2 className="font-serif  mb-1 font-medium">Position</h2>
              <h2 className="font-serif  italic mb-1 font-medium underline">
                Gmail
              </h2>
              <h2>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
                ab excepturi aliquid vel dolor eveniet temporibus laudantium
                ipsa totam sequi mollitia eos obcaecati voluptatibus tenetur sed
                exercitationem? Quis, ea esse.
              </h2>
            </div>
          </div>

          <div className="mt-5 col-span-3 border border-[#FDB715] border-bottom-2"></div>
        </div>

        <div className="grid grid-cols-3 gap-4 my-5 ">
          <div className="col-span-2 flex items-center">
            <div className="text-end">
              <h2 className="font-bold mb-2 text-[#FDB715]">Name</h2>
              <h2 className="font-serif  mb-1 font-medium">Position</h2>
              <h2 className="font-serif  italic mb-1 font-medium underline">
                Gmail
              </h2>
              <h2>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
                ab excepturi aliquid vel dolor eveniet temporibus laudantium
                ipsa totam sequi mollitia eos obcaecati voluptatibus tenetur sed
                exercitationem? Quis, ea esse.
              </h2>
            </div>
          </div>
          {/* Right Div */}
          <div className="flex gap-2 items-center">
            <div>
              <div className="rounded-full overflow-clip">
                <img
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                  className="h-30 md:h-52 xl:h-60 w-auto"
                  alt=""
                />
              </div>
            </div>

            <div className="">
              <p>IG</p>
              <p>FB</p>
              <p>TW</p>
            </div>
          </div>
          <div className="mt-5 col-span-3 border border-[#FDB715] border-bottom-2"></div>
        </div>
      </div>
    </div>
  );
}
