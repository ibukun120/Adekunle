import { Linkedin, Phone } from "lucide-react";
import Image from "next/image";
// import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const First = () => {
  return (
    <div>
      <div>
          <div className="flex justify-center md:justify-normal gap-8 flex-col mt-10 text-black w-full">
            <div className="flex gap-2 md:gap-4 items-center">
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

            <div className="flex justify-normal mt-8 md:mt-0 flex-col gap-4">
              <div className="font-medium flex justify-normal items-center gap-2 md:gap-4 text-sm">
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

                <h1 className="flex items-center gap-2">
                  <span className="">
                    <Phone />
                  </span>{" "}
                  <span>+234-8107266572</span>
                </h1>
              </div>
              <div className="flex justify-center md:justify-normal items-center mt-8 md:mt-8">
                <button className="w-[240px] px-[10px] py-3 text-white bg-[#00640A] text-center rounded-md cursor-pointer hover:scale-105 transition-all duration-300">
                  Hire me on Contra
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default First
