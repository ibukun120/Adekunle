import Image from 'next/image';

const MobileApp = () => {
  const images = [
    { id: 1, src: "/images/paylinq/img30.png", alt: "Image 1" },
    { id: 2, src: "/images/paylinq/img31.png", alt: "Image 2" },
    { id: 3, src: "/images/paylinq/img32.png", alt: "Image 3" },
    { id: 4, src: "/images/paylinq/img33.png", alt: "Image 4" },
    { id: 5, src: "/images/paylinq/img34.png", alt: "Image 5" },
    { id: 6, src: "/images/paylinq/img35.png", alt: "Image 6" },
    { id: 7, src: "/images/paylinq/img36.png", alt: "Image 7" },
    { id: 8, src: "/images/paylinq/img37.png", alt: "Image 8" },
    { id: 9, src: "/images/paylinq/img38.png", alt: "Image 9" },
    { id: 10, src: "/images/paylinq/img39.png", alt: "Image 10" },
    { id: 11, src: "/images/paylinq/img40.png", alt: "Image 11" },
    { id: 12, src: "/images/paylinq/img41.png", alt: "Image 12" },
    { id: 13, src: "/images/paylinq/img42.png", alt: "Image 13" },
    { id: 14, src: "/images/paylinq/img43.png", alt: "Image 14" },
  ];

  return (
    <div className='bg-gray-50 px-6 md:px-12 lg:px-24 py-16'>
      <h1 className='text-[#002366] text-3xl font-semibold mb-10'>Mobile App</h1>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
      {images.map((image) => (
        <div
          key={image.id}
          className="relative w-full shadow-md"
        >
          <Image
            src={image.src}
            alt={image.alt}
            height={600}
            width={200}
            className="object-cover w-[153.4px] h-[333.5px]"
          />
        </div>
      ))}
    </div>
    </div>
  )
}

export default MobileApp
