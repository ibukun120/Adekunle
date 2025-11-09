import React from "react";

const RentText = () => {
  return (
    <div className="bg-white text-black px-6 md:px-12 lg:px-24 xl:px-32 py-12 flex flex-col gap-10">
      <div className="flex justify-between">
        <p>Industry: Real Estate</p>
        <p>Year: 2023</p>
      </div>

      <div className="">
        <h1 className="text-[#ED2939] text-3xl font-semibold">My Role</h1>
        <ul className="list-disc ml-6 mt-4">
          <li>
            Conducted brand discovery sessions to understand the company vision.
          </li>
          <li>Led the creative direction and design execution.</li>
          <li>
            Designed the logo, typography system, color palette, and brand usage
            guidelines.
          </li>

          <li>
            Developed mockups and applications (stationery, signage, and digital
            collateral).
          </li>
        </ul>
      </div>

      <div>
        <h1 className="text-[#ED2939] text-3xl font-semibold mb-4">
          Project Description
        </h1>
        <p>
          Now Rent Easy Property Management Inc. (NRE) is a Canada-based
          property management company offering rental and housing solutions.
          They approached me to design a comprehensive brand identity system
          that would establish a professional, trustworthy, and modern presence
          in the competitive real estate and property management market.
        </p>

        <p className="mt-6">
          The project involved creating a new logo, defining brand colors,
          typography, and visual guidelines, and developing applications across
          stationery, digital, and marketing collateral. The final output was a
          33-page brand guideline document ensuring consistent use of the brand
          across all platforms.
        </p>
      </div>

      <div>
        <h1 className="text-[#ED2939] text-3xl font-semibold">
          Problem & Goal
        </h1>
        <h2 className="font-bold mt-4">Problem:</h2>
        <p>
          The company lacked a cohesive and professional brand identity to
          reflect its services in property management. Its visual identity was
          fragmented, inconsistent across channels, and did not communicate
          reliability to clients.
        </p>

        <h2 className="font-bold mt-4">Goal:</h2>
        <p>
          To design a unified brand identity system that builds trust, reflects
          modern professionalism, and is scalable across print and digital
          touchpoints.
        </p>
      </div>
    </div>
  );
};

export default RentText;
