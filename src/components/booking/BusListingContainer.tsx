import { useEffect, useState } from "react";
import BusListing from "@/components/booking/BusListing";

const BusListingContainer = () => {
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

  useEffect(() => {
    const fetchBusData = async () => {
      try {
        const res = await fetch("https://api.tirupatipackagetours.com/api/bus-details"); // your API
        const data = await res.json();

        const mappedData = data.map((bus: any) => {
          const depTime = new Date(bus.DepartureTime);
          const arrTime = new Date(bus.Arrivaltime);

          return {
            packageId: bus.PackageID,
            busNumber: bus.PackageName,
            operator: bus.OperatorID,
            busType: bus.BusType,
            departureTime: depTime.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
            arrivalTime: arrTime.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
            duration: calculateDuration(bus.DepartureTime, bus.Arrivaltime),
            date: depTime.toLocaleDateString(),
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
        ? busData.map((bus, index) => <BusListing key={index} {...bus} />)
        : busData.map((bus, index) => <BusListing key={index} {...bus} />)}
    </div>
  );
};

export default BusListingContainer;


