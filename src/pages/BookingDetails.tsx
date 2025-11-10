// import JourneyDetails from "@/components/booking-details/JourneyDetails";
// import TravellerDetails from "@/components/booking-details/TravellerDetails";
// import ContactDetails from "@/components/booking-details/ContactDetails";
// import GSTDetails from "@/components/booking-details/GSTDetails";
// import PriceDetails from "@/components/booking-details/PriceDetails";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Toaster, toast } from "react-hot-toast";
// import { useLocation, useNavigate } from "react-router-dom";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// const BusBookingDetails = () => {
//   const [travellerData, setTravellerData] = useState<any[]>([]);
//   const [contactData, setContactData] = useState<any>({});
//   const [gstData, setGSTData] = useState<any>({});
//   const [travelDate, setTravelDate] = useState<string>("");
//   const [busId, setBusId] = useState<number | null>(null);
//   const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

//   const navigate = useNavigate();
//   const location = useLocation();

//   const {
//     operatorId,
//     busBookingDetailsId,
//     totalPrice,
//     boardingPoint,
//     droppingPoint,
//     duration,
//     selectedDate,
//   } = location.state || {};

//   console.log("👨‍💼 Operator ID (state):", operatorId);
//   console.log("📄 BusBookingDetails ID (state):", busBookingDetailsId);
//   console.log("🗓️ Selected Date (state):", selectedDate);

//   useEffect(() => {
//     const bookingData = JSON.parse(localStorage.getItem("bookingData") || "{}");
//     console.log("✅ Loaded booking data from localStorage:", bookingData);

//     if (bookingData.busId) {
//       setBusId(bookingData.busId);
//       console.log("🚌 Bus ID Loaded:", bookingData.busId);
//     } else {
//       console.warn("⚠️ busId missing in bookingData!");
//     }

//     if (bookingData.selectedSeats?.length > 0) {
//       setSelectedSeats(bookingData.selectedSeats);
//       console.log("✅ Seats Loaded:", bookingData.selectedSeats);
//     } else {
//       toast.error("No seats found. Please select seats again.");
//       console.warn("⚠️ No seats found — redirecting back to seat selection.");
//     }

//     // ✅ Handle selected date (ensure local timezone)
//     const dateFromStateOrLocal =
//       selectedDate || bookingData.selectedDate || null;

//     if (dateFromStateOrLocal) {
//       const localDate = new Date(dateFromStateOrLocal);
//       const localOffset = localDate.getTimezoneOffset() * 60000;
//       const normalizedDate = new Date(localDate.getTime() - localOffset)
//         .toISOString()
//         .split("T")[0];
//       setTravelDate(normalizedDate);
//       console.log("📅 Normalized Travel Date:", normalizedDate);
//     } else {
//       console.warn("⚠️ selectedDate not found in state or localStorage");
//     }
//   }, [selectedDate]);

//   const bookingData = JSON.parse(localStorage.getItem("bookingData") || "{}");

//   const finalOperatorId = operatorId ?? bookingData.operatorId;
//   const finalBookingDetailsId =
//     busBookingDetailsId ?? bookingData.busBookingDetailsId;

  
//   const handleSubmit = async (saveFlag: "Y" | "N") => {
//   try {
//     const bookingData = JSON.parse(localStorage.getItem("bookingData") || "{}");
//     const busId = bookingData.busId;
//     const selectedSeats = bookingData.selectedSeats || [];

//     if (!busId || selectedSeats.length === 0) {
//       toast.error("No seats selected or bus information missing.");
//       return null;
//     }

//     let journeyDate: string;
//     if (
//       bookingData?.selectedDate &&
//       !isNaN(new Date(bookingData.selectedDate).getTime())
//     ) {
//       const d = new Date(bookingData.selectedDate);
//       const year = d.getFullYear();
//       const month = String(d.getMonth() + 1).padStart(2, "0");
//       const day = String(d.getDate()).padStart(2, "0");
//       journeyDate = `${year}-${month}-${day}`;
//     } else {
//       const now = new Date();
//       journeyDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(
//         2,
//         "0"
//       )}-${String(now.getDate()).padStart(2, "0")}`;
//     }

