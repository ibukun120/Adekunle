import React from "react";
import { Search, Lightbulb, Palette, MessageSquare } from "lucide-react";
import Image from "next/image";

const LookaliOverview = () => {
  const process = [
    { id: 1, icon: <Search size={28} />, title: "Research" },
    { id: 2, icon: <Lightbulb size={20} />, title: "Ideate" },
    { id: 3, icon: <Palette size={28} />, title: "Visual Design" },
    { id: 4, icon: <MessageSquare size={28} />, title: "Feedback" },
  ];

  return (
    <div className=" bg-white px-6 md:px-24 py-16 text-gray-800 leading-relaxed">
      {/* Brief Description */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-green-600 mb-2 lg:text-2xl 2xl:text-3xl">
          Brief Description of Lookali
        </h2>
        <p className="text-base 2xl:text-[21.53px]">
          The Lookali app was designed with a concept of a marketplace that
          would provide a two-sided market for people to hire skilled workers
          and also skilled workers can market and monetize their skills.
        </p>
      </section>

      {/* Problem Statement */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-green-600 mb-2 lg:text-2xl 2xl:text-3xl">
          Problem Statement
        </h2>
        <p className="text-base 2xl:text-[21.53px]">
          Finding a skilled worker like technicians, plumbers etc., can be
          stressful, especially in an area where it is becoming a fast-growing
          urban area and most times, the amateurs are hired to do the job and
          still cause more damage. Getting the best hands to do this is a task
          itself as it requires time and money. The rise in shop rentals for
          skilled workers has become a major concern.
        </p>
      </section>

      {/* Possible Solution */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-green-600 mb-2 lg:text-2xl 2xl:text-3xl">
          Possible Solution
        </h2>
        <p className="text-base 2xl:text-[21.53px]">
          An app that allows both the hiring clients to look for skilled workers
          around their locality and also allows the skill workers to market
          themselves on the app, with the basic and customer-centred designs,
          with seamless payment options.
        </p>
      </section>

      {/* Goal */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-green-600 mb-2 lg:text-2xl 2xl:text-3xl">Goal</h2>
        <p className="text-base 2xl:text-[21.53px]">
          Create an easy-to-use application for users to be able to hire skilled
          workers and skilled workers to market themselves.
        </p>
        <p className="font-semibold mt-2 text-base 2xl:text-[21.53px]">
          Note: This is a client-side UI design.
        </p>
      </section>

      {/* Work Process */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600 mb-6 lg:text-2xl 2xl:text-3xl">
          Work Process
        </h2>

        
          <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between bg-white mb-12">
            <div className="flex flex-row gap-2 items-center md:justify-center">
              <div className="bg-[#009933] text-white rounded-lg p-2">
                <Search size={22}/>
              </div>
              <p className="font-semibold text-black text-base 2xl:text-[21.53px]">Research</p>
            </div>

            <div className="flex flex-row gap-2 items-center md:justify-center">
              <div className="bg-[#009933] text-white rounded-lg p-2">
                <Image src='/images/lookali/icion1.png' alt="icion1" width={22} height={17}/>
              </div>
              <p className="font-semibold text-black text-base 2xl:text-[21.53px]">Ideate</p>
            </div>

            <div className="flex flex-row gap-2 items-center md:justify-center">
              <div className="bg-[#009933] text-white rounded-lg p-2">
                <Image src='/images/lookali/icion2.png' alt="icion2" width={22} height={17}/>
              </div>
              <p className="font-semibold text-black text-base 2xl:text-[21.53px]">Visual Design</p>
            </div>

            <div className="flex flex-row gap-2 items-center md:justify-center">
              <div className="bg-[#009933] text-white rounded-lg p-2">
                <Image src='/images/lookali/icion3.png' alt="icion3" width={23} height={17}/>
              </div>
              <p className="font-semibold text-black text-base 2xl:text-[21.53px]">Feedback</p>
            </div>

          </div>
        
      </section>
    </div>
  );
};

export default LookaliOverview;
