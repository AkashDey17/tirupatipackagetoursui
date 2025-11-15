// import { useState, useEffect } from "react";
// import { ChevronDown, ChevronUp, User, FileText, MapPin } from "lucide-react";
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
//   from: string;
// busIndex?: number;
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
//     selectedDate,
//     packageId,
//     from
//   } = props;
// console.log("🎯 BusListing packageId:", packageId, "Type:", typeof packageId, "Selected Date:", selectedDate);

// const serviceNumber = props.busIndex !== undefined
//   ? String(props.busIndex + 1).padStart(2, "0") // 01, 02, 03
//   : "01";


//   const [showSeats, setShowSeats] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<
//     "amenities" | "policies" | "pickupDropPoints" | null
//   >(null);

//   const toggleDropdown = (
//     type: "amenities" | "policies" | "pickupDropPoints"
//   ) => {
//     setOpenDropdown((prev) => (prev === type ? null : type));
//   };

//   // Normalize API data
//   // const normalizePoints = (pts: any[]) => {
//   //   if (!pts || !Array.isArray(pts)) return [];
//   //   return pts.map((p) => {
//   //     if (!p) return { PointName: "", AreaName: "", Pincode: "", Time: "" };
//   //     if (typeof p === "string")
//   //       return { PointName: p, AreaName: p, Pincode: "", Time: "" };
//   //     return {
//   //       PointName: p.PointName ?? p.pointName ?? p.name ?? "",
//   //       AreaName: p.AreaName ?? p.areaName ?? p.area ?? "",
//   //       Pincode: p.Pincode ?? p.pincode ?? "",
//   //       Time: p.Time ?? p.time ?? "",
//   //     };
//   //   });
//   // };
//   const normalizePoints = (pts: any[]) => {
//   if (!pts || !Array.isArray(pts)) return [];
//   return pts.map((p) => {
//     if (!p) return { PointName: "", AreaName: "", Pincode: "", Time: "" };
//     if (typeof p === "string")
//       return { PointName: p, AreaName: p, Pincode: "", Time: "" };

//     // ⭐ Convert "21:30" → "09:30 PM"
//     const convertToIST = (time: string) => {
//       if (!time) return time;
//       const [h, m] = time.split(":").map(Number);
//       if (isNaN(h) || isNaN(m)) return time;

//       const hour = h % 12 || 12;
//       const suffix = h < 12 ? "AM" : "PM";

//       return `${hour.toString().padStart(2, "0")}:${m
//         .toString()
//         .padStart(2, "0")} ${suffix}`;
//     };

//     return {
//       PointName: p.PointName ?? p.pointName ?? p.name ?? "",
//       AreaName: p.AreaName ?? p.areaName ?? p.area ?? "",
//       Pincode: p.Pincode ?? p.pincode ?? "",
//       Time: convertToIST(p.Time ?? p.time ?? ""), // ⭐ FIXED HERE
//     };
//   });
// };


//   // Local state for API Boarding & Dropping points
//   const [boardingPointsState, setBoardingPointsState] = useState<any[]>([]);
//   const [droppingPointsState, setDroppingPointsState] = useState<any[]>([]);

//   // Fetch boarding & dropping points
//   useEffect(() => {
//     if (!busBookingDetailsId) return;

//     const fetchPoints = async () => {
//       try {
//         const [boardingRes, droppingRes] = await Promise.all([
//           fetch(`https://api.tirupatipackagetours.com/api/bus/boardingPoints/${busBookingDetailsId}`),
//           fetch(`https://api.tirupatipackagetours.com/api/bus/droppingPoints/${busBookingDetailsId}`)
//         ]);

//         const boardingData = await boardingRes.json();
//         const droppingData = await droppingRes.json();

//         setBoardingPointsState(
//           boardingData?.boardingPoints ||
//           boardingData?.data?.boardingPoints ||
//           boardingData || []
//         );

