// import JourneyDetails from "@/components/booking-details/JourneyDetails";
// import TravellerDetails from "@/components/booking-details/TravellerDetails";
// import ContactDetails from "@/components/booking-details/ContactDetails";
// import GSTDetails from "@/components/booking-details/GSTDetails";
// import PincodeSection from "@/components/booking-details/PincodeSection";
// import TripAssured from "@/components/booking-details/TripAssured";
// import OffersSection from "@/components/booking-details/OffersSection";
// import PriceDetails from "@/components/booking-details/PriceDetails";
// import { useState } from "react";
// import axios from "axios";
// import { Toaster, toast } from "react-hot-toast"; // import toast

// const BusBookingDetails = () => {
//   const [travellerData, setTravellerData] = useState<any[]>([]);
//   const [contactData, setContactData] = useState<any>({});
//   const [gstData, setGSTData] = useState<any>({});

//   const handleSubmit = async (saveFlag:"Y" | "N") => {
//     try {
//       for (const traveller of travellerData) {
//         const payload = {
//           BusBookingSeatID: 0,
//           BusBookingDetailsID: traveller.BusBookingDetailsID ?? 101,
//           BusOperatorID: traveller.BusOperatorID ?? 5,
//           UserID: traveller.UserID ?? 12,
//           ForSelf: traveller.ForSelf ?? true,
//           IsPrimary: traveller.IsPrimary ?? 1,
//           SeatNo: traveller.SeatNo,
//           FirstName: traveller.FirstName,
//           MiddleName: traveller.MiddleName,
//           LastName: traveller.LastName,
//           Email: contactData.Email ?? "",
//           ContactNo: contactData.ContactNo ?? "",
//           Gender: traveller.Gender,
//           AadharNo: traveller.AadharNo ?? "",
//           PancardNo: traveller.PancardNo ?? "",
//           BloodGroup: traveller.BloodGroup ?? "",
//           DOB: traveller.DOB ?? null,
//           FoodPref: traveller.FoodPref ?? "",
//           Disabled: traveller.Disabled ?? false,
//           Pregnant: traveller.Pregnant ?? false,
//           RegisteredCompanyNumber: gstData.RegisteredCompanyNumber ?? "",
//           RegisteredCompanyName: gstData.RegisteredCompanyName ?? "",
//           CreatedBy: traveller.CreatedBy ?? 1,
//           SavePassengerDetails: saveFlag,
//         };

//         await axios.post("http://localhost:5000/api/bus-booking-seat", payload);
//       }

//       toast.success("Booking saved successfully!");
//     } catch (error: any) {
//       console.error("Error submitting booking:", error.response || error.message);
//       toast.error("Failed to save booking.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-flixbus-background">
//       <Toaster position="top-right" />
//       <div className="max-w-7xl mx-auto px-4 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
//           <div className="lg:col-span-2 space-y-6">
//             <JourneyDetails />
//             <TravellerDetails setTravellerData={setTravellerData} />
//             <ContactDetails setContactData={setContactData} />
//             <GSTDetails setGSTData={setGSTData} />
//             <PincodeSection />
//             <TripAssured />
//           </div>

       
//           <div className="lg:col-span-1 space-y-6">
//             <OffersSection />
//             <PriceDetails
//               handleSubmit={handleSubmit}
//               travellerData={travellerData}
//               contactData={contactData}
//               gstData={gstData}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BusBookingDetails;

// import TravellerDetails from "@/components/booking-details/TravellerDetails";
// import ContactDetails from "@/components/booking-details/ContactDetails";
// import GSTDetails from "@/components/booking-details/GSTDetails";
// import PincodeSection from "@/components/booking-details/PincodeSection";
// import TripAssured from "@/components/booking-details/TripAssured";
// import OffersSection from "@/components/booking-details/OffersSection";
// import PriceDetails from "@/components/booking-details/PriceDetails";
// import { useState } from "react";
// import axios from "axios";
// import { Toaster, toast } from "react-hot-toast"; // import toast

// const BusBookingDetails = () => {
//   const [travellerData, setTravellerData] = useState<any[]>([]);
//   const [contactData, setContactData] = useState<any>({});
//   const [gstData, setGSTData] = useState<any>({});

