import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="px-4  md:px-12 lg:px-24 py-20 bg-white w-full text-black flex justify-between items-center flex-col md:flex-row gap-20 md:gap-20">
      <div className="flex flex-col gap-5 justify-center items-center md:justify-normal md:items-start w-full md:w-2/3">
        <h1 className="text-white bg-[#009933] py-3 rounded-full px-24  text-center 2xl:text-2xl">
          UI/UX Case Study
        </h1>
        <div className="w-full">
          <Image
            src="/images/lookali/Lookali.png"
            alt="Lookali.png"
            width={400}
            height={150}
            className="w-full md:w-5/6"
          />
        </div>
        <p className="text-3xl font-medium 2xl:text-5xl">A local freelance app</p>

        <div className="flex gap-4">
          <div className="flex items-center text-xl">
            <span>
              <Image
                src="/images/lookali/Tick-Square.png"
                alt="Lookali.png"
                width={15}
                height={15}
                className="mr-2 2xl:w-6 h-auto"
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
                className="2xl:w-6 h-auto mr-2"
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
            className="w-full h-auto"
          />
          <Image
            src="/images/lookali/ps.png"
            alt="Lookali.png"
            width={40}
            height={55}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="w-full md:w-1/3">
        <Image
          src="/images/lookali/Group8.png"
          alt="Group8.png"
          width={400}
          height={450}
          className="w-[350px]  lg:w-[380px] md:w-[278px] h-auto"
        />
      </div>
    </div>
  );
};

export default Home;
