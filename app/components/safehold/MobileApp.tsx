import Image from 'next/image';

const MobileApp = () => {
  const images = [
    { id: 1, src: "/images/safehold/img1.png", alt: "Image 1" },
    { id: 2, src: "/images/safehold/img2.png", alt: "Image 2" },
    { id: 3, src: "/images/safehold/img3.png", alt: "Image 3" },
    { id: 4, src: "/images/safehold/img4.png", alt: "Image 4" },
    { id: 5, src: "/images/safehold/img5.png", alt: "Image 5" },
    { id: 6, src: "/images/safehold/img6.png", alt: "Image 6" },
    { id: 7, src: "/images/safehold/img7.png", alt: "Image 7" },
    { id: 8, src: "/images/safehold/img8.png", alt: "Image 8" },
    { id: 9, src: "/images/safehold/img9.png", alt: "Image 9" },
    { id: 10, src: "/images/safehold/img10.png", alt: "Image 10" },
    { id: 11, src: "/images/safehold/img11.png", alt: "Image 11" },
    { id: 12, src: "/images/safehold/img12.png", alt: "Image 12" },
  ];

  return (
    <div className='bg-[#00800008] px-6 md:px-12 lg:px-24 py-16'>
      <h1 className='text-[#008000] text-3xl 2xl:text-4xl font-semibold mb-10'>Mobile App</h1>
      
      <div className="grid grid-cols-3 md:grid-cols-4 gap-5 md:gap-4">
      {images.map((image) => (
        <div
          key={image.id}
          className="relative h-full"
        >
          <Image
            src={image.src}
            alt={image.alt}
            height={1200}
            width={600}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
    </div>
  )
}

export default MobileApp
