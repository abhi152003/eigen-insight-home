import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VisionMission from './components/VisionMission';
import CoreFeatures from "./components/CoreFeatures";
import UserBenefits from "./components/UserBenefits";
import CommunityGrowth from "./components/CommunityGrowth";
import Footer from './components/Footer';
import Xc from './components/Xc';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <VisionMission />
      <CoreFeatures />
      <UserBenefits />
      <CommunityGrowth />
      <Footer />
      <Xc />
    </div>
  );
}
