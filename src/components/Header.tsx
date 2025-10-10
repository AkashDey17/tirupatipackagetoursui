// import { useState } from "react";
// import { Menu, X, Phone } from "lucide-react";
// import { Link } from "react-router-dom";
// import logoImg from "@/assets/logo.png";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const menuItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/tirupati-darshan-package-from-bangalore" },
//     { name: "Tirupati Packages", path: "/tirupati-package-from-bangalore" },
//     { name: "Contact", path: "/contact-us" },
//   ];

//   return (
//     <header
//       style={{
//         backgroundColor: "#ffffff",
//         borderBottom: "1px solid #e0e0e0",
//         height: "105px",
//         position: "sticky",
//         top: "0",
//         zIndex: "100",
//       }}
//     >
//       <div
//         style={{
//           maxWidth: "1200px",
//           margin: "0 auto",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           padding: "0 20px",
//           height: "100%",
//           flexWrap: "wrap",
//           gap: "20px",
//         }}
//       >
//         {/* Logo + Text */}
//         <div
//           style={{ display: "flex", alignItems: "center", height: "100%", gap: "10px" }}
//         >
//           <Link to="/" style={{ display: "flex", alignItems: "center", height: "100%" }}>
//             <img
//               src={logoImg}
//               alt="Sanchar6T"
//               style={{
//                 height: "140%",
//                 width: "auto",
//                 objectFit: "contain",
//               }}
//             />
//           </Link>
//           <div className="hidden md:flex flex-col">
//             <span
//               className="hidden md:inline"
//               style={{
//                 fontSize: "24px",
//                 fontWeight: "700",
//                 color: "#6B4E3D",
//                 fontFamily: "Inter, sans-serif",
//                 whiteSpace: "nowrap",
//                 wordSpacing: "4px",
//               }}
//             >
//               Tirupati Package Tours
//             </span>
//             <span
//               className="text-sm text-gray-500"
//               style={{ fontFamily: "Inter, sans-serif" }}
//             >
//               Managed by Sanchar6T
//             </span>
//           </div>
//         </div>

//         {/* Desktop Navigation */}
//         <nav
//           className="hidden md:flex"
//           style={{
//             alignItems: "center",
//             gap: "20px",
//             flexDirection: "column",
//             textAlign: "center",
//           }}
//         >
//           <a
//             href="tel:+919964060505"
//             style={{
//               color: "#6B4E3D",
//               fontSize: "18px",
//               fontWeight: "700",
//               fontFamily: "Inter, sans-serif",
//               marginBottom: "5px",
//               whiteSpace: "nowrap",
//               display: "flex",
//               alignItems: "center",
//               gap: "8px",
//               // animation: "blink 1s infinite",
//             }}
//           >
//             <Phone size={18} /> +91 9964060505
//           </a>

//           <div
//             style={{
//               display: "flex",
//               gap: "40px",
//               flexWrap: "wrap",
//               justifyContent: "center",
//             }}
//           >
//             {menuItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 style={{
//                   color: "#6B4E3D",
//                   fontSize: "18px",
//                   fontWeight: "600",
//                   textDecoration: "none",
//                   fontFamily: "Inter, sans-serif",
//                   whiteSpace: "nowrap",
//                 }}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         </nav>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             style={{ background: "none", border: "none", cursor: "pointer" }}
//           >
//             {menuOpen ? <X size={28} color="#6B4E3D" /> : <Menu size={28} color="#6B4E3D" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {menuOpen && (
//         <div
//           className="md:hidden"
//           style={{
//             backgroundColor: "#ffffff",
//             borderTop: "1px solid #e0e0e0",
//             padding: "10px 20px",
//             display: "flex",
//             flexDirection: "column",
//             gap: "16px",
//           }}
//         >
//           <div className="flex flex-col">
//             <span
//               style={{
//                 fontSize: "24px",
//                 fontWeight: "700",
//                 color: "#6B4E3D",
//                 fontFamily: "Inter, sans-serif",
//                 whiteSpace: "nowrap",
//                 wordSpacing: "4px", // ✅ Added to keep proper spacing
//               }}
//             >
//               Tirupati Package Tours
//             </span>
//             <span className="text-sm text-gray-500">Managed by Sanchar6T</span>
//           </div>

//           <a
//             href="tel:+919964060505"
//             style={{
//               color: "#6B4E3D",
//               fontSize: "18px",
//               fontWeight: "700",
//               fontFamily: "Inter, sans-serif",
//               display: "flex",
//               alignItems: "center",
//               gap: "8px",
//               // animation: "blink 1s infinite",
//             }}
//           >
//             <Phone size={18} /> +91 9964060505
//           </a>

