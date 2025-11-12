// import React, { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { ChevronDown, ChevronUp } from "lucide-react";
// import { useNavigate, useLocation } from "react-router-dom";
// import seatImg from "@/assets/seat-img.jpeg";

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
//    operatorId?: number;          
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
//  operatorId,
//  packageId,
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
//   const [blockedSeats, setBlockedSeats] = useState<{ [key: number]: string[] }>({});
//  // const [operatorId, setOperatorId] = useState<number | null>(null);
//  const [localOperatorId, setLocalOperatorId] = useState<number | null>(null);

//   const [femaleSeats , setFemaleSeats] = useState<string[]>([]);

//   const navigate = useNavigate();
//   const location = useLocation();


//   // 🎯 GET PRICES FROM STATE (passed from Bus List page)
//   const { finalSeatPrice } = location.state || {};

//   console.log("✅ Received busBookingId:", busBookingId);
//    console.log("✅ Received busBooking Detail id:",busBookingDetailsId);
   
  

//   // 🎯 Operator ID from URL or state
//   const queryParams = new URLSearchParams(location.search);
//   const operatorIdFromUrl = queryParams.get("operatorId");

  
//   useEffect(() => {
//   if (operatorIdFromUrl) setLocalOperatorId(Number(operatorIdFromUrl));
//   if (location.state?.operatorId) setLocalOperatorId(location.state.operatorId);
// }, [operatorIdFromUrl, location.state]);


  
//   // ✅ Fetch Seat Layout + Prices
 
//   useEffect(() => {
//   if (!busBookingId || !selectedDate) return;

//   const fetchSeatLayout = async () => {
//     try {
//       const journeyDate =
//     selectedDate instanceof Date
//       ? selectedDate.toLocaleDateString("en-CA") // e.g., "2025-11-28"
//       : selectedDate;

//   console.log("✅ Journey Date being passed:", journeyDate);

//       const res = await fetch(
//         `http://localhost:5000/api/bus/seatLayout?busId=${busBookingId}&journeyDate=${journeyDate}`
//       );

//       const data = await res.json();

//       if (data.success) {
//         // ✅ Base price setup
//         setBasePrice({
//           weekday: finalSeatPrice?.weekday ?? Number(data.price.weekday || data.price.default),
//           weekend: finalSeatPrice?.weekend ?? Number(data.price.weekend || data.price.default),
//         });

//         // ✅ Combine booked + locked seats only from server
//         let allBlockedSeats = [
//           ...(data.bookedSeats || []),
//           ...(data.lockedSeats || []),
//         ];

//         // ✅ Check for local blocked seats (only keep if still valid)
//         const local = JSON.parse(localStorage.getItem("blockedSeats") || "{}");

//         if (local[busBookingId]) {
//           const stillValidLocalSeats = local[busBookingId].filter(
//             (s: string) => allBlockedSeats.includes(s)
//           );
//           local[busBookingId] = stillValidLocalSeats;
//           localStorage.setItem("blockedSeats", JSON.stringify(local));
//         }

//         // ✅ Final booked seats (source of truth: backend)
//         setBookedSeats([...new Set(allBlockedSeats)]);

//         // ✅ Handle female-only seats (if any)
//         if (data.femaleSeatNo) {
//           const parsed = data.femaleSeatNo.split(",").map((s: string) => s.trim());
//           setFemaleSeats(parsed);
//         }

//         // ✅ Remaining seats
//         if (data.remainingSeats !== undefined) {
//           setRemainingSeats(data.remainingSeats);
//         }
//       }
//     } catch (err) {
//       console.error("❌ Error fetching seat layout:", err);
//     }
//   };

//   fetchSeatLayout();
// }, [busBookingId, selectedDate, finalSeatPrice]);


//   // ✅ Fetch Boarding & Dropping Points
//   useEffect(() => {
//     if (!busBookingId) return;

//     const fetchPoints = async () => {
//       try {
//         const [boardingRes, droppingRes] = await Promise.all([
//           fetch(`http://localhost:5000/api/bus/boardingPoints/${busBookingId}`),
//           fetch(`http://localhost:5000/api/bus/droppingPoints/${busBookingId}`)
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

