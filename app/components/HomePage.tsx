// import React from 'react'

import Image from "next/image";

const HomePage = () => {
  return (
    <div className="text-[#020037] bg-white px-6 md:px-12 lg:px-24 py-16 flex justify-center items-center flex-col md:flex-row gap-10 md:gap-0">
      <div className="w-full md:w-1/2 flex flex-col gap-5 md:text-left text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
          Where Great Design <span className="text-[#0059FF]">Meets</span> Business Impact
        </h1>
        <p className="text-xl">
          I craft high-converting interfaces that align with your brand goals
          and user expectations.
        </p>
        <div className="flex flex-start gap-10 md:gap-4">
          <button className="py-2 px-4 md:px-8 rounded-full border cursor-pointer hover:scale-105 transition duration-300">Get in Touch</button>
          <button className="py-2 px-4 md:px-8 rounded-full bg-[#020037] text-white hover:scale-105 cursor-pointer transition duration-300">View Projects</button>
        </div>
      </div>

      {/* image div */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <Image src="/images/Frame4.png" alt="Frame4.png" width={390} height={442} className=""/>
      </div>
    </div>
  );
};

export default HomePage;
