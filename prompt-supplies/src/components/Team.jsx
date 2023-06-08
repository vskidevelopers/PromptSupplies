import React from "react";
import sales from "../assets/images/sales.jpg";
import insta from "../assets/svgs/insta.svg";
import fb from "../assets/svgs/fb.svg";
import tweet from "../assets/svgs/tweet.svg";

export default function Team() {
  return (
    <div>
      <div className="container mx-auto px-5 md:px-20">
        <div className="relative flex flex-col justify-center items-center py-10">
          <div className="w-full md:w-1/2 text-start md:text-center">
            <h2 className="text-[#FDB715] text-md font-semibold uppercase ">
              Meet the Team
            </h2>
            x
            <h1 className="text-3xl font-bold capitalize">
              Empowering Organizations through Result-Driven Solutions
            </h1>
          </div>
          <div className="absolute top-0 left-0 h-full w-full flex justify-end md:justify-start items-center opacity-10">
            <h1 className="text-7xl md:text-9xl font-bold">Team</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-5">
          <div className="col-span-2 md:col-span-1 flex flex-col-reverse md:flex-row gap-2 items-center">
            <div className="w-1/2 md:w-auto  flex justify-evenly md:block gap-5">
              <img src={insta} alt="" className="h-5" />
              <img src={fb} alt="" className="h-5" />
              <img src={tweet} alt="" className="h-5" />
            </div>

            <div>
              <div className="rounded-full overflow-clip">
                <img
                  src={sales}
                  className="h-30 md:h-52 xl:h-60 w-auto"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* Right Div */}
          <div className="col-span-2 flex items-center">
            <div>
              <h2 className="font-bold mb-2 text-[#FDB715] ">Prisca Mutahi</h2>
              <h2 className="font-serif  mb-1 font-medium">position</h2>
              <h2 className="font-serif  italic mb-1 font-medium underline">
                sales@promptsupplies.co.ke
              </h2>
              <h2>
                Priscah is a seasoned sales and marketing professional with a
                strong track record of driving business growth and exceeding
                targets. With several years of experience in the industry, she
                possesses a deep understanding of various sales and marketing
                strategies, customer acquisition, and market analysis. Priscah
                is highly skilled in developing and implementing effective sales
                plans, creating innovative marketing campaigns, and building
                strong relationships with clients and stakeholders. Her
                exceptional communication and negotiation abilities, coupled
                with her strategic thinking, make her a valuable asset in our
                sales and marketing team.
              </h2>
            </div>
          </div>

          <div className="mt-5 col-span-3 border border-[#FDB715] border-bottom-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5 ">
          <div className="col-span-2 flex items-center">
            <div className="text-end">
              <h2 className="font-bold mb-2 text-[#FDB715]">Ben Muchemi</h2>
              <h2 className="font-serif  mb-1 font-medium">Developer</h2>
              <h2 className="font-serif  italic mb-1 font-medium underline">
                developer@promptsupplies.co.ke
              </h2>
              <h2 className="text-start">
                I'm Ben, a dedicated full-stack web developer and software
                engineer with three years of hands-on experience. My expertise
                lies in utilizing the power of React and Django to create robust
                and efficient systems. I am passionate about crafting innovative
                solutions that meet the unique needs of businesses. Working
                alongside clients and stakeholders, I aim to build strong and
                lasting relationships while driving the success of their
                projects.
              </h2>
            </div>
          </div>
          {/* Right Div */}
          <div className="col-span-2 md:col-span-1 flex flex-col md:flex-row gap-2 items-center">
            <div>
              <div className="rounded-full overflow-clip">
                <img
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                  className="h-30 md:h-52 xl:h-60 w-auto"
                  alt=""
                />
              </div>
            </div>

            <div className="w-1/2 flex justify-evenly md:w-auto md:block ">
              <img src={insta} alt="" className="h-5" />
              <img src={fb} alt="" className="h-5" />
              <img src={tweet} alt="" className="h-5" />
            </div>
          </div>
          <div className="mt-5 col-span-3 border border-[#FDB715] border-bottom-2"></div>
        </div>
      </div>
    </div>
  );
}
