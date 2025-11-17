"use client";
import Image from "next/image";

export default function MovingText() {
  return (
    <div className="w-full bg-[#0059FF] py-4 overflow-hidden px-4 md:px-16">
      {/* Wrapper that hides overflow */}
      <div className="relative flex overflow-x-hidden">
        
        {/* Marquee content — First Loop */}
        <div className="animate-marquee flex items-center whitespace-nowrap gap-6 px-8">
          <span className="text-white text-lg">
            Designed for <span className="font-semibold">fintech, edtech, logistics, and SaaS</span>
          </span>

          <Image src="/images/star.png" width={16} height={16} alt="star" />

          <span className="text-white text-lg">
            Designed <span className="font-semibold">landing pages, Mobile apps, Web Apps, Websites</span>
          </span>

          <Image src="/images/star.png" width={16} height={16} alt="star" />

          <span className="text-white text-lg">
            <span className="font-semibold">7+ Years</span> Industry Experience
          </span>

          <Image src="/images/star.png" width={16} height={16} alt="star" />

          <span className="text-white text-lg">
            <span className="font-semibold">5 Days MVP</span> Delivery Timeline
          </span>
        </div>

        {/* Duplicate for seamless infinite scroll */}
        <div className="animate-marquee2 flex items-center whitespace-nowrap gap-6 px-8">
          <span className="text-white text-lg">
            Designed for <span className="font-semibold">fintech, edtech, logistics, and SaaS</span>
          </span>

          <Image src="/images/star.png" width={16} height={16} alt="star" />

          <span className="text-white text-lg">
            Designed <span className="font-semibold">landing pages, Mobile apps, Web Apps, Websites</span>
          </span>

          <Image src="/images/star.png" width={16} height={16} alt="star" />

          <span className="text-white text-lg">
            <span className="font-semibold">7+ Years</span> Industry Experience
          </span>

          <Image src="/images/star.png" width={16} height={16} alt="star" />

          <span className="text-white text-lg">
            <span className="font-semibold">5 Days MVP</span> Delivery Timeline
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee2 {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        .animate-marquee2 {
          animation: marquee2 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