//         setDroppingPointsState(
//           droppingData?.droppingPoints ||
//           droppingData?.data?.droppingPoints ||
//           droppingData || []
//         );
//       } catch (err) {
//         console.error("Error fetching boarding/dropping:", err);
//       }
//     };

//     fetchPoints();
//   }, [busBookingDetailsId]);

//   const boarding = normalizePoints(boardingPointsState);
//   const dropping = normalizePoints(droppingPointsState);


//   // ✅ Compute separate fromDate and toDate
//   const { fromDate, toDate } = (() => {
//     try {
//       const start = new Date(selectedDate);
//       const end = new Date(start);

//       // Package-based logic
//       if (packageId === 3) {
//         end.setDate(start.getDate() + 2);
//       } else {
//         end.setDate(start.getDate() + 1);
//       }

//       const fmt = (d: Date) =>
//         d.toLocaleDateString("en-IN", {
//           day: "2-digit",
//           month: "short",
//         });

//       return {
//         fromDate: fmt(start),
//         toDate: fmt(end),
//       };
//     } catch {
//       return { fromDate: "", toDate: "" };
//     }
//   })();
// // ✅ Compute journey date range based on packageId


//   // ✅ New state for live seat info
//   const [remainingSeats, setRemainingSeats] = useState<number | null>(null);
//   const [loadingSeats, setLoadingSeats] = useState(true);
  
//   useEffect(() => {
//     const fetchRemainingSeats = async () => {
//       try {
//         // ✅ Fix timezone shift: keep local date only
//         function formatLocalDate(date: Date) {
//           const year = date.getFullYear();
//           const month = String(date.getMonth() + 1).padStart(2, "0");
//           const day = String(date.getDate()).padStart(2, "0");
//           return `${year}-${month}-${day}`;
//         }

//         const formattedDate = formatLocalDate(selectedDate);

//         const res = await fetch(
//           `https://api.tirupatipackagetours.com/api/bus/seatLayout?busId=${busBookingDetailsId}&journeyDate=${formattedDate}`
//         );

//         const data = await res.json();
//         if (data?.success) {
//           setRemainingSeats(data.remainingSeats ?? seatsAvailable);
//         } else {
//           setRemainingSeats(seatsAvailable);
//         }
//       } catch (error) {
//         console.error("❌ Error fetching remaining seats:", error);
//         setRemainingSeats(seatsAvailable);
//       } finally {
//         setLoadingSeats(false);
//       }
//     };

//     fetchRemainingSeats();
//   }, [busBookingDetailsId, selectedDate]);

//   const hasSeats = (remainingSeats ?? seatsAvailable) > 0;

//   return (
//     <div className="relative bg-white border-2 border-border p-4 hover:shadow-lg transition-shadow max-w-full mb-4 rounded-3xl">

//       {/* Top Row */}
//       <div className="flex items-center justify-between gap-4 flex-wrap mt-2">
//         <div className="flex-1 min-w-0">

//           {/* <h3 className="text-[15px] font-bold text-[#020e68]">{busNumber}</h3> */}
//           <h3 className="text-[15px] font-bold text-[#020e68]">SANCHAR6T</h3>
//           <p className="text-sm text-muted-foreground">
//             {busType} ({totalSeats}+{totalSeats - seatsAvailable})
//           </p>
//           {/* <p className="text-[13px] text-gray-500 mt-1">{formattedDateRange}</p> */}


//         </div>

//         <div className="flex items-center gap-8 text-center">
//           {/* Departure */}
//           <div>
//             <div className="text-2xl font-bold text-[#020e68]">{departureTime}</div>
//             <div className="text-xs text-gray-500">
//               {fromDate ? new Date(selectedDate).toLocaleDateString("en-US", {
//                 weekday: "short",
//                 month: "short",
//                 day: "2-digit",
//               }) : ""}
//             </div>
//           </div>

