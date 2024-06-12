import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VisionMission from './components/VisionMission';
import CoreFeatures from './components/CoreFeatures';
import UserBenefits from "./components/UserBenefits";
import CommunityGrowth from "./components/CommunityGrowth";
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <VisionMission />
      <CoreFeatures />
      <UserBenefits />
      <CommunityGrowth />
      <Footer />
    </>
  );
}
