import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

const ProjectNav: React.FC = () => {
  return (
    <div className="w-full flex justify-between items-center py-6 px-6 md:px-24 bg-white text-black">
      {/* Left side */}
      <Link href='/paylinq' className="flex items-center  gap-2 cursor-pointer hover:opacity-70 transition">
        <ArrowLeft size={24} className="border p-1 border-black rounded-full" />
        <p className="text-sm md:text-base font-normal hidden md:block">
          Paylinq Solutions
        </p>
      </Link>

      {/* Right side */}
      <Link href='/lookali' className="flex items-center gap-2 cursor-pointer hover:opacity-70 transition">
        <p className="text-sm md:text-base font-normal hidden md:block">
          Lookali (Local Freelance App)
        </p>
        <ArrowRight size={24} className="border p-1 border-black rounded-full"/>
      </Link>
    </div>
  );
};

export default ProjectNav;
