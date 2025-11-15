// import { useLocation, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";

// const PriceDetails = ({
//   handleSubmit,
//   travellerData,
//   contactData,
//   gstData,
// }: {
//   handleSubmit: (flag: "Y" | "N") => void;
//   travellerData: any[];
//   contactData: any;
//   gstData: any;
// }) => {
//   const { state } = useLocation();
//   const { totalPrice = 0, busId, selectedSeats, boardingPoint, droppingPoint, duration } = state || {};
//   const navigate = useNavigate();

//   const [showPopup, setShowPopup] = useState(false);

//   const handleContinueClick = () => setShowPopup(true);

//   const goToPayment = async (flag: "Y" | "N") => {
//     try {
//       // ✅ Save traveller & passenger info to backend
//       await handleSubmit(flag);

//       // ✅ Store full booking info for PaymentResult.tsx
//       localStorage.setItem(
//         "bookingData",
//         JSON.stringify({
//           busId,                // ✅ Dynamic bus ID (no hardcode)
//           selectedSeats,
//           totalPrice,
//           boardingPoint,
//           droppingPoint,
//           duration,
//           travellerData,
//           contactData,
//           gstData,
//         })
//       );

//       setShowPopup(false);

//       // ✅ Create PhonePe order
//       const response = await axios.post(
//         "https://api.tirupatipackagetours.com/api/payment/create-order",
//         {
//           merchantOrderId: "ORDER" + Date.now(),
//           amount: totalPrice * 100, // in paise
//         }
//       );

//       const { phonepeResponse } = response.data;

//       if (phonepeResponse?.redirectUrl) {
//         window.location.href = phonepeResponse.redirectUrl; // redirect to payment
//       } else {
//         alert("Payment initiation failed. Check console for details.");
//         console.log(phonepeResponse);
//       }
//     } catch (error: any) {
//       console.error(
//         "Error creating payment order:",
//         error.response?.data || error.message
//       );
//       alert("Failed to initiate payment. Check console.");
//     }
//   };

//   return (
//     <div className="bg-flixbus-card rounded-lg border border-flixbus-border p-4 relative">
//       <h3 className="text-lg font-semibold text-flixbus-text mb-4">
//         Price details
//       </h3>

//       <div className="space-y-3 mb-4">
//         <div className="flex justify-between items-center">
//           <span className="text-sm text-flixbus-text">Base Fare</span>
//           <span className="font-semibold text-flixbus-text">₹{totalPrice}</span>
//         </div>

//         <div className="h-px bg-flixbus-border my-2"></div>

//         <div className="flex justify-between items-center">
//           <span className="text-base font-semibold text-flixbus-text">Amount</span>
//           <span className="text-lg font-bold text-flixbus-text">₹{totalPrice}</span>
//         </div>
//       </div>

//       <p className="text-xs text-flixbus-light-text mb-4">
//         Final payable amount will be updated on the next page
//       </p>

//       <button
//         onClick={handleContinueClick}
//         className="w-full bg-[#3D85C6] hover:bg-blue-600 text-white font-semibold py-3 text-base rounded-md"
//       >
//         CONTINUE
//       </button>

//       {showPopup && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
//             <h2 className="text-lg font-semibold mb-4 text-[#3D85C6]">
//               Would you like to save the passenger details to your profile?
//             </h2>
//             <div className="flex justify-around mt-4">
//               <button
//                 onClick={() => goToPayment("Y")}
//                 className="px-4 py-2 rounded-md bg-[#4a4a4a] text-white hover:opacity-90"
//               >
//                 Yes
//               </button>
//               <button
//                 onClick={() => goToPayment("N")}
//                 className="px-4 py-2 rounded-md bg-[#4a4a4a] text-white hover:opacity-90"
//               >
//                 No
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PriceDetails;
// the above code is redirecting to phone pe dummy payment page



// import { useLocation, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { useEffect } from "react";