//           {/* Duration */}
//           <div className="flex flex-col items-center">
//             <div className="w-20 h-px bg-border mb-1"></div>
//             <div className="text-xs text-muted-foreground">{duration}</div>
//           </div>

//           {/* Arrival */}
        
          
//        <div className="text-xs text-gray-500">
//         <div className="text-2xl font-bold text-[#020e68]">{arrivalTime}</div>
//   {toDate
//     ? new Date(
//         new Date(selectedDate).setDate(
//           new Date(selectedDate).getDate() + (packageId === 3 ? 2 : 1)
//         )
//       ).toLocaleDateString("en-US", {
//         weekday: "short",
//         month: "short",
//         day: "2-digit",
//       })
//     : ""}
// </div>

//         </div>


//         <div className="text-right">
//           <span className="text-3xl font-bold text-[#020e68]">₹ {finalSeatPrice}</span>
//           <div className="text-sm font-semibold text-green-600">
//             {/* Available Seats ({seatsAvailable}) */}
//             {loadingSeats
//               ? "Checking seats..."
//               : `Available Seats (${remainingSeats ?? seatsAvailable})`}
//           </div>
//           <button
//             onClick={() => setShowSeats(!showSeats)}
//             className={`mt-2 text-sm font-bold px-4 py-1 rounded-full ${hasSeats ? "bg-[#ffcf06]" : "bg-gray-400"
//               }`}
//           >
//             {showSeats ? "Hide Seats" : "View Seats"}
//           </button>
//         </div>
//       </div>




//       {/* Tabs */}
//       <div className="flex items-center gap-4 mt-3 text-sm font-semibold text-[#020e68]">
//         <div className="flex items-center cursor-pointer" onClick={() => toggleDropdown("amenities")}>
//           <User className="w-4 h-4 mr-1" /> Amenities
//           {openDropdown === "amenities" ? <ChevronUp /> : <ChevronDown />}
//         </div>
//         <div className="flex items-center cursor-pointer" onClick={() => toggleDropdown("policies")}>
//           <FileText className="w-4 h-4 mr-1" /> Policies
//           {openDropdown === "policies" ? <ChevronUp /> : <ChevronDown />}
//         </div>
//         <div className="flex items-center cursor-pointer" onClick={() => toggleDropdown("pickupDropPoints")}>
//           <MapPin className="w-4 h-4 mr-1" /> Pickup & Drop Points
//           {openDropdown === "pickupDropPoints" ? <ChevronUp /> : <ChevronDown />}
//         </div>
//       </div>

//       {/* Pickup & Drop Points */}
//       {openDropdown && openDropdown !== "pickupDropPoints" && (
//         <div className="border-t border-gray-300 mt-2 pt-3 bg-gray-50 rounded-lg p-4 text-sm">

//           {/* ✅ Amenities */}
//           {openDropdown === "amenities" && (
//             <div className="flex flex-wrap gap-2">
//               {amenities?.length > 0 ? (
//                 amenities.map((a, idx) => (
//                   <span
//                     key={idx}
//                     className="px-2 py-1 bg-[#3d85c6]/10 text-[#3d85c6] rounded text-xs"
//                   >
//                     {a}
//                   </span>
//                 ))
//               ) : (
//                 <span className="text-gray-500 text-xs">No amenities available</span>
//               )}
//             </div>
//           )}

//           {/* ✅ Policies */}
//           {openDropdown === "policies" && (
//             <div className="space-y-4 text-xs text-gray-700">

//               <div>
//                 <h4 className="font-bold text-[#020e68] text-sm mb-2">Cancellation Policy</h4>
//                 <table className="w-full text-left border border-gray-200 text-[12px]">
//                   <thead className="bg-[#f0f4ff]">
//                     <tr>
//                       <th className="p-2 border">Cancellation Time</th>
//                       <th className="p-2 border">Charges</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr><td className="p-2 border">0–6 hrs</td><td className="p-2 border">100%</td></tr>
//                     <tr><td className="p-2 border">6–24 hrs</td><td className="p-2 border">50%</td></tr>
//                     <tr><td className="p-2 border">&gt;24 hrs</td><td className="p-2 border">10%</td></tr>
//                   </tbody>
//                 </table>
//               </div>

