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
//   const [travelDate, setTravelDate] = useState<string>(""); // ✅ new state for date
//   const [busId, setBusId] = useState(null);
// const [selectedSeats, setSelectedSeats] = useState([]);

//   const navigate = useNavigate();

//   const location = useLocation();

//   const {

//     operatorId,
//     busBookingDetailsId,

//     totalPrice,
//     boardingPoint,
//     droppingPoint,
//     duration,
//     selectedDate
//   } = location.state || {};

//   console.log("🚌 Bus ID:", busId);
//   console.log("👨‍💼 Operator ID:", operatorId);
//   console.log("📄 BusBookingDetails ID:", busBookingDetailsId);
// console.log("Selected Date", selectedDate);

// useEffect(() => {
//     const bookingData = JSON.parse(localStorage.getItem("bookingData") || "{}");
//     console.log("✅ Loaded booking data:", bookingData);



//     console.log("BusBookingDetailiD",bookingData.busBookingDetailsId);
//     console.log("🏢 OperatorId:", bookingData.operator);

//     if (!bookingData.busId) {
//       console.error("❌ busId missing in bookingData!");
//     } else {
//       console.log("🚌 Bus ID Loaded:", bookingData.busId);
//       setBusId(bookingData.busId);
//     }

//     if (bookingData?.selectedSeats?.length > 0) {
//       console.log("✅ Seats Loaded:", bookingData.selectedSeats);
//       setSelectedSeats(bookingData.selectedSeats);
//     } else {
//       console.warn("⚠️ No seats found — redirecting back to seat selection.");
//       toast.error("No seats found. Please select seats again.");
//     }

//     if (bookingData?.selectedDate) {
//       const dateOnly = new Date(bookingData.selectedDate)
//         .toISOString()
//         .split("T")[0];
//       console.log("📅 Extracted Date (no time):", dateOnly);
//       setTravelDate(dateOnly);
//     } else {
//       console.warn("⚠️ selectedDate not found in bookingData");
//     }


//   }, []);



// const bookingData = JSON.parse(localStorage.getItem("bookingData") || "{}");

// const finalOperatorId = operatorId ?? bookingData.operatorId;
// const finalBookingDetailsId = busBookingDetailsId ?? bookingData.busBookingDetailsId;


// // Booking Handler
//   const handleSubmit = async (saveFlag: "Y" | "N") => {
//     try {
//       const bookingData = JSON.parse(localStorage.getItem("bookingData") || "{}");
//       const busId = bookingData.busId;
//       const selectedSeats = bookingData.selectedSeats || [];

//       if (!busId || selectedSeats.length === 0) {
//         toast.error("No seats selected or bus information missing.");
//         return;
//       }

//       // ✅ SAFELY EXTRACT Journey Date
//     let journeyDate: string;
//     if (bookingData?.selectedDate && !isNaN(new Date(bookingData.selectedDate).getTime())) {
//       // Keep consistent with local timezone (IST)
//       const d = new Date(bookingData.selectedDate);
//       const localOffset = d.getTimezoneOffset() * 60000; // offset in ms
//       journeyDate = new Date(d.getTime() - localOffset).toISOString().split("T")[0];
//     } else {
//       console.warn("⚠️ Invalid or missing selectedDate in bookingData:", bookingData.selectedDate);
//       journeyDate = new Date().toISOString().split("T")[0]; // fallback to today's date
//     }

//     console.log("📅 Final JourneyDate used for booking:", journeyDate);
//       // Create / Get PRIMARY User
//       const primaryTraveller = travellerData[0];
//       const userResponse = await axios.post(
//         "https://api.tirupatipackagetours.com/api/user/get-or-create",
//         {
//           ...primaryTraveller,
//           Email: contactData.Email,
//           ContactNo: primaryTraveller.ContactNo || contactData.ContactNo,
//           CreatedBy: 1
//         }
//       );
//       const userId = userResponse.data.UserID;

