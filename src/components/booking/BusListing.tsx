

// import { useState, useEffect } from "react";
// import {
//   User,
//   Camera,
//   FileText,
//   ChevronDown,
//   ChevronUp,
//   MapPin,
// } from "lucide-react";
// import { useLocation } from "react-router-dom";
// import BusLayout from "./BusLayout.tsx";

// interface BusListingProps {
//   busNumber: string;
//   operator: number;
//   busType: string;
//   departureTime: string;
//   arrivalTime: string;
//   duration: string;
//   date: string;
//   price: string;
//   seatsAvailable: number;
//   totalSeats: number;
//   amenities?: string[];
//   photos?: string[];
//   policies?: string[];
//   pickupDropPoints?: string[];
//   rating?: number;
//   reviewsCount?: number;
//   hasInfo?: boolean;
//   selectedDate: String  | Date;
//   finalSeatPrice: number;
//   busBookingDetailsId:number,
//   operatorId: number;
//   packageId: number;

// }

// interface BoardingDroppingPoint {
//   PointName: string;
//   AreaName: string;
//   Pincode: string;
//   latitude?: number;
//   longitude?: number;
//   Time?: string;
// }

// const BusListing = ({
//   busNumber,
//   operator,
//   busType,
//   departureTime,
//   arrivalTime,
//   duration,
//   operatorId,
//   price,
//   seatsAvailable,
//   totalSeats,
//   amenities = [],
//   photos = [],
//   policies = [],
//   pickupDropPoints = [],
//   rating,
//   reviewsCount,
//   hasInfo = false,
//   selectedDate,
//   finalSeatPrice,

//   packageId=2
// }: BusListingProps) => {
//   console.log("🗓️ BusListing received selectedDate:", selectedDate);
//   const hasSeats = seatsAvailable > 0;
//   const [displayRating] = useState<number>(
//     rating ?? Number((Math.random() * 3.5 + 1.5).toFixed(1))
//   );
//   const displayReviews = reviewsCount ?? Math.floor(Math.random() * 500) + 50;

//   const [showSeats, setShowSeats] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<
//     "amenities" | "policies" | "pickupDropPoints" | null
//   >(null);

//   const toggleDropdown = (
//     type: "amenities" | "policies" | "pickupDropPoints"
//   ) => {
//     setOpenDropdown((prev) => (prev === type ? null : type));
//   };

//   // --- New: boarding / dropping points states and busBookingId resolution (copied logic) ---
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const busIdFromUrl = queryParams.get("busId");
//   const selectedBusId = busIdFromUrl ? Number(busIdFromUrl) : null;

//   const [busBookingId, setBusBookingId] = useState<number | null>(
//     selectedBusId || null
//   );
//   const [boardingPoints, setBoardingPoints] = useState<BoardingDroppingPoint[]>(
//     []
//   );
//   const [droppingPoints, setDroppingPoints] = useState<
//     BoardingDroppingPoint[]
//   >([]);
//   const [busBookingDetailsId, setBusBookingDetailsId] = useState<number | null>(null);


//   // ✅ to store BusBookingDetailsId


// // props: operatorId, packageId
// useEffect(() => {
//   console.log("👉 Operator ID:", operatorId);
//   console.log("👉 Package ID:", packageId);
//   if (!operatorId || !packageId) return;

//   const fetchBusDetailId = async () => {
//     try {
//       const res = await fetch(
//         `https://api.tirupatipackagetours.com/api/bus-booking-details/by-operator-package/${operatorId}/${packageId}`
//       );
//       const data = await res.json();

//       console.log("✅ Fetched BusBookingDetailID:", data);
//       setBusBookingDetailsId(data?.busBookingDetailId || null);
//     } catch (err) {
//       console.error("❌ Error fetching BusBookingDetailID:", err);
//     }
//   };

//   fetchBusDetailId();
// }, [operatorId, packageId]);






//   // If no busId in URL, fetch bus details and pick first BusBooKingDetailID (same fallback logic)
//   useEffect(() => {
//     const fetchBusDetails = async () => {
//       try {
//         const res = await fetch("https://api.tirupatipackagetours.com/api/bus-details");
//         const data = await res.json();

