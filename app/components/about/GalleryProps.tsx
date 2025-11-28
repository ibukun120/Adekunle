'use client'
import Image from "next/image";

interface GalleryProps {
  images: string[];
}

export default function MeGallery({ images }: GalleryProps) {
  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-24">
      <h2 className="text-2xl font-semibold mb-8 text-black">
        When I am not designing, this is me….
      </h2>

      <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden flex-shrink-0"
          >
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
