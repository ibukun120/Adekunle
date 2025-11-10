import Image from "next/image";
import Link from "next/link";
// import React from 'react'

const Recent2 = () => {
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
      link: "/images/background14.png",
      projectLink: "/peakwise",
    },
    {
      title: "Lookali (Local freelance app)",
      id: 3,
      link: "/images/background15.png",
      projectLink: "/lookali",
    },
  ];
  return (
    <div className="mt-6 mb-16 text-white">
      <div className="mt-6">
        <h1 className="">UI Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 py-4">
          {projects.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center"
            >
              <div className="w-full h-64 relative hover:scale-105 transition-transform duration-300">
                <Link href={item.projectLink}>
                  <Image
                    src={item.link}
                    alt={item.title}
                    fill
                    className="object-cover rounded-lg w-full"
                  />
                </Link>
              </div>
              <h3 className="mt-3 text-sm">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recent2;