//         if (Array.isArray(data) && data.length > 0) {
//           const firstBus = data[0];
//           if (firstBus?.BusBooKingDetailID) {
//             console.log(
//               "BusListing: using BusBookingDetailID from /api/bus-details:",
//               firstBus.BusBooKingDetailID
//             );
//             setBusBookingId(firstBus.BusBooKingDetailID);
//           }
//         } else if (data?.BusBooKingDetailID) {
//           setBusBookingId(data.BusBooKingDetailID);
//         }
//       } catch (err) {
//         console.error("BusListing ❌ Error fetching bus details:", err);
//       }
//     };

//     if (!selectedBusId) {
//       fetchBusDetails();
//     } else {
//       setBusBookingId(selectedBusId);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [selectedBusId]);

//   // Fetch boarding & dropping points when we have a busBookingId
//   useEffect(() => {
//     if (!busBookingId) return;
//     console.log("BusListing 🔍 Fetching points for bus:", busBookingId);

//     const fetchPoints = async () => {
//       try {
//         const [boardingRes, droppingRes] = await Promise.all([
//           fetch(`https://api.tirupatipackagetours.com/api/bus/boardingPoints/${busBookingId}`),
//           fetch(`https://api.tirupatipackagetours.com/api/bus/droppingPoints/${busBookingId}`),
//         ]);

//         const boardingData = await boardingRes.json();
//         const droppingData = await droppingRes.json();

//         console.log("BusListing ✅ Boarding Points API:", boardingData);
//         console.log("BusListing ✅ Dropping Points API:", droppingData);

//         setBoardingPoints(
//           boardingData?.boardingPoints ||
//             boardingData?.data?.boardingPoints ||
//             boardingData ||
//             []
//         );
//         setDroppingPoints(
//           droppingData?.droppingPoints ||
//             droppingData?.data?.droppingPoints ||
//             droppingData ||
//             []
//         );
//       } catch (err) {
//         console.error("BusListing ❌ Error fetching points:", err);
//       }
//     };

//     fetchPoints();
//   }, [busBookingId]);

//   // Keep existing rating color logic
//   // let ratingBg = "#4CAF50";
//   // if (displayRating > 4) ratingBg = "#4CAF50";
//   // else if (displayRating < 2) ratingBg = "#FF4C4C";
//   // else if (displayRating < 3) ratingBg = "#FFA500";

//   return (
//     <div className="relative bg-white border-2 border-border p-4 hover:shadow-lg transition-shadow max-w-full mb-4 rounded-3xl">
//       {/* Rating */}
//       {/* <div
//         className="absolute flex items-center gap-1 px-3 py-1 text-sm font-semibold shadow-md z-10"
//         style={{
//           backgroundColor: ratingBg,
//           color: "white",
//           top: "0",
//           left: "-1px",
//           transform: "translateY(-50%)",
//         }}
//       >
//         <span>{displayRating.toFixed(1)}</span>
//       </div> */}

//       {/* Bus Info */}
//       <div className="flex items-center justify-between gap-4 flex-wrap mt-6">
//         <div className="flex-1 min-w-0 flex items-center gap-3">
//           <div className="min-w-0">
//             <p className="text-sm text-muted-foreground">
//               {busType} ({totalSeats}+{totalSeats - seatsAvailable})
//             </p>
//           </div>
//         </div>

//         <div className="flex items-center gap-6 min-w-[200px] justify-center">
//           <div className="text-center">
//             <div className="text-2xl font-bold text-[#020e68]">
//               {departureTime}
//             </div>
//           </div>
//           <div className="flex flex-col items-center">
//             <div className="w-24 h-px bg-border mb-1"></div>
//             <div className="text-xs text-muted-foreground">{duration}</div>
//           </div>
//           <div className="text-center">
//             <div className="text-2xl font-bold text-[#020e68]">
//               {arrivalTime}
//             </div>
//           </div>
//         </div>
//  {/* Date Row */}
//   <div className="text-[11px] text-gray-500 mt-1">
//     {(() => {
//       const start = new Date(selectedDate as string);
//       const end = new Date(start);
//       end.setDate(start.getDate() + 1);

//       const format = (d: Date) =>
//         d.toLocaleDateString("en-IN", {
//           day: "2-digit",
//           month: "short",
//         });

//       return `${format(start)} - ${format(end)}`;
//     })()}
//   </div>

