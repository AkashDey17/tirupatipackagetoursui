// import React, { useEffect, useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { ChevronDown, ChevronUp } from 'lucide-react';
// import { useNavigate, useLocation } from 'react-router-dom';

// interface Seat {
//   id: string;
//   price: number;
//   isAvailable: boolean;
//   isSelected: boolean;
//   type: 'seater' | 'sleeper';
// }

// interface BusLayoutProps {
//   duration: string;


// }

// const BusLayout: React.FC<BusLayoutProps> = ({ duration }) => {
//   const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
//   const [hoveredSeat, setHoveredSeat] = useState<{ seat: Seat; x: number; y: number } | null>(null);
//   const [seatsVisible, setSeatsVisible] = useState(true);
//   const [selectedBoardingPoint, setSelectedBoardingPoint] = useState<number | null>(null);
//   const [selectedDropPoint, setSelectedDropPoint] = useState<number | null>(null);
//   const [bookedSeats, setBookedSeats] = useState<string[]>([]);
//   const [remainingSeats, setRemainingSeats] = useState<number | null>(null);
//   const [seats, setSeats] = useState<Seat[]>([]);
// const [basePrice, setBasePrice] = useState<number>(0);

//   const navigate = useNavigate();
//   const location = useLocation();

//   // ✅ Get dynamic busId from URL or fallback
//   const queryParams = new URLSearchParams(location.search);
//   const busIdFromUrl = queryParams.get("busId");
//   const selectedBusId = busIdFromUrl ? Number(busIdFromUrl) : 1;

  
// // useEffect(() => {
// //   if (!selectedBusId) return;

// //   // ✅ Define a reusable function so we can call it again if seats were updated
// //   const fetchSeats = () => {
// //     fetch(`http://localhost:5000/api/bus/bookedSeats?busId=${selectedBusId}`)
// //       .then((res) => res.json())
// //       .then((data) => {
// //         if (data.success) {
// //           console.log('🎟️ Booked seats from API:', data);
// //           if (Array.isArray(data.bookedSeats)) setBookedSeats(data.bookedSeats);
// //           if (typeof data.remainingSeats === 'number') setRemainingSeats(data.remainingSeats);
// //         } else {
// //           console.error('Error fetching seats:', data.message);
// //         }
// //       })
// //       .catch((err) => console.error('Error loading seat data:', err));
// //   };

// //   // ✅ Initial fetch
// //   fetchSeats();

// //   // ✅ Check if seats were updated (after payment)
// //   const seatUpdateFlag = localStorage.getItem("seatsUpdated");
// //   if (seatUpdateFlag === "true") {
// //     console.log("🔁 Seats updated in DB, refreshing UI...");
// //     fetchSeats(); // refresh UI
// //     localStorage.removeItem("seatsUpdated"); // clear flag
// //   }
// // }, [selectedBusId]);
    
// useEffect(() => {
//   const fetchSeatLayout = async () => {
//     try {
//       const res = await fetch(`http://localhost:5000/api/bus/seatLayout?busId=${selectedBusId}`);
//       const data = await res.json();
//       if (data.success) {
//         console.log("🪑 Seat Layout API:", data);
//         setSeats(data.seatLayout);
//         setBasePrice(data.price);
//         setBookedSeats(data.bookedSeats || []);
//         setRemainingSeats(data.remainingSeats);
//       }
//     } catch (err) {
//       console.error("Error fetching seat layout:", err);
//     }
//   };

//   fetchSeatLayout();

//   // 🔁 Re-fetch if seats were updated after booking
//   const seatUpdateFlag = localStorage.getItem("seatsUpdated");
//   if (seatUpdateFlag === "true") {
//     console.log("🔁 Seats updated, refreshing UI...");
//     fetchSeatLayout();
//     localStorage.removeItem("seatsUpdated");
//   }
// }, [selectedBusId]);







// const lowerBerthSeats: Seat[] = Array.from({ length: 18 }, (_, i) => ({
//     id: `L${i + 1}`,
//     price: 599 + (i % 6) * 100,
//     isAvailable: true,
//     isSelected: false,
//     type: i < 12 ? 'seater' : 'sleeper',
//   }));

// const upperBerthSeats: Seat[] = Array.from({ length: 18 }, (_, i) => ({
//     id: `U${i + 1}`,
//     price: 699 + (i % 6) * 100,
//     isAvailable: true,
//     isSelected: false,
//     type: i < 12 ? 'seater' : 'sleeper',
//   }));

//   const allSeats = [...lowerBerthSeats, ...upperBerthSeats].map((seat) => ({
//     ...seat,
//     isAvailable: !Array.isArray(bookedSeats) ? true : !bookedSeats.includes(seat.id),
//   }));

//   const [femaleSeatId] = useState(() => {
//     const availableSeats = allSeats.filter((s) => s.isAvailable);
//     const randomSeat = availableSeats[Math.floor(Math.random() * availableSeats.length)];
//     return randomSeat?.id || '';
//   });

//   const handleSeatClick = (seatId: string) => {
//     if (!allSeats.find((s) => s.id === seatId)?.isAvailable) return;
//     if (selectedSeats.includes(seatId)) {
//       setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
//     } else {
//       setSelectedSeats([...selectedSeats, seatId]);
//     }
//   };

//   const handleBoardingPointSelect = (index: number) => setSelectedBoardingPoint(index);
//   const handleDropPointSelect = (index: number) => setSelectedDropPoint(index);

//   const calculateTotalPrice = () =>
//     selectedSeats.reduce((total, seatId) => {
//       const seat = allSeats.find((s) => s.id === seatId);
//       return total + (seat?.price || 0);
//     }, 0);

//   const isFormComplete =
//     selectedSeats.length > 0 && selectedBoardingPoint !== null && selectedDropPoint !== null;

