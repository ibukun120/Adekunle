import React from "react";

const HomeText = () => {
  return (
    <div className="bg-white text-black px-4 md:px-12 lg:px-28 py-10 md:py-12">
      <div className="flex justify-between">
        <p>Industry: Fintech (Digital Lending, Financial Inclusion)</p>
        <p>Year: 2025</p>
      </div>

      <div className="mt-10">
        <h1 className="text-2xl text-[#0F52BA] font-semibold mb-4">My Role</h1>
        <ul className="list-disc ml-6">
          <li>
            Conducted close sessions with stakeholders to align on vision,
            values, and market positioning.
          </li>
          <li>
            Defined the visual direction to ensure the brand spoke to
            inclusivity, accessibility, and trust.
          </li>
          <li>Designed the logo and guide</li>
          <li>
            Established design rules (logo usage, typography, color palette,
            brand applications).
          </li>
          <li>
            Ensured the identity worked seamlessly across both digital products
            and corporate materials.
          </li>
        </ul>
      </div>

      <div className="mt-10">
        <h1 className="text-2xl text-[#0F52BA] font-semibold mb-4">Project Description</h1>
        <p>
          SapphireCredit is a financial technology product of Sapphire Virtual
          Networks Limited, focused on providing accessible and secure digital
          lending solutions. The brand needed a refreshed identity that
          communicates trust, innovation, and accessibility, while appealing to
          a modern, digital-first audience.
        </p>

        <p className="mt-8">
          The goal of this project was to design a comprehensive brand identity
          system that could scale across multiple product lines, including:
        </p>

        <ul className="list-disc ml-6">
          <li>Payday Loans</li>
          <li>Device Financing</li>
          <li>Device Protection</li>
          <li>Solar Financing</li>
        </ul>
      </div>

      <div className="mt-10">
        <h1 className="text-2xl text-[#0F52BA] font-semibold md:mb-4">Problem & Goal</h1>
        <p>The previous brand identity lacked cohesion, scalability, and modern appeal. With SapphireCredit expanding into multiple product verticals, there was a need for a refreshed brand identity that:</p>
        <ul className="list-disc ml-6">
          <li>Communicated trust, security, and innovation</li>
          <li>Unified multiple offerings under one umbrella.</li>
          <li>Provided a consistent system for digital and offline brand expressions.</li>
          <li>Built clarity and recognition in a competitive fintech landscape.</li>
        </ul>
      </div>
    </div>
  );
};

export default HomeText;
