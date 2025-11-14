

// import { useState, useEffect, useRef } from "react";
// import BusListingContainer from "@/components/booking/BusListingContainer";
// import { Button } from "@/components/ui/button";
// import bus from "@/assets/bus.png";
// import {
//   Search,
//   Calendar,
// } from "lucide-react";
// import Header from "@/components/Header";
// import busImg from "@/assets/a-man-with-bus.png";
// import swap from "@/assets/cross.png";
// import Sidebar from "./Sidebar";
// import { useLocation } from "react-router-dom";
// import { format } from "date-fns";
// import CalendarComp from "react-calendar";
// import "react-calendar/dist/Calendar.css";

// const NewBusBooking = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [showCalendar, setShowCalendar] = useState(false);
//   const [busCount, setBusCount] = useState(0);
//   const calendarRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     fetch("https://api.tirupatipackagetours.com/api/bus-count")
//       .then((res) => res.json())
//       .then((data) => setBusCount(data.count || 0))
//       .catch(() => setBusCount(0));
//   }, [selectedDate]);

//   const handleToday = () => setSelectedDate(new Date());
//   const handleTomorrow = () => {
//     const newDate = new Date(selectedDate);
//     newDate.setDate(newDate.getDate() + 1);
//     setSelectedDate(newDate);
//   };

//   const location = useLocation();
//   const { from,packageId } = location.state || { from: "Majestic",packageId:2 };

//   useEffect(() => {
//   const handleClickOutside = (event: MouseEvent) => {
//     if (
//       calendarRef.current &&
//       !calendarRef.current.contains(event.target as Node)
//     ) {
//       setShowCalendar(false);
//     }
//   };

//   if (showCalendar) {
//     document.addEventListener("mousedown", handleClickOutside);
//   } else {
//     document.removeEventListener("mousedown", handleClickOutside);
//   }

//   return () => {
//     document.removeEventListener("mousedown", handleClickOutside);
//   };
// }, [showCalendar]);

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Header */}
//       <Header />

//       {/* Hero Banner */}
//       <div className="bg-[#11208c] py-8">
//         <div className="max-w-[1400px] mx-auto px-8">
//           <h1 className="text-[30px] font-bold text-white text-center mb-8">
//             {from}
//           </h1>

//           {/* Journey Selector */}
//           <div className="bg-white rounded-2xl p-6 border-2 border-border">
//             <div className="flex items-center gap-8">
//               {/* From Field */}
//               <div className="flex items-center gap-4 flex-1">
//                 <div className="flex items-center gap-3">
//                   <div className="w-16 h-16">
//                     <img src={busImg} alt="From" className="w-full h-full object-contain" />
//                   </div>
//                   <div>
//                     <div className="text-xl text-muted-foreground">From</div>
//                     <div className="text-xl font-bold text-[#020e68]">Bangalore</div>
//                   </div>
//                 </div>
//               </div>

//               {/* Swap Button */}
//              <button className="bg-[#b1c9eb] w-14 h-14 rounded-full flex items-center justify-center overflow-hidden p-2 mr-[45px]">
//                 <img src={swap} alt="Swap" className="w-full h-full object-contain" />
//               </button>

//               {/* To Field */}
//               <div className="flex items-center gap-4 flex-1">
//                 <div className="flex items-center gap-3">
//                   <div className="w-16 h-16">
//                     <img src={busImg} alt="To" className="w-full h-full object-contain" />
//                   </div>
//                   <div>
//                     <div className="text-sm text-muted-foreground">To</div>
//                     <div className="text-2xl font-bold text-[#020e68]">Tirupati Package</div>
//                   </div>
//                 </div>
//               </div>

//               {/* Date of Journey */}
//               <div className="h-14 w-px bg-border"></div>
//               <div className="flex items-center gap-4 relative">
//                 <div>
//                   <div className="text-sm text-muted-foreground">Date Of Journey</div>
//                   <div className="text-xl font-bold text-[#020e68]">
//                     {format(selectedDate, "dd MMM yyyy")}
//                   </div>
//                 </div>

//                 {/* React Calendar Button */}
//                 <button
//                   className="w-12 h-12 flex items-center justify-center hover:bg-muted rounded-lg transition-all duration-200 hover:scale-105"
//                   onClick={() => setShowCalendar(!showCalendar)}
//                 >
//                   <Calendar className="w-6 h-6 text-[#020e68]" />
//                 </button>

//                 {/* Calendar Dropdown */}
                
//                 {showCalendar && (
//   <div
//     ref={calendarRef}
//     className="absolute top-14 right-0 z-50 bg-white p-4 rounded-2xl shadow-2xl border border-gray-200 w-[320px] sm:w-[360px] md:w-[380px]"
//   >
//     <div className="text-center mb-3">
//                       <h3 className="text-lg font-semibold text-[#020e68]">Select Your Journey Date</h3>
//                       <p className="text-sm text-gray-500">Only from today up to 1 month ahead</p>
//                     </div>

