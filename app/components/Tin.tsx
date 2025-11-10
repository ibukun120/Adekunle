import Image from "next/image";

const Tin = () => {
  return (
    <div className="bg-[#0059FF] px-0 text-center text-sm md:text-xl text-white flex justify-center items-center py-3 gap-4 flex-col md:flex-row">
      <p className="flex justify-center items-center">
        Designed for{" "}
        <span className="md:font-bold">
          fintech, edtech, logistics, and Saas
        </span>
        <span className=" md:hidden block ml-2 md:ml-0 ">
          <Image src="/images/star.png" alt="star" width={15} height={15} />
        </span>
      </p>
      <span className="hidden md:inline">
        <Image src="/images/star.png" alt="star" width={15} height={15} />
      </span>
      <p>
        Designed{" "}
        <span className="md:font-bold">
          landing pages, Mobile apps, Web Apps, Websites,
        </span>
      </p>
    </div>
  );
};

export default Tin;
