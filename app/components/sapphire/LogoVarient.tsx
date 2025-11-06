import Image from "next/image";
import React from "react";

const LogoVarient = () => {
  return (
    <div className="bg-white px-4 md:px-12 lg:px-32 py-16 md:py-24">
      <h1 className="text-[#0F52BA] text-center text-3xl mb-4 font-semibold">
        Logo Variants
      </h1>
      <p className="text-center text-black mb-8">
        The core SapphireCredit logo was extended into sub-brands to maintain
        consistency and scalability across product lines:
      </p>
      <div>
        <div className="flex gap-12 md:gap-32 justify-center items-center mb-16 flex-col md:flex-row">
          <Image
            src="/images/sapphire/solar.png"
            alt="solar.png"
            width={250}
            height={50}
            className="h-[87.5px] w-[380px]"
          />

          <Image
            src="/images/sapphire/device1.png"
            alt="device1.png"
            width={250}
            height={50}
            className="h-[87.5px] w-[380px]"
          />
        </div>

        <div className="flex gap-12 md:gap-32 justify-center items-center flex-col md:flex-row">
          <Image
            src="/images/sapphire/solar.png"
            alt="device2.png"
            width={250}
            height={50}
            className="h-[87.5px] w-[380px]"
          />

          <Image
            src="/images/sapphire/device1.png"
            alt="loan.png"
            width={250}
            height={50}
            className="h-[87.5px] w-[380px]"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoVarient;
