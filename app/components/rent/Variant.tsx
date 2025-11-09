import Image from "next/image";
import React from "react";

const Variant = () => {
  return (
    <div className="bg-white text-black px-6 md:px-12 lg:px-24 xl:px-32 py-12">
      <div className="text-center px-0 md:px-12 lg:px-20">
        <h1 className="text-[#ED2939] text-3xl font-semibold mb-3">
          Logo Variants
        </h1>
        <p>
          To ensure scalability and consistent recognition, the core Now Rent
          Easy logo was extended into a flexible system of variants suitable for
          diverse brand touchpoints.
        </p>
      </div>
      {/* image */}
      <div className="flex justify-center items-center gap-12 md:gap-32 mt-12">
        <Image
          src="/images/rent/variant2.png"
          alt="variant2"
          height={150}
          width={150}
        />
        <Image
          src="/images/rent/variant3.png"
          alt="variant2"
          height={100}
          width={100}
        />
      </div>
      <div className="flex justify-center items-center gap-12 md:gap-32 mt-20">
        <Image
          src="/images/rent/variant4.png"
          alt="variant2"
          height={100}
          width={100}
        />
        <Image
          src="/images/rent/Vairant5.png"
          alt="variant2"
          height={100}
          width={100}
        />
      </div>
    </div>
  );
};

export default Variant;
