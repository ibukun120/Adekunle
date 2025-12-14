import { Linkedin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import ContactForm from "./ContactForm";
import First from "./First";

const Home = () => {
  return (
    <div className="bg-white px-6 md:px-12 lg:px-20 py-16 mt-16 w-full">
      <h1 className="text-[#020037] font-bold tracking-wide text-4xl md:text-6xl text-center mt-10 md:mt-16">
        Get In Touch
      </h1>

      {/* main */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-18">
        {/* 1st div */}
        <First/>
        {/* 2nd div */}
        <ContactForm/>
      </div>

      
    </div>
  );
};

export default Home;
