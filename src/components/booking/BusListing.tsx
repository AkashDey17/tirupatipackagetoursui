// import { useState } from "react";
// import { User, Camera, FileText, ChevronDown, ChevronUp, Star } from "lucide-react";
// import BusLayout from "./BusLayout.tsx"; 

// interface BusListingProps {
//   busNumber: string;
//   operator: string;
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
//   rating?: number;        // rating number
//   reviewsCount?: number;  // number of reviews
//   hasInfo?: boolean;
// }

// const BusListing = ({
//   busNumber,
//   operator,
//   busType,
//   departureTime,
//   arrivalTime,
//   duration,
//   date,
//   price,
//   seatsAvailable,
//   totalSeats,
//   amenities = [],
//   photos = [],
//   policies = [],
//   rating,
//   reviewsCount,
//   hasInfo = false,
// }: BusListingProps) => {
//   const hasSeats = seatsAvailable > 0;

//   // Dummy defaults if no data is passed
//   const displayRating = rating ?? 4.5;
//   const displayReviews = reviewsCount ?? 233;

//   const [showSeats, setShowSeats] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<"amenities" | "photos" | "policies" | null>(null);

//   const toggleDropdown = (type: "amenities" | "photos" | "policies") => {
//     setOpenDropdown(prev => (prev === type ? null : type));
//   };

//   return (
//     <div className="bg-white rounded-3xl border-2 border-border p-4 hover:shadow-lg transition-shadow max-w-full overflow-x-auto mb-4">
//       <div className="flex items-center justify-between gap-4 flex-wrap">

//         {/* Left Section */}
//         <div className="flex-1 min-w-0 flex items-center gap-3">
//           <div className="min-w-0">
//             <p className="text-sm text-muted-foreground">
//               {busType} ({totalSeats}+{totalSeats - seatsAvailable})
//             </p>
//           </div>
//         </div>

//         {/* Middle Section */}
//         <div className="flex items-center gap-6 min-w-[200px] justify-center">
//           <div className="text-center">
//             <div className="text-2xl font-bold text-[#020e68]">{departureTime}</div>
//           </div>
//           <div className="flex flex-col items-center">
//             <div className="w-24 h-px bg-border mb-1"></div>
//             <div className="text-xs text-muted-foreground">{duration}</div>
//           </div>
//           <div className="text-center">
//             <div className="text-2xl font-bold text-[#020e68]">{arrivalTime}</div>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="text-right flex-shrink-0 flex flex-col items-end gap-1">
//           <div className="flex items-start justify-end gap-1">
//             <span className="text-3xl font-bold text-[#020e68]">{price.replace('₹ ','')}</span>
//             <span className="text-sm text-muted-foreground mt-2">Onwards</span>
//           </div>
//           <div className="text-sm font-semibold text-success">
//             Available Seats ({seatsAvailable})
//           </div>
//           <div
//             onClick={() => setShowSeats(prev => !prev)}
//             className={`cursor-pointer mt-2 text-sm font-bold px-4 py-1 rounded-full text-center ${
//               hasSeats ? "bg-[#020e68] text-white hover:bg-[#020e68]/90" : "bg-gray-400 text-white"
//             }`}
//           >
//             {showSeats ? "Hide Seats" : "View Seats"}
//           </div>
//         </div>
//       </div>

//       {/* Seats Layout */}
//       {showSeats && (
//         <div className="border-t border-gray-300 mt-4 pt-4 bg-gray-50">
//           <BusLayout duration={duration} />
//         </div>
//       )}

//       {/* Ratings Section */}
//       <div className="flex items-center gap-2 mt-3">
//         <div className="flex items-center gap-1 bg-[#11208c] text-white px-2 py-1 rounded text-sm font-semibold">
//           <Star className="w-4 h-4 text-yellow-400" />
//           <span>{displayRating.toFixed(1)}</span>
//           <span>{displayReviews} reviews</span>
//         </div>
//       </div>

//       {/* Dropdown Links */}
//       <div className="flex items-center gap-4 mt-1 text-sm font-semibold text-[#020e68]">
//         <div className="flex items-center cursor-pointer" onClick={() => toggleDropdown("amenities")}>
//           <User className="w-4 h-4 mr-1" /> Amenities {openDropdown === "amenities" ? <ChevronUp className="w-4 h-4"/> : <ChevronDown className="w-4 h-4"/>}
//         </div>

