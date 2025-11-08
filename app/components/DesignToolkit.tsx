'use client';

import React from 'react';
// import { 
//   PsIcon, 
//    AiIcon, 
//    AeIcon, 
//    CorelIcon, 
// } from './icons'; //
import Image from 'next/image';

interface Tool {
  name: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  description: string;
  link?: string
  text?: string
  bg?: string
  color?: string
}

const tools: Tool[] = [
  {
    name: 'Adobe Photoshop',
    text: 'Ps',
    bg: 'bg-[#001E36]',
    color: 'text-[#31A8FF]',
    // icon: PsIcon,
    description: 'Used for digital designs, and creating raster-based graphics for web and print.',
  },
  {
    name: 'Adobe Illustrator',
    text: 'Ai',
    bg: 'bg-[#330000]',
    color: 'text-[#FF9A00]',
    // icon: AiIcon,
    description: 'Used for creating vector graphics like logos, icons, illustrations, and scalable designs.',
  },
  {
    name: 'Adobe After Effects',
    text: 'Ae',
    bg: 'bg-[#00005B]',
    color: 'text-[#9999FF]',
    // icon: AeIcon,
    description: 'Used for motion graphics, video compositing, and visual effects in film and digital media.',
  },
  {
    name: 'Corel Draw Suite',
    text: 'Ae',
    bg: 'bg-[#00005B]',
    color: 'text-[#9999FF]',
    // icon: CorelIcon,
    description: 'Used for creating vector graphics like logos, icons, illustrations, and scalable designs.',
  },
  {
    name: 'Figma',
    bg: 'bg-white',
    description: 'For creating web and mobile interfaces and interactive prototypes.',
    link: "/images/toolkit1.png"
  },
  {
    name: 'Wordpress',
    bg: 'bg-white',
    description: 'A content management system (CMS) for building, customizing, and managing websites or blogs.',
    link: "/images/toolkit2.png"
  },
  {
    name: 'Miro',
    description: 'An online collaborative whiteboard platform for brainstorming, mapping ideas, and team workshops.',
    link: "/images/toolkit3.png",
    bg: 'bg-[#FFDD33]'
  },
  {
    name: 'Jira',
    bg: 'bg-white',
    description: 'A project management tool mainly for agile teams to track tasks, sprints, and software development.',
    link: "/images/toolkit4.png"
  },
];

export default function DesignToolkit() {
  return (
    <>
      <div className=" bg-white py-12 px-4  md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-12">
            My Design Toolkit
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <div
                  key={tool.name}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex shrink-0 w-12 h-12">
                      {tool.link? <Image src={tool.link} alt="Photoshop" width={48} height={48} className={`w-12 h-12 ${tool.bg} p-2 rounded-2xl`} /> : <p className={`w-12 h-12 font-bold ${tool.color} ${tool.bg} rounded-2xl text-2xl flex justify-center items-center`} >{tool.text}</p> }
                      
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[#1D1F2F]">
                        {tool.name}
                      </h3>
                      <p className="mt-2 text-sm text-[#1D1F2F] leading-relaxed">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}