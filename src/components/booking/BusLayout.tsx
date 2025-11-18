// import React, { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { ChevronDown, ChevronUp, AlertTriangle } from "lucide-react";
// import { useNavigate, useLocation } from "react-router-dom";
// import seatImg from "@/assets/seat-img.jpeg";
// import { toast } from "react-hot-toast";

// interface Seat {
//   id: string;
//   price: number;
//   isAvailable: boolean;
//   isSelected: boolean;
//   type: "seater" | "sleeper";
// }

// interface BoardingDroppingPoint {
//   PointName: string;
//   AreaName: string;
//   Pincode: string;
//   latitude: number;
//   longitude: number;
//   Time: string;
// }

// interface BusLayoutProps {
//   duration: string;
//   selectedDate?: Date;
//   operator?: string;
//   busNumber?: string;
//   busBookingId?: string;
//   busBookingDetailsId?: string;
//   operatorId?: number;
//   packageId: number;
//   from?: string;
// }

// const BusLayout: React.FC<BusLayoutProps> = ({
//   duration,
//   selectedDate,
//   operator,
//   busNumber,
//   busBookingId,
//   busBookingDetailsId,
//   operatorId,
//   packageId,
//   from,
// }) => {
//   const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
//   const [hoveredSeat, setHoveredSeat] = useState<{ seat: Seat; x: number; y: number } | null>(null);
//   const [seatsVisible, setSeatsVisible] = useState(true);
//   const [selectedBoardingPoint, setSelectedBoardingPoint] = useState<number | null>(null);
//   const [selectedDropPoint, setSelectedDropPoint] = useState<number | null>(null);
//   const [bookedSeats, setBookedSeats] = useState<string[]>([]);
//   const [remainingSeats, setRemainingSeats] = useState<number | null>(null);
//   const [basePrice, setBasePrice] = useState<{ weekday: number; weekend: number }>({ weekday: 0, weekend: 0 });
//   const [boardingPoints, setBoardingPoints] = useState<BoardingDroppingPoint[]>([]);
//   const [droppingPoints, setDroppingPoints] = useState<BoardingDroppingPoint[]>([]);
//   const [localOperatorId, setLocalOperatorId] = useState<number | null>(null);
//   const [femaleSeats, setFemaleSeats] = useState<string[]>([]);
//   const [showBoardingDropdown, setShowBoardingDropdown] = useState(true);
// const [showDroppingDropdown, setShowDroppingDropdown] = useState(true);


//   const navigate = useNavigate();
//   const location = useLocation();
//   const { finalSeatPrice } = location.state || {};
//   const queryParams = new URLSearchParams(location.search);
//   const operatorIdFromUrl = queryParams.get("operatorId");

//   // ✅ Operator ID logic
//   useEffect(() => {
//     if (operatorIdFromUrl) setLocalOperatorId(Number(operatorIdFromUrl));
//     if (location.state?.operatorId) setLocalOperatorId(location.state.operatorId);
//   }, [operatorIdFromUrl, location.state]);

//   // ✅ Fetch Seat Layout
//   useEffect(() => {
//     if (!busBookingId || !selectedDate) return;

//     const fetchSeatLayout = async () => {
//       try {
//         const journeyDate =
//           selectedDate instanceof Date ? selectedDate.toLocaleDateString("en-CA") : selectedDate;

//         const res = await fetch(
//           `https://api.tirupatipackagetours.com/api/bus/seatLayout?busId=${busBookingId}&journeyDate=${journeyDate}`
//         );
//         const data = await res.json();

//         if (data.success) {
//           setBasePrice({
//             weekday: finalSeatPrice?.weekday ?? Number(data.price.weekday || data.price.default),
//             weekend: finalSeatPrice?.weekend ?? Number(data.price.weekend || data.price.default),
//           });

//           let allBlockedSeats = [...(data.bookedSeats || []), ...(data.lockedSeats || [])];
//           setBookedSeats([...new Set(allBlockedSeats)]);

//           if (data.femaleSeatNo) {
//             const parsed = data.femaleSeatNo.split(",").map((s: string) => s.trim());
//             setFemaleSeats(parsed);
//           }

//           if (data.remainingSeats !== undefined) {
//             setRemainingSeats(data.remainingSeats);
//           }
//         }
//       } catch (err) {
//         console.error("❌ Error fetching seat layout:", err);
//       }
//     };

//     fetchSeatLayout();
//   }, [busBookingId, selectedDate, finalSeatPrice]);

//   // ✅ Fetch Boarding / Dropping Points
//   useEffect(() => {
//     if (!busBookingId) return;

//     const fetchPoints = async () => {
//       try {
//         const [boardingRes, droppingRes] = await Promise.all([
//           fetch(`https://api.tirupatipackagetours.com/api/bus/boardingPoints/${busBookingId}`),
//           fetch(`https://api.tirupatipackagetours.com/api/bus/droppingPoints/${busBookingId}`),
//         ]);

//         const boardingData = await boardingRes.json();
//         const droppingData = await droppingRes.json();

//         setBoardingPoints(boardingData?.boardingPoints || []);
//         setDroppingPoints(droppingData?.droppingPoints || []);
//       } catch (err) {
//         console.error("❌ Points fetch error:", err);
//       }
//     };

//     fetchPoints();
//   }, [busBookingId]);

//   const getSeatPrice = (date: Date | string) => {
//     const d = typeof date === "string" ? new Date(date) : date;
//     const day = d.getDay();
//     return day === 0 || day === 6 ? basePrice.weekend : basePrice.weekday;
//   };

