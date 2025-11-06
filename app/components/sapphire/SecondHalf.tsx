import Image from "next/image";
import React from "react";

const SecondHalf = () => {
  return (
    <div className="flex flex-col gap-10 w-1/2 ">
      <Image
        src="/images/sapphire/img1.png"
        alt="image"
        width={400}
        height={300}
        className="object-contain md:h-[321.7px] w-full"
      />

      <Image
        src="/images/sapphire/img2.png"
        alt="image"
        width={400}
        height={300}
        className="object-contain md:h-[321.7px] w-full"
      />

      <Image
        src="/images/sapphire/img4.png"
        alt="image"
        width={400}
        height={300}
        className="object-contain md:h-[321.7px] w-full"
      />

      <Image
        src="/images/sapphire/improper.png"
        alt="image"
        width={400}
        height={300}
        className="object-contain md:h-[321.7px] w-full"
      />
    </div>
  );
};

export default SecondHalf;
