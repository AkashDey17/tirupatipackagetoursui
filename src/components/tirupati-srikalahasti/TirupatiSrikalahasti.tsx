// import React from "react";
// import { Link } from "react-router-dom";

// const TirupatiSrikalahasti = () => {
//   const handleBookNow = () => {
//     const phoneNumber = "918197882511";
//     const message = "Hello! I’d like to know more about your services.";
//     window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
//   };
//   return (
//     <div className="w-full font-sans text-gray-800">
//       {/* Hero Section */}
//       <section className="relative w-full h-[550px] flex items-center justify-start">
//         {/* Background Image */}
//         <img
//           src="https://productcatalo.my.canva.site/sanchar6t/_assets/media/e22d8701f66d4f0f53145840b35f2a93.jpg"
//           alt="Tirupati"
//           className="absolute inset-0 w-full h-full object-cover"
//         />

      

//         {/* Overlay Content - Left Aligned */}
//         <div className="relative z-10 text-left px-6 md:px-16" style={{ maxWidth: '700px' }}>
//           <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 leading-snug">
//             Divine Blessings & Sacred Serenity – <br />
//             <span className="">Tirupati & Srikalahasti in 2 Days 2 Nights</span> 
//           </h2>
         
//           <button 
//           onClick={handleBookNow}
//           className="bg-yellow-400 text-[#6B4E3D] font-bold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition">
//             Book Now &gt;
//           </button>
          
//         </div>
//       </section>

//       {/* Details Section */}
//       <section className="bg-white py-12 px-6 md:px-16">
//         <p className="mb-6 leading-relaxed">
//           We are pleased to present our Tirupati & Srikalahasti Pilgrimage Tour.<br />
//           Please ensure that all participants carry their original Aadhar cards during travel.
//           <br />
//           Below is the travel itinerary for the {" "}
//           <strong>
//             Tirupati & Srikalahasti – 2 Days / 2 Nights
//           </strong>
//         </p>

//         {/* Itinerary */}
//         <div className="space-y-4">
//           <h3 className="font-bold text-lg">Day 01:</h3>
//           <p>
//             07:30 PM: Departure from Bangalore Majestic Bus Stand to Tirupati via A/C Sleeper Bus. Overnight journey.
//           </p>

//           <h3 className="font-bold text-lg">Day 02:</h3>
//           <ul className="list-disc list-inside space-y-2">
//             <li>Early morning arrival in Tirupati.</li>
//             <li>Check into the hotel for freshening up (45 to 60 minutes allotted, each room 2 members).</li>
//             <li>Breakfast will be served at the hotel.</li>
//             <li>After breakfast, proceed to Tirumala by APSRTC Non A/C bus.</li>
//             <li>1 hour time will be allotted for Tonsure (Head Shave/Mundan).</li>
//             <li>
//               Participate in Dharma Darshanam at Tirumala Sri Venkateshwara Swamy Devasthanam (duration 2 to 3 hours depending on the crowd). Laddu Prasadam will be provided.
//             </li>
//             <li>After Darshanam, return to the hotel for lunch.</li>
//             <li>Post lunch, visit Padmavathi Ammavaru Temple (depending on time).</li>
//             <li>Evening free for rest / local temple visits. Overnight stay in Tirupati hotel.</li>
//           </ul>

//           <h3 className="font-bold text-lg">Day 03:</h3>
//           <ul className="list-disc list-inside space-y-2">
//             <li>Early morning after breakfast, check out from the hotel and proceed to Srikalahasti Temple, famous for Rahu-Ketu Pooja and devotion to Lord Shiva.</li>
//             <li>After darshan, have lunch en route.</li>
//             <li>Proceed back to Bangalore via A/C Sleeper Bus.</li>
//             <li>Arrival in Bangalore by late night. The tour concludes with the divine blessings of Lord Venkateshwara and Lord Shiva.</li>
//           </ul>
//         </div>

//         {/* Dress Code */}
//         <div className="mt-8">
//           <h3 className="font-bold">Dress code - Traditional wear Only</h3>
//           <p>Men - Kurta-Pajama & Dhoti</p>
//           <p>Women - Saree, Churidar with Pyjama and Dupatta</p>
//         </div>

//         {/* Button */}
//         <div className="mt-8">
//           <Link to="/contact-us">
//           <button className="bg-yellow-400 text-[#6B4E3D] font-bold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition">
//             Book Now &gt;
//           </button>
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default TirupatiSrikalahasti;

import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Globe, MessageCircle } from "lucide-react";

