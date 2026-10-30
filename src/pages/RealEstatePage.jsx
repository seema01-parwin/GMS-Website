import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars -- motion is used via <motion.div> JSX member expressions
import { motion } from "motion/react";
import {
  TrendingUp,
  Home,
  MapPin,
  Handshake,
  BarChart3,
  ShieldCheck,
  Search,
  Camera,
  Scale,
  FileCheck2,
  Building2,
  Factory,
  Trees,
  ArrowRight,
  Compass,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PlatformFeatures from "../components/PlatformFeatures";
import CTA from "../sections/CTA";
import { fadeUp, zoomIn, hoverLift } from "../utils/animations";
import realEstateImg from "../assets/Real-Estate.jpg";
import propertyOne from "../assets/Modern Apartment.jpg";
import propertyTwo from "../assets/City Centre Retail Space.jpg";
import propertyThree from "../assets/Rental Investment Unit.jpg";
import propertyFour from "../assets/Residential Plot.jpg";
import propertyFive from "../assets/Real-Estate1.jpg";
import masterImg from "../assets/services/master-planning.jpg";
import interiorImg from "../assets/services/interior-design.jpg";
import infraImg from "../assets/services/infrastructure.jpg";
import "./RealEstatePage.css";

const LOCATIONS = [
  "Colombo",
  "Nugegoda",
  "Dehiwala",
  "Mount Lavinia",
  "Malabe",
  "Battaramulla",
  "Kandy",
  "Gampaha",
];

const RESULTS = [
  { num: "250+", label: "Properties Transacted" },
  { num: "LKR 12.4B", label: "Portfolio Value" },
  { num: "40+", label: "Acres Developed" },
  { num: "98%", label: "Client Retention" },
];

const CAPABILITIES = [
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    desc: "Clear, data-backed guidance on where to buy, hold, or exit — grounded in real market data, not guesswork.",
  },
  {
    icon: Home,
    title: "Residential & Commercial Sales",
    desc: "Apartments, houses, offices, and retail units matched to your brief, budget, and long-term plans.",
  },
  {
    icon: MapPin,
    title: "Site & Land Acquisition",
    desc: "We identify, verify, and negotiate land with clean title — and the access, utilities, and zoning you need.",
  },
  {
    icon: Handshake,
    title: "Development Partnerships",
    desc: "We bring the land, the capital, and the delivery capability together in structures built for shared success.",
  },
  {
    icon: BarChart3,
    title: "Valuation & Market Analysis",
    desc: "Comparative valuations and demand forecasting so you price correctly and negotiate with confidence.",
  },
  {
    icon: Scale,
    title: "Legal, Title & Due Diligence",
    desc: "Thorough verification of ownership, encumbrances, and permits before a single rupee changes hands.",
  },
];

const PROPERTIES = [
  {
    image: propertyOne,
    tag: "Residential",
    title: "Modern Apartment",
    location: "Colombo 07",
    meta: "3 Bedrooms · 1,850 sq ft",
  },
  {
    image: propertyTwo,
    tag: "Commercial",
    title: "City Centre Retail Space",
    location: "Nugegoda",
    meta: "2,400 sq ft · Grade A",
  },
  {
    image: propertyThree,
    tag: "Investment",
    title: "Rental Investment Unit",
    location: "Dehiwala",
    meta: "LKR 42M · 6% Yield",
  },
  {
    image: propertyFour,
    tag: "Land",
    title: "Residential Plot",
    location: "Malabe",
    meta: "5 Perches · Clear Title",
  },
  {
    image: propertyFive,
    tag: "Development",
    title: "Mixed-Use Development Site",
    location: "Nugegoda",
    meta: "Zoned Land · Development Ready",
    wide: true,
  },
];

const CONNECTED = [
  {
    image: masterImg,
    title: "Land & Master Planning",
    desc: "Zoning, feasibility, and site strategy for the land you are about to buy.",
    link: "/master-planning",
  },
  {
    image: interiorImg,
    title: "Interiors & Fit-Out",
    desc: "Turnkey finishes and handover-ready interiors for every property we deliver.",
    link: "/interior-design",
  },
  {
    image: infraImg,
    title: "Roads & Utilities",
    desc: "Servicing, drainage, and access delivered by our own infrastructure team.",
    link: "/infrastructure",
  },
];