//   // ✅ Calculate correct seat price by date
//   const getSeatPrice = (date: Date | string) => {
//     const d = typeof date === "string" ? new Date(date) : date;
//     const day = d.getDay();
//     return day === 0 || day === 6 ? basePrice.weekend : basePrice.weekday;
//   };

//   // ✅ Generate seats when price changes
//   const [lowerBerthSeats, setLowerBerthSeats] = useState<Seat[]>([]);
//   const [upperBerthSeats, setUpperBerthSeats] = useState<Seat[]>([]);

//   useEffect(() => {
//     if (!selectedDate) return;

//     const price = getSeatPrice(selectedDate);
//     console.log("✅ Price applied:", price);

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

//   // 🎯 Seat click
//   const allSeats = [...lowerBerthSeats, ...upperBerthSeats];
  

//   const handleSeatClick = async (seatId: string) => {
//     const seat = allSeats.find(s => s.id === seatId);
//     if (!seat?.isAvailable) return;

//     const sessionId = localStorage.getItem("sessionId") || `USER-${Date.now()}`;
//     localStorage.setItem("sessionId", sessionId);

//     const journeyDate = selectedDate;
//     const journeyDate1 = selectedDate instanceof Date
//   ? selectedDate.toISOString().split("T")[0]
//   : selectedDate;

//     if (selectedSeats.includes(seatId)) {
//       // 🧩 Deselect seat → Unlock
//       setSelectedSeats(prev => prev.filter(id => id !== seatId));

//       await fetch("http://localhost:5000/api/seat/unlock", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           busBookingId,
//           seatNo: seatId,
//           sessionId,
//           journeyDate1
//         }),
//       }).catch(err => console.error("Unlock error:", err));
//     } else {
//       // 🧩 Select seat → Lock
//       setSelectedSeats(prev => [...prev, seatId]);

//       await fetch("http://localhost:5000/api/seat/lock", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           busBookingId,
//           seatNo: seatId,
//           sessionId,
//           journeyDate1
//         }),
//       }).catch(err => console.error("Lock error:", err));
//     }
//   };
//   const calculateTotalPrice = () =>
//     selectedSeats.reduce((total, id) => total + (allSeats.find(s => s.id === id)?.price || 0), 0);

  
// const handleContinue = () => {
//   if (!selectedDate) {
//     console.warn("⚠️ No selected date found before proceeding!");
//     return;
//   }

//   // ✅ Strip time zone — get only date part (e.g., "2025-11-28")
//  const dateOnly =
//   selectedDate instanceof Date
//     ? selectedDate.toLocaleDateString("en-CA") // 👉 YYYY-MM-DD in local time
//     : selectedDate;


//   console.log("📅 Cleaned selectedDate being passed:", dateOnly);

//   // ✅ Store locally blocked seats
//   const stored = JSON.parse(localStorage.getItem("blockedSeats") || "{}");
//   if (!stored[busBookingId!]) stored[busBookingId!] = [];
//   stored[busBookingId!] = [...new Set([...stored[busBookingId!], ...selectedSeats])];
//   localStorage.setItem("blockedSeats", JSON.stringify(stored));

//   // ✅ Prepare booking data
//   const bookingData = {
//     busId: busBookingId,
//     selectedSeats,
//     totalPrice: calculateTotalPrice(),
//     boardingPoint: boardingPoints[selectedBoardingPoint!],
//     droppingPoint: droppingPoints[selectedDropPoint!],
//     duration,
//     busBookingDetailsId,
//     operatorId: operatorId ?? localOperatorId,
//     selectedDate: dateOnly, 
//      packageId,
//      from,
//   };

//  // Save to localStorage to persist across reloads
//   localStorage.setItem("bookingData", JSON.stringify(bookingData));
//   console.log("bookingData saved:", bookingData);

//   // Small delay ensures storage completes before route change
//   setTimeout(() => {
//     console.log("Navigating with bookingData:", bookingData);
//     navigate("/booking-details", { state: bookingData });
//   }, 100);
// };


//   const isFormComplete = selectedSeats.length > 0 && selectedBoardingPoint !== null && selectedDropPoint !== null;

//   const [femaleSeatId] = useState(() => {
//     const availableSeats = allSeats.filter(s => s.isAvailable);
//     const randomSeat = availableSeats[Math.floor(Math.random() * availableSeats.length)];
//     return randomSeat?.id || "";
//   });

