import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import TimelineSection from "@/components/TimelineSection";
import LoveLetterSection from "@/components/LoveLetterSection";
import PhotoMemoriesSection from "@/components/PhotoMemoriesSection";
import ReasonsSection from "@/components/ReasonsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <FloatingHearts />
      <HeroSection />
      <TimelineSection />
      <LoveLetterSection />
      <PhotoMemoriesSection />
      <ReasonsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
