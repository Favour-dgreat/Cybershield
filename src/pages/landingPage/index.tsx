import LandingLayout from "../../components/layout";
import Showcase from "./sections/showcase";
import Tokenomics from "./sections/tokenomics";
import About from "./sections/about";
// import Community from "./sections/community";
import Features from './sections/features';
// import Pitch from "./sections/pitch";
// import Story from "./sections/story";
// import ThisYear from "./sections/thisYear";
// import Youtube from "./sections/youtube";
// import CountdownTimer from "./sections/countdown/CountdownTimer";
// import Twitter from "./sections/twitter";
// import Swags from "./sections/swags";
// import Speakers from "./sections/speakers";
function LandingPage() {
  // Create a ref for the Pitch section

  return (
    <LandingLayout>
      <Showcase />
      <About/>
      <Features/>
      <Tokenomics />



       {/* <ThisYear />
      <Community/> */}

      {/*<Pitch />
      <Swags />
      <Speakers />
      <Twitter />
      <Youtube />
      <CountdownTimer /> */}
      
    </LandingLayout>
  );
}

export default LandingPage;