//       // OPTIONAL: Save all travellers ONLY when user selects saveFlag = "Y"
//       if (saveFlag === "Y") {
//         await Promise.all(
//           travellerData.map(t =>
//             axios.post("https://api.tirupatipackagetours.com/api/user/get-or-create", {
//               ...t,
//               Email: contactData.Email,
//               ContactNo: primaryTraveller.ContactNo || contactData.ContactNo,
//               CreatedBy: userId
//             })
//           )
//         );
//       }


//       for (let i = 0; i < travellerData.length; i++) {
//         const traveller = travellerData[i];
//         const payload = {
//           BusBookingSeatID: 0,
//           BusBookingDetailsID:finalBookingDetailsId,
//          // BusOperatorID: busId,
//          BusOperatorID:finalOperatorId,
//           UserID: userId,
//           ForSelf: traveller.ForSelf ?? true,
//           IsPrimary: i === 0 ? 1 : 0,
//           SeatNo: traveller.SeatNo ,
//           FirstName: traveller.FirstName,
//           MiddleName: traveller.MiddleName,
//           LastName: traveller.LastName,
//           JourneyDate: journeyDate,
//           Age:traveller.Age || traveller.age || "",
//           Email: contactData.Email,
//           ContactNo: contactData.ContactNo,
//           Gender: traveller.Gender,
//           AadharNo: traveller.AadharNo ?? "",
//           PancardNo: traveller.PancardNo ?? "",
//           RationCard: traveller.RationCard ?? "",
//           DrivingLicence: traveller.DrivingLicence ?? "",
//           PassportNo: traveller.PassportNo ?? "",
//           VoterID: traveller.VoterID ?? "",
//           BloodGroup: traveller.BloodGroup ?? "",
//           Others: traveller.Others ?? "",
//           DOB: traveller.DOB ?? null,
//           FoodPref: traveller.FoodPref ?? "",
//           Disabled: traveller.Disabled ?? false,
//           Pregnant: traveller.Pregnant ?? false,
//           RegisteredCompanyNumber: gstData.RegisteredCompanyNumber ?? "",
//           RegisteredCompanyName: gstData.RegisteredCompanyName ?? "",
//           CreatedBy: userId,
//           SavePassengerDetails: saveFlag,
//         };

//         console.log("Seat Assigned:", selectedSeats[i], "→", traveller.FirstName);
//         await axios.post("https://api.tirupatipackagetours.com/api/bus-booking-seat", payload);
//       }

//       localStorage.setItem("bookedSeats", JSON.stringify(selectedSeats));
//       localStorage.setItem("passengerDetails", JSON.stringify(travellerData));
//       localStorage.setItem("seatsUpdated", "true");

//       toast.success("🎉 Booking successful!");
//     } catch (error: any) {
//       console.error("❌ Booking Error:", error);
//       toast.error("Failed to save booking.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-flixbus-background">
//       <Header />