//   const [lowerBerthSeats, setLowerBerthSeats] = useState<Seat[]>([]);
//   const [upperBerthSeats, setUpperBerthSeats] = useState<Seat[]>([]);

//   // ✅ Build seat layout
//   useEffect(() => {
//     if (!selectedDate) return;
//     const price = getSeatPrice(selectedDate);
//     const createSeats = (prefix: string): Seat[] =>
//       Array.from({ length: 18 }, (_, i) => ({
//         id: `${prefix}${i + 1}`,
//         price,
//         isAvailable: !bookedSeats.includes(`${prefix}${i + 1}`),
//         isSelected: false,
//         type: i < 12 ? "seater" : "sleeper",
//       }));

//     setLowerBerthSeats(createSeats("L"));
//     setUpperBerthSeats(createSeats("U"));
//   }, [basePrice, selectedDate, bookedSeats]);

//   const allSeats = [...lowerBerthSeats, ...upperBerthSeats];

//   // ✅ Handle Seat Click
//   const handleSeatClick = async (seatId: string) => {
//     const seat = allSeats.find((s) => s.id === seatId);
//     if (!seat?.isAvailable) return;

//     const sessionId = localStorage.getItem("sessionId") || `USER-${Date.now()}`;
//     localStorage.setItem("sessionId", sessionId);

//     const journeyDate1 =
//       selectedDate instanceof Date ? selectedDate.toISOString().split("T")[0] : selectedDate;

//     if (selectedSeats.includes(seatId)) {
//       // Deselect seat
//       setSelectedSeats((prev) => prev.filter((id) => id !== seatId));
//       await fetch("https://api.tirupatipackagetours.com/api/seat/unlock", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ busBookingId, seatNo: seatId, sessionId, journeyDate1 }),
//       }).catch(console.error);
//     } else {
//       // Select seat
//       setSelectedSeats((prev) => [...prev, seatId]);

//       if (femaleSeats.includes(seatId)) {
//         toast.custom(
//           (t) => (
//             <div
//               className={`flex items-center gap-3 p-3 rounded-lg shadow-md text-sm border transition-all duration-300 ${
//                 t.visible ? "opacity-100" : "opacity-0"
//               } bg-pink-50 border-pink-200 text-pink-800`}
//             >
//               <AlertTriangle className="w-5 h-5 text-pink-600" />
//               <div>
//                 <p className="font-semibold">Female Seat Selected</p>
//                 <p className="text-xs">
//                   Only female passengers or their co-passengers should book this seat.
//                 </p>
//               </div>
//             </div>
//           ),
//           { duration: 4000 }
//         );
//       }

//       await fetch("https://api.tirupatipackagetours.com/api/seat/lock", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ busBookingId, seatNo: seatId, sessionId, journeyDate1 }),
//       }).catch(console.error);
//     }
//   };

//   const calculateTotalPrice = () =>
//     selectedSeats.reduce(
//       (total, id) => total + (allSeats.find((s) => s.id === id)?.price || 0),
//       0
//     );

//   // ✅ Continue to next page
//   const handleContinue = () => {
//     if (!selectedDate) return;

//     const dateOnly =
//       selectedDate instanceof Date ? selectedDate.toLocaleDateString("en-CA") : selectedDate;

//     const selectedFemaleSeats = selectedSeats.filter((id) => femaleSeats.includes(id));

//     const bookingData = {
//       busId: busBookingId,
//       selectedSeats,
//       totalPrice: calculateTotalPrice(),
//       boardingPoint: boardingPoints[selectedBoardingPoint!],
//       droppingPoint: droppingPoints[selectedDropPoint!],
//       duration,
//       busBookingDetailsId,
//       operatorId: operatorId ?? localOperatorId,
//       selectedDate: dateOnly,
//       packageId,
//       from,
//       femaleSeats: selectedFemaleSeats, // ✅ simpler & clear
//     };

//     localStorage.setItem("bookingData", JSON.stringify(bookingData));
//     setTimeout(() => navigate("/booking-details", { state: bookingData }), 100);
//   };

//   const isFormComplete =
//     selectedSeats.length > 0 && selectedBoardingPoint !== null && selectedDropPoint !== null;

//   const SeatComponent = ({ seat }: { seat: Seat }) => {
//     const isSelected = selectedSeats.includes(seat.id);
//     const isFemaleSeat = femaleSeats.includes(seat.id);
//     const isBooked = !seat.isAvailable;

//     const base =
//       "w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-md flex items-center justify-center transition-all duration-200";
//     const seatClasses = `${base} ${
//       isBooked
//         ? "opacity-40 grayscale cursor-not-allowed"
//         : "cursor-pointer hover:scale-105"
//     } ${isSelected && !isFemaleSeat ? "bg-blue-200 border-2 border-blue-400" : ""} ${
//       !isSelected && isFemaleSeat ? "border-2 border-pink-400 bg-pink-100" : ""
//     } ${
//       isSelected && isFemaleSeat ? "bg-pink-600 border-2 border-pink-700 text-white" : ""
//     }`;

//     return (
//       <div className="relative group" onClick={() => seat.isAvailable && handleSeatClick(seat.id)}>
//         <img src={seatImg} alt={seat.id} className={seatClasses} />
//         <div className="text-[10px] sm:text-[11px] text-price-text mt-1 text-center">
//           ₹{seat.price}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <div className="max-w-7xl mx-auto p-3 sm:p-4">
//         {operatorId && (
//           <p className="text-xs text-blue-500 font-semibold mb-1">
//             Operator ID: {operatorId}
//           </p>
//         )}
//         {busBookingDetailsId && (
//           <p className="text-sm font-semibold text-purple-600 mb-1">
//             Booking Details ID: {busBookingDetailsId}
//           </p>
//         )}
//         <h2 className="text-lg font-bold mb-4 text-[#3d85c6]">
//           Trip Duration: {duration}
//         </h2>

