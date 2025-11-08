import Image from "next/image";
import React from "react";

const UserFlow = () => {
  return (
    <div className="bg-white px-6 md:px-16 lg:px-24 py-16">
      <h1 className="text-3xl font-semibold text-center text-[#009933]">
        User Flow
      </h1>
      <div className="mt-10 flex justify-center items-center">
        <Image
          src="/images/lookali/flow.png"
          alt="flow"
          width={700}
          height={1000}
        />
      </div>
    </div>
  );
};

export default UserFlow;
