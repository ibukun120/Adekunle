import Image from "next/image";
import React from "react";

const FirstHalf = () => {
  return (
    <div className="text-white w-1/2 mt-1">
      <div>
        <h1 className="text-3xl font-semibold">Brand Guidelines</h1>
        <p className=" mt-8 pr-8">
          The SapphireCredit Brand Guideline (2025) is a comprehensive document
          that defines the visual and cultural identity of the brand. It covers
          the logo system and variants, color palette, typography, patterns, and
          application rules, ensuring a consistent and professional presence
          across digital and offline platforms.
        </p>

        <p className=" mt-8 pr-8">
          Beyond visuals, it also highlights the brand’s values of trust,
          innovation, accessibility, and financial inclusion, serving as both a
          design manual and a cultural reference for all stakeholders.
        </p>

        <p className=" font-semibold mt-6 pr-8">
          Please note that there is just a few pages in the guidelines.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center gap-8 mt-8">
        <Image
          src="/images/sapphire/overview.png"
          alt="image"
          width={400}
          height={300}
          className="object-contain md:h-[321.7px] w-full"
        />

        <Image
          src="/images/sapphire/img3.png"
          alt="image"
          width={400}
          height={300}
          className="object-contain md:h-[321.7px] w-full"
        />

        <Image
          src="/images/sapphire/proper.png"
          alt="image"
          width={400}
          height={300}
          className="object-contain md:h-[321.7px] w-full"
        />
      </div>
    </div>
  );
};

export default FirstHalf;