//   const boardingPoints = [
//     {
//       time: '21:15, 06 SEP',
//       name: 'Morigate',
//       address: 'Shop no A-5 morigate golchakkar mother dairy infront of dispensary',
//       contact: '8604875557',
//       phone: '9319121024',
//     },
//     {
//       time: '21:30, 06 SEP',
//       name: 'ISBT Kashmiri Gate',
//       address: 'Morigate golchakkar',
//       contact: '8604875557',
//       phone: '9044266660',
//     },
//     {
//       time: '22:00, 06 SEP',
//       name: 'Akshardham Metro Station',
//       address: 'Yamuna bank metro Station',
//       contact: '8604875557',
//       phone: '9044266660',
//     },
//     {
//       time: '22:30, 06 SEP',
//       name: 'NOIDA 0 POINT NEAR PARICHOUK',
//       address: 'NOIDA 0 POINT',
//       contact: '8604875557',
//       phone: '9044266660',
//     },
//   ];

//   const droppingPoints = [
//     {
//       time: '03:45, 07 SEP',
//       name: 'Kanpur',
//       address: 'Ramadevi Chauraha Kanpur',
//       contact: '7439049009',
//       phone: '7408713009',
//     },
//   ];

//   const SeatComponent = ({ seat }: { seat: Seat }) => {
//     const isSelected = selectedSeats.includes(seat.id);

//     const availableImg =
//       'https://www.makemytrip.com/bus-mmt-next/_next/image?url=%2Fbus-mmt-next%2FSleeper_Available.png&w=64&q=75';
//     const selectedImg =
//       'https://www.makemytrip.com/bus-mmt-next/_next/image?url=%2Fbus-mmt-next%2FSleeper_Selected.png&w=64&q=75';
//     const blockedImg =
//       'https://www.makemytrip.com/bus-mmt-next/_next/image?url=%2Fbus-mmt-next%2FSleeper_Unavailable_Male.png&w=64&q=75';
//     const femaleImg =
//       'https://www.makemytrip.com/bus-mmt-next/_next/image?url=%2Fbus-mmt-next%2FSleeper_Available_Female.png&w=64&q=75';

//     let seatImage = availableImg;
//     if (!seat.isAvailable) seatImage = blockedImg;
//     else if (seat.id === femaleSeatId) seatImage = femaleImg;
//     if (isSelected) seatImage = selectedImg;

//     const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//       const rect = (e.target as HTMLDivElement).getBoundingClientRect();
//       setHoveredSeat({ seat, x: rect.right, y: rect.top });
//     };

//     return (
//       <div
//         className={`relative cursor-pointer transition-all duration-300 ${
//           !seat.isAvailable ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
//         }`}
//         onClick={() => seat.isAvailable && handleSeatClick(seat.id)}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={() => setHoveredSeat(null)}
//       >
//         <img
//           src={seatImage}
//           alt={seat.id}
//           className={`w-20 h-20 object-contain mx-auto transition-transform duration-300 ${
//             isSelected ? 'scale-110' : 'scale-100'
//           }`}
//         />
//         <div className="text-[11px] text-price-text mt-1 text-center">₹{seat.price}</div>
//       </div>
//     );
//   };

//   // const handleContinue = () => {
//   //   if (!isFormComplete) return;

//   //   const bookingData = {
//   //     busId: selectedBusId,
//   //     selectedSeats,
//   //     totalPrice: calculateTotalPrice(),
//   //     boardingPoint: boardingPoints[selectedBoardingPoint!],
//   //     droppingPoint: droppingPoints[selectedDropPoint!],
//   //     duration,
//   //   };

//   //   localStorage.setItem('bookingData', JSON.stringify(bookingData));
//   //   console.log('🧾 Saved booking data:', bookingData);

//   //   navigate('/booking-details', {
//   //     state: bookingData,
//   //   });
//   // };

//   const handleContinue = () => {
//   if (!isFormComplete) {
//     // helpful feedback
//     console.warn("Form incomplete: selectedSeats, boarding or drop not selected");
//     return;
//   }

//   const bookingData = {
//     busId: selectedBusId,
//     selectedSeats,
//     totalPrice: calculateTotalPrice(),
//     boardingPoint: boardingPoints[selectedBoardingPoint!],
//     droppingPoint: droppingPoints[selectedDropPoint!],
//     duration,
//   };

//   // DEBUG: show what we are saving
//   console.log("📦 bookingData to save:", bookingData);

//   // Save to localStorage (this MUST be synchronous)
//   localStorage.setItem("bookingData", JSON.stringify(bookingData));

//   // Confirm saved value (read back immediately)
//   console.log("✅ bookingData saved:", localStorage.getItem("bookingData"));

//   // Navigate to booking-details
//   navigate("/booking-details", { state: bookingData });
// };

//   return (
//     <div className="min-h-screen bg-background">
//       <div className="max-w-7xl mx-auto p-4">


//         <h2 className="text-lg font-bold mb-4 text-[#3d85c6]">
//           Trip Duration: {duration}
//         </h2>

//         {remainingSeats !== null && (
//           <div className="text-md font-semibold text-green-600 mb-4">
//             Remaining Seats: {remainingSeats}
//           </div>
//         )}

