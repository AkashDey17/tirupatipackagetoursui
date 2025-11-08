// import { useEffect, useState } from "react";
// import BusListing from "@/components/booking/BusListing";

// interface Props {
//   selectedDate: Date;
//   packageId?: number | string;  // ✅ Accept packageId
// }

// const BusListingContainer = ({ selectedDate, packageId }: Props) => {
//   const [busData, setBusData] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   // Utility to calculate duration
//   const calculateDuration = (departure: string, arrival: string) => {
//     const dep = new Date(departure);
//     const arr = new Date(arrival);
//     if (isNaN(dep.getTime()) || isNaN(arr.getTime())) return "—";
//     let diffMs = arr.getTime() - dep.getTime();
//     if (diffMs < 0) diffMs += 24 * 60 * 60 * 1000;
//     const hours = Math.floor(diffMs / (1000 * 60 * 60));
//     const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
//     return `${hours.toString().padStart(2, "0")}:${minutes
//       .toString()
//       .padStart(2, "0")} Hrs`;
//   };

//   const formatTime = (dateString: string | null | undefined) => {
//     if (!dateString) return "";
//     dateString = dateString.replace("T", " ").replace("Z", "");
//     const parts = dateString.split(" ");
//     if (parts.length < 2) return "";
//     const timePart = parts[1];
//     const [hourStr, minute] = timePart.split(":");
//     if (!hourStr || !minute) return "";
//     let hour = parseInt(hourStr, 10);
//     const suffix = hour >= 12 ? "PM" : "AM";
//     hour = hour % 12 || 12;
//     return `${hour.toString().padStart(2, "0")}:${minute} ${suffix}`;
//   };

//   useEffect(() => {
//     if (!packageId) return; // ✅ Wait until packageId is received

//     const fetchBusData = async () => {
//       setLoading(true);
//       try {
//         const res = await fetch(
//           `https://api.tirupatipackagetours.com/api/bus-details?packageId=${packageId}` // ✅ Pass packageId
//         );
//         const data = await res.json();

//         const mappedData = data.map((bus: any) => {
//           const depTime = formatTime(bus.DepartureTime);
//           const arrTime = formatTime(bus.Arrivaltime);
//           // ✅ Weekend / Weekday logic
//   const isWeekend = (date: Date) => {
//     const day = date.getDay(); // 0 = Sun, 6 = Sat
//     return day === 0 || day === 6;
//   };

//   const finalPrice = isWeekend(selectedDate)
//     ? bus.WkEndSeatPrice
//     : bus.WkDaySeatPrice;

//           return {
//              busBookingDetailsId: bus.BusBooKingDetailID,
//   operatorId: bus.OperatorID,                  
//             busId: bus.BusBooKingDetailID,
//             packageId: bus.PackageID,
//             busNumber: bus.PackageName,
//             operator: bus.OperatorID,
//             busType: bus.BusType,
//             departureTime: depTime,
//             arrivalTime: arrTime,
//             duration: calculateDuration(bus.DepartureTime, bus.Arrivaltime),
//             date: depTime,
//             // price: `₹ ${bus.WkEndSeatPrice}/-`,
//             WkEndSeatPrice: bus.WkEndSeatPrice,
//             WkDaySeatPrice: bus.WkDaySeatPrice,

//             finalSeatPrice: finalPrice,

//             seatsAvailable: bus.BusSeats - (bus.FilledSeats || 0),
//             totalSeats: bus.BusSeats,
//             amenities: bus.amenities || [],
//             hasInfo: true,
//             isVia: bus.ViaStops > 0,
//             viaStops: bus.ViaStops || 0,
//             boardingPoints: bus.BoardingPoints?.split(",") || [],
//           };
//         });

//         setBusData(mappedData);
//       } catch (err) {
//         console.error("Error fetching bus data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBusData();
//   }, [packageId, selectedDate]); // ✅ refetch on package change


//   return (
//     <div className="space-y-6">
//       {loading
//         ? <p>Loading buses...</p>
//         : busData.map((bus, index) => (
//             <BusListing key={index} {...bus} selectedDate={selectedDate} />
//           ))}
//     </div>
//   );
// };

// export default BusListingContainer;

//earlier code

// import { useEffect, useState } from "react";
// import BusListing from "@/components/booking/BusListing";

// interface Props {
//   selectedDate: Date;
//   packageId?: number | string;
// }

// const BusListingContainer = ({ selectedDate, packageId }: Props) => {
//   const [busData, setBusData] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   const calculateDuration = (departure: string, arrival: string) => {
//     const dep = new Date(departure);
//     const arr = new Date(arrival);
//     if (isNaN(dep.getTime()) || isNaN(arr.getTime())) return "—";
//     let diffMs = arr.getTime() - dep.getTime();
//     if (diffMs < 0) diffMs += 24 * 60 * 60 * 1000;
//     const hours = Math.floor(diffMs / (1000 * 60 * 60));
//     const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
//     return `${hours.toString().padStart(2, "0")}:${minutes
//       .toString()
//       .padStart(2, "0")} Hrs`;
//   };

//   const formatTime = (dateString: string | null | undefined) => {
//     if (!dateString) return "";
//     dateString = dateString.replace("T", " ").replace("Z", "");
//     const parts = dateString.split(" ");
//     if (parts.length < 2) return "";
//     const timePart = parts[1];
//     const [hourStr, minute] = timePart.split(":");
//     if (!hourStr || !minute) return "";
//     let hour = parseInt(hourStr, 10);
//     const suffix = hour >= 12 ? "PM" : "AM";
//     hour = hour % 12 || 12;
//     return `${hour.toString().padStart(2, "0")}:${minute} ${suffix}`;
//   };