// const PriceDetails = ({
//   handleSubmit,
//   travellerData,
//   contactData,
//   gstData,
//   busId,
//   selectedSeats,
// }: {
//   handleSubmit: (flag: "Y" | "N") => void;
//   travellerData: any[];
//   contactData: any;
//   gstData: any;
//   busId: any;
//   selectedSeats: any[];
// }) => {
//   const { state } = useLocation();
//   const {
//     totalPrice = 0,

//     boardingPoint,
//     droppingPoint,
//     duration,
//     departureTime,
//     arrivalTime,
//     busType,       // ✅ correct
//     busNumber,     // ✅ correct
//     operatorName,  // ✅ correct
//     selectedDate,
//   } = state || {};

//   const navigate = useNavigate();
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     const sessionId = localStorage.getItem("sessionId");
//     return () => {
//       if (selectedSeats?.length > 0 && sessionId) {
//         console.log("🔓 Unlocking seats on page exit:", selectedSeats);
//         selectedSeats.forEach((seat) => {
//           fetch("https://api.tirupatipackagetours.com/api/seat/unlock", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ busId, seatNo: seat, sessionId }),
//           }).catch((err) => console.error("Unlock error:", err));
//         });
//       }
//     };
//   }, [busId, selectedSeats]);

//   const handleContinueClick = () => setShowPopup(true);

//   const goToPayment = async (flag: "Y" | "N") => {
//     try {
//       await handleSubmit(flag);

//       // ✅ Generate sessionId if not exists
//       let sessionId = localStorage.getItem("sessionId");
//       if (!sessionId) {
//         sessionId = "USER-" + Date.now();
//         localStorage.setItem("sessionId", sessionId);
//       }

//       // ✅ Lock all selected seats
//       for (const seat of selectedSeats) {
//         await fetch("https://api.tirupatipackagetours.com/api/seat/lock", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ busId, seatNo: seat, sessionId }),
//         });
//       }

//       // ✅ Save trip data to localStorage
//       localStorage.setItem(
//         "tripData",
//         JSON.stringify({
//           boardingPoint,
//           droppingPoint,
//           travelDate: selectedDate,
//           departureTime: boardingPoint?.Time || departureTime,
//           arrivalTime: droppingPoint?.Time || arrivalTime,
//           coachType: busType,
//           busNumber,
//           operator: operatorName,
//           duration,
//         })
//       );

//       setShowPopup(false);

//       // ✅ Redirect to payment page
//       navigate("/payment-gateway", {
//         state: {
//           totalPrice,
//           travellerData,
//           contactData,
//           gstData,
//         },
//       });
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Something went wrong");
//     }
//   };

//   return (
//     <div className="bg-flixbus-card rounded-lg border border-flixbus-border p-4 relative">
//       <h3 className="text-lg font-semibold text-flixbus-text mb-4">Price details</h3>
//       <div className="space-y-3 mb-4">
//         <div className="flex justify-between items-center">
//           <span className="text-sm text-flixbus-text">Base Fare</span>
//           <span className="font-semibold text-flixbus-text">₹{totalPrice}</span>
//         </div>
//         <div className="h-px bg-flixbus-border my-2"></div>
//         <div className="flex justify-between items-center">
//           <span className="text-base font-semibold text-flixbus-text">Amount</span>
//           <span className="text-lg font-bold text-flixbus-text">₹{totalPrice}</span>
//         </div>
//       </div>
//       <p className="text-xs text-flixbus-light-text mb-4">
//         Final payable amount will be updated on the next page
//       </p>
//       <button
//         onClick={handleContinueClick}
//         className="w-full bg-[#3D85C6] hover:bg-blue-600 text-white font-semibold py-3 text-base rounded-md"
//       >
//         CONTINUE
//       </button>

