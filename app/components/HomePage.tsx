import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="text-[#020037] bg-white px-6 md:px-12 lg:px-20 py-16 flex justify-between md:justify-center flex-col md:flex-row gap-24 md:gap-[40px] lg:gap-[50px] xl:gap-[69px]">
      <div className="w-full md:w-[648px] h-[240px] flex flex-col  md:text-left text-center mt-[12px]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold">
          Where Great Design <span className="text-[#0059FF]">Meets</span>{" "}
          Business Impact
        </h1>
        <p className="text-xl mt-[11px]">
          I craft high-converting interfaces that align with your brand goals
          and user expectations.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-normal gap-4 mt-[42px]">
          <Link
            href="/getintouch"
            className="py-2 px-4 w-[203px] md:px-8 rounded-full border cursor-pointer hover:scale-105 transition duration-300 text-center"
          >
            Get in Touch
          </Link>
          <Link
            href="#project"
            className="py-2 w-[203px] px-4 md:px-8 rounded-full bg-[#020037] text-white hover:scale-105 cursor-pointer transition duration-300 text-center"
          >
            View Projects
          </Link>
        </div>
      </div>

      {/* image div */}
      <div className="w-full md:w-[473.4009704589844px] flex items-center justify-center mt-24 md:mt-0">
        <Image
          src="/images/Group886.png"
          alt="Group886.png"
          width={390}
          height={442}
          className=" md:h-[460px] xl:h-[500px] w-[473px]"
        />
      </div>
    </div>
  );
};

export default HomePage;
