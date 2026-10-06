import React from "react";

const RentText = () => {
  return (
    <div className="bg-white text-black px-6 md:px-12 lg:px-24 xl:px-32 py-12 flex flex-col gap-10">
      <div className="flex justify-between text-base 2xl:text-[22px]">
        <p>Industry: Agriculture / Food Delivery</p>
        <p>Year:2023 </p>
      </div>

      <div className="">
        <h1 className="text-[#0A7435] text-[36px] font-bold">My Role</h1>
        <ul className="list-disc ml-6 mt-4 text-base 2xl:text-[22px]">
          <li>
            Conducted brand discovery to understand FarmHive's vision, audience
            and market.
          </li>
          <li>
            Led the creative direction and design execution. Designed the logo,
            typography system, colour palette and brand usage guidelines.
          </li>
          <li>
            Developed brand applications across social media, delivery vehicles,
            staff apparel and merchandise.
          </li>

          {/* <li>
            Developed mockups and applications (stationery, signage, and digital
            collateral).
          </li> */}
        </ul>
      </div>

      <div>
        <h1 className="text-[#0A7435] text-[36px] font-bold mb-4">
          Project Description
        </h1>
        <p className="text-base 2xl:text-[22px]">
          FarmHive is a farm-to-home brand that connects households with fresh,
          healthy produce sourced directly from local farmers. They needed a
          complete brand identity that would feel fresh, trustworthy and
          approachable, and that would stand out in the growing fresh food
          delivery market.
        </p>

        <p className="mt-6 text-base 2xl:text-[22px]">
          The project involved creating a new logo, defining the brand colours,
          typography and visual guidelines, and developing applications across
          digital, print and merchandise. The final output was a brand identity
          system that keeps FarmHive consistent across every platform.
        </p>
      </div>

      <div>
        <h1 className="text-[#0A7435] text-[36px] font-bold">Problem & Goal</h1>
        <h2 className="font-bold mt-4 text-base 2xl:text-[22px]">Problem:</h2>
        <p className="text-base 2xl:text-[22px]">
          FarmHive had no cohesive visual identity to communicate what it stands
          for: fresh food, local farmers and reliable delivery. Without one, it
          was hard to build recognition and earn the trust of customers choosing
          where their food comes from.
        </p>

        <h2 className="font-bold mt-4 text-base 2xl:text-[22px]">Goal:</h2>
        <p className="text-base 2xl:text-[22px]">
          To design a unified brand identity that communicates freshness and
          trust, feels modern and friendly, and scales across packaging,
          delivery vehicles, apparel and digital touchpoints.
        </p>
      </div>
    </div>
  );
};

export default RentText;
