"use client";

import React from "react";
import { Search, Pencil, Palette, MessageSquare, } from "lucide-react";
import Image from "next/image";

interface ProcessStep {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  color: string;
  id: number;
  imgLink: string;
}

const processSteps: ProcessStep[] = [
  {
    icon: Search,
    label: "Research",
    color: "bg-[#008080]",
    id: 1,
    imgLink: '/images/icions/Vector7.png',
  },
  {
    icon: Pencil,
    label: "Wireframes (Lo-Fi)",
    color: "bg-[#002366]",
    id: 2,
    imgLink: '/images/icions/Vector8.png',
  },
  {
    icon: Palette,
    label: "UI Design (Hi-Fi)",
    color: "bg-[#008080]",
    id: 4,
    imgLink: '/images/icions/Group.png',
  },
  {
    icon: MessageSquare,
    label: "Prototype/Feedback",
    color: "bg-[#002366]",
    id: 5,
    imgLink: '/images/icions/Vector9.png',
  },
];

export default function Work() {
  return (
    <section className="py-16 px-4 md:px-12 lg:px-24 bg-white">
      <div className="space-y-16">
        {/* Work Process */}
        <div className="">
          <h2 className="text-3xl font-bold text-[#002366] mb-12">
            Work Process
          </h2>

          {/* lookout */}
          <div className="hidden md:flex flex-col gap-3 items-start mt-10 overflow-x-scroll">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className={`flex items-center gap-2 text-white px-4 py-3 rounded shadow-md justify-center ${step.color} w-60`}
                style={{ marginLeft: `${index * 244}px` }}
              >
                {/* <span>{step.icon}</span> */}
                <Image src={step.imgLink} width={20} height={20} alt={step.label}/>
                {/* {step.icon} */}
                <span className="font-medium text-center text-xl">
                  {step.label}
                </span>
              </div>
            ))}
          </div>
          {/* lookout */}

          <div className="md:hidden relative flex flex-col md:flex-col items-center justify-center gap-4">
            {/* Connecting Line (visible on md+) */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-emerald-400 to-indigo-600 -z-10 transform -translate-y-1/2 "></div>

            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="">
                  <div
                    className={`${step.color} text-white px-6 py-3 rounded 
                               flex items-center gap-3`}
                  >
                    {/* <Icon className="w-5 h-5" /> */}
                    <Image src={step.imgLink} width={20} height={20} alt={step.label}/>
                    <span className="font-medium text-sm md:text-base">
                      {step.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Style Guide */}
        <div>
          <h2 className="text-3xl font-bold text-[#002366] mb-12">
            Style Guide
          </h2>

          <div className="">
            {/* Font Section */}
            <div className="">
              <h3 className="text-xl text-gray-800">Font</h3>
              <div className="space-x-4 flex flex-col md:flex-row w-full gap-4">
                <div className="w-full md:w-1/2">
                  <h1 className="text-5xl md:text-6xl font-bold text-teal-600 ">
                    Work Sans
                  </h1>
                </div>
                <div className="space-y-2 text-black text-2xl w-full md:w-1/2">
                  <p className="text-lg tracking-widest leading-4">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                  <p className="text-lg tracking-widest">abcdefghijklmnopqrstuvwxyz</p>
                  <p className="text-black text-xl md:text-2xl">
                    <span className="text-black font-extrabold">
                      Work Sans{" "}
                    </span>
                    <span className="font-bold">Work Sans </span>{" "}
                    <span>Work Sans</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Colors Section */}
            <div className="">
              <h3 className="text-xl text-gray-800">Colours</h3>
              <div className="flex flex-col sm:flex-row">
                <div className="w-full md:w-1/2">
                  <div className="bg-[#008080] flex flex-col gap-8 justify-center py-10 px-8 text-white">
                    <p className="font-semibold ">Teal Green</p>
                    <p className="text-sm font-mono">#008080</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="bg-[#002366] flex flex-col gap-8 justify-center py-10 px-8 text-white">
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
