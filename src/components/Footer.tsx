// import logoImg from "@/assets/logo.png";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   const linkStyle = {
//     fontSize: "clamp(16px, 2vw, 16px)",
//     color: "#4d361b",
//     textDecoration: "none",
//     fontFamily: "Inter, sans-serif",
//     whiteSpace: "nowrap",
//   };

//   return (
//     <footer
//       style={{
//         backgroundColor: "#ffea92",
//         padding: "clamp(40px, 8vw, 60px) 0 20px",
//         position: "relative",
//         overflow: "visible",
//       }}
//     >
//       <div
//         style={{
//           maxWidth: "1200px",
//           margin: "0 auto",
//           padding: "0 20px",
//           position: "relative",
//         }}
//       >
//         {/* Temple Image (hidden on mobile) */}
//         <img
//           className="temple-img"
//           src="https://productcatalo.my.canva.site/sanchar6t/_assets/media/35d5de4b01073214c3ffce81e8218d28.png"
//           alt="Temple Decoration"
//           style={{
//             position: "absolute",
//             top: "-50%",
//             left: "85%",
//             transform: "translateX(-50%)",
//             width: "354.115px",
//             height: "290.375px",
//             objectFit: "cover",
//             pointerEvents: "none",
//             zIndex: 1,
//           }}
//         />

//         <div
//           className="footer-grid"
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(3, 1fr)",
//             gap: "clamp(30px, 6vw, 60px)",
//             marginBottom: "clamp(25px, 5vw, 40px)",
//             alignItems: "start",
//             position: "relative",
//             zIndex: 2,
//           }}
//         >
//           {/* Left Column */}
//           <div style={{ textAlign: "center" }}>
//             <img
//               src={logoImg}
//               alt="Sanchar6T"
//               style={{
//                 height: "clamp(120px, 14vw, 180px)",
//                 width: "auto",
//                 margin: "0 auto",
//                 display: "block",
//               }}
//             />
//             <p
//               style={{
//                 fontSize: "clamp(16px, 2vw, 16px)",
//                 color: "#4d361b",
//                 lineHeight: "1.6",
//                 fontFamily: "Inter, sans-serif",
//                 textAlign: "justify",
//               }}
//             >
//               Sanchar6t, under the leadership of proprietor KN Nagesh, is a
//               distinguished service provider in the realms of bus booking and
//               tourism, renowned for its specialization in Tirupati Balaji and
//               special darshan packages.
//             </p>
//           </div>

//           {/* Center Column */}
//           <div style={{ textAlign: "left", marginTop: "106px" }}>
//             <h3
//               style={{
//                 fontSize: "clamp(16px, 3vw, 16px)",
//                 fontWeight: "600",
//                 color: "#4d361b",
//                 marginBottom: "20px",
//                 fontFamily: "Inter, sans-serif",
//               }}
//             >
//               Contact Info
//             </h3>
//             <div
//               style={{
//                 marginBottom: "15px",
//                 textAlign: "left",
//                 display: "inline-block",
//               }}
//             >
//               <ol
//                 className="contact-list"
//                 style={{
//                   margin: 0,
//                   fontSize: "clamp(16px, 2vw, 16px)",
//                   listStylePosition: "inside",
//                   fontFamily: "Inter, sans-serif",
//                 }}
//               >
//                 <li>+91 9731312275</li>
//                 <li>+91 8197882511</li>
//                 <li>enquiry@tirupatipackagetours.com</li>
//               </ol>
//             </div>
//             <div
//               style={{
//                 display: "inline-block",
//                 textAlign: "left",
//                  width: "100%",
//                 maxWidth: "500px",
//                 marginBottom: "20px",
//               }}
//             >
//               <p
//                 style={{
//                   fontSize: "clamp(16px, 2vw, 16px)",
//                   color: "#4d361b",
//                   lineHeight: "1.6",
//                   fontFamily: "Inter, sans-serif",
//                   whiteSpace: "normal",
//                   margin: 0,
//                 }}
//               >
//                 2767, Advaitha, 3rd Floor, D Block, near BBMP Ward Office,
//                 Defence Layout, Sahakar Nagar, Bengaluru, Karnataka 560092.
//               </p>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "flex-end",
//               alignItems: "center",
//             }}
//           ></div>
//         </div>

//         {/* Bottom Section */}
//         <div
//           style={{
//             borderTop: "1px solid #9CA3AF",
//             paddingTop: "20px",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             flexWrap: "wrap",
//             gap: "20px",
//             textAlign: "center",
//           }}
//         >
//           <p
//             style={{
//               fontSize: "clamp(12px, 2vw, 18px)",
//               color: "#4d361b",
//               fontFamily: "Inter, sans-serif",
//               flex: "1",
//               minWidth: "250px",
//             }}
//           >
//             © Copyright Sanchar6T Tours and Travels <br /> Powered By TechVaraha
//             Solutions Pvt Ltd.
//           </p>