//         <div className="flex items-center cursor-pointer" onClick={() => toggleDropdown("photos")}>
//           <Camera className="w-4 h-4 mr-1" /> Photos {openDropdown === "photos" ? <ChevronUp className="w-4 h-4"/> : <ChevronDown className="w-4 h-4"/>}
//         </div>

//         <div className="flex items-center cursor-pointer" onClick={() => toggleDropdown("policies")}>
//           <FileText className="w-4 h-4 mr-1" /> Policies {openDropdown === "policies" ? <ChevronUp className="w-4 h-4"/> : <ChevronDown className="w-4 h-4"/>}
//         </div>
//       </div>

//       {/* Dropdown Content */}
//       {openDropdown && (
//         <div className="border-t border-gray-300 mt-2 pt-2 bg-gray-50 rounded-lg p-3 text-sm">
//           {openDropdown === "amenities" && (
//             <div className="flex flex-wrap gap-2">
//               {amenities.length > 0 ? amenities.map((a, idx) => (
//                 <span key={idx} className="px-2 py-1 bg-[#3d85c6]/10 text-[#3d85c6] rounded text-xs">{a}</span>
//               )) : <span className="text-gray-500 text-xs">No amenities available</span>}
//             </div>
//           )}

//           {openDropdown === "photos" && (
//             <div className="flex flex-wrap gap-2">
//               {photos.length > 0 ? photos.map((p, idx) => (
//                 <img key={idx} src={p} alt={`bus-${idx}`} className="w-20 h-12 object-cover rounded"/>
//               )) : <span className="text-gray-500 text-xs">No photos available</span>}
//             </div>
//           )}

//           {openDropdown === "policies" && (
//             <ul className="list-disc list-inside text-xs text-gray-700">
//               {policies.length > 0 ? policies.map((p, idx) => (
//                 <li key={idx}>{p}</li>
//               )) : <li className="text-gray-500">No policies available</li>}
//             </ul>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default BusListing;


import { useState } from "react";
import { User, Camera, FileText, ChevronDown, ChevronUp, Star, MapPin } from "lucide-react";
import BusLayout from "./BusLayout.tsx";

interface BusListingProps {
  busNumber: string;
  operator: string;
  busType: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  date: string;
  price: string;
  seatsAvailable: number;
  totalSeats: number;
  amenities?: string[];
  photos?: string[];
  policies?: string[];
  pickupDropPoints?: string[]; // ✅ New prop
  rating?: number;
  reviewsCount?: number;
  hasInfo?: boolean;
}

