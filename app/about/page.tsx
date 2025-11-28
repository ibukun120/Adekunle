import Image from "next/image";
import React from "react";
import WorkExperience from "../components/about/WorkExperience";
import MeGallery from "../components/about/GalleryProps";
import Curious from "../components/about/Curious";

const page = () => {
  return (
    <div className="bg-white">
      <div className="text-[#020037] bg-white px-6 md:px-12 lg:px-20 py-16 mt-16 md:mt-20">
        <h1 className="text-4xl lg:text-[96px] font-bold tracking-wider md:font-semibold text-center mt-[80px] md:mt-0">
          About Me
        </h1>

        {/* pic div */}
        <div className="flex flex-col md:flex-row gap-2 mt-8 md:mt-0 py-10 justify-center items-center">
          <div>
            <Image
              src="/images/about/me1.png"
              alt="/images/about/me1.png"
              width={300}
              height={500}
              className="w-[408px] md:w-[389px] h-[382px] md:h-[365px] object-cover rounded-lg"
            />
          </div>
          <div>
            <Image
              src="/images/about/me2.png"
              alt="/images/about/me1.png"
              width={300}
              height={500}
              className="w-[408px] md:w-[389px] h-[382px] md:h-[365px] object-cover rounded-lg"
            />
          </div>
          <div>
            <Image
              src="/images/about/me3.png"
              alt="/images/about/me1.png"
              width={300}
              height={500}
              className="w-[408px] md:w-[389px] h-[382px] md:h-[365px] object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Text div */}

        <div className="text-black tracking-wide">
          <h1 className="font font-semibold text-[30px] md:text-[40px] tracking-wider">
            Hello, I'm Adekunle.
          </h1>
          <p className="mt-8">
            I’m passionate about crafting captivating, user-friendly designs
            with a strong focus on functionality before aesthetics. I also enjoy
            sharing my knowledge through teaching.
          </p>
          <p className="mt-8 font-[700]">
            With 7 years of experience in graphic design and 5 years in product
            (UI/UX) design, I’ve worked with both local and international
            clients to create impactful, user-centered solutions.
          </p>

          <p className="mt-8">
            My background in graphic design has sharpened my ability to
            communicate effectively with stakeholders and developers, managing
            timelines, providing constructive feedback, and conducting
            walkthroughs to ensure seamless design delivery.
          </p>

          <h1 className="mt-8 text-[24px] md:text-[40px] font-semibold">
            My Favourite Quote
          </h1>
          <p className="mt-4">
            “Design isn't merely about aesthetics or feel. It's about function.
            My inventive designs convey profound messages in pixels,
            consistently enchanting users.”
          </p>
        </div>
      </div>
      <WorkExperience />
      <MeGallery
      images={[
        "/images/about/me4.png",
        "/images/about/me5.png",
        "/images/about/me6.png",
        "/images/about/me7.jpg",
        "/images/about/me5.jpg",
      ]}
    />
    <Curious/>
    </div>
  );
};

export default page;
