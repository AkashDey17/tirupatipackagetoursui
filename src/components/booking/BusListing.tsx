

import { useState, useEffect } from "react";
import {
  User,
  Camera,
  FileText,
  ChevronDown,
  ChevronUp,
  MapPin,
} from "lucide-react";
import { useLocation } from "react-router-dom";
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
  pickupDropPoints?: string[];
  rating?: number;
  reviewsCount?: number;
  hasInfo?: boolean;
  selectedDate: String  | Date;
}

interface BoardingDroppingPoint {
  PointName: string;
  AreaName: string;
  Pincode: string;
  latitude?: number;
  longitude?: number;
  Time?: string;
}

const BusListing = ({
  busNumber,
  operator,
  busType,
  departureTime,
  arrivalTime,
  duration,
  
  price,
  seatsAvailable,
  totalSeats,
  amenities = [],
  photos = [],
  policies = [],
  pickupDropPoints = [],
  rating,
  reviewsCount,
  hasInfo = false,
  selectedDate,
}: BusListingProps) => {
  console.log("🗓️ BusListing received selectedDate:", selectedDate);
  const hasSeats = seatsAvailable > 0;
  const [displayRating] = useState<number>(
    rating ?? Number((Math.random() * 3.5 + 1.5).toFixed(1))
  );
  const displayReviews = reviewsCount ?? Math.floor(Math.random() * 500) + 50;

  const [showSeats, setShowSeats] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<
    "amenities" | "policies" | "pickupDropPoints" | null
  >(null);

  const toggleDropdown = (
    type: "amenities" | "policies" | "pickupDropPoints"
  ) => {
    setOpenDropdown((prev) => (prev === type ? null : type));
  };

  // --- New: boarding / dropping points states and busBookingId resolution (copied logic) ---
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const busIdFromUrl = queryParams.get("busId");
  const selectedBusId = busIdFromUrl ? Number(busIdFromUrl) : null;

  const [busBookingId, setBusBookingId] = useState<number | null>(
    selectedBusId || null
  );
  const [boardingPoints, setBoardingPoints] = useState<BoardingDroppingPoint[]>(
    []
  );
  const [droppingPoints, setDroppingPoints] = useState<
    BoardingDroppingPoint[]
  >([]);

  // If no busId in URL, fetch bus details and pick first BusBooKingDetailID (same fallback logic)
  useEffect(() => {
    const fetchBusDetails = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/bus-details");
        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          const firstBus = data[0];
          if (firstBus?.BusBooKingDetailID) {
            console.log(
              "BusListing: using BusBookingDetailID from /api/bus-details:",
              firstBus.BusBooKingDetailID
            );
            setBusBookingId(firstBus.BusBooKingDetailID);
          }
        } else if (data?.BusBooKingDetailID) {
          setBusBookingId(data.BusBooKingDetailID);
        }
      } catch (err) {
        console.error("BusListing ❌ Error fetching bus details:", err);
      }
    };

    if (!selectedBusId) {
      fetchBusDetails();
    } else {
      setBusBookingId(selectedBusId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBusId]);

  // Fetch boarding & dropping points when we have a busBookingId
  useEffect(() => {
    if (!busBookingId) return;
    console.log("BusListing 🔍 Fetching points for bus:", busBookingId);

    const fetchPoints = async () => {
      try {
        const [boardingRes, droppingRes] = await Promise.all([
          fetch(`http://localhost:5000/api/bus/boardingPoints/${busBookingId}`),
          fetch(`http://localhost:5000/api/bus/droppingPoints/${busBookingId}`),
        ]);

        const boardingData = await boardingRes.json();
        const droppingData = await droppingRes.json();

        console.log("BusListing ✅ Boarding Points API:", boardingData);
        console.log("BusListing ✅ Dropping Points API:", droppingData);

        setBoardingPoints(
          boardingData?.boardingPoints ||
            boardingData?.data?.boardingPoints ||
            boardingData ||
            []
        );
        setDroppingPoints(
          droppingData?.droppingPoints ||
            droppingData?.data?.droppingPoints ||
            droppingData ||
            []
        );
      } catch (err) {
        console.error("BusListing ❌ Error fetching points:", err);
      }
    };

    fetchPoints();
  }, [busBookingId]);

  // Keep existing rating color logic
  let ratingBg = "#4CAF50";
  if (displayRating > 4) ratingBg = "#4CAF50";
  else if (displayRating < 2) ratingBg = "#FF4C4C";
  else if (displayRating < 3) ratingBg = "#FFA500";

  return (
    <div className="relative bg-white border-2 border-border p-4 hover:shadow-lg transition-shadow max-w-full mb-4 rounded-3xl">
      {/* Rating */}
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
            <div className="text-2xl font-bold text-[#020e68]">
              {departureTime}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-px bg-border mb-1"></div>
            <div className="text-xs text-muted-foreground">{duration}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#020e68]">
              {arrivalTime}
            </div>
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
          <BusLayout duration={duration} selectedDate={selectedDate} />

        </div>
      )}

      {/* Tabs */}
      <div className="flex items-center gap-4 mt-3 text-sm font-semibold text-[#020e68]">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => toggleDropdown("amenities")}
        >
          <User className="w-4 h-4 mr-1" /> Amenities{" "}
          {openDropdown === "amenities" ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </div>

        <div
          className="flex items-center cursor-pointer"
          onClick={() => toggleDropdown("policies")}
        >
          <FileText className="w-4 h-4 mr-1" /> Policies{" "}
          {openDropdown === "policies" ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </div>

        <div
          className="flex items-center cursor-pointer"
          onClick={() => toggleDropdown("pickupDropPoints")}
        >
          <MapPin className="w-4 h-4 mr-1" /> Pickup & Drop Points{" "}
          {openDropdown === "pickupDropPoints" ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </div>
      </div>

      {/* Dropdown Content */}
      {openDropdown && (
        <div className="border-t border-gray-300 mt-2 pt-3 bg-gray-50 rounded-lg p-4 text-sm">
          {/* Amenities */}
          {openDropdown === "amenities" && (
            <div className="flex flex-wrap gap-2">
              {amenities.length > 0 ? (
                amenities.map((a, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-[#3d85c6]/10 text-[#3d85c6] rounded text-xs"
                  >
                    {a}
                  </span>
                ))
              ) : (
                <span className="text-gray-500 text-xs">
                  No amenities available
                </span>
              )}
            </div>
          )}

          {/* Photos */}

          {/* ✅ Policies Section (Hard-coded) */}
          {openDropdown === "policies" && (
            <div className="space-y-4 text-xs text-gray-700">
              <div>
                <h4 className="font-bold text-[#020e68] text-sm mb-2">
                  Cancellation Policy
                </h4>
                <table className="w-full text-left border border-gray-200 text-[12px]">
                  <thead className="bg-[#f0f4ff]">
                    <tr>
                      <th className="p-2 border">Cancellation Time</th>
                      <th className="p-2 border">Cancellation Charges</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border">0–6 hrs before departure</td>
                      <td className="p-2 border">100%</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">6–24 hrs before departure</td>
                      <td className="p-2 border">50%</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">More than 24 hrs</td>
                      <td className="p-2 border">10%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <h4 className="font-bold text-[#020e68] text-sm mb-2">
                  Reschedule Policy
                </h4>
                <table className="w-full text-left border border-gray-200 text-[12px]">
                  <thead className="bg-[#f0f4ff]">
                    <tr>
                      <th className="p-2 border">Reschedule Time</th>
                      <th className="p-2 border">Reschedule Charges</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border">Up to 6 hrs before departure</td>
                      <td className="p-2 border">20%</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Less than 6 hrs</td>
                      <td className="p-2 border">NO_RESCHEDULE</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Cancellation charges are computed per seat.</li>
                <li>Calculated based on service start date/time.</li>
                <li>No cancellation after scheduled departure time.</li>
                <li>Charges exclude GST.</li>
                <li>Group bookings can cancel individual seats.</li>
              </ul>

              <div className="border-t pt-3 mt-3 space-y-3">
                <div>
                  <span className="font-bold text-[#020e68] block">
                    Child Passenger Policy
                  </span>
                  <span>Children above age 5 require a ticket.</span>
                </div>

                <div>
                  <span className="font-bold text-[#020e68] block">
                    Luggage Policy
                  </span>
                  <span>
                    2 pieces free. Excess luggage over 20kg per passenger
                    chargeable.
                  </span>
                </div>

                <div>
                  <span className="font-bold text-[#020e68] block">
                    Pets Policy
                  </span>
                  <span>Pets are not allowed.</span>
                </div>

                <div>
                  <span className="font-bold text-[#020e68] block">
                    Liquor Policy
                  </span>
                  <span>
                    Carrying or consuming liquor inside the bus is prohibited.
                  </span>
                </div>

                <div>
                  <span className="font-bold text-[#020e68] block">
                    Pick-up Time Policy
                  </span>
                  <span>
                    The operator won’t wait beyond scheduled departure. Late
                    passengers won’t be refunded.
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Pickup & Drop Points (NEW: Boarding & Dropping Sections) */}
          {openDropdown === "pickupDropPoints" && (
            <div className="text-xs text-gray-700 space-y-4">
              {/* Boarding points section */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">BOARDING POINTS</h3>
                  <ChevronUp className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="max-h-48 overflow-y-auto space-y-2">
                  {boardingPoints.length > 0 ? (
                    boardingPoints.map((point, idx) => (
                      <div key={idx} className="border rounded p-2">
                        {point.Time && (
                          <div className="font-medium text-xs">{point.Time}</div>
                        )}
                        <div className="font-semibold text-sm">{point.PointName}</div>
                        <div className="text-xs text-pickup-text mt-1">
                          {point.AreaName}
                        </div>
                        <div className="text-xs text-pickup-text">{point.Pincode}</div>
                      </div>
                    ))
                  ) : (
                    // fallback to the old pickupDropPoints prop (string[]), if present
                    pickupDropPoints.length > 0 ? (
                      pickupDropPoints.map((p, i) => (
                        <div key={i} className="border rounded p-2">
                          <div className="font-semibold text-sm">{p}</div>
                        </div>
                      ))
                    ) : (
                      <div className="text-gray-500 text-xs">
                        No boarding points available
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Dropping points section */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">DROP POINTS</h3>
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="max-h-48 overflow-y-auto space-y-2">
                  {droppingPoints.length > 0 ? (
                    droppingPoints.map((point, idx) => (
                      <div key={idx} className="border rounded p-2">
                        {point.Time && (
                          <div className="font-medium text-xs">{point.Time}</div>
                        )}
                        <div className="font-semibold text-sm">{point.PointName}</div>
                        <div className="text-xs text-pickup-text mt-1">
                          {point.AreaName}
                        </div>
                        <div className="text-xs text-pickup-text">{point.Pincode}</div>
                      </div>
                    ))
                  ) : (
                    pickupDropPoints.length > 0 ? (
                      pickupDropPoints.map((p, i) => (
                        <div key={i} className="border rounded p-2">
                          <div className="font-semibold text-sm">{p}</div>
                        </div>
                      ))
                    ) : (
                      <div className="text-gray-500 text-xs">
                        No dropping points available
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BusListing;