//     console.log("📅 Final JourneyDate used for booking:", journeyDate);

//     // ✅ Create / Get PRIMARY User
//     const primaryTraveller = travellerData[0];
//     const userResponse = await axios.post(
//       "http://localhost:5000/api/user/get-or-create",
//       {
//         ...primaryTraveller,
//         Email: contactData.Email,
//         ContactNo: primaryTraveller?.ContactNo || contactData.ContactNo,
//         CreatedBy: 1,
//       }
//     );

//     const userId = userResponse.data.UserID;
//     console.log("👤 Primary UserID:", userId);

//     // ✅ Optionally save all travellers
//     if (saveFlag === "Y") {
//       await Promise.all(
//         travellerData.map((t) =>
//           axios.post("http://localhost:5000/api/user/get-or-create", {
//             ...t,
//             Email: contactData.Email,
//             ContactNo: t.ContactNo || contactData.ContactNo,
//             CreatedBy: userId,
//           })
//         )
//       );
//     }

//     // ✅ Save booking seat info and capture the Booking Details ID
//     let bookingdtlsIdFromResponse: number | null = null;

//     for (let i = 0; i < travellerData.length; i++) {
//       const traveller = travellerData[i];
//       const payload = {
//         BusBookingSeatID: 0,
//         BusBookingDetailsID: finalBookingDetailsId,
//         BusOperatorID: finalOperatorId,
//         UserID: userId,
//         ForSelf: traveller.ForSelf ?? true,
//         IsPrimary: i === 0 ? 1 : 0,
//         SeatNo: traveller.SeatNo,
//         FirstName: traveller.FirstName,
//         MiddleName: traveller.MiddleName,
//         LastName: traveller.LastName,
//         JourneyDate: travelDate || journeyDate,
//         Age: traveller.Age || traveller.age || "",
//         Email: contactData.Email,
//         ContactNo: contactData.ContactNo,
//         Gender: traveller.Gender,
//         AadharNo: traveller.AadharNo ?? "",
//         PancardNo: traveller.PancardNo ?? "",
//         RationCard: traveller.RationCard ?? "",
//         DrivingLicence: traveller.DrivingLicence ?? "",
//         PassportNo: traveller.PassportNo ?? "",
//         VoterID: traveller.VoterID ?? "",
//         BloodGroup: traveller.BloodGroup ?? "",
//         Others: traveller.Others ?? "",
//         DOB: traveller.DOB ?? null,
//         FoodPref: traveller.FoodPref ?? "",
//         Disabled: traveller.Disabled ?? false,
//         Pregnant: traveller.Pregnant ?? false,
//         RegisteredCompanyNumber: gstData.RegisteredCompanyNumber ?? "",
//         RegisteredCompanyName: gstData.RegisteredCompanyName ?? "",
//         CreatedBy: userId,
//         SavePassengerDetails: saveFlag,
//       };

//       const response = await axios.post("http://localhost:5000/api/bus-booking-seat", payload);
      

//       // ✅ Capture bookingdtlsId from backend response (if provided)
//       if (!bookingdtlsIdFromResponse && response.data?.BookingdtlsID) {
//         bookingdtlsIdFromResponse = response.data.BookingdtlsID;
//       }

//       if (response.data?.BusBookingSeatID) {
//   localStorage.setItem("busBookingSeatId", response.data.BusBookingSeatID);
// }
//       console.log("🧾 Seat booking saved:", response.data);
//     }

//     // ✅ Save locally for confirmation page
//     localStorage.setItem("bookedSeats", JSON.stringify(selectedSeats));
//     localStorage.setItem("passengerDetails", JSON.stringify(travellerData));
//     localStorage.setItem("seatsUpdated", "true");

//     toast.success("🎉 Booking successful!");