//               <div>
//                 <h4 className="font-bold text-[#020e68] text-sm mb-2">Reschedule Policy</h4>
//                 <table className="w-full text-left border border-gray-200 text-[12px]">
//                   <thead className="bg-[#f0f4ff]">
//                     <tr><th className="p-2 border">Time</th><th className="p-2 border">Charges</th></tr>
//                   </thead>
//                   <tbody>
//                     <tr><td className="p-2 border">Up to 6 hrs before</td><td className="p-2 border">20%</td></tr>
//                     <tr><td className="p-2 border">&lt; 6 hrs</td><td className="p-2 border">NO RESCHEDULE</td></tr>
//                   </tbody>
//                 </table>
//               </div>

//               <ul className="list-disc list-inside space-y-1 mt-2">
//                 <li>Charged per seat</li>
//                 <li>No refund after departure</li>
//                 <li>Excludes GST</li>
//                 <li>Kids above 5 need ticket</li>
//               </ul>
//             </div>
//           )}

//         </div>
//       )}

//       {openDropdown === "pickupDropPoints" && (
//         <div className="text-xs text-gray-700 mt-3 space-y-4">

//           {/* Boarding */}
//           <div>
//             <h3 className="font-medium mb-2">BOARDING POINTS</h3>
//             <div className="max-h-48 overflow-y-auto space-y-2">
//               {boarding.length > 0 ? (
//                 boarding.map((point, idx) => (
//                   <div key={idx} className="border rounded p-2">
//                     {point.Time && <div className="font-medium">{point.Time}</div>}
//                     <div className="font-semibold">{point.AreaName || point.PointName}</div>
//                     <div>{point.PointName}</div>
//                     {point.Pincode && <div>{point.Pincode}</div>}
//                   </div>
//                 ))
//               ) : (
//                 <div>No boarding points available</div>
//               )}
//             </div>
//           </div>

//           {/* Dropping */}
//           <div>
//             <h3 className="font-medium mb-2">DROP POINTS</h3>
//             <div className="max-h-48 overflow-y-auto space-y-2">
//               {dropping.length > 0 ? (
//                 dropping.map((point, idx) => (
//                   <div key={idx} className="border rounded p-2">
//                     {point.Time && <div className="font-medium">{point.Time}</div>}
//                     <div className="font-semibold">{point.AreaName || point.PointName}</div>
//                     <div>{point.PointName}</div>
//                     {point.Pincode && <div>{point.Pincode}</div>}
//                   </div>
//                 ))
//               ) : (
//                 <div>No dropping points available</div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       {showSeats && (
//         <div className="border-t mt-4 pt-4 bg-gray-50">
//           <BusLayout
//             duration={duration}
//             selectedDate={selectedDate}
//             operatorId={operatorId}
//             busNumber={busNumber}
//             busBookingId={busBookingDetailsId}
//             finalSeatPrice={finalSeatPrice}
//             busBookingDetailsId={busBookingDetailsId}
//              packageId={ packageId}
//               from={from}
//               serviceNumber={serviceNumber}
//              busIndex={props.busIndex}
//              fromDate={fromDate}
//   toDate={toDate}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default BusListing;