//       {showPopup && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
//             <h2 className="text-lg font-semibold mb-4 text-[#3D85C6]">
//               Would you like to save the passenger details to your profile?
//             </h2>
//             <div className="flex justify-around mt-4">
//               <button
//                 onClick={() => goToPayment("Y")}
//                 className="px-4 py-2 rounded-md bg-[#4a4a4a] text-white hover:opacity-90"
//               >
//                 Yes
//               </button>
//               <button
//                 onClick={() => goToPayment("N")}
//                 className="px-4 py-2 rounded-md bg-[#4a4a4a] text-white hover:opacity-90"
//               >
//                 No
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PriceDetails;

// the above code is redirect to static qr code

// price details code without gst and con fees
// import { useLocation, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { useEffect } from "react";
// import { toast } from "react-hot-toast";


// const PriceDetails = ({
//   handleSubmit,
//   travellerData,
//   contactData,
//   gstData,
//   busId,
//   selectedSeats,
//   packageId, 
//   from

// }: {
//   handleSubmit: (flag: "Y" | "N") => void;
//   travellerData: any[];
//   contactData: any;
//   gstData: any;
//   busId: any;
//   selectedSeats: any[];
//   packageId?: number;
//   from?:string
// }) => {
//   const { state } = useLocation();
//   const {
//     totalPrice = 0,

//     boardingPoint,
//     droppingPoint,
//     duration,
//     departureTime,
//     arrivalTime,
//     busType,       // ✅ correct
//     busNumber,     // ✅ correct
//     operatorName,  // ✅ correct
//     selectedDate,
//   } = state || {};

//   const navigate = useNavigate();
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     const sessionId = localStorage.getItem("sessionId");
//     return () => {
//       if (selectedSeats?.length > 0 && sessionId) {
//         console.log("🔓 Unlocking seats on page exit:", selectedSeats);
//         selectedSeats.forEach((seat) => {
//           fetch("https://api.tirupatipackagetours.com/api/seat/unlock", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ busId, seatNo: seat, sessionId , journeyDate: selectedDate,}),
//           }).catch((err) => console.error("Unlock error:", err));
//         });
//       }
//     };
//   }, [busId, selectedSeats]);

  
// // const handleContinueClick = () => {
// //   // ✅ Basic traveller validation
// //   if (!travellerData || travellerData.length === 0) {
// //     toast.error("Please fill traveller details before continuing");
// //     return;
// //   }

// //   for (let i = 0; i < travellerData.length; i++) {
// //     const t = travellerData[i];
// //     if (!t.FirstName?.trim()) {
// //       toast.error(`Enter name for traveller ${i + 1}`);
// //       return;
// //     }
// //     if (!t.Age || Number(t.Age) <= 0) {
// //       toast.error(`Enter valid age for traveller ${i + 1}`);
// //       return;
// //     }
// //     if (!t.Gender) {
// //       toast.error(`Select gender for traveller ${i + 1}`);
// //       return;
// //     }
// //   }

// //   // ✅ Contact details validation
// //   if (!contactData?.Email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactData.Email)) {
// //     toast.error("Enter valid email address");
// //     return;
// //   }
// //   if (!contactData?.ContactNo || !/^[6-9]\d{9}$/.test(contactData.ContactNo)) {
// //     toast.error("Enter valid 10-digit mobile number");
// //     return;
// //   }

// //   // ✅ If all ok, show popup
// //   setShowPopup(true);
// // };

//  const handleContinueClick = () => {
//   // ✅ Basic traveller validation
//   if (!travellerData || travellerData.length === 0) {
//     toast.error("Please fill traveller details before continuing");
//     return;
//   }

//   for (let i = 0; i < travellerData.length; i++) {
//     const t = travellerData[i];
//     if (!t.FirstName?.trim()) {
//       toast.error(`Enter name for traveller ${i + 1}`);
//       return;
//     }
//     if (!t.Age || Number(t.Age) <= 0) {
//       toast.error(`Enter valid age for traveller ${i + 1}`);
//       return;
//     }
//     if (!t.Gender) {
//       toast.error(`Select gender for traveller ${i + 1}`);
//       return;
//     }

//     // ✅ Document validation (fix)
//     const hasDocType =
//       t.AadharNo || t.PancardNo || t.DrivingLicence || t.PassportNo || t.VoterID || t.RationCard || t.Others;

