import Image from "next/image";
// import React from "react";

const Pics = () => {
  return (
    <div className=" bg-white py-10 px-4 md:px-12 lg:px-24 xl:px-32">
      <div className="">
        <div className="flex justify-between flex-col md:flex-row gap-2">
          <div className="w-full md:w-1/2 bg-[#ED2939] flex justify-center items-center">
            <Image
              src="/images/rent/img1.png"
              alt="image"
              width={400}
              height={400}
              className="h-[300px] w-60"
            />
          </div>
          <div className="w-full md:w-1/2 bg-[#FFFFFF]">
            <Image
              src="/images/rent/img2.png"
              alt="image"
              width={400}
              height={400}
              className="h-[300px] object-contain"
            />
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <div className="bg-[#FFFFFF] flex justify-center items-center flex-1">
            <Image
              src="/images/rent/img3.png"
              alt="image"
              width={400}
              height={300}
              className="object-contain md:h-[200.7px]"
            />
          </div>

          <div className="bg-black flex items-center justify-center flex-1">
            <Image
              src="/images/rent/img4.png"
              alt="image"
              width={400}
              height={300}
              className="object-contain md:h-[341.7px] w-60"
            />
          </div>

          <div className="flex items-center justify-center bg-[#ED2939] flex-1">
            <Image
              src="/images/rent/img5.png"
              alt="image"
              width={400}
              height={300}
              className="object-contain md:h-[241.7px] pl:10 md:pl-16"
            />
          </div>
        </div>

        <div className="flex mt-2 gap-2">
          <div className="w-1/2 flex justify-center items-center bg-linear-to-b from-[#ED2939] to-[#000000]">
            <Image
              src="/images/rent/img6.png"
              alt="image"
              width={400}
              height={300}
              className="object-contain md:h-[341.7px]"
            />
          </div>

          <div className="w-1/2 flex justify-center items-center bg-white">
            <Image
              src="/images/rent/img7.png"
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

export default Pics;
