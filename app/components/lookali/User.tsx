import Image from "next/image";
import React from "react";

const User = () => {
  return (
    <div className=" bg-white px-6 md:px-16 lg:px-24 py-16 text-black leading-relaxed">
      {/* Survey Insights */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-green-600 mb-4">
          Survey Insights
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Most of the users have heard of freelancing sites but not all of
            them uses it.
          </li>
          <li>
            Some of the users want to have freelance gig outside their 9–5 jobs.
          </li>
          <li>
            Some of the users find it difficult to get the right person for
            their manual jobs.
          </li>
          <li>
            Majority of the freelance apps don’t have the options for technical
            needs.
          </li>
        </ul>
      </section>

      {/* User Persona */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-green-600 mb-6">
          User Persona
        </h2>

        {/* Persona Card */}
        <div className="flex flex-col md:flex-row items-center  bg-[#009933] rounded-2xl overflow-hidden shadow-sm">
          {/* Left Side - Image */}
          
          <div className="bg-[#009933] p-6 flex justify-center items-center">
            <div className="w-40 h-40 rounded-full overflow-hidden relative md:mr-8 ">
            <Image
              src="/images/lookali/user.png"
              alt="User Persona"
              fill
              className="object-cover"
            />
          </div>
          </div>
          

          {/* Right Side - Info */}
          <div className="space-y-1 bg-gray-50 flex-1 p-6">
            <p>
              <span className="font-semibold">Name:</span> Adams Collins
            </p>
            <p>
              <span className="font-semibold">Profession:</span> Carpenter /
              Interior Designer
            </p>
            <p>
              <span className="font-semibold">Age:</span> 31
            </p>
            <p>
              <span className="font-semibold">Status:</span> Married
            </p>
            <p>
              <span className="font-semibold">Location:</span> Lagos, Nigeria
            </p>
            <p>
              <span className="font-semibold">Personality:</span> Spiritual,
              Creative, Friendly, Sophisticated.
            </p>
            <p>
              <span className="font-semibold">Hobbies:</span> Spiritual,
              Creative, Sophisticated.
            </p>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Bio:</h3>
        <p>
          Adams is a professional Carpenter and an interior designer with 5
          years experience in the field. He lives in Lagos and married with two
          beautiful girls. He runs his personal business and also freelance
          outside business hours. He desires to expand his reach to clients who
          might needs his services but unable to reach them due to the areas he
          doesn’t have a workshop.
        </p>
      </section>

      {/* Goals */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Goals:</h3>
        <p>
          Adams Collins desires to have a large number of client base through
          freelance and expand his businesses and also build workshops all over
          Lagos, especially where his clients are much more for easier reach.
        </p>
      </section>

      {/* Pain Points */}
      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Pain Points:
        </h3>
        <p>
          Getting the right channel or platform to reach out to prospective
          clients has been a mirage, even with his wealth of experience, also
          there is no platform at all for Adams to showcase his skills and
          testimonials for credibility as there are so many unprofessionals out
          there, discouraging clients to believe in professionals like him.
        </p>
      </section>
    </div>
  );
};

export default User;