//     if (hasDocType) {
//       const docValue =
//         t.AadharNo || t.PancardNo || t.DrivingLicence || t.PassportNo || t.VoterID || t.RationCard || t.Others;

//       if (!docValue?.trim()) {
//         toast.error(`Enter document number for traveller ${i + 1}`);
//         return;
//       }
//     }
//   }

//   // ✅ Contact details validation
//   if (!contactData?.Email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactData.Email)) {
//     toast.error("Enter valid email address");
//     return;
//   }
//   if (!contactData?.ContactNo || !/^[6-9]\d{9}$/.test(contactData.ContactNo)) {
//     toast.error("Enter valid 10-digit mobile number");
//     return;
//   }

//   // ✅ If all ok, show popup
//   setShowPopup(true);
// };



// // const goToPayment = async (flag: "Y" | "N") => {
// //   try {
// //     // Call parent submit (likely inserts booking)
// //     const bookingResponse: any = await handleSubmit(flag);

// //     // ✅ Extract IDs safely
// //     const userId = bookingResponse?.UserID || contactData?.UserID || 1; // fallback to logged-in or guest
// //     const bookingdtlsId = bookingResponse?.BookingdtlsID || bookingResponse?.bookingId || null;
// //      const busBookingSeatId = bookingResponse?.BusBookingSeatID || null;
// //     if
// //      (!bookingdtlsId) {
// //       toast.error("Booking details not found. Please retry.");
// //       return;
// //     }

// //     // ✅ Generate or reuse session ID
// //     let sessionId = localStorage.getItem("sessionId");
// //     if (!sessionId) {
// //       sessionId = "USER-" + Date.now();
// //       localStorage.setItem("sessionId", sessionId);
// //     }

// //     // ✅ Lock selected seats
// //     if (selectedSeats?.length > 0) {
// //       console.log("🔒 Locking seats before payment:", selectedSeats);
// //       await Promise.all(
// //         selectedSeats.map((seat) =>
// //           fetch("https://api.tirupatipackagetours.com/api/seat/lock", {
// //             method: "POST",
// //             headers: { "Content-Type": "application/json" },
// //             body: JSON.stringify({
// //               busId,
// //               seatNo: seat,
// //               sessionId,
// //               journeyDate: selectedDate,
// //             }),
// //           })
// //         )
// //       );
// //     }

// //     // ✅ Prepare full booking data
// //     const bookingData = {
// //       boardingPoint,
// //       droppingPoint,
// //       travelDate: selectedDate,
// //       departureTime: boardingPoint?.Time || departureTime,
// //       arrivalTime: droppingPoint?.Time || arrivalTime,
// //       coachType: busType,
// //       busNumber,
// //       operator: operatorName,
// //       duration,
// //       travellerData,
// //       contactData,
// //       gstData,
// //       selectedSeats,
// //       busId,
// //       totalPrice,
// //       passengerCount: travellerData?.length || selectedSeats?.length || 1,
// //     };

// //     // Save to localStorage for later use
// //     localStorage.setItem("bookingData", JSON.stringify(bookingData));

// //     setShowPopup(false);

// //     // ✅ Create PhonePe order
// //     const response = await fetch("https://api.tirupatipackagetours.com/api/payment/create-order", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({
// //         merchantOrderId: "ORDER" + Date.now(),
// //         amount: totalPrice * 100,
// //         userId: userId,
// //         bookingdtlsId: bookingdtlsId,
// //         busBookingSeatId: busBookingSeatId,
// //       }),
// //     });

// //     const data = await response.json();
// //     const { phonepeResponse } = data;

// //     await new Promise((res) => setTimeout(res, 500));