const BusListing = ({
  busNumber,
  operator,
  busType,
  departureTime,
  arrivalTime,
  duration,
  date,
  price,
  seatsAvailable,
  totalSeats,
  amenities = [],
  photos = [],
  policies = [],
  pickupDropPoints = [], // ✅ Default empty array
  rating,
  reviewsCount,
  hasInfo = false,
}: BusListingProps) => {
  const hasSeats = seatsAvailable > 0;

  const [displayRating] = useState<number>(
  rating ?? Number((Math.random() * 3.5 + 1.5).toFixed(1))
);

  const displayReviews = reviewsCount ?? Math.floor(Math.random() * 500) + 50;

  const [showSeats, setShowSeats] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<"amenities" | "photos" | "policies" | "pickupDropPoints" | null>(null);

  const toggleDropdown = (type: "amenities" | "photos" | "policies" | "pickupDropPoints") => {
    setOpenDropdown((prev) => (prev === type ? null : type));
  };

  let ratingBg = "#4CAF50";
  if (displayRating > 4) ratingBg = "#4CAF50";
  else if (displayRating < 2) ratingBg = "#FF4C4C";
  else if (displayRating < 3) ratingBg = "#FFA500";

  return (
    <div className="relative bg-white border-2 border-border p-4 hover:shadow-lg transition-shadow max-w-full mb-4 rounded-3xl">
      {/* Rating Box */}
      <div
        className="absolute flex items-center gap-1 px-3 py-1 text-sm font-semibold shadow-md z-10"
        style={{
          backgroundColor: ratingBg,
          color: "white",
          top: "0",
          left: "-1px",
          transform: "translateY(-50%)",
        }}
      >
        <span>{displayRating.toFixed(1)}</span>
        {/* <Star className="w-4 h-4 text-[#FFD700]" /> */}
      </div>

      {/* Bus Info */}
      <div className="flex items-center justify-between gap-4 flex-wrap mt-6">
        <div className="flex-1 min-w-0 flex items-center gap-3">
          <div className="min-w-0">
            <p className="text-sm text-muted-foreground">
              {busType} ({totalSeats}+{totalSeats - seatsAvailable})
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 min-w-[200px] justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#020e68]">{departureTime}</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-px bg-border mb-1"></div>
            <div className="text-xs text-muted-foreground">{duration}</div>
          </div>
          

          <div className="text-center">
            <div className="text-2xl font-bold text-[#020e68]">{arrivalTime}</div>
          </div>
        </div>

        <div className="text-right flex-shrink-0 flex flex-col items-end gap-1">
          <div className="flex items-start justify-end gap-1">
            <span className="text-3xl font-bold text-[#020e68]">
              {price.replace("₹ ", "")}
            </span>
            <span className="text-sm text-muted-foreground mt-2">Onwards</span>
          </div>
          <div className="text-sm font-semibold text-green-600">
            Available Seats ({seatsAvailable})
          </div>
          <div
            onClick={() => setShowSeats((prev) => !prev)}
            className={`cursor-pointer mt-2 text-sm font-bold px-4 py-1 rounded-full text-center ${
              hasSeats
                ? "bg-[#ffcf06] text-[#020e68] hover:bg-[#ffcf06]/90"
                : "bg-gray-400 text-[#020e68]"
            }`}
          >
            {showSeats ? "Hide Seats" : "View Seats"}
          </div>
        </div>
      </div>

      {showSeats && (
        <div className="border-t border-gray-300 mt-4 pt-4 bg-gray-50">
          <BusLayout duration={duration} />
        </div>
      )}

      {/* Tabs */}
      <div className="flex items-center gap-4 mt-3 text-sm font-semibold text-[#020e68]">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => toggleDropdown("amenities")}
        >
          <User className="w-4 h-4 mr-1" /> Amenities{" "}
          {openDropdown === "amenities" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>

        <div
          className="flex items-center cursor-pointer"
          onClick={() => toggleDropdown("photos")}
        >
          <Camera className="w-4 h-4 mr-1" /> Photos{" "}
          {openDropdown === "photos" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>

        <div
          className="flex items-center cursor-pointer"
          onClick={() => toggleDropdown("policies")}
        >
          <FileText className="w-4 h-4 mr-1" /> Policies{" "}
          {openDropdown === "policies" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>

        {/* ✅ Pickup & Drop Points Tab */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => toggleDropdown("pickupDropPoints")}
        >
          <MapPin className="w-4 h-4 mr-1" /> Pickup & Drop Points{" "}
          {openDropdown === "pickupDropPoints" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </div>

      {/* Dropdown content */}
      {openDropdown && (
        <div className="border-t border-gray-300 mt-2 pt-2 bg-gray-50 rounded-lg p-3 text-sm">
          {openDropdown === "amenities" && (
            <div className="flex flex-wrap gap-2">
              {amenities.length > 0 ? amenities.map((a, idx) => (
                <span key={idx} className="px-2 py-1 bg-[#3d85c6]/10 text-[#3d85c6] rounded text-xs">{a}</span>
              )) : <span className="text-gray-500 text-xs">No amenities available</span>}
            </div>
          )}

          {openDropdown === "photos" && (
            <div className="flex flex-wrap gap-2">
              {photos.length > 0 ? photos.map((p, idx) => (
                <img key={idx} src={p} alt={`bus-${idx}`} className="w-20 h-12 object-cover rounded" />
              )) : <span className="text-gray-500 text-xs">No photos available</span>}
            </div>
          )}

          {openDropdown === "policies" && (
            <ul className="list-disc list-inside text-xs text-gray-700">
              {policies.length > 0 ? policies.map((p, idx) => <li key={idx}>{p}</li>) : <li className="text-gray-500">No policies available</li>}
            </ul>
          )}

          {openDropdown === "pickupDropPoints" && (
            <ul className="list-disc list-inside text-xs text-gray-700">
              {pickupDropPoints.length > 0 ? pickupDropPoints.map((p, idx) => <li key={idx}>{p}</li>) : <li className="text-gray-500">No pickup/drop points available</li>}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default BusListing;




