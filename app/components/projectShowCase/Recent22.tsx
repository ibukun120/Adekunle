import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import React from 'react'

const Recent22 = () => {
  const projects = [
    {
      title: "Paylinq Solutions",
      id: 1,
      link: "/images/background13.png",
      projectLink: "/paylinq",
    },
    {
      title: "Peakwise Financials",
      id: 2,
      link: "/images/peak1.png",
      projectLink: "/peakwise",
      classaddition: "bg-[#043C0A] w-full"
    },
    {
      title: "Lookali (Local freelance app)",
      id: 3,
      link: "/images/background15.png",
      projectLink: "/lookali",
    },
    {
      title: "Safehold Escrow",
      id: 4,
      link: "/images/show/Safehold.png",
      classaddition: 'w-[146px] h-[45px]',
      projectLink: "/safehold",
    },
    {
      title: "Wema Bank Website Redesign",
      id: 5,
      link: "/images/peak1.png",
      projectLink: "/peakwise",
      classaddition: "bg-[#043C0A] w-full"
    },
    {
      title: "Menutio Landing Page Redesign",
      id: 6,
      link: "/images/background15.png",
      projectLink: "/lookali",
    },
  ];
  return (
    <div className="mt-6 bg-white px-6 md:px-12 lg:px-24 py-10 text-black ">
      <div className="mt-6 mb-16">
        <h1 className="font-bold">UI Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 py-4 space-y-8">
          {projects.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center"
            >
              <div className="w-full h-64 relative hover:scale-105 transition-transform duration-300 shadow-2xl">
                <Link href={item.projectLink}>
                  <Image
                    src={item.link}
                    alt={item.title}
                    fill
                    className={item.classaddition? `object-cover rounded-lg ${item.classaddition}` : 'object-cover rounded-lg w-full'}
                  />
                </Link>
              </div>
              <Link
                href={item.projectLink}
                className="flex w-full items-center justify-between"
              >
                <h3 className="mt-3 text-sm font-bold">{item.title}</h3>

                <div className="">
                  <ArrowRight
                  size={20}
                  className="border p-0.5 mt-2 border-black text-black rounded-full"
                />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recent22;
