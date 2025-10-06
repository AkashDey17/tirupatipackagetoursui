

import logoImg from "@/assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const linkStyle = {
    fontSize: "clamp(12px, 2vw, 20px)",
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
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        {/* Three Equal Sections */}
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "clamp(30px, 6vw, 60px)",
            marginBottom: "clamp(25px, 5vw, 40px)",
            alignItems: "start",
          }}
        >
          {/* Left Section - Logo + Text */}
          <div style={{ textAlign: "center" }}>
            <img
              src={logoImg}
              alt="Sanchar6T"
              style={{
                height: "clamp(120px, 14vw, 180px)",
                width: "auto",
                margin: "0 auto 20px",
                display: "block",
              }}
            />
            <p
              style={{
                fontSize: "clamp(14px, 2vw, 20px)",
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

          {/* Middle Section - Contact Info + Popular Searches */}
          <div style={{ textAlign: "left", marginTop: "106px" }}>
            <h3
              style={{
                fontSize: "clamp(20px, 3vw, 24px)",
                fontWeight: "600",
                color: "#4d361b",
                marginBottom: "20px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Contact Info
            </h3>

            <div style={{ marginBottom: "15px", textAlign: "left", display: "inline-block" }}>
              <ol
                className="contact-list"
                style={{
                  margin: 0,
                  fontSize: "clamp(14px, 2vw, 20px)",
                  listStylePosition: "inside",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                <li>+91 9731312275</li>
                <li>+91 8197882511</li>
              </ol>
            </div>

            <div
              style={{
                display: "inline-block",
                textAlign: "left",
                maxWidth: "100%",
                marginBottom: "20px",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(14px, 2vw, 20px)",
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

            <div>
              <h3
                style={{
                  fontSize: "clamp(20px, 3vw, 24px)",
                  fontWeight: "600",
                  color: "#4d361b",
                  marginBottom: "10px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Popular Searches
              </h3>
              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                  fontSize: "clamp(14px, 2vw, 20px)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                <li>
                  <Link to="/tirupati-package" style={linkStyle}>
                    Bangalore to Tirupati Tour Packages
                  </Link>
                </li>
                <li>
                  <Link to="/tirupati-package" style={linkStyle}>
                    Tirupati Packages From Bangalore
                  </Link>
                </li>
                <li>
                  <Link to="/tirupati-package" style={linkStyle}>
                    Tirupati Car Packages from Bangalore
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section - Temple Image + New Content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <img
              src="https://productcatalo.my.canva.site/sanchar6t/_assets/media/35d5de4b01073214c3ffce81e8218d28.png"
              alt="Decoration"
              style={{
                width: "354.115px",
                height: "290.375px",
                objectFit: "cover",
                pointerEvents: "none",
                marginBottom: "15px",
              }}
            />
            {/* New Content Below Temple Image */}
           
            <div
  style={{
    textAlign: "center",
    marginTop: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  }}
>
  <strong style={{ fontSize: "clamp(14px, 2vw, 16px)", color: "#4d361b", marginBottom: "6px" }}>
    POPULAR PACKAGES:
  </strong>
  
  {[
    "bangalore to tirupathi bus package",
    "tirupati package from bangalore price",
    "ksrtc tirupati package from bangalore",
    "tirupati balaji package from bangalore",
    "tirupati tour package from bangalore",
    "tirupati package from bangalore",
    "tirupati darshan package from bangalore",
    "tirupati package from Bangalore price",
    "bangalore to tirupati package bus",
  ].map((pkg, idx) => (
    <a
      key={idx}
      href="/tirupati-package"
      style={{
        fontSize: "clamp(12px, 1.3vw, 14px)",
        color: "#4d361b",
        fontFamily: "Inter, sans-serif",
        textDecoration: "none",
        textAlign:"right"
      }}
    >
      {pkg}
    </a>
  ))}
</div>

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
              fontSize: "clamp(12px, 2vw, 20px)",
              color: "#4d361b",
              fontFamily: "Inter, sans-serif",
              flex: "1",
              minWidth: "250px",
            }}
          >
            © Copyright Sanchar6T Tours and Travels - Powered By TechVaraha Solutions Pvt Ltd.
          </p>

          <div
            style={{
              display: "flex",
              gap: "clamp(15px, 3vw, 20px)",
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
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
