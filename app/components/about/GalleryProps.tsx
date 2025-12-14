'use client';
import { useEffect, useRef } from "react";
import Image from "next/image";

interface GalleryProps {
  images: string[];
}

export default function MeGallery({ images }: GalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll animation
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;

    const scroll = () => {
      if (!container) return;

      // Move 1px each frame
      scrollAmount += 1;
      container.scrollLeft = scrollAmount;

      // Reset to start when it reaches end (infinite loop)
      if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0;
      }

      requestAnimationFrame(scroll);
    };

    scroll();
  }, []);

  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-24">
      <h2 className="text-2xl 2xl:text-3xl font-semibold mb-8 text-black">
        When I am not designing, this is me….
      </h2>

      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-hidden pb-4 relative"
      >
        {/* Duplicate images once so it loops smoothly */}
        {[...images, ...images].map((src, index) => (
          <div key={index} className="overflow-hidden flex-shrink-0">
            <Image
              src={src}
              alt={`me-${index}`}
              width={300}
              height={240}
              className="w-[295px] md:w-[369px] h-[325px] md:h-[407px] object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
