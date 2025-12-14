import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="text-[#020037] bg-white px-6 md:px-12 lg:px-20 py-16 flex justify-between md:justify-center flex-col md:flex-row gap-12 ">
      <div className="w-full md:w-1/2 h-auto flex flex-col  md:text-left text-center mt-[12px]">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[85px] font-semibold text-nowrap 2xl:font-extrabold 2xl:tracking-wider 2xl:leading-24">
          Where Great 
        </h1>
        <h1 className="text-[#0059FF] text-4xl md:text-5xl lg:text-6xl xl:text-[85px] text-nowrap font-semibold 2xl:font-extrabold 2xl:tracking-wider 2xl:leading-24">Design Meets</h1>
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[85px] font-semibold text-nowrap 2xl:font-extrabold 2xl:tracking-wider 2xl:leading-24">Business Impact</h1>
        </div>
        <p className="text-xl mt-[11px] 2xl:text-2xl 2xl:leading-10">
          I craft high-converting interfaces that align with your brand goals
          and user expectations.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-normal gap-4 mt-[42px]">
          <Link
            href="/getintouch"
            className="py-2 px-4 w-[203px] md:px-8 rounded-full border cursor-pointer hover:scale-105 transition duration-300 text-center text-nowrap 2xl:text-2xl 2xl:w-[260px] 2xl:py-3"
          >
            Get in Touch
          </Link>
          <Link
            href="/projects"
            className="py-2 w-[203px] 2xl:w-[260px] 2xl:py-3 px-4 md:px-8 rounded-full bg-[#020037] text-white hover:scale-105 cursor-pointer transition duration-300 text-center text-nowrap 2xl:text-2xl"
          >
            View Projects
          </Link>
        </div>
      </div>

      {/* image div */}
      <div className="w-full md:w-1/2 flex items-center justify-center mt-24 md:mt-0 ">
        <Image
          src="/images/Group886.png"
          alt="Group886.png"
          width={390}
          height={442}
          className=" md:h-auto min-w-[373px} 2xl:w-3/4"
        />
      </div>
    </div>
  );
};

export default HomePage;
