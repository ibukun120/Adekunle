import React from "react";

const StyleGuide = () => {
  return (
    <div className="bg-white px-6 md:px-16 lg:px-24 py-16 text-black">
      <h1 className="text-3xl font-bold text-green-600 mb-8 2xl:text-4xl">Style Guide</h1>
      <p className="text-xl font-semibold 2xl:text-2xl mb-3">Font</p>
      <div className="flex justify-between flex-col md:flex-row gap-6 mb-6">
        <div className="text-4xl lg:text-7xl mt-4 md:mt-0">OUTFIT</div>

        <div className="tracking-widest 2xl:text-2xl">
          <p className="tracking-[2.5px] md:tracking-[5px] 2xl:tracking-[8px] leading-10">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
          <p className="tracking-[5px] md:tracking-[5px] 2xl:tracking-[10px] leading-10">abcdefghijklmnopqrstvwxyz</p>
          <div className="flex gap-6 mt-3 2xl:tracking-[8px]">
            <span className="font-extrabold text-xl leading-10 2xl:text-5xl">OUTFIT</span>
            <span className="font-semibold text-base leading-10 2xl:text-4xl">OUTFIT</span>
            <span className="text-sm leading-10 2xl:text-4xl">OUTFIT</span>
          </div>
        </div>
      </div>
      <p className="text-xl font-semibold mt-4 md:mt-0 2xl:text-2xl mb-3">Colours</p>
      {/* color */}
      <div className="flex">
        {/* green */}
        <div className="flex flex-col w-2/5 gap-4">
          <div className="bg-[#009933] h-24 2xl:h-32"></div>
          <p className="2xl:text-xl">009933</p>
        </div>
        {/* black 1 */}
        <div className="flex flex-col w-1/5 gap-4">
          <div className="bg-[#000000] h-24 2xl:h-32"></div>
          <p className="2xl:text-xl">000000</p>
        </div>
        {/* black 2 */}
        <div className="flex flex-col w-1/5 gap-4">
          <div className="bg-[#696969] h-24 2xl:h-32"></div>
          <p className="2xl:text-xl">696969</p>
        </div>
        {/* black 3 */}
        <div className="flex flex-col w-1/5 gap-4">
          <div className="bg-[#AFB1B6] h-24 2xl:h-32"></div>
          <p className="2xl:text-xl">AFB1B6</p>
        </div>
      </div>
    </div>
  );
};

export default StyleGuide;
