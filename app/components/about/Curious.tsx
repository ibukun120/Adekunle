import { Linkedin, LinkedinIcon, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const Curious = () => {
  return (
    <div className="bg-[#020037] py-16 px-6 md:px-12 lg:px-24 text-white">
      <h1 className="text-2xl font-semibold text-center md:text-left tracking-wide">
        Curious About Something?
      </h1>

      <div className="flex items-center justify-between flex-col md:flex-row mt-10">
        {/* 1st div */}
        <div className="flex justify-between items-center">
          <div>
            <Image
              src="/images/about/Ellipse36.png"
              alt="profile"
              width={100}
              height={100}
              className="w-[95.03057098388672px] h-[95.03057098388672px] rounded-full mr-3"
            />
          </div>
          <div className="tracking-wide">
            <h1>Adekunle Adebona</h1>
            <p className="font-semibold mt-2">adekunleadebona@gmail.com</p>
          </div>
        </div>

        {/* 2nd div */}
        <div className="flex justify-center items-center mt-8 md:mt-0 flex-col gap-4">
          <div className="text-2xl font-light flex justify-center items-center gap-2.5">
            <h1 className="flex items-center gap-1">
              <span className="text-[#009933]">
                <BsWhatsapp />
              </span>{" "}
              <span>Whatsapp</span>
            </h1>
            <h1 className="flex items-center gap-1">
              <span className="bg-[#13638C]">
                <Linkedin />
              </span>
              <span>Linkedin</span>
            </h1>
          </div>
          <h1 className="flex items-center gap-2">
            <span className=""><Phone/></span> <span>+234-8107266572</span>
          </h1>
        </div>

        <div className="flex items-center justify-center mt-8 md:mt-0">
          <button className="w-[240px] px-[10px] py-3 bg-[#0059FF] text-center rounded-md cursor-pointer hover:scale-105 transition-all duration-300">
            Hire me on Contra
          </button>
        </div>
      </div>
    </div>
  );
};

export default Curious;
