import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { MotionConfig } from "motion/react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import SoftwarePage from "./pages/SoftwarePage";
import InfrastructurePage from "./pages/InfrastructurePage";
import MasterPlanningPage from "./pages/MasterPlanningPage";
import RealEstatePage from "./pages/RealEstatePage";
import MarketingPage from "./pages/MarketingPage";
import BpoPage from "./pages/BpoPage";
import CareerPage from "./pages/CareerPage";
import GalleryPage from "./pages/GalleryPage";
import PortfolioPage from "./pages/PortfolioPage";
import BlogPage from "./pages/BlogPage";
import NewsPage from "./pages/NewsPage";
import InteriorDesignPage from "./pages/InteriorDesignPage";
import GraphicDesignPage from "./pages/GraphicDesignPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import NotFound from "./pages/NotFound";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <MotionConfig reducedMotion="user" transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/software" element={<SoftwarePage />} />
          <Route path="/infrastructure" element={<InfrastructurePage />} />
          <Route path="/master-planning" element={<MasterPlanningPage />} />
          <Route path="/real-estate" element={<RealEstatePage />} />
          <Route path="/marketing" element={<MarketingPage />} />
          <Route path="/bpo" element={<BpoPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/interior-design" element={<InteriorDesignPage />} />
          <Route path="/graphic-design" element={<GraphicDesignPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MotionConfig>
    </Router>
  );
};

export default App;