//   useEffect(() => {
//     if (!packageId) return;

//     const fetchBusData = async () => {
//       setLoading(true);
//       try {
//         const res = await fetch(
//           `https://api.tirupatipackagetours.com/api/bus-details?packageId=${packageId}`
//         );
//         const data = await res.json();

//         const mappedData = data.map((bus: any) => {
//           const depTime = formatTime(bus.DepartureTime);
//           const arrTime = formatTime(bus.Arrivaltime);

//           const isWeekend = (date: Date) => {
//             const day = date.getDay();
//             return day === 0 || day === 6;
//           };

//           const finalPrice = isWeekend(selectedDate)
//             ? bus.WkEndSeatPrice
//             : bus.WkDaySeatPrice;

//           return {
//             busBookingDetailsId: bus.BusBooKingDetailID,  // ✅ Fixed
//             operatorId: bus.OperatorID,                    // ✅ Fixed
//             packageId: bus.PackageID,
//             busNumber: bus.BusNo,                         // ✅ Correct bus no
//             busType: bus.BusType,
//             departureTime: depTime,
//             arrivalTime: arrTime,
//             duration: calculateDuration(bus.DepartureTime, bus.Arrivaltime),
//             date: depTime,
//             WkEndSeatPrice: bus.WkEndSeatPrice,
//             WkDaySeatPrice: bus.WkDaySeatPrice,
//             finalSeatPrice: finalPrice,
//             seatsAvailable: bus.BusSeats - (bus.FilledSeats || 0),
//             totalSeats: bus.BusSeats,
//             amenities: bus.amenities || [],
//             hasInfo: true,
//             isVia: bus.ViaStops > 0,
//             viaStops: bus.ViaStops || 0,
//             boardingPoints: bus.BoardingPoints?.split(",") || [],
//           };
//         });

//         setBusData(mappedData);
//       } catch (err) {
//         console.error("Error fetching bus data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBusData();
//   }, [packageId, selectedDate]);

//   return (
//     <div className="space-y-6">
//       {loading
//         ? <p>Loading buses...</p>
//         : busData.map((bus, index) => (
//             <BusListing key={index} {...bus} selectedDate={selectedDate} />
//           ))}
//     </div>
//   );
// };

// export default BusListingContainer;
// top is new code

import { useEffect, useState } from "react";
import BusListing from "@/components/booking/BusListing";
import BusLoader from "@/utility/BusLoader";

interface Props {
  selectedDate: Date;
  packageId?: number | string;
}

const BusListingContainer = ({ selectedDate, packageId }: Props) => {
  const [busData, setBusData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const calculateDuration = (departure: string, arrival: string) => {
    const dep = new Date(departure);
    const arr = new Date(arrival);
    if (isNaN(dep.getTime()) || isNaN(arr.getTime())) return "—";
    let diffMs = arr.getTime() - dep.getTime();
    if (diffMs < 0) diffMs += 24 * 60 * 60 * 1000;
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")} Hrs`;
  };

  const formatTime = (dateString: string | null | undefined) => {
    if (!dateString) return "";
    dateString = dateString.replace("T", " ").replace("Z", "");
    const parts = dateString.split(" ");
    if (parts.length < 2) return "";
    const timePart = parts[1];
    const [hourStr, minute] = timePart.split(":");
    if (!hourStr || !minute) return "";
    let hour = parseInt(hourStr, 10);
    const suffix = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    return `${hour.toString().padStart(2, "0")}:${minute} ${suffix}`;
  };

  useEffect(() => {
    if (!packageId) return;

    const fetchBusData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.tirupatipackagetours.com/api/bus-details?packageId=${packageId}`
        );
        const data = await res.json();

        const mappedData = data.map((bus: any) => {
          const depTime = formatTime(bus.DepartureTime);
          const arrTime = formatTime(bus.Arrivaltime);

          const isWeekend = (date: Date) => {
            const day = date.getDay();
            return day === 0 || day === 6;
          };

          const finalPrice = isWeekend(selectedDate)
            ? bus.WkEndSeatPrice
            : bus.WkDaySeatPrice;

          return {
            busBookingDetailsId: bus.BusBooKingDetailID,
            operatorId: bus.OperatorID,
            packageId: bus.PackageID,
            busNumber: bus.BusNo,
            busType: bus.BusType,
            departureTime: depTime,
            arrivalTime: arrTime,
            duration: calculateDuration(bus.DepartureTime, bus.Arrivaltime),
            date: depTime,
            WkEndSeatPrice: bus.WkEndSeatPrice,
            WkDaySeatPrice: bus.WkDaySeatPrice,
            finalSeatPrice: finalPrice,
            seatsAvailable: bus.BusSeats - (bus.FilledSeats || 0),
            totalSeats: bus.BusSeats,
            amenities: bus.amenities || [],
            hasInfo: true,
            isVia: bus.ViaStops > 0,
            viaStops: bus.ViaStops || 0,
            boardingPoints: bus.BoardingPoints?.split(",") || [],
          };
        });

        setBusData(mappedData);
      } catch (err) {
        console.error("Error fetching bus data:", err);
      } finally {
        // ✅ Add delay for better loader feel
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setLoading(false);
      }
    };

    fetchBusData();
  }, [packageId, selectedDate]);

  return (
    <div className="space-y-6">
      {loading ? (
        <BusLoader />
      ) : (
        <div className="animate-fadeIn">
          {busData.map((bus, index) => (
            <BusListing key={index} {...bus} selectedDate={selectedDate} packageId={packageId} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BusListingContainer;