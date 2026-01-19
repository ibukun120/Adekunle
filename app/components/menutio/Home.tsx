import Image from "next/image";
import React from "react";
import Home2 from "./Home2";

const Home = () => {
  return (
    <div className="bg-white py-16 md:py-24 md:mt-18">
      {/* Header Section */}
      <section className="bg-[#FB8500] py-18">
        <h1 className="text-center text-white text-3xl md:text-4xl font-bold">
          Menutio Website Review and Redesign
        </h1>
      </section>

      {/* Content Section */}
      <section className="bg-white text-black px-4 md:px-12 lg:px-24 2xl:px-[120px] py-12 md:py-20">
        <p className="text-gray-700 text-base leading-relaxed mb-6">
          Below is the revamped landing page of the Menutio website, a project focused on improving user experience and visual appeal to effectively attract and retain customers.
        </p>

        <h2 className="text-[#FB8500] font-semibold text-lg mb-2">
          Prior Challenges:
        </h2>

        <p className="text-gray-700 text-base leading-relaxed">
          Menutio brand is a brand based in Austria and it is known for creating a platform for digital menu fully customizable for any restaurant around the world, but the not too cool challenge is that the landing page is not captivating and visually appealing enough to embody the amazing idea of the digital menu. As much as it explains the way the app can be used, the color and aesthetics are not good at all.
        </p>

        <h2 className="text-[#FB8500] font-semibold text-lg my-8">
          The Current Menutio Website Landing Page.
        </h2>

        {/* first image */}
        <div>
          <Image
            src="/images/menutio/menutio1.png"
            alt="menutio"
            width={1000}
            height={1200}
            className="w-full h-full"
          />
        </div>

        <Home2/>
      </section>
    </div>
  );
};

export default Home;
