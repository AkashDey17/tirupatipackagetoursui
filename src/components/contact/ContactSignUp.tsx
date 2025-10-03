

// import React, { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Mail, Phone, User, MessageCircle } from "lucide-react";
// import Logo from "@/assets/logo.png";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ContactSignup = () => {
//   const [packages, setPackages] = useState([]);
//   const [selectedPackage, setSelectedPackage] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [feedback, setFeedback] = useState("");
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     const fetchPackages = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/package-list");
//         const data = await response.json();
//         setPackages(data);
//       } catch (err) {
//         console.error("Error fetching packages:", err);
//       }
//     };
//     fetchPackages();
//   }, []);

//   const handleSubmit = async () => {
//     if (!name) return toast.error("Name is required");
//     if (!email) return toast.error("Email is required");
//     if (!phone) return toast.error("Phone number is required");
//     if (!feedback) return toast.error("Feedback is required");
//     if (!selectedPackage) return toast.error("Please select a package");

//     try {
//       const response = await fetch("http://localhost:5000/api/submit-feedback", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           name,
//           contactNo: phone,
//           emailId: email,
//           userFeedback: feedback,
//           packageId: selectedPackage,
//         }),
//       });

//       const data = await response.json();
//       if (data.success) {
//         setShowPopup(true);
//         setName(""); setEmail(""); setPhone(""); setFeedback(""); setSelectedPackage("");
//       } else toast.error("Failed to submit feedback");
//     } catch (err) {
//       console.error(err);
//       toast.error("Server error, please try again later");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white font-sans relative flex flex-col">
      
//       {/* Hero Section */}
//       <section className="w-full bg-yellow-50 py-10 px-6 md:px-20 flex flex-col md:flex-row items-center justify-center">
//         <div className="md:w-1/2 mb-6 md:mb-0">
//           <img
//             src="https://productcatalo.my.canva.site/sanchar6t/_assets/media/9e5e7cbcbd2a60a2f4f86dbddb6040af.jpg"
//             alt="Temple"
//             className="w-full h-[400px] object-cover rounded-xl shadow-lg"
//           />
//         </div>
//         <div className="md:w-1/2 md:pl-12 text-center md:text-left">
//           <h1 className="text-4xl font-bold text-[#6B4E3D] mb-4">Contact Sanchar6t - Plan Your Sacred Tirupati Journey</h1>
//           <p className="text-lg text-gray-700 mb-4 leading-relaxed">
//             Ready to embark on your spiritual journey? Sanchar6T makes planning your Tirupati trip from Bangalore simple, convenient, and completely stress-free.
//             Our experienced customer service team is available to assist with bookings, answer questions, and customize packages according to your specific requirements.
//           </p>
//         </div>
//       </section>

//       {/* Booking Channels */}
//       <section className="py-10 px-6 md:px-20 bg-white">
//         <h2 className="text-3xl font-bold text-[#6B4E3D] mb-6">Multiple Booking Channels</h2>
//         <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
//           <li><strong>Phone Booking :</strong> Speak directly with our travel experts for personalized package recommendations and instant booking confirmation.</li>
//           <li><strong>Online Reservation :</strong> Visit our user-friendly website for detailed package information, real-time availability, and secure online payment processing.</li>
//           <li><strong>WhatsApp Support :</strong> Get quick responses to queries, package updates, and booking assistance through our dedicated WhatsApp business line.</li>
//         </ul>
//       </section>

//       {/* Specialized Quick Packages */}
//       <section className="py-10 px-6 md:px-20 bg-yellow-50">
//         <h2 className="text-3xl font-bold text-[#6B4E3D] mb-6">Specialized Quick Packages</h2>
//         <h3 className="text-xl font-semibold mb-2">Express One-Day Solution</h3>
//         <p className="text-gray-700 text-lg mb-4">
//          Perfect for busy devotees, our 1 day Tirupati package from Bangalore offers complete spiritual experience within 24 hours. This efficiently planned package maximizes temple time while ensuring comfortable travel, quality meals, and meaningful darshan experience.
//         </p>
//         <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
//           <li>Early morning departure from multiple Bangalore pickup points</li>
//           <li>Comfortable AC bus transportation with reclining seats</li>
//           <li>Traditional breakfast and regional lunch included</li>
//           <li>Expert guide assistance for temple navigation and darshan</li>
//           <li>Sarva darshan queue management and optimal positioning</li>
//           <li>Sacred prasadam collection and blessing ceremonies</li>
//           <li>Additional temple visits including Padmavathy Temple</li>
//           <li>Safe evening return with drop-off at original pickup locations</li>
//         </ul>
//       </section>

