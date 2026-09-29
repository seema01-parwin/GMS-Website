import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PlatformFeatures from "../components/PlatformFeatures";
import FloatingIcons from "../components/FloatingIcons";
import Hero from "../sections/Hero";
import ServiceBanner from "../sections/ServiceBanner";
import WhoWeAre from "../sections/WhoWeAre";
import Services from "../sections/Services";
import ClientReviews from "../sections/ClientReviews";
import Careers from "../sections/Careers";
import IconMarquee from "../sections/IconMarquee";
import Faq from "../sections/Faq";
import CTA from "../sections/CTA";
import "./HomePage.css";

const HomePage = () => (
  <div>
    <Navbar />
    <Hero />
    <ServiceBanner />
    <WhoWeAre />
    <Services />
    <Careers />
    <PlatformFeatures />
    <ClientReviews />
    <IconMarquee />
    <Faq />
    <CTA />
    <Footer />
  </div>
);

export default HomePage;
