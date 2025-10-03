import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BestTravelAgency from "@/components/BestTravelAgency";
import TirupatiPackages from "@/components/TirupatiPackages";
import WhyChooseUs from "@/components/WhyChooseUs";
import TravelersLove from "@/components/TravelersLove";
import Footer from "@/components/Footer";
import ItineraryPlanner from "@/components/ItineraryPlanner";
import ScrollVideo from "@/components/ScrollVideo";
import TravelQuiz from "@/components/TravelQuiz";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";
import ContactFloatingButton from "@/components/ContactFloatingButton";

const Index = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <HeroSection />
      <BestTravelAgency />
      <ScrollVideo />
      <TirupatiPackages />
      <WhyChooseUs />
      <TravelQuiz />
      <ItineraryPlanner />
      <TravelersLove />
      <Footer />
      {/* <WhatsAppButton />
      <CallButton /> */}
      <ContactFloatingButton />
    </div>
  );
};

export default Index;
