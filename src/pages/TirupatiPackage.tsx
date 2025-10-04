import ContactFloatingButton from "@/components/ContactFloatingButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TirupatiPakage from "@/components/tirupati-packages/TirupatiPackage";

const TirupatiPackage = () => {
  return (

    <div style={{ minHeight: "100vh" }}>
        <Header />
        <TirupatiPakage />
        <Footer />
        <ContactFloatingButton />
        </div>
  )
}

export default TirupatiPackage;