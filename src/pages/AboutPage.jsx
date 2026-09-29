import React from "react";
// eslint-disable-next-line no-unused-vars -- motion is used via <motion.div> JSX member expressions
import { motion } from "motion/react";
import {
  Target,
  Eye,
  Lightbulb,
  ShieldCheck,
  Handshake,
  TrendingUp,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";
// import d1 from "../assets/d1.jpg";
// import d2 from "../assets/d2.jpg";
// import d3 from "../assets/d3.jpg";
// import d4 from "../assets/d4.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../sections/CTA";
import infraImg from "../assets/services/infrastructure.jpg";
import swImg from "../assets/services/software-development.jpg";
import interiorImg from "../assets/services/interior-design.jpg";
import masterImg from "../assets/services/master-planning.jpg";
import realImg from "../assets/services/real-estate.jpg";
import marketingImg from "../assets/services/marketing.jpg";
import dashboardImg from "../assets/services/project-dashboard.jpg";
import clientImg from "../assets/services/client-portal.jpg";
import analyticsImg from "../assets/services/analytics-reporting.jpg";
import docImg from "../assets/services/document-management.jpg";
import securityImg from "../assets/services/security-compliance.jpg";
import supportImg from "../assets/services/dedicated-support.jpg";
import "./AboutPage.css";

const GALLERY_COL1 = [
  { label: "Infrastructure", src: infraImg },
  { label: "Software", src: swImg },
  { label: "Interior Design", src: interiorImg },
  { label: "Master Planning", src: masterImg },
  { label: "Real Estate", src: realImg },
  { label: "Marketing", src: marketingImg },
];

const GALLERY_COL2 = [
  { label: "Dashboard", src: dashboardImg },
  { label: "Client Portal", src: clientImg },
  { label: "Analytics", src: analyticsImg },
  { label: "Documentation", src: docImg },
  { label: "Security", src: securityImg },
  { label: "Support", src: supportImg },
];

const LEADERSHIP = [
  {
    name: "Sharon Darshan",
    role: "Managing Director",
    desc: "Driving GMS growth across infrastructure, design, and technology since its founding.",
  },
  {
    name: "Hasitha Mahesh",
    role: "Director",
    desc: "Overseeing strategic partnerships and client relations across all GMS divisions.",
  },
  {
    name: "Himasha Perera",
    role: "Head of HR & Finance",
    desc: "Building the team and financial foundation behind every successful GMS project.",
  },
  {
    name: "Operations Lead",
    role: "Head of Operations",
    desc: "Ensuring seamless execution across projects, teams, and client deliverables.",
  },
];

const BRANDS = [
  {
    name: "GMS Media",
    tagline: "Marketing & Branding",
    desc: "A full-service digital marketing arm — handling brand strategy, social media, creative production, and performance marketing for clients across industries.",
    icon: Lightbulb,
  },
  {
    name: "GMS Tech",
    tagline: "Software & Platforms",
    desc: "Our software development subsidiary — building proprietary platforms, enterprise tools, and custom solutions that power client operations at scale.",
    icon: TrendingUp,
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { amount: 0.3 },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, delay },
  viewport: { amount: 0.3 },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, delay },
  viewport: { amount: 0.3 },
});

