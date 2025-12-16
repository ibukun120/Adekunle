"use client";

import React from "react";
import { Search, Pencil, Palette, MessageSquare } from "lucide-react";
import Image from "next/image";

interface ProcessStep {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  color: string;
  id: number;
  imgLink: string;
  mag: number;
  magsec: number;
  magmobile: number;
}

const processSteps: ProcessStep[] = [
  {
    icon: Search,
    label: "Research",
    color: "bg-[#008080] ",
    id: 1,
    imgLink: "/images/icions/Vector7.png",
    mag: 0,
    magsec: 0,
    magmobile: 0,
  },
  {
    icon: Pencil,
    label: "Wireframes (Lo-Fi)",
    color: "bg-[#002366] ",
    id: 2,
    imgLink: "/images/icions/Vector8.png",
    mag: 0.64,
    magsec: 0.64,
    magmobile: 1.7,
  },
  {
    icon: Palette,
    label: "UI Design (Hi-Fi)",
    color: "bg-[#008080] ",
    id: 4,
    imgLink: "/images/icions/Group.png",
    mag: 1.63,
    magsec: 1.67,
    magmobile: 3.7,
  },
  {
    icon: MessageSquare,
    label: "Prototype/Feedback",
    color: "bg-[#002366] ",
    id: 5,
    imgLink: "/images/icions/Vector9.png",
    mag: 2.55,
    magsec: 2.63,
    magmobile: 5.4,
  },
];

export default function Work() {
  return (
    <section className="py-16 px-4 md:px-12 lg:px-24 bg-white max-w-full">
      <div className="space-y-16">
        {/* Work Process */}
        <div className="">
          <h2 className="text-3xl 2xl:text-4xl font-bold text-[#002366] mb-12">
            Work Process
          </h2>

          {/* lookout */}
          <div className="flex flex-col gap-3 items-start mt-10">
            {/* for md */}
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className={`hidden md:flex lg:hidden items-center gap-2 text-white px-4 py-3 rounded shadow-md justify-center ${step.color} `}
                style={{ marginLeft: `${step.mag * 240}px` }}
              >
                {/* <span>{step.icon}</span> */}
                <Image
                  src={step.imgLink}
                  width={20}
                  height={20}
                  alt={step.label}
                />
                {/* {step.icon} */}
                <span className="font-medium text-center text-xl">
                  {step.label}
                </span>
              </div>
            ))}

            {/* for lg */}
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className={`hidden lg:flex items-center gap-2 text-white px-5 py-3 rounded shadow-md justify-center ${step.color} `}
                style={{ marginLeft: `${step.magsec * 290}px` }}
              >
                {/* <span>{step.icon}</span> */}
                <Image
                  src={step.imgLink}
                  width={20}
                  height={20}
                  alt={step.label}
                />
                {/* {step.icon} */}
                <span className="font-medium text-center text-2xl tracking-wider">
                  {step.label}
                </span>
              </div>
            ))}

            {/* for mobile */}
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className={`md:hidden flex items-center gap-2 text-white px-4 py-3 rounded shadow-md justify-center ${step.color} `}
                style={{ marginLeft: `${step.magmobile * 20}px` }}
              >
                {/* <span>{step.icon}</span> */}
                <Image
                  src={step.imgLink}
                  width={20}
                  height={20}
                  alt={step.label}
                />
                {/* {step.icon} */}
                <span className="font-medium text-center text-xl ">
                  {step.label}
                </span>
              </div>
            ))}
          </div>
          {/* lookout */}

          
        </div>

        {/* Style Guide */}
        <div>
          <h2 className="text-3xl 2xl:text-4xl font-bold text-[#002366] mb-5 md:mb-12 ">
            Style Guide
          </h2>

          <div className="">
            {/* Font Section */}
            <div className="">
              <h3 className="text-xl text-gray-800 mb-3 2xl:text-2xl">Font</h3>
              <div className="space-x-4 flex flex-col md:flex-row w-full gap-4">
                <div className="w-full md:w-1/2">
                  <h1 className="text-[62.58px] md:text-6xl font-extrabold md:font-bold text-teal-600 ">
                    Work Sans
                  </h1>
                </div>
                <div className="space-y-2 text-black text-2xl w-full md:w-1/2 ">
                  <p className="text-[14px] tracking-[4px] 2xl:tracking-[10px] leading-6 2xl:leading-10 2xl:text-2xl">
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ
                  </p>
                  <p className="text-[14px] tracking-[4px] 2xl:tracking-[10px] leading-6 2xl:leading-10 2xl:text-2xl">
                    abcdefghijklmnopqrstuvwxyz
                  </p>
                  <p className="text-black text-xl md:text-2xl 2xl:text-4xl">
                    <span className="text-black font-extrabold 2xl:text-5xl">
                      Work Sans{" "}
                    </span>
                    <span className="font-semibold">Work Sans </span>{" "}
                    <span>Work Sans</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Colors Section */}
            <div className="">
              <h3 className="text-xl 2xl:text-2xl text-gray-800 mt-5 mb-2">
                Colours
              </h3>
              <div className="flex flex-col sm:flex-row">
                <div className="w-full md:w-1/2">
                  <div className="bg-[#008080] flex flex-col gap-8 justify-center py-[19px] md:py-10 2xl:py-16 px-[23px] md:px-8 text-white mb-4 md:mb-0 2xl:text-2xl">
                    <p className="font-semibold ">Teal Green</p>
                    <p className="text-sm font-mono">#008080</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 2xl:text-2xl">
                  <div className="bg-[#002366] flex flex-col gap-8 justify-center py-[19px] md:py-10 2xl:py-16 px-[23px] md:px-8 text-white">
                    <p className="font-semibold">Navy Blue</p>
                    <p className="text-sm font-mono">#002366</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
