// import busTrackingImg from "@/assets/bus-tracking.png";
// import userImg from "@/assets/user.png";
// import { Link } from "react-router-dom";

// const TravelersLove = () => {
//   const testimonials = [
//     {
//       name: "Rushikesh R",
//       location: "Pune, Maharashtra",
//       review:
//         "Excellent service and well-planned itinerary. Our Shirdi trip was peaceful and perfectly managed. Highly recommended for spiritual travel!",
//     },
//     {
//       name: "Akshith J",
//       location: "Bangalore, Karnataka",
//       review:
//         "Booked my Tirupati pilgrimage via Sanchar6t – smooth bus booking, helpful guides, comfy Volvo ride and VIP darshan. Great value, would travel with them again!",
//     },
//     {
//       name: "Akash Dey",
//       location: "Bangalore, Karnataka",
//       review:
//         "Sanchar6t made our family trip to Kanyakumari super easy. Good coordination, decent pricing, and timely updates. Will book again!",
//     },
//   ];

//   const popularSearches = {
//   column1: [
//     "Bangalore to Tirupati Tour Packages",
//     "Tirupati Packages From Bangalore",
//     "Tirupati Car Packages from Bangalore",
//     "Bangalore to Tirupati Balaji Darshan Package",
//     "Tirupati One Day Package from Bangalore",
//   ],
//   column2: [
//     "KSRTC Tirupati Package from Bangalore",
//     "Bangalore to Tirumala Tirupati Package",
//     "Bangalore to Tirupati Car Rental Package",
//     "Tirupati Tour from Bangalore with VIP Darshan",
//   ],
//   column3: [
//     "Best Tirupati Tour Operators in Bangalore",
//     "Tirupati Package from Bangalore by Bus",
//     "Tirupati Package from Bangalore for Families",
//     "Bangalore to Tirupati Temple Tour Package",
//     "Tirupati Package Booking Online Bangalore",
//   ],
// };

// const quickLinks = {
//   column1: [
//     "bangalore to tirupathi bus package",
//     "tirupati package from bangalore price",
//     "ksrtc tirupati package from bangalore",
//   ],
//   column2: [
//     "tirupati balaji package from bangalore",
//     "tirupati tour package from bangalore",
//     "tirupati package from bangalore",
//   ],
//   column3: [
//     "bangalore to tirupati package bus",
//     "tirupati darshan package from bangalore",
//     "tirupati package from Bangalore price",
//   ],
// };


//   return (
//     <section style={{ padding: "clamp(40px, 8vw, 31px) 0px" }}>
//       <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
//         {/* Section Header */}
//         <div
//           style={{
//             textAlign: "center",
//             marginBottom: "clamp(20px, 4vw, 40px)",
//           }}
//         >
//           <div
//             className="header-flex"
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               gap: "clamp(15px, 4vw, 40px)",
//               flexWrap: "wrap",
//             }}
//           >
//             {/* Left Image */}
//             <img
//               src={busTrackingImg}
//               alt="Bus Tracking"
//               className="header-img"
//               style={{
//                 width: "clamp(180px, 25vw, 320px)",
//                 height: "auto",
//                 objectFit: "contain",
//                 flexShrink: 0,
//               }}
//             />

//             {/* Heading */}
//             <h2
//               className="header-title"
//               style={{
//                 fontSize: "clamp(20px, 2.2vw, 20px)",
//                 fontWeight: "600",
//                 color: "#a2703d",
//                 fontFamily: "Inter, sans-serif",
//                 margin: 0,
//                 textAlign: "center",
//               }}
//             >
//               Travelers Love Sanchar6T
//             </h2>

//             {/* Right Image */}
//             <img
//               src={busTrackingImg}
//               alt="Bus Tracking"
//               className="header-img"
//               style={{
//                 width: "clamp(180px, 25vw, 320px)",
//                 height: "auto",
//                 objectFit: "contain",
//                 flexShrink: 0,
//               }}
//             />
//           </div>
//         </div>

