// import Image from "next/image";
import HomePage from "./components/HomePage";
import Tin from "./components/Tin";
import RecentProjects from "./components/RecentProjects";
import Expertise from "./components/Expertise";
import DesignToolkit from "./components/DesignToolkit";
import Testimonials from "./components/Testimonials";
import WorkExperience from "./components/WorkExperince";


export default function Home() {
  return (
    <div className="bg-white mt-12 md:mt-20">
      <HomePage/>
      <Tin/>
      <div className="bg-white w-full p-6 block md:hidden"></div>
      <RecentProjects/>
      <Expertise/>
      <DesignToolkit/>
      <WorkExperience/>
      <Testimonials/>
    </div>
  );
}
