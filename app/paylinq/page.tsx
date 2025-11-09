// import Image from "next/image";
// import React from "react";
// import Tick from "../components/paylinq/Tick";
import Home from "../components/paylinq/Home";
import Overview from "../components/paylinq/Overview";
import OverviewText from "../components/paylinq/OverviewText";
import Work from "../components/paylinq/Work";
import MobileApp from "../components/paylinq/MobileApp";
import WebApp from "../components/paylinq/WebApp";
import ProjectNav from "../components/paylinq/ProjectNav";

const PayLinq = () => {
  return (
    <div className="mt-12 md:mt-20">
      <Home/>
      <Overview/>
      <OverviewText/>
      <Work/>
      <MobileApp/>
      <WebApp/>
      <ProjectNav/>
      <div>
        {/* <Image src='/images/paylinq/img70.png' alt="image70" height={400} width={700}/> */}
      </div>
    </div>
  );
};

export default PayLinq;
