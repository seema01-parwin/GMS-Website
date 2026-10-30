import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars -- motion is used via <motion.div> JSX member expressions
import { motion } from "motion/react";
import {
  Target,
  Megaphone,
  Search,
  MousePointerClick,
  Mail,
  Newspaper,
  PenTool,
  Send,
  TrendingUp,
  BarChart3,
  Building2,
  HardHat,
  Cpu,
  GraduationCap,
  HeartPulse,
  Hotel,
  Globe,
  LayoutDashboard,
  Users,
  ArrowRight,
  Flag,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PlatformFeatures from "../components/PlatformFeatures";
import CTA from "../sections/CTA";
import { fadeUp, zoomIn, fadeRight } from "../utils/animations";
import marketingImg from "../assets/MarketingHero.png";
import analyticsImg from "../assets/marketingVer.png";
import dashboardImg from "../assets/Live Campaign Dashboard.jpg";
import portalImg from "../assets/Branded Client Reporting.jpg";
import globeImg from "../assets/Global Reach, Local Insight.jpg";
import "./MarketingPage.css";

const CHANNELS = [
  "SEO",
  "Social Media",
  "Paid Ads",
  "Content",
  "Email & CRM",
  "PR",
  "Influencer",
  "Video",
  "Branding",
];

const RESULTS = [
  { num: "120+", label: "Brands Grown" },
  { num: "3x", label: "Average Reach" },
  { num: "40%", label: "Lower Cost / Acquisition" },
  { num: "15+", label: "Markets Served" },
];

const CAPABILITIES = [
  {
    icon: Target,
    title: "Brand Strategy & Positioning",
    desc: "We define who you are for, what you stand for, and the message that makes you the obvious choice.",
  },
  {
    icon: Megaphone,
    title: "Digital & Social Campaigns",
    desc: "Always-on content and campaign creative built for every platform, format, and audience segment.",
  },
  {
    icon: Search,
    title: "SEO & Content Marketing",
    desc: "Technical SEO, local search, and content that earns rankings, traffic, and inbound enquiries.",
  },
  {
    icon: MousePointerClick,
    title: "Performance Advertising",
    desc: "Paid search, social, and programmatic campaigns managed against cost, pipeline, and revenue.",
  },
  {
    icon: Mail,
    title: "Email & CRM Automation",
    desc: "Lifecycle campaigns and automated journeys that nurture leads into customers and keep them loyal.",
  },
  {
    icon: Newspaper,
    title: "PR & Influencer Outreach",
    desc: "Media relations, product launches, and creator partnerships that build authority and trust.",
  },
];

const SHOWCASE_METRICS = [
  { value: "+248%", label: "Organic traffic" },
  { value: "4.1x", label: "Return on ad spend" },
];

const TOOLKIT = [
  {
    image: globeImg,
    title: "Global Reach, Local Insight",
    desc: "Campaigns that travel — from Colombo to Dubai — tuned to the culture of every market we run in.",
    link: "/contact",
  },
  {
    image: dashboardImg,
    title: "Live Campaign Dashboard",
    desc: "Spend, reach, and pipeline visible in real time, so decisions are made on data the same day.",
    link: "/software",
  },
  {
    image: portalImg,
    title: "Branded Client Reporting",
    desc: "Polished monthly reporting your clients actually read, delivered through a branded portal.",
    link: "/software",
  },
];

const PROCESS = [
  {
    icon: Search,
    num: "01",
    phase: "Phase 01",
    timeline: "Week 1",
    title: "Discover & Diagnose",
    desc: "We audit your channels, site, and numbers to find where growth is being lost.",
    kpi: "Audit & baseline report",
  },
  {
    icon: Target,
    num: "02",
    phase: "Phase 02",
    timeline: "Week 2",
    title: "Strategy & Positioning",
    desc: "Objectives, audiences, messaging, and channel mix — agreed and tied to revenue.",
    kpi: "Channel & budget plan",
  },
  {
    icon: PenTool,
    num: "03",
    phase: "Phase 03",
    timeline: "Weeks 2 – 3",
    title: "Creative Production",
    desc: "Campaign concepts, copy, and design produced in-house — fast, consistent, on-brand.",
    kpi: "Creative set ready",
  },
  {
    icon: Send,
    num: "04",
    phase: "Phase 04",
    timeline: "Week 4",
    title: "Campaign Launch",
    desc: "Channels go live in sequence, with tracking and attribution verified from day one.",
    kpi: "Channels live + tracked",
  },
  {
    icon: TrendingUp,
    num: "05",
    phase: "Phase 05",
    timeline: "Weeks 5 – 8",
    title: "Optimise & Scale",
    desc: "Weekly reviews move budget to what works; creative gets tested, cut, and scaled.",
    kpi: "Weekly test cycles",
  },
  {
    icon: BarChart3,
    num: "06",
    phase: "Phase 06",
    timeline: "Monthly",
    title: "Report & Retain",
    desc: "What was spent, what returned, and the next bets — reported in plain language.",
    kpi: "Growth report + next steps",
  },
];

const INDUSTRIES = [
  { icon: Building2, name: "Real Estate" },
  { icon: HardHat, name: "Construction" },
  { icon: Cpu, name: "BPO & IT" },
  { icon: GraduationCap, name: "Education" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: Hotel, name: "Hospitality" },
];

const MarketingPage = () => (
  <div>
    <Navbar />

    {/* ============ HERO ============ */}
    <section className="mk-hero">
      <div className="mk-hero-inner">
        <motion.div className="mk-hero-content" {...fadeUp(0.1)}>
          <span className="mk-eyebrow">
            <span className="mk-eyebrow-dot" />
            Marketing
          </span>
          <h1 className="mk-hero-title">
            Growth You Can
            <br />
            <span className="mk-hero-accent">Measure</span>
          </h1>
          <p className="mk-hero-sub">
            Brand strategy, campaigns, content, and performance media — built on
            real numbers, run by specialists, and reported in plain language
            every single month.
          </p>
          <div className="mk-hero-actions">
            <Link to="/contact" className="hero-btn primary">
              Book a Strategy Call <ArrowRight size={16} />
            </Link>
            <a href="#capabilities" className="mk-hero-text-link">
              What We Do <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>

        <motion.div className="mk-hero-visual" {...fadeUp(0.2)}>
          <div className="mk-hero-media">
            <img
              src={marketingImg}
              alt="Marketing campaign creative and analytics"
              loading="eager"
            />
            <span className="mk-hero-chip">
              <span className="mk-hero-chip-dot" />
              Campaign Live
            </span>
          </div>
          <motion.div className="mk-hero-card" {...zoomIn(0.35)}>
            <span className="mk-hero-card-label">Avg. Reach Growth</span>
            <strong className="mk-hero-card-value">3x</strong>
            <span className="mk-hero-card-note">Within 6 months</span>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* ============ CHANNEL MARQUEE ============ */}
    <div className="mk-marquee" aria-hidden="true">
      <div className="mk-marquee-track">
        {[...CHANNELS, ...CHANNELS].map((ch, i) => (
          <span key={`${ch}-${i}`} className="mk-marquee-item">
            {ch}
            <span className="mk-marquee-dot" />
          </span>
        ))}
      </div>
    </div>

    {/* ============ RESULTS BAR ============ */}
    <section className="mk-results">
      <div className="mk-results-inner">
        {RESULTS.map((r, i) => (
          <motion.div
            key={r.label}
            className="mk-result"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ amount: 0.5 }}
          >
            <strong className="mk-result-num">{r.num}</strong>
            <span className="mk-result-label">{r.label}</span>
          </motion.div>
        ))}
      </div>
    </section>

    {/* ============ CAPABILITIES ============ */}
    <section className="mk-capabilities" id="capabilities">
      <div className="mk-cap-inner">
        <motion.div className="mk-cap-header" {...fadeUp(0.1)}>
          <span className="mk-eyebrow">
            <span className="mk-eyebrow-dot" />
            What We Do
          </span>
          <h2 className="mk-cap-title">
            Full-Funnel <span className="mk-hero-accent">Marketing</span>
          </h2>
          <p className="mk-cap-sub">
            Brand, demand, and retention handled together — because the cheapest
            lead is the one your existing customers send you.
          </p>
        </motion.div>

        <div className="mk-cap-grid">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.title}
              className="mk-cap-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ amount: 0.3 }}
            >
              <span className="mk-cap-icon">
                <cap.icon size={22} strokeWidth={1.8} />
              </span>
              <h4 className="mk-cap-card-title">{cap.title}</h4>
              <p className="mk-cap-card-desc">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ============ PERFORMANCE SHOWCASE ============ */}
    <section className="mk-showcase">
      <div className="mk-showcase-inner">
        <motion.div className="mk-showcase-media" {...fadeUp(0.1)}>
          <div className="mk-showcase-image">
            <img
              src={analyticsImg}
              alt="Marketing performance analytics dashboard"
              loading="lazy"
            />
          </div>
          {SHOWCASE_METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              className="mk-showcase-metric"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 + i * 0.1 }}
              viewport={{ amount: 0.4 }}
            >
              <strong>{m.value}</strong>
              <span>{m.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="mk-showcase-content" {...fadeRight(0.15)}>
          <span className="mk-eyebrow">
            <span className="mk-eyebrow-dot" />
            Proof, Not Promises
          </span>
          <h2 className="mk-showcase-title">
            Every Rupee <span className="mk-hero-accent">Tracked</span>
          </h2>
          <p className="mk-showcase-text">
            We connect campaigns to revenue, not vanity metrics. That means clean
            attribution, honest reporting, and a clear answer to the only
            question that matters — what did this actually return?
          </p>
          <ul className="mk-showcase-list">
            <li>
              <span className="mk-showcase-bullet" />
              Full-funnel attribution across paid, owned, and earned channels
            </li>
            <li>
              <span className="mk-showcase-bullet" />
              Weekly budget reallocation toward the channels performing
            </li>
            <li>
              <span className="mk-showcase-bullet" />
              Creative testing built into every campaign, not bolted on later
            </li>
            <li>
              <span className="mk-showcase-bullet" />
              One dashboard, one owner, one monthly report you understand
            </li>
          </ul>
          <Link to="/contact" className="mk-showcase-btn">
            Get a Growth Audit <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>

    {/* ============ TOOLKIT ============ */}
    <section className="mk-toolkit">
      <div className="mk-toolkit-inner">
        <motion.div className="mk-toolkit-header" {...fadeUp(0.1)}>
          <span className="mk-eyebrow">
            <span className="mk-eyebrow-dot" />
            How We Deliver
          </span>
          <h2 className="mk-toolkit-title">
            The <span className="mk-hero-accent">Toolkit</span>
          </h2>
        </motion.div>

        <div className="mk-toolkit-grid">
          {TOOLKIT.map((item, i) => (
            <motion.div
              key={item.title}
              className="mk-toolkit-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ amount: 0.3 }}
            >
              <Link to={item.link} className="mk-toolkit-link">
                <div className="mk-toolkit-media">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <div className="mk-toolkit-body">
                  <h4 className="mk-toolkit-card-title">{item.title}</h4>
                  <p className="mk-toolkit-card-desc">{item.desc}</p>
                  <span className="mk-toolkit-arrow">
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ============ PROCESS — GROWTH ROADMAP ============ */}
    <section className="mk-process" id="process">
      <div className="mk-process-inner">
        <motion.div className="mk-process-header" {...fadeUp(0.1)}>
          <span className="mk-eyebrow">
            <span className="mk-eyebrow-dot" />
            Our Process
          </span>
          <h2 className="mk-process-title">
            How We <span className="mk-hero-accent">Grow</span>
          </h2>
          <p className="mk-process-sub">
            A six-phase climb from first audit to compounding growth — every
            phase has a deadline, a deliverable, and a number to hit.
          </p>
        </motion.div>

        <div className="mk-road">
          {PROCESS.map((step, i) => (
            <motion.div
              key={step.num}
              className={`mk-road-step${i === PROCESS.length - 1 ? " mk-road-step--goal" : ""}`}
              style={{ "--i": i }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.09 }}
              viewport={{ amount: 0.25, once: true }}
            >
              {/* riser to the previous step (staircase connector) */}
              {i > 0 && (
                <motion.span
                  className="mk-road-link mk-road-link--v"
                  aria-hidden="true"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.09 + 0.15 }}
                  viewport={{ amount: 0.25, once: true }}
                />
              )}

              {/* milestone node */}
              <div className="mk-road-node">
                <span className="mk-road-node-ring" aria-hidden="true" />
                <span className="mk-road-node-core">
                  <step.icon size={18} strokeWidth={1.9} />
                </span>
                <span className="mk-road-step-tag">{step.timeline}</span>
                {i === PROCESS.length - 1 && (
                  <span className="mk-road-goal" aria-hidden="true">
                    <Flag size={13} strokeWidth={2.2} />
                  </span>
                )}
              </div>

              {/* run to the next step */}
              {i < PROCESS.length - 1 && (
                <motion.span
                  className="mk-road-link mk-road-link--h"
                  aria-hidden="true"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.45, delay: i * 0.09 + 0.3 }}
                  viewport={{ amount: 0.25, once: true }}
                />
              )}

              {/* phase card */}
              <article className="mk-road-card">
                <header className="mk-road-card-head">
                  <span className="mk-road-num">{step.num}</span>
                  <span className="mk-road-phase">{step.phase}</span>
                </header>
                <h4 className="mk-road-card-title">{step.title}</h4>
                <p className="mk-road-card-desc">{step.desc}</p>
                <span className="mk-road-kpi">
                  <TrendingUp size={13} strokeWidth={2} />
                  {step.kpi}
                </span>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ============ PLATFORM ============ */}
    <PlatformFeatures />

    {/* ============ INDUSTRIES ============ */}
    <section className="mk-industries">
      <div className="mk-industries-inner">
        <motion.div className="mk-industries-header" {...fadeUp(0.1)}>
          <span className="mk-eyebrow">
            <span className="mk-eyebrow-dot" />
            Industries
          </span>
          <h2 className="mk-industries-title">
            Sectors We <span className="mk-hero-accent">Know</span>
          </h2>
          <p className="mk-industries-sub">
            Deep context in the industries we serve — so the campaign speaks the
            language of your customer, not a template.
          </p>
        </motion.div>

        <div className="mk-industries-grid">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.name}
              className="mk-industry-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              viewport={{ amount: 0.5 }}
            >
              <span className="mk-industry-icon">
                <ind.icon size={18} strokeWidth={1.8} />
              </span>
              <span className="mk-industry-name">{ind.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CTA />
    <Footer />
  </div>
);

export default MarketingPage;
