import { useState } from "react";
import { Helmet } from "react-helmet"; // <-- import Helmet
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
import ContactFloatingButton from "@/components/ContactFloatingButton";
import poster from "@/assets/poster.jpeg";
import poster2 from "@/assets/poster2.jpg";
import LiveMoodIndicator from "@/components/LiveMoodIndicator";

const Index = () => {
  const [showPoster, setShowPoster] = useState(true);

  const handleClosePoster = () => {
    setShowPoster(false);
  };

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>bangalore to tirupathi bus package | tirupati package from bangalore price</title>
        <meta
          name="description"
          content="Comfortable trips, special darshans, and trouble-free temple visits"
        />
        <meta
          name="keywords"
          content="bangalore to tirupathi bus package, tirupati package from bangalore price, ksrtc tirupati package from bangalore, tirupati balaji package from bangalore, tirupati tour package from bangalore, tirupati package from bangalore, tirupati darshan package from bangalore, bangalore to tirupati package bus"
        />
      </Helmet>

      {/* Centered Poster Popup */}
      {showPoster && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-40 px-4"
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
              src={poster2}
              alt="Poster"
              className="max-h-[90vh] w-auto max-w-[90vw] sm:max-w-[700px] md:max-w-[800px] lg:max-w-[900px] rounded-lg shadow-lg object-contain"
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
     
          {/* Floating Live Mood Indicator (Middle Left) */}
{/* <div className="fixed top-1/2 left-6 transform -translate-y-1/2 z-[90]">
  <LiveMoodIndicator />
</div> */}

       
      <Footer />
      <ContactFloatingButton />
    </div>
  );
};

export default Index;

// the above code is perfect with only one poster below it has two poster

// import { useState, useEffect } from "react";
// import { Helmet } from "react-helmet";
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
// import ContactFloatingButton from "@/components/ContactFloatingButton";
// import poster from "@/assets/Happy Diwali.jpg"; // ✅ First image
// import poster2 from "@/assets/poster2.jpg"; // ✅ Second image
// import WheatherWidget from "./WheatherWidget";

// const Index = () => {
//   const [showPoster, setShowPoster] = useState(true);
//   const [currentPoster, setCurrentPoster] = useState(0);
//   const posters = [poster, poster2];

//   // ✅ Auto change every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentPoster((prev) => (prev + 1) % posters.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleClosePoster = () => {
//     setShowPoster(false);
//   };

//   return (
//     <div style={{ minHeight: "100vh", position: "relative" }}>
//       {/* ✅ Smooth sliding animation */}
//       <style>
//         {`
//           .fade-image {
//             transition: opacity 1s ease-in-out; /* smooth change */
//             opacity: 1;
//           }
//           .fade-image.hidden {
//             opacity: 0;
//           }
//         `}
//       </style>

//       {/* SEO Meta Tags */}
//       <Helmet>
//         <title>bangalore to tirupathi bus package | tirupati package from bangalore price</title>
//         <meta name="description" content="Comfortable trips, special darshans, and trouble-free temple visits" />
//         <meta name="keywords" content="bangalore to tirupathi bus package, tirupati package from bangalore price" />
//       </Helmet>

//       {/* ✅ Popup + Smooth Image Transition */}
//       {showPoster && (
//         <div
//           className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-40 px-4"
//           onClick={handleClosePoster}
//         >
//           <div className="relative" onClick={(e) => e.stopPropagation()}>
//             {/* Close Button (same style) */}
//             <button
//               className="absolute -top-3 -right-3 text-gray-100 hover:text-white font-bold text-2xl bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center shadow-lg"
//               onClick={handleClosePoster}
//             >
//               ✕
//             </button>

//             {/* ✅ Smooth Fade Transition */}
//             <img
//               key={currentPoster}
//               src={posters[currentPoster]}
//               alt="Poster"
//               className="fade-image max-h-[90vh] w-auto max-w-[90vw] sm:max-w-[700px] md:max-w-[800px] lg:max-w-[900px] rounded-lg shadow-lg object-contain"
//             />
//           </div>
//         </div>
//       )}

//       {/* ✅ Rest of your page (unchanged) */}
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
//       <ContactFloatingButton />
//     </div>
//   );
// };

// export default Index;

// import { useState, useEffect } from "react";
// import { Helmet } from "react-helmet";
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
// import ContactFloatingButton from "@/components/ContactFloatingButton";
// import poster from "@/assets/Happy Diwali.jpg"; 
// import poster2 from "@/assets/poster2.jpg";
// import WheatherWidget from "./WheatherWidget"; // ✅ Weather Widget
// import PilgrimChatbot from "@/components/features/PilgrimChatbot";

// const Index = () => {
//   const [showPoster, setShowPoster] = useState(true);
//   const [currentPoster, setCurrentPoster] = useState(0);
//   const posters = [poster, poster2];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentPoster((prev) => (prev + 1) % posters.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleClosePoster = () => {
//     setShowPoster(false);
//   };

//   return (
//     <div style={{ minHeight: "100vh", position: "relative" }}>
//       {/* ✅ Smooth Image Transition */}
//       <style>
//         {`
//           .fade-image {
//             transition: opacity 1s ease-in-out;
//             opacity: 1;
//           }
//           .fade-image.hidden {
//             opacity: 0;
//           }
//         `}
//       </style>

//       {/* ✅ SEO Meta Tags */}
//       <Helmet>
//         <title>bangalore to tirupathi bus package | tirupati package from bangalore price</title>
//         <meta name="description" content="Comfortable trips, special darshans, and trouble-free temple visits" />
//         <meta name="keywords" content="bangalore to tirupathi bus package, tirupati package from bangalore price" />
//       </Helmet>

//       {/* ✅ Popup + Smooth Poster Change */}
//       {showPoster && (
//         <div
//           className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-40 px-4"
//           onClick={handleClosePoster}
//         >
//           <div className="relative" onClick={(e) => e.stopPropagation()}>
//             <button
//               className="absolute -top-3 -right-3 text-gray-100 hover:text-white font-bold text-2xl bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center shadow-lg"
//               onClick={handleClosePoster}
//             >
//               ✕
//             </button>
//             <img
//               key={currentPoster}
//               src={posters[currentPoster]}
//               alt="Poster"
//               className="fade-image max-h-[90vh] w-auto max-w-[90vw] sm:max-w-[700px] md:max-w-[800px] lg:max-w-[900px] rounded-lg shadow-lg object-contain"
//             />
//           </div>
//         </div>
//       )}

//       {/* ✅ Weather Widget Floating (Right Middle) */}
//      {/* <div className="fixed right-4 top-1/2 -translate-y-1/2 z-[10000]">
//         <WheatherWidget />
//       </div> */}

//       {/* ✅ Page Content */}
//       <Header />
//       <HeroSection />
//       <BestTravelAgency />
//       <ScrollVideo />
//       <TirupatiPackages />
//       <WhyChooseUs />
//       <TravelQuiz />
//       {/* <PilgrimChatbot /> */}
//       <ItineraryPlanner />
//       <TravelersLove />
//       <Footer />
//       <ContactFloatingButton />
//     </div>
//   );
// };

// export default Index;



