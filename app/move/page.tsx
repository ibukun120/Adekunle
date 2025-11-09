'use client';

import React from 'react';

export default function page() {
  return (
    <>
      <div className="w-full bg-gray-100 py-8 overflow-hidden mt-20">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-4xl font-bold text-blue-600 mx-4">
            This text is moving from right to left! 🚀
          </span>
          <span className="text-4xl font-bold text-blue-600 mx-4">
            Keep scrolling... ✨
          </span>
          <span className="text-4xl font-bold text-blue-600 mx-4">
            Infinite loop animation! ♾️
          </span>
          <span className="text-4xl font-bold text-blue-600 mx-4">
            This text is moving from right to left! 🚀
          </span>
          <span className="text-4xl font-bold text-blue-600 mx-4">
            Keep scrolling... ✨
          </span>
          <span className="text-4xl font-bold text-blue-600 mx-4">
            Infinite loop animation! ♾️
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: inline-block;
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </>
  );
}