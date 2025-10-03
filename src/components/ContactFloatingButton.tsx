import React, { useState } from "react";
import { FaWhatsapp, FaPhone, FaTimes, FaEnvelope } from "react-icons/fa";

const ContactFloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "918197882511";
  const whatsappMessage = "Hello! I’d like to know more about your services.";

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-50">
      {/* WhatsApp & Call buttons */}
      {isOpen && (
        <>
          {/* WhatsApp Button */}
          <div className="relative group">
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              <FaWhatsapp size={28} />
            </a>
            <span className="absolute right-full mr-2 hidden group-hover:block bg-[#f59e0b] text-white text-sm px-2 py-1 rounded-lg whitespace-nowrap">
              WhatsApp
            </span>
          </div>

          {/* Call Button */}
          <div className="relative group">
            <a
              href={`tel:${phoneNumber}`}
              className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              <FaPhone size={28} />
            </a>
            <span className="absolute right-full mr-2 hidden group-hover:block bg-[#f59e0b] text-white text-sm px-2 py-1 rounded-lg whitespace-nowrap">
              Call
            </span>
          </div>
        </>
      )}

      {/* Main toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-yellow-500 hover:bg-yellow-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
      >
        {isOpen ? <FaTimes size={28} /> : <FaEnvelope size={28} />}
      </button>
    </div>
  );
};

export default ContactFloatingButton;
