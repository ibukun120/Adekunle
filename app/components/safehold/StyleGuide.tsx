import React from "react";

const StyleGuide = () => {
  return (
    <div className="bg-white text-black px-4 md:px-12 lg:px-24 py-8 md:py-16">
      <h2 className="text-3xl 2xl:text-4xl font-bold text-[#009933] mb-5 md:mb-12 ">
        Style Guide
      </h2>

      <div className="">
        {/* Font Section */}
        <div className="">
          <h3 className="text-xl text-gray-800 mb-3 2xl:text-2xl font-bold">Font</h3>
          <div className="space-x-4 flex flex-col md:flex-row w-full gap-4">
            <div className="w-full md:w-1/2">
              <h1 className="text-[62.58px] md:text-6xl font-extrabold md:font-bold ">
                Manrope
              </h1>
            </div>
            <div className="space-y-2 text-black text-2xl w-full md:w-1/2 ">
              <p className="text-[14px] tracking-[4px] 2xl:tracking-[10px] leading-6 2xl:leading-10 2xl:text-2xl">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
              </p>
              <p className="text-[14px] tracking-[4px] 2xl:tracking-[10px] leading-6 2xl:leading-10 2xl:text-2xl">
                abcdefghijklmnopqrstuvwxyz
              </p>
              <p className="text-black text-xl md:text-2xl 2xl:text-4xl">
                <span className="text-black font-extrabold 2xl:text-5xl">
                  Manrope{" "}
                </span>
                <span className="font-semibold">Manrope </span>{" "}
                <span>Manrope</span>
              </p>
            </div>
          </div>
        </div>

        {/* Colors Section */}
        <div className="">
          <h3 className="text-xl 2xl:text-2xl text-gray-800 mt-5 mb-4 font-bold">
            Colours
          </h3>
          <div className="flex flex-col sm:flex-row">
            <div className="w-full md:w-1/2">
              <div className="bg-[#008000] flex flex-col gap-8 justify-center py-[19px] md:py-10 2xl:py-16 px-[23px] md:px-8 text-white mb-4 md:mb-0 2xl:text-2xl">
              </div>
              <p className="text-sm font-manrope mt-3">#008000</p>
            </div>
            <div className="w-full md:w-1/2 2xl:text-2xl mt-8 md:mt-0">
              <div className="bg-[#333333] flex flex-col gap-8 justify-center py-[19px] md:py-10 2xl:py-16 px-[23px] md:px-8 text-white">
              </div>
              <p className="text-sm font-manrope mt-3">#333333</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleGuide;
