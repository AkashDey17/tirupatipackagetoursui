import { Link } from "react-router-dom";

const TirupatiPackages = () => {
  return (
    <section
      style={{
        padding: "clamp(40px, 8vw, 80px) 0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          flexDirection: "column",
          gap: "60px",
        }}
      >
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(20px, 5vw, 40px)",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(32px, 6vw, 38px)",
              fontWeight: "700",
              color: "#B45309",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Tirupati Packages
          </h2>
        </div>

        {/* Package 1 - Image Left, Text Right */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          {/* Image + Button */}
          <div
            style={{
              flex: "1",
              textAlign: "center",
              position: "relative",
            }}
          >
            <img
              src="https://productcatalo.my.canva.site/sanchar6t/_assets/media/eaf07c9e6a994a35b830914a2cf034fe.png"
              alt="Tirupati Package 1"
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "350px", // ✅ fixed size
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
            <Link to="/tirupati-package">
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
              whiteSpace: "nowrap",
                position: "absolute",
                bottom: "-20px", // ✅ half inside, half outside
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              Book Now
            </button>
            </Link>
          </div>

          {/* Text */}
          <div style={{ flex: "1" }}>
            <h3
              style={{
                fontSize: "clamp(28px, 3vw, 34px)",
                fontWeight: "600",
                color: "#6B4E3D",
                marginBottom: "15px",
                fontFamily: "Inter, sans-serif",
                lineHeight: "1.4",
              }}
            >
              Tirupati 1 Night / 1 Days Dharma Darshan Package{" "}
            
            </h3>
            <p
              style={{
                fontSize: "clamp(25px, 2.5vw, 24px)",
                color: "#6B4E3D",
                fontFamily: "Inter, sans-serif",
                lineHeight: "1.6",
              }}
            >
              Tirupati, the abode of Lord Venkateswara, welcomes millions of
              devotees to experience unwavering faith, divine grace, and
              spiritual fulfillment atop the sacred Tirumala hills.
            </p>
          </div>
        </div>

        {/* Package 2 - Image Right, Text Left */}
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          {/* Image + Button */}
          <div
            style={{
              flex: "1",
              textAlign: "center",
              position: "relative",
            }}
          >
            <img
              src="https://productcatalo.my.canva.site/sanchar6t/_assets/media/45ff1e3afd79d9b1bfc122e3088fbb9f.png"
              alt="Tirupati Package 2"
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "350px", // ✅ fixed size
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
            <Link to="/tirupati-srikalahasti">
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
              whiteSpace: "nowrap",
                position: "absolute",
                bottom: "-20px", // ✅ half inside, half outside
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              Book Now
            </button>
            </Link>
          </div>

          {/* Text */}
          <div style={{ flex: "1" }}>
            <h3
              style={{
                fontSize: "clamp(28px, 3vw, 34px)",
                fontWeight: "600",
                color: "#6B4E3D",
                marginBottom: "15px",
                fontFamily: "Inter, sans-serif",
                lineHeight: "1.4",
              }}
            >
              Divine Blessings & Sacred Serenity – Tirupati & Srikalahasti in 2
              Days 2 Nights
            </h3>
            <p
              style={{
                fontSize: "clamp(25px, 2.5vw, 24px)",
                color: "#6B4E3D",
                fontFamily: "Inter, sans-serif",
                lineHeight: "1.6",
              }}
            >
              Srikalahasti, renowned as the “Kailasa of the South,” is a holy
              abode where Lord Shiva bestows divine energy and peace. Known for
              its powerful Rahu–Ketu pooja, this pilgrimage inspires inner
              strength, devotion, and spiritual cleansing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TirupatiPackages;