//       {/* Customer Service */}
//       <section className="py-10 px-6 md:px-20 bg-white">
//         <h2 className="text-3xl font-bold text-[#6B4E3D] mb-6">Customer Service Excellence</h2>
//         <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
//           <li><strong>24/7 Support:</strong> Our dedicated customer service team provides round-the-clock assistance for booking inquiries, travel updates, and emergency support during your pilgrimage journey.</li>
//           <li><strong>Flexible Arrangements:</strong> We accommodate special requirements including dietary restrictions, mobility assistance, group bookings, and customized departure times to ensure every devotee's needs are met.</li>
//         </ul>
//       </section>

//       {/* Contact & Feedback Form */}
//       <section className="py-12 px-6 md:px-20 bg-yellow-50">
//         <h2 className="text-4xl font-bold text-[#6B4E3D] mb-10 text-center">
//           Plan Your Journey - Contact Us
//         </h2>

//         <div className="flex flex-col md:flex-row gap-12 items-center">
//           {/* Left: Logo/Image */}
//           <div className="md:w-1/2 flex flex-col items-center md:items-start">
//             <img
//               src={Logo}
//               alt="Sanchar6T Logo"
//               className="h-72 w-auto rounded-xl "
//             />
//             <p className="mt-6 text-center md:text-left text-gray-700 text-lg leading-relaxed max-w-md">
//               Connect with Tirupati travel experts and plan your sacred journey from Bangalore with ease. 
//               Our experienced team will guide you through bookings, package selection, and provide all the assistance you need for a smooth and memorable pilgrimage.
//             </p>
//           </div>

//           {/* Right: Form */}
//           <div className="md:w-1/2 bg-white p-10 rounded-2xl shadow-2xl space-y-6">
            
//             {/* Name */}
//             <div className="relative">
//               <User className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-500 h-5 w-5" />
//               <input
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="peer w-full border border-gray-300 rounded-lg p-4 pl-12 text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               />
//               <label className={`absolute left-12 text-gray-500 text-lg transition-all ${name ? "-top-2 text-sm" : "top-4 text-base"}`}>
//                 Name
//               </label>
//             </div>

//             {/* Email */}
//             <div className="relative">
//               <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-500 h-5 w-5" />
//               <input
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 type="email"
//                 className="peer w-full border border-gray-300 rounded-lg p-4 pl-12 text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               />
//               <label className={`absolute left-12 text-gray-500 text-lg transition-all ${email ? "-top-2 text-sm" : "top-4 text-base"}`}>
//                 Email Address
//               </label>
//             </div>

//             {/* Phone */}
//             <div className="relative">
//               <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-500 h-5 w-5" />
//               <input
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 type="tel"
//                 className="peer w-full border border-gray-300 rounded-lg p-4 pl-12 text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               />
//               <label className={`absolute left-12 text-gray-500 text-lg transition-all ${phone ? "-top-2 text-sm" : "top-4 text-base"}`}>
//                 Phone Number
//               </label>
//             </div>

//             {/* Package */}
//             <div className="relative">
//               <select
//                 value={selectedPackage}
//                 onChange={(e) => setSelectedPackage(e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg p-4 text-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               >
//                 <option value="" disabled>Select Package</option>
//                 {packages.map((pkg) => (
//                   <option key={pkg.PackageID} value={pkg.PackageID}>
//                     {pkg.PackageName}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Feedback */}
//             <div className="relative">
//               <MessageCircle className="absolute left-3 top-3 text-yellow-500 h-5 w-5" />
//               <textarea
//                 value={feedback}
//                 onChange={(e) => setFeedback(e.target.value)}
//                 rows="5"
//                 className="peer w-full border border-gray-300 rounded-lg p-4 pl-12 text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
//               />
//               <label className={`absolute left-12 text-gray-500 text-lg transition-all ${feedback ? "top-1 text-sm" : "top-3 text-base"}`}>
//                 Your Message / Feedback
//               </label>
//             </div>

//             {/* Submit Button */}
//             <Button
//               onClick={handleSubmit}
//               className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-full py-3 text-lg shadow-lg hover:shadow-xl transition"
//             >
//               Submit
//             </Button>
//           </div>
//         </div>
//       </section>
//       {/* Book Your Blessed Journey Today Section */}
// <section className="py-12 px-6 md:px-20 text-center rounded-2xl mt-10 shadow-lg">
//   <h2 className="text-3xl md:text-4xl font-bold text-[#6B4E3D] mb-4">
//     Book Your Blessed Journey Today
//   </h2>
//   <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
//     Experience the difference of traveling with Sanchar6t - where devotion meets comfort, and every journey becomes a cherished spiritual memory. 
//     Contact us now to plan your perfect Tirupati pilgrimage experience.
//   </p>
// </section>


