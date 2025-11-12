import Image from "next/image";
import React from "react";

const LogoEvolution = () => {
  return (
    <div className="bg-white px-4 md:px-12 lg:px-24 py-8 md:py-24">
      <h1 className="text-center text-3xl font-semibold text-[#0F52BA]">
        Logo Evolution
      </h1>
      <p className="text-center text-black mt-4">
        The logo concepts that were submitted as I deliberated with the
        stakeholders
      </p>

      <div className="flex items-center md:justify-between flex-col gap-6 md:gap-0 justify-center md:flex-row mt-8">
        <Image
          src="/images/sapphire/logo1.png"
          alt="logo1.png"
          width={250}
          height={50}
          className="h-14"
        />
        <Image
          src="/images/sapphire/logo2.png"
          alt="logo2.png"
          width={250}
          height={50}
          className="h-14"
        />
        <Image
          src="/images/sapphire/logo3.png"
          alt="logo3.png"
          width={250}
          height={50}
          className="h-14"
        />
      </div>

      <div className="mt-18 flex items-center justify-center flex-col text-black gap-1">
        <h1>Final Designed and Approved Logo</h1>
        <Image
          src="/images/sapphire/SapphireCredit.png"
          alt="SapphireCredit.png"
          width={250}
          height={50}
          className="h-[94.44px] w-[629px]"
        />
      </div>

      <div className="flex justify-center items-center gap-24 mt-12 md:mt-24 flex-col md:flex-row">
        <div>
          <h1 className="text-black text-center">Old Logo</h1>
          <Image
            src="/images/sapphire/logo4.png"
            alt="logo3.png"
            width={250}
            height={50}
            className="h-[169px] w-[301px]"
          />
        </div>

        <div>
          <h1 className="text-black text-center md:mb-12">New Logo</h1>
          <Image
            src="/images/sapphire/SapphireCredit.png"
            alt="logo3.png"
            width={250}
            height={50}
            className="h-[59px] w-[394px]"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoEvolution;