// if boarding and dropping points and prices are not coming please remove the code below and uncomment and test it

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
  from: string;
  busIndex?: number;
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
    packageId,
    from
  } = props;

  const serviceNumber = props.busIndex !== undefined
    ? String(props.busIndex + 1).padStart(2, "0")
    : "01";

  const [showSeats, setShowSeats] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<
    "amenities" | "policies" | "pickupDropPoints" | null
  >(null);

  const toggleDropdown = (type: "amenities" | "policies" | "pickupDropPoints") => {
    setOpenDropdown((prev) => (prev === type ? null : type));
  };

  // ⭐ NEW STATE FOR DYNAMIC PRICE
  const [dynamicPrice, setDynamicPrice] = useState<number>(finalSeatPrice);

  const normalizePoints = (pts: any[]) => {
    if (!pts || !Array.isArray(pts)) return [];
    return pts.map((p) => {
      if (!p) return { PointName: "", AreaName: "", Pincode: "", Time: "" };
      if (typeof p === "string")
        return { PointName: p, AreaName: p, Pincode: "", Time: "" };

      const convertToIST = (time: string) => {
        if (!time) return time;
        const [h, m] = time.split(":").map(Number);
        if (isNaN(h) || isNaN(m)) return time;

        const hour = h % 12 || 12;
        const suffix = h < 12 ? "AM" : "PM";

        return `${hour.toString().padStart(2, "0")}:${m
          .toString()
          .padStart(2, "0")} ${suffix}`;
      };

      return {
        PointName: p.PointName ?? p.pointName ?? p.name ?? "",
        AreaName: p.AreaName ?? p.areaName ?? p.area ?? "",
        Pincode: p.Pincode ?? p.pincode ?? "",
        Time: convertToIST(p.Time ?? p.time ?? "")
      };
    });
  };

  // Boarding & Dropping points
  const [boardingPointsState, setBoardingPointsState] = useState<any[]>([]);
  const [droppingPointsState, setDroppingPointsState] = useState<any[]>([]);
