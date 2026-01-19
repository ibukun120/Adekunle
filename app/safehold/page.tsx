import Image from "next/image";
import React from "react";
import Overview from "../components/safehold/Overview";
import FrontText from "../components/safehold/FrontText";
import FrontImage from "../components/safehold/FrontImage";
import Text2 from "../components/safehold/Text2";
import WorkProcess from "../components/safehold/WorkProcess";
import StyleGuide from "../components/safehold/StyleGuide";
import MobileApp from "../components/safehold/MobileApp";
import WebApp from "../components/safehold/WebApp";
import Role from "../components/safehold/Role";
import Home from "../components/safehold/Home";

const page = () => {
  return (
    <div className="bg-white ">
      <Home/>
      <Role/>
      <Overview />
      <FrontText/>
      <FrontImage/>
      <Text2/>
      <WorkProcess/>
      <StyleGuide/>
      <MobileApp/>
      <WebApp/>
    </div>
  );
};

export default page;
