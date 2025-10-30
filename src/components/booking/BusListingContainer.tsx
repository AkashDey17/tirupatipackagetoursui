import { useEffect, useState } from "react";
import BusListing from "@/components/booking/BusListing";

const BusListingContainer = ({ selectedDate }: { selectedDate: Date }) => {
  const [busData, setBusData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Utility to calculate duration
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

  // Normalize formats:
  // Convert "2025-10-30T19:30:00.000Z" -> "2025-10-30 19:30:00"
  dateString = dateString.replace("T", " ").replace("Z", "");

  // Now split into date + time
  const parts = dateString.split(" ");
  if (parts.length < 2) return "";

  const timePart = parts[1]; // "19:30:00.000"
  const [hourStr, minute] = timePart.split(":");
  if (!hourStr || !minute) return "";

  let hour = parseInt(hourStr, 10);
  const suffix = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;

  return `${hour.toString().padStart(2, "0")}:${minute} ${suffix}`;
};

  useEffect(() => {
    const fetchBusData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/bus-details"); // your API
        const data = await res.json();

        const mappedData = data.map((bus: any) => {
          const depTime = formatTime(bus.DepartureTime);
          const arrTime = formatTime(bus.Arrivaltime);
          

          return {
            busId: bus.BusBooKingDetailID,
            packageId: bus.PackageID,
            busNumber: bus.PackageName,
            operator: bus.OperatorID,
            busType: bus.BusType,
            departureTime: depTime,
            arrivalTime: arrTime,
            duration: calculateDuration(bus.DepartureTime, bus.Arrivaltime),
            date: depTime,
            price: `₹ ${bus.WkEndSeatPrice}/-`,
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
        setLoading(false);
      } catch (err) {
        console.error("Error fetching bus data:", err);
        setLoading(false);
      }
    };

    fetchBusData();
  }, []);

  return (
    <div className="space-y-6">
      {loading
        ? busData.map((bus, index) => <BusListing key={index} {...bus} selectedDate={selectedDate} />)
        : busData.map((bus, index) => <BusListing key={index} {...bus} selectedDate={selectedDate} />)}
    </div>
  );
};

export default BusListingContainer;