//   // const SeatComponent = ({ seat }: { seat: Seat }) => {
//   //   const isSelected = selectedSeats.includes(seat.id);
//   //   const isFemaleSeat = seat.id === femaleSeatId;
//   //   const isBooked = !seat.isAvailable;

//   //   const baseClasses = "w-20 h-20 mx-auto rounded-md flex items-center justify-center transition-all duration-200";
//   //   const seatStyles = `
//   //     ${baseClasses}
//   //     ${isBooked ? "opacity-40 grayscale cursor-not-allowed" : "cursor-pointer hover:scale-105"}
//   //     ${isSelected ? "bg-blue-200 border-2 border-blue-400" : ""}
//   //     ${!isSelected && isFemaleSeat ? "border-2 border-pink-400" : ""}
//   //   `;

//   //   const handleMouseEnter = (e: any) => {
//   //     const rect = e.target.getBoundingClientRect();
//   //     setHoveredSeat({ seat, x: rect.right, y: rect.top });
//   //   };

//   //   return (
//   //     <div
//   //       className="relative"
//   //       onClick={() => seat.isAvailable && handleSeatClick(seat.id)}
//   //       onMouseEnter={handleMouseEnter}
//   //       onMouseLeave={() => setHoveredSeat(null)}
//   //     >
//   //       <img src="/src/assets/seat-img.jpeg" alt={seat.id} className={seatStyles} />
//   //       <div className="text-[11px] text-price-text mt-1 text-center">₹{seat.price}</div>
//   //     </div>
//   //   );
//   // };
// const SeatComponent = ({ seat }: { seat: Seat }) => {
//     const isSelected = selectedSeats.includes(seat.id);
//     const isFemaleSeat = femaleSeats.includes(seat.id);
//     const isBooked = !seat.isAvailable;

//     const base = "w-20 h-20 mx-auto rounded-md flex items-center justify-center transition-all duration-200";
//     const seatClasses = `${base} ${isBooked
//         ? "opacity-40 grayscale cursor-not-allowed"
//         : "cursor-pointer hover:scale-105"
//       } ${isSelected && !isFemaleSeat ? "bg-blue-200 border-2 border-blue-400" : ""
//       } ${!isSelected && isFemaleSeat ? "border-2 border-pink-400 bg-pink-100" : ""
//       } ${isSelected && isFemaleSeat ? "bg-pink-600 border-2 border-pink-700 text-white" : ""
//       }`;

//     const handleClick = () => {
//       if (!seat.isAvailable) return;
//       handleSeatClick(seat.id);
//     };

//     return (
//       <div className="relative group" onClick={handleClick}>
//         <img
//           src={seatImg}
//           alt={seat.id}
//           className={seatClasses}
//         />
//         <div className="text-[11px] text-price-text mt-1 text-center">
//           ₹{seat.price}
//         </div>

//         {/* Tooltip box: appears above on hover */}
//         <div className="
//         invisible opacity-0
//         group-hover:visible group-hover:opacity-100
//         absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2
//         w-[7rem] bg-[#3D85C6] text-white text-xs rounded shadow-lg p-2 z-50
//         pointer-events-none
//       ">
//           <div className="font-semibold">Seat No: {seat.id}</div>
//           <div>Fare: ₹{seat.price.toFixed(2)}</div>
//         </div>
//       </div>
//     );
//   };
//   return (
//     <div className="min-h-screen bg-background">
//       <div className="max-w-7xl mx-auto p-4">

//         {/* {operatorId && <p className="text-xs text-blue-500 font-semibold mb-1">Operator ID: {operatorId}</p>}
//         {busBookingId && <p className="text-sm font-semibold text-green-600 mb-1">Bus ID: {busBookingId}</p>} */}
//         {operatorId && (
//   <p className="text-xs text-blue-500 font-semibold mb-1">
//     Operator ID: {operatorId}
//   </p>
// )}

// {busBookingDetailsId && (
//   <p className="text-sm font-semibold text-purple-600 mb-1">
//     Booking Details ID: {busBookingDetailsId}
//   </p>
// )}


