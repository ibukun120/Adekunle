import Image from "next/image";
import Link from "next/link";
// import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="bg-linear-to-r from-[#020037] via-[#05009D] to-[#020037] py-16 flex items-center justify-center flex-col text-center gap-6">
        <div>
          <p className="text-3xl">Great ideas need great designs.</p>
          <p className="text-3xl">Ready to create yours?</p>
        </div>

        <div>
          <button className="bg-white text-black w-[214px] h-[44px] rounded-full cursor-pointer">
            Contact me
          </button>
        </div>
      </div>

      <div className="bg-white px-4 md:px-24 py-12">
        <div className="flex justify-center items-center md:justify-between flex-col md:flex-row gap-6 md:gap-0">
          <div className="flex gap-2 text-black">
            <Image
              src="/images/navimage2.png"
              width={130}
              height={100}
              alt="nav-logo"
              className="w-5 h-5"
            />
            <p>Adekunle Adebona</p>
          </div>

          <div className="flex gap-6 justify-center items-center">
            <Link href="https://www.behance.net/adebonaadekunle">
              <Image
                src="/images/foot1.png"
                alt="Vector1.png"
                width={100}
                height={100}
                className="w-[73.44828033447266px] h-[13.63576889038086px]"
              />
            </Link>
            <Link href="https://dribbble.com/Adebonaadekunlesamuel">
              <Image
                src="/images/foot2.png"
                alt="Vector1.png"
                width={100}
                height={100}
                className="w-[75.21861267089844px] h-[21.331695556640625px]"
              />
            </Link>
            <Link href='https://www.linkedin.com/in/adekunle-adebona'><Image
              src="/images/foot3.png"
              alt="Vector1.png"
              width={100}
              height={100}
              className="w-[72.46724700927734px] h-[18.116811752319336px]"
            /></Link>
            <Link href='https://www.instagram.com/the_billionaire_designer1/'><Image
              src="/images/foot4.png"
              alt="Vector3.png"
              width={100}
              height={100}
              className="w-[74.60481262207031px] h-[21.136247634887695px]"
            /></Link>
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
