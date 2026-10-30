import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars -- motion is used via <motion.div> JSX member expressions
import { motion } from "motion/react";
import {
  Target,
  Eye,
  Lightbulb,
  ShieldCheck,
  Handshake,
  TrendingUp,
  Users,
  GraduationCap,
  ArrowUpRight,
  ChevronRight,
  Hammer,
  Layers,
  Code2,
  MapPin,
  Building2,
  Paintbrush,
  Headset,
} from "lucide-react";
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
import partImg from "../assets/partner.png";
import i1Img from "../assets/divisions/construction-infrastructure.jpg";
import i2Img from "../assets/divisions/interior-design-planning.jpg";
import i3Img from "../assets/divisions/software-platforms.jpg";
import i4Img from "../assets/divisions/it-consulting-bpo.jpg";
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
    name: "Krishanthan Keerthi",
    role: "Director, Head of Retention · BPO",
    desc: "Leading BPO retention strategy and long-term client relationships across GMS accounts.",
  },
  {
    name: "Sajeenthan Thurairaj",
    role: "Director, HR Manager, IT Administrative",
    desc: "Overseeing HR, people operations, and IT administration for the group.",
  },
  {
    name: "Satheeshan Mahendran",
    role: "Director, Head of Accounts",
    desc: "Managing accounts, finance, and reporting across GMS operations.",
  },
  {
    name: "Sudarshan Govindaraj",
    role: "Director, Head of Sales · BPO",
    desc: "Driving BPO sales, partnerships, and new business growth.",
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

const VALUES = [
  {
    icon: ShieldCheck,
    num: "01",
    title: "Integrity",
    desc: "We stay honest, transparent, and accountable in every project, partnership, and commitment we make.",
  },
  {
    icon: Lightbulb,
    num: "02",
    title: "Innovation",
    desc: "We combine modern technologies with creative thinking to solve real problems in new ways.",
  },
  {
    icon: Users,
    num: "03",
    title: "Teamwork",
    desc: "A collaborative culture where people grow together, share knowledge, and win together.",
  },
  {
    icon: Target,
    num: "04",
    title: "Client-First",
    desc: "We put our clients' goals first and build solutions that exceed expectations on every delivery.",
  },
  {
    icon: GraduationCap,
    num: "05",
    title: "Continuous Learning",
    desc: "We invest in training, skills, and professional growth at every level of the organisation.",
  },
];

const DIFFERENTIATORS = [
  {
    icon: Hammer,
    title: "End-to-End Delivery",
    desc: "Strategy, design, construction, and technology handled in-house — no hand-offs between vendors.",
  },
  {
    icon: Layers,
    title: "One Roof, Many Services",
    desc: "From infrastructure and real estate to software, marketing, and BPO under a single company.",
  },
  {
    icon: Code2,
    title: "In-House Technology",
    desc: "GMS Tech builds the platforms, apps, and internal tools that run our own operations.",
  },
  {
    icon: MapPin,
    title: "Local and Reliable",
    desc: "Based in Nugegoda, serving businesses and developers across Sri Lanka.",
  },
];

const DIVISIONS = [
  {
    icon: Building2,
    title: "Construction & Infrastructure",
    desc: "Roads, buildings, and development works delivered by our own teams.",
    href: "/infrastructure",
    img: i1Img,
  },
  {
    icon: Paintbrush,
    title: "Interior Design & Planning",
    desc: "Concept to handover — spaces planned, designed, and executed.",
    href: "/interior-design",
    img: i2Img,
  },
  {
    icon: Code2,
    title: "Software & Platforms",
    desc: "Web, mobile, and enterprise systems built to scale with your business.",
    href: "/software",
    img: i3Img,
  },
  {
    icon: Headset,
    title: "IT Consulting & BPO",
    desc: "Advisory, support, and outsourced processes that keep you moving.",
    href: "/software",
    img: i4Img,
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

    {/* ============ CORE VALUES ============ */}
    <section className="about-values">
      <div className="about-values-inner">
        <motion.div className="about-values-header" {...fadeUp(0.1)}>
          <span className="about-eyebrow">
            <span className="about-eyebrow-dot" />
            Core Values
          </span>
          <h2 className="about-values-title">
            What we <span className="about-hero-accent">stand for</span>
          </h2>
          <p className="about-values-sub">
            The principles behind every project, partnership, and team member
            at Grow More Solutions.
          </p>
        </motion.div>

        <div className="about-values-grid">
          {VALUES.map((value, i) => (
            <motion.div
              key={value.num}
              className={`about-value-card${
                i === 0 ? " about-value-card--feature" : ""
              }${i === VALUES.length - 1 ? " about-value-card--wide" : ""}`}
              initial={{ opacity: 0, y: 34, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ amount: 0.2 }}
            >
              {i === 0 && (
                <>
                  <span className="about-value-watermark">{value.num}</span>
                  <span className="about-value-blob" />
                </>
              )}

              <span className="about-value-card-top">
                <span className="about-value-icon">
                  <value.icon size={i === 0 ? 30 : 20} strokeWidth={1.7} />
                </span>
                <span className="about-value-num">{value.num}</span>
              </span>

              <h3 className="about-value-name">{value.title}</h3>
              <p className="about-value-desc">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ============ WHY GROW MORE ============ */}
    <section className="about-why">
      <div className="about-why-inner">
        <motion.div className="about-why-media" {...fadeLeft(0.1)}>
          <div className="about-why-frame">
            <img
              src={partImg}
              alt="Grow More Solutions project delivery"
              loading="lazy"
            />
          </div>
          <motion.div
            className="about-why-badge"
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="about-why-badge-num">120+</span>
            <span className="about-why-badge-label">Projects Delivered</span>
          </motion.div>
          <span className="about-why-corner" />
        </motion.div>

        <motion.div className="about-why-content" {...fadeRight(0.15)}>
          <span className="about-eyebrow">
            <span className="about-eyebrow-dot" />
            Why GMS
          </span>
          <h2 className="about-why-title">
            One partner, <br />
            <span className="about-hero-accent">blueprint to delivery</span>
          </h2>
          <p className="about-why-sub">
            Most businesses juggle separate vendors for design, build, and
            software. We bring every discipline under one roof, so your project
            moves as one.
          </p>

          <div className="about-why-list">
            {DIFFERENTIATORS.map((item, i) => (
              <motion.div
                key={item.title}
                className="about-why-item"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
                viewport={{ amount: 0.4 }}
              >
                <span className="about-why-item-icon">
                  <item.icon size={18} strokeWidth={1.8} />
                </span>
                <div className="about-why-item-body">
                  <h4 className="about-why-item-title">{item.title}</h4>
                  <p className="about-why-item-desc">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
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

{/* ============ DIVISIONS AT A GLANCE ============ */}
    <section className="about-divisions">
      <div className="about-divisions-inner">
        <motion.div className="about-divisions-header" {...fadeUp(0.1)}>
          <span className="about-eyebrow">
            <span className="about-eyebrow-dot" />
            Divisions
          </span>
          <h2 className="about-divisions-title">What we do, at a glance</h2>
          <p className="about-divisions-sub">
            Four operating divisions, one company — pick the capability you
            need and we will handle the rest.
          </p>
        </motion.div>

        <div className="about-divisions-grid">
          {DIVISIONS.map((division, i) => (
            <motion.div
              key={division.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              viewport={{ amount: 0.25 }}
            >
              <Link to={division.href} className="about-division-card">
                <img src={division.img} alt={division.title} loading="lazy" />
                <span className="about-division-overlay" />
                <span className="about-division-body">
                  <span className="about-division-icon">
                    <division.icon size={18} strokeWidth={1.8} />
                  </span>
                  <h3 className="about-division-name">{division.title}</h3>
                  <p className="about-division-desc">{division.desc}</p>
                  <span className="about-division-link">
                    Explore
                    <ArrowUpRight size={15} strokeWidth={2} />
                  </span>
                </span>
              </Link>
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