//         <div className="text-right flex-shrink-0 flex flex-col items-end gap-1">
//           <div className="flex items-start justify-end gap-1">
//             <span className="text-3xl font-bold text-[#020e68]">
//               ₹ {finalSeatPrice}
//             </span>
//             <span className="text-sm text-muted-foreground mt-2">Onwards</span>
//           </div>
//           <div className="text-sm font-semibold text-green-600">
//             Available Seats ({seatsAvailable})
//           </div>
//           <div
//             onClick={() => setShowSeats((prev) => !prev)}
//             className={`cursor-pointer mt-2 text-sm font-bold px-4 py-1 rounded-full text-center ${
//               hasSeats
//                 ? "bg-[#ffcf06] text-[#020e68] hover:bg-[#ffcf06]/90"
//                 : "bg-gray-400 text-[#020e68]"
//             }`}
//           >
//             {showSeats ? "Hide Seats" : "View Seats"}
//           </div>
//         </div>
//       </div>

//       {showSeats && (
//         <div className="border-t border-gray-300 mt-4 pt-4 bg-gray-50">

//         <BusLayout
//   duration={duration}
//   selectedDate={selectedDate}
//   operator={operator}
//   busNumber={busNumber}
//   busBookingId={operator}
//  operatorId={operatorId}   
//   finalSeatPrice={finalSeatPrice}
//   busBookingDetailsId={busBookingDetailsId}

// />




//         </div>
//       )}

//       {/* Tabs */}
//       <div className="flex items-center gap-4 mt-3 text-sm font-semibold text-[#020e68]">
//         <div
//           className="flex items-center cursor-pointer"
//           onClick={() => toggleDropdown("amenities")}
//         >
//           <User className="w-4 h-4 mr-1" /> Amenities{" "}
//           {openDropdown === "amenities" ? (
//             <ChevronUp className="w-4 h-4" />
//           ) : (
//             <ChevronDown className="w-4 h-4" />
//           )}
//         </div>

//         <div
//           className="flex items-center cursor-pointer"
//           onClick={() => toggleDropdown("policies")}
//         >
//           <FileText className="w-4 h-4 mr-1" /> Policies{" "}
//           {openDropdown === "policies" ? (
//             <ChevronUp className="w-4 h-4" />
//           ) : (
//             <ChevronDown className="w-4 h-4" />
//           )}
//         </div>

//         <div
//           className="flex items-center cursor-pointer"
//           onClick={() => toggleDropdown("pickupDropPoints")}
//         >
//           <MapPin className="w-4 h-4 mr-1" /> Pickup & Drop Points{" "}
//           {openDropdown === "pickupDropPoints" ? (
//             <ChevronUp className="w-4 h-4" />
//           ) : (
//             <ChevronDown className="w-4 h-4" />
//           )}
//         </div>
//       </div>

//       {/* Dropdown Content */}
//       {openDropdown && (
//         <div className="border-t border-gray-300 mt-2 pt-3 bg-gray-50 rounded-lg p-4 text-sm">
//           {/* Amenities */}
//           {openDropdown === "amenities" && (
//             <div className="flex flex-wrap gap-2">
//               {amenities.length > 0 ? (
//                 amenities.map((a, idx) => (
//                   <span
//                     key={idx}
//                     className="px-2 py-1 bg-[#3d85c6]/10 text-[#3d85c6] rounded text-xs"
//                   >
//                     {a}
//                   </span>
//                 ))
//               ) : (
//                 <span className="text-gray-500 text-xs">
//                   No amenities available
//                 </span>
//               )}
//             </div>
//           )}

//           {/* Photos */}

//           {/* ✅ Policies Section (Hard-coded) */}
//           {openDropdown === "policies" && (
//             <div className="space-y-4 text-xs text-gray-700">
//               <div>
//                 <h4 className="font-bold text-[#020e68] text-sm mb-2">
//                   Cancellation Policy
//                 </h4>
//                 <table className="w-full text-left border border-gray-200 text-[12px]">
//                   <thead className="bg-[#f0f4ff]">
//                     <tr>
//                       <th className="p-2 border">Cancellation Time</th>
//                       <th className="p-2 border">Cancellation Charges</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td className="p-2 border">0–6 hrs before departure</td>
//                       <td className="p-2 border">100%</td>
//                     </tr>
//                     <tr>
//                       <td className="p-2 border">6–24 hrs before departure</td>
//                       <td className="p-2 border">50%</td>
//                     </tr>
//                     <tr>
//                       <td className="p-2 border">More than 24 hrs</td>
//                       <td className="p-2 border">10%</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>

