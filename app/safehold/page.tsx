import Image from "next/image";
import React from "react";
import Overview from "../components/safehold/Overview";
import FrontText from "../components/safehold/FrontText";
import FrontImage from "../components/safehold/FrontImage";

const page = () => {
  return (
    <div className="bg-white ">
      <div className="flex justify-center items-center w-full mb-42 px-6 md:px-12 lg:px-20 py-16 mt-16">
        <Image
          src="/images/show/Safehold.png"
          alt="safehold"
          width={500}
          height={200}
          className="w-full md:w-[570px] md:h-[179px]"
        />
      </div>
      <Overview />
      <FrontText/>
      <FrontImage/>
    </div>
  );
};

export default page;