//         {remainingSeats !== null && (
//           <div className="text-md font-semibold text-green-600 mb-4">
//             Remaining Seats: {remainingSeats}
//           </div>
//         )}

//         {/* Responsive grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4">
//           {/* ✅ Select Seats */}
//           <div>
//             <h2 className="text-lg font-semibold mb-4">Select Seats</h2>
//             {seatsVisible && (
//               <div className="space-y-6">
//                 <div className="flex flex-row gap-4 justify-center items-start flex-nowrap">

//                   {/* LOWER BERTH */}
//                   <div className="flex flex-col gap-2 relative w-[180px]">
//                     <h3 className="text-sm font-medium text-muted-foreground">
//                       LOWER BERTH ({lowerBerthSeats.length})
//                     </h3>
//                     <div className="border rounded-lg p-2 relative min-h-[480px]">
//                       {/* Wheel at the top */}
//                       <div className="flex justify-end mb-2">
//                         <img
//                           src="https://www.makemytrip.com/bus-mmt-next/_next/image?url=%2Fbus-mmt-next%2FsteeringWheel.png&w=48&q=75"
//                           alt="Wheel"
//                           className="w-6 h-6"
//                         />
//                       </div>
//                       <div className="flex gap-1 overflow-x-auto">
//                         <div className="flex flex-col gap-1">
//                           {lowerBerthSeats.slice(0, 6).map((seat) => (
//                             <SeatComponent key={seat.id} seat={seat} />
//                           ))}
//                         </div>
//                         <div className="w-8 flex items-center justify-center">
//                           <div className="w-3 h-full bg-red-500 flex items-center justify-center">
//                             <span className="absolute text-white text-[8px] rotate-90 whitespace-nowrap">
//                               GANGWAY
//                             </span>
//                           </div>
//                         </div>
//                         <div className="grid grid-cols-2 gap-1">
//                           {lowerBerthSeats.slice(6, 18).map((seat) => (
//                             <SeatComponent key={seat.id} seat={seat} />
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* UPPER BERTH */}
//                   <div className="flex flex-col gap-2 relative w-[180px]">
//                     <h3 className="text-sm font-medium text-muted-foreground">
//                       UPPER BERTH ({upperBerthSeats.length})
//                     </h3>
//                     <div className="border rounded-lg p-2 min-h-[480px]">
//                       {/* Spacer to align with lower berth wheel */}
//                       <div className="h-8"></div>
//                       <div className="flex gap-1 overflow-x-auto">
//                         <div className="flex flex-col gap-1">
//                           {upperBerthSeats.slice(0, 6).map((seat) => (
//                             <SeatComponent key={seat.id} seat={seat} />
//                           ))}
//                         </div>
//                         <div className="w-8 flex items-center justify-center">
//                           <div className="w-3 h-full bg-red-500 flex items-center justify-center">
//                             <span className="absolute text-white text-[8px] rotate-90 whitespace-nowrap">
//                               GANGWAY
//                             </span>
//                           </div>
//                         </div>
//                         <div className="grid grid-cols-2 gap-1">
//                           {upperBerthSeats.slice(6, 18).map((seat) => (
//                             <SeatComponent key={seat.id} seat={seat} />
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                 </div>
//               </div>
//             )}
//           </div>

//           {/* ✅ Select Points */}
//           <div>
//             <div className="flex items-center flex-wrap gap-4 text-xs font-medium mb-4">
//               <div className="flex items-center gap-1">
//                 <div className="w-4 h-4 border bg-white-200"></div>
//                 <span>Available</span>
//               </div>
//               <div className="flex items-center gap-1">
//                 <div className="w-4 h-4 bg-blue-500"></div>
//                 <span>Selected</span>
//               </div>
//               <div className="flex items-center gap-1">
//                 <div className="w-4 h-4 bg-gray-600"></div>
//                 <span>Booked</span>
//               </div>
//               <div className="flex items-center gap-1">
//                 <div className="w-4 h-4 bg-pink-500"></div>
//                 <span>Ladies (L)</span>
//               </div>
//               <div className="flex items-center gap-1">
//                 <div className="w-4 h-4 border border-pink-500"></div>
//                 <span>Available (L)</span>
//               </div>
//             </div>

