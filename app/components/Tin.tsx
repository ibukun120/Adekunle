"use client";
import Image from "next/image";

export default function MovingText() {
  return (
    <div className="w-full bg-[#0059FF] py-4 overflow-hidden px-4 md:px-16">

      <div className="overflow-hidden relative">
        <div className="flex animate-scroll whitespace-nowrap w-max">

          {/* Duplicate content 2× for seamless loop */}
          {[1, 2].map((loop) => (
            <div key={loop} className="flex items-center gap-6 px-8">

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

              <Image src="/images/star.png" width={16} height={16} alt="star" />

            </div>
          ))}

        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 18s linear infinite;
        }
      `}</style>
    </div>
  );
}
