import React from "react";
// eslint-disable-next-line no-unused-vars -- motion is used via <motion.div> JSX member expressions
import { motion, useReducedMotion } from "motion/react";
import {
  Map,
  LayoutGrid,
  Compass,
  ClipboardCheck,
  Route,
  CalendarRange,
  Search,
  BarChart3,
  PenTool,
  Milestone,
  ArrowRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PlatformFeatures from "../components/PlatformFeatures";
import CTA from "../sections/CTA";
import "./MasterPlanningPage.css";

const CAPABILITIES = [
  {
    icon: Map,
    title: "Land-Use & Zoning Strategy",
    desc: "Strategic allocation of land for residential, commercial, and public use — grounded in regulation and long-term value.",
  },
  {
    icon: LayoutGrid,
    title: "Urban & Site Master Plans",
    desc: "Cohesive, future-ready layouts that balance density, circulation, open space, and infrastructure from the outset.",
  },
  {
    icon: Compass,
    title: "Site Analysis & Feasibility",
    desc: "Topography, access, environment, and market studies that de-risk development before a single plot is drawn.",
  },
  {
    icon: ClipboardCheck,
    title: "Regulatory & Approval Support",
    desc: "Planning approvals, permits, and authority coordination handled end-to-end to keep your project compliant.",
  },
  {
    icon: Route,
    title: "Infrastructure & Utility Planning",
    desc: "Roads, drainage, water, power, and servicing networks integrated into the plan for buildability and scale.",
  },
  {
    icon: CalendarRange,
    title: "Phased Development Roadmaps",
    desc: "Clear, staged delivery plans that sequence investment, construction, and handover for steady returns.",
  },
];

const PROCESS = [
  {
    icon: Search,
    num: "01",
    title: "Survey & Site Assessment",
    desc: "Site visits, and physical site conditions documented to establish the planning baseline.",
  },
  {
    icon: BarChart3,
    num: "02",
    title: "Data Analysis & Research",
    desc: "Market, demographic, and environmental analysis that informs every land-use and density decision.",
  },
  {
    icon: PenTool,
    num: "03",
    title: "Concept & Zoning Design",
    desc: "Initial layout concepts and zoning options explored, tested, and refined against the brief and budget.",
  },
  {
    icon: LayoutGrid,
    num: "04",
    title: "Master Plan Development",
    desc: "Detailed plans, drawings, and documentation produced for the chosen concept and direction.",
  },
  {
    icon: ClipboardCheck,
    num: "05",
    title: "Approvals & Compliance",
    desc: "Submission to relevant authorities with ongoing coordination until approvals are secured.",
  },
  {
    icon: Milestone,
    num: "06",
    title: "Phased Delivery & Support",
    desc: "Staged implementation support and revisions as your development moves through each phase.",
  },
];

const PROJECTS = [
  { name: "Residential Communities", type: "Residential" },
  { name: "Commercial Zones", type: "Commercial" },
  { name: "Mixed-Use Developments", type: "Mixed-Use" },
  { name: "Industrial Estates", type: "Industrial" },
  { name: "Townships", type: "Urban" },
  { name: "Land Subdivisions", type: "Subdivision" },
];

const RESULTS = [
  { num: "85+", label: "Master Plans" },
  { num: "50+", label: "Sites Planned" },
  { num: "15+", label: "Cities Covered" },
  { num: "100%", label: "Approval Support" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { amount: 0.3 },
});

/* Our Process — drawn as a phased plan sheet: a route that snakes through a
   3 x 2 parcel grid, framed like a real drawing (graph paper, registration
   marks, north arrow, title block). */
const MasterPlanningProcess = () => {
  const reduceMotion = useReducedMotion();

  const mpIn = (delay) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
          viewport: { amount: 0.3 },
        };

  // route lines plot themselves in (transform origin set in CSS)
  const mppLineX = (delay) =>
    reduceMotion
      ? {}
      : {
          initial: { scaleX: 0 },
          whileInView: { scaleX: 1 },
          transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
          viewport: { amount: 0 },
        };

  const mppLineY = (delay) =>
    reduceMotion
      ? {}
      : {
          initial: { scaleY: 0 },
          whileInView: { scaleY: 1 },
          transition: { duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] },
          viewport: { amount: 0 },
        };

  // one parcel cell; reveal staggers in route order (row 2 runs right to left)
  const mppCell = (step, i, row) => (
    <motion.div
      key={step.num}
      className="mpp-cell"
      style={row === "bottom" ? { order: 3 - i } : undefined}
      {...mpIn(row === "top" ? 0.4 + i * 0.12 : 1.05 + i * 0.12)}
    >
      <span className="mpp-node" aria-hidden="true">
        <span className="mpp-node-core" />
      </span>
      <span className="mpp-tag" aria-hidden="true">
        {step.num}
      </span>
      <div className="mpp-card">
        <div className="mpp-card-bar">
          <span className="mpp-phase">Phase {step.num}</span>
          <span className="mpp-swatch" aria-hidden="true" />
        </div>
        <span className="mpp-card-icon">
          <step.icon size={18} strokeWidth={1.8} />
        </span>
        <h4 className="mpp-card-title">{step.title}</h4>
        <p className="mpp-card-desc">{step.desc}</p>
      </div>
    </motion.div>
  );

  return (
    <section className="mp-process">
      <div className="mp-process-inner">
        <motion.div className="mp-process-header" {...mpIn(0.1)}>
          <span className="mp-eyebrow">
            <span className="mp-eyebrow-dot" />
            Our Process
          </span>
          <h2 className="mp-process-title">
            How We <span className="mp-hero-accent">Plan</span>
          </h2>
        </motion.div>

        <motion.div className="mpp-sheet" {...mpIn(0.15)}>
          <span className="mpp-reg mpp-reg--tl" aria-hidden="true" />
          <span className="mpp-reg mpp-reg--tr" aria-hidden="true" />
          <span className="mpp-reg mpp-reg--bl" aria-hidden="true" />
          <span className="mpp-reg mpp-reg--br" aria-hidden="true" />
          <span className="mpp-north" aria-hidden="true">
            <span className="mpp-north-arrow" />N
          </span>

          <div className="mpp-rows">
            <div className="mpp-row mpp-row--top">
              <motion.span
                className="mpp-axis"
                aria-hidden="true"
                {...mppLineX(0.3)}
              />
              <motion.span
                className="mpp-bend"
                aria-hidden="true"
                {...mppLineY(0.75)}
              />
              <span className="mpp-origin" aria-hidden="true" />
              {PROCESS.slice(0, 3).map((step, i) => mppCell(step, i, "top"))}
            </div>
            <div className="mpp-row mpp-row--bottom">
              <motion.span
                className="mpp-axis mpp-axis--rev"
                aria-hidden="true"
                {...mppLineX(1)}
              />
              <span className="mpp-exit" aria-hidden="true" />
              {PROCESS.slice(3).map((step, i) => mppCell(step, i, "bottom"))}
            </div>
          </div>

          <div className="mpp-block">
            <span className="mpp-block-cell mpp-block-cell--id">
              GMS — Grow More Solutions
            </span>
            <span className="mpp-block-cell">Master Plan Process</span>
            <span className="mpp-block-cell">Scale 1:500</span>
            <span className="mpp-block-cell">Sheet MP-101</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const MasterPlanningPage = () => (
  <div>
    <Navbar />

    {/* ============ HERO ============ */}
    <section className="mp-hero">
      <div className="mp-hero-inner">
        <motion.div className="mp-hero-content" {...fadeUp(0.1)}>
          <span className="mp-eyebrow">
            <span className="mp-eyebrow-dot" />
            Master Planning
          </span>
          <h1 className="mp-hero-title">
            From Raw Land to
            <br />
            <span className="mp-hero-accent">Ready-to-Build Vision</span>
          </h1>
          <p className="mp-hero-sub">
            Strategic land-use and development planning that turns raw sites into
            cohesive, future-ready communities and commercial zones — shaped by
            regulation, sustainability, and long-term value.
          </p>
          <div className="mp-hero-actions">
            <a href="/contact" className="hero-btn primary">
              Start a Project <ArrowRight size={16} />
            </a>
            <a href="#capabilities" className="mp-hero-text-link">
              Our Services <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>

        <motion.div className="mp-hero-visual" {...fadeUp(0.2)}>
          <div className="mp-hero-plan">
            <div className="mp-plan-grid" aria-hidden="true" />
            <div className="mp-plan-content">
              <div className="mp-plan-block mp-plan-b1" />
              <div className="mp-plan-block mp-plan-b2" />
              <div className="mp-plan-block mp-plan-b3" />
              <div className="mp-plan-block mp-plan-b4" />
              <div className="mp-plan-road mp-plan-road-h" />
              <div className="mp-plan-road mp-plan-road-v" />
              <div className="mp-plan-marker">
                <span />
              </div>
              <div className="mp-plan-label">SITE PLAN — ZONE A</div>
              <div className="mp-plan-scale">0 — 50m</div>
              <div className="mp-plan-badge">
                <Map size={18} strokeWidth={1.8} />
                <span>GMS</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* ============ RESULTS BAR ============ */}
    <section className="mp-results">
      <div className="mp-results-inner">
        {RESULTS.map((r, i) => (
          <motion.div
            key={r.label}
            className="mp-result"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ amount: 0.5 }}
          >
            <strong className="mp-result-num">{r.num}</strong>
            <span className="mp-result-label">{r.label}</span>
          </motion.div>
        ))}
      </div>
    </section>

    {/* ============ CAPABILITIES ============ */}
    <section className="mp-capabilities" id="capabilities">
      <div className="mp-cap-inner">
        <motion.div className="mp-cap-header" {...fadeUp(0.1)}>
          <span className="mp-eyebrow">
            <span className="mp-eyebrow-dot" />
            What We Do
          </span>
          <h2 className="mp-cap-title">
            Planning <span className="mp-hero-accent">Done Right</span>
          </h2>
          <p className="mp-cap-sub">
            End-to-end master planning — from first site study through zoning,
            approvals, and phased delivery — built to be practical, compliant,
            and commercially sound.
          </p>
        </motion.div>

        <div className="mp-cap-grid">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.title}
              className="mp-cap-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ amount: 0.3 }}
            >
              <span className="mp-cap-icon">
                <cap.icon size={22} strokeWidth={1.8} />
              </span>
              <h4 className="mp-cap-card-title">{cap.title}</h4>
              <p className="mp-cap-card-desc">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ============ PROCESS ============ */}
    <MasterPlanningProcess />

    {/* ============ PLATFORM ============ */}
    <PlatformFeatures />

    {/* ============ PROJECT TYPES ============ */}
    <section className="mp-projects">
      <div className="mp-projects-inner">
        <motion.div className="mp-projects-header" {...fadeUp(0.1)}>
          <span className="mp-eyebrow">
            <span className="mp-eyebrow-dot" />
            Project Types
          </span>
          <h2 className="mp-projects-title">
            What We <span className="mp-hero-accent">Plan</span>
          </h2>
        </motion.div>

        <div className="mp-projects-grid">
          {PROJECTS.map((proj, i) => (
            <motion.div
              key={proj.name}
              className="mp-project-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              viewport={{ amount: 0.5 }}
            >
              <span className="mp-project-name">{proj.name}</span>
              <span className="mp-project-type">{proj.type}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CTA />
    <Footer />
  </div>
);

export default MasterPlanningPage;
