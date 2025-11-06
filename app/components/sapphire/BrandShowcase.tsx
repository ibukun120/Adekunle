import Image from "next/image";
import React from "react";

const BrandShowcase = () => {
  const items = [
    { id: 1, src: "/images/sapphire/laptop.png", bg: "#9BDFEA" },
    { id: 2, src: "/images/sapphire/hoodie.png", bg: "#9BDFEA" },
    {
      id: 3,
      src: "/images/sapphire/sapphireHomeImage.png.png",
      bg: "#0F52BA",
      span: "col-span-2",
    },
    { id: 4, src: "/images/sapphire/jotter.png", bg: "#0F52BA" },
    { id: 5, src: "/images/sapphire/bag1.png", bg: "#ffffff" },
    { id: 6, src: "/images/sapphire/bag2.png", bg: "#9BDFEA" },
    { id: 7, src: "/images/sapphire/wristbands.png", bg: "#00C2CB" },
    { id: 8, src: "/images/sapphire/shirt.png", bg: "#FFAF46" },
  ];

  return (
    <div className=" bg-white py-10 px-4 md:px-12 lg:px-24 font-[General Sans]">
      <div className="">
        {/* {items.map((item) => (
          <div
            key={item.id}
            className={`relative flex justify-center items-center rounded-2xl overflow-hidden ${item.span ?? ""}`}
            style={{ backgroundColor: item.bg }}
          >
            <Image
              src={item.src}
              alt={`SapphireCredit item ${item.id}`}
              width={500}
              height={400}
              className="object-contain w-full h-full"
            />
          </div>
        ))} */}

        <div className="flex justify-between flex-col md:flex-row gap-2">
          <Image
            src="/images/sapphire/laptop.png"
            alt="image"
            width={400}
            height={400}
            className="w-full md:w-1/2 h-[300px] bg-[#0F52BA]"
          />
          <Image
            src="/images/sapphire/hoodie.png"
            alt="image"
            width={400}
            height={400}
            className="w-full md:w-1/2 h-[300px] object-contain bg-[#98DFEA]"
          />
        </div>

        <div className="bg-[url(/images/sapphire/bg.png)] w-full bg-[#0A3578] flex items-center justify-center h-[215px] md:h-[415px] bg-cover mt-3">
          <Image
            src="/images/sapphire/sapphireHomeImage.png"
            alt="image"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        <div className="flex gap-2 mt-4">
          <div className="bg-[#0F52BA] ">
            <Image
              src="/images/sapphire/jotter.png"
              alt="image"
              width={400}
              height={300}
              className="object-contain md:h-[341.7px]"
            />
          </div>

          <div className="bg-gray-200 flex items-center justify-center">
            <Image
              src="/images/sapphire/bag1.png"
              alt="image"
              width={400}
              height={300}
              className="object-cover md:h-[341.7px]"
            />
          </div>

          <div className="flex items-center justify-center bg-[#98DFEA]">
            <Image
              src="/images/sapphire/bag2.png"
              alt="image"
              width={400}
              height={300}
              className="object-contain md:h-[341.7px]"
            />
          </div>
        </div>

        <div className="flex mt-2 gap-2">
          <div className="w-1/2 flex justify-center items-center bg-[#00C2CB]">
            <Image
              src="/images/sapphire/wristbands.png"
              alt="image"
              width={400}
              height={300}
              className="object-contain md:h-[341.7px]"
            />
          </div>

          <div className="w-1/2 flex justify-center items-center bg-[#FFAF46]">
            <Image
              src="/images/sapphire/shirt.png"
              alt="image"
              width={400}
              height={300}
              className="object-contain md:h-[341.7px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandShowcase;