//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <h2 className="text-lg font-semibold mb-4">Select Seats</h2>
//             {seatsVisible && (
//               <div className="space-y-6">
//                 <div className="flex gap-10">
//                   <div className="flex flex-col gap-2 relative">
//                     <h3 className="text-sm font-medium text-muted-foreground">
//                       LOWER BERTH ({lowerBerthSeats.length})
//                     </h3>
//                     <div className="border rounded-lg p-6 relative min-h-[480px]" style={{ paddingTop: '38px' }}>
//                       <img
//                         src="https://www.makemytrip.com/bus-mmt-next/_next/image?url=%2Fbus-mmt-next%2FsteeringWheel.png&w=48&q=75"
//                         alt="Wheel Icon"
//                         className="w-6 h-6 absolute top-2 right-3"
//                       />
//                       <div className="flex gap-4">
//                         <div className="flex flex-col gap-5">
//                           {allSeats.filter(s => s.id.startsWith('L')).slice(0, 6).map(seat => (
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
//                         <div className="grid grid-cols-2 gap-5">
//                           {allSeats.filter(s => s.id.startsWith('L')).slice(6, 18).map(seat => (
//                             <SeatComponent key={seat.id} seat={seat} />
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex flex-col gap-2">
//                     <h3 className="text-sm font-medium text-muted-foreground">
//                       UPPER BERTH ({upperBerthSeats.length})
//                     </h3>
//                     <div className="border rounded-lg p-4" style={{ paddingTop: '38px', minHeight: '480px' }}>
//                       <div className="flex gap-4">
//                         <div className="flex flex-col gap-5">
//                           {allSeats.filter(s => s.id.startsWith('U')).slice(0, 6).map(seat => (
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
//                         <div className="grid grid-cols-2 gap-5">
//                           {allSeats.filter(s => s.id.startsWith('U')).slice(6, 18).map(seat => (
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

//           <div>
//             <h2 className="text-lg font-semibold mb-4">Select Pickup & Drop Points</h2>
//             <div className="grid grid-cols-2 gap-4">
//               <div className="space-y-2 text-sm">
//                 <div className="flex items-center justify-between mb-2">
//                   <h3 className="font-medium">BOARDING POINTS</h3>
//                   <ChevronUp className="w-4 h-4 text-muted-foreground" />
//                 </div>
//                 <div className="max-h-64 overflow-y-auto space-y-2">
//                   {boardingPoints.map((point, index) => (
//                     <div
//                       key={index}
//                       className={`border rounded p-2 cursor-pointer transition-colors ${
//                         selectedBoardingPoint === index
//                           ? 'border-primary bg-seat-selected'
//                           : 'border-tab-border hover:border-primary'
//                       }`}
//                       onClick={() => handleBoardingPointSelect(index)}
//                     >
//                       <div className="font-medium text-xs">{point.time}</div>
//                       <div className="font-semibold text-sm">{point.name}</div>
//                       <div className="text-xs text-pickup-text mt-1">{point.address}</div>
//                       <div className="text-xs text-pickup-text">{point.contact}</div>
//                       <div className="text-xs text-pickup-text">{point.phone}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="space-y-2 text-sm">
//                 <div className="flex items-center justify-between mb-2">
//                   <h3 className="font-medium">DROP POINTS</h3>
//                   <ChevronDown className="w-4 h-4 text-muted-foreground" />
//                 </div>
//                 <div className="space-y-2">
//                   {droppingPoints.map((point, index) => (
//                     <div
//                       key={index}
//                       className={`border rounded p-2 cursor-pointer transition-colors ${
//                         selectedDropPoint === index
//                           ? 'border-primary bg-seat-selected'
//                           : 'border-tab-border hover:border-primary'
//                       }`}
//                       onClick={() => handleDropPointSelect(index)}
//                     >
//                       <div className="font-medium text-xs">{point.time}</div>
//                       <div className="font-semibold text-sm">{point.name}</div>
//                       <div className="text-xs text-pickup-text mt-1">{point.address}</div>
//                       <div className="text-xs text-pickup-text">{point.contact}</div>
//                       <div className="text-xs text-pickup-text">{point.phone}</div>
//                     </div>
//                   ))}
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

//         <div className="mt-8">
//           <h2 className="text-lg font-semibold mb-4">Know your seats</h2>
//           <div className="text-center py-8 text-muted-foreground">
//             {selectedSeats.length > 0 ? (
//               <div>
//                 <p className="mb-2">Selected Seats:</p>
//                 <div className="space-y-1">
//                   {selectedSeats.map((seatId) => {
//                     const seat = allSeats.find((s) => s.id === seatId);
//                     return (
//                       <div key={seatId} className="text-sm">
//                         {seatId} - ₹{seat?.price}
//                       </div>
//                     );
//                   })}
//                 </div>
//                 <div className="mt-4 p-3 bg-muted rounded">
//                   <div className="font-semibold text-lg">Total: ₹{calculateTotalPrice()}</div>
//                   <div className="text-xs text-muted-foreground">
//                     {selectedSeats.length} seat
//                     {selectedSeats.length > 1 ? 's' : ''} selected
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <p>Select a seat to see details</p>
//             )}
//           </div>
//         </div>

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
//                   {hoveredSeat.seat.id === femaleSeatId ? 'Female Seat' : 'Seat Details'}
//                 </div>
//                 <div>
//                   <span className="font-semibold">Seat No:</span> {hoveredSeat.seat.id}
//                 </div>
//                 <div>
//                   <span className="font-semibold">Seat Type:</span> {hoveredSeat.seat.type}
//                 </div>
//                 <div>
//                   <span className="font-semibold">Base Fare:</span> ₹{hoveredSeat.seat.price}
//                 </div>
//                 <div>
//                   <span className="font-semibold">Discount:</span> ₹
//                   {Math.floor(hoveredSeat.seat.price * 0.1)}
//                 </div>
//                 <div>
//                   <span className="font-semibold">Net Base Fare:</span> ₹
//                   {hoveredSeat.seat.price - Math.floor(hoveredSeat.seat.price * 0.1)}
//                 </div>
//                 <div>
//                   <span className="font-semibold">GST:</span> ₹20
//                 </div>
//                 <div>
//                   <span className="font-semibold">Total Fare:</span> ₹
//                   {hoveredSeat.seat.price - Math.floor(hoveredSeat.seat.price * 0.1) + 20}
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


// import React, { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { ChevronDown, ChevronUp } from "lucide-react";
// import { useNavigate, useLocation } from "react-router-dom";

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
// }

