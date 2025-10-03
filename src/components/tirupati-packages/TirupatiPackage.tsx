import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Globe, MessageCircle } from "lucide-react";

const TirupatiPakage = () => {
  return (
    <div className="w-full font-sans text-gray-800 bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[550px] flex items-center justify-start">
        {/* Background Image */}
        <img
          src="https://productcatalo.my.canva.site/sanchar6t/_assets/media/e22d8701f66d4f0f53145840b35f2a93.jpg"
          alt="Tirupati"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* ✅ Fixed Image on Right Side (Shifted Left) */}
        <img
          src="https://productcatalo.my.canva.site/sanchar6t/_assets/media/bf232ac6034f03c6428ea84a47dbf921.png"
          alt="Right Side Decoration"
          className="absolute h-[80%] object-contain z-20 pointer-events-none"
          style={{ top: "110px", right: "120px", transform: "translateY(0)" }}
        />

        {/* Overlay Content - Left Aligned */}
        <div
          className="relative z-10 text-left px-6 md:px-16"
          style={{ maxWidth: "700px" }}
        >
         <h2 className="text-white text-[20px] md:text-3xl font-bold mb-4 leading-snug">
  Tirupati 1 Night / 1 Days Dharma Darshan Package
  <span className="block text-[#ffea92] text-lg md:text-2xl font-semibold leading-relaxed mt-2">
    Experience Divine Blessings with Sanchar6T's Premium Pilgrimage Journey
  </span> 
</h2>


          <Link to="/contact-us">
            <button className="bg-yellow-400 text-[#6B4E3D] font-bold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition">
              Book Now &gt;
            </button>
          </Link>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 space-y-16">
        {/* Overview */}
        <section>
          <h2 className="text-4xl font-bold text-[#6B4E3D] mb-4">Overview</h2>
          <p className="leading-relaxed text-gray-700 text-[22px]">
            Embark on a sacred spiritual journey with <strong>Sanchar6T</strong>'s
            comprehensive Tirupati tour package from Bangalore. Our meticulously
            planned <strong>2-day Tirupati package</strong> combines comfort,
            devotion, and authentic temple experiences. Travel in AC sleeper
            buses, enjoy traditional accommodations, and receive expert guidance
            throughout your divine darshan at Tirumala Sri Venkateshwara Swamy
            Devasthanam. <br />
            Also available as <strong>Tirupati One Day Package</strong> for shorter visits.
          </p>
        </section>

        {/* Package Highlights */}
      



<section>
  <h2 className="text-[22px] font-bold text-[#6B4E3D] mb-6">Package Highlights</h2>
  <ul className="list-none space-y-4 text-gray-700 text-[22px]">
    <li className="relative pl-10">
      <span className="absolute left-0 top-1 flex w-5 h-5 bg-gray-300 rounded-full items-center justify-center">
        <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
      </span>
      <strong>Premium Bangalore to Tirupati Transportation</strong> - Comfortable <strong>Bangalore to Tirupati package bus</strong> with AC sleeper facilities
    </li>
    <li className="relative pl-10">
      <span className="absolute left-0 top-1 flex w-5 h-5 bg-gray-300 rounded-full items-center justify-center">
        <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
      </span>
      <strong>Quality Hotel Accommodation</strong> - Clean, comfortable rooms included in <strong>Tirupati package from Bangalore price</strong>
    </li>
    <li className="relative pl-10">
      <span className="absolute left-0 top-1 flex w-5 h-5 bg-gray-300 rounded-full items-center justify-center">
        <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
      </span>
      <strong>Traditional Meals Included</strong> - Authentic South Indian breakfast and lunch in every <strong>Tirupati tour package from Bangalore</strong>
    </li>
    <li className="relative pl-10">
      <span className="absolute left-0 top-1 flex w-5 h-5 bg-gray-300 rounded-full items-center justify-center">
        <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
      </span>
      <strong>APSRTC Bus to Tirumala</strong> - Scenic journey to sacred hills with experienced guides
    </li>
    <li className="relative pl-10">
      <span className="absolute left-0 top-1 flex w-5 h-5 bg-gray-300 rounded-full items-center justify-center">
        <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
      </span>
      <strong>Tonsure Services Available</strong> - Traditional head shave/mundan facilities (1 hour allocated)
    </li>
    <li className="relative pl-10">
      <span className="absolute left-0 top-1 flex w-5 h-5 bg-gray-300 rounded-full items-center justify-center">
        <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
      </span>
      <strong>Free Sarva Darshan</strong> - Blessed darshan of Lord Venkateshwara in our <strong>Tirupati darshan package from Bangalore</strong>
    </li>
    <li className="relative pl-10">
      <span className="absolute left-0 top-1 flex w-5 h-5 bg-gray-300 rounded-full items-center justify-center">
        <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
      </span>
      <strong>Padmavathi Temple Visit</strong> - Additional divine blessings at Goddess Lakshmi's temple
    </li>
    <li className="relative pl-10">
      <span className="absolute left-0 top-1 flex w-5 h-5 bg-gray-300 rounded-full items-center justify-center">
        <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
      </span>
      <strong>Expert Guide Assistance</strong> - Complete support throughout temple procedures
    </li>
    <li className="relative pl-10">
      <span className="absolute left-0 top-1 flex w-5 h-5 bg-gray-300 rounded-full items-center justify-center">
        <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
      </span>
      <strong>All Documentation Support</strong> - Aadhaar verification and entry facilitation
    </li>
    <li className="relative pl-10">
      <span className="absolute left-0 top-1 flex w-5 h-5 bg-gray-300 rounded-full items-center justify-center">
        <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
      </span>
      <strong>Flexible Options</strong> - Available as 2-day package or <strong>Tirupati one day package from Bangalore</strong>
    </li>
  </ul>
</section>




        {/* Brief Itinerary */}
        <section>
          <h2 className="text-[22px] font-bold text-[#6B4E3D] mb-4">Brief Itinerary</h2>
          <p className="mb-2 text-[22px]">
            <strong>Day 1:</strong> Evening departure from Bangalore via AC Sleeper Bus
          </p>
          <p className="text-[22px]">
            <strong>Day 2:</strong> Arrival in Tirupati, hotel check-in, breakfast,
            Tirumala darshan, lunch, Padmavathi temple visit, return to Bangalore
          </p>
        </section>

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
        <td className="border p-3 text-[22px]">
          Departure from Bangalore Majestic Bus Stand
        </td>
        <td className="border p-3 text-[22px]">AC Sleeper Bus</td>
      </tr>
      <tr>
        <td className="border p-3 text-[22px]">Day 2</td>
        <td className="border p-3 text-[22px]">
          Hotel Check-in, Breakfast, Tirumala Darshan, Lunch, Padmavathi Temple, Return Journey
        </td>
        <td className="border p-3 text-[22px]">Return to Bangalore</td>
      </tr>
    </tbody>
  </table>
</section>

        {/* Complete Itinerary */}
        <section>
          <h2 className="text-[22px] font-bold text-[#6B4E3D] mb-4">Complete Detailed Itinerary</h2>
          <div className="space-y-4 text-gray-700">
            <h3 className="text-[22px] font-semibold">
              Day 01: Journey Begins (Duration : 5-6 hrs approx 250km)
            </h3>
            <ul className="list-disc list-inside space-y-1 text-[22px]">
              <li>
                <strong>Evening 07:30 pm:</strong> Departure from Bangalore Anand Rao Circle Majestic via premium A/C Sleeper / Volvo Multiaxle Seater Coach
              </li>
              <li>
                <strong>Overnight Journey:</strong> Comfortable travel with reclining berths and air conditioning
              </li>
              <li>
                <strong>En Route:</strong> Rest and preparation for the sacred pilgrimage ahead
              </li>
            </ul>

            {/* ✅ Updated Day 02 Section */}
            <h3 className="text-[22px] font-semibold">Day 02: Divine Darshan Experience</h3>
            <ul className="list-disc list-inside space-y-1 text-[22px]">
              <li><strong>02:00 AM:</strong> Arrival in Tirupati after comfortable overnight journey</li>
              <li><strong>02:30 AM:</strong> Hotel check-in for freshening up (45-60 minutes allocated, 2 members per room)</li>
              <li><strong>03:30 AM:</strong> Traditional South Indian breakfast with local delicacies</li>
              <li><strong>04:30 AM:</strong> Departure for Tirumala via APSRTC Non-AC bus with scenic hill views</li>
              <li><strong>05:30 AM:</strong> Tonsure Services (Head Shave/Mundan) - 1 hour allocated for devotees</li>
              <li><strong>07:00 AM:</strong> Temple entry and preparation for sacred darshan experience</li>
              <li><strong>01:00 PM:</strong> Dharma Darshan at Tirumala Sri Venkateshwara Swamy Devasthanam (Duration: 2-3 hrs depending on crowd)</li>
              <li><strong>Prasadam:</strong> Blessed laddu prasadam provided to all devotees</li>
              <li><strong>03:00 PM:</strong> Return to hotel for rest and lunch</li>
              <li><strong>04:00 PM:</strong> Traditional regional lunch with authentic flavors</li>
              <li><strong>05:30 PM:</strong> Padmavathi Ammavaru Darshan (time permitting and schedule dependent)</li>
              <li><strong>06:00 PM:</strong> Departure back to Bangalore via AC Sleeper Bus</li>
              <li><strong>11:30 PM:</strong> Arrival in Bangalore – tour concludes with Lord Venkateshwara's blessings</li>
            </ul>
            <p className="text-[22px] text-gray-600 italic mt-2">
              *Timings are tentative and subject to change
            </p>
          </div>
        </section>

        {/* Inclusions & Exclusions */}
        <section className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-[22px] font-bold text-[#6B4E3D] mb-4">Package Includes</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-[22px]">
              <li>AC Sleeper Bus (Bangalore ↔ Tirupati)</li>
              <li>Hotel room for freshening up</li>
              <li>South Indian breakfast & lunch</li>
              <li>APSRTC Bus to Tirumala Hills</li>
              <li>Free Sarva Darshan entry</li>
              <li>Guide Assistance & Documentation</li>
              <li>Laddu Prasadam</li>
              <li>Padmavathi Temple Darshan</li>
            </ul>
          </div>
          <div>
            <h2 className="text-[22px] font-bold text-[#6B4E3D] mb-4">Package Excludes</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-[22px]">
              <li>Personal Expenses & Shopping</li>
              <li>VIP Darshan Tickets (₹500 extra)</li>
              <li>Travel Insurance</li>
              <li>Tonsure Charges</li>
              <li>Dinner & Additional Meals</li>
              <li>Tips for guides/drivers</li>
            </ul>
          </div>
        </section>

        {/* Fare */}
      <section>
  <h2 className="text-[22px] font-bold text-[#6B4E3D] mb-4">Package Fare</h2>
  <p className="text-gray-700 mb-4 text-[22px]"><strong>Competitive Tirupati Package Pricing</strong></p>
  <p className="text-gray-700 mb-4 text-[22px]">
    Our <strong>Tirupati package from Bangalore price</strong> offers exceptional value for complete spiritual experience:
  </p>
  <table className="w-full border border-gray-200 text-left">
    <thead className="bg-yellow-100">
      <tr>
        <th className="border p-3 text-[22px]">Category</th>
        <th className="border p-3 text-[22px]">Day</th>
        <th className="border p-3 text-[22px]">Price</th>
        <th className="border p-3 text-[22px]">Day</th>
        <th className="border p-3 text-[22px]">Price</th>
        <th className="border p-3 text-[22px]">Details</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border p-3 text-[22px]">Adult</td>
        <td className="border p-3 text-[22px]">Sun-Thur</td>
        <td className="border p-3 text-[22px]">₹2,300</td>
        <td className="border p-3 text-[22px]">Fri-Sat</td>
        <td className="border p-3 text-[22px]">₹2,650</td>
        <td className="border p-3 text-[22px]">Complete package with all inclusions</td>
      </tr>
      <tr>
        <td className="border p-3 text-[22px]">Child (5-12 yrs)</td>
        <td className="border p-3 text-[22px]">Sun-Thur</td>
        <td className="border p-3 text-[22px]">₹2,300</td>
        <td className="border p-3 text-[22px]">Fri-Sat</td>
        <td className="border p-3 text-[22px]">₹2,650</td>
        <td className="border p-3 text-[22px]">Child-friendly arrangements</td>
      </tr>
      <tr>
        <td className="border p-3 text-[22px]">Child (Below 5 yrs)</td>
        <td className="border p-3 text-[22px]">All Day</td>
        <td className="border p-3 text-[22px]">₹0</td>
        <td className="border p-3 text-[22px]">All Day</td>
        <td className="border p-3 text-[22px]">₹0</td>
        <td className="border p-3 text-[22px]">Special discounted rates</td>
      </tr>
    </tbody>
  </table>

  <p className="mt-3 italic text-gray-600 text-[20px]">
    *All <strong>Tirupati package from Bangalore price</strong> rates are per person and subject to availability. 
   <strong>Tirupati one day package from Bangalore</strong> rates available on request.
  </p>
</section>





        {/* Booking Info */}
        <section className="bg-yellow-50 p-6 rounded-xl shadow-md">
          <h2 className="text-[22px] font-bold text-[#6B4E3D] mb-4">Book Now</h2>
          <p className="mb-3 text-[22px] flex items-center gap-2">
            <Phone className="w-6 h-6 text-[#6B4E3D]" />{" "}
            <span>
              Call: <strong>+91 97313 12275 | +91 81978 82511</strong>
            </span>
          </p>
          <p className="mb-3 text-[22px] flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-[#6B4E3D]" /> WhatsApp: Instant booking & support
          </p>
          <p className="mb-3 text-[22px] flex items-center gap-2">
            <Globe className="w-6 h-6 text-[#6B4E3D]" /> Website: www.tirupatipackagetours.com
          </p>
          <p className="mb-3 text-[22px] flex items-center gap-2">
            <Mail className="w-6 h-6 text-[#6B4E3D]" /> Email: sanchar6t@gmail.com
          </p>
          <Link to="/contact-us">
            <button className="mt-4 bg-yellow-400 text-[#6B4E3D] font-bold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition">
              Contact Us &gt;
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
        <li>Traditional dress code mandatory (details below)</li>
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
          <p className="mb-2 text-[22px]">
            <strong>NRI Services:</strong> TTD provides special darshan passes for NRI devotees.
          </p>
          <p className="mb-2 text-[22px]">
            <strong>VIP Darshan:</strong> Available at ₹500 per person.
          </p>
          <p className="mb-2 text-[22px]">
            <strong>Privileges:</strong> Children below 1 year are allowed direct entry along with their parents only.
          </p>
          <p className="mb-2 text-[22px]">
            <strong>Dress Code:</strong> <br />
            <strong>Men</strong> - Dhoti or Pyjamas with upper cloth <br />
            <strong>Women</strong> - Saree or Half-Saree with blouse, or Churidar with Pyjama and upper cloth
          </p>
        </section>
      </div>
    </div>
  );
};

export default TirupatiPakage;