//   const handleSubmit = async (saveFlag:"Y" | "N") => {
//     try {
//       for (const traveller of travellerData) {
//         const payload = {
//           BusBookingSeatID: 0,
//           BusBookingDetailsID: traveller.BusBookingDetailsID ?? 101,
//           BusOperatorID: traveller.BusOperatorID ?? 5,
//           UserID: traveller.UserID ?? 12,
//           ForSelf: traveller.ForSelf ?? true,
//           IsPrimary: traveller.IsPrimary ?? 1,
//           SeatNo: traveller.SeatNo,
//           FirstName: traveller.FirstName,
//           MiddleName: traveller.MiddleName,
//           LastName: traveller.LastName,
//           Email: contactData.Email ?? "",
//           ContactNo: contactData.ContactNo ?? "",
//           Gender: traveller.Gender,
//           AadharNo: traveller.AadharNo ?? "",
//           PancardNo: traveller.PancardNo ?? "",
//           BloodGroup: traveller.BloodGroup ?? "",
//           DOB: traveller.DOB ?? null,
//           FoodPref: traveller.FoodPref ?? "",
//           Disabled: traveller.Disabled ?? false,
//           Pregnant: traveller.Pregnant ?? false,
//           RegisteredCompanyNumber: gstData.RegisteredCompanyNumber ?? "",
//           RegisteredCompanyName: gstData.RegisteredCompanyName ?? "",
//           CreatedBy: traveller.CreatedBy ?? 1,
//           SavePassengerDetails: saveFlag,
//         };

//         await axios.post("http://localhost:5000/api/bus-booking-seat", payload);
//       }

//       toast.success("Booking saved successfully!");
//     } catch (error: any) {
//       console.error("Error submitting booking:", error.response || error.message);
//       toast.error("Failed to save booking.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-flixbus-background">
//       <Toaster position="top-right" />
//       <div className="max-w-7xl mx-auto px-4 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Left Column */}
//           <div className="lg:col-span-2 space-y-6">
//             <JourneyDetails />
//             <TravellerDetails setTravellerData={setTravellerData} />
//             <ContactDetails setContactData={setContactData} />
//             <GSTDetails setGSTData={setGSTData} />
//             <PincodeSection />
//             <TripAssured />
//           </div>

//           {/* Right Column */}
//           <div className="lg:col-span-1 space-y-6">
//             {/* <OffersSection /> */}
//             <PriceDetails
//               handleSubmit={handleSubmit}
//               travellerData={travellerData}
//               contactData={contactData}
//               gstData={gstData}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BusBookingDetails;