//               <div>
//                 <h4 className="font-bold text-[#020e68] text-sm mb-2">
//                   Reschedule Policy
//                 </h4>
//                 <table className="w-full text-left border border-gray-200 text-[12px]">
//                   <thead className="bg-[#f0f4ff]">
//                     <tr>
//                       <th className="p-2 border">Reschedule Time</th>
//                       <th className="p-2 border">Reschedule Charges</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td className="p-2 border">Up to 6 hrs before departure</td>
//                       <td className="p-2 border">20%</td>
//                     </tr>
//                     <tr>
//                       <td className="p-2 border">Less than 6 hrs</td>
//                       <td className="p-2 border">NO_RESCHEDULE</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>

//               <ul className="list-disc list-inside space-y-1 mt-2">
//                 <li>Cancellation charges are computed per seat.</li>
//                 <li>Calculated based on service start date/time.</li>
//                 <li>No cancellation after scheduled departure time.</li>
//                 <li>Charges exclude GST.</li>
//                 <li>Group bookings can cancel individual seats.</li>
//               </ul>

//               <div className="border-t pt-3 mt-3 space-y-3">
//                 <div>
//                   <span className="font-bold text-[#020e68] block">
//                     Child Passenger Policy
//                   </span>
//                   <span>Children above age 5 require a ticket.</span>
//                 </div>

//                 <div>
//                   <span className="font-bold text-[#020e68] block">
//                     Luggage Policy
//                   </span>
//                   <span>
//                     2 pieces free. Excess luggage over 20kg per passenger
//                     chargeable.
//                   </span>
//                 </div>

//                 <div>
//                   <span className="font-bold text-[#020e68] block">
//                     Pets Policy
//                   </span>
//                   <span>Pets are not allowed.</span>
//                 </div>

//                 <div>
//                   <span className="font-bold text-[#020e68] block">
//                     Liquor Policy
//                   </span>
//                   <span>
//                     Carrying or consuming liquor inside the bus is prohibited.
//                   </span>
//                 </div>

//                 <div>
//                   <span className="font-bold text-[#020e68] block">
//                     Pick-up Time Policy
//                   </span>
//                   <span>
//                     The operator won’t wait beyond scheduled departure. Late
//                     passengers won’t be refunded.
//                   </span>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Pickup & Drop Points (NEW: Boarding & Dropping Sections) */}
//           {openDropdown === "pickupDropPoints" && (
//             <div className="text-xs text-gray-700 space-y-4">
//               {/* Boarding points section */}
//               <div>
//                 <div className="flex items-center justify-between mb-2">
//                   <h3 className="font-medium">BOARDING POINTS</h3>
//                   <ChevronUp className="w-4 h-4 text-muted-foreground" />
//                 </div>
//                 <div className="max-h-48 overflow-y-auto space-y-2">
//                   {boardingPoints.length > 0 ? (
//                     boardingPoints.map((point, idx) => (
//                       <div key={idx} className="border rounded p-2">
//                         {point.Time && (
//                           <div className="font-medium text-xs">{point.Time}</div>
//                         )}

//                         <div className="font-semibold text-sm">
//                           {point.AreaName}
//                         </div>
//                          <div className="text-xs text-pickup-text mt-1">{point.PointName}</div>
//                         <div className="text-xs text-pickup-text">{point.Pincode}</div>
//                       </div>
//                     ))
//                   ) : (
//                     // fallback to the old pickupDropPoints prop (string[]), if present
//                     pickupDropPoints.length > 0 ? (
//                       pickupDropPoints.map((p, i) => (
//                         <div key={i} className="border rounded p-2">
//                           <div className="font-semibold text-sm">{p}</div>
//                         </div>
//                       ))
//                     ) : (
//                       <div className="text-gray-500 text-xs">
//                         No boarding points available
//                       </div>
//                     )
//                   )}
//                 </div>
//               </div>

//               {/* Dropping points section */}
//               <div>
//                 <div className="flex items-center justify-between mb-2">
//                   <h3 className="font-medium">DROP POINTS</h3>
//                   <ChevronDown className="w-4 h-4 text-muted-foreground" />
//                 </div>
//                 <div className="max-h-48 overflow-y-auto space-y-2">
//                   {droppingPoints.length > 0 ? (
//                     droppingPoints.map((point, idx) => (
//                       <div key={idx} className="border rounded p-2">
//                         {point.Time && (
//                           <div className="font-medium text-xs">{point.Time}</div>
//                         )}

