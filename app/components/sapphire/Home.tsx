import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="px-4 md:px-12 lg:px-24 py-24 md:py-24 bg-[#0A3578] ">
      <div className="mt-12 flex items-center justify-center flex-col gap-4">
        <Image src='/images/sapphire/sapphireHomeImage.png' alt="sapphireHomeImage.png" width={500} height={150}/>
        <p className="text-white text-center">Smart, secure, and seamless financial solutions.</p>
      </div>
    </div>
  );
};

export default Home;
