import ContactSignup from "@/components/contact/ContactSignUp";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
const Contact = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
        <Header />
    <ContactSignup />
    <Footer />
   </div>
  );
};

export default Contact;