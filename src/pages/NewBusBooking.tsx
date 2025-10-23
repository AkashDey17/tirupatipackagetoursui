// import BusListingContainer from "@/components/booking/BusListingContainer";
// import { Button } from "@/components/ui/button";
// import bus from "@/assets/bus.png";
// import { Search, Phone, Mail, User, Star, IndianRupee, Clock, Calendar } from "lucide-react";
// import Header from "@/components/Header";
// import busImg from "@/assets/a-man-with-bus.png";
// import swap from "@/assets/cross.png";

// const NewBusBooking = () => {
//   return (
//     <div className="min-h-screen bg-background">
     
      
//       <Header />

      
//       <div className="bg-[#11208c] py-8">
//         <div className="max-w-[1400px] mx-auto px-8">
//           <h1 className="text-[30px] font-bold text-white text-center mb-8">Majestic ➜ Tirupati</h1>
          
//           <div className="flex items-center justify-center gap-4 mb-8">
//             <div className="bg-accent rounded-full px-8 py-3">
//               <span className="text-lg font-bold text-[#020e68]">123 Buses found</span>
//             </div>
//             <button className="bg-white rounded-full px-8 py-3 flex items-center gap-2 hover:bg-white/90">
//               <span className="text-lg font-bold text-[#020e68]">Ratings</span>
//               <Star className="w-5 h-5 text-accent fill-accent" />
//             </button>
//             <button className="bg-white rounded-full px-8 py-3 flex items-center gap-2 hover:bg-white/90">
//               <span className="text-lg font-bold text-[#020e68]">Price</span>
//               <IndianRupee className="w-5 h-5 text-accent" />
//             </button>
//             <button className="bg-white rounded-full px-8 py-3 hover:bg-white/90">
//               <span className="text-lg font-bold text-[#020e68]">Departure Time</span>
//             </button>
//             <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-white/90">
//               <Search className="w-6 h-6 text-[#020e68]" />
//             </button>
//           </div>

          
         

// <div className="bg-white rounded-2xl p-6 border-2 border-border">
//   <div className="flex items-center gap-8">

   
//     <div className="flex items-center gap-4 flex-1">
//       <div className="flex items-center gap-3">
//         <div className="w-16 h-16">
//           <img src={busImg} alt="From" className="w-full h-full object-contain" />
//         </div>
//         <div>
//           <div className="text-xl text-muted-foreground">From</div>
//           <div className="text-xl font-bold text-[#020e68]">Majestic</div>
//         </div>
//       </div>
//     </div>

   
    
    
// <button className="bg-[#b1c9eb] w-14 h-14 rounded-full flex items-center justify-center overflow-hidden p-2">
//   <img src={swap} alt="Swap" className="w-full h-full object-contain" />
// </button>


    
//     <div className="flex items-center gap-4 flex-1">
//       <div className="flex items-center gap-3">
//         <div className="w-16 h-16">
//           <img src={busImg} alt="To" className="w-full h-full object-contain " />
//         </div>
//         <div>
//           <div className="text-sm text-muted-foreground">To</div>
//           <div className="text-2xl font-bold text-[#020e68]">Tirupati</div>
//         </div>
//       </div>
//     </div>

    
//     <div className="h-14 w-px bg-border"></div>
//     <div className="flex items-center gap-4">
//       <div>
//         <div className="text-sm text-muted-foreground">Date Of Journey</div>
//         <div className="text-xl font-bold text-[#020e68]">30 Sept 2025</div>
//       </div>
//       <button className="w-12 h-12 flex items-center justify-center hover:bg-muted rounded-lg">
//         <Calendar className="w-6 h-6 text-[#020e68]" />
//       </button>
//     </div>

    
//     <div className="flex gap-3">
//       <button className="bg-accent hover:bg-accent/90 text-[#020e68] font-bold px-8 py-3 rounded-full text-lg">
//         Today
//       </button>
//       <button className="bg-accent hover:bg-accent/90 text-[#020e68] font-bold px-8 py-3 rounded-full text-lg">
//         Tomorrow
//       </button>
//     </div>