const TirupatiSrikalahasti = () => {
  const handleBookNow = () => {
    const phoneNumber = "919964060505";
    const message = "Hello! I’d like to know more about your Tirupati & Srikalahasti Package.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="w-full font-sans text-gray-800 bg-gray-50">
      {/* Hero Section */}
     <section className="w-full relative">

  {/* Desktop / Laptop Hero (unchanged) */}
  <div className="hidden md:block relative w-full h-[550px]">
   <img
    src="https://productcatalo.my.canva.site/sanchar6t/_assets/media/e22d8701f66d4f0f53145840b35f2a93.jpg"
    alt="tirupati package from bangalore"
    className="absolute inset-0 w-full h-full object-cover"
  />
    <img
      src="https://productcatalo.my.canva.site/sanchar6t/_assets/media/bf232ac6034f03c6428ea84a47dbf921.png"
      alt="tirupati package from bangalore"
      className="absolute object-contain z-20 pointer-events-none
                 h-[80%] right-[120px] top-[110px]"
    />
    <div
      className="relative z-10 text-left pt-40 pl-16 pr-16"
      style={{ maxWidth: "700px" }}
    >
      <h2 className="text-white text-3xl font-bold mb-4 leading-snug">
        Tirupati Srikalahasti 2 Night / 2 Days Dharma Darshan Package
        <span className="block text-[#ffea92] text-2xl font-semibold leading-relaxed mt-2">
          Experience Divine Blessings with Sanchar6T's Premium Pilgrimage Journey
        </span>
      </h2>
      <Link to="/new-bus-booking" 
    state={{
       packageId: 3,
    from: "Tirupati Srikalahasti 2 Nights 2 Days Dharma Darshan Package",
    
  }}
    >
      <button
       // onClick={handleBookNow}
        className="bg-[#ffce38] text-[#6B4E3D] font-bold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition text-base"
      >
        Book Now &gt;
      </button>
      </Link>
    </div>
  </div>

{/* Mobile Hero (text above, image below) */}
<div
  className="block md:hidden w-full px-6 pt-6 relative"
  style={{
    backgroundImage: "url('https://productcatalo.my.canva.site/sanchar6t/_assets/media/e22d8701f66d4f0f53145840b35f2a93.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
   
  }}
>
  <div className="text-left mb-4 relative z-10">
    <h2 className="text-white text-xl font-bold mb-2 leading-snug">
      Tirupati 2 Night / 2 Days Dharma Darshan Package
      <span className="block text-[#ffea92] text-base font-semibold leading-relaxed mt-1">
        Experience Divine Blessings with Sanchar6T's Premium Pilgrimage Journey
      </span>
    </h2>
    {/* <Link to="/new-bus-booking" 
    state={{
    from: "Tirupati Srikalahasti 2D 2N Package",
    
  }}
    > */}
    <button
      onClick={handleBookNow}
      className="bg-yellow-400 text-[#6B4E3D] font-bold px-6 py-2 rounded-full shadow-md hover:shadow-lg transition text-sm"
    >
      Book Now &gt;
    </button>
    {/* </Link> */}
  </div>

  <img
    src="https://productcatalo.my.canva.site/sanchar6t/_assets/media/bf232ac6034f03c6428ea84a47dbf921.png"
    alt="tirupati package from bangalore"
    className="w-full object-contain mt-4 relative z-10"
  />
</div>

</section>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 space-y-16">
        {/* Overview */}
        <section>
          <h2 className="text-4xl font-bold text-[#6B4E3D] mb-4">Overview</h2>
          <p className="leading-relaxed text-gray-700 text-[22px]">
            Experience the sacred journey combining the divine energies of both Tirupati and Srikalahasti.
            This <strong>2 Days / 2 Nights pilgrimage package</strong> offers a perfect blend of devotion, comfort,
            and guided temple visits. Enjoy an organized trip from Bangalore with AC sleeper transport,
            traditional meals, and expert support throughout.
          </p>
        </section>

        {/* Brief Itinerary */}
        <section>
          <h2 className="text-[22px] font-bold text-[#6B4E3D] mb-4">Brief Itinerary</h2>
          <p className="mb-2 text-[22px]">
            <strong>Day 1:</strong> Evening departure from Bangalore via AC Sleeper Bus
          </p>
          <p className="text-[22px]">
            <strong>Day 2:</strong> Arrival in Tirupati, hotel check-in, breakfast,
            Tirumala darshan, lunch, Padmavathi temple visit, overnight stay in Tirupati
          </p>
          <p className="text-[22px]">
            <strong>Day 3:</strong> Visit Srikalahasti Temple, perform Rahu-Ketu Pooja (optional),
            lunch, and return to Bangalore
          </p>
        </section>

        {/* Detailed Day-wise Itinerary */}
        <section>
          <h2 className="text-[22px] font-bold text-[#6B4E3D] mb-4">Detailed Day-wise Itinerary</h2>
          <table className="w-full border border-gray-200 text-left">
            <thead className="bg-yellow-100">
              <tr>
                <th className="border p-3 text-[22px]">Day</th>
                <th className="border p-3 text-[22px]">Highlights</th>
                <th className="border p-3 text-[22px]">Overnight</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 text-[22px]">Day 1</td>
                <td className="border p-3 text-[22px]">Departure from Bangalore (Majestic) by AC Sleeper Bus</td>
                <td className="border p-3 text-[22px]">Onboard Journey</td>
              </tr>
              <tr>
                <td className="border p-3 text-[22px]">Day 2</td>
                <td className="border p-3 text-[22px]">
                  Arrival in Tirupati, Hotel check-in, Breakfast, Tirumala Darshan, Padmavathi Temple Visit,
                  Lunch & Overnight stay in Tirupati.
                </td>
                <td className="border p-3 text-[22px]">Tirupati Hotel</td>
              </tr>
              <tr>
                <td className="border p-3 text-[22px]">Day 3</td>
                <td className="border p-3 text-[22px]">
                  Visit Srikalahasti Temple, perform Rahu-Ketu Pooja (optional), Lunch, and return journey to Bangalore.
                </td>
                <td className="border p-3 text-[22px]">Return Journey</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Complete Itinerary */}
        <section>
          <h2 className="text-[22px] font-bold text-[#6B4E3D] mb-4">Complete Detailed Itinerary</h2>
          <div className="space-y-4 text-gray-700">
            <h3 className="text-[22px] font-semibold">
              Day 01: Journey Begins
            </h3>
            <ul className="list-disc list-inside space-y-1 text-[22px]">
              <li><strong>Evening:</strong> Departure from Bangalore via AC Sleeper Bus</li>
              <li><strong>Overnight Journey:</strong> Comfortable travel with reclining berths and air conditioning</li>
            </ul>

            <h3 className="text-[22px] font-semibold">Day 02: Tirupati Darshan</h3>
            <ul className="list-disc list-inside space-y-1 text-[22px]">
              <li><strong>Early Morning:</strong> Arrival in Tirupati, hotel check-in, breakfast</li>
              <li><strong>Darshan:</strong> Tirumala and Padmavathi Temple visits</li>
              <li><strong>Lunch & Rest:</strong> Traditional South Indian meal and overnight stay</li>
            </ul>

            <h3 className="text-[22px] font-semibold">Day 03: Srikalahasti & Return</h3>
            <ul className="list-disc list-inside space-y-1 text-[22px]">
              <li><strong>Morning:</strong> Visit Srikalahasti Temple, perform Rahu-Ketu Pooja (optional)</li>
              <li><strong>Afternoon:</strong> Lunch and departure to Bangalore</li>
            </ul>
          </div>
        </section>

        {/* Package Includes & Excludes */}
        <section className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-[22px] font-bold text-[#6B4E3D] mb-4">Package Includes</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-[22px]">
              <li>AC Sleeper Bus (Bangalore ↔ Tirupati ↔ Srikalahasti)</li>
              <li>Hotel accommodation (shared double occupancy)</li>
              <li>Breakfast and lunch (authentic South Indian cuisine)</li>
              <li>APSRTC bus to Tirumala</li>
              <li>Free Sarva Darshan at Tirumala Temple</li>
              <li>Padmavathi and Srikalahasti Temple visit</li>
              <li>Guide assistance throughout the journey</li>
              <li>Laddu Prasadam distribution</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[22px] font-bold text-[#6B4E3D] mb-4">Package Excludes</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-[22px]">
              <li>VIP Darshan Tickets (₹500 per person extra)</li>
              <li>Personal expenses or shopping</li>
              <li>Dinner and additional meals</li>
              <li>Tonsure charges</li>
              <li>Travel insurance</li>
              <li>Rahu-Ketu Pooja ticket (optional, to be paid at temple)</li>
            </ul>
          </div>
        </section>

        {/* Package Fare */}
        <section>
          <h2 className="text-[22px] font-bold text-[#6B4E3D] mb-4">Package Fare</h2>
          <table className="w-full border border-gray-200 text-left">
            <thead className="bg-yellow-100">
              <tr>
                <th className="border p-3 text-[22px]">Category</th>
                <th className="border p-3 text-[22px]">Fare</th>
                <th className="border p-3 text-[22px]">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 text-[22px]">Adult</td>
                <td className="border p-3 text-[22px]">₹5,750</td>
                <td className="border p-3 text-[22px]">Includes both Tirupati & Srikalahasti temples</td>
              </tr>
              <tr>
                <td className="border p-3 text-[22px]">Child (5–12 yrs)</td>
                <td className="border p-3 text-[22px]">₹5,750</td>
                <td className="border p-3 text-[22px]">Shared accommodation with guardians</td>
              </tr>
              <tr>
                <td className="border p-3 text-[22px]">Child (Below 5 yrs)</td>
                <td className="border p-3 text-[22px]">₹0</td>
                <td className="border p-3 text-[22px]">Free (without separate bed/meals)</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Dress Code */}
        <section>
          <h2 className="text-[22px] font-bold text-[#6B4E3D] mb-4">Dress Code</h2>
          <p className="text-[22px] text-gray-700">
            <strong>Men:</strong> Dhoti or Kurta-Pajama with upper cloth. <br />
            <strong>Women:</strong> Saree or Churidar with dupatta. <br />
            Traditional wear is mandatory for all temple visits.
          </p>
        </section>

        {/* Booking Info */}
        <section className="bg-yellow-50 p-6 rounded-xl shadow-md">
          <h2 className="text-[22px] font-bold text-[#6B4E3D] mb-4">Book Now</h2>
          <p className="mb-3 text-[22px] flex items-center gap-2">
            <Phone className="w-6 h-6 text-[#6B4E3D]" />  Call: <strong>+91 9964060505 | +91 8197882511</strong>
          </p>
          <p className="mb-3 text-[22px] flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-[#6B4E3D]" /> WhatsApp: Click “Book Now” for instant chat
          </p>
          <p className="mb-3 text-[22px] flex items-center gap-2">
            <Globe className="w-6 h-6 text-[#6B4E3D]" /> Website: www.tirupatipackagetours.com
          </p>
         <p className="mb-3 text-[20px] flex flex-col sm:flex-row items-start sm:items-center gap-2 break-words sm:text-base">
           <Mail className="w-6 h-6 text-[#6B4E3D]" /> 
           <span className="break-words">Email: enquiry@tirupatipackagetours.com</span>
         </p>
          <Link to="/new-bus-booking" 
    state={{
       packageId: 3,
    from: "Tirupati Srikalahasti 2Nights 2Days Dharma Darshan Package",
    
  }}
    >
          <button
           // onClick={handleBookNow}
            className="mt-4 bg-yellow-400 text-[#6B4E3D] font-bold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition"
          >
            Book Now &gt;


          </button>
          </Link>
        </section>

        {/* Terms & Conditions */}
        <section>
          <h2 className="text-[22px] font-bold text-[#6B4E3D] mb-4">Terms & Conditions</h2>
          <div className="space-y-4 text-[22px] text-gray-700">
            <h3 className="text-2xl font-semibold text-[#6B4E3D]">Important Guidelines</h3>
            <div>
              <h4 className="font-semibold">Payment Terms:</h4>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>Full payment for booking</li>
                <li>Cancellation charges apply as per company policy</li>
                <li>Refunds processed within 7-10 working days</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Travel Requirements:</h4>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>All participants must carry original Aadhaar cards during travel</li>
                <li>Traditional dress code mandatory (see above)</li>
                <li>Reporting time: 30 minutes before departure</li>
                <li>Late arrivals may result in tour cancellation without refund</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Health & Safety:</h4>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>Travellers with health conditions must inform in advance</li>
                <li>First aid facilities available during journey</li>
                <li>Emergency contact support throughout the trip</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Special Instructions */}
        <section>
          <h2 className="text-[22px] font-bold text-[#6B4E3D] mb-4">Special Instructions</h2>
          <p className="mb-2 text-[22px]"><strong>NRI Services:</strong> TTD provides special darshan passes for NRI devotees.</p>
          <p className="mb-2 text-[22px]"><strong>VIP Darshan:</strong> Available at ₹500 per person (Only for NRI Devotees).</p>
          <p className="mb-2 text-[22px]"><strong>Privileges:</strong> Children below 1 year are allowed direct entry along with their parents only.</p>
        </section>
      </div>
    </div>
  );
};

export default TirupatiSrikalahasti;

