
import { Smartphone, Monitor, Globe, Palette, PenTool, Target } from "lucide-react";

const Expertise = () => {
  const areas = [
    {
      id: 1,
      title: "Mobile App Design",
      description:
        "Designing user-friendly, visually engaging mobile applications for iOS and Android. From wireframes to interactive prototypes, ensuring smooth navigation, intuitive interactions, and a delightful mobile experience.",
      icon: <Smartphone size={32} />,
      bg: "bg-[#020037]",
      border: "border-blue-500",
    },
    {
      id: 2,
      title: "Web App Design",
      description:
        "Creating intuitive and responsive web applications that prioritize usability and performance. Focusing on seamless user flows, accessibility, and visual appeal to enhance productivity and engagement.",
      icon: <Monitor size={32} />,
      bg: "bg-[#0059FF]",
      border: "",
    },
    {
      id: 3,
      title: "Website Design",
      description:
        "Designing responsive, visually appealing, and conversion-focused websites. Balancing aesthetics with functionality to communicate brand value and drive user action.",
      icon: <Globe size={32} />,
      bg: "bg-[#020037]",
      border: "",
    },
    {
      id: 4,
      title: "Brand & Visual Design",
      description:
        "Developing distinctive brand identities, including logos, color palettes, typography, and visual systems. Ensuring brand consistency across all touchpoints to create a strong and memorable presence.",
      icon: <Palette size={32} />,
      bg: "bg-[#020037]",
      border: "",
    },
    {
      id: 5,
      title: "Graphic Design",
      description:
        "Producing eye-catching graphics for marketing campaigns, social media, events, and product promotions. Supporting storytelling with visuals that inspire and inform.",
      icon: <PenTool size={32} />,
      bg: "bg-[#0059FF]",
      border: "",
    },
    {
      id: 6,
      title: "Product Strategy",
      description:
        "Defining product direction through user research, market analysis, and competitive benchmarking. Aligning design decisions with business goals to deliver impactful digital solutions.",
      icon: <Target size={32} />,
      bg: "bg-[#020037]",
      border: "",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-[#020037] mb-6">
        Areas of my Expertise
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {areas.map((area) => (
          <div
            key={area.id}
            className={`p-8 text-white ${area.bg} hover:scale-105 transition-transform duration-300 border ${area.border}`}
          >
            <div className="mb-12">{area.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
            <p className="text-sm text-white font-thin">{area.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
