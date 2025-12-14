import Image from "next/image";
import React from "react";

const Variant = () => {
  return (
    <div className="bg-white text-black px-6 md:px-12 lg:px-24 xl:px-32 py-12">
      <div className="text-center px-0 md:px-12 lg:px-20">
        <h1 className="text-[#ED2939] text-3xl font-semibold mb-3 2xl:text-[36px]">
          Logo Variants
        </h1>
        <p className="text-base 2xl:text-[21.53px]">
          To ensure scalability and consistent recognition, the core Now Rent
          Easy logo was extended into a flexible system of variants suitable for
          diverse brand touchpoints.
        </p>
      </div>
      {/* image */}
      <div className="flex justify-center items-center gap-12 md:gap-32 mt-12 2xl:gap-72">
        <Image
          src="/images/rent/variant2.png"
          alt="variant2"
          height={150}
          width={150}
          className="2xl:w-[222.62657165527344px] 2xl:h-[143.11708068847656]"
        />
        <Image
          src="/images/rent/variant3.png"
          alt="variant2"
          height={100}
          width={100}
          className="2xl:w-[128.2753143310547px] 2xl:h-[150.6894073486328px]"
        />
      </div>
      <div className="flex justify-center items-center gap-12 md:gap-32 mt-20 2xl:gap-72">
        <Image
          src="/images/rent/Variant4.png"
          alt="variant2"
          height={100}
          width={100}
          className="2xl:w-[126.7608413696289px] 2xl:h-[137.81643676757812px]"
        />
        <Image
          src="/images/rent/Vairant5.png"
          alt="variant2"
          height={100}
          width={100}
          className="2xl:w-[178.25270080566406px] 2xl:h-[178.25270080566406px]"
        />
      </div>
    </div>
  );
};

export default Variant;
