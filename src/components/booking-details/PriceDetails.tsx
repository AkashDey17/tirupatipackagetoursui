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
//         "http://localhost:5000/api/payment/create-order",
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


import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const PriceDetails = ({
  handleSubmit,
  travellerData,
  contactData,
  gstData,
}: {
  handleSubmit: (flag: "Y" | "N") => void;
  travellerData: any[];
  contactData: any;
  gstData: any;
}) => {
  const { state } = useLocation();
  const {
    totalPrice = 0,
    busId,
    selectedSeats,
    boardingPoint,
    droppingPoint,
    duration,
    departureTime,
    arrivalTime,
    busType,       // ✅ correct
    busNumber,     // ✅ correct
    operatorName,  // ✅ correct
    selectedDate,
  } = state || {};

  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleContinueClick = () => setShowPopup(true);

  const goToPayment = async (flag: "Y" | "N") => {
    try {
      await handleSubmit(flag);

      // ✅ Save booking data for future use
      localStorage.setItem(
        "bookingData",
        JSON.stringify({
          busId,
          selectedSeats,
          totalPrice,
          boardingPoint,
          droppingPoint,
          duration,
          travellerData,
          contactData,
          gstData,
        })
      );

      // ✅ Save Trip details to localStorage (for Ticket page)
      const tripInfo = {
        boardingPoint,
        droppingPoint,
        travelDate: selectedDate,
        departureTime: boardingPoint?.Time || departureTime,
        arrivalTime: droppingPoint?.Time || arrivalTime,
        coachType: busType,
        busNumber,
        operator: operatorName,
        duration,
      };

      localStorage.setItem("tripData", JSON.stringify(tripInfo));

      setShowPopup(false);

      // ✅ Pass to payment page also
      navigate("/payment-gateway", {
        state: {
          totalPrice,
          travellerData,
          contactData,
          gstData,
          tripData: tripInfo,
        },
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="bg-flixbus-card rounded-lg border border-flixbus-border p-4 relative">
      <h3 className="text-lg font-semibold text-flixbus-text mb-4">
        Price details
      </h3>

      <div className="space-y-3 mb-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-flixbus-text">Base Fare</span>
          <span className="font-semibold text-flixbus-text">₹{totalPrice}</span>
        </div>

        <div className="h-px bg-flixbus-border my-2"></div>

        <div className="flex justify-between items-center">
          <span className="text-base font-semibold text-flixbus-text">Amount</span>
          <span className="text-lg font-bold text-flixbus-text">₹{totalPrice}</span>
        </div>
      </div>

      <p className="text-xs text-flixbus-light-text mb-4">
        Final payable amount will be updated on the next page
      </p>

      <button
        onClick={handleContinueClick}
        className="w-full bg-[#3D85C6] hover:bg-blue-600 text-white font-semibold py-3 text-base rounded-md"
      >
        CONTINUE
      </button>

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

