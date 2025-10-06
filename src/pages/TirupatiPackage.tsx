import ContactFloatingButton from "@/components/ContactFloatingButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TirupatiPakage from "@/components/tirupati-packages/TirupatiPackage";
import { Helmet } from "react-helmet";

const TirupatiPackage = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Helmet>
        <title>tirupati package from bangalore | tirupati tour package from bangalore</title>
        <meta
          name="description"
          content="Plan your God's journey with TirupatiPackageTours. Best Tirupati package from Bangalore, VIP Darshan, Temple sightseeing, comfortable trip."
        />
        <meta
          name="keywords"
          content="tirupati package from bangalore, tirupati tour package from bangalore, tirupati darshan package from bangalore, tirupati package from bangalore price, bangalore to tirupati package bus, tirupati one day package from bangalore, bangalore tirupati package trip, tirupati trip from bangalore, tirupati darshan package from bangalore srs, tirupati package from bangalore sleeper bus"
        />
      </Helmet>

      <Header />

      {/* Main H1 for SEO */}
      <h1 style={{ display: "none" }}>tirupati package from bangalore</h1>

      <TirupatiPakage />
      <Footer />
      <ContactFloatingButton />
    </div>
  );
};

export default TirupatiPackage;