//                          <div className=" text-xs text-pickup-text mt-1">{point.PointName}</div>
//                         <div className="font-semibold text-sm">
//                           {point.AreaName}
//                         </div>

//                         <div className="text-xs text-pickup-text">{point.Pincode}</div>
//                       </div>
//                     ))
//                   ) : (
//                     pickupDropPoints.length > 0 ? (
//                       pickupDropPoints.map((p, i) => (
//                         <div key={i} className="border rounded p-2">
//                           <div className="font-semibold text-sm">{p}</div>
//                         </div>
//                       ))
//                     ) : (
//                       <div className="text-gray-500 text-xs">
//                         No dropping points available
//                       </div>
//                     )
//                   )}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default BusListing;

/////////////////////////////////////////////////////////////
// import { useState } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";
// import BusLayout from "./BusLayout";

// interface Props {
//   busBookingDetailsId: number;
//   operatorId: number;
//   packageId: number;
//   busNumber: string;
//   busType: string;
//   departureTime: string;
//   arrivalTime: string;
//   duration: string;
//   finalSeatPrice: number;
//   seatsAvailable: number;
//   totalSeats: number;
//   amenities: string[];
//   isVia: boolean;
//   viaStops: number;
//   boardingPoints: string[];
//   selectedDate: Date;
// }

// const BusListing = (props: Props) => {
//   const {
//     busBookingDetailsId,
//     operatorId,
//     busNumber,
//     busType,
//     departureTime,
//     arrivalTime,
//     duration,
//     finalSeatPrice,
//     seatsAvailable,
//     totalSeats,
//     amenities,
//     isVia,
//     viaStops,
//     boardingPoints,
//     selectedDate,
//   } = props;

//   const [showSeats, setShowSeats] = useState(false);

//   return (
//     <div className="bg-white rounded-lg shadow p-4 border border-gray-200">

//       {/* ✅ Bus Header */}
//       <div className="flex justify-between items-center">
//         <div>
//           <h3 className="font-semibold text-lg">{busNumber}</h3>
//           <p className="text-gray-600 text-sm">{busType}</p>

//           {/* ✅ Show OperatorID & BusBookingDetailsId in UI */}
//           <p className="text-xs text-gray-500 mt-1">
//             Operator ID: <b>{operatorId}</b>
//           </p>
//           <p className="text-xs text-gray-500">
//             BookingDetails ID: <b>{busBookingDetailsId}</b>
//           </p>
//         </div>

//         <div className="text-right">
//           <p className="text-md font-semibold">₹ {finalSeatPrice}</p>
//           <p className="text-xs text-gray-500">{seatsAvailable} Seats Left</p>
//         </div>
//       </div>

//       {/* ✅ Time */}
//       <div className="flex justify-between mt-2 text-sm">
//         <span>{departureTime}</span>
//         <span>{duration}</span>
//         <span>{arrivalTime}</span>
//       </div>

//       {/* ✅ Amenities */}
//       <div className="text-xs text-gray-600 mt-2">
//         {amenities?.join(" • ") || "No amenities listed"}
//       </div>

//       {/* ✅ Via stops */}
//       {isVia && (
//         <p className="text-xs text-blue-600 mt-1">
//           Via {viaStops} stops
//         </p>
//       )}

//       {/* Toggle Seats */}
//       <button
//         onClick={() => setShowSeats(!showSeats)}
//         className="mt-3 flex items-center text-blue-600 text-sm font-medium hover:underline"
//       >
//         {showSeats ? (
//           <>
//             Hide Seats <ChevronUp className="ml-1" size={16} />
//           </>
//         ) : (
//           <>
//             View Seats <ChevronDown className="ml-1" size={16} />
//           </>
//         )}
//       </button>

//       {/* ✅ Show Seat Layout */}
//       {showSeats && (
//         <div className="border-t border-gray-300 mt-4 pt-4 bg-gray-50">
//           <BusLayout
//             selectedDate={selectedDate}
//             busNumber={busNumber}
//             duration={duration}
//             operatorId={operatorId}                 // ✅ correct operator id
//             busBookingId={busBookingDetailsId}      // ✅ pass booking id
//             finalSeatPrice={finalSeatPrice}
//             busBookingDetailsId={busBookingDetailsId} // ✅ same for seat save API
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default BusListing;
////////////////////////////////////////////////////////////////////

