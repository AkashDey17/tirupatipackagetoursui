import { useState } from "react";
import { Menu, X, Phone } from "lucide-react"; 
import { Link } from "react-router-dom"; 
import logoImg from "@/assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    // { name: "About", path: "/about-us" },
    // { name: "Tirupati Packages", path: "/tirupati-package" }, 
    { name: "About", path: "/tirupati-darshan-package-from-bangalore" },
    { name: "Tirupati Packages", path: "/package-from-bangalore" }, 
    { name: "Contact", path: "/contact-us" },
  ];

  return (
    <header
      style={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e0e0e0",
        height: "105px",
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
          padding: "0 20px",
          height: "100%",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
       
        <div style={{ display: "flex", alignItems: "center", height: "100%", gap: "10px" }}>
          <Link to="/" style={{ display: "flex", alignItems: "center", height: "100%" }}>
            <img
              src={logoImg}
              alt="Sanchar6T"
              style={{
                height: "140%",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </Link>
          <div className="hidden md:flex flex-col">
            <span
              className="hidden md:inline"
              style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#6B4E3D",
                fontFamily: "Inter, sans-serif",
                whiteSpace: "nowrap",
              }}
            >
              Tirupati Package Tours
            </span>
            <span className="text-sm text-gray-500" style={{ fontFamily: "Inter, sans-serif" }}>
              Managed by Sanchar6T
            </span>
          </div>
        </div>

       
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
            href="tel:+918197882511"
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
              animation: "blink 1s infinite",
            }}
          >
            <Phone size={18} /> +91 8197882511
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

       
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            {menuOpen ? <X size={28} color="#6B4E3D" /> : <Menu size={28} color="#6B4E3D" />}
          </button>
        </div>
      </div>

     
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            backgroundColor: "#ffffff",
            borderTop: "1px solid #e0e0e0",
            padding: "10px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
        
          <div className="flex flex-col">
            <span
              style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#6B4E3D",
                fontFamily: "Inter, sans-serif",
                whiteSpace: "nowrap",
              }}
            >
              TirupatiPackageTours
            </span>
            <span className="text-sm text-gray-500">
              Managed by Sanchar6T
            </span>
          </div>

         
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
              animation: "blink 1s infinite",
            }}
          >
            <Phone size={18} /> +91 8197882511
          </a>

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

      <style>
        {`
          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0.4; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </header>
  );
};

export default Header;


