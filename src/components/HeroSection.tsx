// import { Link } from "react-router-dom";

// const HeroSection = () => {
//   return (
//     <section 
//       style={{ 
//         height: "80vh",
//         minHeight: "900px",
//         position: "relative",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         paddingTop: "80px"
//       }}
//     >
//       {/* TIRUPATI Text Behind Image */}
//       <h1 
//         style={{ 
//           position: "absolute",
//           top: "12%", 
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           fontSize: "clamp(60px, 10vw, 220px)",
//           fontWeight: "500",
//           color: "#ff0000",
//           letterSpacing: "clamp(4px, 1vw, 8px)",
//           textShadow: "4px 4px 8px rgba(0,0,0,0.3)",
//           margin: 0,
//           fontFamily: "Inter, sans-serif",
//           lineHeight: "1",
//           zIndex: 1,
//         }}
//       >
//         TIRUPATI
//       </h1>

//       {/* Canva Background Image */}
//       <img
//         src="https://productcatalo.my.canva.site/sanchar6t/_assets/media/ba62ffc1619478d5d53529924384308d.png"
//         alt="Hero Background"
//         style={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//           zIndex: 2,
//           pointerEvents: "none"
//         }}
//       />

//       {/* Content (Centered) */}
//       <div 
//         style={{ 
//           position: "relative",
//           zIndex: 3,
//           textAlign: "center",
//           padding: "0 20px",
//           width: "100%",
//           maxWidth: "1200px"
//         }}
//       >
//         {/* Buttons */}
//         <div 
//           style={{ 
//             display: "flex", 
//             justifyContent: "space-between", // pushes one left, one right
//             alignItems: "center",
//             width: "100%",
//             gap: "20px",
//             flexWrap: "wrap"
//           }}
//         >
//           <Link to="/contact-us">
//           <button 
//             style={{ 
//               backgroundColor: "#F59E0B",
//               color: "#6B4E3D",
//               fontSize: "clamp(16px, 2.5vw, 20px)",
//               fontWeight: "700",
//               padding: "clamp(12px, 2vw, 16px) clamp(24px, 4vw, 32px)",
//               border: "none",
//               borderRadius: "50px",
//               cursor: "pointer",
//               boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
//               fontFamily: "Inter, sans-serif",
//               whiteSpace: "nowrap"
//             }}
//           >
//             &lt; BOOK NOW
//           </button>
//           </Link>
//           <Link to="/contact-us">
//           <button 
//             style={{ 
//               backgroundColor: "#F59E0B",
//               color: "#6B4E3D",
//               fontSize: "clamp(16px, 2.5vw, 20px)",
//               fontWeight: "700",
//               padding: "clamp(12px, 2vw, 16px) clamp(24px, 4vw, 32px)",
//               border: "none",
//               borderRadius: "50px",
//               cursor: "pointer",
//               boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
//               fontFamily: "Inter, sans-serif",
//               whiteSpace: "nowrap"
//             }}
//           >
//             CONTACT US &gt;
//           </button>
//           </Link>
//         </div>
//       </div>

//     </section>
//   );
// };

// export default HeroSection;


import { Link } from "react-router-dom";

const HeroSection = () => {
  // 🔹 WhatsApp redirect logic (same as your WhatsAppButton)
  const handleBookNow = () => {
    const phoneNumber = "918197882511";
    const message = "Hello! I’d like to know more about your services.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section 
      style={{ 
        height: "80vh",
        minHeight: "900px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "80px"
      }}
    >
      {/* TIRUPATI Text Behind Image */}
      <h1 
        style={{ 
          position: "absolute",
          top: "12%", 
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "clamp(60px, 10vw, 220px)",
          fontWeight: "500",
          color: "#ff0000",
          letterSpacing: "clamp(4px, 1vw, 8px)",
          textShadow: "4px 4px 8px rgba(0,0,0,0.3)",
          margin: 0,
          fontFamily: "Inter, sans-serif",
          lineHeight: "1",
          zIndex: 1,
        }}
      >
        TIRUPATI
      </h1>

      {/* Canva Background Image */}
      <img
        src="https://productcatalo.my.canva.site/sanchar6t/_assets/media/ba62ffc1619478d5d53529924384308d.png"
        alt="Hero Background"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 2,
          pointerEvents: "none"
        }}
      />

      {/* Content (Centered) */}
      <div 
        style={{ 
          position: "relative",
          zIndex: 3,
          textAlign: "center",
          padding: "0 20px",
          width: "100%",
          maxWidth: "1200px"
        }}
      >
        {/* Buttons */}
        <div 
          style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center",
            width: "100%",
            gap: "20px",
            flexWrap: "wrap"
          }}
        >
          {/* 🔹 Updated BOOK NOW button to redirect to WhatsApp */}
          <button 
            onClick={handleBookNow}
            style={{ 
              backgroundColor: "#F59E0B",
              color: "#6B4E3D",
              fontSize: "clamp(16px, 2.5vw, 20px)",
              fontWeight: "700",
              padding: "clamp(12px, 2vw, 16px) clamp(24px, 4vw, 32px)",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              fontFamily: "Inter, sans-serif",
              whiteSpace: "nowrap"
            }}
          >
            &lt; BOOK NOW
          </button>

          <Link to="/contact-us">
            <button 
              style={{ 
                backgroundColor: "#F59E0B",
                color: "#6B4E3D",
                fontSize: "clamp(16px, 2.5vw, 20px)",
                fontWeight: "700",
                padding: "clamp(12px, 2vw, 16px) clamp(24px, 4vw, 32px)",
                border: "none",
                borderRadius: "50px",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                fontFamily: "Inter, sans-serif",
                whiteSpace: "nowrap"
              }}
            >
              CONTACT US &gt;
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
