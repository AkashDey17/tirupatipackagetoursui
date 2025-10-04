import ContactFloatingButton from "@/components/ContactFloatingButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TirupatiSrikalahasti from "@/components/tirupati-srikalahasti/TirupatiSrikalahasti"

const Srikalahasti = () => {
  return (

    <div style={{ minHeight: "100vh" }}>
        <Header />
       <TirupatiSrikalahasti />
        <Footer />
        <ContactFloatingButton />
        </div>
  )
}

export default Srikalahasti;