//                     <div className="rounded-xl border border-gray-100 shadow-sm overflow-hidden">
//                       <CalendarComp
//                         onChange={(date) => {
//                           setSelectedDate(date as Date);
//                           setShowCalendar(false);
//                         }}
//                         value={selectedDate}
//                         minDate={new Date()}
//                         maxDate={new Date(new Date().setMonth(new Date().getMonth() + 1))}
//                       />
//                     </div>

//                     <div className="flex justify-center gap-3 mt-4">
//                       <button
//                         onClick={handleToday}
//                         className="px-4 py-2 bg-[#f5f7ff] text-[#020e68] rounded-full font-medium hover:bg-[#d9e2ff] transition-all duration-200"
//                       >
//                         Today
//                       </button>
//                       <button
//                         onClick={handleTomorrow}
//                         className="px-4 py-2 bg-[#f5f7ff] text-[#020e68] rounded-full font-medium hover:bg-[#d9e2ff] transition-all duration-200"
//                       >
//                         Tomorrow
//                       </button>
//                     </div>
//   </div>
// )}
//               </div>

//               {/* Today/Tomorrow buttons */}
//               <div className="flex gap-3">
//                 <button
//                   onClick={handleToday}
//                   className="bg-accent hover:bg-accent/90 text-[#020e68] font-bold px-8 py-3 rounded-full text-lg"
//                 >
//                   Today
//                 </button>
//                 <button
//                   onClick={handleTomorrow}
//                   className="bg-accent hover:bg-accent/90 text-[#020e68] font-bold px-8 py-3 rounded-full text-lg"
//                 >
//                   Tomorrow
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-[1400px] mx-auto px-8 py-8">
//         <div className="flex gap-6">
//           {/* Sidebar */}
//           <aside className="w-[380px] space-y-6">
//             {/* Get Your Desired Bus */}
//             <div className="bg-white rounded-3xl border-4 border-[#020e68] p-6">
//               <h3 className="text-2xl font-bold text-[#020e68] mb-4">
//                 Get Your Desired Bus
//               </h3>
//             </div>

//             {/* AI Assistant */}
//             <div
//               className="rounded-3xl p-6 text-white flex items-center gap-6"
//               style={{ backgroundColor: "#000636" }}
//             >
//               <div className="flex-1 overflow-hidden pr-4">
//                 <h3 className="text-lg font-bold mb-3 text-white bg-[#000636] inline-block px-3 py-1 rounded-lg">
//                   AI Powered Travel Assistant
//                 </h3>

                
//               </div>

//               <div className="pl-2 flex-shrink-0 relative">
//                 <img
//                   src="https://productcatalo.my.canva.site/buses/_assets/media/48639767b8b51deb50a469a37d14cd2d.png"
//                   alt="AI Travel Assistant"
//                   className="w-24 h-24 object-contain block relative"
//                   style={{ top: "-10px", right: "-10px" }}
//                 />
//               </div>
//             </div>

//             {/* Filters */}
            
//           </aside>

//           {/* Bus Listings */}
//           <main className="flex-1 space-y-6">
//             <BusListingContainer selectedDate={selectedDate} packageId={packageId} from={from}  />
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewBusBooking;






import { useState, useEffect, useRef } from "react";
import BusListingContainer from "@/components/booking/BusListingContainer";
import { Calendar } from "lucide-react";
import Header from "@/components/Header";
import busImg from "@/assets/a-man-with-bus.png";
import swap from "@/assets/cross.png";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import CalendarComp from "react-calendar";
import "react-calendar/dist/Calendar.css";

const NewBusBooking = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef<HTMLDivElement | null>(null);

  const handleToday = () => setSelectedDate(new Date());
  const handleTomorrow = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + 1);
    setSelectedDate(newDate);
  };

  const location = useLocation();
  // const { from, packageId } = location.state || { from: "Majestic", packageId: 2 };
   const { from, packageId, selectedDate: passedDate } = location.state || {
  from: "Majestic",
  packageId: 2,
  selectedDate: new Date().toISOString().split("T")[0],
};