const PROCESS = [
  {
    icon: Search,
    num: "01",
    title: "Brief & Shortlist",
    desc: "We map your budget, purpose, and timeline, then shortlist properties that genuinely fit.",
  },
  {
    icon: Camera,
    num: "02",
    title: "Site Visit & Valuation",
    desc: "Physical inspections, comparable sales, and an honest valuation of what you are buying.",
  },
  {
    icon: BarChart3,
    num: "03",
    title: "Market Analysis",
    desc: "Demand, growth corridors, and pricing trends analysed so your decision is evidence-based.",
  },
  {
    icon: ShieldCheck,
    num: "04",
    title: "Due Diligence",
    desc: "Title search, encumbrance checks, permits, and structural reviews before you commit.",
  },
  {
    icon: Handshake,
    num: "05",
    title: "Negotiation & Offer",
    desc: "We negotiate the terms, the payment schedule, and the conditions on your behalf.",
  },
  {
    icon: FileCheck2,
    num: "06",
    title: "Transfer & Handover",
    desc: "Documentation, transfer, registration, and a full handover — with post-deal support.",
  },
];

const PROPERTY_TYPES = [
  { icon: Home, name: "Apartments" },
  { icon: Compass, name: "Villas & Houses" },
  { icon: Building2, name: "Commercial Shops" },
  { icon: Building2, name: "Office Space" },
  { icon: Factory, name: "Industrial Land" },
  { icon: Trees, name: "Agricultural Plots" },
];