//         <h2 className="text-lg font-bold mb-4 text-[#3d85c6]">Trip Duration: {duration}</h2>

//         {remainingSeats !== null && (
//           <div className="text-md font-semibold text-green-600 mb-4">
//             Remaining Seats: {remainingSeats}
//           </div>
//         )}

       

//          <div className="grid grid-cols-2 gap-4">

//           {}
//           <div>
//             <h2 className="text-lg font-semibold mb-4">Select Seats</h2>
//             {seatsVisible && (
//               <div className="space-y-6">
//                 <div className="flex gap-10">

//                   {}
//                   <div className="flex flex-col gap-[0.2rem] relative">
//                     <h3 className="text-sm font-medium text-muted-foreground">
//                       LOWER BERTH ({lowerBerthSeats.length})
//                     </h3>
//                     <div className="border rounded-lg p-3 relative min-h-[480px]" style={{ paddingTop: "38px" }}>
//                       <img
//                         src="https://www.makemytrip.com/bus-mmt-next/_next/image?url=%2Fbus-mmt-next%2FsteeringWheel.png&w=48&q=75"
//                         alt="Wheel Icon"
//                         className="w-6 h-6 absolute top-2 right-3"
//                       />
//                       <div className="flex gap-1" >
//                         <div className="flex flex-col gap-1">
//                           {lowerBerthSeats.slice(0, 6).map((seat) => (
//                             <SeatComponent key={seat.id} seat={seat} />
//                           ))}
//                         </div>
//                         <div className="w-10 relative flex items-center justify-center">
//                           <div className="w-4 h-full bg-red-500 flex items-center justify-center">
//                             <span className="absolute text-white text-[10px] rotate-90 whitespace-nowrap">
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

//                   {}
//                   <div className="flex flex-col gap-[0.2rem]">
//                     <h3 className="text-sm font-medium text-muted-foreground">
//                       UPPER BERTH ({upperBerthSeats.length})
//                     </h3>
//                     <div className="border rounded-lg p-3" style={{ paddingTop: "38px", minHeight: "480px" }}>
//                       <div className="flex gap-1">
//                         <div className="flex flex-col gap-1">
//                           {upperBerthSeats.slice(0, 6).map((seat) => (
//                             <SeatComponent key={seat.id} seat={seat} />
//                           ))}
//                         </div>
//                         <div className="w-10 relative flex items-center justify-center">
//                           <div className="w-4 h-full bg-red-500 flex items-center justify-center">
//                             <span className="absolute text-white text-[10px] rotate-90 whitespace-nowrap">
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


         
// <div>
  
//   <div className="flex items-center flex-wrap gap-4 text-xs font-medium mb-4">

//     <div className="flex items-center gap-1">
//       <div className="w-4 h-4 border bg-white-200"></div>
//       <span>Available</span>
//     </div>

//     <div className="flex items-center gap-1">
//       <div className="w-4 h-4 bg-blue-500"></div>
//       <span>Selected</span>
//     </div>

//     <div className="flex items-center gap-1">
//       <div className="w-4 h-4 bg-gray-600"></div>
//       <span>Booked</span>
//     </div>

//     <div className="flex items-center gap-1">
//       <div className="w-4 h-4 bg-pink-500"></div>
//       <span>Ladies (L)</span>
//     </div>

//     <div className="flex items-center gap-1">
//       <div className="w-4 h-4 border border-pink-500"></div>
//       <span>Available (L)</span>
//     </div>

//   </div>

 
//   <h2 className="text-lg font-semibold mb-4">Select Pickup & Drop Points</h2>

