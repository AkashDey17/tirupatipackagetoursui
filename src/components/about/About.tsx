import React from "react";
import { MapPin, Bus, Utensils, Church, Heart } from "lucide-react";
import Temple1 from "@/assets/temple1.jpg";
import Temple2 from "@/assets/temple2.jpg";
import Temple3 from "@/assets/temple3.jpg";
import Temple4 from "@/assets/temple4.jpg";
import Temple5 from "@/assets/temple5.jpg";

const AboutPage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center bg-black">
        <img
          src={Temple1}
          alt="Tirupati Temple"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-[24px] md:text-[30px] font-bold mb-4">About Us</h1>
          <p className="max-w-2xl mx-auto text-[30px] md:text-[22px]">
            Your Journey. Our Promise.
          </p>
        </div>
      </section>

      {/* About Sanchar6T Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 md:px-12 text-center">
        <h2 className="text-[24px] font-bold text-[#226cb2] mb-6">
          About Sanchar6T - Your Spiritual Journey Specialists
        </h2>
        <p className="leading-relaxed text-[22px] max-w-4xl mx-auto text-gray-700 mb-4">
          <span className="font-semibold">Sanchar6T</span> stands as South India's premier spiritual travel company, dedicated to facilitating meaningful pilgrimages to Tirupati. With years of expertise in religious tourism, we understand the sacred importance of your Tirupati darshan package from Bangalore and ensure every detail exceeds your expectations.
        </p>
      </section>

      {/* Mission & Values */}
      <section className="bg-gray-50 py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-[24px] font-bold text-[#226cb2] mb-6">Our Mission & Values</h2>
          <p className="leading-relaxed text-[22px] text-gray-700 mb-4">
            At <span className="font-semibold">Sanchar6T</span>, we believe sacred journeys should combine devotion with comfort. We ensure every Tirupati Balaji pilgrimage reflects our core values of trust, reliability, and spiritual integrity.
          </p>
        </div>
      </section>

      {/* Features / Services Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 md:px-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition">
          <Bus className="mx-auto h-10 w-10 text-yellow-600 mb-4" />
          <h3 className="font-semibold text-[24px]">Hassle-free Travel</h3>
          <p className="text-[22px] text-gray-600">
            Luxury AC buses & private cabs for a smooth journey.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition">
          <Church className="mx-auto h-10 w-10 text-yellow-600 mb-4" />
          <h3 className="font-semibold text-[24px]">VIP Darshan</h3>
          <p className="text-[22px] text-gray-600">
            Arrangements for a smooth Tirupati temple experience.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition">
          <Utensils className="mx-auto h-10 w-10 text-yellow-600 mb-4" />
          <h3 className="font-semibold text-[24px]">Comfortable Stays</h3>
          <p className="text-[22px] text-gray-600">
            Authentic vegetarian meals & quality accommodations.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition">
          <Heart className="mx-auto h-10 w-10 text-yellow-600 mb-4" />
          <h3 className="font-semibold text-[24px]">Personalized Care</h3>
          <p className="text-[22px] text-gray-600">
            Assistance at every step for a worry-free pilgrimage.
          </p>
        </div>
      </section>

      {/* Comprehensive Darshan Services */}
      <section className="max-w-6xl mx-auto py-12 px-6 md:px-12 text-center">
        <h2 className="text-[24px] font-bold text-[#226cb2] mb-6">Comprehensive Darshan Services</h2>
        <p className="leading-relaxed text-[22px] text-gray-700 mb-4">
          We specialize in Tirupati Balaji darshan packages from Bangalore that combine devotion with comfort. Our services include traditional purification rituals, expert temple guidance, optimal darshan positioning, and full spiritual support throughout your sacred journey.
        </p>
      </section>

      {/* Expert Pilgrimage Planning */}
      <section className="bg-gray-50 py-12 px-6 md:px-12 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[24px] font-bold text-[#226cb2] mb-6">Expert Pilgrimage Planning</h2>
          <p className="leading-relaxed text-[22px] text-gray-700 mb-4">
            Our experienced team designs each Balaji package from Bangalore with meticulous attention to spiritual significance and practical comfort. From early morning pickup to late evening return, every moment is carefully orchestrated for maximum devotional benefit.
          </p>
        </div>
      </section>

      {/* Why Devotees Trust Sanchar6T */}
      <section className="max-w-6xl mx-auto py-12 px-6 md:px-12 text-center">
        <h2 className="text-[24px] font-bold text-[#226cb2] mb-6">Why Devotees Trust Sanchar6T</h2>
        <ul className="list-disc list-inside text-[22px] text-gray-700 space-y-2 max-w-3xl mx-auto text-left">
          <li><strong>Spiritual Expertise:</strong> Our guides possess deep knowledge of Tirupati traditions, temple protocols, and sacred rituals, ensuring authentic experiences.</li>
          <li><strong>Comfort Focus:</strong> We prioritize your physical comfort, enhancing your spiritual receptivity and temple experience.</li>
          <li><strong>Reliability Guarantee:</strong> Impeccable service standards with punctual pickups, safe transportation, and dependable support staff.</li>
          <li><strong>Customised Experiences:</strong> Packages tailored to individual preferences, group needs, and special spiritual requirements, including tonsure services, special prayers, and extended visits.</li>
        </ul>
      </section>

      {/* Founder Section */}
      <section className="bg-gray-50 py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-1 gap-10 items-center text-center md:text-left">
          <div>
            <h2 className="text-[24px] font-bold text-[#226cb2] mb-4">Our Founder’s Vision</h2>
            <p className="leading-relaxed text-[22px] text-gray-700 mb-4">
              Led by our founder <span className="font-semibold">KN Nagesh</span>, Sanchar6T is trusted by thousands of happy travelers who choose us for our reliability, transparency, and heartfelt service.
            </p>
            <p className="leading-relaxed text-[22px] text-gray-700">
              Whether you're embarking on a spiritual pilgrimage or planning a group journey, we ensure every detail is handled with care, so you can focus on what truly matters — <strong>your experience</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="max-w-6xl mx-auto py-12 px-6 md:px-12 text-center">
        <h2 className="text-[24px] font-bold text-[#226cb2] mb-4">Our Commitment</h2>
        <p className="max-w-4xl mx-auto leading-relaxed text-[22px] text-gray-700 mb-4">
          Every Sanchar6T pilgrimage reflects our dedication to facilitating authentic spiritual connections. We believe sacred journeys deserve sacred attention, ensuring your Tirupati experience creates lasting memories and spiritual fulfillment beyond the temple visit itself.
        </p>
      </section>

      {/* Closing Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 md:px-12 text-center">
        <h2 className="text-[24px] font-bold text-[#226cb2] mb-4">Your Journey, Our Promise</h2>
        <p className="max-w-3xl mx-auto leading-relaxed text-[22px] text-gray-700">
          With Sanchar6T, every pilgrimage becomes a memory to cherish forever. We’re here to take care of the travel, while you focus on the divine blessings of Tirupati Balaji.
        </p>
        <img
          src={Temple2}
          alt="Journey"
          className="mx-auto mt-6 rounded-xl shadow-lg"
        />
      </section>
    </div>
  );
};

export default AboutPage;

