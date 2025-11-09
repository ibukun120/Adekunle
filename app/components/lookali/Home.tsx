import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="px-4  md:px-12 lg:px-24 py-20 bg-white w-full text-black flex justify-between items-center flex-col md:flex-row gap-20 md:gap-0">
      <div className="flex flex-col gap-5 justify-center items-center md:justify-normal md:items-start">
        <h1 className="text-white bg-[#009933] py-3 rounded-full px-6 w-60 text-center">
          UI/UX Case Study
        </h1>
        <div>
          <Image
            src="/images/lookali/Lookali.png"
            alt="Lookali.png"
            width={400}
            height={150}
          />
        </div>
        <p className="text-3xl font-medium">A local freelance app</p>

        <div className="flex gap-4">
          <div className="flex items-center text-xl">
            <span>
              <Image
                src="/images/lookali/Tick-Square.png"
                alt="Lookali.png"
                width={15}
                height={15}
                className="mr-2"
              />
            </span>{" "}
            25+ Screens
          </div>

          <div className="flex items-center text-xl">
            <span>
              <Image
                src="/images/lookali/Tick-Square.png"
                alt="Lookali.png"
                width={15}
                height={15}
                className="mr-2"
              />
            </span>{" "}
            Modern UI
          </div>
        </div>

        <div className="flex gap-4">
          <Image
            src="/images/lookali/fig.png"
            alt="Lookali.png"
            width={40}
            height={55}
          />
          <Image
            src="/images/lookali/ps.png"
            alt="Lookali.png"
            width={40}
            height={55}
          />
        </div>
      </div>

      <div>
        <Image
          src="/images/lookali/Group8.png"
          alt="Group8.png"
          width={400}
          height={450}
          className="w-[350px] h-[370px] lg:w-[380px] lg:h-[310px] md:w-[278px] md:h-[310px]"
        />
      </div>
    </div>
  );
};

export default Home;