//           <div
//             style={{
//               display: "flex",
//               gap: "clamp(15px, 3vw, 18px)",
//               flexWrap: "wrap",
//               justifyContent: "center",
//             }}
//           >
//             <Link to="/" style={linkStyle}>
//               Home
//             </Link>
//             <Link to="/privacy-policy" style={linkStyle}>
//               Privacy Policy
//             </Link>
//             <Link to="/tc" style={linkStyle}>
//               Terms and Conditions
//             </Link>
//             <Link to="/contact-us" style={linkStyle}>
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       </div>

//       <style>
//         {`
//           /* Mobile responsive footer */
//           @media (max-width: 768px) {
//             .footer-grid {
//               display: flex !important;
//               flex-direction: column !important;
//               align-items: center !important;
//               text-align: center !important;
//             }

//             .footer-grid > div {
//               margin-top: 20px !important;
//             }

//             /* Hide temple image on mobile */
//             .temple-img {
//               display: none !important;
//             }
//           }
//         `}
//       </style>
//     </footer>
//   );
// };

// export default Footer;


import logoImg from "@/assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const linkStyle = {
    fontSize: "clamp(16px, 2vw, 16px)",
    color: "#4d361b",
    textDecoration: "none",
    fontFamily: "Inter, sans-serif",
    whiteSpace: "nowrap",
  };

  return (
    <footer
      style={{
        backgroundColor: "#ffea92",
        padding: "clamp(40px, 8vw, 60px) 0 20px",
        position: "relative",
        overflow: "visible",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          position: "relative",
        }}
      >
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "clamp(30px, 6vw, 60px)",
            marginBottom: "clamp(25px, 5vw, 40px)",
            alignItems: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Left Column */}
          <div style={{ textAlign: "center" }}>
            <img
              src={logoImg}
              alt="Sanchar6T"
              style={{
                height: "clamp(120px, 14vw, 180px)",
                width: "auto",
                margin: "0 auto",
                display: "block",
              }}
            />
            <p
              style={{
                fontSize: "clamp(16px, 2vw, 16px)",
                color: "#4d361b",
                lineHeight: "1.6",
                fontFamily: "Inter, sans-serif",
                textAlign: "justify",
              }}
            >
              Sanchar6t, under the leadership of proprietor KN Nagesh, is a
              distinguished service provider in the realms of bus booking and
              tourism, renowned for its specialization in Tirupati Balaji and
              special darshan packages.
            </p>
          </div>

          {/* Center Column */}
          <div style={{ textAlign: "left",position:"relative",
                top: "68px" }}>
            <h3
              style={{
                fontSize: "clamp(16px, 3vw, 16px)",
                fontWeight: "600",
                color: "#4d361b",
                marginBottom: "20px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Contact Info
            </h3>
            <div
              style={{
                marginBottom: "15px",
                textAlign: "left",
                display: "inline-block",
                
              }}
            >
              <ol
                className="contact-list"
                style={{
                  margin: 0,
                  fontSize: "clamp(16px, 2vw, 16px)",
                  listStylePosition: "inside",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {/* <li>+91 9731312275</li> */}
                <li>+91 9964060505</li>
                <li>enquiry@tirupatipackagetours.com</li>
              </ol>
            </div>
            <div
              style={{
                display: "inline-block",
                textAlign: "left",
                width: "100%",
                maxWidth: "500px",
                marginBottom: "20px",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(16px, 2vw, 16px)",
                  color: "#4d361b",
                  lineHeight: "1.6",
                  fontFamily: "Inter, sans-serif",
                  whiteSpace: "normal",
                  margin: 0,
                }}
              >
                2767, Advaitha, 3rd Floor, D Block, near BBMP Ward Office,
                Defence Layout, Sahakar Nagar, Bengaluru, Karnataka 560092.
              </p>
            </div>
          </div>

          {/* Right Column (Temple Image) */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              className="temple-img"
              src="https://productcatalo.my.canva.site/sanchar6t/_assets/media/35d5de4b01073214c3ffce81e8218d28.png"
              alt="Temple Decoration"
              style={{
                width: "300px",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div
          style={{
            borderTop: "1px solid #9CA3AF",
            paddingTop: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "clamp(12px, 2vw, 18px)",
              color: "#4d361b",
              fontFamily: "Inter, sans-serif",
              flex: "1",
              minWidth: "250px",
            }}
          >
            © Copyright Sanchar6T Tours and Travels <br /> Powered By TechVaraha
            Solutions Pvt Ltd.
          </p>

          <div
            style={{
              display: "flex",
              gap: "clamp(15px, 3vw, 18px)",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Link to="/" style={linkStyle}>
              Home
            </Link>
            <Link to="/privacy-policy" style={linkStyle}>
              Privacy Policy
            </Link>
            <Link to="/tc" style={linkStyle}>
              Terms and Conditions
            </Link>
            <Link to="/contact-us" style={linkStyle}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <style>
        {`
          /* Mobile responsive footer */
          @media (max-width: 768px) {
            .footer-grid {
              display: flex !important;
              flex-direction: column !important;
              align-items: center !important;
              text-align: center !important;
            }

            .footer-grid > div {
              margin-top: 20px !important;
            }

            .temple-img {
              width: 200px !important;
              margin-top: 20px !important;
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