//             <h2 className="text-lg font-semibold mb-4">
//               Select Pickup & Drop Points
//             </h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             
//               <div className="space-y-2 text-sm">
//                 <div className="flex items-center justify-between mb-2">
//                   <h3 className="font-medium">BOARDING POINTS</h3>
//                   <ChevronUp className="w-4 h-4 text-muted-foreground" />
//                 </div>
//                 <div className="max-h-64 overflow-y-auto space-y-2">
//                   {boardingPoints.length > 0 ? (
//                     boardingPoints.map((point, index) => (
//                       <div
//                         key={index}
//                         className={`border rounded p-2 cursor-pointer transition-colors ${selectedBoardingPoint === index
//                           ? "border-primary bg-seat-selected"
//                           : "border-tab-border hover:border-primary"
//                           }`}
//                         onClick={() => setSelectedBoardingPoint(index)}
//                       >
//                         <div className="font-medium text-xs">{point.Time}</div>
//                         <div className="font-semibold text-sm">{point.AreaName}</div>
//                         <div className="text-xs text-pickup-text mt-1">
//                           {point.PointName}
//                         </div>
//                         <div className="text-xs text-pickup-text">{point.Pincode}</div>
//                       </div>
//                     ))
//                   ) : (
//                     <p className="text-xs text-gray-400">
//                       No boarding points found
//                     </p>
//                   )}
//                 </div>
//               </div>

              
//               <div className="space-y-2 text-sm">
//                 <div className="flex items-center justify-between mb-2">
//                   <h3 className="font-medium">DROP POINTS</h3>
//                   <ChevronDown className="w-4 h-4 text-muted-foreground" />
//                 </div>
//                 <div className="max-h-64 overflow-y-auto space-y-2">
//                   {droppingPoints.length > 0 ? (
//                     droppingPoints.map((point, index) => (
//                       <div
//                         key={index}
//                         className={`border rounded p-2 cursor-pointer transition-colors ${selectedDropPoint === index
//                           ? "border-primary bg-seat-selected"
//                           : "border-tab-border hover:border-primary"
//                           }`}
//                         onClick={() => setSelectedDropPoint(index)}
//                       >
//                         <div className="font-medium text-xs">{point.Time}</div>
//                         <div className="font-semibold text-sm">{point.AreaName}</div>
//                         <div className="text-xs text-pickup-text mt-1">
//                           {point.PointName}
//                         </div>
//                         <div className="text-xs text-pickup-text">{point.Pincode}</div>
//                       </div>
//                     ))
//                   ) : (
//                     <p className="text-xs text-gray-400">
//                       No dropping points found
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             <div className="border-t border-tab-border pt-4 mt-4">
//               <Button
//                 className="w-full"
//                 disabled={!isFormComplete}
//                 size="lg"
//                 onClick={handleContinue}
//               >
//                 CONTINUE
//               </Button>
//             </div>
//           </div>
//         </div>

//         {/* Tooltip */}
//         {hoveredSeat && (
//           <div
//             className="fixed z-[9999] w-48 bg-[#3D85C6] border border-gray-300 rounded shadow-lg p-3 text-xs text-[#FFFFFF]"
//             style={{ top: hoveredSeat.y, left: hoveredSeat.x + 20 }}
//           >
//             {!hoveredSeat.seat.isAvailable ? (
//               <div className="text-center font-bold text-lg">Booked</div>
//             ) : (
//               <>
//                 <div className="text-center text-xl font-bold">
//                   Seat Details
//                 </div>
//                 <div>
//                   <span className="font-semibold">Seat No:</span>{" "}
//                   {hoveredSeat.seat.id}
//                 </div>
//                 <div>
//                   <span className="font-semibold">Type:</span>{" "}
//                   {hoveredSeat.seat.type}
//                 </div>
//                 <div>
//                   <span className="font-semibold">Price:</span> ₹
//                   {hoveredSeat.seat.price}
//                 </div>
//               </>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BusLayout;


import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, AlertTriangle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import seatImg from "@/assets/seat-img.jpeg";
import { toast } from "react-hot-toast";
import { MapPin, FileText } from "lucide-react";

interface Seat {
  id: string;
  price: number;
  isAvailable: boolean;
  isSelected: boolean;
  type: "seater" | "sleeper";
}

interface BoardingDroppingPoint {
  PointName: string;
  AreaName: string;
  Pincode: string;
  latitude: number;
  longitude: number;
  Time: string;
}

interface BusLayoutProps {
  duration: string;
  selectedDate?: Date;
  operator?: string;
  busNumber?: string;
  busBookingId?: string;
  busBookingDetailsId?: string;
  operatorId?: number;
  packageId: number;
  from?: string;
  busIndex?: number;
  fromDate: string;
  toDate: string; 
}