//   <div className="grid grid-cols-2 gap-4">

    
//     <div className="space-y-2 text-sm">
//       <div className="flex items-center justify-between mb-2">
//         <h3 className="font-medium">BOARDING POINTS</h3>
//         <ChevronUp className="w-4 h-4 text-muted-foreground" />
//       </div>
//       <div className="max-h-64 overflow-y-auto space-y-2">
//         {boardingPoints.length > 0 ? boardingPoints.map((point, index) => (
//           <div
//             key={index}
//             className={`border rounded p-2 cursor-pointer transition-colors ${
//               selectedBoardingPoint === index
//                 ? "border-primary bg-seat-selected"
//                 : "border-tab-border hover:border-primary"
//             }`}
//             onClick={() => setSelectedBoardingPoint(index)}
//           >
//             <div className="font-medium text-xs">{point.Time}</div>
//             <div className="font-semibold text-sm">{point.AreaName}</div>
//             <div className="text-xs text-pickup-text mt-1">{point.PointName}</div>
//             <div className="text-xs text-pickup-text">{point.Pincode}</div>
//           </div>
//         )) : (
//           <p className="text-xs text-gray-400">No boarding points found</p>
//         )}
//       </div>
//     </div>

   
//     <div className="space-y-2 text-sm">
//       <div className="flex items-center justify-between mb-2">
//         <h3 className="font-medium">DROP POINTS</h3>
//         <ChevronDown className="w-4 h-4 text-muted-foreground" />
//       </div>
//       <div className="max-h-64 overflow-y-auto space-y-2">
//         {droppingPoints.length > 0 ? droppingPoints.map((point, index) => (
//           <div
//             key={index}
//             className={`border rounded p-2 cursor-pointer transition-colors ${
//               selectedDropPoint === index
//                 ? "border-primary bg-seat-selected"
//                 : "border-tab-border hover:border-primary"
//             }`}
//             onClick={() => setSelectedDropPoint(index)}
//           >
//             <div className="font-medium text-xs">{point.Time}</div>
           
//             <div className="font-semibold text-sm">{point.AreaName}</div>
//              <div className="text-xs text-pickup-text mt-1">{point.PointName}</div>
//             <div className="text-xs text-pickup-text">{point.Pincode}</div>
//           </div>
//         )) : (
//           <p className="text-xs text-gray-400">No dropping points found</p>
//         )}
//       </div>
//     </div>

//   </div>

//   <div className="border-t border-tab-border pt-4 mt-4">
//     <Button
//       className="w-full"
//       disabled={!isFormComplete}
//       size="lg"
//       onClick={handleContinue}
//     >
//       CONTINUE
//     </Button>
//   </div>
// </div>
//         </div> 
        


//         {/* ✅ Seat Tooltip */}
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
//                   {hoveredSeat.seat.id === femaleSeatId ? "Female Seat" : "Seat Details"}
//                 </div>
//                 <div><span className="font-semibold">Seat No:</span> {hoveredSeat.seat.id}</div>
//                 <div><span className="font-semibold">Type:</span> {hoveredSeat.seat.type}</div>
//                 <div><span className="font-semibold">Price:</span> ₹{hoveredSeat.seat.price}</div>
//               </>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };


// export default BusLayout;



// import React, { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { ChevronDown, ChevronUp } from "lucide-react";
// import { useNavigate, useLocation } from "react-router-dom";
// import seatImg from "@/assets/seat-img.jpeg";
// import { toast } from "react-hot-toast";
// import { AlertTriangle } from "lucide-react";

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
//    packageId: number;
//    from?: string;
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
//   const [blockedSeats, setBlockedSeats] = useState<{ [key: number]: string[] }>({});
//   const [localOperatorId, setLocalOperatorId] = useState<number | null>(null);
//   const [femaleSeats, setFemaleSeats] = useState<string[]>([]);

//   const navigate = useNavigate();
//   const location = useLocation();

//   const { finalSeatPrice } = location.state || {};

//   const queryParams = new URLSearchParams(location.search);
//   const operatorIdFromUrl = queryParams.get("operatorId");

//   useEffect(() => {
//     if (operatorIdFromUrl) setLocalOperatorId(Number(operatorIdFromUrl));
//     if (location.state?.operatorId) setLocalOperatorId(location.state.operatorId);
//   }, [operatorIdFromUrl, location.state]);

//   useEffect(() => {
//     if (!busBookingId || !selectedDate) return;

//     const fetchSeatLayout = async () => {
//       try {
//         const journeyDate =
//           selectedDate instanceof Date ? selectedDate.toLocaleDateString("en-CA") : selectedDate;

//         const res = await fetch(
//           `http://localhost:5000/api/bus/seatLayout?busId=${busBookingId}&journeyDate=${journeyDate}`
//         );
//         const data = await res.json();