useEffect(() => {
  if (passedDate) {
    setSelectedDate(new Date(passedDate));
  }
}, [passedDate]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setShowCalendar(false);
      }
    };
    if (showCalendar) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showCalendar]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="bg-[#11208c] py-6 sm:py-8">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <h1 className="text-[24px] sm:text-[32px] font-bold text-white text-center mb-6 sm:mb-8">
            {from}
          </h1>

          <div className="bg-white rounded-2xl p-4 sm:p-6 border-2 border-border">
            <div className="flex flex-col sm:flex-row flex-wrap gap-5 sm:gap-8 items-center sm:items-start">
              
              {/* From */}
              <div className="flex items-center gap-3 flex-1 w-full sm:w-auto justify-center sm:justify-start">
                <div className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
                  <img src={busImg} alt="From" className="w-full h-full object-contain" />
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-sm sm:text-xl text-muted-foreground">From</div>
                  <div className="text-lg sm:text-2xl font-bold text-[#020e68]">Bangalore</div>
                </div>
              </div>

              {/* Swap Button */}
              <button className="bg-[#b1c9eb] w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mx-auto sm:mx-0 self-center">
                <img src={swap} alt="Swap" className="w-5 h-5 sm:w-7 sm:h-7 object-contain" />
              </button>

              {/* To */}
              <div className="flex items-center gap-3 flex-1 w-full sm:w-auto justify-center sm:justify-start">
                <div className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
                  <img src={busImg} alt="To" className="w-full h-full object-contain" />
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-sm sm:text-xl text-muted-foreground">To</div>
                  <div className="text-lg sm:text-2xl font-bold text-[#020e68]">Tirupati Package</div>
                </div>
              </div>

              {/* Date of Journey */}
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mt-4 sm:mt-0 relative">
                <div className="text-center sm:text-left">
                  <div className="text-sm text-muted-foreground">Date Of Journey</div>
                  <div className="text-lg sm:text-2xl font-bold text-[#020e68]">
                    {format(selectedDate, "dd MMM yyyy")}
                  </div>
                </div>
                <button
                  onClick={() => setShowCalendar(!showCalendar)}
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-muted rounded-lg transition-all duration-200"
                >
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-[#020e68]" />
                </button>

                {showCalendar && (
                  <div
                    ref={calendarRef}
                    className="absolute top-14 right-0 z-50 bg-white p-4 rounded-2xl shadow-2xl border border-gray-200 w-[280px] sm:w-[360px]"
                  >
                    <div className="text-center mb-3">
                      <h3 className="text-lg font-semibold text-[#020e68]">
                        Select Your Journey Date
                      </h3>
                      <p className="text-sm text-gray-500">
                        Only from today up to 1 month ahead
                      </p>
                    </div>

                    <div className="rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                      <CalendarComp
                        onChange={(date) => {
                          setSelectedDate(date as Date);
                          setShowCalendar(false);
                        }}
                        value={selectedDate}
                        minDate={new Date()}
                        maxDate={new Date(new Date().setMonth(new Date().getMonth() + 1))}
                      />
                    </div>

                    <div className="flex justify-center gap-3 mt-4">
                      <button
                        onClick={handleToday}
                        className="px-4 py-2 bg-[#f5f7ff] text-[#020e68] rounded-full font-medium hover:bg-[#d9e2ff]"
                      >
                        Today
                      </button>
                      <button
                        onClick={handleTomorrow}
                        className="px-4 py-2 bg-[#f5f7ff] text-[#020e68] rounded-full font-medium hover:bg-[#d9e2ff]"
                      >
                        Tomorrow
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-0 w-full sm:w-auto">
                <button
                  onClick={handleToday}
                  className="bg-accent hover:bg-accent/90 text-[#020e68] font-bold px-6 py-2 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg"
                >
                  Today
                </button>
                <button
                  onClick={handleTomorrow}
                  className="bg-accent hover:bg-accent/90 text-[#020e68] font-bold px-6 py-2 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg"
                >
                  Tomorrow
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <aside className="w-full lg:w-[380px] space-y-6">
            <div className="bg-white rounded-3xl border-4 border-[#020e68] p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#020e68] mb-4">
                Get Your Desired Bus
              </h3>
            </div>

            <div
              className="rounded-3xl p-6 text-white flex items-center gap-6"
              style={{ backgroundColor: "#000636" }}
            >
              <div className="flex-1 overflow-hidden pr-4">
                <h3 className="text-base sm:text-lg font-bold mb-3 bg-[#000636] inline-block px-3 py-1 rounded-lg">
                  AI Powered Travel Assistant
                </h3>
              </div>
              <div className="pl-2 flex-shrink-0 relative">
                <img
                  src="https://productcatalo.my.canva.site/buses/_assets/media/48639767b8b51deb50a469a37d14cd2d.png"
                  alt="AI Travel Assistant"
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain block relative"
                  style={{ top: "-10px", right: "-10px" }}
                />
              </div>
            </div>

            {/* <Sidebar /> */}
          </aside>

          <main className="flex-1 space-y-6">
            <BusListingContainer selectedDate={selectedDate} packageId={packageId} from={from}  />
          </main>
        </div>
      </div>
    </div>
  );
};

export default NewBusBooking;