//   </div>
// </div>

//         </div>
//       </div>

      
//       <div className="max-w-[1400px] mx-auto px-8 py-8">
//         <div className="flex gap-6">
          
//           <aside className="w-[380px] space-y-6">
            
//             <div className="bg-white rounded-3xl border-4 border-[#020e68] p-6">
//               <h3 className="text-2xl font-bold text-[#020e68] mb-4">Get Your Desired Bus</h3>
//             </div>


// <div
//   className="rounded-3xl p-6 text-white flex items-center gap-6"
//   style={{ backgroundColor: '#000636' }}
// >
  
//   <div className="flex-1 overflow-hidden pr-4">
//     <h3 className="text-lg font-bold mb-3 text-white bg-[#000636] inline-block px-3 py-1 rounded-lg">
//       AI Powered Travel Assistant
//     </h3>

//     <div className="bg-white rounded-full px-5 py-3 flex items-center justify-between mb-3 w-[90%]">
      
//       <div className="flex items-center flex-1">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-5 h-5 text-[#000] mr-2"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth="2"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
//           />
//         </svg>

//         <input
//           type="text"
//           placeholder="TRY ASKING..."
//           className="text-[#000] text-sm flex-1 outline-none bg-transparent placeholder:text-gray-500"
//         />
//       </div>

      
//       <Search className="w-5 h-5 text-[#000] ml-2" />
//     </div>
//   </div>

 
//   <div className="pl-2 flex-shrink-0 relative">
//     <img
//       src="https://productcatalo.my.canva.site/buses/_assets/media/48639767b8b51deb50a469a37d14cd2d.png"
//       alt="AI Travel Assistant"
//       className="w-24 h-24 object-contain block relative"
//       style={{ top: '-10px', right: '-10px' }}
//     />
//   </div>
// </div>





            
//   <div className="bg-accent rounded-3xl p-6 relative overflow-hidden flex items-center">
  
//   <div className="absolute -right-12 top-0 bottom-0 w-32 bg-accent/50 transform rotate-12"></div>

 
//   <div className="space-y-3 relative z-10 flex-1 max-w-[220px]">
//     <button className="w-full bg-white hover:bg-white/90 text-[#020e68] font-bold py-4 px-8 rounded-full text-lg border-2 border-[#020e68] whitespace-nowrap">
//       Discounts (30)
//     </button>
//     <button className="w-full bg-white hover:bg-white/90 text-[#020e68] font-bold py-4 px-8 rounded-full text-lg border-2 border-[#020e68] whitespace-nowrap">
//       AC (15)
//     </button>
//     <button className="w-full bg-white hover:bg-white/90 text-[#020e68] font-bold py-4 px-8 rounded-full text-lg border-2 border-[#020e68] whitespace-nowrap">
//       Single Seats (15)
//     </button>
//     <button className="w-full bg-white hover:bg-white/90 text-[#020e68] font-bold py-4 px-8 rounded-full text-lg border-2 border-[#020e68] whitespace-nowrap">
//       Sleeper (115)
//     </button>
//     <button className="w-full bg-white hover:bg-white/90 text-[#020e68] font-bold py-4 px-8 rounded-full text-lg border-2 border-[#020e68] whitespace-nowrap">
//       Women (115)
//     </button>
//   </div>

  
//   <div className="relative flex-shrink-0 ml-6 w-32 h-48">
//     <div className="absolute inset-0 flex flex-col items-center justify-center transform rotate-90">
//       <img
//         src={bus}
//         alt="Bus"
//         className="h-20 object-contain"
//       />
//       <span className="text-white font-bold text-lg whitespace-nowrap">
//         Customize it your way
//       </span>
//     </div>
//   </div>
// </div>

// </aside>

       
    
//         <main className="flex-1 space-y-6" >
//                 <BusListingContainer />
//           </main>
         
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewBusBooking;