const mainBusType = (() => {
  if (!busType) return "";

  const parts = busType.split(",");

  // Return second part if exists, else fallback to whole busType
  return parts[1]?.trim() || busType;
})();
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

  // DATE RANGE LOGIC
  const { fromDate, toDate } = (() => {
    try {
      const start = new Date(selectedDate);
      const end = new Date(start);

      if (packageId === 3) {
        end.setDate(start.getDate() + 2);
      } else {
        end.setDate(start.getDate() + 1);
      }

      const fmt = (d: Date) =>
        d.toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short"
        });

      return { fromDate: fmt(start), toDate: fmt(end) };
    } catch {
      return { fromDate: "", toDate: "" };
    }
  })();

  // ⭐ FETCH REMAINING SEATS + DYNAMIC PRICE
  const [remainingSeats, setRemainingSeats] = useState<number | null>(null);
  const [loadingSeats, setLoadingSeats] = useState(true);

  useEffect(() => {
    const fetchRemainingSeats = async () => {
      try {
        function formatLocalDate(date: Date) {
          const y = date.getFullYear();
          const m = String(date.getMonth() + 1).padStart(2, "0");
          const d = String(date.getDate()).padStart(2, "0");
          return `${y}-${m}-${d}`;
        }

        const formattedDate = formatLocalDate(selectedDate);

        const res = await fetch(
          `https://api.tirupatipackagetours.com/api/bus/seatLayout?busId=${busBookingDetailsId}&journeyDate=${formattedDate}`
        );

        const data = await res.json();

        if (data?.success) {
          setRemainingSeats(data.remainingSeats ?? seatsAvailable);

          // ⭐ APPLY PRICE LOGIC (Fri = 5, Sat = 6)
          const day = selectedDate.getDay(); // 0-6
          const isWeekend = day === 5 || day === 6;

          const updatedPrice = isWeekend
            ? data.price?.weekend ?? finalSeatPrice
            : data.price?.weekday ?? finalSeatPrice;

          setDynamicPrice(updatedPrice);
        } else {
          setRemainingSeats(seatsAvailable);
          setDynamicPrice(finalSeatPrice);
        }
      } catch (error) {
        console.error("Error fetching remaining seats:", error);
        setRemainingSeats(seatsAvailable);
        setDynamicPrice(finalSeatPrice);
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
          <h3 className="text-[15px] font-bold text-[#020e68]">SANCHAR6T</h3>
          <p className="text-sm text-muted-foreground">
            {busType} ({totalSeats}+{totalSeats - seatsAvailable})
          </p>
        </div>

        <div className="flex items-center gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-[#020e68]">{departureTime}</div>
            <div className="text-xs text-gray-500">
              {fromDate
                ? new Date(selectedDate).toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "2-digit"
                  })
                : ""}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-20 h-px bg-border mb-1"></div>
            <div className="text-xs text-muted-foreground">{duration}</div>
          </div>

          <div className="text-xs text-gray-500">
            <div className="text-2xl font-bold text-[#020e68]">{arrivalTime}</div>
            {toDate
              ? new Date(
                  new Date(selectedDate).setDate(
                    new Date(selectedDate).getDate() +
                      (packageId === 3 ? 2 : 1)
                  )
                ).toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "2-digit"
                })
              : ""}
          </div>
        </div>

        <div className="text-right">
          {/* ⭐ SHOWING DYNAMIC PRICE */}
          <span className="text-3xl font-bold text-[#020e68]">₹ {dynamicPrice}</span>

          <div className="text-sm font-semibold text-green-600">
            {loadingSeats
              ? "Checking seats..."
              : `Available Seats (${remainingSeats ?? seatsAvailable})`}
          </div>

          <button
            onClick={() => setShowSeats(!showSeats)}
            className={`mt-2 text-sm font-bold px-4 py-1 rounded-full ${
              hasSeats ? "bg-[#ffcf06]" : "bg-gray-400"
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

      {/* CONTENT FOR DROPDOWNS */}
      {openDropdown && openDropdown !== "pickupDropPoints" && (
        <div className="border-t border-gray-300 mt-2 pt-3 bg-gray-50 rounded-lg p-4 text-sm">
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
<div className="relative group mt-3">

  {/* Small Blue Info Bar */}
  <div className="p-2 rounded-md border border-[#79b4e2] bg-[#e8f4ff] text-[#014f86] text-xs flex items-center gap-2 cursor-pointer">
    <div className="w-4 h-4 bg-[#3d85c6] text-white rounded-full flex items-center justify-center text-[10px] font-bold">
      i
    </div>
    <span>
      This is a Free Darshan Service. Darshan will be as per TTD Rules.
    </span>
  </div>

  {/* White Hover Box */}
 {/* White Hover Box */}
{/* White Hover Box */}
<div
  className="
    absolute 
    left-0 
    w-[100%] 
    bg-white 
    border 
    border-gray-300 
    rounded-md 
    p-3 
    mt-2 
    text-[12px] 
    text-gray-700 
    shadow-md
    opacity-0 
    invisible 
    group-hover:opacity-100 
    group-hover:visible
    transition-all 
    duration-200 
    z-50
  "
>
  This is a Free Darshan Service. Darshan will be as per TTD Rules.
  (ORIGINAL AADHAR CARD COMPULSORY)
  Fare includes Bangalore to Tirupati and back by {mainBusType},
  Rooms for morning fresh-up, Padmavathi Temple visit, Breakfast,
  Uphill Transportation by RTC bus and Lunch. Arrival timing at
  Bangalore is tentative depending upon Darshan.
</div>

</div>
      {openDropdown === "pickupDropPoints" && (
        <div className="text-xs text-gray-700 mt-3 space-y-4">
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
            finalSeatPrice={dynamicPrice}
            busBookingDetailsId={busBookingDetailsId}
            packageId={packageId}
            from={from}
            serviceNumber={serviceNumber}
            busIndex={props.busIndex}
            fromDate={fromDate}
            toDate={toDate}
          />
        </div>
      )}
    </div>
  );
};

export default BusListing;