//       <div className="max-w-7xl mx-auto px-4 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           <div className="lg:col-span-2 space-y-6">
//             <JourneyDetails date={travelDate} />
//             <TravellerDetails setTravellerData={setTravellerData} />
//             <ContactDetails setContactData={setContactData} />
//             <GSTDetails setGSTData={setGSTData} />
//           </div>


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

  const {
    operatorId,
    busBookingDetailsId,
    totalPrice,
    boardingPoint,
    droppingPoint,
    duration,
    selectedDate,
  } = location.state || {};

  console.log("🚌 Bus ID (state):", busId);
  console.log("👨‍💼 Operator ID (state):", operatorId);
  console.log("📄 BusBookingDetails ID (state):", busBookingDetailsId);
  console.log("🗓️ Selected Date (state):", selectedDate);

  useEffect(() => {
    const bookingData = JSON.parse(localStorage.getItem("bookingData") || "{}");
    console.log("✅ Loaded booking data from localStorage:", bookingData);

    if (bookingData.busId) {
      setBusId(bookingData.busId);
      console.log("🚌 Bus ID Loaded:", bookingData.busId);
    } else {
      console.warn("⚠️ busId missing in bookingData!");
    }

    if (bookingData.selectedSeats?.length > 0) {
      setSelectedSeats(bookingData.selectedSeats);
      console.log("✅ Seats Loaded:", bookingData.selectedSeats);
    } else {
      toast.error("No seats found. Please select seats again.");
      console.warn("⚠️ No seats found — redirecting back to seat selection.");
    }

    // ✅ Handle selected date (ensure local timezone)
    const dateFromStateOrLocal =
      selectedDate || bookingData.selectedDate || null;

    if (dateFromStateOrLocal) {
      const localDate = new Date(dateFromStateOrLocal);
      const localOffset = localDate.getTimezoneOffset() * 60000;
      const normalizedDate = new Date(localDate.getTime() - localOffset)
        .toISOString()
        .split("T")[0];
      setTravelDate(normalizedDate);
      console.log("📅 Normalized Travel Date:", normalizedDate);
    } else {
      console.warn("⚠️ selectedDate not found in state or localStorage");
    }
  }, [selectedDate]);

  const bookingData = JSON.parse(localStorage.getItem("bookingData") || "{}");

  const finalOperatorId = operatorId ?? bookingData.operatorId;
  const finalBookingDetailsId =
    busBookingDetailsId ?? bookingData.busBookingDetailsId;

  // ✅ Booking Handler
  const handleSubmit = async (saveFlag: "Y" | "N") => {
    try {
      const bookingData = JSON.parse(localStorage.getItem("bookingData") || "{}");
      const busId = bookingData.busId;
      const selectedSeats = bookingData.selectedSeats || [];

      if (!busId || selectedSeats.length === 0) {
        toast.error("No seats selected or bus information missing.");
        return;
      }

      let journeyDate: string;

      if (
        bookingData?.selectedDate &&
        !isNaN(new Date(bookingData.selectedDate).getTime())
      ) {
        const d = new Date(bookingData.selectedDate);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, "0");
        const day = String(d.getDate()).padStart(2, "0");
        journeyDate = `${year}-${month}-${day}`;
      } else {
        console.warn(
          "⚠️ Invalid or missing selectedDate in bookingData:",
          bookingData?.selectedDate
        );
        const now = new Date();
        journeyDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(
          2,
          "0"
        )}-${String(now.getDate()).padStart(2, "0")}`;
      }


      console.log("📅 Final JourneyDate used for booking:", journeyDate);

      // ✅ Create / Get PRIMARY User
      const primaryTraveller = travellerData[0];
      const userResponse = await axios.post(
        "https://api.tirupatipackagetours.com/api/user/get-or-create",
        {
          ...primaryTraveller,
          Email: contactData.Email,
          ContactNo: primaryTraveller?.ContactNo || contactData.ContactNo,
          CreatedBy: 1,
        }
      );

      const userId = userResponse.data.UserID;

      // ✅ Optionally save all travellers
      if (saveFlag === "Y") {
        await Promise.all(
          travellerData.map((t) =>
            axios.post("https://api.tirupatipackagetours.com/api/user/get-or-create", {
              ...t,
              Email: contactData.Email,
              ContactNo: t.ContactNo || contactData.ContactNo,
              CreatedBy: userId,
            })
          )
        );
      }

      // ✅ Save booking seat info
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

        console.log("🧾 Payload being sent to /api/bus-booking-seat:", payload);
        console.log("🗓️ JourneyDate in payload:", payload.JourneyDate);
        console.log("🪑 Seat Assigned:", selectedSeats[i], "→", traveller.FirstName);
        await axios.post("https://api.tirupatipackagetours.com/api/bus-booking-seat", payload);


      }

      // ✅ Save locally for confirmation page
      localStorage.setItem("bookedSeats", JSON.stringify(selectedSeats));
      localStorage.setItem("passengerDetails", JSON.stringify(travellerData));
      localStorage.setItem("seatsUpdated", "true");

      toast.success("🎉 Booking successful!");
    } catch (error: any) {
      console.error("❌ Booking Error:", error);
      toast.error("Failed to save booking.");
    }
  };

  return (
    <div className="min-h-screen bg-flixbus-background">
      <Header />
      <Toaster position="top-center" />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-6">
            <JourneyDetails date={travelDate} />
            <TravellerDetails setTravellerData={setTravellerData} />
            <ContactDetails setContactData={setContactData} />
            <GSTDetails setGSTData={setGSTData} />
          </div>

          {/* RIGHT COLUMN */}
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