const RealEstatePage = () => (
  <div>
    <Navbar />

    {/* ============ HERO ============ */}
    <section className="re-hero">
      <div className="re-hero-inner">
        <motion.div className="re-hero-content" {...fadeUp(0.1)}>
          <span className="re-eyebrow">
            <span className="re-eyebrow-dot" />
            Real Estate
          </span>
          <h1 className="re-hero-title">
            Property Done
            <br />
            <span className="re-hero-accent">With Clarity</span>
          </h1>
          <p className="re-hero-sub">
            Investment advisory, sales, land acquisition, and development
            partnerships — grounded in verified data, honest valuation, and a
            team that has delivered across Sri Lanka.
          </p>
          <div className="re-hero-actions">
            <Link to="/contact" className="hero-btn primary">
              Talk to an Advisor <ArrowRight size={16} />
            </Link>
            <a href="#properties" className="re-hero-text-link">
              Featured Listings <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>

        <motion.div className="re-hero-visual" {...fadeUp(0.2)}>
          <div className="re-hero-media">
            <img
              src={realEstateImg}
              alt="Contemporary property development in Sri Lanka"
              loading="eager"
            />
            <span className="re-hero-location">
              <MapPin size={14} strokeWidth={2} />
              Colombo · Nugegoda
            </span>
          </div>
          <motion.div className="re-hero-card" {...zoomIn(0.35)}>
            <span className="re-hero-card-label">Portfolio Value</span>
            <strong className="re-hero-card-value">LKR 12.4B</strong>
            <span className="re-hero-card-note">Transacted &amp; managed</span>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* ============ LOCATION MARQUEE ============ */}
    <div className="re-marquee" aria-hidden="true">
      <div className="re-marquee-track">
        {[...LOCATIONS, ...LOCATIONS].map((loc, i) => (
          <span key={`${loc}-${i}`} className="re-marquee-item">
            {loc}
            <span className="re-marquee-dot" />
          </span>
        ))}
      </div>
    </div>

    {/* ============ RESULTS BAR ============ */}
    <section className="re-results">
      <div className="re-results-inner">
        {RESULTS.map((r, i) => (
          <motion.div
            key={r.label}
            className="re-result"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ amount: 0.5 }}
          >
            <strong className="re-result-num">{r.num}</strong>
            <span className="re-result-label">{r.label}</span>
          </motion.div>
        ))}
      </div>
    </section>

    {/* ============ CAPABILITIES ============ */}
    <section className="re-capabilities" id="capabilities">
      <div className="re-cap-inner">
        <motion.div className="re-cap-header" {...fadeUp(0.1)}>
          <span className="re-eyebrow">
            <span className="re-eyebrow-dot" />
            What We Do
          </span>
          <h2 className="re-cap-title">
            Complete <span className="re-hero-accent">Property Services</span>
          </h2>
          <p className="re-cap-sub">
            From the first search to the final transfer — every step handled by
            one accountable team that has the land, the numbers, and the legal
            detail covered.
          </p>
        </motion.div>

        <div className="re-cap-grid">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.title}
              className="re-cap-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ amount: 0.3 }}
            >
              <span className="re-cap-icon">
                <cap.icon size={22} strokeWidth={1.8} />
              </span>
              <h4 className="re-cap-card-title">{cap.title}</h4>
              <p className="re-cap-card-desc">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ============ FEATURED PROPERTIES ============ */}
    <section className="re-properties" id="properties">
      <div className="re-properties-inner">
        <motion.div className="re-properties-header" {...fadeUp(0.1)}>
          <span className="re-eyebrow">
            <span className="re-eyebrow-dot" />
            Featured Listings
          </span>
          <h2 className="re-properties-title">
            Properties We <span className="re-hero-accent">Represent</span>
          </h2>
          <p className="re-properties-sub">
            A selection of current residential, commercial, and land offerings
            from our active portfolio.
          </p>
        </motion.div>

        <div className="re-properties-grid">
          {PROPERTIES.map((prop, i) => (
            <motion.article
              key={prop.title}
              className={`re-property${prop.wide ? " re-property--wide" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ amount: 0.25 }}
              {...hoverLift}
            >
              <div className="re-property-media">
                <img
                  src={prop.image}
                  alt={prop.title}
                  loading="lazy"
                />
                <span className="re-property-tag">{prop.tag}</span>
              </div>
              <div className="re-property-body">
                <h4 className="re-property-title">{prop.title}</h4>
                <span className="re-property-meta">{prop.meta}</span>
                <span className="re-property-location">
                  <MapPin size={13} strokeWidth={2} />
                  {prop.location}
                </span>
                <span className="re-property-link">
                  Enquire
                  <ArrowRight size={14} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    {/* ============ CONNECTED EXPERTISE ============ */}
    <section className="re-connected">
      <div className="re-connected-inner">
        <motion.div className="re-connected-header" {...fadeUp(0.1)}>
          <span className="re-eyebrow">
            <span className="re-eyebrow-dot" />
            One Partner
          </span>
          <h2 className="re-connected-title">
            Beyond the <span className="re-hero-accent">Transaction</span>
          </h2>
          <p className="re-connected-sub">
            Buy, build, and furnish with one team — because the value of a
            property is decided long before the keys change hands.
          </p>
        </motion.div>

        <div className="re-connected-grid">
          {CONNECTED.map((item, i) => (
            <motion.div
              key={item.title}
              className="re-connected-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ amount: 0.3 }}
            >
              <Link to={item.link} className="re-connected-link">
                <div className="re-connected-media">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <div className="re-connected-body">
                  <h4 className="re-connected-card-title">{item.title}</h4>
                  <p className="re-connected-card-desc">{item.desc}</p>
                  <span className="re-connected-arrow">
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ============ PROCESS ============ */}
    <section className="re-process" id="process">
      <div className="re-process-inner">
        <motion.div className="re-process-header" {...fadeUp(0.1)}>
          <span className="re-eyebrow">
            <span className="re-eyebrow-dot" />
            Our Process
          </span>
          <h2 className="re-process-title">
            How We <span className="re-hero-accent">Close</span>
          </h2>
        </motion.div>

        <div className="re-process-grid">
          {PROCESS.map((step, i) => (
            <motion.div
              key={step.num}
              className="re-process-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ amount: 0.3 }}
            >
              <span className="re-process-num">{step.num}</span>
              <span className="re-process-icon">
                <step.icon size={20} strokeWidth={1.8} />
              </span>
              <h4 className="re-process-card-title">{step.title}</h4>
              <p className="re-process-card-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ============ PLATFORM ============ */}
    <PlatformFeatures />

    {/* ============ PROPERTY TYPES ============ */}
    <section className="re-types">
      <div className="re-types-inner">
        <motion.div className="re-types-header" {...fadeUp(0.1)}>
          <span className="re-eyebrow">
            <span className="re-eyebrow-dot" />
            Property Types
          </span>
          <h2 className="re-types-title">
            What We <span className="re-hero-accent">Handle</span>
          </h2>
        </motion.div>

        <div className="re-types-grid">
          {PROPERTY_TYPES.map((type, i) => (
            <motion.div
              key={type.name}
              className="re-type-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              viewport={{ amount: 0.5 }}
            >
              <span className="re-type-icon">
                <type.icon size={18} strokeWidth={1.8} />
              </span>
              <span className="re-type-name">{type.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CTA />
    <Footer />
  </div>
);

export default RealEstatePage;
