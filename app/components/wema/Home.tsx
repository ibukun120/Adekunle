import Image from "next/image";
import React from "react";
import Tick from "../paylinq/Tick";
import Home2 from "./Home2";

const Home = () => {
  return (
    <div className="bg-white py-16 md:py-24 md:mt-18">
      {/* Header Section */}
      <section className="bg-[#8F1C36] py-18">
        <h1 className="text-center text-white text-3xl md:text-4xl font-bold">
          Alat Website Review and Redesign
        </h1>
      </section>

      {/* Content Section */}
      <section className="bg-white text-black px-4 md:px-12 lg:px-24 2xl:px-[120px] py-12 md:py-20">
        <p className="text-gray-700 text-base leading-relaxed mb-6">
          I am thrilled to share with you the redesign of Alat website’s landing
          page, a project aimed at enhancing user experience and visual appeal
          to attract and retain customers effectively.
        </p>

        <h2 className="text-[#8B1E3F] font-semibold text-lg mb-2">
          Prior Challenges:
        </h2>

        <p className="text-gray-700 text-base leading-relaxed">
          Alat by Wema current landing page does not resonate with the modern
          trend of beautiful aesthetics and usability, and lacked the necessary
          user experience elements. Visitors would often struggled to navigate
          through the content, leading to a high bounce rate and low conversion
          rates. Recognizing these challenges, I embarked on a journey to
          transform the landing page into a user-centric and visually
          captivating platform using same elements but in a more clear and
          distinct approach.
        </p>

        <h2 className="text-[#8B1E3F] font-semibold text-lg my-8">
          The Current Alat Website Landing Page.
        </h2>

        {/* first image */}
        <div>
          <Image
            src="/images/wema/wema1.png"
            alt="wema"
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
