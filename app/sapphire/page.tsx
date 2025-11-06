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

const page = () => {
  return (
    <div>
      <Home />
      <HomeText/>
      <LogoEvolution/>
      <LogoVarient/>
      <OurBrands/>
      <ColorPalette/>
      <BrandShowcase/>
      <Joint/>
    </div>
  );
};

export default page;
