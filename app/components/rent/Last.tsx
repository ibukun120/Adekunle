import Image from "next/image";
import React from "react";

const Last = () => {
  return (
    <div className="bg-linear-to-b from-[#ED2939] to-[#000000] py-10 md:py-16 px-4 md:px-12 lg:px-24 xl:px-32">
      <div className="text-white flex justify-center items-center gap-4 md:gap-10 md:flex-row flex-col">
        <div className="flex justify-center flex-col md:flex-row items-center gap-4 md:gap-10 mt-1">
          <div className="md:w-1/2">
            <h1 className="font-bold text-4xl mb-4">Brand Guidelines</h1>
            <p className="mb-4 text-sm md:text-base">
              The Now Rent Easy Brand Guideline (2023) is a comprehensive
              document that defines the visual and cultural identity of the
              brand. It covers the logo system and variants, color palette,
              typography, patterns, and application rules, ensuring a consistent
              and professional presence across digital and offline platforms.
            </p>
            <p className="mb-4 text-sm md:text-base">
              Beyond visuals, it also highlights the brand’s values of trust,
              reliability, professionalism, and simplicity, serving as both a
              design manual and a cultural reference for all stakeholders.
            </p>

            <p className="mb-4 text-sm  font-black">
              Please note that there is just a few pages in the guidelines.
            </p>
          </div>

          <div className="md:w-1/2">
          <Image
            src="/images/rent/Page1.png"
            alt="page1"
            height={400}
            width={600}
            className="h-full w-full"
          />
        </div>
        </div>
        
      </div>

      <div className="flex justify-center items-center gap-4 md:gap-10 mt-8">
        <div className="w-1/2">
          <Image
            src="/images/rent/Page2.png"
            alt="page2"
            height={400}
            width={600}
            className="h-full w-full"
          />
        </div>
        <div className="w-1/2">
          <Image
            src="/images/rent/Page3.png"
            alt="page3"
            height={400}
            width={600}
            className="h-full w-full"
          />
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 md:gap-10 mt-8">
        <div className="w-1/2">
          <Image
            src="/images/rent/Page4.png"
            alt="page4"
            height={400}
            width={600}
            className="h-full w-full"
          />
        </div>
        <div className="w-1/2">
          <Image
            src="/images/rent/Page5.png"
            alt="page5"
            height={400}
            width={600}
            className="h-full w-full"
          />
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 md:gap-10 mt-8">
        <div className="w-1/2">
          <Image
            src="/images/rent/Page6.png"
            alt="page6"
            height={400}
            width={600}
            className="h-full w-full"
          />
        </div>
        <div className="w-1/2">
          <Image
            src="/images/rent/Page7.png"
            alt="page7"
            height={400}
            width={600}
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Last;
