import AboutUs from "./AboutUs";
import AppDownloadSection from "./AppDownloa";
import KeyBenefits from "./Benifit";
import ContactSection from "./ContactSession";
import FeaturesGrid from "./FeatureGrid";
import HeroSection from "./Hero";
import HowItWorks from "./HowItWork";
import LatestBlogSection from "./LatestBlogSection";
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
       <RegisteredInstitutes/>
       <ProductShowcase/>
       <ServicesSection/>
       <FeaturesGrid/>
       <KeyBenefits/>
       <ContactSection/>
       <AppDownloadSection/>
       <LatestBlogSection/>
       <HowItWorks/>
    </div>
  );
}