// const BusLayout: React.FC<BusLayoutProps> = ({ duration }) => {
//   const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
//   const [hoveredSeat, setHoveredSeat] = useState<{ seat: Seat; x: number; y: number } | null>(null);
//   const [seatsVisible, setSeatsVisible] = useState(true);
//   const [selectedBoardingPoint, setSelectedBoardingPoint] = useState<number | null>(null);
//   const [selectedDropPoint, setSelectedDropPoint] = useState<number | null>(null);
//   const [bookedSeats, setBookedSeats] = useState<string[]>([]);
//   const [remainingSeats, setRemainingSeats] = useState<number | null>(null);
//   const [seats, setSeats] = useState<Seat[]>([]);
//   const [basePrice, setBasePrice] = useState<number>(0);
//   const [boardingPoints, setBoardingPoints] = useState<BoardingDroppingPoint[]>([]);
//   const [droppingPoints, setDroppingPoints] = useState<BoardingDroppingPoint[]>([]);

//   const navigate = useNavigate();
//   const location = useLocation();

//   const queryParams = new URLSearchParams(location.search);
//   const busIdFromUrl = queryParams.get("busId");
//   const selectedBusId = busIdFromUrl ? Number(busIdFromUrl) : 1;

//   // ✅ Fetch seat layout from DB
//   useEffect(() => {
//     const fetchSeatLayout = async () => {
//       try {
//         const res = await fetch(`http://localhost:5000/api/bus/seatLayout?busId=${selectedBusId}`);
//         const data = await res.json();
//         if (data.success) {
//           setSeats(data.seatLayout);
//           setBasePrice(data.price);
//           setBookedSeats(data.bookedSeats || []);
//           setRemainingSeats(data.remainingSeats);
//         }
//       } catch (err) {
//         console.error("Error fetching seat layout:", err);
//       }
//     };

//     fetchSeatLayout();

//     const seatUpdateFlag = localStorage.getItem("seatsUpdated");
//     if (seatUpdateFlag === "true") {
//       fetchSeatLayout();
//       localStorage.removeItem("seatsUpdated");
//     }
//   }, [selectedBusId]);

//   // ✅ Fetch Boarding & Dropping Points from API (exact DB timings)
  
// useEffect(() => {
//   if (!selectedBusId) return;

//   const fetchPoints = async () => {
//     try {
//       const [boardingRes, droppingRes] = await Promise.all([
//         fetch(`http://localhost:5000/api/bus/boardingPoints/${selectedBusId}`),
//         fetch(`http://localhost:5000/api/bus/droppingPoints/${selectedBusId}`)
//       ]);

//       if (!boardingRes.ok) throw new Error(`Boarding fetch failed: ${boardingRes.status}`);
//       if (!droppingRes.ok) throw new Error(`Dropping fetch failed: ${droppingRes.status}`);

//       const boardingData = await boardingRes.json();
//       const droppingData = await droppingRes.json();

//       console.log("✅ Boarding API response:", boardingData);
//       console.log("✅ Dropping API response:", droppingData);

//       // ✅ Safely access fields, accounting for missing/null values
//       const boarding = boardingData?.boardingPoints ?? [];
//       const dropping = droppingData?.droppingPoints ?? [];

//       setBoardingPoints(Array.isArray(boarding) ? boarding : []);
//       setDroppingPoints(Array.isArray(dropping) ? dropping : []);
//     } catch (err) {
//       console.error("❌ Error fetching boarding/dropping points:", err);
//       setBoardingPoints([]);
//       setDroppingPoints([]);
//     }
//   };

//   fetchPoints();
// }, [selectedBusId]);



//   // ✅ Seat layout generation
//   const lowerBerthSeats: Seat[] = Array.from({ length: 18 }, (_, i) => ({
//     id: `L${i + 1}`,
//     price: 599 + (i % 6) * 100,
//     isAvailable: true,
//     isSelected: false,
//     type: i < 12 ? "seater" : "sleeper",
//   }));

//   const upperBerthSeats: Seat[] = Array.from({ length: 18 }, (_, i) => ({
//     id: `U${i + 1}`,
//     price: 699 + (i % 6) * 100,
//     isAvailable: true,
//     isSelected: false,
//     type: i < 12 ? "seater" : "sleeper",
//   }));

//   const allSeats = [...lowerBerthSeats, ...upperBerthSeats].map((seat) => ({
//     ...seat,
//     isAvailable: !Array.isArray(bookedSeats) ? true : !bookedSeats.includes(seat.id),
//   }));

//   const [femaleSeatId] = useState(() => {
//     const availableSeats = allSeats.filter((s) => s.isAvailable);
//     const randomSeat = availableSeats[Math.floor(Math.random() * availableSeats.length)];
//     return randomSeat?.id || "";
//   });

//   const handleSeatClick = (seatId: string) => {
//     if (!allSeats.find((s) => s.id === seatId)?.isAvailable) return;
//     if (selectedSeats.includes(seatId)) {
//       setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
//     } else {
//       setSelectedSeats([...selectedSeats, seatId]);
//     }
//   };

//   const handleBoardingPointSelect = (index: number) => setSelectedBoardingPoint(index);
//   const handleDropPointSelect = (index: number) => setSelectedDropPoint(index);

//   const calculateTotalPrice = () =>
//     selectedSeats.reduce((total, seatId) => {
//       const seat = allSeats.find((s) => s.id === seatId);
//       return total + (seat?.price || 0);
//     }, 0);

//   const isFormComplete =
//     selectedSeats.length > 0 && selectedBoardingPoint !== null && selectedDropPoint !== null;

//   const SeatComponent = ({ seat }: { seat: Seat }) => {
//     const isSelected = selectedSeats.includes(seat.id);
//     const availableImg =
//       "https://www.makemytrip.com/bus-mmt-next/_next/image?url=%2Fbus-mmt-next%2FSleeper_Available.png&w=64&q=75";
//     const selectedImg =
//       "https://www.makemytrip.com/bus-mmt-next/_next/image?url=%2Fbus-mmt-next%2FSleeper_Selected.png&w=64&q=75";
//     const blockedImg =
//       "https://www.makemytrip.com/bus-mmt-next/_next/image?url=%2Fbus-mmt-next%2FSleeper_Unavailable_Male.png&w=64&q=75";
//     const femaleImg =
//       "https://www.makemytrip.com/bus-mmt-next/_next/image?url=%2Fbus-mmt-next%2FSleeper_Available_Female.png&w=64&q=75";

