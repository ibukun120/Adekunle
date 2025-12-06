import Image from "next/image";
import React from "react";

const FrontImage = () => {
  return (
    <div className="bg-white text-black px-6 md:px-12 lg:px-24 py-10">
      <h1 className="font-semibold text-[#005C10] text-2xl mb-4 tracking-wider">
        PROBLEM–SOLUTION DIAGRAM
      </h1>

      <div>
        <Image
          src="/images/show/chart.png"
          alt="chart"
          width={800}
          height={500}
          className="w-full md:h-[700px]"
        />
      </div>
    </div>
  );
};

export default FrontImage;
