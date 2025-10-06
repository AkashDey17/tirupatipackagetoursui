import About from "@/components/about/About";
import ContactFloatingButton from "@/components/ContactFloatingButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Helmet>
        <title>tirupati darshan package from bangalore | balaji package from bangalore</title>
        <meta
          name="description"
          content="Book your Tirupati Darshan Package from Bangalore with TirupatiPackageTours for secure travel, VIP darshan, and a non-violent non-secular experience."
        />
        <meta
          name="keywords"
          content="tirupati darshan package from bangalore, tirupati balaji darshan package from bangalore, balaji package from bangalore, ksrtc tirupati package from bangalore, tirupati trip from bangalore, tirupati darshan package from bangalore srs, tirupati package from bangalore sleeper bus"
        />
      </Helmet>

      <Header />

      {/* Main H1 for SEO */}
      <h1 style={{ display: "none" }}>tirupati darshan package from bangalore</h1>

      <About />
      <Footer />
      <ContactFloatingButton />
    </div>
  );
};

export default AboutPage;
