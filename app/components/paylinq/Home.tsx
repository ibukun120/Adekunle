import Image from "next/image";
import Tick from "./Tick";
// import Tick from "../components/paylinq/Tick";

const Home = () => {
  return (
    <div className="flex gap-4 md:gap-12 px-6 md:px-12 lg:px-24 py-16 bg-white w-full xl:min-h-screen flex-col md:flex-row">
      {/* first div */}
      <div className="w-full md:w-1/2 flex flex-col gap-2 justify-center">
        <div className="flex justify-center items-center md:justify-normal">
          <Image
            src="/images/paylinq/front.png"
            alt="front"
            height={100}
            width={300}
            className="lg:w-[484px] lg:h-[100px]"
          />
        </div>
        <p className="text-[#002366] md:text-black text-xl font-bold text-center md:text-left">
          Payment engine enabling seamless settlements, reconciliation &
          collections across Africa
        </p>

        <div className="mt-6">
          <div className="flex gap-3 justify-center items-center md:justify-normal">
            <Tick price="200+ Screens" />
            <Tick price="Mobile App" />
            <Tick price="Web App" />
          </div>

          <div className="flex gap-3 mt-3 justify-center items-center md:justify-normal">
            <Tick price="Admin Dashboard" />
            <Tick price="Modern UI" />
          </div>
        </div>

        <div className="flex gap-4 justify-center items-center md:justify-normal">
          <Image
            src="/images/toolkit1.png"
            alt="toolkit1"
            width={100}
            height={60}
            className="w-10 h-10"
          />
          <p className="bg-[#001E36] rounded-lg px-2 py-2 font-bold text-[#31A8FF]">
            Ps
          </p>
          <p className="text-[#FF9A00] rounded-lg px-2.5 py-2 font-bold bg-[#330000]">
            Ai
          </p>
          <Image
            src="/images/toolkit4.png"
            alt="toolkit4"
            width={100}
            height={60}
            className="w-10 h-10"
          />
        </div>
      </div>

      {/* second div */}
      <div className="w-full md:w-1/2 h-full">
        <Image
          src="/images/paylinq/front2.png"
          alt="front2"
          width={500}
          height={300}
          className="h-[277.5px] w-[333px] lg:w-[510px] lg:h-[426px]"
        />
      </div>
    </div>
  );
};

export default Home;