//     let seatImage = availableImg;
//     if (!seat.isAvailable) seatImage = blockedImg;
//     else if (seat.id === femaleSeatId) seatImage = femaleImg;
//     if (isSelected) seatImage = selectedImg;

//     const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//       const rect = (e.target as HTMLDivElement).getBoundingClientRect();
//       setHoveredSeat({ seat, x: rect.right, y: rect.top });
//     };

//     return (
//       <div
//         className={`relative cursor-pointer transition-all duration-300 ${
//           !seat.isAvailable ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
//         }`}
//         onClick={() => seat.isAvailable && handleSeatClick(seat.id)}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={() => setHoveredSeat(null)}
//       >
//         <img
//           src={seatImage}
//           alt={seat.id}
//           className={`w-20 h-20 object-contain mx-auto transition-transform duration-300 ${
//             isSelected ? "scale-110" : "scale-100"
//           }`}
//         />
//         <div className="text-[11px] text-price-text mt-1 text-center">₹{seat.price}</div>
//       </div>
//     );
//   };

//   const handleContinue = () => {
//     if (!isFormComplete) return;

//     const bookingData = {
//       busId: selectedBusId,
//       selectedSeats,
//       totalPrice: calculateTotalPrice(),
//       boardingPoint: boardingPoints[selectedBoardingPoint!],
//       droppingPoint: droppingPoints[selectedDropPoint!],
//       duration,
//     };

//     localStorage.setItem("bookingData", JSON.stringify(bookingData));
//     navigate("/booking-details", { state: bookingData });
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <div className="max-w-7xl mx-auto p-4">
//         <h2 className="text-lg font-bold mb-4 text-[#3d85c6]">Trip Duration: {duration}</h2>

//         {remainingSeats !== null && (
//           <div className="text-md font-semibold text-green-600 mb-4">
//             Remaining Seats: {remainingSeats}
//           </div>
//         )}

//         <div className="grid grid-cols-2 gap-4">
//           {/* ---------- Seat Selection Section ---------- */}
//           <div>
//             <h2 className="text-lg font-semibold mb-4">Select Seats</h2>
//             {seatsVisible && (
//               <div className="space-y-6">
//                 <div className="flex gap-10">
//                   {/* Lower Berth */}
//                   <div className="flex flex-col gap-2 relative">
//                     <h3 className="text-sm font-medium text-muted-foreground">
//                       LOWER BERTH ({lowerBerthSeats.length})
//                     </h3>
//                     <div className="border rounded-lg p-6 relative min-h-[480px]" style={{ paddingTop: "38px" }}>
//                       <img
//                         src="https://www.makemytrip.com/bus-mmt-next/_next/image?url=%2Fbus-mmt-next%2FsteeringWheel.png&w=48&q=75"
//                         alt="Wheel Icon"
//                         className="w-6 h-6 absolute top-2 right-3"
//                       />
//                       <div className="flex gap-4">
//                         <div className="flex flex-col gap-5">
//                           {allSeats.filter((s) => s.id.startsWith("L")).slice(0, 6).map((seat) => (
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
//                         <div className="grid grid-cols-2 gap-5">
//                           {allSeats.filter((s) => s.id.startsWith("L")).slice(6, 18).map((seat) => (
//                             <SeatComponent key={seat.id} seat={seat} />
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Upper Berth */}
//                   <div className="flex flex-col gap-2">
//                     <h3 className="text-sm font-medium text-muted-foreground">
//                       UPPER BERTH ({upperBerthSeats.length})
//                     </h3>
//                     <div className="border rounded-lg p-4" style={{ paddingTop: "38px", minHeight: "480px" }}>
//                       <div className="flex gap-4">
//                         <div className="flex flex-col gap-5">
//                           {allSeats.filter((s) => s.id.startsWith("U")).slice(0, 6).map((seat) => (
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
//                         <div className="grid grid-cols-2 gap-5">
//                           {allSeats.filter((s) => s.id.startsWith("U")).slice(6, 18).map((seat) => (
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

//           {/* ---------- Boarding & Dropping Section ---------- */}
//           <div>
//             <h2 className="text-lg font-semibold mb-4">Select Pickup & Drop Points</h2>
//             <div className="grid grid-cols-2 gap-4">
//               {/* Boarding Points */}
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
//                         className={`border rounded p-2 cursor-pointer transition-colors ${
//                           selectedBoardingPoint === index
//                             ? "border-primary bg-seat-selected"
//                             : "border-tab-border hover:border-primary"
//                         }`}
//                         onClick={() => handleBoardingPointSelect(index)}
//                       >
//                         <div className="font-medium text-xs">{point.Time}</div>
//                         <div className="font-semibold text-sm">{point.PointName}</div>
//                         <div className="text-xs text-pickup-text mt-1">{point.AreaName}</div>
//                         <div className="text-xs text-pickup-text">{point.Pincode}</div>
//                       </div>
//                     ))
//                   ) : (
//                     <p className="text-xs text-gray-400">No boarding points found</p>
//                   )}
//                 </div>
//               </div>

//               {/* Dropping Points */}
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
//                         className={`border rounded p-2 cursor-pointer transition-colors ${
//                           selectedDropPoint === index
//                             ? "border-primary bg-seat-selected"
//                             : "border-tab-border hover:border-primary"
//                         }`}
//                         onClick={() => handleDropPointSelect(index)}
//                       >
//                         <div className="font-medium text-xs">{point.Time}</div>
//                         <div className="font-semibold text-sm">{point.PointName}</div>
//                         <div className="text-xs text-pickup-text mt-1">{point.AreaName}</div>
//                         <div className="text-xs text-pickup-text">{point.Pincode}</div>
//                       </div>
//                     ))
//                   ) : (
//                     <p className="text-xs text-gray-400">No dropping points found</p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             <div className="border-t border-tab-border pt-4 mt-4">
//               <Button className="w-full" disabled={!isFormComplete} size="lg" onClick={handleContinue}>
//                 CONTINUE
//               </Button>
//             </div>
//           </div>
//         </div>