////////////////////////////////////////////////////////////

import BusListingContainer from "@/components/booking/BusListingContainer";
import { Button } from "@/components/ui/button";
import bus from "@/assets/bus.png";
import { Search, Phone, Mail, User, Star, IndianRupee, Clock, Calendar, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import busImg from "@/assets/a-man-with-bus.png";
import swap from "@/assets/cross.png";
import Sidebar from "./Sidebar";

const NewBusBooking = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero Banner */}
      <div className="bg-[#11208c] py-8">
        <div className="max-w-[1400px] mx-auto px-8">
          <h1 className="text-[30px] font-bold text-white text-center mb-8">Majestic ➜ Tirupati</h1>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="bg-accent rounded-full px-8 py-3">
              <span className="text-lg font-bold text-[#020e68]">123 Buses found</span>
            </div>
            <button className="bg-white rounded-full px-8 py-3 flex items-center gap-2 hover:bg-white/90">
              <span className="text-lg font-bold text-[#020e68]">Ratings</span>
              <Star className="w-5 h-5 text-accent fill-accent" />
            </button>
            <button className="bg-white rounded-full px-8 py-3 flex items-center gap-2 hover:bg-white/90">
              <span className="text-lg font-bold text-[#020e68]">Price</span>
              <IndianRupee className="w-5 h-5 text-accent" />
            </button>
            <button className="bg-white rounded-full px-8 py-3 hover:bg-white/90">
              <span className="text-lg font-bold text-[#020e68]">Departure Time</span>
            </button>
            <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-white/90">
              <Search className="w-6 h-6 text-[#020e68]" />
            </button>
          </div>

          {/* Journey Selector */}
          <div className="bg-white rounded-2xl p-6 border-2 border-border">
            <div className="flex items-center gap-8">
              {/* From Field */}
              <div className="flex items-center gap-4 flex-1">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16">
                    <img src={busImg} alt="From" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <div className="text-xl text-muted-foreground">From</div>
                    <div className="text-xl font-bold text-[#020e68]">Majestic</div>
                  </div>
                </div>
              </div>

              {/* Swap Button */}
              <button className="bg-[#b1c9eb] w-14 h-14 rounded-full flex items-center justify-center overflow-hidden p-2">
                <img src={swap} alt="Swap" className="w-full h-full object-contain" />
              </button>

              {/* To Field */}
              <div className="flex items-center gap-4 flex-1">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16">
                    <img src={busImg} alt="To" className="w-full h-full object-contain " />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">To</div>
                    <div className="text-2xl font-bold text-[#020e68]">Tirupati</div>
                  </div>
                </div>
              </div>

              {/* Date of Journey */}
              <div className="h-14 w-px bg-border"></div>
              <div className="flex items-center gap-4">
                <div>
                  <div className="text-sm text-muted-foreground">Date Of Journey</div>
                  <div className="text-xl font-bold text-[#020e68]">30 Sept 2025</div>
                </div>
                <button className="w-12 h-12 flex items-center justify-center hover:bg-muted rounded-lg">
                  <Calendar className="w-6 h-6 text-[#020e68]" />
                </button>
              </div>

              {/* Today/Tomorrow buttons */}
              <div className="flex gap-3">
                <button className="bg-accent hover:bg-accent/90 text-[#020e68] font-bold px-8 py-3 rounded-full text-lg">
                  Today
                </button>
                <button className="bg-accent hover:bg-accent/90 text-[#020e68] font-bold px-8 py-3 rounded-full text-lg">
                  Tomorrow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-8 py-8">
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="w-[380px] space-y-6">
            {/* Get Your Desired Bus */}
            <div className="bg-white rounded-3xl border-4 border-[#020e68] p-6">
              <h3 className="text-2xl font-bold text-[#020e68] mb-4">Get Your Desired Bus</h3>
            </div>

            {/* AI Assistant */}
            <div
              className="rounded-3xl p-6 text-white flex items-center gap-6"
              style={{ backgroundColor: '#000636' }}
            >
              <div className="flex-1 overflow-hidden pr-4">
                <h3 className="text-lg font-bold mb-3 text-white bg-[#000636] inline-block px-3 py-1 rounded-lg">
                  AI Powered Travel Assistant
                </h3>

                <div className="bg-white rounded-full px-5 py-3 flex items-center justify-between mb-3 w-[90%]">
                  <div className="flex items-center flex-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-[#000] mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <input
                      type="text"
                      placeholder="TRY ASKING..."
                      className="text-[#000] text-sm flex-1 outline-none bg-transparent placeholder:text-gray-500"
                    />
                  </div>
                  <Search className="w-5 h-5 text-[#000] ml-2" />
                </div>
              </div>

              <div className="pl-2 flex-shrink-0 relative">
                <img
                  src="https://productcatalo.my.canva.site/buses/_assets/media/48639767b8b51deb50a469a37d14cd2d.png"
                  alt="AI Travel Assistant"
                  className="w-24 h-24 object-contain block relative"
                  style={{ top: '-10px', right: '-10px' }}
                />
              </div>
            </div>

            {/* Filters (top box) bg-accent */}
            <div className=" rounded-t-3xl p-6 relative overflow-hidden flex items-center border border-[#f4d03f] border-b-0">
              {/* <div className="absolute -right-12 top-0 bottom-0 w-32 bg-accent/50 transform rotate-12"></div>

              <div className="space-y-3 relative z-10 flex-1 max-w-[220px]">
                <button className="w-full bg-white hover:bg-white/90 text-[#020e68] font-bold py-4 px-8 rounded-full text-lg border-2 border-[#020e68] whitespace-nowrap">
                  Discounts (30)
                </button>
                <button className="w-full bg-white hover:bg-white/90 text-[#020e68] font-bold py-4 px-8 rounded-full text-lg border-2 border-[#020e68] whitespace-nowrap">
                  AC (15)
                </button>
                <button className="w-full bg-white hover:bg-white/90 text-[#020e68] font-bold py-4 px-8 rounded-full text-lg border-2 border-[#020e68] whitespace-nowrap">
                  Single Seats (15)
                </button>
                <button className="w-full bg-white hover:bg-white/90 text-[#020e68] font-bold py-4 px-8 rounded-full text-lg border-2 border-[#020e68] whitespace-nowrap">
                  Sleeper (115)
                </button>
                <button className="w-full bg-white hover:bg-white/90 text-[#020e68] font-bold py-4 px-8 rounded-full text-lg border-2 border-[#020e68] whitespace-nowrap">
                  Women (115)
                </button>
              </div>

              <div className="relative flex-shrink-0 ml-6 w-32 h-48">
                <div className="absolute inset-0 flex flex-col items-center justify-center transform rotate-90">
                  <img src={bus} alt="Bus" className="h-20 object-contain" />
                  <span className="text-white font-bold text-lg whitespace-nowrap">
                    Customize it your way
                  </span>
                </div>
              </div> */}
              <Sidebar />
            </div>

            {/* Dropdown (bottom box, touching the top one)
            <div className="bg-[#fff9e5] rounded-b-3xl overflow-hidden border border-[#f4d03f] border-t-0" style={{marginTop:"0px"}}>
              {[
                "Departure Time From Source",
                "Bus Type",
                "Boarding Points",
                "Dropping Points",
                "Special Bus Features",
              ].map((title, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center px-6 py-4 border-b border-[#f5deb3] last:border-b-0 cursor-pointer hover:bg-[#fff5cc]"
                >
                  <span className="text-[#020e68] font-semibold">{title}</span>
                  <ChevronDown className="w-5 h-5 text-[#020e68]" />
                </div>
              ))}
            </div> */}
          </aside>

          {/* Bus Listings */}
          <main className="flex-1 space-y-6">
            <BusListingContainer />
          </main>
        </div>
      </div>
    </div>
  );
};

export default NewBusBooking;


