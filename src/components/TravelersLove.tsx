// import busTrackingImg from "@/assets/bus-tracking.png"; // ✅ Import image
// import userImg from "@/assets/user.png"; // ✅ Import user image

// const TravelersLove = () => {
//   const testimonials = [
//     {
//       name: "Rushikesh R",
//       location: "Pune, Maharashtra",
//       review: "Excellent service and well-planned itinerary. Our Shirdi trip was peaceful and perfectly managed. Highly recommended for spiritual travel!"
//     },
//     {
//       name: "Akshith J",
//       location: "Banglore, Karnataka.",
//       review: "Booked my Tirupati pilgrimage via Sanchar6t – smooth bus booking, helpful guides, comfy Volvo ride and VIP darshan. Great value, would travel with them again!"
//     },
//     {
//       name: "Yavanthi S",
//       location: "Banglore, Karnataka.",
//       review: "Sanchar6t made our family trip to Kanyakumari super easy. Good coordination, decent pricing, and timely updates. Will book again!"
//     }
//   ];

//   return (
//     <section style={{ padding: "clamp(40px, 8vw, 80px) 0" }}>
//       <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
//         {/* Section Header */}
//         <div style={{ textAlign: "center", marginBottom: "clamp(10px, 2vw, 20px)" }}> {/* 🔹 Further reduced spacing */}
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               gap: "20px"
//             }}
//           >
//             {/* Left Image */}
//             <img
//               src={busTrackingImg}
//               alt="Bus Tracking"
//               style={{ width: "350px", height: "350px", objectFit: "contain" }}
//             />

//             {/* Heading */}
//             <h2
//               style={{
//                 fontSize: "clamp(28px, 5vw, 42px)",
//                 fontWeight: "400",
//                 color: "#a2703d",
//                 fontFamily: "Inter, sans-serif",
//                 margin: 0
//               }}
//             >
//               Travelers Love Sanchar6T
//             </h2>

//             {/* Right Image */}
//             <img
//               src={busTrackingImg}
//               alt="Bus Tracking"
//               style={{ width: "350px", height: "350px", objectFit: "contain" }}
//             />
//           </div>
//         </div>

//         {/* Testimonials Grid */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//             gap: "clamp(20px, 4vw, 30px)"
//           }}
//         >
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               style={{
//                 backgroundColor: "#ffe7d4",
//                 borderRadius: "12px",
//                 padding: "16px 16px 16px 16px",
//                 boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//                 textAlign: "left",
//                 display: "flex",
//                 flexDirection: "column",
//                 height: "fit-content"
//               }}
//             >
//               {/* Name and Location with User Image */}
//               <div style={{ display: "flex", alignItems: "center", marginBottom: "4px" }}>
//                 <img
//                   src={userImg}
//                   alt="User"
//                   style={{
//                     width: "40px",
//                     height: "40px",
//                     borderRadius: "50%",
//                     marginRight: "10px",
//                     objectFit: "cover"
//                   }}
//                 />
//                 <div style={{ display: "flex", flexDirection: "column", rowGap: "2px" }}>
//                   <h3
//                     style={{
//                       fontSize: "clamp(16px, 2.5vw, 22px)",
//                       fontWeight: "600",
//                       color: "#4d361b",
//                       margin: 0,
//                       fontFamily: "Inter, sans-serif"
//                     }}
//                   >
//                     {testimonial.name}
//                   </h3>
//                   <p
//                     style={{
//                       fontSize: "clamp(12px, 2vw, 22px)",
//                       color: "#4d361b",
//                       margin: 0,
//                       fontFamily: "Inter, sans-serif"
//                     }}
//                   >
//                     {testimonial.location}
//                   </p>
//                 </div>
//               </div>

//               {/* 5 Stars */}
//               <div style={{ display: "flex", gap: "2px", marginBottom: "2px" }}>
//                 {Array.from({ length: 5 }).map((_, starIndex) => (
//                   <span key={starIndex} style={{ color: "#FBBF24", fontSize: "20px", lineHeight: "1" }}>
//                     ★
//                   </span>
//                 ))}
//               </div>

//               {/* Review */}
//               <p
//                 style={{
//                   fontSize: "clamp(14px, 2vw, 16px)",
//                   color: "#6B4E3D",
//                   lineHeight: "1.5",
//                   fontFamily: "Inter, sans-serif",
//                   marginTop: "0px",
//                   marginBottom: "0px"
//                 }}
//               >
//                 {testimonial.review}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TravelersLove;


import busTrackingImg from "@/assets/bus-tracking.png"; 
import userImg from "@/assets/user.png"; 

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
      name: "Yavanthi S",
      location: "Bangalore, Karnataka",
      review:
        "Sanchar6t made our family trip to Kanyakumari super easy. Good coordination, decent pricing, and timely updates. Will book again!",
    },
  ];

  return (
    <section style={{ padding: "clamp(40px, 8vw, 80px) 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(20px, 4vw, 40px)" }}>
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
            {/* Left Image */}
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

            {/* Heading */}
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

            {/* Right Image */}
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

        {/* Testimonials Grid */}
        <div
          className="testimonials-grid"
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
              {/* Name + Location */}
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
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {testimonial.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "clamp(18px, 2vw, 18px)",
                      color: "#4d361b",
                      margin: 0,
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div style={{ display: "flex", gap: "2px", marginBottom: "8px" }}>
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <span key={starIndex} style={{ color: "#FBBF24", fontSize: "18px" }}>
                    ★
                  </span>
                ))}
              </div>

              {/* Review */}
              <p
                style={{
                  fontSize: "clamp(16px, 2vw, 16px)",
                  color: "#6B4E3D",
                  lineHeight: "1.5",
                  fontFamily: "Inter, sans-serif",
                  margin: 0,
                }}
              >
                {testimonial.review}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Styles */}
      <style>
        {`
          /* Tablet */
          @media (max-width: 1024px) {
            .header-flex {
              gap: 20px !important;
            }
          }

          /* Mobile */
          @media (max-width: 768px) {
            .header-flex {
              flex-direction: column !important;
              gap: 12px !important;
            }
            .header-img {
              width: 140px !important;
            }
            .header-title {
              font-size: 22px !important;
            }
            .testimonials-grid {
              grid-template-columns: 1fr !important;
              gap: 16px !important;
            }
          }

          /* Extra small phones */
          @media (max-width: 480px) {
            .header-img {
              width: 120px !important;
            }
            .header-title {
              font-size: 20px !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default TravelersLove;

