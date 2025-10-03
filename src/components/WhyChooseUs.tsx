import hotelsImg from "@/assets/hotels.png";
import serviceImg from "@/assets/class-service.png";
import priceImg from "@/assets/rupee.png";

const WhyChooseUs = () => {
  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "clamp(40px, 8vw, 80px) 0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(40px, 8vw, 60px)",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 42px)",
              fontWeight: "700",
              color: "#B45309",
              marginBottom: "20px",
              fontFamily: "Inter, sans-serif",
            }}
          >
            WHY CHOOSE US?
          </h2>
        </div>

        {/* Features Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "clamp(25px, 5vw, 40px)",
          }}
        >
          {/* Feature 1 */}
          <div style={{ textAlign: "center" }}>
            <img
              src={hotelsImg}
              alt="Hand-Picked Hotels"
              style={{
                width: "clamp(80px, 12vw, 100px)", 
                height: "clamp(80px, 12vw, 100px)",
                objectFit: "contain",
                margin: "0 auto 20px",
                display: "block",
              }}
            />
            <h3
              style={{
                fontSize: "clamp(18px, 2.5vw, 25px)",
                fontWeight: "600",
                color: "#6B4E3D",
                marginBottom: "10px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Hand-Picked Hotels
            </h3>
          </div>

          {/* Feature 2 */}
          <div style={{ textAlign: "center" }}>
            <img
              src={serviceImg}
              alt="World Class Service"
              style={{
                width: "clamp(80px, 12vw, 100px)", 
                height: "clamp(80px, 12vw, 100px)",
                objectFit: "contain",
                margin: "0 auto 20px",
                display: "block",
              }}
            />
            <h3
              style={{
                fontSize: "clamp(18px, 2.5vw, 25px)",
                fontWeight: "600",
                color: "#6B4E3D",
                marginBottom: "10px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              World Class Service
            </h3>
          </div>

          {/* Feature 3 */}
          <div style={{ textAlign: "center" }}>
            <img
              src={priceImg}
              alt="Best Price Guarantee"
              style={{
                 width: "clamp(80px, 12vw, 100px)", 
                height: "clamp(80px, 12vw, 100px)",
                objectFit: "contain",
                margin: "0 auto 20px",
                display: "block",
              }}
            />
            <h3
              style={{
                fontSize: "clamp(18px, 2.5vw, 25px)",
                fontWeight: "600",
                color: "#6B4E3D",
                marginBottom: "10px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Best Price Guarantee
            </h3>
          </div>
        </div>

        {/* Additional Content Section */}
        <div
          style={{
            marginTop: "clamp(40px, 8vw, 60px)",
            fontFamily: "Inter, sans-serif",
            color: "#333",
            lineHeight: "1.7",
          }}
        >
          <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#B45309", marginBottom: "15px" }}>
            Premium Service at Best Prices
          </h3>
          <p style={{ marginBottom: "20px", fontSize: "24px" }}>
            Our <strong>Tirupati package from Bangalore price</strong> options cater to every budget without compromising on comfort or service quality. We offer transparent pricing with no hidden costs, ensuring exceptional value for your spiritual investment.
          </p>

          <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#B45309", marginBottom: "15px" }}>
            Complete Spiritual Experience
          </h3>
          <p style={{ marginBottom: "20px", fontSize: "24px" }}>
            Our comprehensive <strong>Tirupati Balaji package from Bangalore</strong> includes comfortable transportation, expert guide services, temple assistance, quality meals, and accommodation arrangements. Every aspect is designed to enhance your devotional experience.
          </p>

          <h3 style={{ fontSize: "26px", fontWeight: "700", color: "#B45309", marginBottom: "15px" }}>
            Featured Services
          </h3>
          <ul style={{ paddingLeft: "20px", marginBottom: "20px", fontSize: "24px",listStyle:"dot" }}>
            <li>Pickup from multiple Bangalore locations</li>
            <li>Comfortable AC bus transportation with reclining seats</li>
            <li>Expert local guides with deep temple knowledge</li>
            <li>Hassle-free darshan arrangements and queue management</li>
            <li>Traditional South Indian meals and refreshments</li>
            <li>Quality hotel accommodations for rest and relaxation</li>
            <li>24/7 customer support throughout your journey</li>
            <li>Flexible booking options with instant confirmation</li>
          </ul>

          <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#B45309", marginBottom: "15px" }}>
            Book Your Sacred Journey Today
          </h3>
          <p style={{ fontSize: "24px" }}>
            Join thousands of satisfied devotees who have experienced Lord Balaji's blessings through Sanchar6t's exceptional pilgrimage services. Our commitment to devotee satisfaction and spiritual fulfilment makes us Bangalore's preferred Tirupati travel partner.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