// //     if (phonepeResponse?.redirectUrl) {
// //       console.log("✅ Redirecting to PhonePe:", phonepeResponse.redirectUrl);
// //       window.location.href = phonepeResponse.redirectUrl;
// //     } else {
// //       alert("Payment initiation failed. Check console for details.");
// //       console.error(phonepeResponse);
// //     }
// //   } catch (error: any) {
// //     console.error("❌ Error during goToPayment:", error);
// //     alert("Something went wrong while locking seats or starting payment.");
// //   }
// // };
//  const goToPayment = async (flag: "Y" | "N") => {
//   try {
//     // Call parent submit (likely inserts booking)
//     const bookingResponse: any = await handleSubmit(flag);

//     // ✅ Extract IDs safely
//     const userId = bookingResponse?.UserID || contactData?.UserID || 1; // fallback to logged-in or guest
//     const bookingdtlsId = bookingResponse?.BookingdtlsID || bookingResponse?.bookingId || null;
//      const busBookingSeatId = bookingResponse?.BusBookingSeatID || null;
//     if
//      (!bookingdtlsId) {
//       toast.error("Booking details not found. Please retry.");
//       return;
//     }

//     // ✅ Generate or reuse session ID
//     let sessionId = localStorage.getItem("sessionId");
//     if (!sessionId) {
//       sessionId = "USER-" + Date.now();
//       localStorage.setItem("sessionId", sessionId);
//     }

//     // // ✅ Lock selected seats
//     // if (selectedSeats?.length > 0) {
//     //   console.log("🔒 Locking seats before payment:", selectedSeats);
//     //   await Promise.all(
//     //     selectedSeats.map((seat) =>
//     //       fetch("https://api.tirupatipackagetours.com/api/seat/lock", {
//     //         method: "POST",
//     //         headers: { "Content-Type": "application/json" },
//     //         body: JSON.stringify({
//     //           busId,
//     //           seatNo: seat,
//     //           sessionId,
//     //           journeyDate: selectedDate,
//     //         }),
//     //       })
//     //     )
//     //   );
//     // }

//     // ✅ Prepare full booking data
//     const bookingData = {
//       boardingPoint,
//       droppingPoint,
//       travelDate: selectedDate,
//       departureTime: boardingPoint?.Time || departureTime,
//       arrivalTime: droppingPoint?.Time || arrivalTime,
//       coachType: busType,
//       busNumber,
//       operator: operatorName,
//       duration,
//       travellerData,
//       contactData,
//       gstData,
//       selectedSeats,
//       busId,
//       totalPrice,
//       passengerCount: travellerData?.length || selectedSeats?.length || 1,
//        packageId,
//        from
//     };

//     // Save to localStorage for later use
//     localStorage.setItem("bookingData", JSON.stringify(bookingData));

//     setShowPopup(false);

//     // ✅ Create PhonePe order
//     const response = await fetch("https://api.tirupatipackagetours.com/api/payment/create-order", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         merchantOrderId: "ORDER" + Date.now(),
//         amount: totalPrice * 100,
//         userId: userId,
//         bookingdtlsId: bookingdtlsId,
//         busBookingSeatId: busBookingSeatId,
//         selectedDate: selectedDate,
//          packageId: packageId,
//          from:from
//       }),
//     });

//     const data = await response.json();
//     const { phonepeResponse } = data;

//     await new Promise((res) => setTimeout(res, 500));

//     if (phonepeResponse?.redirectUrl) {
//       console.log("✅ Redirecting to PhonePe:", phonepeResponse.redirectUrl);
//       window.location.href = phonepeResponse.redirectUrl;
//     } else {
//       alert("Payment initiation failed. Check console for details.");
//       console.error(phonepeResponse);
//     }
//   } catch (error: any) {
//     console.error("❌ Error during goToPayment:", error);
//     alert("Something went wrong while locking seats or starting payment.");
//   }
// };