//         {/* ---------- Selected Seats Summary ---------- */}
//         <div className="mt-8">
//           <h2 className="text-lg font-semibold mb-4">Know your seats</h2>
//           <div className="text-center py-8 text-muted-foreground">
//             {selectedSeats.length > 0 ? (
//               <div>
//                 <p className="mb-2">Selected Seats:</p>
//                 <div className="space-y-1">
//                   {selectedSeats.map((seatId) => {
//                     const seat = allSeats.find((s) => s.id === seatId);
//                     return (
//                       <div key={seatId} className="text-sm">
//                         {seatId} - ₹{seat?.price}
//                       </div>
//                     );
//                   })}
//                 </div>
//                 <div className="mt-4 p-3 bg-muted rounded">
//                   <div className="font-semibold text-lg">Total: ₹{calculateTotalPrice()}</div>
//                   <div className="text-xs text-muted-foreground">
//                     {selectedSeats.length} seat
//                     {selectedSeats.length > 1 ? "s" : ""} selected
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <p>Select a seat to see details</p>
//             )}
//           </div>
//         </div>

//         {/* ---------- Seat Tooltip ---------- */}
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
//                 <div>
//                   <span className="font-semibold">Seat No:</span> {hoveredSeat.seat.id}
//                 </div>
//                 <div>
//                   <span className="font-semibold">Type:</span> {hoveredSeat.seat.type}
//                 </div>
//                 <div>
//                   <span className="font-semibold">Price:</span> ₹{hoveredSeat.seat.price}
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
import { ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

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
}