//     // ✅ Return IDs for payment integration
//     return {
//       BookingdtlsID:
//         bookingdtlsIdFromResponse || finalBookingDetailsId || null,
//       UserID: userId,
//       BusBookingSeatID: localStorage.getItem("busBookingSeatId") || null,
//     };
//   } catch (error: any) {
//     console.error("❌ Booking Error:", error);
//     toast.error("Failed to save booking.");
//     return null;
//   }
// };


//   return (
//     <div className="min-h-screen bg-flixbus-background">
//       <Header />
//       <Toaster position="top-center" />

//       <div className="max-w-7xl mx-auto px-4 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* LEFT COLUMN */}
//           <div className="lg:col-span-2 space-y-6">
//             <JourneyDetails date={travelDate} />
//             <TravellerDetails setTravellerData={setTravellerData} />
//             <ContactDetails setContactData={setContactData} />
//             <GSTDetails setGSTData={setGSTData} />
//           </div>

//           {/* RIGHT COLUMN */}
//           <div className="lg:col-span-1 space-y-6">
//             <PriceDetails
//               handleSubmit={handleSubmit}
//               travellerData={travellerData}
//               contactData={contactData}
//               gstData={gstData}
//               busId={busId}
//               selectedSeats={selectedSeats}
//             />
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default BusBookingDetails;


