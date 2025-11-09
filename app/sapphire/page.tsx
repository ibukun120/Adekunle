import React from "react";
import Home from "../components/sapphire/Home";
import HomeText from "../components/sapphire/HomeText";
import LogoEvolution from "../components/sapphire/LogoEvolution";
import LogoVarient from "../components/sapphire/LogoVarient";
import OurBrands from "../components/sapphire/OurBrands";
import ColorPalette from "../components/sapphire/ColorPallet";
import BrandShowcase from "../components/sapphire/BrandShowcase";
import FirstHalf from "../components/sapphire/FirstHalf";
import Joint from "../components/sapphire/Joint";
import First from "../components/sapphire/First";

const page = () => {
  return (
    <div className="bg-white">
      <Home />
      <HomeText/>
      <LogoEvolution/>
      <LogoVarient/>
      <OurBrands/>
      <ColorPalette/>
      <BrandShowcase/>
      {/* <Joint/> */}
      <First/>
      <div className="w-full h-12 bg-white">

      </div>
    </div>
  );
};

export default page;
