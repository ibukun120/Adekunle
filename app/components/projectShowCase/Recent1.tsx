import Image from "next/image";
// import Recent2 from "./Recent2";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Recent1 = () => {
  const brand = [
    {
      title: "SapphireCredit",
      id: 1,
      link: "/images/background10.png",
      projectLink: "/sapphire",
    },
    {
      title: "Now Rent Easy Property Mgt",
      id: 2,
      link: "/images/background11.png",
      projectLink: "/Renteasy",
    },
    {
      title: "FarmHive",
      id: 3,
      link: "/images/background12.png",
      projectLink: "/farmhive",
    },
  ];

  return (
    <div
      className="bg-white px-6 md:px-12 lg:px-24 py-10 text-black"
      id="project"
    >
      <div className="mt-6">
        <h1 className="font-bold">Brand Design Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 py-4">
          {brand.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center"
            >
              <div className="w-full h-64 relative hover:scale-105 transition-transform duration-300">
                <Link href={item.projectLink}>
                  <Image
                    src={item.link}
                    alt={item.title}
                    fill
                    className="object-cover rounded-lg w-full"
                  />
                </Link>
              </div>
              <Link
                href={item.projectLink}
                className="flex w-full items-center justify-between"
              >
                <h3 className="mt-3 text-sm font-bold">{item.title}</h3>

                <ArrowRight
                  size={20}
                  className="border p-0.5 mt-2 border-black text-black rounded-full"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* <Recent2 /> */}
    </div>
  );
};

export default Recent1;