const BusLayout: React.FC<BusLayoutProps> = ({
  duration,
  selectedDate,
  operator,
  busNumber,
  busBookingId,
  busBookingDetailsId,
  operatorId,
  packageId,
  from,
  busIndex,
  fromDate,
  toDate
}) => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [hoveredSeat, setHoveredSeat] = useState<{ seat: Seat; x: number; y: number } | null>(null);
  const [seatsVisible, setSeatsVisible] = useState(true);
  const [selectedBoardingPoint, setSelectedBoardingPoint] = useState<number | null>(null);
  const [selectedDropPoint, setSelectedDropPoint] = useState<number | null>(null);
  const [bookedSeats, setBookedSeats] = useState<string[]>([]);
  const [remainingSeats, setRemainingSeats] = useState<number | null>(null);
  const [basePrice, setBasePrice] = useState<{ weekday: number; weekend: number }>({ weekday: 0, weekend: 0 });
  const [boardingPoints, setBoardingPoints] = useState<BoardingDroppingPoint[]>([]);
  const [droppingPoints, setDroppingPoints] = useState<BoardingDroppingPoint[]>([]);
  const [localOperatorId, setLocalOperatorId] = useState<number | null>(null);
  const [femaleSeats, setFemaleSeats] = useState<string[]>([]);

  const navigate = useNavigate();
  const location = useLocation();
  const { finalSeatPrice } = location.state || {};
  const queryParams = new URLSearchParams(location.search);
  const operatorIdFromUrl = queryParams.get("operatorId");

  const convertToISTTime = (time: string) => {
  if (!time) return time;

  const parts = time.split(":");
  if (parts.length < 2) return time;

  const h = parseInt(parts[0], 10);
  const m = parseInt(parts[1], 10);

  if (isNaN(h) || isNaN(m)) return time;

  const hour = h % 12 || 12;
  const suffix = h < 12 ? "AM" : "PM";

  return `${hour.toString().padStart(2, "0")}:${m
    .toString()
    .padStart(2, "0")} ${suffix}`;
};


  // ✅ Operator ID logic
  useEffect(() => {
    if (operatorIdFromUrl) setLocalOperatorId(Number(operatorIdFromUrl));
    if (location.state?.operatorId) setLocalOperatorId(location.state.operatorId);
  }, [operatorIdFromUrl, location.state]);

  // ✅ Fetch Seat Layout
  useEffect(() => {
    if (!busBookingId || !selectedDate) return;

    const fetchSeatLayout = async () => {
      try {
        const journeyDate =
          selectedDate instanceof Date ? selectedDate.toLocaleDateString("en-CA") : selectedDate;

        const res = await fetch(
          `https://api.tirupatipackagetours.com/api/bus/seatLayout?busId=${busBookingId}&journeyDate=${journeyDate}`
        );
        const data = await res.json();

        if (data.success) {
          setBasePrice({
            weekday: finalSeatPrice?.weekday ?? Number(data.price.weekday || data.price.default),
            weekend: finalSeatPrice?.weekend ?? Number(data.price.weekend || data.price.default),
          });

          let allBlockedSeats = [...(data.bookedSeats || []), ...(data.lockedSeats || [])];
          setBookedSeats([...new Set(allBlockedSeats)]);

          if (data.femaleSeatNo) {
            const parsed = data.femaleSeatNo.split(",").map((s: string) => s.trim());
            setFemaleSeats(parsed);
          }

          if (data.remainingSeats !== undefined) {
            setRemainingSeats(data.remainingSeats);
          }
        }
      } catch (err) {
        console.error("❌ Error fetching seat layout:", err);
      }
    };

    fetchSeatLayout();
  }, [busBookingId, selectedDate, finalSeatPrice]);

  // ✅ Fetch Boarding / Dropping Points
  useEffect(() => {
    if (!busBookingId) return;

    const fetchPoints = async () => {
      try {
        const [boardingRes, droppingRes] = await Promise.all([
          fetch(`https://api.tirupatipackagetours.com/api/bus/boardingPoints/${busBookingId}`),
          fetch(`https://api.tirupatipackagetours.com/api/bus/droppingPoints/${busBookingId}`),
        ]);

        const boardingData = await boardingRes.json();
        const droppingData = await droppingRes.json();

        setBoardingPoints(
  (boardingData?.boardingPoints || []).map((p: any) => ({
    ...p,
    Time: convertToISTTime(p.Time)
  }))
);

setDroppingPoints(
  (droppingData?.droppingPoints || []).map((p: any) => ({
    ...p,
    Time: convertToISTTime(p.Time)
  }))
);

      } catch (err) {
        console.error("❌ Points fetch error:", err);
      }
    };

    fetchPoints();
  }, [busBookingId]);

  const getSeatPrice = (date: Date | string) => {
    const d = typeof date === "string" ? new Date(date) : date;
    const day = d.getDay();
    return day === 0 || day === 6 ? basePrice.weekend : basePrice.weekday;
  };

  const formattedDateWithDay = selectedDate
  ? selectedDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      weekday: "long",
    })
  : "";