//   return (
//     <div className="bg-flixbus-card rounded-lg border border-flixbus-border p-4 relative">
//       <h3 className="text-lg font-semibold text-flixbus-text mb-4">Price details</h3>
//       <div className="space-y-3 mb-4">
//         <div className="flex justify-between items-center">
//           <span className="text-sm text-flixbus-text">Base Fare</span>
//           <span className="font-semibold text-flixbus-text">₹{totalPrice}</span>
//         </div>
//         <div className="h-px bg-flixbus-border my-2"></div>
//         <div className="flex justify-between items-center">
//           <span className="text-base font-semibold text-flixbus-text">Amount</span>
//           <span className="text-lg font-bold text-flixbus-text">₹{totalPrice}</span>
//         </div>
//       </div>
//       <p className="text-xs text-flixbus-light-text mb-4">
//         Final payable amount will be updated on the next page
//       </p>
//       <button
//         onClick={handleContinueClick}
//         className="w-full bg-[#3D85C6] hover:bg-blue-600 text-white font-semibold py-3 text-base rounded-md"
//       >
//         CONTINUE
//       </button>

//       {showPopup && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
//             <h2 className="text-lg font-semibold mb-4 text-[#3D85C6]">
//               Would you like to save the passenger details to your profile?
//             </h2>
//             <div className="flex justify-around mt-4">
//               <button
//                 onClick={() => goToPayment("Y")}
//                 className="px-4 py-2 rounded-md bg-[#4a4a4a] text-white hover:opacity-90"
//               >
//                 Yes
//               </button>
//               <button
//                 onClick={() => goToPayment("N")}
//                 className="px-4 py-2 rounded-md bg-[#4a4a4a] text-white hover:opacity-90"
//               >
//                 No
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PriceDetails;
// price details code without gsta nd con fees