import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, User, FileText, MapPin } from "lucide-react";
import BusLayout from "./BusLayout";

interface Props {
  busBookingDetailsId: number;
  operatorId: number;
  packageId: number;
  busNumber: string;
  busType: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  finalSeatPrice: number;
  seatsAvailable: number;
  totalSeats: number;
  amenities: string[];
  isVia: boolean;
  viaStops: number;
  boardingPoints: string[];
  selectedDate: Date;

}

const BusListing = (props: Props) => {
  const {
    busBookingDetailsId,
    operatorId,
    busNumber,
    busType,
    departureTime,
    arrivalTime,
    duration,
    finalSeatPrice,
    seatsAvailable,
    totalSeats,
    amenities,
    isVia,
    viaStops,
    selectedDate,
    packageId
  } = props;
console.log("🎯 BusListing packageId:", packageId, "Type:", typeof packageId, "Selected Date:", selectedDate);

  const [showSeats, setShowSeats] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<
    "amenities" | "policies" | "pickupDropPoints" | null
  >(null);

  const toggleDropdown = (
    type: "amenities" | "policies" | "pickupDropPoints"
  ) => {
    setOpenDropdown((prev) => (prev === type ? null : type));
  };

  // Normalize API data
  const normalizePoints = (pts: any[]) => {
    if (!pts || !Array.isArray(pts)) return [];
    return pts.map((p) => {
      if (!p) return { PointName: "", AreaName: "", Pincode: "", Time: "" };
      if (typeof p === "string")
        return { PointName: p, AreaName: p, Pincode: "", Time: "" };
      return {
        PointName: p.PointName ?? p.pointName ?? p.name ?? "",
        AreaName: p.AreaName ?? p.areaName ?? p.area ?? "",
        Pincode: p.Pincode ?? p.pincode ?? "",
        Time: p.Time ?? p.time ?? "",
      };
    });
  };

  // Local state for API Boarding & Dropping points
  const [boardingPointsState, setBoardingPointsState] = useState<any[]>([]);
  const [droppingPointsState, setDroppingPointsState] = useState<any[]>([]);

  // Fetch boarding & dropping points
  useEffect(() => {
    if (!busBookingDetailsId) return;

    const fetchPoints = async () => {
      try {
        const [boardingRes, droppingRes] = await Promise.all([
          fetch(`https://api.tirupatipackagetours.com/api/bus/boardingPoints/${busBookingDetailsId}`),
          fetch(`https://api.tirupatipackagetours.com/api/bus/droppingPoints/${busBookingDetailsId}`)
        ]);

        const boardingData = await boardingRes.json();
        const droppingData = await droppingRes.json();

        setBoardingPointsState(
          boardingData?.boardingPoints ||
          boardingData?.data?.boardingPoints ||
          boardingData || []
        );

        setDroppingPointsState(
          droppingData?.droppingPoints ||
          droppingData?.data?.droppingPoints ||
          droppingData || []
        );
      } catch (err) {
        console.error("Error fetching boarding/dropping:", err);
      }
    };

    fetchPoints();
  }, [busBookingDetailsId]);

  const boarding = normalizePoints(boardingPointsState);
  const dropping = normalizePoints(droppingPointsState);


  // ✅ Compute separate fromDate and toDate
  const { fromDate, toDate } = (() => {
    try {
      const start = new Date(selectedDate);
      const end = new Date(start);

      // Package-based logic
      if (packageId === 3) {
        end.setDate(start.getDate() + 4);
      } else {
        end.setDate(start.getDate() + 1);
      }

      const fmt = (d: Date) =>
        d.toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
        });

      return {
        fromDate: fmt(start),
        toDate: fmt(end),
      };
    } catch {
      return { fromDate: "", toDate: "" };
    }
  })();
