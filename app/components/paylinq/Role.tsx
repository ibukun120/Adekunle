'use client';

import React from 'react';

export default function Role() {
  return (
    <div className="w-full px-12 lg:px-24 py-8 space-y-6 bg-white text-black text-center text-[20px] md:text-left">

      {/* Top Section - 3 Columns on LG */}
      <div className="flex justify-between flex-col md:flex-row gap-4 md:gap-0">
        
        {/* Role */}
        <div>
          <p className="font-bold text-[#9E9E9E] leading-8 text-xl">Role</p>
          <p className="text-base mt-1 leading-8">UI/UX Designer</p>
        </div>

        {/* Product Type */}
        <div>
          <p className="font-bold text-[#9E9E9E] leading-8 text-xl">Product Type</p>
          <p className="text-base mt-1 leading-8">
            Mobile App, Web Platform, Dashboard, SaaS
          </p>
        </div>

        {/* Client */}
        <div>
          <p className="font-bold text-[#9E9E9E] leading-8 text-xl">Client</p>
          <p className="text-base mt-1 leading-8">Paylinq Solutions</p>
        </div>

      </div>

      {/* Divider */}
      <div className="hidden md:block border-b border-gray-300"></div>

      {/* Skills Applied Section */}
      <div>
        <p className=" font-bold text-[#9E9E9E] leading-8 text-xl">Skills Applied</p>
        <p className="mt-2 leading-8 px-16 md:px-0 mb-10 md:mb-0">
          Mobile App Design, Web Design, Dashboard Design, User-Centered Design,
          Interaction Design, Prototyping, Responsive Design, Project Handoff &
          Continuity
        </p>
      </div>

    </div>
  );
}
