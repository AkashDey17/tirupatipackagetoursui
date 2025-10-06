

// import { useState, useEffect } from "react";
// import Header from "@/components/Header";
// import HeroSection from "@/components/HeroSection";
// import BestTravelAgency from "@/components/BestTravelAgency";
// import TirupatiPackages from "@/components/TirupatiPackages";
// import WhyChooseUs from "@/components/WhyChooseUs";
// import TravelersLove from "@/components/TravelersLove";
// import Footer from "@/components/Footer";
// import ItineraryPlanner from "@/components/ItineraryPlanner";
// import ScrollVideo from "@/components/ScrollVideo";
// import TravelQuiz from "@/components/TravelQuiz";
// import WhatsAppButton from "@/components/WhatsAppButton";
// import CallButton from "@/components/CallButton";
// import ContactFloatingButton from "@/components/ContactFloatingButton";
// import poster from "@/assets/poster.jpeg";

// const Index = () => {
//   const [showPoster, setShowPoster] = useState(true);

//   // Auto-hide poster after 5 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => setShowPoster(false), 5000);
//     return () => clearTimeout(timer);
//   }, []);

//   const handleClosePoster = () => {
//     setShowPoster(false);
//   };

//   return (
//     <div style={{ minHeight: "100vh", position: "relative" }}>
//       {/* Centered Poster Popup */}
//       {showPoster && (
//         <div
//           className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-40"
//           onClick={handleClosePoster} // click outside closes poster
//         >
//           <div className="relative" onClick={(e) => e.stopPropagation()}>
//             <button
//               className="absolute -top-3 -right-3 text-gray-100 hover:text-white font-bold text-2xl bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center shadow-lg"
//               onClick={handleClosePoster}
//             >
//               ✕
//             </button>
//             <img
//               src={poster}
//               alt="Poster"
//               className="h-[400px] md:h-[500px] lg:h-[550px] rounded-lg shadow-lg object-cover"
//             />
//           </div>
//         </div>
//       )}

//       {/* Existing page content */}
//       <Header />
//       <HeroSection />
//       <BestTravelAgency />
//       <ScrollVideo />
//       <TirupatiPackages />
//       <WhyChooseUs />
//       <TravelQuiz />
//       <ItineraryPlanner />
//       <TravelersLove />
//       <Footer />
//       {/* <WhatsAppButton />
//       <CallButton /> */}
//       <ContactFloatingButton />
//     </div>
//   );
// };

// export default Index;


import { useState } from "react";
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
import poster from "@/assets/poster.jpeg";

const Index = () => {
  const [showPoster, setShowPoster] = useState(true);

  const handleClosePoster = () => {
    setShowPoster(false);
  };

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      {/* Centered Poster Popup */}
      {showPoster && (
  <div
    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-40"
    onClick={handleClosePoster} // click outside closes poster
  >
    <div
      className="relative"
      onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
    >
      <button
        className="absolute -top-3 -right-3 text-gray-100 hover:text-white font-bold text-2xl bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center shadow-lg"
        onClick={handleClosePoster}
      >
        ✕
      </button>

      {/* Poster Image */}
      <img
        src={poster}
        alt="Poster"
        className="max-h-[90vh] w-auto max-w-[900px] rounded-lg shadow-lg object-contain"
      />
    </div>
  </div>
)}


      {/* Existing page content */}
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