//         if (data.success) {
//           setBasePrice({
//             weekday: finalSeatPrice?.weekday ?? Number(data.price.weekday || data.price.default),
//             weekend: finalSeatPrice?.weekend ?? Number(data.price.weekend || data.price.default),
//           });

//           let allBlockedSeats = [...(data.bookedSeats || []), ...(data.lockedSeats || [])];
//           const local = JSON.parse(localStorage.getItem("blockedSeats") || "{}");

//           if (local[busBookingId]) {
//             const stillValidLocalSeats = local[busBookingId].filter((s: string) =>
//               allBlockedSeats.includes(s)
//             );
//             local[busBookingId] = stillValidLocalSeats;
//             localStorage.setItem("blockedSeats", JSON.stringify(local));
//           }

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

//   useEffect(() => {
//     if (!busBookingId) return;

//     const fetchPoints = async () => {
//       try {
//         const [boardingRes, droppingRes] = await Promise.all([
//           fetch(`http://localhost:5000/api/bus/boardingPoints/${busBookingId}`),
//           fetch(`http://localhost:5000/api/bus/droppingPoints/${busBookingId}`),
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
 
// const handleSeatClick = async (seatId: string) => {
//     const seat = allSeats.find(s => s.id === seatId);
//     if (!seat?.isAvailable) return;

//     const sessionId = localStorage.getItem("sessionId") || `USER-${Date.now()}`;
//     localStorage.setItem("sessionId", sessionId);

//     const journeyDate = selectedDate;
//     const journeyDate1 = selectedDate instanceof Date
//   ? selectedDate.toISOString().split("T")[0]
//   : selectedDate;

//     if (selectedSeats.includes(seatId)) {
//       // 🧩 Deselect seat → Unlock
//       setSelectedSeats(prev => prev.filter(id => id !== seatId));

//       await fetch("http://localhost:5000/api/seat/unlock", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           busBookingId,
//           seatNo: seatId,
//           sessionId,
//           journeyDate1
//         }),
//       }).catch(err => console.error("Unlock error:", err));
//     } else {
//       // 🧩 Select seat → Lock
//       setSelectedSeats(prev => [...prev, seatId]);
    
// if (femaleSeats.includes(seatId)) {
//   toast.custom(
//     (t) => (
//       <div
//         className={`flex items-center gap-3 p-3 rounded-lg shadow-md text-sm border transition-all duration-300 ${
//           t.visible ? "opacity-100" : "opacity-0"
//         } bg-pink-50 border-pink-200 text-pink-800`}
//       >
//         <AlertTriangle className="w-5 h-5 text-pink-600" />
//         <div>
//           <p className="font-semibold">Female Seat Selected</p>
//           <p className="text-xs">
//             Remember: Only female passengers or their co-passengers should book this seat.
//           </p>
//         </div>
//       </div>
//     ),
//     { duration: 4000 }
//   );
// }
//       await fetch("http://localhost:5000/api/seat/lock", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           busBookingId,
//           seatNo: seatId,
//           sessionId,
//           journeyDate1
//         }),
//       }).catch(err => console.error("Lock error:", err));
//     }
//   };
//   const calculateTotalPrice = () =>
//     selectedSeats.reduce(
//       (total, id) => total + (allSeats.find((s) => s.id === id)?.price || 0),
//       0
//     );

//   const handleContinue = () => {
//     if (!selectedDate) return;

//     const dateOnly =
//       selectedDate instanceof Date
//         ? selectedDate.toLocaleDateString("en-CA")
//         : selectedDate;

//     const stored = JSON.parse(localStorage.getItem("blockedSeats") || "{}");
//     if (!stored[busBookingId!]) stored[busBookingId!] = [];
//     stored[busBookingId!] = [...new Set([...stored[busBookingId!], ...selectedSeats])];
//     localStorage.setItem("blockedSeats", JSON.stringify(stored));

