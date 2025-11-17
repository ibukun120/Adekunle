import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="bg-white w-full pt-12">
      <div className="flex justify-center items-center bg-[#0A7435] px-6 md:px-12 lg:px-24 py-16 mt-28 md:mt-20 xl:mt-28 h-[200px] md:h-[230px] xl:h-[300px]">
        <Image
          src="/images/farm/farm.png"
          alt="logo"
          width={250}
          height={120}
          className="w-[449px] h-[109px]"
        />
      </div>
    </div>
  );
};

export default Home;
