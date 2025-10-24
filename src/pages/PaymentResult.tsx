// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const PaymentResult = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [status, setStatus] = useState<"success" | "failed" | "loading">("loading");

//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const orderId = params.get("orderId");

//     if (!orderId) {
//       setStatus("failed");
//       return;
//     }

//     // SANDBOX: assume success for testing
//     setStatus("success");

//     // --- Optional for production ---
//     // axios.get(`/api/payment/status/${orderId}`).then(...).catch(...)
//   }, [location]);

//   if (status === "loading") return <div>Checking payment status...</div>;

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="bg-white p-6 rounded shadow text-center">
//         {status === "success" ? (
//           <>
//             <h2 className="text-2xl font-bold mb-4 text-green-600">Payment Successful!</h2>
//             <p>Your booking is confirmed.</p>
//             <button
//               className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
//               onClick={() => navigate("/ticket")}
//             >
//               View Ticket
//             </button>
//           </>
//         ) : (
//           <>
//             <h2 className="text-2xl font-bold mb-4 text-red-600">Payment Failed!</h2>
//             <p>Please try again later.</p>
//              <button
//               className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
//               onClick={() => navigate("/")}
//             > 
           
//               Go Home
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PaymentResult;

// the above code is good but without payment

// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const PaymentResult = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [status, setStatus] = useState<"success" | "failed" | "loading">(
//     "loading"
//   );

//   const locationState = location.state as {
//   totalPrice: number;
//   travellerData: any[];
//   contactData: any;
//   gstData: any;
// } | null;


//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const orderId = params.get("orderId");

//     if (!orderId) {
//       setStatus("failed");
//       return;
//     }

//     // SANDBOX: assume success for testing
//     setStatus("success");

//     // Production: verify with backend
//     // axios.get(`/api/payment/status/${orderId}`).then(...).catch(...)
//   }, [location]);

//   if (status === "loading") return <div>Checking payment status...</div>;

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="bg-white p-6 rounded shadow text-center">
//         {status === "success" ? (
//           <>
//             <h2 className="text-2xl font-bold mb-4 text-green-600">
//               Payment Successful!
//             </h2>
//             <p>Your booking is confirmed.</p>
//             {/* <button
//               className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
//               onClick={() => navigate("/ticket")}
//             >
//               View Ticket
//             </button> */}
//             <button
//   className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
//   onClick={() =>
//     navigate("/ticket", {
//       state: locationState,
//     })
//   }
// >
//   View Ticket
// </button>
//           </>
//         ) : (
//           <>
//             <h2 className="text-2xl font-bold mb-4 text-red-600">
//               Payment Failed!
//             </h2>
//             <p>Please try again later.</p>
//             <button
//               className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
//               onClick={() => navigate("/ticket")}
//             >
//               Go Home
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PaymentResult;

// the above code is good but details are not sending to /ticket after payment is sucessful


// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const PaymentResult = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [status, setStatus] = useState<"success" | "failed" | "loading">(
//     "loading"
//   );

//   const [bookingData, setBookingData] = useState<any>(null);

//   useEffect(() => {
//     // Read booking data from localStorage
//     const savedBooking = localStorage.getItem("bookingData");
//     if (savedBooking) {
//       setBookingData(JSON.parse(savedBooking));
//     }

//     const params = new URLSearchParams(location.search);
//     const orderId = params.get("orderId");

//     if (!orderId) {
//       setStatus("failed");
//       return;
//     }

//     // SANDBOX: assume success for testing
//     setStatus("success");

//     // Production: verify with backend
//     // axios.get(`/api/payment/status/${orderId}`).then(...).catch(...)
//   }, [location]);




//   if (status === "loading") return <div>Checking payment status...</div>;

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="bg-white p-6 rounded shadow text-center">
//         {status === "success" ? (
//           <>
//             <h2 className="text-2xl font-bold mb-4 text-green-600">
//               Payment Successful!
//             </h2>
//             <p>Your booking is confirmed.</p>
//             <button
//               className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
//               onClick={() =>
//                 navigate("/ticket", {
//                   state: bookingData, // forward the data
//                 })
//               }
//             >
//               View Ticket
//             </button>
//           </>
//         ) : (
//           <>
//             <h2 className="text-2xl font-bold mb-4 text-red-600">
//               Payment Failed!
//             </h2>
//             <p>Please try again later.</p>
//             <button
//               className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
//               onClick={() => navigate("/ticket")}
//             >
//               Go Home
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PaymentResult;


import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [status, setStatus] = useState<"success" | "failed" | "loading">("loading");
  const [bookingData, setBookingData] = useState<any>(null);

  useEffect(() => {
    // ✅ Retrieve booking data from localStorage
    const savedBooking = localStorage.getItem("bookingData");

    if (!savedBooking) {
      console.warn("⚠️ Missing booking data, skipping seat reduction");
      setStatus("failed");
      return;
    }

    const booking = JSON.parse(savedBooking);
    setBookingData(booking);

    // ✅ Check payment result (mock for now)
    const params = new URLSearchParams(location.search);
    const orderId = params.get("orderId");

    if (!orderId) {
      setStatus("failed");
      return;
    }

    // ✅ Assume payment success for now
    setStatus("success");

    // ✅ Prepare payload for seat reduction
    const payload = {
      BusOperatorID: booking?.busId || booking?.travellerData?.[0]?.BusOperatorID || 0,
      BookedSeats:
        booking?.selectedSeats?.length ||
        booking?.travellerData?.length ||
        0,
    };

    console.log("🎟️ Seat reduction payload:", payload);

    // ✅ Call backend only if valid booking info
    if (payload.BusOperatorID && payload.BookedSeats > 0) {
      fetch("http://localhost:5000/api/bus/reduceSeat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("✅ Seat reduction success:", data);
            localStorage.setItem("seatsUpdated", "true");
        })
        .catch((err) => {
          console.error("❌ Error reducing seat:", err);
        });
    } else {
      console.warn("⚠️ Missing bus or seat info, skipping seat reduction");
    }
  }, [location]);

  if (status === "loading") return <div>Checking payment status...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow text-center">
        {status === "success" ? (
          <>
            <h2 className="text-2xl font-bold mb-4 text-green-600">
              Payment Successful!
            </h2>
            <p>Your booking is confirmed.</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
              onClick={() =>
                navigate("/ticket", {
                  state: bookingData, // ✅ pass booking data to ticket page
                })
              }
            >
              View Ticket
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4 text-red-600">
              Payment Failed!
            </h2>
            <p>Please try again later.</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
              onClick={() => navigate("/")}
            >
              Go Home
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentResult;

