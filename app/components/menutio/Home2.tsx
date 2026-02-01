import Image from "next/image";

export default function Home2() {
  return (
    <main className="bg-white mt-16">
      {/* Key Highlights Section */}
      <section className="">
        <h2 className="text-[#FB8500] font-semibold text-lg mb-6 md:mb-10">
          Key Highlights of the Redesign:
        </h2>

        {/* User-Centric Design */}
        <div className="mb-6 md:mb-10">
          <h3 className="font-semibold text-gray-900 mb-1">
            User-Centric Design:
          </h3>
          <p className="text-gray-700 leading-relaxed">
            I focused on enhancing user experience by integrating intuitive navigation features and distinct call-to-action buttons. Utilizing feedback from friends and colleagues, along with thorough user testing, I refined the layout to simplify the user journey and elevate engagement to meet specific requirements.
          </p>
        </div>

        {/* Visual Appeal */}
        <div className="mb-6 md:mb-10">
          <h3 className="font-semibold text-gray-900 mb-1">Visual Appeal:</h3>
          <p className="text-gray-700 leading-relaxed">
            The revamped landing page of Menutio showcases a visually striking design that harmonizes with the brand's color palette. I integrated visually enticing graphics, premium-quality images, and contemporary typography to craft a captivating visual journey that deeply connects with their intended audience.
          </p>
        </div>

        {/* Content Optimization */}
        <div className="mb-10">
          <h3 className="font-semibold text-gray-900 mb-1">
            Content Optimization:
          </h3>
          <p className="text-gray-700 leading-relaxed">
            I redesigned the content strategy to convey our value proposition effectively through concise and impactful messaging. By prioritizing clear and compelling copywriting, my goal is to attract visitors' attention and increase conversion rates.
          </p>
        </div>

        {/* Closing Section */}
        <h2 className="text-[#FB8500] font-semibold text-lg mb-2">
          The Redesigned Menutio Website Landing Page.
        </h2>
        <p className="text-gray-700 leading-relaxed">
          The revamped landing page places a strong emphasis on user experience and aims to foster Menutio's online visibility. Through a fusion of captivating visuals, user-friendly design, and compelling content, I am optimistic that the updated landing page will yield significant outcomes and successfully captivate their intended audience.
        </p>

        {/* first image */}
        <div className="mt-12">
          <Image
            src="/images/menutio/menutio2.png"
            alt="menutio"
            width={1000}
            height={1200}
            className="w-full h-full"
          />
        </div>
      </section>
    </main>
  );
}