//       {/* Popup */}
//       {showPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-xl shadow-lg p-8 max-w-sm w-full text-center">
//             <h2 className="text-2xl font-bold mb-4 text-green-600">Thank You!</h2>
//             <p className="mb-6 text-gray-700">
//               Your feedback has been submitted successfully. We will get back to you soon.
//             </p>
//             <Button
//               className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-full py-2 px-6"
//               onClick={() => setShowPopup(false)}
//             >
//               Close
//             </Button>
//           </div>
//         </div>
//       )}

//       <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
//     </div>
//   );
// };

// export default ContactSignup;


import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, User, MessageCircle } from "lucide-react";
import Logo from "@/assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactSignup = () => {
  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/package-list");
        const data = await response.json();
        setPackages(data);
      } catch (err) {
        console.error("Error fetching packages:", err);
      }
    };
    fetchPackages();
  }, []);

  const handleSubmit = async () => {
    if (!name) return toast.error("Name is required");
    if (!email) return toast.error("Email is required");
    if (!phone) return toast.error("Phone number is required");
    if (!feedback) return toast.error("Feedback is required");
    if (!selectedPackage) return toast.error("Please select a package");

    try {
      const response = await fetch("http://localhost:5000/api/submit-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          contactNo: phone,
          emailId: email,
          userFeedback: feedback,
          packageId: selectedPackage,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setShowPopup(true);
        setName(""); setEmail(""); setPhone(""); setFeedback(""); setSelectedPackage("");
      } else toast.error("Failed to submit feedback");
    } catch (err) {
      console.error(err);
      toast.error("Server error, please try again later");
    }
  };

  // Helper component for dot-in-circle list items
  const DotListItem = ({ children }) => (
    <li className="relative pl-10">
      <span className="absolute left-0 top-1 flex w-5 h-5 bg-gray-300 rounded-full items-center justify-center">
        <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
      </span>
      {children}
    </li>
  );

  return (
    <div className="min-h-screen bg-white font-sans relative flex flex-col">
      
      {/* Hero Section */}
      <section className="w-full bg-yellow-50 py-10 px-6 md:px-20 flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src="https://productcatalo.my.canva.site/sanchar6t/_assets/media/9e5e7cbcbd2a60a2f4f86dbddb6040af.jpg"
            alt="Temple"
            className="w-full h-[400px] object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-12 text-center md:text-left">
          <h1 className="text-4xl font-bold text-[#6B4E3D] mb-4">Contact Sanchar6t - Plan Your Sacred Tirupati Journey</h1>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Ready to embark on your spiritual journey? <strong>Sanchar6T</strong> makes planning your <strong>Tirupati trip from Bangalore</strong> simple, convenient, and completely stress-free.
            Our experienced customer service team is available to assist with bookings, answer questions, and customize packages according to your specific requirements.
          </p>
        </div>
      </section>

      {/* Booking Channels */}
      <section className="py-10 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-[#6B4E3D] mb-6">Multiple Booking Channels</h2>
        <ul className="list-none space-y-2 text-gray-700 text-lg">
          <DotListItem>
            <strong>Phone Booking :</strong> Speak directly with our travel experts for personalized package recommendations and instant booking confirmation.
          </DotListItem>
          <DotListItem>
            <strong>Online Reservation :</strong> Visit our user-friendly website for detailed package information, real-time availability, and secure online payment processing.
          </DotListItem>
          <DotListItem>
            <strong>WhatsApp Support :</strong> Get quick responses to queries, package updates, and booking assistance through our dedicated WhatsApp business line.
          </DotListItem>
        </ul>
      </section>

      {/* Specialized Quick Packages */}
      <section className="py-10 px-6 md:px-20 bg-yellow-50">
        <h2 className="text-3xl font-bold text-[#6B4E3D] mb-6">Specialized Quick Packages</h2>
        <h3 className="text-xl font-semibold mb-2">Express One-Day Solution</h3>
        <p className="text-gray-700 text-lg mb-4">
         Perfect for busy devotees, our <strong>1 day Tirupati package from Bangalore</strong> offers complete spiritual experience within 24 hours. This efficiently planned package maximizes temple time while ensuring comfortable travel, quality meals, and meaningful darshan experience.
        </p>
        <ul className="list-none space-y-2 text-gray-700 text-lg">
          <DotListItem>Early morning departure from multiple Bangalore pickup points</DotListItem>
          <DotListItem>Comfortable AC bus transportation with reclining seats</DotListItem>
          <DotListItem>Traditional breakfast and regional lunch included</DotListItem>
          <DotListItem>Expert guide assistance for temple navigation and darshan</DotListItem>
          <DotListItem>Sarva darshan queue management and optimal positioning</DotListItem>
          <DotListItem>Sacred prasadam collection and blessing ceremonies</DotListItem>
          <DotListItem>Additional temple visits including Padmavathy Temple</DotListItem>
          <DotListItem>Safe evening return with drop-off at original pickup locations</DotListItem>
        </ul>
      </section>

      {/* Customer Service */}
      <section className="py-10 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-[#6B4E3D] mb-6">Customer Service Excellence</h2>
        <ul className="list-none space-y-2 text-gray-700 text-lg">
          <DotListItem><strong>24/7 Support:</strong> Our dedicated customer service team provides round-the-clock assistance for booking inquiries, travel updates, and emergency support during your pilgrimage journey.</DotListItem>
          <DotListItem><strong>Flexible Arrangements:</strong> We accommodate special requirements including dietary restrictions, mobility assistance, group bookings, and customized departure times to ensure every devotee's needs are met.</DotListItem>
        </ul>
      </section>

      {/* Contact & Feedback Form */}
      <section className="py-12 px-6 md:px-20 bg-yellow-50">
        <h2 className="text-4xl font-bold text-[#6B4E3D] mb-10 text-center">
          Plan Your Journey - Contact Us
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left: Logo/Image */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start">
            <img
              src={Logo}
              alt="Sanchar6T Logo"
              className="h-72 w-auto rounded-xl "
            />
            <p className="mt-6 text-center md:text-left text-gray-700 text-lg leading-relaxed max-w-md">
              Connect with Tirupati travel experts and plan your sacred journey from Bangalore with ease. 
              Our experienced team will guide you through bookings, package selection, and provide all the assistance you need for a smooth and memorable pilgrimage.
            </p>
          </div>

          {/* Right: Form */}
          <div className="md:w-1/2 bg-white p-10 rounded-2xl shadow-2xl space-y-6">
            {/* Name */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-500 h-5 w-5" />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="peer w-full border border-gray-300 rounded-lg p-4 pl-12 text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <label className={`absolute left-12 text-gray-500 text-lg transition-all ${name ? "-top-2 text-sm" : "top-4 text-base"}`}>
                Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-500 h-5 w-5" />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="peer w-full border border-gray-300 rounded-lg p-4 pl-12 text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <label className={`absolute left-12 text-gray-500 text-lg transition-all ${email ? "-top-2 text-sm" : "top-4 text-base"}`}>
                Email Address
              </label>
            </div>

            {/* Phone */}
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-500 h-5 w-5" />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                className="peer w-full border border-gray-300 rounded-lg p-4 pl-12 text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <label className={`absolute left-12 text-gray-500 text-lg transition-all ${phone ? "-top-2 text-sm" : "top-4 text-base"}`}>
                Phone Number
              </label>
            </div>

            {/* Package */}
            <div className="relative">
              <select
                value={selectedPackage}
                onChange={(e) => setSelectedPackage(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-4 text-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <option value="" disabled>Select Package</option>
                {packages.map((pkg) => (
                  <option key={pkg.PackageID} value={pkg.PackageID}>
                    {pkg.PackageName}
                  </option>
                ))}
              </select>
            </div>

            {/* Feedback */}
            <div className="relative">
              <MessageCircle className="absolute left-3 top-3 text-yellow-500 h-5 w-5" />
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows="5"
                className="peer w-full border border-gray-300 rounded-lg p-4 pl-12 text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
              />
              <label className={`absolute left-12 text-gray-500 text-lg transition-all ${feedback ? "top-1 text-sm" : "top-3 text-base"}`}>
                Your Message / Feedback
              </label>
            </div>

            {/* Submit Button */}
            <Button
              onClick={handleSubmit}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-full py-3 text-lg shadow-lg hover:shadow-xl transition"
            >
              Submit
            </Button>
          </div>
        </div>
      </section>

      {/* Book Your Blessed Journey Today Section */}
      <section className="py-12 px-6 md:px-20 text-center rounded-2xl mt-10 shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-[#6B4E3D] mb-4">
          Book Your Blessed Journey Today
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Experience the difference of traveling with <strong>Sanchar6T</strong> - where devotion meets comfort, and every journey becomes a cherished spiritual memory. 
          Contact us now to plan your perfect Tirupati pilgrimage experience.
        </p>
      </section>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-sm w-full text-center">
            <h2 className="text-2xl font-bold mb-4 text-green-600">Thank You!</h2>
            <p className="mb-6 text-gray-700">
              Your feedback has been submitted successfully. We will get back to you soon.
            </p>
            <Button
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-full py-2 px-6"
              onClick={() => setShowPopup(false)}
            >
              Close
            </Button>
          </div>
        </div>
      )}

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default ContactSignup;
