import ContactSignup from "@/components/contact/ContactSignUp";
import ContactFloatingButton from "@/components/ContactFloatingButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LiveMoodIndicator from "@/components/LiveMoodIndicator";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Helmet>
        <title>tirupati trip from bangalore | kstdc tirupati package from bangalore</title>
        <meta
          name="description"
          content="Experience sacred Tirupati trip from Bangalore along with TirupatiPackageTours. Enjoy comfortable travel, VIP darshan and blissful pilgrimage."
        />
        <meta
          name="keywords"
          content="tirupati trip from bangalore, 1 day tirupati package from bangalore, kstdc tirupati package from bangalore, tirupati balaji package from bangalore, tirupati balaji darshan package from bangalore, apsrtc tirupati darshan package from bangalore, aptdc tirupati darshan package from bangalore, bangalore tirupati darshan"
        />
      </Helmet>

      <Header />

      {/* Main H1 for SEO */}
      <h1 style={{ display: "none" }}>tirupati trip from bangalore</h1>

      <ContactSignup />
     
      <Footer />
      <ContactFloatingButton />
    </div>
  );
};

export default Contact;
