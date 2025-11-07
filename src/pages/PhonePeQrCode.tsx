import { useLocation, useNavigate } from "react-router-dom";
import qrImage from "@/assets/qrcode.jpg"; // replace with your QR image

export default function PhonePeQrCode() {
  const { state } = useLocation();
  const navigate = useNavigate();

  // ✅ Safe parse
  const storedTrip = localStorage.getItem("tripData");
  const tripData = storedTrip ? JSON.parse(storedTrip) : {};

  const { totalPrice } = state || {};

  const handleDone = () => {
    navigate("/ticket", {
      state: {
        totalPrice,
        travellerData: state?.travellerData,
        contactData: state?.contactData,
        gstData: state?.gstData,
        tripData,  // ✅ pass tripData
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <h2 className="text-2xl font-bold mb-4 text-black">Scan & Pay</h2>

      <p className="text-lg font-semibold mb-2 text-black">Amount: ₹{totalPrice}</p>

      <img src={qrImage} alt="QR Code" className="w-70 h-70 border p-2 rounded-lg shadow-lg mb-4" />

      <p className="text-xs text-gray-700 text-center mb-4">
        DISCLAIMER: This ticket is temporary. Our operator will call you for confirmation.<br />
        You can download and view your ticket after confirmation.
      </p>

      <button
        onClick={handleDone}
        className="bg-[#3D85C6] hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md"
      >
        ✅ I Have Paid
      </button>
    </div>
  );
}
