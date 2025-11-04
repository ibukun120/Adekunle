import Image from 'next/image';
// import React from 'react'

const WebApp = () => {
  const images = [
    { id: 1, src: "/images/paylinq/img70.png", alt: "Image 1" },
    { id: 2, src: "/images/paylinq/img16.png", alt: "Image 2" },
    { id: 3, src: "/images/paylinq/img17.png", alt: "Image 3" },
    { id: 4, src: "/images/paylinq/img18.png", alt: "Image 4" },
    { id: 5, src: "/images/paylinq/img19.png", alt: "Image 5" },
    { id: 6, src: "/images/paylinq/img20.png", alt: "Image 6" },
    { id: 7, src: "/images/paylinq/img21.png", alt: "Image 7" },
    { id: 8, src: "/images/paylinq/img22.png", alt: "Image 8" },
    { id: 9, src: "/images/paylinq/img23.png", alt: "Image 9" },
  ];


  return (
    <div className='bg-gray-50 px-6 md:px-12 lg:px-24 py-16'>
          <h1 className='text-[#002366] text-3xl font-semibold mb-10'>Mobile App</h1>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="w-full shadow-md"
            >
              <Image
                src={image.src}
                alt={image.alt}
                height={200}
                width={400}
                className="object-contain w-[250.4px] h-[200.5px] md:w-[371.4px] md:h-[247px]"
              />
            </div>
          ))}
        </div>
        </div>
  )
}

export default WebApp