import JourneyDetails from "@/components/booking-details/JourneyDetails";
import TravellerDetails from "@/components/booking-details/TravellerDetails";
import ContactDetails from "@/components/booking-details/ContactDetails";
import GSTDetails from "@/components/booking-details/GSTDetails";
import PincodeSection from "@/components/booking-details/PincodeSection";
import TripAssured from "@/components/booking-details/TripAssured";
import OffersSection from "@/components/booking-details/OffersSection";
import PriceDetails from "@/components/booking-details/PriceDetails";
import { useEffect, useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const BusBookingDetails = () => {
  const [travellerData, setTravellerData] = useState<any[]>([]);
  const [contactData, setContactData] = useState<any>({});
  const [gstData, setGSTData] = useState<any>({});
  const navigate = useNavigate();


  // ✅ Fetch booking data from localStorage (added this)
  useEffect(() => {
    const bookingData = JSON.parse(localStorage.getItem("bookingData") || "{}");
    console.log("🪑 Booking data on details page:", bookingData);

    if (!bookingData.selectedSeats || bookingData.selectedSeats.length === 0) {
      console.warn("⚠️ No seats found — redirecting back to seat selection.");
      toast.error("No seats found. Please select seats again.");
      // Optional: redirect if needed
      // navigate("/bus-layout");
    }
  }, []);

  // ✅ Final handleSubmit logic
  // const handleSubmit = async (saveFlag: "Y" | "N") => {
  //   try {
  //     const bookingData = JSON.parse(localStorage.getItem("bookingData") || "{}");
  //     const busId = bookingData.busId;
  //     const selectedSeats = bookingData.selectedSeats || [];

  //     if (!busId || selectedSeats.length === 0) {
  //       toast.error("No seats selected or bus information missing.");
  //       return;
  //     }

  //     // Loop through each traveller and seat
  //     for (let i = 0; i < travellerData.length; i++) {
  //       const traveller = travellerData[i];
  //       const seatNo = selectedSeats[i] || selectedSeats[0]; // map traveller to seat

  //       const payload = {
  //         BusBookingSeatID: 0,
  //         BusBookingDetailsID: traveller.BusBookingDetailsID ?? 101,
  //         BusOperatorID: busId,
  //         UserID: traveller.UserID ?? 12,
  //         ForSelf: traveller.ForSelf ?? true,
  //         IsPrimary: traveller.IsPrimary ?? 1,
  //         SeatNo: seatNo, // ✅ dynamic seat
  //         FirstName: traveller.FirstName,
  //         MiddleName: traveller.MiddleName,
  //         LastName: traveller.LastName,
  //         Email: contactData.Email ?? "",
  //         ContactNo: contactData.ContactNo ?? "",
  //         Gender: traveller.Gender,
  //         AadharNo: traveller.AadharNo ?? "",
  //         PancardNo: traveller.PancardNo ?? "",
  //         BloodGroup: traveller.BloodGroup ?? "",
  //         DOB: traveller.DOB ?? null,
  //         FoodPref: traveller.FoodPref ?? "",
  //         Disabled: traveller.Disabled ?? false,
  //         Pregnant: traveller.Pregnant ?? false,
  //         RegisteredCompanyNumber: gstData.RegisteredCompanyNumber ?? "",
  //         RegisteredCompanyName: gstData.RegisteredCompanyName ?? "",
  //         CreatedBy: traveller.CreatedBy ?? 1,
  //         SavePassengerDetails: saveFlag,
  //       };

  //       console.log("🧍 Sending booking payload:", payload);
  //       await axios.post("http://localhost:5000/api/bus-booking-seat", payload);
  //     }

  //     // ✅ After all seats booked
  //     localStorage.setItem("seatsUpdated", "true");
  //     toast.success("Booking saved successfully!");
  //   } catch (error: any) {
  //     console.error("❌ Error submitting booking:", error.response || error.message);
  //     toast.error("Failed to save booking.");
  //   }
  // };
  const handleSubmit = async (saveFlag: "Y" | "N") => {
    try {
      const bookingData = JSON.parse(localStorage.getItem("bookingData") || "{}");
      const busId = bookingData.busId;
      const selectedSeats = bookingData.selectedSeats || [];

      if (!busId || selectedSeats.length === 0) {
        toast.error("No seats selected or bus information missing.");
        return;
      }

      // 🔁 Loop through each traveller and seat
      for (let i = 0; i < travellerData.length; i++) {
        const traveller = travellerData[i];
        const seatNo = selectedSeats[i] || selectedSeats[0]; // map traveller to seat

        const payload = {
          BusBookingSeatID: 0,
          BusBookingDetailsID: traveller.BusBookingDetailsID ?? 101,
          BusOperatorID: busId,
          UserID: traveller.UserID ?? 12,
          ForSelf: traveller.ForSelf ?? true,
          IsPrimary: traveller.IsPrimary ?? 1,
          SeatNo: seatNo, // ✅ dynamic seat
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

      // ✅ After all seats booked
      localStorage.setItem("bookedSeats", JSON.stringify(selectedSeats));
      localStorage.setItem("passengerDetails", JSON.stringify(travellerData));
      localStorage.setItem("seatsUpdated", "true");
      toast.success("🎉 Booking saved successfully!");

      // 🔁 Redirect back to seat layout page after success
      // setTimeout(() => {
      //   window.location.href = `/bus-layout?busId=${busId}`;
      // }, 1500);
      setTimeout(() => navigate(`/bus-layout?busId=${busId}`), 1500);

    } catch (error: any) {
      console.error("❌ Error submitting booking:", error.response || error.message);
      toast.error("Failed to save booking.");
    }
  };


  return (
    <div className="min-h-screen bg-flixbus-background">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <JourneyDetails />
            <TravellerDetails setTravellerData={setTravellerData} />
            <ContactDetails setContactData={setContactData} />
            <GSTDetails setGSTData={setGSTData} />
            <PincodeSection />
            <TripAssured />
          </div>

          <div className="lg:col-span-1 space-y-6">
            <OffersSection />
            <PriceDetails
              handleSubmit={handleSubmit}
              travellerData={travellerData}
              contactData={contactData}
              gstData={gstData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusBookingDetails;

