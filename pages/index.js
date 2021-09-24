import IntroHeading from "../components/Home/IntroHeading";
import OurMission from '../components/Home/OurMission';
import OurTeam from "../components/Home/OurTeam";
import ProjectPipeline from "../components/Home/ProjectPipeline";
import TechUsed from "../components/Home/TechUsed";
import WhoWeAre from "../components/Home/WhoWeAre";

export default function Home() {
  return (
    <>
    <IntroHeading/>
    <WhoWeAre/>
    <OurMission/>
    <ProjectPipeline/>
    <OurTeam/>
    <TechUsed/>
    </>
  )
}
