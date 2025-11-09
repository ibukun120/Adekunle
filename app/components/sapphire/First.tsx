import Image from "next/image";
import React from "react";

const First = () => {
  return (
    <div className="bg-[#0F52BA] px-4 md:px-12 lg:px-24 py-16 md:py-18">
      {/* first div */}
      <div className="flex gap-4 justify-center items-center flex-col md:flex-row">
        <div className="text-white flex-1 text-sm">
          <h1 className="text-3xl font-semibold">Brand Guidelines</h1>
          <p className=" mt-3 lg:pr-16">
            The SapphireCredit Brand Guideline (2025) is a comprehensive
            document that defines the visual and cultural identity of the brand.
            It covers the logo system and variants, color palette, typography,
            patterns, and application rules, ensuring a consistent and
            professional presence across digital and offline platforms.
          </p>

          <p className=" mt-3 lg:pr-16">
            Beyond visuals, it also highlights the brand’s values of trust,
            innovation, accessibility, and financial inclusion, serving as both
            a design manual and a cultural reference for all stakeholders.
          </p>

          <p className=" font-semibold mt-3 lg:pr-16">
            Please note that there is just a few pages in the guidelines.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="/images/sapphire/img1.png"
            alt="image"
            width={400}
            height={300}
            className="object-contain md:h-[321.7px] w-full"
          />
        </div>
      </div>
      {/* second */}
      <div className="flex mt-2 gap-4">
        <div>
          <Image
            src="/images/sapphire/overview.png"
            alt="image"
            width={400}
            height={300}
            className="object-contain md:h-[321.7px] w-full"
          />
        </div>

        <div>
          <Image
            src="/images/sapphire/img2.png"
            alt="image"
            width={400}
            height={300}
            className="object-contain md:h-[321.7px] w-full"
          />
        </div>
      </div>

      {/* third */}
      <div className="flex mt-2 gap-4">
        <div>
          <Image
            src="/images/sapphire/img3.png"
            alt="image"
            width={400}
            height={300}
            className="object-contain md:h-[321.7px] w-full"
          />
        </div>
        <div>
          <Image
            src="/images/sapphire/img4.png"
            alt="image"
            width={400}
            height={300}
            className="object-contain md:h-[321.7px] w-full"
          />
        </div>
      </div>

      {/* forth */}
      <div className="flex mt-2 gap-4">
        <div>
          <Image
            src="/images/sapphire/proper.png"
            alt="image"
            width={400}
            height={300}
            className="object-contain md:h-[321.7px] w-full"
          />
        </div>
        <div>
          <Image
            src="/images/sapphire/improper.png"
            alt="image"
            width={400}
            height={300}
            className="object-contain md:h-[321.7px] w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default First;