//         {/* Testimonials Grid */}
//         <div
//           className="testimonials-grid"
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//             gap: "clamp(20px, 4vw, 30px)",
//           }}
//         >
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               style={{
//                 backgroundColor: "#ffe7d4",
//                 borderRadius: "12px",
//                 padding: "20px",
//                 boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//                 textAlign: "left",
//                 display: "flex",
//                 flexDirection: "column",
//               }}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   marginBottom: "8px",
//                 }}
//               >
//                 <img
//                   src={userImg}
//                   alt="User"
//                   style={{
//                     width: "40px",
//                     height: "40px",
//                     borderRadius: "50%",
//                     marginRight: "10px",
//                     objectFit: "cover",
//                   }}
//                 />
//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <h3
//                     style={{
//                       fontSize: "clamp(18px, 2.5vw, 18px)",
//                       fontWeight: "600",
//                       color: "#4d361b",
//                       margin: 0,
//                       fontFamily: "Inter, sans-serif",
//                     }}
//                   >
//                     {testimonial.name}
//                   </h3>
//                   <p
//                     style={{
//                       fontSize: "clamp(18px, 2vw, 18px)",
//                       color: "#4d361b",
//                       margin: 0,
//                       fontFamily: "Inter, sans-serif",
//                     }}
//                   >
//                     {testimonial.location}
//                   </p>
//                 </div>
//               </div>

//               {/* Stars */}
//               <div style={{ display: "flex", gap: "2px", marginBottom: "8px" }}>
//                 {Array.from({ length: 5 }).map((_, starIndex) => (
//                   <span
//                     key={starIndex}
//                     style={{ color: "#FBBF24", fontSize: "18px" }}
//                   >
//                     ★
//                   </span>
//                 ))}
//               </div>

//               {/* Review */}
//               <p
//                 style={{
//                   fontSize: "clamp(16px, 2vw, 16px)",
//                   color: "#6B4E3D",
//                   lineHeight: "1.5",
//                   fontFamily: "Inter, sans-serif",
//                   margin: 0,
//                 }}
//               >
//                 {testimonial.review}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* --- Find Us Online Section --- */}
//       <section className="text-center py-10 text-xl text-gray-400 opacity-70 px-4">
//         <p className="mt-3 text-gray-400 text-xl leading-relaxed">
//           <strong>FINDS US ONLINE:</strong>{" "}
//           <Link
//             to="/tirupati-package-from-bangalore"
//             className="text-blue-600 hover:underline"
//           >
//             bangalore to tirupathi bus package
//           </Link>
//           ,{" "}
//           <Link
//             to="/tirupati-package-from-bangalore"
//             className="text-blue-600 hover:underline"
//           >
//             tirupati package from bangalore price
//           </Link>
//           ,{" "}
//           <Link
//             to="/tirupati-package-from-bangalore"
//             className="text-blue-600 hover:underline"
//           >
//             ksrtc tirupati package from bangalore
//           </Link>
//           ,{" "}
//           <Link
//             to="/tirupati-package-from-bangalore"
//             className="text-blue-600 hover:underline"
//           >
//             tirupati balaji package from bangalore
//           </Link>
//           ,{" "}
//           <Link
//             to="/tirupati-package-from-bangalore"
//             className="text-blue-600 hover:underline"
//           >
//             tirupati tour package from bangalore
//           </Link>
//           ,{" "}
//           <Link
//             to="/tirupati-package-from-bangalore"
//             className="text-blue-600 hover:underline"
//           >
//             tirupati package from bangalore
//           </Link>
//           ,{" "}
//           <Link
//             to="/tirupati-package-from-bangalore"
//             className="text-blue-600 hover:underline"
//           >
//             tirupati package from Bangalore price
//           </Link>
//         </p>
//       </section>

//       {/* --- NEW SECTION: Find Us Online (Detailed) --- */}
//       <main className="min-h-screen py-16 px-4"
//       style={{
//     paddingTop: "1rem",
//     paddingBottom: "0rem",
//     paddingRight: "2rem",
//     paddingLeft: "2rem",
//   }}
//       >
//         <div className="max-w-7xl mx-auto">
         
//           {/* Popular Searches */}
// <section className="mb-12">
//   <h1 className="text-center mb-12 text-[20px] font-bold">
//     <span
//       style={{
//         color: "#4d361b",
//         borderBottom: "4px solid #4d361b",
//         paddingBottom: "4px",
//       }}
//     >
//       Popular
//     </span>{" "}
//     <span
//       style={{
//         color: "#e1aa01",
//         borderBottom: "4px solid #e1aa01",
//         paddingBottom: "4px",
//       }}
//     >
//       Searches
//     </span>
//   </h1>
//   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
//     {[popularSearches.column1, popularSearches.column2, popularSearches.column3].map(
//       (column, idx) => (
//         <ul key={idx} className="space-y-4">
//           {column.map((item, i) => (
//             <li
//               key={i}
//               className="text-[18px] leading-relaxed flex"
//               style={{ color: "#000000" }}
//             >
//               <span className="mr-3">•</span>
//               <Link
//                 to="/tirupati-package-from-bangalore"
//                 className="hover:underline"
//                 style={{ color: "#000000", textDecoration: "none" }}
//               >
//                 {item}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )
//     )}
//   </div>
// </section>

// {/* Quick Links */}
// <section>
//   <h2 className="text-center mb-6 text-[20px] font-bold">
//     <span
//       style={{
//         color: "#3d2817",
//         borderBottom: "4px solid #3d2817",
//         paddingBottom: "4px",
//       }}
//     >
//       Quick
//     </span>{" "}
//     <span
//       style={{
//         color: "#d9a621",
//         borderBottom: "4px solid #d9a621",
//         paddingBottom: "4px",
//       }}
//     >
//       Links
//     </span>
//   </h2>
//   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
//     {[quickLinks.column1, quickLinks.column2, quickLinks.column3].map(
//       (column, idx) => (
//         <ul key={idx} className="space-y-4">
//           {column.map((item, i) => (
//             <li
//               key={i}
//               className="text-[18px] leading-relaxed flex"
//               style={{ color: "#000000" }}
//             >
//               <span className="mr-3">•</span>
//               <Link
//                 to="/tirupati-package-from-bangalore"
//                 className="hover:underline"
//                 style={{ color: "#000000", textDecoration: "none" }}
//               >
//                 {item}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )
//     )}
//   </div>
// </section>




//         </div>
//       </main>

//       <style>
//         {`
//           @media (max-width: 768px) {
//             .header-flex {
//               flex-direction: column !important;
//               gap: 12px !important;
//             }
//             .header-img {
//               width: 140px !important;
//             }
//             .header-title {
//               font-size: 22px !important;
//             }
//             .testimonials-grid {
//               grid-template-columns: 1fr !important;
//               gap: 16px !important;
//             }
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default TravelersLove;

import busTrackingImg from "@/assets/bus-tracking.png";
import userImg from "@/assets/user.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TravelersLove = () => {
  const testimonials = [
    {
      name: "Rushikesh R",
      location: "Pune, Maharashtra",
      review:
        "Excellent service and well-planned itinerary. Our Shirdi trip was peaceful and perfectly managed. Highly recommended for spiritual travel!",
    },
    {
      name: "Akshith J",
      location: "Bangalore, Karnataka",
      review:
        "Booked my Tirupati pilgrimage via Sanchar6t – smooth bus booking, helpful guides, comfy Volvo ride and VIP darshan. Great value, would travel with them again!",
    },
    {
      name: "Akash Dey",
      location: "Bangalore, Karnataka",
      review:
        "Sanchar6t made our family trip to Kanyakumari super easy. Good coordination, decent pricing, and timely updates. Will book again!",
    },
  ];

  const popularSearches = {
    column1: [
      "Bangalore to Tirupati Tour Packages",
      "Tirupati Packages From Bangalore",
      "Tirupati Car Packages from Bangalore",
      "Bangalore to Tirupati Balaji Darshan Package",
      "Tirupati One Day Package from Bangalore",
    ],
    column2: [
      "KSRTC Tirupati Package from Bangalore",
      "Bangalore to Tirumala Tirupati Package",
      "Bangalore to Tirupati Car Rental Package",
      "Tirupati Tour from Bangalore with VIP Darshan",
    ],
    column3: [
      "Best Tirupati Tour Operators in Bangalore",
      "Tirupati Package from Bangalore by Bus",
      "Tirupati Package from Bangalore for Families",
      "Bangalore to Tirupati Temple Tour Package",
      "Tirupati Package Booking Online Bangalore",
    ],
  };

  const quickLinks = {
    column1: [
      "bangalore to tirupathi bus package",
      "tirupati package from bangalore price",
      "ksrtc tirupati package from bangalore",
    ],
    column2: [
      "tirupati balaji package from bangalore",
      "tirupati tour package from bangalore",
      "tirupati package from bangalore",
    ],
    column3: [
      "bangalore to tirupati package bus",
      "tirupati darshan package from bangalore",
      "tirupati package from Bangalore price",
    ],
  };

  // ✅ Mobile slider state
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = testimonials.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  return (
    <section style={{ padding: "clamp(40px, 8vw, 31px) 0px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(20px, 4vw, 40px)",
          }}
        >
          <div
            className="header-flex"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "clamp(15px, 4vw, 40px)",
              flexWrap: "wrap",
            }}
          >
            <img
              src={busTrackingImg}
              alt="Bus Tracking"
              className="header-img"
              style={{
                width: "clamp(180px, 25vw, 320px)",
                height: "auto",
                objectFit: "contain",
                flexShrink: 0,
              }}
            />
            <h2
              className="header-title"
              style={{
                fontSize: "clamp(20px, 2.2vw, 20px)",
                fontWeight: "600",
                color: "#a2703d",
                fontFamily: "Inter, sans-serif",
                margin: 0,
                textAlign: "center",
              }}
            >
              Travelers Love Sanchar6T
            </h2>
            <img
              src={busTrackingImg}
              alt="Bus Tracking"
              className="header-img"
              style={{
                width: "clamp(180px, 25vw, 320px)",
                height: "auto",
                objectFit: "contain",
                flexShrink: 0,
              }}
            />
          </div>
        </div>

        {/* ✅ Desktop Testimonials Grid */}
        <div
          className="testimonials-grid desktop-view"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(20px, 4vw, 30px)",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#ffe7d4",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
                <img
                  src={userImg}
                  alt="User"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    marginRight: "10px",
                    objectFit: "cover",
                  }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3
                    style={{
                      fontSize: "clamp(18px, 2.5vw, 18px)",
                      fontWeight: "600",
                      color: "#4d361b",
                      margin: 0,
                    }}
                  >
                    {testimonial.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "clamp(18px, 2vw, 18px)",
                      color: "#4d361b",
                      margin: 0,
                    }}
                  >
                    {testimonial.location}
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "2px", marginBottom: "8px" }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} style={{ color: "#FBBF24", fontSize: "18px" }}>
                    ★
                  </span>
                ))}
              </div>
              <p style={{ color: "#6B4E3D" }}>{testimonial.review}</p>
            </div>
          ))}
        </div>

        {/* ✅ Mobile Slider View */}
        <div className="mobile-slider">
          <div
            className="mobile-slide"
            style={{
              backgroundColor: "#ffe7d4",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              textAlign: "left",
              position: "relative",
              margin: "0 40px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
              <img
                src={userImg}
                alt="User"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              <div>
                <h3 style={{ fontSize: "18px", margin: 0 }}>
                  {testimonials[currentIndex].name}
                </h3>
                <p style={{ fontSize: "16px", margin: 0 }}>
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </div>
            <div style={{ color: "#FBBF24", marginBottom: "8px" }}>★★★★★</div>
            <p style={{ color: "#6B4E3D" }}>{testimonials[currentIndex].review}</p>

            {/* Arrow Buttons */}
            <button className="prev-btn" onClick={prevSlide}>
              <ChevronLeft size={24} />
            </button>
            <button className="next-btn" onClick={nextSlide}>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Find Us Online */}
      {/* <section className="text-center py-10 text-xl text-gray-400 opacity-70 px-4">
        <p className="mt-3 text-gray-400 text-xl leading-relaxed">
          <strong>FINDS US ONLINE:</strong>{" "}
          <Link to="/tirupati-package-from-bangalore" className="text-blue-600 hover:underline">
            bangalore to tirupathi bus package
          </Link>
          ,{" "}
          <Link to="/tirupati-package-from-bangalore" className="text-blue-600 hover:underline">
            tirupati package from bangalore price
          </Link>
          ,{" "}
          <Link to="/tirupati-package-from-bangalore" className="text-blue-600 hover:underline">
            ksrtc tirupati package from bangalore
          </Link>
          ,{" "}
          <Link to="/tirupati-package-from-bangalore" className="text-blue-600 hover:underline">
            tirupati balaji package from bangalore
          </Link>
          ,{" "}
          <Link to="/tirupati-package-from-bangalore" className="text-blue-600 hover:underline">
            tirupati tour package from bangalore
          </Link>
        </p>
      </section> */}

      {/* --- Popular Searches and Quick Links --- */}
      <main
        className="min-h-screen py-16 px-4"
        style={{
          paddingTop: "1rem",
          paddingBottom: "0rem",
          paddingRight: "2rem",
          paddingLeft: "2rem",
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Popular Searches */}
          <section className="mb-12">
            <h1 className="text-center mb-12 text-[20px] font-bold">
              <span
                style={{
                  color: "#4d361b",
                  borderBottom: "4px solid #4d361b",
                  paddingBottom: "4px",
                }}
              >
                Popular
              </span>{" "}
              <span
                style={{
                  color: "#e1aa01",
                  borderBottom: "4px solid #e1aa01",
                  paddingBottom: "4px",
                }}
              >
                Searches
              </span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[popularSearches.column1, popularSearches.column2, popularSearches.column3].map(
                (column, idx) => (
                  <ul key={idx} className="space-y-2">
                    {column.map((item, i) => (
                      <li key={i} className="flex text-[18px]" style={{ color: "#000" }}>
                        <span className="mr-3">•</span>
                        <Link
                          to="/tirupati-package-from-bangalore"
                          className="hover:underline"
                          style={{ color: "#000", textDecoration: "none" }}
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )
              )}
            </div>
          </section>

          {/* Quick Links */}
          <section>
            <h2 className="text-center mb-6 text-[20px] font-bold">
              <span
                style={{
                  color: "#3d2817",
                  borderBottom: "4px solid #3d2817",
                  paddingBottom: "4px",
                }}
              >
                Quick
              </span>{" "}
              <span
                style={{
                  color: "#d9a621",
                  borderBottom: "4px solid #d9a621",
                  paddingBottom: "4px",
                }}
              >
                Links
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[quickLinks.column1, quickLinks.column2, quickLinks.column3].map(
                (column, idx) => (
                  <ul key={idx} className="space-y-2">
                    {column.map((item, i) => (
                      <li key={i} className="flex text-[18px]" style={{ color: "#000" }}>
                        <span className="mr-3">•</span>
                        <Link
                          to="/tirupati-package-from-bangalore"
                          className="hover:underline"
                          style={{ color: "#000", textDecoration: "none" }}
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )
              )}
            </div>
          </section>
        </div>
      </main>

      <style>
        {`
          @media (max-width: 768px) {
            .desktop-view {
              display: none !important;
            }
            .mobile-slider {
              display: block;
              position: relative;
              margin-top: 20px;
            }
            .prev-btn, .next-btn {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              background: #f7d9b5;
              border: none;
              border-radius: 50%;
              padding: 6px;
              cursor: pointer;
              color: #4d361b;
            }
            .prev-btn {
              left: -16px;
            }
            .next-btn {
              right: -16px;
            }
          }
          @media (min-width: 769px) {
            .mobile-slider {
              display: none !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default TravelersLove;

