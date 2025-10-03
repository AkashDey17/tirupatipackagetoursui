import React from "react";
import { Link } from "react-router-dom";

const TirupatiSrikalahasti = () => {
  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[550px] flex items-center justify-start">
        {/* Background Image */}
        <img
          src="https://productcatalo.my.canva.site/sanchar6t/_assets/media/e22d8701f66d4f0f53145840b35f2a93.jpg"
          alt="Tirupati"
          className="absolute inset-0 w-full h-full object-cover"
        />

      

        {/* Overlay Content - Left Aligned */}
        <div className="relative z-10 text-left px-6 md:px-16" style={{ maxWidth: '700px' }}>
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 leading-snug">
            Divine Blessings & Sacred Serenity – <br />
            <span className="">Tirupati & Srikalahasti in 2 Days 2 Nights</span> 
          </h2>
          <Link to="/contact-us">
          <button className="bg-yellow-400 text-[#6B4E3D] font-bold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition">
            Book Now &gt;
          </button>
          </Link>
        </div>
      </section>

      {/* Details Section */}
      <section className="bg-white py-12 px-6 md:px-16">
        <p className="mb-6 leading-relaxed">
          We are pleased to present our Tirupati & Srikalahasti Pilgrimage Tour.<br />
          Please ensure that all participants carry their original Aadhar cards during travel.
          <br />
          Below is the travel itinerary for the {" "}
          <strong>
            Tirupati & Srikalahasti – 2 Days / 2 Nights
          </strong>
        </p>

        {/* Itinerary */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Day 01:</h3>
          <p>
            07:30 PM: Departure from Bangalore Majestic Bus Stand to Tirupati via A/C Sleeper Bus. Overnight journey.
          </p>

          <h3 className="font-bold text-lg">Day 02:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Early morning arrival in Tirupati.</li>
            <li>Check into the hotel for freshening up (45 to 60 minutes allotted, each room 2 members).</li>
            <li>Breakfast will be served at the hotel.</li>
            <li>After breakfast, proceed to Tirumala by APSRTC Non A/C bus.</li>
            <li>1 hour time will be allotted for Tonsure (Head Shave/Mundan).</li>
            <li>
              Participate in Dharma Darshanam at Tirumala Sri Venkateshwara Swamy Devasthanam (duration 2 to 3 hours depending on the crowd). Laddu Prasadam will be provided.
            </li>
            <li>After Darshanam, return to the hotel for lunch.</li>
            <li>Post lunch, visit Padmavathi Ammavaru Temple (depending on time).</li>
            <li>Evening free for rest / local temple visits. Overnight stay in Tirupati hotel.</li>
          </ul>

          <h3 className="font-bold text-lg">Day 03:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Early morning after breakfast, check out from the hotel and proceed to Srikalahasti Temple, famous for Rahu-Ketu Pooja and devotion to Lord Shiva.</li>
            <li>After darshan, have lunch en route.</li>
            <li>Proceed back to Bangalore via A/C Sleeper Bus.</li>
            <li>Arrival in Bangalore by late night. The tour concludes with the divine blessings of Lord Venkateshwara and Lord Shiva.</li>
          </ul>
        </div>

        {/* Dress Code */}
        <div className="mt-8">
          <h3 className="font-bold">Dress code - Traditional wear Only</h3>
          <p>Men - Kurta-Pajama & Dhoti</p>
          <p>Women - Saree, Churidar with Pyjama and Dupatta</p>
        </div>

        {/* Button */}
        <div className="mt-8">
          <Link to="/contact-us">
          <button className="bg-yellow-400 text-[#6B4E3D] font-bold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition">
            Book Now &gt;
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TirupatiSrikalahasti;
