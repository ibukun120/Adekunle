import { Linkedin, Phone } from "lucide-react";
import Image from "next/image";
// import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const First = () => {
  return (
    <div>
      <div>
          <div className="flex justify-center items-center md:justify-normal gap-4 md:gap-6 flex-col mt-10 md:mt-24 text-black w-full">
            <div className="flex gap-2 md:gap-4 items-center w-full">
              <div>
                <Image
                  src="/images/about/Ellipse36.png"
                  alt="profile"
                  width={100}
                  height={100}
                  className="w-[95.03057098388672px] h-[95.03057098388672px] 2xl:w-[150px] 2xl:h-[150px] rounded-full mr-3"
                />
              </div>
              <div className="tracking-wide 2xl:text-xl">
                <h1>Adekunle Adebona</h1>
                <p className="font-semibold mt-2">adekunleadebona@gmail.com</p>
              </div>
            </div>

            <div className="flex justify-normal mt-8 md:mt-0 flex-col gap-4 w-full">
              <div className="font-medium flex justify-normal items-center gap-2 md:gap-4 text-sm">
                <h1 className="flex items-center gap-1">
                  <span className="text-[#009933] 2xl:text-xl">
                    <BsWhatsapp />
                  </span>{" "}
                  <span className="2xl:text-xl">Whatsapp</span>
                </h1>
                <h1 className="flex items-center gap-1 2xl:text-xl">
                  <span className="bg-[#13638C]">
                    <Linkedin />
                  </span>
                  <span>Linkedin</span>
                </h1>

                <h1 className="flex items-center gap-2 2xl:text-xl">
                  <span className="">
                    <Phone />
                  </span>{" "}
                  <span>+234-8107266572</span>
                </h1>
              </div>
              <div className="flex justify-center md:justify-normal items-center mt-8 md:mt-8">
                <button className="w-[240px] px-[10px] py-3 text-white bg-[#00640A] text-center rounded-md cursor-pointer hover:scale-105 transition-all duration-300 2xl:text-xl">
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
