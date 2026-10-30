import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars -- motion is used via <motion.div> JSX member expressions
import { motion } from "motion/react";
import {
  Headset,
  LifeBuoy,
  Database,
  Calculator,
  FolderOpen,
  ShieldCheck,
  Globe,
  Users,
  Clock,
  Gauge,
  BarChart3,
  Workflow,
  Landmark,
  CreditCard,
  ShoppingCart,
  HeartPulse,
  Briefcase,
  Search,
  Settings2,
  Repeat,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PlatformFeatures from "../components/PlatformFeatures";
import CTA from "../sections/CTA";
import { fadeUp, zoomIn, fadeLeft } from "../utils/animations";
import supportImg from "../assets/services/dedicated-support.jpg";
import globeImg from "../assets/globe-network1.png";
import docsImg from "../assets/services/document-management.jpg";
import securityImg from "../assets/services/security-compliance.jpg";
import analyticsImg from "../assets/services/analytics-reporting.jpg";
import "./BpoPage.css";

const SERVICE_LINES = [
  "Customer Support",
  "IT Help Desk",
  "Back Office",
  "Data Processing",
  "Finance Ops",
  "Document Handling",
  "Voice & Telephony",
  "Compliance Support",
];

const RESULTS = [
  { num: "24/7", label: "Coverage" },
  { num: "500+", label: "Dedicated Agents" },
  { num: "40+", label: "Clients Served" },
  { num: "98%", label: "SLA Adherence" },
];

const CAPABILITIES = [
  {
    icon: Headset,
    title: "Customer Experience Support",
    desc: "Inbound and outbound support across voice, email, and chat — trained on your product, not a generic script.",
  },
  {
    icon: LifeBuoy,
    title: "IT Help Desk & Technical Support",
    desc: "Tier 1 and Tier 2 support with clear escalation paths, SLA clocks, and ticketing discipline.",
  },
  {
    icon: Database,
    title: "Back-Office & Data Processing",
    desc: "High-volume data entry, cleansing, verification, and records handling with proven accuracy checks.",
  },
  {
    icon: Calculator,
    title: "Finance & Accounting Operations",
    desc: "Invoice processing, reconciliations, collections, and reporting handled against control frameworks.",
  },
  {
    icon: FolderOpen,
    title: "Document & Records Management",
    desc: "Digitisation, indexing, retrieval, and secure storage for everything your operation must keep.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Regulatory Support",
    desc: "KYC verification, audit support, and regulated processes that keep every file defensible.",
  },
];

const DELIVERY_POINTS = [
  "Onshore teams in Nugegoda for client-facing work and relationship ownership",
  "Extended-hour and follow-the-sun coverage for critical queues",
  "Trained, certified agents with domain onboarding in weeks, not months",
  "Security, confidentiality, and NDAs handled as standard",
];

const TILES = [
  {
    image: docsImg,
    title: "Back-Office Operations",
    desc: "Digitised document flows, indexing, and data processing that keep your operation audit-ready.",
  },
  {
    image: securityImg,
    title: "Security & Compliance",
    desc: "Access control, encryption, and audit trails across every account we operate.",
  },
  {
    image: analyticsImg,
    title: "Performance Reporting",
    desc: "SLA dashboards, quality scores, and monthly reviews you can hand straight to the board.",
  },
];

const PROCESS = [
  {
    icon: Search,
    num: "01",
    title: "Discover & Scope",
    desc: "We map the process, the volume, the risk, and the target cost before quoting a single seat.",
  },
  {
    icon: Settings2,
    num: "02",
    title: "Design the Service",
    desc: "SLA, staffing model, tooling, training plan, and governance agreed in writing and signed off.",
  },
  {
    icon: Users,
    num: "03",
    title: "Build & Transition",
    desc: "Hiring, training, knowledge transfer, and a phased cutover that never interrupts your business.",
  },
  {
    icon: Workflow,
    num: "04",
    title: "Operate & Monitor",
    desc: "Daily service delivery with live dashboards, quality checks, and escalation on the first issue.",
  },
  {
    icon: Repeat,
    num: "05",
    title: "Optimise & Scale",
    desc: "Continuous improvement, automation of repetitive steps, and scaling capacity without renegotiating.",
  },
  {
    icon: CheckCircle2,
    num: "06",
    title: "Report & Retain",
    desc: "Honest monthly reporting and a long-term partnership model built to earn the renewal.",
  },
];

const INDUSTRIES = [
  { icon: Landmark, name: "Banking & Finance" },
  { icon: CreditCard, name: "Insurance" },
  { icon: ShoppingCart, name: "E-commerce" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: Briefcase, name: "Professional Services" },
  { icon: Globe, name: "Telecom & Utilities" },
];

const BpoPage = () => (
  <div>
    <Navbar />

    {/* ============ HERO ============ */}
    <section className="bp-hero">
      <div className="bp-hero-inner">
        <motion.div className="bp-hero-content" {...fadeUp(0.1)}>
          <span className="bp-eyebrow">
            <span className="bp-eyebrow-dot" />
            Business Process Outsourcing
          </span>
          <h1 className="bp-hero-title">
            Operations That
            <br />
            <span className="bp-hero-accent">Scale Without Overhead</span>
          </h1>
          <p className="bp-hero-sub">
            Support, back office, and data operations delivered by trained Sri
            Lankan teams — with the governance, security, and reporting a
            serious business requires.
          </p>
          <div className="bp-hero-actions">
            <Link to="/contact" className="hero-btn primary">
              Request a Proposal <ArrowRight size={16} />
            </Link>
            <a href="#capabilities" className="bp-hero-text-link">
              What We Handle <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>

        <motion.div className="bp-hero-visual" {...fadeUp(0.2)}>
          <div className="bp-hero-media">
            <img
              src={supportImg}
              alt="Dedicated customer support operations team"
              loading="eager"
            />
            <span className="bp-hero-chip">
              <span className="bp-hero-chip-dot" />
              Support Desk Online
            </span>
          </div>
          <motion.div className="bp-hero-card" {...zoomIn(0.35)}>
            <span className="bp-hero-card-label">SLA Adherence</span>
            <strong className="bp-hero-card-value">98%</strong>
            <span className="bp-hero-card-note">Across live accounts</span>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* ============ SERVICE LINE MARQUEE ============ */}
    <div className="bp-marquee" aria-hidden="true">
      <div className="bp-marquee-track">
        {[...SERVICE_LINES, ...SERVICE_LINES].map((line, i) => (
          <span key={`${line}-${i}`} className="bp-marquee-item">
            {line}
            <span className="bp-marquee-dot" />
          </span>
        ))}
      </div>
    </div>

    {/* ============ RESULTS BAR ============ */}
    <section className="bp-results">
      <div className="bp-results-inner">
        {RESULTS.map((r, i) => (
          <motion.div
            key={r.label}
            className="bp-result"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ amount: 0.5 }}
          >
            <strong className="bp-result-num">{r.num}</strong>
            <span className="bp-result-label">{r.label}</span>
          </motion.div>
        ))}
      </div>
    </section>

    {/* ============ CAPABILITIES ============ */}
    <section className="bp-capabilities" id="capabilities">
      <div className="bp-cap-inner">
        <motion.div className="bp-cap-header" {...fadeUp(0.1)}>
          <span className="bp-eyebrow">
            <span className="bp-eyebrow-dot" />
            What We Handle
          </span>
          <h2 className="bp-cap-title">
            Services We <span className="bp-hero-accent">Run For You</span>
          </h2>
          <p className="bp-cap-sub">
            Every process below is delivered by a dedicated team that knows your
            operation, your customers, and your compliance obligations.
          </p>
        </motion.div>

        <div className="bp-cap-grid">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.title}
              className="bp-cap-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ amount: 0.3 }}
            >
              <span className="bp-cap-icon">
                <cap.icon size={22} strokeWidth={1.8} />
              </span>
              <h4 className="bp-cap-card-title">{cap.title}</h4>
              <p className="bp-cap-card-desc">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ============ DELIVERY MODEL ============ */}
    <section className="bp-delivery">
      <div className="bp-delivery-inner">
        <motion.div className="bp-delivery-media" {...fadeLeft(0.1)}>
          <div className="bp-delivery-image">
            <img
              src={globeImg}
              alt="Global delivery footprint for outsourced operations"
              loading="lazy"
            />
          </div>
          <motion.div
            className="bp-delivery-badge"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            viewport={{ amount: 0.4 }}
          >
            <Clock size={18} strokeWidth={1.8} />
            <span>24/7 Follow-the-Sun</span>
          </motion.div>
        </motion.div>

        <motion.div className="bp-delivery-content" {...fadeUp(0.15)}>
          <span className="bp-eyebrow">
            <span className="bp-eyebrow-dot" />
            Our Delivery Model
          </span>
          <h2 className="bp-delivery-title">
            Built Around <span className="bp-hero-accent">Your Team</span>
          </h2>
          <p className="bp-delivery-text">
            You get a dedicated extension of your own team — not a shared pool.
            Same standards, same reporting, same accountability.
          </p>
          <ul className="bp-delivery-list">
            {DELIVERY_POINTS.map((point) => (
              <li key={point}>
                <span className="bp-delivery-bullet" />
                {point}
              </li>
            ))}
          </ul>
          <Link to="/contact" className="bp-delivery-btn">
            Talk to the BPO Team <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>

    {/* ============ TILES ============ */}
    <section className="bp-tiles">
      <div className="bp-tiles-inner">
        <motion.div className="bp-tiles-header" {...fadeUp(0.1)}>
          <span className="bp-eyebrow">
            <span className="bp-eyebrow-dot" />
            Backed By
          </span>
          <h2 className="bp-tiles-title">
            The <span className="bp-hero-accent">Foundation</span>
          </h2>
        </motion.div>

        <div className="bp-tiles-grid">
          {TILES.map((tile, i) => (
            <motion.div
              key={tile.title}
              className="bp-tile"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ amount: 0.3 }}
            >
              <div className="bp-tile-media">
                <img src={tile.image} alt={tile.title} loading="lazy" />
              </div>
              <div className="bp-tile-body">
                <h4 className="bp-tile-title">{tile.title}</h4>
                <p className="bp-tile-desc">{tile.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ============ PROCESS ============ */}
    <section className="bp-process" id="process">
      <div className="bp-process-inner">
        <motion.div className="bp-process-header" {...fadeUp(0.1)}>
          <span className="bp-eyebrow">
            <span className="bp-eyebrow-dot" />
            Our Process
          </span>
          <h2 className="bp-process-title">
            How We <span className="bp-hero-accent">Deliver</span>
          </h2>
        </motion.div>

        <div className="bp-process-grid">
          {PROCESS.map((step, i) => (
            <motion.div
              key={step.num}
              className="bp-process-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ amount: 0.3 }}
            >
              <span className="bp-process-num">{step.num}</span>
              <span className="bp-process-icon">
                <step.icon size={20} strokeWidth={1.8} />
              </span>
              <h4 className="bp-process-card-title">{step.title}</h4>
              <p className="bp-process-card-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ============ PLATFORM ============ */}
    <PlatformFeatures />

    {/* ============ INDUSTRIES ============ */}
    <section className="bp-industries">
      <div className="bp-industries-inner">
        <motion.div className="bp-industries-header" {...fadeUp(0.1)}>
          <span className="bp-eyebrow">
            <span className="bp-eyebrow-dot" />
            Industries
          </span>
          <h2 className="bp-industries-title">
            Sectors We <span className="bp-hero-accent">Support</span>
          </h2>
          <p className="bp-industries-sub">
            Regulated sectors where accuracy, auditability, and discretion are
            not optional.
          </p>
        </motion.div>

        <div className="bp-industries-grid">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.name}
              className="bp-industry-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              viewport={{ amount: 0.5 }}
            >
              <span className="bp-industry-icon">
                <ind.icon size={18} strokeWidth={1.8} />
              </span>
              <span className="bp-industry-name">{ind.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ============ WHY GMS ============ */}
    <section className="bp-why">
      <div className="bp-why-inner">
        <motion.div className="bp-why-header" {...fadeUp(0.1)}>
          <span className="bp-eyebrow">
            <span className="bp-eyebrow-dot" />
            Why GMS
          </span>
          <h2 className="bp-why-title">
            More Than a <span className="bp-hero-accent">Vendor</span>
          </h2>
        </motion.div>

        <div className="bp-why-grid">
          {[
            {
              icon: Gauge,
              title: "Cost Without Compromise",
              desc: "Predictable per-seat pricing with quality that holds up under volume.",
            },
            {
              icon: Users,
              title: "People Who Stay",
              desc: "Retention built on fair treatment, career paths, and real investment in agents.",
            },
            {
              icon: ShieldCheck,
              title: "Security by Default",
              desc: "NDAs, access control, encryption, and audit trails from day one.",
            },
            {
              icon: BarChart3,
              title: "Reporting You Can Trust",
              desc: "Live SLA, quality, and cost reporting — no surprises at month end.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className="bp-why-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ amount: 0.3 }}
            >
              <span className="bp-why-icon">
                <item.icon size={22} strokeWidth={1.8} />
              </span>
              <h4 className="bp-why-card-title">{item.title}</h4>
              <p className="bp-why-card-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CTA />
    <Footer />
  </div>
);

export default BpoPage;