const AboutPage = () => (
  <div>
    <Navbar />

    {/* ============ HERO ============ 
    <section className="about-hero">
      <div className="about-hero-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="about-hero-title">About Us</h1>
          <div className="about-breadcrumb">
            <span className="about-breadcrumb-link">Home</span>
            <ChevronRight size={14} strokeWidth={2} />
            <span className="about-breadcrumb-current">About Us</span>
          </div>
        </motion.div>
      </div>
    </section> */}

    {/* ============ A DECADE OF GMS ============ */}
    <section className="about-decade">
      <div className="about-decade-inner">
        <motion.div className="about-decade-content" {...fadeLeft(0.1)}>
          <span className="about-eyebrow">
            <span className="about-eyebrow-dot" />
            Our Story
          </span>
          <motion.h2
            className="about-decade-title"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            About
            <br />
            <span className="about-hero-accent">Grow More Solutions</span>
          </motion.h2>
          <motion.p
            className="about-decade-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Grow More Solutions (Pvt) Ltd is a leading and innovative company
            based in Nugegoda, Sri Lanka, delivering services across
            infrastructure development, master planning, interior design, real
            estate, graphic design, and information technology solutions.
          </motion.p>
          <motion.p
            className="about-decade-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            Our Information Technology division specializes in software and
            website development, mobile applications, business process
            outsourcing (BPO), and IT consulting — building secure and scalable
            digital solutions using modern technologies and industry best
            practices to support business growth and digital transformation.
          </motion.p>
          <motion.div
            className="about-decade-highlights"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="about-decade-highlight">
              <span className="about-decade-highlight-num">120+</span>
              <span className="about-decade-highlight-label">Projects Delivered</span>
            </div>
            <div className="about-decade-highlight">
              <span className="about-decade-highlight-num">25+</span>
              <span className="about-decade-highlight-label">Team Members</span>
            </div>
            <div className="about-decade-highlight">
              <span className="about-decade-highlight-num">12+</span>
              <span className="about-decade-highlight-label">Cities Covered</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="about-decade-gallery"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="about-gallery-track about-gallery-col1">
            <div className="about-gallery-scroll">
              {[...GALLERY_COL1, ...GALLERY_COL1].map((img, i) => (
                <div key={`c1-${i}`} className="about-gallery-img">
                  <img src={img.src} alt={img.label} loading="lazy" />
                  <span>{img.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-gallery-track about-gallery-col2">
            <div className="about-gallery-scroll about-gallery-scroll-reverse">
              {[...GALLERY_COL2, ...GALLERY_COL2].map((img, i) => (
                <div key={`c2-${i}`} className="about-gallery-img">
                  <img src={img.src} alt={img.label} loading="lazy" />
                  <span>{img.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* ============ VISION & MISSION ============ */}
    <section className="about-mv">
      <div className="about-mv-inner">
        <motion.div className="about-mv-card" {...fadeLeft(0.1)}>
          <span className="about-mv-icon-wrap">
            <Target size={28} strokeWidth={1.8} />
          </span>
          <h3 className="about-mv-title">Our Vision</h3>
          <p className="about-mv-desc">
            To become a trusted and innovative software development company by
            delivering high-quality digital solutions that empower businesses,
            exceed client expectations, and contribute to technological
            advancement — while creating a collaborative and rewarding workplace
            for employees.
          </p>
        </motion.div>
        <motion.div className="about-mv-card" {...fadeRight(0.15)}>
          <span className="about-mv-icon-wrap">
            <Eye size={28} strokeWidth={1.8} />
          </span>
          <h3 className="about-mv-title">Our Mission</h3>
          <p className="about-mv-desc">
            To provide innovative, reliable, and cost-effective software solutions
            that improve business operations, enhance productivity, and support
            digital transformation through modern technologies and industry best
            practices — while fostering a collaborative environment that
            encourages continuous learning, creativity, teamwork, and
            professional growth.
          </p>
        </motion.div>
      </div>
    </section>

    {/* ============ LEADERSHIP ============ */}
    <section className="about-leadership">
      <div className="about-leadership-inner">
        <motion.div className="about-leadership-header" {...fadeUp(0.1)}>
          <span className="about-eyebrow">
            <span className="about-eyebrow-dot" />
            Leadership
          </span>
          <h2 className="about-leadership-title">Meet the People Behind GMS</h2>
          <p className="about-leadership-sub">
            The team that turns complex challenges into scalable outcomes.
          </p>
        </motion.div>

        <div className="about-leadership-grid">
          {LEADERSHIP.map((person, i) => (
            <motion.div
              key={person.name}
              className="about-leadership-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              viewport={{ amount: 0.3 }}
            >
              <div className="about-leadership-avatar">
                <span className="about-leadership-initial">
                  {person.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <h4 className="about-leadership-name">{person.name}</h4>
              <span className="about-leadership-role">{person.role}</span>
              <p className="about-leadership-desc">{person.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ============ OUR BRANDS ============ */}
    <section className="about-brands">
      <div className="about-brands-inner">
        <motion.div className="about-brands-header" {...fadeUp(0.1)}>
          <span className="about-eyebrow">
            <span className="about-eyebrow-dot" />
            Our Brands
          </span>
          <h2 className="about-brands-title">Built to Scale</h2>
          <p className="about-brands-sub">
            Specialized divisions that extend our capabilities into new domains.
          </p>
        </motion.div>

        <div className="about-brands-grid">
          {BRANDS.map((brand, i) => (
            <motion.div
              key={brand.name}
              className="about-brand-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              viewport={{ amount: 0.3 }}
            >
              <span className="about-brand-icon">
                <brand.icon size={24} strokeWidth={1.8} />
              </span>
              <span className="about-brand-tagline">{brand.tagline}</span>
              <h3 className="about-brand-name">{brand.name}</h3>
              <p className="about-brand-desc">{brand.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CTA />
    <Footer />
  </div>
);

export default AboutPage;