const BusLayout: React.FC<BusLayoutProps> = ({ duration,selectedDate }) => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [hoveredSeat, setHoveredSeat] = useState<{ seat: Seat; x: number; y: number } | null>(null);
  const [seatsVisible, setSeatsVisible] = useState(true);
  const [selectedBoardingPoint, setSelectedBoardingPoint] = useState<number | null>(null);
  const [selectedDropPoint, setSelectedDropPoint] = useState<number | null>(null);
  const [bookedSeats, setBookedSeats] = useState<string[]>([]);
  const [remainingSeats, setRemainingSeats] = useState<number | null>(null);
  const [basePrice, setBasePrice] = useState<number>(0);
  const [boardingPoints, setBoardingPoints] = useState<BoardingDroppingPoint[]>([]);
  const [droppingPoints, setDroppingPoints] = useState<BoardingDroppingPoint[]>([]);
  const [busBookingId, setBusBookingId] = useState<number | null>(null);

  const navigate = useNavigate();
  const location = useLocation();
  
 const queryParams = new URLSearchParams(location.search);
  const busIdFromUrl = queryParams.get("busId");
  const selectedBusId = busIdFromUrl ? Number(busIdFromUrl) : null;

  // ✅ Fetch bus details if no busId in URL
  useEffect(() => {
    const fetchBusDetails = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/bus-details");
        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          const firstBus = data[0];
          if (firstBus?.BusBooKingDetailID) {
            console.log("✅ Using BusBookingDetailID:", firstBus.BusBooKingDetailID);
            setBusBookingId(firstBus.BusBooKingDetailID);
          }
        } else if (data?.BusBooKingDetailID) {
          setBusBookingId(data.BusBooKingDetailID);
        }
      } catch (err) {
        console.error("❌ Error fetching bus details:", err);
      }
    };

    if (!selectedBusId) {
      fetchBusDetails();
    } else {
      setBusBookingId(selectedBusId);
    }
  }, [selectedBusId]);

  // ✅ Fetch Seat Layout
  useEffect(() => {
    if (!busBookingId) return;

    const fetchSeatLayout = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/bus/seatLayout?busId=${busBookingId}`);
        const data = await res.json();
        if (data.success) {
          setBasePrice(data.price);
          setBookedSeats(data.bookedSeats || []);
          setRemainingSeats(data.remainingSeats);
        }
      } catch (err) {
        console.error("❌ Error fetching seat layout:", err);
      }
    };

    fetchSeatLayout();

    const seatUpdateFlag = localStorage.getItem("seatsUpdated");
    if (seatUpdateFlag === "true") {
      fetchSeatLayout();
      localStorage.removeItem("seatsUpdated");
    }
  }, [busBookingId]);

  // ✅ Fetch Boarding & Dropping Points
  useEffect(() => {
    if (!busBookingId) return;
    console.log("🔍 Fetching points for bus:", busBookingId);

    const fetchPoints = async () => {
      try {
        const [boardingRes, droppingRes] = await Promise.all([
          fetch(`http://localhost:5000/api/bus/boardingPoints/${busBookingId}`),
          fetch(`http://localhost:5000/api/bus/droppingPoints/${busBookingId}`)
        ]);

        const boardingData = await boardingRes.json();
        const droppingData = await droppingRes.json();

        console.log("✅ Boarding Points API:", boardingData);
        console.log("✅ Dropping Points API:", droppingData);

        setBoardingPoints(
          boardingData?.boardingPoints || boardingData?.data?.boardingPoints || []
        );
        setDroppingPoints(
          droppingData?.droppingPoints || droppingData?.data?.droppingPoints || []
        );
      } catch (err) {
        console.error("❌ Error fetching points:", err);
      }
    };

    fetchPoints();
  }, [busBookingId]);

  // ✅ Generate seat layout
  const lowerBerthSeats: Seat[] = Array.from({ length: 18 }, (_, i) => ({
    id: `L${i + 1}`,
    price: 599 + (i % 6) * 100,
    isAvailable: true,
    isSelected: false,
    type: i < 12 ? "seater" : "sleeper",
  }));

  const upperBerthSeats: Seat[] = Array.from({ length: 18 }, (_, i) => ({
    id: `U${i + 1}`,
    price: 699 + (i % 6) * 100,
    isAvailable: true,
    isSelected: false,
    type: i < 12 ? "seater" : "sleeper",
  }));

  const allSeats = [...lowerBerthSeats, ...upperBerthSeats].map((seat) => ({
    ...seat,
    isAvailable: !Array.isArray(bookedSeats) ? true : !bookedSeats.includes(seat.id),
  }));

  // after computing allSeats for L:
  const allLowerSeats = allSeats.filter(s => s.id.startsWith('L'));

  const rows = 6;
  const leftSideSeats = allLowerSeats.slice(0, rows);
  const rightSideSeats = allLowerSeats.slice(rows, rows + rows * 2);

  const allUpperSeats = allSeats.filter(s => s.id.startsWith('U'));

  const upperLeftSeats = allUpperSeats.slice(0, rows);
  const upperRightSeats = allUpperSeats.slice(rows, rows + rows * 2);


  const [femaleSeatId] = useState(() => {
    const availableSeats = allSeats.filter((s) => s.isAvailable);
    const randomSeat = availableSeats[Math.floor(Math.random() * availableSeats.length)];
    return randomSeat?.id || '';
  });

  const handleSeatClick = (seatId: string) => {
    const seat = allSeats.find((s) => s.id === seatId);
    if (!seat?.isAvailable) return;
    setSelectedSeats((prev) =>
      prev.includes(seatId) ? prev.filter((id) => id !== seatId) : [...prev, seatId]
    );
  };

  const calculateTotalPrice = () =>
    selectedSeats.reduce((total, seatId) => {
      const seat = allSeats.find((s) => s.id === seatId);
      return total + (seat?.price || 0);
    }, 0);

  const handleBoardingPointSelect = (index: number) => setSelectedBoardingPoint(index);
  const handleDropPointSelect = (index: number) => setSelectedDropPoint(index);

  const isFormComplete =
    selectedSeats.length > 0 && selectedBoardingPoint !== null && selectedDropPoint !== null;

  const handleContinue = () => {
    if (!isFormComplete) return;
    const bookingData = {
      busId: busBookingId,
      selectedSeats,
      totalPrice: calculateTotalPrice(),
      boardingPoint: boardingPoints[selectedBoardingPoint!],
      droppingPoint: droppingPoints[selectedDropPoint!],
      duration,
    selectedDate: selectedDate ? selectedDate.toISOString() : null,
    };
    localStorage.setItem("bookingData", JSON.stringify(bookingData));
    navigate("/booking-details", { state: bookingData });
  };

  // ✅ Random Female Seat Highlight
  const [femaleSeatId] = useState(() => {
    const availableSeats = allSeats.filter((s) => s.isAvailable);
    const randomSeat = availableSeats[Math.floor(Math.random() * availableSeats.length)];
    return randomSeat?.id || "";
  });


  // ✅ Seat Component
  const SeatComponent = ({ seat }: { seat: Seat }) => {
    const isSelected = selectedSeats.includes(seat.id);
    const availableImg =
      "https://www.makemytrip.com/bus-mmt-next/_next/image?url=%2Fbus-mmt-next%2FSleeper_Available.png&w=64&q=75";
    const selectedImg =
      "https://www.makemytrip.com/bus-mmt-next/_next/image?url=%2Fbus-mmt-next%2FSleeper_Selected.png&w=64&q=75";
    const blockedImg =
      "https://www.makemytrip.com/bus-mmt-next/_next/image?url=%2Fbus-mmt-next%2FSleeper_Unavailable_Male.png&w=64&q=75";
    const femaleImg =
      "https://www.makemytrip.com/bus-mmt-next/_next/image?url=%2Fbus-mmt-next%2FSleeper_Available_Female.png&w=64&q=75";

    let seatImage = availableImg;
    if (!seat.isAvailable) seatImage = blockedImg;
    else if (seat.id === femaleSeatId) seatImage = femaleImg;
    if (isSelected) seatImage = selectedImg;

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const rect = (e.target as HTMLDivElement).getBoundingClientRect();
      setHoveredSeat({ seat, x: rect.right, y: rect.top });
    };

    return (
      <div
        className={`relative cursor-pointer transition-all duration-300 ${
          !seat.isAvailable ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
        }`}
        onClick={() => seat.isAvailable && handleSeatClick(seat.id)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setHoveredSeat(null)}
      >
        {/* <img
          src={seatImage}
          alt={seat.id}
          className={`w-[48px] h-[90px] object-contain mx-auto transition-transform duration-300 ${isSelected ? 'scale-110' : 'scale-100'
            }`}
        /> */}


        <div className="relative">
          <img
            src="src/assets/output-onlinejpgtools (1).jpg"
            alt={seat.id}
            className="w-[48px] h-[90px] object-contain mx-auto rounded-lg"
          />
          {isSelected && (
            <div className="absolute top-2 bottom-2 left-0 right-0 bg-blue-400/40 rounded-lg"></div>
          )}
          {seat.id === femaleSeatId && (
            <div className="absolute top-2 bottom-2 left-0 right-0 border-[2px] border-pink-400 rounded-lg"></div>
          )}


        </div>




        <div className="text-[11px] text-price-text mt-1 text-center">₹{seat.price}</div>
      </div>
    );
  };

  // const handleContinue = () => {
  //   if (!isFormComplete) return;

  //   const bookingData = {
  //     busId: selectedBusId,
  //     selectedSeats,
  //     totalPrice: calculateTotalPrice(),
  //     boardingPoint: boardingPoints[selectedBoardingPoint!],
  //     droppingPoint: droppingPoints[selectedDropPoint!],
  //     duration,
  //   };

  //   localStorage.setItem('bookingData', JSON.stringify(bookingData));
  //   console.log('🧾 Saved booking data:', bookingData);

  //   navigate('/booking-details', {
  //     state: bookingData,
  //   });
  // };

  const handleContinue = () => {
    if (!isFormComplete) {
      // helpful feedback
      console.warn("Form incomplete: selectedSeats, boarding or drop not selected");
      return;
    }

    const bookingData = {
      busId: selectedBusId,
      selectedSeats,
      totalPrice: calculateTotalPrice(),
      boardingPoint: boardingPoints[selectedBoardingPoint!],
      droppingPoint: droppingPoints[selectedDropPoint!],
      duration,
    };

    // DEBUG: show what we are saving
    console.log("📦 bookingData to save:", bookingData);

    // Save to localStorage (this MUST be synchronous)
    localStorage.setItem("bookingData", JSON.stringify(bookingData));

    // Confirm saved value (read back immediately)
    console.log("✅ bookingData saved:", localStorage.getItem("bookingData"));

    // Navigate to booking-details
    navigate("/booking-details", { state: bookingData });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-4">
        <h2 className="text-lg font-bold mb-4 text-[#3d85c6]">
          Trip Duration: {duration}
        </h2>

        {remainingSeats !== null && (
          <div className="text-md font-semibold text-green-600 mb-4">
            Remaining Seats: {remainingSeats}
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          {/* ✅ Seat Layout */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Select Seats</h2>
            {seatsVisible && (
              <div className="space-y-6">
                <div className="flex gap-10">
                  {/* Lower Berth */}
                  <div className="flex flex-col gap-2 relative">
                    <h3 className="text-sm font-medium text-muted-foreground">
                      LOWER BERTH ({lowerBerthSeats.length})
                    </h3>
                    <div className="border rounded-lg p-6 relative min-h-[480px]" style={{ paddingTop: "38px" }}>
                      <img
                        src="https://www.makemytrip.com/bus-mmt-next/_next/image?url=%2Fbus-mmt-next%2FsteeringWheel.png&w=48&q=75"
                        alt="Wheel Icon"
                        className="w-6 h-6 absolute top-2 right-3"
                      />
                      {/* Wrapper for left + gangway + right */}
                      <div className="flex items-stretch min-h-[480px]">
                        {/* Left side seats */}
                        <div className="grid grid-cols-1 gap-x-1 gap-y-6">
                          {leftSideSeats.map(seat => (
                            <SeatComponent key={seat.id} seat={seat} />
                          ))}
                        </div>

                        {/* Gangway divider */}
                        <div className="w-8 flex items-stretch mx-2">
                          <div className="w-4 h-full bg-red-500 flex items-center justify-center">
                            <span className="text-white text-[8px] rotate-90 whitespace-nowrap">GANGWAY</span>
                          </div>
                        </div>

                        {/* Right side seats */}
                        <div className="grid grid-cols-2 gap-x-1 gap-y-6">
                          {rightSideSeats.map(seat => (
                            <SeatComponent key={seat.id} seat={seat} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Upper Berth */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-sm font-medium text-muted-foreground">
                      UPPER BERTH ({upperBerthSeats.length})
                    </h3>
                    <div className="border rounded-lg p-4" style={{ paddingTop: '38px', minHeight: '480px' }}>
                      <div className="flex items-stretch min-h-[480px]">
                        {/* Left side seats */}
                        <div className="grid grid-cols-1 gap-x-1 gap-y-6">
                          {upperLeftSeats.map(seat => (
                            <SeatComponent key={seat.id} seat={seat} />
                          ))}
                        </div>

                        {/* Gangway divider */}
                        <div className="w-8 flex items-stretch mx-2">
                          <div className="w-4 h-full bg-red-500 flex items-center justify-center">
                            <span className="text-white text-[8px] rotate-90 whitespace-nowrap">GANGWAY</span>
                          </div>
                        </div>

                        {/* Right side seats */}
                        <div className="grid grid-cols-2 gap-x-1 gap-y-6">
                          {upperRightSeats.map(seat => (
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

          {/* ✅ Boarding & Dropping */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Select Pickup & Drop Points</h2>
            <div className="grid grid-cols-2 gap-4">
              {/* Boarding Points */}
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
                        className={`border rounded p-2 cursor-pointer transition-colors ${
                          selectedBoardingPoint === index
                            ? "border-primary bg-seat-selected"
                            : "border-tab-border hover:border-primary"
                        }`}
                        onClick={() => handleBoardingPointSelect(index)}
                      >
                        <div className="font-medium text-xs">{point.Time}</div>
                        <div className="font-semibold text-sm">{point.PointName}</div>
                        <div className="text-xs text-pickup-text mt-1">{point.AreaName}</div>
                        <div className="text-xs text-pickup-text">{point.Pincode}</div>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-gray-400">No boarding points found</p>
                  )}
                </div>
              </div>

              {/* Dropping Points */}
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
                        className={`border rounded p-2 cursor-pointer transition-colors ${
                          selectedDropPoint === index
                            ? "border-primary bg-seat-selected"
                            : "border-tab-border hover:border-primary"
                        }`}
                        onClick={() => handleDropPointSelect(index)}
                      >
                        <div className="font-medium text-xs">{point.Time}</div>
                        <div className="font-semibold text-sm">{point.PointName}</div>
                        <div className="text-xs text-pickup-text mt-1">{point.AreaName}</div>
                        <div className="text-xs text-pickup-text">{point.Pincode}</div>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-gray-400">No dropping points found</p>
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

        {/* ✅ Seat Tooltip */}
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
                  {hoveredSeat.seat.id === femaleSeatId ? "Female Seat" : "Seat Details"}
                </div>
                <div>
                  <span className="font-semibold">Seat No:</span> {hoveredSeat.seat.id}
                </div>
                <div>
                  <span className="font-semibold">Type:</span> {hoveredSeat.seat.type}
                </div>
                <div>
                  <span className="font-semibold">Price:</span> ₹{hoveredSeat.seat.price}
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