// Service number increments per busIndex
const serviceNumber = busIndex !== undefined ? String(busIndex + 1).padStart(2, "0") : "01";

  const [lowerBerthSeats, setLowerBerthSeats] = useState<Seat[]>([]);
  const [upperBerthSeats, setUpperBerthSeats] = useState<Seat[]>([]);

  // ✅ Build seat layout
  useEffect(() => {
    if (!selectedDate) return;
    const price = getSeatPrice(selectedDate);
    // const createSeats = (prefix: string): Seat[] =>
    //   Array.from({ length: 18 }, (_, i) => ({
    //     id: `${prefix}${i + 1}`,
    //     price,
    //     isAvailable: !bookedSeats.includes(`${prefix}${i + 1}`),
    //     isSelected: false,
    //     type: i < 12 ? "seater" : "sleeper",
    //   }));
    const createSeats = (prefix: string): Seat[] =>
  Array.from({ length: 18 }, (_, i) => {
    let uiId = "";

    if (prefix === "L") {
      // LOWER
      if (i < 6) {
        uiId = "SL" + (i + 1); // Side lower
      } else {
        uiId = "L" + (i - 5);   // L1 – L12
      }
    } else {
      // UPPER
      if (i < 6) {
        uiId = "SU" + (i + 1); // Side upper
      } else {
        uiId = "U" + (i - 5);  // U1 – U12
      }
    }

    return {
      id: uiId,  // UI ID stored here!
      price,
      isAvailable: !bookedSeats.includes(uiId), // compare using UI names
      isSelected: false,
      type: i < 12 ? "seater" : "sleeper",
    };
  });

    setLowerBerthSeats(createSeats("L"));
    setUpperBerthSeats(createSeats("U"));
  }, [basePrice, selectedDate, bookedSeats]);

  const allSeats = [...lowerBerthSeats, ...upperBerthSeats];

  // ✅ Handle Seat Click
  const handleSeatClick = async (seatId: string) => {
    const seat = allSeats.find((s) => s.id === seatId);
    if (!seat?.isAvailable) return;

    const sessionId = localStorage.getItem("sessionId") || `USER-${Date.now()}`;
    localStorage.setItem("sessionId", sessionId);

     if (!selectedSeats.includes(seatId) && selectedSeats.length >= 8) {
    toast.error("You can select a maximum of 8 seats only");
    return;
  }

    // const journeyDate1 =
    //   selectedDate instanceof Date ? selectedDate.toISOString().split("T")[0] : selectedDate;
    const journeyDate1 =
      selectedDate instanceof Date
        ? selectedDate.toLocaleDateString("en-CA")
        : selectedDate;

    if (selectedSeats.includes(seatId)) {
      // Deselect seat
      setSelectedSeats((prev) => prev.filter((id) => id !== seatId));
      await fetch("https://api.tirupatipackagetours.com/api/seat/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ busBookingId, seatNo: seatId, sessionId, journeyDate1 }),
      }).catch(console.error);
    } else {
      // Select seat
      setSelectedSeats((prev) => [...prev, seatId]);

      if (femaleSeats.includes(seatId)) {
        toast.custom(
          (t) => (
            <div
              className={`flex items-center gap-3 p-3 rounded-lg shadow-md text-sm border transition-all duration-300 ${t.visible ? "opacity-100" : "opacity-0"
                } bg-pink-50 border-pink-200 text-pink-800`}
            >
              <AlertTriangle className="w-5 h-5 text-pink-600" />
              <div>
                <p className="font-semibold">Female Seat Selected</p>
                <p className="text-xs">
                  Only female passengers or their co-passengers should book this seat.
                </p>
              </div>
            </div>
          ),
          { duration: 4000 }
        );
      }

      await fetch("https://api.tirupatipackagetours.com/api/seat/lock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ busBookingId, seatNo: seatId, sessionId, journeyDate1 }),
      }).catch(console.error);
    }
  };

  const calculateTotalPrice = () =>
    selectedSeats.reduce(
      (total, id) => total + (allSeats.find((s) => s.id === id)?.price || 0),
      0
    );

  // ✅ Continue to next page
  const handleContinue = () => {
    if (!selectedDate) return;

    const dateOnly =
      selectedDate instanceof Date ? selectedDate.toLocaleDateString("en-CA") : selectedDate;

    const selectedFemaleSeats = selectedSeats.filter((id) => femaleSeats.includes(id));

    const bookingData = {
      busId: busBookingId,
      selectedSeats,
      totalPrice: calculateTotalPrice(),
      boardingPoint: boardingPoints[selectedBoardingPoint!],
      droppingPoint: droppingPoints[selectedDropPoint!],
      duration,
      busBookingDetailsId,
      operatorId: operatorId ?? localOperatorId,
      selectedDate: dateOnly,
      packageId,
      from,
      femaleSeats: selectedFemaleSeats, // ✅ simpler & clear
      fromDate,
  toDate,
  fromDateFull: selectedDate,  
  toDateFull: (() => {
  const end = new Date(selectedDate);
  end.setDate(end.getDate() + (packageId === 3 ? 2 : 1));
  return end;
})(),
    };

    localStorage.setItem("bookingData", JSON.stringify(bookingData));
    setTimeout(() => navigate("/booking-details", { state: bookingData }), 100);
  };

  const isFormComplete =
    selectedSeats.length > 0 && selectedBoardingPoint !== null && selectedDropPoint !== null;

  const SeatComponent = ({ seat }: { seat: Seat }) => {
    const isSelected = selectedSeats.includes(seat.id);
    const isFemaleSeat = femaleSeats.includes(seat.id);
    const isBooked = !seat.isAvailable;

    // ============================
    // ⭐ SEAT NUMBERING LOGIC (SL | L1 L2 | SU)
    // ============================
    const li = lowerBerthSeats.findIndex(s => s.id === seat.id);
    const ui = upperBerthSeats.findIndex(s => s.id === seat.id);

    let displayId = seat.id;

    // LOWER BERTH
    if (li !== -1) {
      if (li < 6) {
        displayId = "SL" + (li + 1); // Side seats
      } else {
        let pos = li - 6;
        let row = Math.floor(pos / 2);
        let col = pos % 2;
        displayId = "L" + (row * 2 + col + 1); // L1–L12 center seats
      }
    }

    // UPPER BERTH
    if (ui !== -1) {
      if (ui < 6) {
        displayId = "SU" + (ui + 1);
      } else {
        let pos = ui - 6;
        let row = Math.floor(pos / 2);
        let col = pos % 2;
        displayId = "U" + (row * 2 + col + 1);
      }
    }


    const handleClick = () => {
      if (!seat.isAvailable) return;
      handleSeatClick(seat.id); // Your existing lock logic
    };


    const base = "w-20 h-20 mx-auto rounded-md flex items-center justify-center transition-all duration-200";

    const seatClasses = `${base} ${isBooked
      ? "opacity-40 grayscale cursor-not-allowed"
      : "cursor-pointer hover:scale-105"
      } ${isSelected && !isFemaleSeat ? "bg-blue-200 border-2 border-blue-400" : ""
      } ${!isSelected && isFemaleSeat ? "border-2 border-pink-400 bg-pink-100" : ""
      } ${isSelected && isFemaleSeat
        ? "bg-pink-600 border-2 border-pink-700 text-white"
        : ""
      }`;

    // ============================
    // ⭐ FINAL JSX
    // ============================
    return (
      <div className="relative group" onClick={handleClick}>

        {/* Seat Image */}
        <div className="relative">
          {/* Seat Number */}
          <span className="absolute inset-0 flex justify-center items-center text-[11px] font-semibold text-black z-30">
            {displayId}
          </span>

          <img
            src={seatImg}
            alt={seat.id}
            className={seatClasses}
          />

          {/* ⭐ SELECTED SEAT — your new color #c9e8fe */}
          {isSelected && !isFemaleSeat && (
            <div
              className="absolute inset-0 z-20"
              style={{ backgroundColor: "#c9e8fe" }}
            ></div>
          )}

          {/* ⭐ FEMALE SELECTED — #f4c9ca */}
          {isSelected && isFemaleSeat && (
            <div
              className="absolute inset-0 z-20"
              style={{ backgroundColor: "#f4c9ca" }}
            ></div>
          )}

          {/* ⭐ BOOKED */}
          {isBooked && (
            <div
              className="absolute inset-0 z-20"
              style={{ backgroundColor: "#d3d3d3" }}
            ></div>
          )}
        </div>



        { }


        { }
        <div
          className="
    invisible opacity-0
    group-hover:visible group-hover:opacity-100
    absolute 
    -top-[90px] left-1/2 -translate-x-1/2
    w-[7.5rem]
    bg-[#3D85C6] text-white text-xs
    rounded shadow-lg p-2 z-[9999]
    pointer-events-none
  "
        >
          <div className="font-semibold">Seat No: {displayId}</div>
          <div>Fare: ₹{seat.price.toFixed(2)}</div>
          {/* <div>Seat Type: {seat.type === "sleeper" ? "SLB" : "LB"}</div> */}
        </div>


      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-3 sm:p-4">
       
        {remainingSeats !== null && (
          <div className="text-md font-semibold text-green-600 mb-4">
            Remaining Seats: {remainingSeats}
          </div>
        )}
           <div className="mb-4">
  <p className="text-md font-semibold text-[#020e68]">
    Bangalore to Tirupati Package on {selectedDate?.toLocaleDateString("en-GB", { weekday: "long", day: "2-digit", month: "2-digit", year: "numeric" })}
  </p>
  <p className="text-md font-semibold text-[#020e68]">
    Coach: | Service: {serviceNumber} SARVA FREE DARSHAN
  </p>
</div>

  
        {/* Responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4">
          {/* ✅ Select Seats */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Select Seats</h2>

            {seatsVisible && (
              <div className="space-y-6">
                <div className="flex flex-row gap-4 justify-center items-start flex-nowrap">

                  {/* LOWER BERTH */}
                  <div className="flex flex-col w-[180px]">

                    {/* Header inside box */}
                    <div className="border border-[#dcecff] border-b-transparent rounded-t-xl p-4 text-center font-medium text-sm bg-white">
                      Lower
                    </div>


                    {/* Box */}
                    <div className="border border-[#dcecff] rounded-b-xl p-2 pt-3 min-h-[480px]">

                      {/* Wheel */}
                      <div className="flex justify-end mb-2">
                        <img
                          src="https://www.makemytrip.com/bus-mmt-next/_next/image?url=%2Fbus-mmt-next%2FsteeringWheel.png&w=48&q=75"
                          alt="Wheel"
                          className="w-6 h-6"
                        />
                      </div>

                      <div className="flex gap-1 overflow-visible">
                        <div className="flex flex-col gap-1">
                          {lowerBerthSeats.slice(0, 6).map((seat) => (
                            <SeatComponent key={seat.id} seat={seat} />
                          ))}
                        </div>

                        <div className="w-8 flex items-center justify-center">
                          <span className="absolute text-black text-[8px] rotate-90 whitespace-nowrap">
                            GANGWAY
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-1">
                          {lowerBerthSeats.slice(6, 18).map((seat) => (
                            <SeatComponent key={seat.id} seat={seat} />
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* UPPER BERTH */}
                  <div className="flex flex-col w-[180px]">

                    {/* Header inside box */}
                    <div className="border border-[#dcecff] border-b-transparent rounded-t-xl p-4 text-center font-medium text-sm bg-white">
                      Upper
                    </div>

                    {/* Box */}
                    <div className="border border-[#dcecff] rounded-b-xl p-2 pt-3 min-h-[480px]">

                      <div className="h-8"></div>

                      <div className="flex gap-1 overflow-visible">
                        <div className="flex flex-col gap-1">
                          {upperBerthSeats.slice(0, 6).map((seat) => (
                            <SeatComponent key={seat.id} seat={seat} />
                          ))}
                        </div>

                        <div className="w-8 flex items-center justify-center">
                          <span className="absolute text-black text-[8px] rotate-90 whitespace-nowrap">
                            GANGWAY
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-1">
                          {upperBerthSeats.slice(6, 18).map((seat) => (
                            <SeatComponent key={seat.id} seat={seat} />
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

                <p className="text-red-600 font-bold text-sm mt-2 text-start">
                  Cancellation is not allowed on this Service.
                </p>
              </div>
            )}
          </div>


          {/* ✅ Select Points */}
          <div>
            <div className="flex items-center flex-wrap gap-4 text-xs font-medium mb-4">
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 border bg-white-200"></div>
                <span>Available</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4" style={{ backgroundColor: "#c9e8fe" }}></div>
                <span>Selected</span>
              </div>

              <div className="flex items-center gap-1">
                <div className="w-4 h-4" style={{ backgroundColor: "#d3d3d3" }}></div>
                <span>Booked</span>
              </div>

              <div className="flex items-center gap-1">
                <div className="w-4 h-4" style={{ backgroundColor: "#f4c9ca" }}></div>
                <span>Selected (L)</span>
              </div>

              <div className="flex items-center gap-1">
                <div className="w-4 h-4 border border-pink-500"></div>
                <span>Available (L)</span>
              </div>

            </div>

            <h2 className="text-lg font-semibold mb-4">
              Select Pickup & Drop Points
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
             
              {/* <div>
    <h3 className="font-medium mb-1">BOARDING POINT</h3>
    <select
      className="w-full border rounded p-2"
      value={selectedBoardingPoint ?? ""}
      onChange={(e) => setSelectedBoardingPoint(Number(e.target.value))}
    >
      <option value="" disabled>Select Boarding Point</option>
      {boardingPoints.map((point, index) => (
        <option key={index} value={index}>
          {point.Time} | {point.AreaName}
        </option>
      ))}
    </select>

    {selectedBoardingPoint !== null && boardingPoints[selectedBoardingPoint] && (
      <div className="mt-2 text-xs text-gray-700 border rounded p-2">
        <div><span className="font-semibold">Point Name:</span> {boardingPoints[selectedBoardingPoint].PointName}</div>
        <div><span className="font-semibold">Pincode:</span> {boardingPoints[selectedBoardingPoint].Pincode}</div>
         <div><span className="font-semibold">Phone No:</span> 9964880505 / 8197882511</div>
        
      </div>
    )}
  </div> */}

<div>
  <h3 className="font-medium mb-1">BOARDING POINT</h3>
  <select
    className="w-full border rounded p-2"
    value={selectedBoardingPoint ?? ""}
    onChange={(e) => setSelectedBoardingPoint(Number(e.target.value))}
  >
    <option value="" disabled>Select Boarding Point</option>
    {boardingPoints.map((point, index) => (
      <option key={index} value={index}>
        {point.Time} | {point.AreaName}
      </option>
    ))}
  </select>

  {selectedBoardingPoint !== null && boardingPoints[selectedBoardingPoint] && (
    <div className="mt-2 text-xs text-gray-700 border rounded p-2">

      <div>
        <span className="font-semibold"> 
       <i className="fa-solid fa-location-dot mr-1"></i>  {boardingPoints[selectedBoardingPoint].PointName}
       </span> 
      </div>

      

      {/* <div>
        <span className="font-semibold">Pincode:</span>
        {boardingPoints[selectedBoardingPoint].Pincode}
      </div> */}

      <div>
        <span className="font-semibold">
          <i className="fa-solid fa-mobile-screen-button mr-1"></i> Phone No:
        </span>
        9964880505 / 8197882511
      </div>

    </div>
  )}
</div>

  {/* Dropping Point */}
  {/* <div>
    <h3 className="font-medium mb-1">DROP POINT</h3>
    <select
      className="w-full border rounded p-2"
      value={selectedDropPoint ?? ""}
      onChange={(e) => setSelectedDropPoint(Number(e.target.value))}
    >
      <option value="" disabled>Select Drop Point</option>
      {droppingPoints.map((point, index) => (
        <option key={index} value={index}>
          {point.Time} | {point.AreaName}
        </option>
      ))}
    </select>

    {selectedDropPoint !== null && droppingPoints[selectedDropPoint] && (
      <div className="mt-2 text-xs text-gray-700 border rounded p-2">
        <div><span className="font-semibold">Point Name:</span> {droppingPoints[selectedDropPoint].PointName}</div>
        <div><span className="font-semibold">Pincode:</span> {droppingPoints[selectedDropPoint].Pincode}</div>
          <div><span className="font-semibold">Phone No:</span> 9964880505 / 8197882511</div>
      </div>
    )}
  </div> */}
  <div>
  <h3 className="font-medium mb-1">DROP POINT</h3>
  <select
    className="w-full border rounded p-2"
    value={selectedDropPoint ?? ""}
    onChange={(e) => setSelectedDropPoint(Number(e.target.value))}
  >
    <option value="" disabled>Select Drop Point</option>
    {droppingPoints.map((point, index) => (
      <option key={index} value={index}>
        {point.Time} | {point.AreaName}
      </option>
    ))}
  </select>

  {selectedDropPoint !== null && droppingPoints[selectedDropPoint] && (
    <div className="mt-2 text-xs text-gray-700 border rounded p-2">

      <div>
        <span className="font-semibold"> <i className="fa-solid fa-location-dot mr-1"></i>
        {droppingPoints[selectedDropPoint].PointName}
        </span>
      </div>

      

      {/* <div>
        <span className="font-semibold">Pincode:</span>
        {droppingPoints[selectedDropPoint].Pincode}
      </div> */}

      <div>
        <span className="font-semibold">
          <i className="fa-solid fa-mobile-screen-button mr-1"></i> Phone No:
        </span>
        9964880505 / 8197882511
      </div>

    </div>
  )}
</div>

            </div>



            <div className="border-t border-tab-border pt-4 mt-4">
              <Button
                className="w-full"
                disabled={!isFormComplete}
                size="lg"
                onClick={handleContinue}
              >
                CONTINUE
              </Button>
            </div>
          </div>
        </div>
        {/* Tooltip */}
        {hoveredSeat && (
          <div
            className="fixed z-[9999] w-48 bg-[#3D85C6] border border-gray-300 rounded shadow-lg p-3 text-xs text-[#FFFFFF]"
            style={{ top: hoveredSeat.y, left: hoveredSeat.x + 20 }}
          >
            {!hoveredSeat.seat.isAvailable ? (
              <div className="text-center font-bold text-lg">Booked</div>
            ) : (
              <>
                <div className="text-center text-xl font-bold">
                  Seat Details
                </div>
                <div>
                  <span className="font-semibold">Seat No:</span>{" "}
                  {hoveredSeat.seat.id}
                </div>
                <div>
                  <span className="font-semibold">Type:</span>{" "}
                  {hoveredSeat.seat.type}
                </div>
                <div>
                  <span className="font-semibold">Price:</span> ₹
                  {hoveredSeat.seat.price}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BusLayout;