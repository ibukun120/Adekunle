

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      role: "Senior Product Designer",
      company: "Sapphire Virtual Networks Limited",
      location: "Lagos, Nigeria",
      duration: "Apr 2025 - Present",
    },
    {
      id: 2,
      role: "Design Team Lead",
      company: "Paylinq Solutions",
      location: "Lagos, Nigeria",
      duration: "Oct 2024 - Present",
    },
    {
      id: 3,
      role: "Product Designer",
      company: "Creditwave Finance Limited",
      location: "Lagos, Nigeria",
      duration: "Aug 2023 - Sep 2024",
    },
    {
      id: 4,
      role: "Product Designer",
      company: "Homz.ng",
      location: "Lagos, Nigeria",
      duration: "Dec 2022 - Sep 2023",
    },
    {
      id: 5,
      role: "Creative Designer",
      company: "Revocube Technologies Limited",
      location: "Lagos, Nigeria",
      duration: "Dec 2021 - Jun 2023",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-[#020037] mb-10">
        Work Experience
      </h2>

      <div className="">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="flex flex-col md:flex-row justify-between border-b border-[#0200374D] py-8 md:py-4"
          >
            {/* Left Side */}
            <div className="flex flex-col gap-2 py-2">
              <h3 className="text-lg md:text-xl font-semibold text-[#020037]">
                {exp.role}
              </h3>
              <p className="text-sm text-[#020037]">{exp.duration}</p>
            </div>

            {/* Right Side */}
            <div className="mt-2 md:mt-0 text-[#020037] md:text-right">
              <p className="font-medium">{exp.company}</p>
              <p className="text-sm text-[#020037]">- {exp.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
