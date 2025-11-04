import Image from "next/image";
// import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="bg-[linear-gradient(to_right,_#020037,_#05009D,_#020037)] py-16 flex items-center justify-center flex-col text-center gap-6">
        <div>
          <p className="text-3xl">Great ideas need great designs.</p>
          <p className="text-3xl">Ready to create yours?</p>
        </div>

        <div>
          <button className="bg-white text-black px-8 py-1 rounded-full cursor-pointer">
            Contact me
          </button>
        </div>
      </div>

      <div className="bg-white px-4 md:px-24 py-12">
        <div className="flex justify-center items-center md:justify-between flex-col md:flex-row gap-6 md:gap-0">
          <div className="flex gap-2 text-black">
            <Image
              src="/images/navimage.png"
              width={130}
              height={100}
              alt="nav-logo"
              className="w-5 h-5 bg-black"
            />
            <p>Adekunle Adebona</p>
          </div>

          <div className="flex gap-6">
            <Image
              src="/images/Vector1.png"
              alt="Vector1.png"
              width={100}
              height={100}
              className="w-12 h-4"
            />
            <Image
              src="/images/Vector2.png"
              alt="Vector1.png"
              width={100}
              height={100}
              className="w-12 h-4"
            />
            <Image
              src="/images/svg-1199834497_4230.png"
              alt="Vector1.png"
              width={100}
              height={100}
              className="w-12 h-4"
            />
            <Image
              src="/images/Vector1.png"
              alt="Vector3.png"
              width={100}
              height={100}
              className="w-12 h-4"
            />
          </div>
        </div>

        {/* second */}
        <div className="flex justify-center text-sm items-center text-[#020037] mt-8 md:mt-12">
          <h1>Copyright @Adekunle Adebona. All Rights Reserved</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
