import JourneyDetails from "@/components/booking-details/JourneyDetails";
import TravellerDetails from "@/components/booking-details/TravellerDetails";
import ContactDetails from "@/components/booking-details/ContactDetails";
import GSTDetails from "@/components/booking-details/GSTDetails";
import PriceDetails from "@/components/booking-details/PriceDetails";
import { useEffect, useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BusBookingDetails = () => {
  const [travellerData, setTravellerData] = useState<any[]>([]);
  const [contactData, setContactData] = useState<any>({});
  const [gstData, setGSTData] = useState<any>({});
  const [travelDate, setTravelDate] = useState<string>(""); // ✅ new state for date
  const navigate = useNavigate();

  // ✅ Fetch booking data from localStorage
  useEffect(() => {
    const bookingData = JSON.parse(localStorage.getItem("bookingData") || "{}");

    console.log("🪑 Booking data on details page:", bookingData);

    if (bookingData?.selectedDate) {
      const dateOnly = new Date(bookingData.selectedDate).toISOString().split("T")[0];
      console.log("📅 Extracted Date (no time):", dateOnly);
      setTravelDate(dateOnly);
    } else {
      console.warn("⚠️ selectedDate not found in bookingData");
    }

    if (!bookingData.selectedSeats || bookingData.selectedSeats.length === 0) {
      console.warn("⚠️ No seats found — redirecting back to seat selection.");
      toast.error("No seats found. Please select seats again.");
    }
  }, []);

  // ✅ handleSubmit logic (unchanged)
  const handleSubmit = async (saveFlag: "Y" | "N") => {
    try {
      const bookingData = JSON.parse(localStorage.getItem("bookingData") || "{}");
      const busId = bookingData.busId;
      const selectedSeats = bookingData.selectedSeats || [];

      if (!busId || selectedSeats.length === 0) {
        toast.error("No seats selected or bus information missing.");
        return;
      }

      for (let i = 0; i < travellerData.length; i++) {
        const traveller = travellerData[i];
        const seatNo = selectedSeats[i] || selectedSeats[0];

        const payload = {
          BusBookingSeatID: 0,
          BusBookingDetailsID: traveller.BusBookingDetailsID ?? 101,
          BusOperatorID: busId,
          UserID: traveller.UserID ?? 12,
          ForSelf: traveller.ForSelf ?? true,
          IsPrimary: traveller.IsPrimary ?? 1,
          SeatNo: seatNo,
          FirstName: traveller.FirstName,
          MiddleName: traveller.MiddleName,
          LastName: traveller.LastName,
          Email: contactData.Email ?? "",
          ContactNo: contactData.ContactNo ?? "",
          Gender: traveller.Gender,
          AadharNo: traveller.AadharNo ?? "",
          PancardNo: traveller.PancardNo ?? "",
          BloodGroup: traveller.BloodGroup ?? "",
          DOB: traveller.DOB ?? null,
          FoodPref: traveller.FoodPref ?? "",
          Disabled: traveller.Disabled ?? false,
          Pregnant: traveller.Pregnant ?? false,
          RegisteredCompanyNumber: gstData.RegisteredCompanyNumber ?? "",
          RegisteredCompanyName: gstData.RegisteredCompanyName ?? "",
          CreatedBy: traveller.CreatedBy ?? 1,
          SavePassengerDetails: saveFlag,
        };

        console.log("🧍 Sending booking payload:", payload);
        await axios.post("http://localhost:5000/api/bus-booking-seat", payload);
      }

      localStorage.setItem("bookedSeats", JSON.stringify(selectedSeats));
      localStorage.setItem("passengerDetails", JSON.stringify(travellerData));
      localStorage.setItem("seatsUpdated", "true");
      toast.success("🎉 Booking saved successfully!");
      // setTimeout(() => navigate(`/bus-layout?busId=${busId}`), 1500);
      // for dummy phone pe the above code is needed

    } catch (error: any) {
      console.error("❌ Error submitting booking:", error.response || error.message);
      toast.error("Failed to save booking.");
    }
  };

  return (
    <div className="min-h-screen bg-flixbus-background">
      <Header />
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* ✅ Pass date to JourneyDetails */}
            <JourneyDetails date={travelDate} />

            <TravellerDetails setTravellerData={setTravellerData} />
            <ContactDetails setContactData={setContactData} />
            <GSTDetails setGSTData={setGSTData} />
          </div>

          <div className="lg:col-span-1 space-y-6">
            <PriceDetails
              handleSubmit={handleSubmit}
              travellerData={travellerData}
              contactData={contactData}
              gstData={gstData}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BusBookingDetails;
