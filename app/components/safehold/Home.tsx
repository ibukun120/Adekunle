import Image from "next/image";
import React from "react";
import Tick from "../paylinq/Tick";

const Home = () => {
  return (
    <div className="bg-white text-black px-4 md:px-12 lg:px-24 2xl:px-[120px] py-16 md:py-24 flex flex-col md:flex-row gap-12 md:gap-24 justify-between md:mt-18">
      {/* fisrt image */}
      <div className="w-full md:w-2/5 flex flex-col gap-3 md:gap-4 justify-center">
        <div className="w-full mb-8">
          <Image
            src="/images/show/Safehold.png"
            alt="Frame39.png"
            width={500}
            height={150}
            className="w-full mt-18 md:mt-0"
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

        <div className="flex gap-4 justify-center items-center md:justify-normal">
          <Image
            src="/images/toolkit1.png"
            alt="toolkit1"
            width={100}
            height={60}
            className="w-10 h-10"
          />
          <p className="bg-[#001E36] rounded-lg px-2 py-2 font-bold text-[#31A8FF]">
            Ps
          </p>
          <p className="text-[#FF9A00] rounded-lg px-2.5 py-2 font-bold bg-[#330000]">
            Ai
          </p>
          <Image
            src="/images/toolkit4.png"
            alt="toolkit4"
            width={100}
            height={60}
            className="w-10 h-10"
          />
        </div>
      </div>

      {/* second image */}
      <div className="w-full md:w-3/5 md:mt-18">
        <div className="flex justify-center items-center">
          <div>
            <Image
              src="/images/safehold/Laptopmockup1.png"
              alt="Group36.png"
              width={400}
              height={700}
              className="w-full h-full"
            />
          </div>
          <div>
            <Image
              src="/images/safehold/laptop2.png"
              alt="Group36.png"
              width={200}
              height={400}
              className="w-[180px] h-[150px] md:h-[230px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
