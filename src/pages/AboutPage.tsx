import About from "@/components/about/About";
import ContactFloatingButton from "@/components/ContactFloatingButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Contact = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
        <Header />
    <About />
    <Footer />
    <ContactFloatingButton />
   </div>
  );
};

export default Contact;