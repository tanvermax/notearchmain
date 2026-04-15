import AboutUs from "./AboutUs";
import FeaturesGrid from "./FeatureGrid";
import HeroSection from "./Hero";
import MissionSection from "./OurMission";
import ProductShowcase from "./OurProduct";
import ServicesSection from "./OurService";
import ProductFeatures from "./ProductFeatures";
import RegisteredInstitutes from "./RegisteredInstitutes";
import VisionSection from "./VisionSection";

export default function Home() {
  return (
    <div>
       <HeroSection/>
       <ProductFeatures/>
       <AboutUs/>
       <MissionSection/>
       <VisionSection/>
       {/* <RegisteredInstitutes/>
       <ProductShowcase/>
       <ServicesSection/>
       <FeaturesGrid/> */}
    </div>
  );
}