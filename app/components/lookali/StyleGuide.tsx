import React from "react";

const StyleGuide = () => {
  return (
    <div className="bg-white px-6 md:px-16 lg:px-24 py-16 text-black">
      <h1 className="text-3xl font-bold text-green-600 mb-8">Style Guide</h1>
      <p className="text-xl font-semibold">Font</p>
      <div className="flex justify-between">
        <div className="text-2xl md:text-4xl lg:text-7xl">OUTFIT</div>

        <div className="tracking-widest leading-6">
          <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
          <p>abcdefghijklmnopqrstvwxyz</p>
          <div className="flex gap-6">
            <span className="font-bold text-xl">OUTFIT</span>
            <span className="font-semibold">OUTFIT</span>
            <span>OUTFIT</span>
          </div>
        </div>
      </div>
      <p className="text-xl font-semibold">Colours</p>
      {/* color */}
      <div className="flex">
        {/* green */}
        <div className="flex flex-col w-2/5 gap-4">
          <div className="bg-[#009933] h-24"></div>
          <p>009933</p>
        </div>
        {/* black */}
        <div className="flex flex-col w-1/5 gap-4">
          <div className="bg-[#000000] h-24"></div>
          <p>000000</p>
        </div>
        {/* black */}
        <div className="flex flex-col w-1/5 gap-4">
          <div className="bg-[#696969] h-24"></div>
          <p>696969</p>
        </div>
        {/* black */}
        <div className="flex flex-col w-1/5 gap-4">
          <div className="bg-[#AFB1B6] h-24"></div>
          <p>AFB1B6</p>
        </div>
      </div>
    </div>
  );
};

export default StyleGuide;
