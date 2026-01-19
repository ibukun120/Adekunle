import Image from 'next/image';
// import React from 'react'

const WebApp = () => {
  const images = [
    { id: 1, src: "/images/safehold/img20.png", alt: "Image 20" },
    { id: 2, src: "/images/safehold/img21.png", alt: "Image 21" },
    { id: 3, src: "/images/safehold/img22.png", alt: "Image 22" },
    { id: 4, src: "/images/safehold/img23.png", alt: "Image 23" },
    { id: 5, src: "/images/safehold/img24.png", alt: "Image 24" },
    { id: 6, src: "/images/safehold/img25.png", alt: "Image 25" },
  ];


  return (
    <div className='bg-gray-50 px-6 md:px-12 lg:px-24 py-16'>
          <h1 className='text-[#008000] text-3xl 2xl:text-4xl font-semibold mb-10'>Web App</h1>
          
          <div className="grid grid-cols-2 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="w-full "
            >
              <Image
                src={image.src}
                alt={image.alt}
                height={400}
                width={600}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
        </div>
  )
}

export default WebApp