import JourneyDetails from "@/components/booking-details/JourneyDetails";
import TravellerDetails from "@/components/booking-details/TravellerDetails";
import ContactDetails from "@/components/booking-details/ContactDetails";
import GSTDetails from "@/components/booking-details/GSTDetails";
import PriceDetails from "@/components/booking-details/PriceDetails";
import { useEffect, useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BusBookingDetails = () => {
  const [travellerData, setTravellerData] = useState<any[]>([]);
  const [contactData, setContactData] = useState<any>({});
  const [gstData, setGSTData] = useState<any>({});
  const [travelDate, setTravelDate] = useState<string>("");
  const [busId, setBusId] = useState<number | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const navigate = useNavigate();
  const location = useLocation();

  const { operatorId, busBookingDetailsId, selectedDate } = location.state || {};

  useEffect(() => {
    const bookingData = JSON.parse(localStorage.getItem("bookingData") || "{}");

    if (bookingData.busId) setBusId(bookingData.busId);
    if (bookingData.selectedSeats?.length > 0) setSelectedSeats(bookingData.selectedSeats);

    const dateFromStateOrLocal = selectedDate || bookingData.selectedDate || null;
    if (dateFromStateOrLocal) {
      const localDate = new Date(dateFromStateOrLocal);
      const localOffset = localDate.getTimezoneOffset() * 60000;
      const normalizedDate = new Date(localDate.getTime() - localOffset)
        .toISOString()
        .split("T")[0];
      setTravelDate(normalizedDate);
    }
  }, [selectedDate]);

  const bookingData = JSON.parse(localStorage.getItem("bookingData") || "{}");
  const finalOperatorId = operatorId ?? bookingData.operatorId;
  const finalBookingDetailsId = busBookingDetailsId ?? bookingData.busBookingDetailsId;

  const handleSubmit = async (saveFlag: "Y" | "N") => {
    try {
      const bookingData = JSON.parse(localStorage.getItem("bookingData") || "{}");
      const busId = bookingData.busId;
      const selectedSeats = bookingData.selectedSeats || [];

      if (!busId || selectedSeats.length === 0) {
        toast.error("No seats selected or bus information missing.");
        return null;
      }

      // Prepare journey date
      let journeyDate: string;
      if (bookingData?.selectedDate && !isNaN(new Date(bookingData.selectedDate).getTime())) {
        const d = new Date(bookingData.selectedDate);
        journeyDate = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
      } else {
        const now = new Date();
        journeyDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
      }

      // Get primary user
      const primaryTraveller = travellerData[0];
      const userResponse = await axios.post("http://localhost:5000/api/user/get-or-create", {
        ...primaryTraveller,
        Email: contactData.Email,
        ContactNo: primaryTraveller?.ContactNo || contactData.ContactNo,
        CreatedBy: 1,
      });
      const userId = userResponse.data.UserID;

      // Optionally save all travellers
      if (saveFlag === "Y") {
        await Promise.all(travellerData.map(t =>
          axios.post("http://localhost:5000/api/user/get-or-create", {
            ...t,
            Email: contactData.Email,
            ContactNo: t.ContactNo || contactData.ContactNo,
            CreatedBy: userId,
          })
        ));
      }

      // ✅ Save booking seat info and capture BusBookingSeatID
      let busBookingSeatId: number | null = null;
      let bookingdtlsIdFromResponse: number | null = null;

      for (let i = 0; i < travellerData.length; i++) {
        const traveller = travellerData[i];
        const payload = {
          BusBookingSeatID: 0,
          BusBookingDetailsID: finalBookingDetailsId,
          BusOperatorID: finalOperatorId,
          UserID: userId,
          ForSelf: traveller.ForSelf ?? true,
          IsPrimary: i === 0 ? 1 : 0,
          SeatNo: traveller.SeatNo,
          FirstName: traveller.FirstName,
          MiddleName: traveller.MiddleName,
          LastName: traveller.LastName,
          JourneyDate: travelDate || journeyDate,
          Age: traveller.Age || traveller.age || "",
          Email: contactData.Email,
          ContactNo: contactData.ContactNo,
          Gender: traveller.Gender,
          AadharNo: traveller.AadharNo ?? "",
          PancardNo: traveller.PancardNo ?? "",
          RationCard: traveller.RationCard ?? "",
          DrivingLicence: traveller.DrivingLicence ?? "",
          PassportNo: traveller.PassportNo ?? "",
          VoterID: traveller.VoterID ?? "",
          BloodGroup: traveller.BloodGroup ?? "",
          Others: traveller.Others ?? "",
          DOB: traveller.DOB ?? null,
          FoodPref: traveller.FoodPref ?? "",
          Disabled: traveller.Disabled ?? false,
          Pregnant: traveller.Pregnant ?? false,
          RegisteredCompanyNumber: gstData.RegisteredCompanyNumber ?? "",
          RegisteredCompanyName: gstData.RegisteredCompanyName ?? "",
          CreatedBy: userId,
          SavePassengerDetails: saveFlag,
        };

        const response = await axios.post("http://localhost:5000/api/bus-booking-seat", payload);
console.log("Seat booking response:", response.data);
        // ✅ Capture BusBookingSeatID
        if (response.data?.BusBookingSeatID) busBookingSeatId = response.data.BusBookingSeatID;

        // Capture booking details ID if needed
        if (!bookingdtlsIdFromResponse && response.data?.BookingdtlsID) bookingdtlsIdFromResponse = response.data.BookingdtlsID;
      }

      // Save locally for confirmation
      localStorage.setItem("bookedSeats", JSON.stringify(selectedSeats));
      localStorage.setItem("passengerDetails", JSON.stringify(travellerData));
      localStorage.setItem("seatsUpdated", "true");

      toast.success("🎉 Booking successful!");

      // ✅ Return all IDs including BusBookingSeatID
      return {
        BookingdtlsID: bookingdtlsIdFromResponse || finalBookingDetailsId || null,
        UserID: userId,
        BusBookingSeatID: busBookingSeatId, // ← now this is correct
      };
    } catch (error: any) {
      console.error("❌ Booking Error:", error);
      toast.error("Failed to save booking.");
      return null;
    }
  };

  return (
    <div className="min-h-screen bg-flixbus-background">
      <Header />
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <JourneyDetails date={travelDate} />
            <TravellerDetails setTravellerData={setTravellerData} selectedSeats={selectedSeats} />
            <ContactDetails setContactData={setContactData} />
            <GSTDetails setGSTData={setGSTData} />
          </div>
          <div className="lg:col-span-1 space-y-6">
            <PriceDetails
              handleSubmit={handleSubmit}
              travellerData={travellerData}
              contactData={contactData}
              gstData={gstData}
              busId={busId}
              selectedSeats={selectedSeats}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BusBookingDetails;