import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const PriceDetails = ({
  handleSubmit,
  travellerData,
  contactData,
  gstData,
  busId,
  selectedSeats,
  packageId,
  from,
}: {
  handleSubmit: (flag: "Y" | "N") => void;
  travellerData: any[];
  contactData: any;
  gstData: any;
  busId: any;
  selectedSeats: any[];
  packageId?: number;
  from?: string;
}) => {
  const { state } = useLocation();
  const {
    totalPrice = 0,
    boardingPoint,
    droppingPoint,
    duration,
    departureTime,
    arrivalTime,
    busType,
    busNumber,
    operatorName,
    selectedDate,
  } = state || {};

  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  // ---------------------------------------------
  // 🔐 Unlock on unmount
  // ---------------------------------------------
  useEffect(() => {
    const sessionId = localStorage.getItem("sessionId");

    return () => {
      if (selectedSeats?.length > 0 && sessionId) {
        selectedSeats.forEach((seat) => {
          fetch("https://api.tirupatipackagetours.com/api/seat/unlock", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              busId,
              seatNo: seat,
              sessionId,
              journeyDate: selectedDate,
            }),
          }).catch((err) => console.error("Unlock error:", err));
        });
      }
    };
  }, [busId, selectedSeats]);

  // ---------------------------------------------
  // ✨ VALIDATION
  // ---------------------------------------------
  const handleContinueClick = () => {
    if (!travellerData || travellerData.length === 0) {
      toast.error("Please fill traveller details before continuing");
      return;
    }

    for (let i = 0; i < travellerData.length; i++) {
      const t = travellerData[i];

      if (!t.FirstName?.trim()) {
        toast.error(`Enter name for traveller ${i + 1}`);
        return;
      }
      if (!t.Age || Number(t.Age) <= 0) {
        toast.error(`Enter valid age for traveller ${i + 1}`);
        return;
      }
      if (!t.Gender) {
        toast.error(`Select gender for traveller ${i + 1}`);
        return;
      }

      const hasDoc =
        t.AadharNo ||
        t.PancardNo ||
        t.DrivingLicence ||
        t.PassportNo ||
        t.VoterID ||
        t.RationCard ||
        t.Others;

      if (hasDoc) {
        const doc =
          t.AadharNo ||
          t.PancardNo ||
          t.DrivingLicence ||
          t.PassportNo ||
          t.VoterID ||
          t.RationCard ||
          t.Others;

        if (!doc.trim()) {
          toast.error(`Enter document number for traveller ${i + 1}`);
          return;
        }
      }
    }

    if (
      !contactData?.Email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactData.Email)
    ) {
      toast.error("Enter valid email");
      return;
    }

    if (
      !contactData?.ContactNo ||
      !/^[6-9]\d{9}$/.test(contactData.ContactNo)
    ) {
      toast.error("Enter valid 10-digit mobile number");
      return;
    }

    setShowPopup(true);
  };

  // ---------------------------------------------
  // 🚀 PAYMENT LOGIC
  // ---------------------------------------------
  // const goToPayment = async (flag: "Y" | "N") => {
  //   try {
  //     const bookingResponse: any = await handleSubmit(flag);

  //     const userId = bookingResponse?.UserID || 1;
  //     const bookingdtlsId =
  //       bookingResponse?.BookingdtlsID || bookingResponse?.bookingId;
  //     const busBookingSeatId = bookingResponse?.BusBookingSeatID || null;

  //     if (!bookingdtlsId) {
  //       toast.error("Booking details missing.");
  //       return;
  //     }

  //     let sessionId = localStorage.getItem("sessionId");
  //     if (!sessionId) {
  //       sessionId = "USER-" + Date.now();
  //       localStorage.setItem("sessionId", sessionId);
  //     }

  //     // Save booking data in localStorage
  //     const fullBookingData = {
  //       boardingPoint,
  //       droppingPoint,
  //       travelDate: selectedDate,
  //       departureTime: boardingPoint?.Time || departureTime,
  //       arrivalTime: droppingPoint?.Time || arrivalTime,
  //       coachType: busType,
  //       busNumber,
  //       operator: operatorName,
  //       duration,
  //       travellerData,
  //       contactData,
  //       gstData,
  //       selectedSeats,
  //       busId,
  //       totalPrice,
  //       passengerCount: travellerData?.length || selectedSeats?.length || 1,
  //       packageId,
  //       from,
  //     };

  //     localStorage.setItem("bookingData", JSON.stringify(fullBookingData));

  //     setShowPopup(false);

  //     // Create payment order
  //     const response = await fetch(
  //       "https://api.tirupatipackagetours.com/api/payment/create-order",
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({
  //           merchantOrderId: "ORDER" + Date.now(),
  //           amount: totalPrice * 100,
  //           userId,
  //           bookingdtlsId,
  //           busBookingSeatId,
  //           selectedDate,
  //           packageId,
  //           from,
  //         }),
  //       }
  //     );

  //     const data = await response.json();
  //     const { phonepeResponse } = data;

  //     if (phonepeResponse?.redirectUrl) {
  //       window.location.href = phonepeResponse.redirectUrl;
  //     } else {
  //       alert("Payment creation failed");
  //     }
  //   } catch (e) {
  //     console.error("Payment error:", e);
  //     alert("Something went wrong.");
  //   }
  // };
const goToPayment = async (flag: "Y" | "N") => {
  try {
    // STEP 1: Save booking → returns seat IDs ARRAY
    const bookingResponse: any = await handleSubmit(flag);

    // Extract seat ID array safely
    const busBookingSeatIds =
      bookingResponse?.BusBookingSeatIDs ||
      bookingResponse?.busBookingSeatIds ||
      [];

    const userId =
      bookingResponse?.UserID || contactData?.UserID || 1;

    const bookingdtlsId =
      bookingResponse?.BookingdtlsID ||
      bookingResponse?.bookingId ||
      null;

    if (!bookingdtlsId) {
      toast.error("Booking details not found. Please retry.");
      return;
    }

    // STEP 2: Generate Session ID
    let sessionId = localStorage.getItem("sessionId");
    if (!sessionId) {
      sessionId = "USER-" + Date.now();
      localStorage.setItem("sessionId", sessionId);
    }

    // STEP 3: Prepare booking data for localStorage
    const bookingData = {
      boardingPoint,
      droppingPoint,
      travelDate: selectedDate,
      departureTime: boardingPoint?.Time || departureTime,
      arrivalTime: droppingPoint?.Time || arrivalTime,
      coachType: busType,
      busNumber,
      operator: operatorName,
      duration,
      travellerData,
      contactData,
      gstData,
      selectedSeats,
      busId,
      totalPrice,
      passengerCount:
        travellerData?.length || selectedSeats?.length || 1,
      packageId,
      from,
    };

    localStorage.setItem("bookingData", JSON.stringify(bookingData));
    setShowPopup(false);

    // STEP 4: Create payment order → SEND ARRAY of seat IDs
    const response = await fetch(
      "https://api.tirupatipackagetours.com/api/payment/create-order",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          merchantOrderId: "ORDER" + Date.now(),
          amount: totalPrice * 100,
          userId: userId,
          bookingdtlsId: bookingdtlsId,

          //SEND ARRAY instead of single ID
          busBookingSeatIds: busBookingSeatIds,

          selectedDate: selectedDate,
          packageId: packageId,
          from: from,
        }),
      }
    );

    const data = await response.json();
    const { phonepeResponse } = data;

    await new Promise((res) => setTimeout(res, 500));

    if (phonepeResponse?.redirectUrl) {
      console.log("✅ Redirecting to PhonePe:", phonepeResponse.redirectUrl);
      window.location.href = phonepeResponse.redirectUrl;
    } else {
      alert("Payment initiation failed. Check console for details.");
      console.error(phonepeResponse);
    }
  } catch (error: any) {
    console.error("❌ Error during goToPayment:", error);
    alert("Something went wrong while locking seats or starting payment.");
  }
};
  // ---------------------------------------------
  // 💰 PRICE BREAKDOWN (IMPORTANT PART)
  // ---------------------------------------------
  const finalTotal = totalPrice; // e.g., 2300
  const convenienceFee = 35;

  const amountWithoutFee = finalTotal - convenienceFee; // remove fee
  const baseFare = amountWithoutFee / 1.05; // remove GST
  const gstAmount = amountWithoutFee - baseFare; // GST 5%

  const finalPayable = finalTotal;

  // ---------------------------------------------
  // UI START
  // ---------------------------------------------
  return (
    <div className="bg-flixbus-card rounded-lg border border-flixbus-border p-4 relative">
      <h3 className="text-lg font-semibold text-flixbus-text mb-4">
        Price details
      </h3>

      {/* PRICE BREAKDOWN */}
      <div className="space-y-3 mb-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-flixbus-text">Base Fare</span>
          <span className="font-semibold text-flixbus-text">
            ₹{baseFare.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-flixbus-text">GST (5%)</span>
          <span className="font-semibold text-flixbus-text">
            ₹{gstAmount.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-flixbus-text">Convenience Fee</span>
          <span className="font-semibold text-flixbus-text">
            ₹{convenienceFee}
          </span>
        </div>

        <div className="h-px bg-flixbus-border my-2"></div>

        <div className="flex justify-between items-center">
          <span className="text-base font-semibold text-flixbus-text">
            Total Payable
          </span>
          <span className="text-lg font-bold text-flixbus-text">
            ₹{finalPayable}
          </span>
        </div>
      </div>

      <button
        onClick={handleContinueClick}
        className="w-full bg-[#3D85C6] hover:bg-blue-600 text-white font-semibold py-3 text-base rounded-md"
      >
        CONTINUE
      </button>

      {/* SAVE POPUP */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
            <h2 className="text-lg font-semibold mb-4 text-[#3D85C6]">
              Would you like to save the passenger details to your profile?
            </h2>

            <div className="flex justify-around mt-4">
              <button
                onClick={() => goToPayment("Y")}
                className="px-4 py-2 rounded-md bg-[#4a4a4a] text-white hover:opacity-90"
              >
                Yes
              </button>

              <button
                onClick={() => goToPayment("N")}
                className="px-4 py-2 rounded-md bg-[#4a4a4a] text-white hover:opacity-90"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceDetails;