// ✅ Compute journey date range based on packageId


  // ✅ New state for live seat info
  const [remainingSeats, setRemainingSeats] = useState<number | null>(null);
  const [loadingSeats, setLoadingSeats] = useState(true);
  
  useEffect(() => {
    const fetchRemainingSeats = async () => {
      try {
        // ✅ Fix timezone shift: keep local date only
        function formatLocalDate(date: Date) {
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, "0");
          const day = String(date.getDate()).padStart(2, "0");
          return `${year}-${month}-${day}`;
        }

        const formattedDate = formatLocalDate(selectedDate);

        const res = await fetch(
          `https://api.tirupatipackagetours.com/api/bus/seatLayout?busId=${busBookingDetailsId}&journeyDate=${formattedDate}`
        );

        const data = await res.json();
        if (data?.success) {
          setRemainingSeats(data.remainingSeats ?? seatsAvailable);
        } else {
          setRemainingSeats(seatsAvailable);
        }
      } catch (error) {
        console.error("❌ Error fetching remaining seats:", error);
        setRemainingSeats(seatsAvailable);
      } finally {
        setLoadingSeats(false);
      }
    };

    fetchRemainingSeats();
  }, [busBookingDetailsId, selectedDate]);

  const hasSeats = (remainingSeats ?? seatsAvailable) > 0;

  return (
    <div className="relative bg-white border-2 border-border p-4 hover:shadow-lg transition-shadow max-w-full mb-4 rounded-3xl">

      {/* Top Row */}
      <div className="flex items-center justify-between gap-4 flex-wrap mt-2">
        <div className="flex-1 min-w-0">

          {/* <h3 className="text-[15px] font-bold text-[#020e68]">{busNumber}</h3> */}
          <h3 className="text-[15px] font-bold text-[#020e68]">Sanchar6T</h3>
          <p className="text-sm text-muted-foreground">
            {busType} ({totalSeats}+{totalSeats - seatsAvailable})
          </p>
          {/* <p className="text-[13px] text-gray-500 mt-1">{formattedDateRange}</p> */}


        </div>

        <div className="flex items-center gap-8 text-center">
          {/* Departure */}
          <div>
            <div className="text-2xl font-bold text-[#020e68]">{departureTime}</div>
            <div className="text-xs text-gray-500">
              {fromDate ? new Date(selectedDate).toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "2-digit",
              }) : ""}
            </div>
          </div>

          {/* Duration */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-px bg-border mb-1"></div>
            <div className="text-xs text-muted-foreground">{duration}</div>
          </div>

          {/* Arrival */}
        
          
       <div className="text-xs text-gray-500">
        <div className="text-2xl font-bold text-[#020e68]">{arrivalTime}</div>
  {toDate
    ? new Date(
        new Date(selectedDate).setDate(
          new Date(selectedDate).getDate() + (packageId === 3 ? 4 : 1)
        )
      ).toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "2-digit",
      })
    : ""}
