import Image from "next/image";
import React from "react";
import Tick from "../paylinq/Tick";

const Home = () => {
  return (
    <div className="bg-white text-black px-4 md:px-12 lg:px-24 2xl:px-[120px] py-16 md:py-24 flex flex-col md:flex-row gap-12 md:gap-0 justify-between md:mt-18">
      {/* fisrt image */}
      <div className="w-full md:w-2/5 flex flex-col gap-3 md:gap-8 justify-center">
        <div className="w-full">
          <Image
            src="/images/show/Safehold.png"
            alt="Frame39.png"
            width={600}
            height={200}
            className="w-full mt-18"
          />
        </div>
        {/* <h1 className="text-center md:text-left w-full md:w-[350px] 2xl:w-full 2xl:text-[21.53px]">
          Simplify money management and empower individuals and businesses with
          smarter financial tools.{" "}
        </h1> */}

        <div className="">
          <div className="flex gap-3 justify-center items-center md:justify-normal">
            <Tick price="200+ Screens" />
            <Tick price="Mobile App" />
            <Tick price="Web App" />
          </div>

          <div className="flex gap-3 mt-3 justify-center items-center md:justify-normal">
            <Tick price="Admin Dashboard" />
            <Tick price="Modern UI" />
          </div>
        </div>
      </div>

      {/* second image */}
      <div className="w-full md:w-1/2 md:mt-18">
        <Image
          src="/images/safehold/Laptopmockup1.png"
          alt="Group36.png"
          width={400}
          height={700}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Home;