import Image from "next/image";
import React from "react";

const First = () => {
  return (
    <div className="bg-[#0F52BA] px-4 md:px-12 lg:px-32 py-16 md:py-18">
      {/* first div */}
      <div className="flex gap-4 justify-center items-center flex-col md:flex-row w-full">
        <div className="text-white flex-1 text-sm w-full md:w-1/2">
          <h1 className="text-3xl 2xl:text-5xl font-semibold">Brand Guidelines</h1>
          <p className=" mt-3 lg:pr-16 text-sm 2xl:text-xl">
            The SapphireCredit Brand Guideline (2025) is a comprehensive
            document that defines the visual and cultural identity of the brand.
            It covers the logo system and variants, color palette, typography,
            patterns, and application rules, ensuring a consistent and
            professional presence across digital and offline platforms.
          </p>

          <p className=" mt-3 lg:pr-16 text-sm 2xl:text-xl">
            Beyond visuals, it also highlights the brand’s values of trust,
            innovation, accessibility, and financial inclusion, serving as both
            a design manual and a cultural reference for all stakeholders.
          </p>

          <p className=" font-semibold mt-3 lg:pr-16 text-sm 2xl:text-xl">
            Please note that there is just a few pages in the guidelines.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/images/sapphire/img1.png"
            alt="image"
            width={400}
            height={300}
            className="object-contain w-full h-auto"
          />
        </div>
      </div>
      {/* second */}
      <div className="flex mt-2 gap-4 w-full">
        <div className="w-1/2">
          <Image
            src="/images/sapphire/overview.png"
            alt="image"
            width={400}
            height={300}
            className="object-contain w-full"
          />
        </div>

        <div className="w-1/2">
          <Image
            src="/images/sapphire/img2.png"
            alt="image"
            width={400}
            height={300}
            className="object-contain w-full"
          />
        </div>
      </div>

      {/* third */}
      <div className="flex mt-2 gap-4 w-full">
        <div className="w-1/2">
          <Image
            src="/images/sapphire/img3.png"
            alt="image"
            width={400}
            height={300}
            className="object-contain w-full"
          />
        </div>
        <div className="w-1/2">
          <Image
            src="/images/sapphire/img4.png"
            alt="image"
            width={400}
            height={300}
            className="object-contain w-full"
          />
        </div>
      </div>

      {/* forth */}
      <div className="flex mt-2 gap-4 w-full">
        <div className="w-1/2">
          <Image
            src="/images/sapphire/proper.png"
            alt="image"
            width={400}
            height={300}
            className="object-contain w-full"
          />
        </div>
        <div className="w-1/2">
          <Image
            src="/images/sapphire/improper.png"
            alt="image"
            width={400}
            height={300}
            className="object-contain w-full"
          />
        </div>
      </div>

      {/* box */}
      {/* <div className=" 2xl:block bg-white w-full h-20"></div> */}
    </div>
  );
};

export default First;
