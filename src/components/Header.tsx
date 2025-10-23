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
//           position: "relative", // needed for absolute mobile button
//         }}
//       >
//         {/* ✅ Logo */}
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: "10px",
//             margin: "0 auto", 
//           }}
//         >
//           <Link to="/" style={{ display: "flex", alignItems: "center" }}>
//             <img
//               src={logoImg1}
//               alt="Sanchar6T"
//               style={{
//                 height: "50px",
//                 width: "auto",
//                 objectFit: "contain",
//               }}
//             />
//           </Link>

//           {/* ✅ Desktop text (hidden on mobile) */}
//           <div className="hidden md:flex flex-col">
//             <span
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
//               style={{
//                 fontSize: "12px",
//                 color: "#7c7c7c",
//                 fontFamily: "Inter, sans-serif",
//               }}
//             >
//               Managed by Sanchar6T
//             </span>
//           </div>
//         </div>

//         {/* ✅ Desktop Navigation (hidden on mobile) */}
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
//             href="tel:+919731312275"
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
//             <Phone size={18} /> +91 9731312275
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

//         {/* ✅ Mobile Hamburger Menu Button */}
//         <div
//           className="md:hidden"
//           style={{
//             position: "absolute",
//             top: "50%",
//             transform: "translateY(-50%)",
//             right: "20px",
//             zIndex: 110,
//           }}
//         >
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             style={{ background: "none", border: "none", cursor: "pointer" }}
//           >
//             {menuOpen ? <X size={28} color="#6B4E3D" style={{position:"relative",top:"49px"}} /> : <Menu size={28} color="#6B4E3D" style={{position:"relative",top:"49px"}} />}
//           </button>
//         </div>
//       </div>

//       {/* ✅ Mobile View (unchanged) */}
//       <div className="md:hidden" style={{ width: "100%" }}>
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             gap: "2px",
//             marginTop: "5px",
//           }}
//         >
//           <span
//             style={{
//               fontSize: "16px",
//               fontWeight: "700",
//               color: "#6B4E3D",
//               fontFamily: "Inter, sans-serif",
//               whiteSpace: "nowrap",
//             }}
//           >
//             Tirupati Package Tours
//           </span>
//           <span
//             style={{
//               fontSize: "12px",
//               color: "#7c7c7c",
//               fontFamily: "Inter, sans-serif",
//             }}
//           >
//             Managed by Sanchar6T
//           </span>
//           <a
//             href="tel:+919731312275"
//             style={{
//               color: "#6B4E3D",
//               fontSize: "15px",
//               fontWeight: "700",
//               fontFamily: "Inter, sans-serif",
//               display: "flex",
//               alignItems: "center",
//               gap: "6px",
//               whiteSpace: "nowrap",
//               marginTop: "4px",
//             }}
//           >
//             <Phone size={16} /> +91 9731312275
//           </a>
//         </div>

//         {/* Mobile Dropdown */}
//         {menuOpen && (
//           <div
//             style={{
//               backgroundColor: "#ffffff",
//               borderTop: "1px solid #e0e0e0",
//               padding: "10px 20px",
//               display: "flex",
//               flexDirection: "column",
//               gap: "16px",
//               marginTop: "0px",
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
//                 }}
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;
// the above code is with only one number at top

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
            margin: "0 auto",
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
          {/* ✅ Phone numbers stacked vertically */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <a
              href="tel:+919731312275"
              style={{
                color: "#6B4E3D",
                fontSize: "18px",
                fontWeight: "700",
                fontFamily: "Inter, sans-serif",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                whiteSpace: "nowrap",
              }}
            >
              <Phone size={18} /> +91 9731312275
            </a>
            <a
              href="tel:+918197882511"
              style={{
                color: "#6B4E3D",
                fontSize: "18px",
                fontWeight: "700",
                fontFamily: "Inter, sans-serif",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                whiteSpace: "nowrap",
              }}
            >
              <Phone size={18} /> +91 8197882511
            </a>
          </div>

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
            {menuOpen ? (
              <X size={28} color="#6B4E3D" style={{ position: "relative", top: "49px" }} />
            ) : (
              <Menu size={28} color="#6B4E3D" style={{ position: "relative", top: "49px" }} />
            )}
          </button>
        </div>
      </div>

      {/* ✅ Mobile View */}
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

          {/* ✅ Phone numbers stacked vertically on mobile */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "4px",
              marginTop: "4px",
            }}
          >
            <a
              href="tel:+919731312275"
              style={{
                color: "#6B4E3D",
                fontSize: "15px",
                fontWeight: "700",
                fontFamily: "Inter, sans-serif",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                whiteSpace: "nowrap",
              }}
            >
              <Phone size={16} /> +91 9731312275
            </a>
            <a
              href="tel:+918197882511"
              style={{
                color: "#6B4E3D",
                fontSize: "15px",
                fontWeight: "700",
                fontFamily: "Inter, sans-serif",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                whiteSpace: "nowrap",
              }}
            >
              <Phone size={16} /> +91 8197882511
            </a>
          </div>
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
