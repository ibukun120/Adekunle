import Image from "next/image";
// import React from "react";

const WireFrame1 = () => {
  // Array of 15 image objects
  const images = [
    { id: 1, link: "/images/lookali/wire1.png" },
    { id: 2, link: "/images/lookali/wire2.png" },
    { id: 3, link: "/images/lookali/wire3.png" },
    { id: 4, link: "/images/lookali/wire4.png" },
    { id: 5, link: "/images/lookali/wire5.png" },
    { id: 6, link: "/images/lookali/wire6.png" },
    { id: 7, link: "/images/lookali/wire7.png" },
    { id: 8, link: "/images/lookali/wire8.png" },
    { id: 9, link: "/images/lookali/wire9.png" },
    { id: 10, link: "/images/lookali/wire10.png" },
    { id: 11, link: "/images/lookali/wire11.png" },
    { id: 12, link: "/images/lookali/wire12.png" },
  ];

  return (
    <div className="bg-white px-4 md:px-12 lg:px-20 py-10">
      <h2 className="text-3xl font-semibold text-green-600 mb-8">
        Low-Fi Wireframes
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 lg:gap-8">
        {images.map((img) => (
          <div
            key={img.id}
            className="relative w-full rounded-xl overflow-hidden"
          >
            <Image
              src={img.link}
              alt={`Wireframe ${img.id}`}
              width={300}
              height={1000}
              className="object-cover h-full w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WireFrame1;