//           {menuItems.map((item) => (
//             <Link
//               key={item.name}
//               to={item.path}
//               style={{
//                 color: "#6B4E3D",
//                 fontSize: "18px",
//                 fontWeight: "600",
//                 textDecoration: "none",
//                 fontFamily: "Inter, sans-serif",
//               }}
//               onClick={() => setMenuOpen(false)}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>
//       )}

//       {/* <style>
//         {`
//           @keyframes blink {
//             0% { opacity: 1; }
//             50% { opacity: 0.4; }
//             100% { opacity: 1; }
//           }
//         `}
//       </style> */}
//     </header>
//   );
// };

// export default Header;


// import { useState } from "react";
// import { Menu, X, Phone } from "lucide-react";
// import { Link } from "react-router-dom";
// import logoImg from "@/assets/logo.png";
// import logoImg1 from "@/assets/logo1.png";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const menuItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/tirupati-darshan-package-from-bangalore" },
//     { name: "Tirupati Packages", path: "/tirupati-package-from-bangalore" },
//     { name: "Contact", path: "/contact-us" },
//   ];

//   return (
//     <header
//       style={{
//         backgroundColor: "#ffffff",
//         borderBottom: "1px solid #e0e0e0",
//         position: "sticky",
//         top: "0",
//         zIndex: "100",
//       }}
//     >
//       <div
//         style={{
//           maxWidth: "1200px",
//           margin: "0 auto",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           padding: "10px 20px",
//           flexWrap: "wrap",
//           gap: "20px",
//         }}
//       >
//         {/* ✅ Left section: Logo + Text + Mobile Number */}
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             gap: "2px", // reduced gap between logo and text
//             flex: "1",
//           }}
//           className="flex items-center md:flex-row"
//         >
//           <Link
//             to="/"
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <img
//               src={logoImg1}
//               alt="Sanchar6T"
//               style={{
//                 height: "50px", // increased logo size for mobile
//                 width: "auto",
//                 objectFit: "contain",
//               }}
//             />
//           </Link>

//           <div
//             className="flex flex-col items-center"
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               gap: "2px",
//             }}
//           >
//             <span
//               style={{
//                 fontSize: "16px",
//                 fontWeight: "700",
//                 color: "#6B4E3D",
//                 fontFamily: "Inter, sans-serif",
//                 whiteSpace: "nowrap",
//               }}
//             >
//               Tirupati Package Tours
//             </span>
//             <span
//               style={{
//                 fontSize: "12px",
//                 color: "#7c7c7c",
//                 fontFamily: "Inter, sans-serif",
//               }}
//             >
//               Managed by Sanchar6T
//             </span>

//             {/* ✅ Mobile Number below "Managed by Sanchar6T" */}
//             <a
//               href="tel:+919964060505"
//               className="block md:hidden"
//               style={{
//                 color: "#6B4E3D",
//                 fontSize: "15px",
//                 fontWeight: "700",
//                 fontFamily: "Inter, sans-serif",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "6px",
//                 whiteSpace: "nowrap",
//                 marginTop: "4px",
//               }}
//             >
//               <Phone size={16} /> +91 9964060505
//             </a>
//           </div>
//         </div>

