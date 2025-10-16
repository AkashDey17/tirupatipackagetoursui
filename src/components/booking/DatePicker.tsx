import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DatePicker = () => {
  const today = new Date();

  // Generate 7 days starting from startDate
  const getWeekDates = (startDate: Date, selectedDate: Date) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dates = [];

    for (let i = 0; i < 7; i++) {
      const d = new Date(startDate);
      d.setDate(startDate.getDate() + i);

      dates.push({
        day: days[d.getDay()],
        date: d.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
        }), // e.g. 08-Sep
        active: d.toDateString() === selectedDate.toDateString(), // highlight selected
        fullDate: d,
      });
    }
    return dates;
  };

  const [startDate, setStartDate] = useState(today);
  const [selectedDate, setSelectedDate] = useState(today); // default is today
  const [dates, setDates] = useState(getWeekDates(today, today));

  // Handle navigation
  const handlePrev = () => {
    // Block going before today
    if (startDate <= today) return;

    const newStart = new Date(startDate);
    newStart.setDate(newStart.getDate() - 7);
    setStartDate(newStart);
    setDates(getWeekDates(newStart, selectedDate));
  };

  const handleNext = () => {
    const newStart = new Date(startDate);
    newStart.setDate(newStart.getDate() + 7);
    setStartDate(newStart);
    setDates(getWeekDates(newStart, selectedDate));
  };

  // Handle selecting a date
  const handleSelectDate = (dateObj: any) => {
    setSelectedDate(dateObj.fullDate);
    setDates(getWeekDates(startDate, dateObj.fullDate));
  };

  return (
    <div className="bg-white border-b border-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left arrow */}
          <ChevronLeft
            className={`w-6 h-6 cursor-pointer ${
              startDate <= today ? "text-gray-300" : "text-gray-500"
            }`}
            onClick={handlePrev}
          />

          {/* Dates */}
          <div className="flex gap-1">
            {dates.map((date, index) => (
              <div
                key={index}
                onClick={() => handleSelectDate(date)}
                className={`px-4 py-2 text-center cursor-pointer rounded ${
                  date.active
                    ? "bg-[#0b4d71] text-white"
                    : "text-[#555555] hover:bg-[#f2f2f2]"
                }`}
              >
                <div className="text-sm font-medium">{date.day}</div>
                <div className="text-sm">{date.date}</div>
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <ChevronRight
            className="w-6 h-6 text-gray-500 cursor-pointer"
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
//below code is with offers section and with more elaborated structure

// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const DatePicker = () => {
//   const today = new Date();

//   // Generate 7 days starting from startDate
//   const getWeekDates = (startDate: Date, selectedDate: Date) => {
//     const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//     const dates = [];

//     for (let i = 0; i < 7; i++) {
//       const d = new Date(startDate);
//       d.setDate(startDate.getDate() + i);

//       dates.push({
//         day: days[d.getDay()],
//         date: d.toLocaleDateString("en-GB", {
//           day: "2-digit",
//           month: "short",
//         }),
//         active: d.toDateString() === selectedDate.toDateString(),
//         fullDate: d,
//       });
//     }
//     return dates;
//   };

//   const [startDate, setStartDate] = useState(today);
//   const [selectedDate, setSelectedDate] = useState(today);
//   const [dates, setDates] = useState(getWeekDates(today, today));

//   const handlePrev = () => {
//     if (startDate <= today) return;

//     const newStart = new Date(startDate);
//     newStart.setDate(newStart.getDate() - 7);
//     setStartDate(newStart);
//     setDates(getWeekDates(newStart, selectedDate));
//   };

//   const handleNext = () => {
//     const newStart = new Date(startDate);
//     newStart.setDate(newStart.getDate() + 7);
//     setStartDate(newStart);
//     setDates(getWeekDates(newStart, selectedDate));
//   };

//   const handleSelectDate = (dateObj: any) => {
//     setSelectedDate(dateObj.fullDate);
//     setDates(getWeekDates(startDate, dateObj.fullDate));
//   };

//   return (
//     <div className="w-full bg-[#f9f9f9] font-sans text-gray-800">
//       {/* Search Header */}
//       <div className="max-w-7xl mx-auto bg-white shadow p-4 rounded-md flex items-center space-x-2 mt-4">
//         <div className="flex-1">
//           <label className="text-xs text-gray-500">TO</label>
//           <div className="text-lg font-semibold">Tirupati, Andhra Pradesh</div>
//         </div>
//         <div className="flex-1">
//           <label className="text-xs text-gray-500">DEPART</label>
//           <div className="text-lg font-semibold">
//             {selectedDate.toLocaleDateString("en-GB", {
//               weekday: "short",
//               day: "2-digit",
//               month: "short",
//               year: "numeric",
//             })}
//           </div>
//         </div>
//         <button className="px-4 py-2 rounded bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold">
//           SEARCH
//         </button>
//       </div>

//       {/* Title */}
//       <div className="max-w-7xl mx-auto mt-4 text-lg font-semibold">
//         Bangalore, Karnataka to Tirupati, Andhra Pradesh Bus
//       </div>

//       {/* Week Date Picker */}
//       <div className="max-w-7xl mx-auto flex items-center justify-between bg-white rounded-md shadow mt-3 p-2">
//         <ChevronLeft
//           className={`w-6 h-6 cursor-pointer ${
//             startDate <= today ? "text-gray-300" : "text-gray-500"
//           }`}
//           onClick={handlePrev}
//         />

//         {/* Spread dates evenly */}
//         <div className="flex flex-1 justify-between px-2">
//           {dates.map((date, index) => (
//             <div
//               key={index}
//               onClick={() => handleSelectDate(date)}
//               className={`px-3 py-2 text-center cursor-pointer rounded ${
//                 date.active
//                   ? "bg-[#0b4d71] text-white"
//                   : "text-[#555555] hover:bg-[#f2f2f2]"
//               }`}
//             >
//               <div className="text-sm font-medium">{date.day}</div>
//               <div className="text-sm">{date.date}</div>
//             </div>
//           ))}
//         </div>

//         <ChevronRight
//           className="w-6 h-6 text-gray-500 cursor-pointer"
//           onClick={handleNext}
//         />
//       </div>

//       {/* Offers Row */}
//       <div className="max-w-7xl mx-auto flex space-x-2 mt-3">
//         {/* Top Rated Buses */}
//         <div
//           className="flex-1 p-3 rounded-lg flex items-center justify-between"
//           style={{
//             background:
//               "linear-gradient(to right, rgb(210, 251, 236) 0%, rgb(182, 249, 248) 100%)",
//           }}
//         >
//           <div>
//             <div className="font-semibold text-sm">Top Rated Buses</div>
//             <div className="text-xs text-gray-500">
//               Explore our highest rated buses on this route
//             </div>
//             <button
//               className="text-white font-semibold text-sm mt-1 px-3 py-1 rounded"
//               style={{
//                 background:
//                   "linear-gradient(to right, rgb(32, 161, 115) 0%, rgb(27, 132, 131) 100%)",
//               }}
//             >
//               See Buses →
//             </button>
//           </div>
//           <img
//             src="https://www.makemytrip.com/bus-mmt-next/_next/image?url=https%3A%2F%2Fjsak.mmtcdn.com%2Fbus_cdn_rnw%2Fstatic%2Fimages%2FBus%2FfilterCarousel%2Ftop_rated_us.webp&w=128&q=75"
//             alt="Top Rated"
//             className="h-16 object-contain"
//           />
//         </div>

//         {/* MyDeals */}
//         <div
//           className="flex-1 p-3 rounded-lg flex items-center justify-between"
//           style={{
//             background:
//               "linear-gradient(to right, rgb(226, 238, 255) 0%, rgb(195, 245, 255) 100%)",
//           }}
//         >
//           <div>
//             <div className="font-semibold text-sm">MyDeals</div>
//             <div className="text-xs text-gray-500">
//               Upto ₹100 OFF on select buses
//             </div>
//             <button
//               className="text-white font-semibold text-sm mt-1 px-3 py-1 rounded"
//               style={{
//                 background:
//                   "linear-gradient(to right, rgb(0, 210, 255) 0%, rgb(58, 123, 213) 100%)",
//               }}
//             >
//               See Buses →
//             </button>
//           </div>
//           <img
//             src="https://www.makemytrip.com/bus-mmt-next/_next/image?url=https%3A%2F%2Fjsak.mmtcdn.com%2Fbus_cdn_rnw%2Fstatic%2Fimages%2FBus%2FfilterCarousel%2Fmmt_deals_us.webp&w=128&q=75"
//             alt="MyDeals"
//             className="h-16 object-contain"
//           />
//         </div>

//         {/* Primo Buses */}
//         <div
//           className="flex-1 p-3 rounded-lg flex items-center justify-between"
//           style={{
//             background:
//               "linear-gradient(to right, rgb(213, 208, 255) 0%, rgb(255, 224, 252) 100%)",
//           }}
//         >
//           <div>
//             <div className="font-semibold text-sm">Primo Buses</div>
//             <div className="text-xs text-gray-500">
//               Travel with best amenities & operators
//             </div>
//             <button
//               className="text-white font-semibold text-sm mt-1 px-3 py-1 rounded"
//               style={{
//                 background:
//                   "linear-gradient(to right, rgb(48, 35, 174) 0%, rgb(200, 109, 215) 100%)",
//               }}
//             >
//               See Buses →
//             </button>
//           </div>
//           <img
//             src="https://www.makemytrip.com/bus-mmt-next/_next/image?url=https%3A%2F%2Fjsak.mmtcdn.com%2Fbus_cdn_rnw%2Fstatic%2Fimages%2FBus%2FfilterCarousel%2Fprimo_us.webp&w=128&q=75"
//             alt="Primo"
//             className="h-16 object-contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DatePicker;


