import React from "react";
import { FaPhone } from "react-icons/fa";

const CallButton = () => {
  const phoneNumber = "918197882511"; // replace with your phone number

  return (
    <a
      href={`tel:${phoneNumber}`}
      className="fixed bottom-24 right-6 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
    >
      <FaPhone size={28} className="rotate-90" />
    </a>
  );
};

export default CallButton;