//         {/* ✅ Hamburger Menu Button (Mobile) */}
//         <div
//           className="flex items-center justify-end md:hidden"
//           style={{
//             position: "absolute",
//             top: "50%", // vertically center
//             transform: "translateY(-50%)",
//             right: "20px",
//             zIndex: 110,
//           }}
//         >
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             style={{
//               background: "none",
//               border: "none",
//               cursor: "pointer",
//             }}
//           >
//             {menuOpen ? (
//               <X size={28} color="#6B4E3D" />
//             ) : (
//               <Menu size={28} color="#6B4E3D" />
//             )}
//           </button>
//         </div>

//         {/* ✅ Desktop Navigation (UNCHANGED) */}
//         <nav
//           className="hidden md:flex"
//           style={{
//             alignItems: "center",
//             gap: "20px",
//             flexDirection: "column",
//             textAlign: "center",
//           }}
//         >
//           <a
//             href="tel:+919964060505"
//             style={{
//               color: "#6B4E3D",
//               fontSize: "18px",
//               fontWeight: "700",
//               fontFamily: "Inter, sans-serif",
//               marginBottom: "5px",
//               whiteSpace: "nowrap",
//               display: "flex",
//               alignItems: "center",
//               gap: "8px",
//             }}
//           >
//             <Phone size={18} /> +91 9964060505
//           </a>

//           <div
//             style={{
//               display: "flex",
//               gap: "40px",
//               flexWrap: "wrap",
//               justifyContent: "center",
//             }}
//           >
//             {menuItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 style={{
//                   color: "#6B4E3D",
//                   fontSize: "18px",
//                   fontWeight: "600",
//                   textDecoration: "none",
//                   fontFamily: "Inter, sans-serif",
//                   whiteSpace: "nowrap",
//                 }}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         </nav>
//       </div>

//       {/* ✅ Mobile Dropdown Menu */}
//       {menuOpen && (
//         <div
//           className="md:hidden"
//           style={{
//             backgroundColor: "#ffffff",
//             borderTop: "1px solid #e0e0e0",
//             padding: "10px 20px",
//             display: "flex",
//             flexDirection: "column",
//             gap: "16px",
//             marginTop: "0px",
//           }}
//         >
//           {menuItems.map((item) => (
//             <Link
//               key={item.name}
//               to={item.path}
//               style={{
//                 color: "#6B4E3D",
//                 fontSize: "18px",
//                 fontWeight: "600",
//                 textDecoration: "none",
//                 fontFamily: "Inter, sans-serif",
//               }}
//               onClick={() => setMenuOpen(false)}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
// the above compoenent is fine but mobile view is perfect

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logoImg from "@/assets/logo.png";
import logoImg1 from "@/assets/logo1.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/tirupati-darshan-package-from-bangalore" },
    { name: "Tirupati Packages", path: "/tirupati-package-from-bangalore" },
    { name: "Contact", path: "/contact-us" },
  ];

  return (
    <header
      style={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e0e0e0",
        position: "sticky",
        top: "0",
        zIndex: "100",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 20px",
          flexWrap: "wrap",
          gap: "20px",
          position: "relative", // needed for absolute mobile button
        }}
      >
        {/* ✅ Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            margin: "0 auto", // center desktop logo and text
          }}
        >
          <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <img
              src={logoImg1}
              alt="Sanchar6T"
              style={{
                height: "50px",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </Link>

          {/* ✅ Desktop text (hidden on mobile) */}
          <div className="hidden md:flex flex-col">
            <span
              style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#6B4E3D",
                fontFamily: "Inter, sans-serif",
                whiteSpace: "nowrap",
                wordSpacing: "4px",
              }}
            >
              Tirupati Package Tours
            </span>
            <span
              style={{
                fontSize: "12px",
                color: "#7c7c7c",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Managed by Sanchar6T
            </span>
          </div>
        </div>

        {/* ✅ Desktop Navigation (hidden on mobile) */}
        <nav
          className="hidden md:flex"
          style={{
            alignItems: "center",
            gap: "20px",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <a
            href="tel:+919964060505"
            style={{
              color: "#6B4E3D",
              fontSize: "18px",
              fontWeight: "700",
              fontFamily: "Inter, sans-serif",
              marginBottom: "5px",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Phone size={18} /> +91 9964060505
          </a>

          <div
            style={{
              display: "flex",
              gap: "40px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  color: "#6B4E3D",
                  fontSize: "18px",
                  fontWeight: "600",
                  textDecoration: "none",
                  fontFamily: "Inter, sans-serif",
                  whiteSpace: "nowrap",
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* ✅ Mobile Hamburger Menu Button */}
        <div
          className="md:hidden"
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            right: "20px",
            zIndex: 110,
          }}
        >
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            {menuOpen ? <X size={28} color="#6B4E3D" style={{position:"relative",top:"49px"}} /> : <Menu size={28} color="#6B4E3D" style={{position:"relative",top:"49px"}} />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile View (unchanged) */}
      <div className="md:hidden" style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2px",
            marginTop: "5px",
          }}
        >
          <span
            style={{
              fontSize: "16px",
              fontWeight: "700",
              color: "#6B4E3D",
              fontFamily: "Inter, sans-serif",
              whiteSpace: "nowrap",
            }}
          >
            Tirupati Package Tours
          </span>
          <span
            style={{
              fontSize: "12px",
              color: "#7c7c7c",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Managed by Sanchar6T
          </span>
          <a
            href="tel:+919964060505"
            style={{
              color: "#6B4E3D",
              fontSize: "15px",
              fontWeight: "700",
              fontFamily: "Inter, sans-serif",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              whiteSpace: "nowrap",
              marginTop: "4px",
            }}
          >
            <Phone size={16} /> +91 9964060505
          </a>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div
            style={{
              backgroundColor: "#ffffff",
              borderTop: "1px solid #e0e0e0",
              padding: "10px 20px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "0px",
            }}
          >
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  color: "#6B4E3D",
                  fontSize: "18px",
                  fontWeight: "600",
                  textDecoration: "none",
                  fontFamily: "Inter, sans-serif",
                }}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
