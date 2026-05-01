import HeroSection from "../Components/HeroSection";
import StacksExpertise from "../Components/StacksExpertise";
import PreviousProjects from "../Components/PreviousProjects";
import WhatIOffer from "../Components/WhatIOffer";
import BriefAbout from "../Components/BriefAbout";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <WhatIOffer />
      <StacksExpertise />
      <PreviousProjects />
      <BriefAbout />
    </div>
  );
};

export default Home;