</div>

        </div>


        <div className="text-right">
          <span className="text-3xl font-bold text-[#020e68]">₹ {finalSeatPrice}</span>
          <div className="text-sm font-semibold text-green-600">
            {/* Available Seats ({seatsAvailable}) */}
            {loadingSeats
              ? "Checking seats..."
              : `Available Seats (${remainingSeats ?? seatsAvailable})`}
          </div>
          <button
            onClick={() => setShowSeats(!showSeats)}
            className={`mt-2 text-sm font-bold px-4 py-1 rounded-full ${hasSeats ? "bg-[#ffcf06]" : "bg-gray-400"
              }`}
          >
            {showSeats ? "Hide Seats" : "View Seats"}
          </button>
        </div>
      </div>




      {/* Tabs */}
      <div className="flex items-center gap-4 mt-3 text-sm font-semibold text-[#020e68]">
        <div className="flex items-center cursor-pointer" onClick={() => toggleDropdown("amenities")}>
          <User className="w-4 h-4 mr-1" /> Amenities
          {openDropdown === "amenities" ? <ChevronUp /> : <ChevronDown />}
        </div>
        <div className="flex items-center cursor-pointer" onClick={() => toggleDropdown("policies")}>
          <FileText className="w-4 h-4 mr-1" /> Policies
          {openDropdown === "policies" ? <ChevronUp /> : <ChevronDown />}
        </div>
        <div className="flex items-center cursor-pointer" onClick={() => toggleDropdown("pickupDropPoints")}>
          <MapPin className="w-4 h-4 mr-1" /> Pickup & Drop Points
          {openDropdown === "pickupDropPoints" ? <ChevronUp /> : <ChevronDown />}
        </div>
      </div>

      {/* Pickup & Drop Points */}
      {openDropdown && openDropdown !== "pickupDropPoints" && (
        <div className="border-t border-gray-300 mt-2 pt-3 bg-gray-50 rounded-lg p-4 text-sm">

          {/* ✅ Amenities */}
          {openDropdown === "amenities" && (
            <div className="flex flex-wrap gap-2">
              {amenities?.length > 0 ? (
                amenities.map((a, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-[#3d85c6]/10 text-[#3d85c6] rounded text-xs"
                  >
                    {a}
                  </span>
                ))
              ) : (
                <span className="text-gray-500 text-xs">No amenities available</span>
              )}
            </div>
          )}

          {/* ✅ Policies */}
          {openDropdown === "policies" && (
            <div className="space-y-4 text-xs text-gray-700">

              <div>
                <h4 className="font-bold text-[#020e68] text-sm mb-2">Cancellation Policy</h4>
                <table className="w-full text-left border border-gray-200 text-[12px]">
                  <thead className="bg-[#f0f4ff]">
                    <tr>
                      <th className="p-2 border">Cancellation Time</th>
                      <th className="p-2 border">Charges</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="p-2 border">0–6 hrs</td><td className="p-2 border">100%</td></tr>
                    <tr><td className="p-2 border">6–24 hrs</td><td className="p-2 border">50%</td></tr>
                    <tr><td className="p-2 border">&gt;24 hrs</td><td className="p-2 border">10%</td></tr>
                  </tbody>
                </table>
              </div>

              <div>
                <h4 className="font-bold text-[#020e68] text-sm mb-2">Reschedule Policy</h4>
                <table className="w-full text-left border border-gray-200 text-[12px]">
                  <thead className="bg-[#f0f4ff]">
                    <tr><th className="p-2 border">Time</th><th className="p-2 border">Charges</th></tr>
                  </thead>
                  <tbody>
                    <tr><td className="p-2 border">Up to 6 hrs before</td><td className="p-2 border">20%</td></tr>
                    <tr><td className="p-2 border">&lt; 6 hrs</td><td className="p-2 border">NO RESCHEDULE</td></tr>
                  </tbody>
                </table>
              </div>

              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Charged per seat</li>
                <li>No refund after departure</li>
                <li>Excludes GST</li>
                <li>Kids above 5 need ticket</li>
              </ul>
            </div>
          )}

        </div>
      )}

      {openDropdown === "pickupDropPoints" && (
        <div className="text-xs text-gray-700 mt-3 space-y-4">

          {/* Boarding */}
          <div>
            <h3 className="font-medium mb-2">BOARDING POINTS</h3>
            <div className="max-h-48 overflow-y-auto space-y-2">
              {boarding.length > 0 ? (
                boarding.map((point, idx) => (
                  <div key={idx} className="border rounded p-2">
                    {point.Time && <div className="font-medium">{point.Time}</div>}
                    <div className="font-semibold">{point.AreaName || point.PointName}</div>
                    <div>{point.PointName}</div>
                    {point.Pincode && <div>{point.Pincode}</div>}
                  </div>
                ))
              ) : (
                <div>No boarding points available</div>
              )}
            </div>
          </div>

          {/* Dropping */}
          <div>
            <h3 className="font-medium mb-2">DROP POINTS</h3>
            <div className="max-h-48 overflow-y-auto space-y-2">
              {dropping.length > 0 ? (
                dropping.map((point, idx) => (
                  <div key={idx} className="border rounded p-2">
                    {point.Time && <div className="font-medium">{point.Time}</div>}
                    <div className="font-semibold">{point.AreaName || point.PointName}</div>
                    <div>{point.PointName}</div>
                    {point.Pincode && <div>{point.Pincode}</div>}
                  </div>
                ))
              ) : (
                <div>No dropping points available</div>
              )}
            </div>
          </div>
        </div>
      )}

      {showSeats && (
        <div className="border-t mt-4 pt-4 bg-gray-50">
          <BusLayout
            duration={duration}
            selectedDate={selectedDate}
            operatorId={operatorId}
            busNumber={busNumber}
            busBookingId={busBookingDetailsId}
            finalSeatPrice={finalSeatPrice}
            busBookingDetailsId={busBookingDetailsId}
          />
        </div>
      )}
    </div>
  );
};

export default BusListing;









