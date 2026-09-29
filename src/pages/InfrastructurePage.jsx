import React from "react";
// eslint-disable-next-line no-unused-vars -- motion is used via <motion.div> JSX member expressions
import { motion } from "motion/react";
import {
  HardHat,
  Route,
  Building2,
  Droplets,
  ShieldCheck,
  BarChart3,
  ArrowRight,
  Compass,
  Ruler,
  Truck,
  ClipboardCheck,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PlatformFeatures from "../components/PlatformFeatures";
import CTA from "../sections/CTA";
import "./InfrastructurePage.css";

const CAPABILITIES = [
  {
    icon: Compass,
    title: "Site Survey & Feasibility",
    desc: "Comprehensive site analysis, geotechnical investigations, and feasibility studies to de-risk your project before ground is broken.",
  },
  {
    icon: Ruler,
    title: "Civil & Structural Engineering",
    desc: "Detailed structural design, earthworks planning, and civil engineering solutions built to withstand Sri Lanka's diverse terrain.",
  },
  {
    icon: Route,
    title: "Road Network Development",
    desc: "Highway expansions, urban road networks, bridges, and intersections designed for durability and traffic flow.",
  },
  {
    icon: Droplets,
    title: "Utility Infrastructure",
    desc: "Water supply systems, drainage networks, sewerage, and electrical distribution — engineered for reliability and scale.",
  },
  {
    icon: Building2,
    title: "Building Construction",
    desc: "Commercial, industrial, and institutional buildings constructed to exacting standards with full project lifecycle management.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Rigorous QA/QC protocols, compliance testing, and third-party inspections at every phase of construction.",
  },
];

const PROCESS = [
  {
    icon: ClipboardCheck,
    num: "01",
    title: "Investigation & Analysis",
    desc: "Geotechnical surveys, environmental impact assessments, and site condition analysis to establish project parameters.",
  },
  {
    icon: Compass,
    num: "02",
    title: "Design & Engineering",
    desc: "Structural calculations, CAD drawings, materials specifications, and value engineering for cost optimisation.",
  },
  {
    icon: HardHat,
    num: "03",
    title: "Procurement & Mobilisation",
    desc: "Material sourcing, equipment deployment, labour coordination, and site preparation ahead of construction.",
  },
  {
    icon: Truck,
    num: "04",
    title: "Construction",
    desc: "Phased execution with daily progress tracking, safety compliance, and quality checkpoints at every milestone.",
  },
  {
    icon: BarChart3,
    num: "05",
    title: "Supervision & Monitoring",
    desc: "On-site resident engineers, real-time progress reporting, and corrective action protocols to keep projects on track.",
  },
  {
    icon: ShieldCheck,
    num: "06",
    title: "Handover & Support",
    desc: "As-built documentation, defect liability management, and ongoing maintenance support post-completion.",
  },
];

const PROJECTS = [
  { name: "Highway Expansion", type: "Roads & Transport" },
  { name: "Water Treatment Plant", type: "Utilities" },
  { name: "Commercial Complex", type: "Buildings" },
  { name: "Bridge Construction", type: "Bridges & Structures" },
  { name: "Urban Drainage System", type: "Drainage & Sewerage" },
  { name: "Industrial Zone Development", type: "Industrial" },
];

const RESULTS = [
  { num: "120+", label: "Projects Completed" },
  { num: "98%", label: "On-Time Delivery" },
  { num: "25+", label: "Years Experience" },
  { num: "100%", label: "Safety Record" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { amount: 0.3 },
});

const InfrastructurePage = () => (
  <div>
    <Navbar />

    {/* ============ HERO ============ */}
    <section className="infra-hero">
      <div className="infra-hero-inner">
        <motion.div className="infra-hero-content" {...fadeUp(0.1)}>
          <span className="infra-eyebrow">
            <span className="infra-eyebrow-dot" />
            Infrastructure
          </span>
          <h1 className="infra-hero-title">
            Engineering the
            <br />
            <span className="infra-hero-accent">Foundation of Progress</span>
          </h1>
          <p className="infra-hero-sub">
            From roadworks and utilities to commercial buildings, we design and
            deliver infrastructure projects engineered for durability, safety,
            and long-term performance across Sri Lanka.
          </p>
          <div className="infra-hero-actions">
            <a href="/contact" className="hero-btn primary">
              Start a Project <ArrowRight size={16} />
            </a>
            <a href="#capabilities" className="infra-hero-text-link">
              Our Services <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>

        <motion.div className="infra-hero-visual" {...fadeUp(0.2)}>
          <div className="infra-hero-blueprint">
            <div className="infra-bp-grid" aria-hidden="true" />
            <div className="infra-bp-content">
              <div className="infra-bp-line infra-bp-h1" />
              <div className="infra-bp-line infra-bp-h2" />
              <div className="infra-bp-line infra-bp-v1" />
              <div className="infra-bp-line infra-bp-v2" />
              <div className="infra-bp-cross" />
              <div className="infra-bp-label">SECTION A-A</div>
              <div className="infra-bp-dim infra-bp-dim-top">12.5m</div>
              <div className="infra-bp-dim infra-bp-dim-right">8.2m</div>
              <div className="infra-bp-badge">
                <HardHat size={20} strokeWidth={1.8} />
                <span>GMS</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* ============ RESULTS BAR ============ */}
    <section className="infra-results">
      <div className="infra-results-inner">
        {RESULTS.map((r, i) => (
          <motion.div
            key={r.label}
            className="infra-result"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ amount: 0.5 }}
          >
            <strong className="infra-result-num">{r.num}</strong>
            <span className="infra-result-label">{r.label}</span>
          </motion.div>
        ))}
      </div>
    </section>

    {/* ============ CAPABILITIES ============ */}
    <section className="infra-capabilities" id="capabilities">
      <div className="infra-cap-inner">
        <motion.div className="infra-cap-header" {...fadeUp(0.1)}>
          <span className="infra-eyebrow">
            <span className="infra-eyebrow-dot" />
            What We Do
          </span>
          <h2 className="infra-cap-title">
            Full-Spectrum <span className="infra-hero-accent">Infrastructure</span>
          </h2>
          <p className="infra-cap-sub">
            End-to-end infrastructure services — from initial surveys through
            construction to handover — delivered with precision and local expertise.
          </p>
        </motion.div>

        <div className="infra-cap-grid">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.title}
              className="infra-cap-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ amount: 0.3 }}
            >
              <span className="infra-cap-icon">
                <cap.icon size={22} strokeWidth={1.8} />
              </span>
              <h4 className="infra-cap-card-title">{cap.title}</h4>
              <p className="infra-cap-card-desc">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ============ PROCESS ============ */}
    <section className="infra-process">
      <div className="infra-process-inner">
        <motion.div className="infra-process-header" {...fadeUp(0.1)}>
          <span className="infra-eyebrow">
            <span className="infra-eyebrow-dot" />
            Our Process
          </span>
          <h2 className="infra-process-title">
            How We <span className="infra-hero-accent">Deliver</span>
          </h2>
        </motion.div>

        <div className="infra-process-grid">
          {PROCESS.map((step, i) => (
            <motion.div
              key={step.num}
              className="infra-process-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ amount: 0.3 }}
            >
              <span className="infra-process-num">{step.num}</span>
              <span className="infra-process-icon">
                <step.icon size={20} strokeWidth={1.8} />
              </span>
              <h4 className="infra-process-card-title">{step.title}</h4>
              <p className="infra-process-card-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ============ PLATFORM ============ */}
    <PlatformFeatures />

    {/* ============ PROJECT TYPES ============ */}
    <section className="infra-projects">
      <div className="infra-projects-inner">
        <motion.div className="infra-projects-header" {...fadeUp(0.1)}>
          <span className="infra-eyebrow">
            <span className="infra-eyebrow-dot" />
            Project Types
          </span>
          <h2 className="infra-projects-title">
            Areas of <span className="infra-hero-accent">Expertise</span>
          </h2>
        </motion.div>

        <div className="infra-projects-grid">
          {PROJECTS.map((proj, i) => (
            <motion.div
              key={proj.name}
              className="infra-project-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              viewport={{ amount: 0.5 }}
            >
              <span className="infra-project-name">{proj.name}</span>
              <span className="infra-project-type">{proj.type}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CTA />
    <Footer />
  </div>
);

export default InfrastructurePage;
