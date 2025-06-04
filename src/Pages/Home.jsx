import AboutUsMain from "../components/AboutUsSection/AboutUsMain";
import ContactMeMain from "../components/ContactUsSection/ContactUsMain";
import ExperienceMain from "../components/FeaturesSection/FeaturesMain";
import FooterMain from "../components/footer/FooterMain";
import HeroGradient from "../components/heroSection/HeroGradient";
import HeroMain from "../components/heroSection/HeroMain";
import NavbarMain from "../components/navbar/NavbarMain";
import TherapistsMain from "../components/TherapistsSection/TherapistMain";
// import SubHeroMain from "../components/subHeroSection/SubHeroMain";
import Emotion from "../components/EmotionAsking/EmotionAsking";
import Services from "../components/ServicesMain/ServicesMain";
import Journey from "../components/Journey/Journey";
import TeamSection from "../components/TeamSection/TheExpertsSection";
import OurVision from "../components/OurVisionSection/OurVisionSection";

export default function Home() {
  return (
    <div className="font-body text-white relative overflow-hidden p-2 font-sans  ">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      {/* <SubHeroMain /> */}
      <Emotion />

      <ExperienceMain />
      <Services />
      <TherapistsMain />
      <Journey />
      <OurVision />
      <AboutUsMain />

      <TeamSection />
      <ContactMeMain />
      <FooterMain />
    </div>
  );
}
