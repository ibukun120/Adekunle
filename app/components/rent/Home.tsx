import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="bg-white w-full pt-12">
      <div className="flex justify-center items-center bg-linear-to-b from-[#ED2939] to-[#0F0203] px-6 md:px-12 lg:px-24 py-12 mt-28">
        <Image
          src="/images/rent/rentlogo.png"
          alt="logo"
          width={250}
          height={120}
        />
      </div>
    </div>
  );
};

export default Home;
