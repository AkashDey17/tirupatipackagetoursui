import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TirupatiPackage from "./pages/TirupatiPackage";
import TirupatiSrikalahasti from "./pages/Srikalahasti";
import { useEffect, useState } from "react";
import PreLoader from "./components/PreLoader";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/Contact";
import AboutPage from "./pages/AboutPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";

const queryClient = new QueryClient();
const PageWrapper = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800); // adjust speed
    return () => clearTimeout(timer);
  }, [location.pathname]); // runs whenever route changes

  if (loading) {
    return <PreLoader />;
  }

  return children;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
       <ScrollToTop />
         <PageWrapper>
        <Routes>
          <Route path="/" element={<Index />} />
           <Route path="/tirupati-package" element={<TirupatiPackage />} />
           <Route path="/tirupati-srikalahasti" element={<TirupatiSrikalahasti />} />
           <Route path="/contact-us" element={<Contact />} />
           <Route path="/about-us" element={<AboutPage />} />
           <Route path="/privacy-policy" element={<PrivacyPage />} />
           <Route path="/tc" element={<TermsAndConditionsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </PageWrapper>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