//    const selectedFemaleSeats = selectedSeats.filter((id) =>
//   femaleSeats.includes(id)
// );

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
//             packageId,
//            from,
//            femaleSeatInfo: {
//       hasFemaleSeat: selectedFemaleSeats.length > 0,
//       selectedFemaleSeats,
//     },
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
//     const seatClasses = `${base} ${isBooked
//       ? "opacity-40 grayscale cursor-not-allowed"
//       : "cursor-pointer hover:scale-105"
//       } ${isSelected && !isFemaleSeat ? "bg-blue-200 border-2 border-blue-400" : ""} ${!isSelected && isFemaleSeat ? "border-2 border-pink-400 bg-pink-100" : ""
//       } ${isSelected && isFemaleSeat ? "bg-pink-600 border-2 border-pink-700 text-white" : ""}`;

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
//               {/* Boarding */}
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

//               {/* Dropping */}
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

//below code is new i have just added female seat reservation not co-passenger


import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, AlertTriangle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import seatImg from "@/assets/seat-img.jpeg";
import { toast } from "react-hot-toast";

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
          `http://localhost:5000/api/bus/seatLayout?busId=${busBookingId}&journeyDate=${journeyDate}`
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
          fetch(`http://localhost:5000/api/bus/boardingPoints/${busBookingId}`),
          fetch(`http://localhost:5000/api/bus/droppingPoints/${busBookingId}`),
        ]);

        const boardingData = await boardingRes.json();
        const droppingData = await droppingRes.json();

        setBoardingPoints(boardingData?.boardingPoints || []);
        setDroppingPoints(droppingData?.droppingPoints || []);
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

  const [lowerBerthSeats, setLowerBerthSeats] = useState<Seat[]>([]);
  const [upperBerthSeats, setUpperBerthSeats] = useState<Seat[]>([]);

  // ✅ Build seat layout
  useEffect(() => {
    if (!selectedDate) return;
    const price = getSeatPrice(selectedDate);
    const createSeats = (prefix: string): Seat[] =>
      Array.from({ length: 18 }, (_, i) => ({
        id: `${prefix}${i + 1}`,
        price,
        isAvailable: !bookedSeats.includes(`${prefix}${i + 1}`),
        isSelected: false,
        type: i < 12 ? "seater" : "sleeper",
      }));

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

    const journeyDate1 =
      selectedDate instanceof Date ? selectedDate.toISOString().split("T")[0] : selectedDate;

    if (selectedSeats.includes(seatId)) {
      // Deselect seat
      setSelectedSeats((prev) => prev.filter((id) => id !== seatId));
      await fetch("http://localhost:5000/api/seat/unlock", {
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
              className={`flex items-center gap-3 p-3 rounded-lg shadow-md text-sm border transition-all duration-300 ${
                t.visible ? "opacity-100" : "opacity-0"
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

      await fetch("http://localhost:5000/api/seat/lock", {
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

    const base =
      "w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-md flex items-center justify-center transition-all duration-200";
    const seatClasses = `${base} ${
      isBooked
        ? "opacity-40 grayscale cursor-not-allowed"
        : "cursor-pointer hover:scale-105"
    } ${isSelected && !isFemaleSeat ? "bg-blue-200 border-2 border-blue-400" : ""} ${
      !isSelected && isFemaleSeat ? "border-2 border-pink-400 bg-pink-100" : ""
    } ${
      isSelected && isFemaleSeat ? "bg-pink-600 border-2 border-pink-700 text-white" : ""
    }`;

    return (
      <div className="relative group" onClick={() => seat.isAvailable && handleSeatClick(seat.id)}>
        <img src={seatImg} alt={seat.id} className={seatClasses} />
        <div className="text-[10px] sm:text-[11px] text-price-text mt-1 text-center">
          ₹{seat.price}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-3 sm:p-4">
        {operatorId && (
          <p className="text-xs text-blue-500 font-semibold mb-1">
            Operator ID: {operatorId}
          </p>
        )}
        {busBookingDetailsId && (
          <p className="text-sm font-semibold text-purple-600 mb-1">
            Booking Details ID: {busBookingDetailsId}
          </p>
        )}
        <h2 className="text-lg font-bold mb-4 text-[#3d85c6]">
          Trip Duration: {duration}
        </h2>

        {remainingSeats !== null && (
          <div className="text-md font-semibold text-green-600 mb-4">
            Remaining Seats: {remainingSeats}
          </div>
        )}

        {/* Responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4">
          {/* ✅ Select Seats */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Select Seats</h2>
            {seatsVisible && (
              <div className="space-y-6">
                <div className="flex flex-row gap-4 justify-center items-start flex-nowrap">

                  {/* LOWER BERTH */}
                  <div className="flex flex-col gap-2 relative w-[180px]">
                    <h3 className="text-sm font-medium text-muted-foreground">
                      LOWER BERTH ({lowerBerthSeats.length})
                    </h3>
                    <div className="border rounded-lg p-2 relative min-h-[480px]">
                      {/* Wheel at the top */}
                      <div className="flex justify-end mb-2">
                        <img
                          src="https://www.makemytrip.com/bus-mmt-next/_next/image?url=%2Fbus-mmt-next%2FsteeringWheel.png&w=48&q=75"
                          alt="Wheel"
                          className="w-6 h-6"
                        />
                      </div>
                      <div className="flex gap-1 overflow-x-auto">
                        <div className="flex flex-col gap-1">
                          {lowerBerthSeats.slice(0, 6).map((seat) => (
                            <SeatComponent key={seat.id} seat={seat} />
                          ))}
                        </div>
                        <div className="w-8 flex items-center justify-center">
                          <div className="w-3 h-full bg-red-500 flex items-center justify-center">
                            <span className="absolute text-white text-[8px] rotate-90 whitespace-nowrap">
                              GANGWAY
                            </span>
                          </div>
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
                  <div className="flex flex-col gap-2 relative w-[180px]">
                    <h3 className="text-sm font-medium text-muted-foreground">
                      UPPER BERTH ({upperBerthSeats.length})
                    </h3>
                    <div className="border rounded-lg p-2 min-h-[480px]">
                      {/* Spacer to align with lower berth wheel */}
                      <div className="h-8"></div>
                      <div className="flex gap-1 overflow-x-auto">
                        <div className="flex flex-col gap-1">
                          {upperBerthSeats.slice(0, 6).map((seat) => (
                            <SeatComponent key={seat.id} seat={seat} />
                          ))}
                        </div>
                        <div className="w-8 flex items-center justify-center">
                          <div className="w-3 h-full bg-red-500 flex items-center justify-center">
                            <span className="absolute text-white text-[8px] rotate-90 whitespace-nowrap">
                              GANGWAY
                            </span>
                          </div>
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
                <div className="w-4 h-4 bg-blue-500"></div>
                <span>Selected</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-gray-600"></div>
                <span>Booked</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-pink-500"></div>
                <span>Ladies (L)</span>
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
              {/* Boarding */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">BOARDING POINTS</h3>
                  <ChevronUp className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="max-h-64 overflow-y-auto space-y-2">
                  {boardingPoints.length > 0 ? (
                    boardingPoints.map((point, index) => (
                      <div
                        key={index}
                        className={`border rounded p-2 cursor-pointer transition-colors ${selectedBoardingPoint === index
                          ? "border-primary bg-seat-selected"
                          : "border-tab-border hover:border-primary"
                          }`}
                        onClick={() => setSelectedBoardingPoint(index)}
                      >
                        <div className="font-medium text-xs">{point.Time}</div>
                        <div className="font-semibold text-sm">{point.AreaName}</div>
                        <div className="text-xs text-pickup-text mt-1">
                          {point.PointName}
                        </div>
                        <div className="text-xs text-pickup-text">{point.Pincode}</div>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-gray-400">
                      No boarding points found
                    </p>
                  )}
                </div>
              </div>

              {/* Dropping */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">DROP POINTS</h3>
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="max-h-64 overflow-y-auto space-y-2">
                  {droppingPoints.length > 0 ? (
                    droppingPoints.map((point, index) => (
                      <div
                        key={index}
                        className={`border rounded p-2 cursor-pointer transition-colors ${selectedDropPoint === index
                          ? "border-primary bg-seat-selected"
                          : "border-tab-border hover:border-primary"
                          }`}
                        onClick={() => setSelectedDropPoint(index)}
                      >
                        <div className="font-medium text-xs">{point.Time}</div>
                        <div className="font-semibold text-sm">{point.AreaName}</div>
                        <div className="text-xs text-pickup-text mt-1">
                          {point.PointName}
                        </div>
                        <div className="text-xs text-pickup-text">{point.Pincode}</div>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-gray-400">
                      No dropping points found
                    </p>
                  )}
                </div>
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


