import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeroTry from './components/HeroTry';
import VisionMission from './components/VisionMission';
import CoreFeatures from "./components/CoreFeatures";
import UserBenefits from "./components/UserBenefits";
import CommunityGrowth from "./components/CommunityGrowth";

// import Test from './components/Test';
// import ScrollLine from './components/ScrollLine';
import Xc from './components/Xc';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <HeroTry /> */}
      {/* <Test /> */}
      <VisionMission />
      <CoreFeatures />
      <UserBenefits />
      <CommunityGrowth />
      <Footer />
      {/* <Xc /> */}
    </div>
  );
}
