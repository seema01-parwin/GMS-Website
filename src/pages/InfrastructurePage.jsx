import React from "react";
// eslint-disable-next-line no-unused-vars -- motion is used via <motion.div> JSX member expressions
import { motion, useReducedMotion } from "motion/react";
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
import infraHeroImg from "../assets/inHero1.jpg";
import infraInsetImg from "../assets/inHero.jpg";
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
    ch: "0+000",
    title: "Investigation & Analysis",
    desc: "Geotechnical surveys, environmental impact assessments, and site condition analysis to establish project parameters.",
  },
  {
    icon: Compass,
    num: "02",
    ch: "0+180",
    title: "Design & Engineering",
    desc: "Structural calculations, CAD drawings, materials specifications, and value engineering for cost optimisation.",
  },
  {
    icon: HardHat,
    num: "03",
    ch: "0+360",
    title: "Procurement & Mobilisation",
    desc: "Material sourcing, equipment deployment, labour coordination, and site preparation ahead of construction.",
  },
  {
    icon: Truck,
    num: "04",
    ch: "0+540",
    title: "Construction",
    desc: "Phased execution with daily progress tracking, safety compliance, and quality checkpoints at every milestone.",
  },
  {
    icon: BarChart3,
    num: "05",
    ch: "0+720",
    title: "Supervision & Monitoring",
    desc: "On-site resident engineers, real-time progress reporting, and corrective action protocols to keep projects on track.",
  },
  {
    icon: ShieldCheck,
    num: "06",
    ch: "0+900",
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

const InfrastructurePage = () => {
  const reduceMotion = useReducedMotion();

  // masked line reveal for the headline
  const lineIn = (delay) =>
    reduceMotion
      ? {}
      : {
          initial: { y: "115%" },
          animate: { y: "0%" },
          transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
        };

  const riseIn = (delay) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 26 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
        };

  // scroll-in for the chainage roadmap stations
  const iaIn = (delay) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 26 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
          viewport: { amount: 0.25 },
        };

  // the road band draws itself in from the origin stake
  const iaBandIn = reduceMotion
    ? {}
    : {
        initial: { scaleX: 0 },
        whileInView: { scaleX: 1 },
        transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
        viewport: { amount: 0.3 },
      };

  return (
    <div>
      <Navbar />

      {/* ============ HERO ============ */}
      <section className="infra-hero">
        <div className="infra-hero-inner">
          <div className="infra-hero-content">
            <motion.span className="infra-eyebrow" {...riseIn(0.05)}>
              <span className="infra-eyebrow-dot" />
              Infrastructure
            </motion.span>

            <h1 className="infra-hero-title">
              <span className="infra-title-mask">
                <motion.span {...lineIn(0.15)}>Engineering the</motion.span>
              </span>
              <span className="infra-title-mask">
                <motion.span className="infra-hero-accent" {...lineIn(0.28)}>
                  Foundation of Progress
                </motion.span>
              </span>
            </h1>

            <motion.p className="infra-hero-sub" {...riseIn(0.4)}>
              From roadworks and utilities to commercial buildings, we design and
              deliver infrastructure projects engineered for durability, safety,
              and long-term performance across Sri Lanka.
            </motion.p>

            <motion.div className="infra-hero-actions" {...riseIn(0.5)}>
              <a href="/contact" className="hero-btn primary">
                Start a Project <ArrowRight size={16} />
              </a>
              <a href="#capabilities" className="infra-hero-text-link">
                Our Services <ArrowRight size={14} />
              </a>
            </motion.div>

            <motion.div className="infra-hero-meta" {...riseIn(0.62)}>
              <span className="infra-meta-chip">ISO 9001 Certified</span>
              <span className="infra-meta-chip">25+ Years On Site</span>
              <span className="infra-meta-chip">120+ Projects</span>
            </motion.div>
          </div>

          {/* Survey site-plan composition */}
          <motion.div className="infra-hero-visual" {...riseIn(0.35)}>
            <div className="infra-sheet">
              <div className="infra-dim" aria-hidden="true">
                <span className="infra-dim-cap" />
                <span className="infra-dim-bar" />
                <span className="infra-dim-cap" />
                <span className="infra-dim-label">GRID 06°55′ N — 79°51′ E</span>
              </div>

              <div className="infra-shot infra-shot--main">
                <img
                  src={infraHeroImg}
                  alt="Bridge pylons and tower cranes rising above a city construction site"
                />
                <span className="infra-shot-tint" aria-hidden="true" />
                <span className="infra-marker infra-marker--a" aria-hidden="true" />
                <span className="infra-marker infra-marker--b" aria-hidden="true" />
                <span className="infra-shot-tag">Site Plan 01 </span>
              </div>

              <div className="infra-shot infra-shot--inset">
                <img
                  src={infraInsetImg}
                  alt="Tower crane lifting precast slabs over a concrete building frame"
                />
                <span className="infra-shot-tint" aria-hidden="true" />
                <span className="infra-shot-tag">Pour 04 · Day 118</span>
              </div>

              <div className="infra-hud">
                <div className="infra-hud-head">
                  <span>Project Load</span>
                  <span className="infra-hud-live">
                    <i aria-hidden="true" /> Live
                  </span>
                </div>
                <div className="infra-hud-row">
                  <span>Structure</span>
                  <b>92%</b>
                  <span className="infra-hud-track">
                    <i style={{ "--w": "92%", "--d": "0.7s" }} />
                  </span>
                </div>
                <div className="infra-hud-row">
                  <span>Earthworks</span>
                  <b>78%</b>
                  <span className="infra-hud-track">
                    <i style={{ "--w": "78%", "--d": "0.85s" }} />
                  </span>
                </div>
                <div className="infra-hud-row">
                  <span>Utilities</span>
                  <b>64%</b>
                  <span className="infra-hud-track">
                    <i style={{ "--w": "64%", "--d": "1s" }} />
                  </span>
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

      {/* ============ PROCESS — survey chainage roadmap ============ */}
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

          <div className="ia-road">
            <motion.div className="ia-band" aria-hidden="true" {...iaBandIn}>
              <span className="ia-band-center" />
              <span className="ia-band-stake" />
              <span className="ia-band-arrow" />
            </motion.div>

            <div className="ia-steps">
              {PROCESS.map((step, i) => (
                <motion.div
                  key={step.num}
                  className={`ia-step ${i % 2 === 0 ? "ia-step--up" : "ia-step--down"}`}
                  {...iaIn(0.12 + i * 0.09)}
                >
                  <span
                    className={`ia-ch ${i % 2 === 0 ? "ia-ch--hi" : "ia-ch--lo"}`}
                    aria-hidden="true"
                  >
                    CH {step.ch}
                  </span>
                  <div className="ia-card">
                    <span className="ia-card-ghost" aria-hidden="true">
                      {step.num}
                    </span>
                    <div className="ia-card-head">
                      <span className="ia-card-icon">
                        <step.icon size={17} strokeWidth={1.8} />
                      </span>
                      <span className="ia-stage">Stage {step.num}</span>
                    </div>
                    <h4 className="ia-card-title">{step.title}</h4>
                    <p className="ia-card-desc">{step.desc}</p>
                  </div>
                  <span className="ia-leader" aria-hidden="true" />
                  <span className="ia-node" aria-hidden="true">
                    <span className="ia-node-core" />
                  </span>
                </motion.div>
              ))}
            </div>
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
};

export default InfrastructurePage;
