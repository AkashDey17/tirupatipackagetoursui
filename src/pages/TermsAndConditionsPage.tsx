import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TermsAndConditions from "@/components/t&c/TermsAndConditions";

const TermsAndConditionsPage = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
        <Header />
    <TermsAndConditions />
    <Footer />
   </div>
  );
};

export default TermsAndConditionsPage;