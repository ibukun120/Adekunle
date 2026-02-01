import Image from "next/image";

export default function Home2() {
  return (
    <main className="bg-white mt-16 md:mt-24">
      {/* Key Highlights Section */}
      <section className="">
        <h2 className="text-[#8B1E3F] font-semibold text-lg md:text-xl lg:text-2xl mb-6 md:mb-10">
          Key Highlights of the Redesign:
        </h2>

        {/* User-Centric Design */}
        <div className="mb-6 md:mb-10 ">
          <h3 className="font-semibold text-gray-900 mb-1">
            User-Centric Design:
          </h3>
          <p className="text-gray-700 leading-relaxed">
            I prioritized user experience by implementing intuitive navigation
            elements and clear call-to-action buttons. Through user testing and
            feedback analysis from friends and colleagues, I optimized the
            layout to streamline the user journey and enhance engagement.
          </p>
        </div>

        {/* Visual Appeal */}
        <div className="mb-6 md:mb-10">
          <h3 className="font-semibold text-gray-900 mb-1">Visual Appeal:</h3>
          <p className="text-gray-700 leading-relaxed">
            The revamped landing page boasts a visually stunning design that
            aligns with Alat’s brand identity. I incorporated visually appealing
            graphics, high-quality images, and modern typography to create a
            captivating visual experience that resonates with the target
            audience.
          </p>
        </div>

        {/* Content Optimization */}
        <div className="mb-10">
          <h3 className="font-semibold text-gray-900 mb-1">
            Content Optimization:
          </h3>
          <p className="text-gray-700 leading-relaxed">
            I revamped the content strategy to deliver concise, impactful
            messaging that communicates our value proposition effectively. By
            focusing on clear and compelling copywriting, I aim to capture
            visitors’ attention and drive conversion rates.
          </p>
        </div>

        {/* Closing Section */}
        <h2 className="text-[#8B1E3F] font-semibold mb-2">
          The Redesigned Alat Website Landing Page.
        </h2>
        <p className="text-gray-700 leading-relaxed">
          The redesigned landing page prioritizes user experience and seeks to
          enhance Alat by Wema online presence. By combining visual appeal with
          intuitive design and compelling content, I am confident that the new
          landing page will drive meaningful results and effectively engage
          their target audience.
        </p>

        {/* first image */}
        <div className="mt-12">
          <Image
            src="/images/wema/wema2.png"
            alt="wema"
            width={1000}
            height={1200}
            className="w-full h-full"
          />
        </div>
      </section>
    </main>
  );
}
