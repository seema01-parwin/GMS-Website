import React, { useRef } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars -- motion is used via <motion.div> JSX member expressions
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import {
  PenTool,
  Printer,
  Share2,
  LayoutDashboard,
  Package,
  Clapperboard,
  Palette,
  Layers,
  Type,
  Shapes,
  Image,
  Lightbulb,
  Eye,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PlatformFeatures from "../components/PlatformFeatures";
import CTA from "../sections/CTA";
import studioImg from "../assets/Graphic Design.png";
import "./GraphicDesignPage.css";

const TAGS = [
  "Logo Design",
  "Brand Identity",
  "Social Media",
  "Print & Packaging",
  "UI / UX",
  "Motion Graphics",
  "Illustration",
  "Marketing Collateral",
  "Typography",
  "Icon Sets",
];

const CAPABILITIES = [
  {
    icon: PenTool,
    title: "Logo & Brand Identity",
    desc: "Distinctive logos, brand marks, and complete visual identity systems backed by clear usage guidelines.",
  },
  {
    icon: Printer,
    title: "Print & Collateral",
    desc: "Brochures, flyers, banners, business cards, and stationery — print-ready artwork crafted to the millimetre.",
  },
  {
    icon: Share2,
    title: "Social Media Graphics",
    desc: "Scroll-stopping posts, stories, and ad creatives designed for every platform and aspect ratio.",
  },
  {
    icon: LayoutDashboard,
    title: "UI / UX Design",
    desc: "Web and app interfaces, wireframes, and reusable design systems built for real-world usability.",
  },
  {
    icon: Package,
    title: "Packaging Design",
    desc: "Labels, boxes, and product presentation that stand out on the shelf and stay true to your brand.",
  },
  {
    icon: Clapperboard,
    title: "Motion & Video Graphics",
    desc: "Animated logos, promotional reels, and motion graphics that bring your brand to life on screen.",
  },
];

const PROCESS = [
  {
    icon: Lightbulb,
    num: "01",
    file: "01_brief.ab",
    timeline: "Day 1 – 2",
    title: "Discover & Brief",
    desc: "We learn your business, audience, and goals to define what the design needs to achieve.",
    out: "Signed-off creative brief",
  },
  {
    icon: Eye,
    num: "02",
    file: "02_moodboard.ab",
    timeline: "Day 3 – 5",
    title: "Research & Moodboard",
    desc: "Competitor analysis, references, and visual directions that set the creative tone.",
    out: "Moodboard + 3 directions",
  },
  {
    icon: Shapes,
    num: "03",
    file: "03_concepts.ab",
    timeline: "Day 6 – 9",
    title: "Concepts & Drafts",
    desc: "Initial concepts and layout options presented for your review and feedback.",
    out: "3 concept routes to pick",
  },
  {
    icon: RefreshCw,
    num: "04",
    file: "04_refine.ab",
    timeline: "Day 10 – 14",
    title: "Refine & Iterate",
    desc: "Revisions until every detail aligns with your brand and the brief we agreed on.",
    out: "Approved final artwork",
  },
  {
    icon: CheckCircle2,
    num: "05",
    file: "05_final.ab",
    timeline: "48 hours",
    title: "Finalise & Handover",
    desc: "Production-ready files, organised source documents, and all export formats delivered.",
    out: "Print + web file pack",
  },
  {
    icon: Layers,
    num: "06",
    file: "06_brand-kit.ab",
    timeline: "Ongoing",
    title: "Support & Scale",
    desc: "Ongoing design support to keep your brand consistent as your business grows.",
    out: "Retained design hours",
  },
];

const DELIVERABLES = [
  { icon: PenTool, name: "Logo & Marks", desc: "Primary, secondary, and icon variations" },
  { icon: Palette, name: "Colour System", desc: "Brand palette with usage rules" },
  { icon: Type, name: "Typography", desc: "Type scale, pairing, and hierarchy" },
  { icon: Image, name: "Social Templates", desc: "Editable posts, stories, and covers" },
  { icon: Printer, name: "Print Artwork", desc: "CMYK, bleed-ready and press-proofed" },
  { icon: Package, name: "Packaging", desc: "Dielines, mockups, and label artwork" },
  { icon: LayoutDashboard, name: "UI Kits", desc: "Components, states, and screens" },
  { icon: Layers, name: "Source Files", desc: "Layered, organised, and reusable" },
];

const RESULTS = [
  { num: "500+", label: "Designs Delivered" },
  { num: "120+", label: "Brands Served" },
  { num: "48h", label: "Avg. Turnaround" },
  { num: "100%", label: "Original Work" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { amount: 0.3 },
});

const GraphicDesignPage = () => {
  // the ruler's palette fill grows as the user scrolls through the phases
  const rulerRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress: rulerProgress } = useScroll({
    target: rulerRef,
    offset: ["start 0.85", "end 0.6"],
  });
  const rulerFill = useTransform(
    rulerProgress,
    [0, 1],
    reduceMotion ? [1, 1] : [0, 1]
  );

  return (
  <div>
    <Navbar />

    {/* ============ HERO ============ */}
    <section className="gd-hero">
      <div className="gd-hero-inner">
        {/* ---- LEFT: studio visual ---- */}
        <motion.div className="gd-hero-visual" {...fadeUp(0.05)}>
          <div className="gd-hero-stage">
            <span className="gd-hero-blob" aria-hidden="true" />
            <span className="gd-hero-dots" aria-hidden="true" />

            {/* main shot with crop marks */}
            <div className="gd-shot">
              <span className="gd-shot-corner gd-shot-corner--tl" aria-hidden="true" />
              <span className="gd-shot-corner gd-shot-corner--tr" aria-hidden="true" />
              <span className="gd-shot-corner gd-shot-corner--bl" aria-hidden="true" />
              <span className="gd-shot-corner gd-shot-corner--br" aria-hidden="true" />
              <motion.img
                className="gd-shot-img"
                src={studioImg}
                alt="Designer comparing colour swatches over a layout drawing"
                initial={{ clipPath: "inset(0 0 100% 0)", scale: 1.12 }}
                animate={{ clipPath: "inset(0 0 0% 0)", scale: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
              <span className="gd-shot-wash" aria-hidden="true" />
            </div>

            {/* palette card */}
            <motion.div
              className="gd-float gd-float--palette"
              initial={{ opacity: 0, y: 16, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <span className="gd-float-label">Palette</span>
              <span className="gd-palette">
                <i className="gd-dot gd-dot--1" />
                <i className="gd-dot gd-dot--2" />
                <i className="gd-dot gd-dot--3" />
                <i className="gd-dot gd-dot--4" />
                <i className="gd-dot gd-dot--5" />
              </span>
            </motion.div>

            {/* typography card */}
            <motion.div
              className="gd-float gd-float--type"
              initial={{ opacity: 0, y: 16, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <span className="gd-type-aa">Aa</span>
              <span className="gd-type-meta">
                <strong>Poppins</strong>
                <em>ExtraBold</em>
              </span>
            </motion.div>

            {/* studio badge */}
            <motion.div
              className="gd-float gd-float--badge"
              initial={{ opacity: 0, y: 16, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <PenTool size={15} strokeWidth={1.9} />
              <span>GMS Studio</span>
            </motion.div>

            {/* pen cursor */}
            <div className="gd-cursor" aria-hidden="true">
              <svg viewBox="0 0 16 18" fill="var(--accentbtn)">
                <path d="M0 0 L0 15 L4.2 11.2 L6.8 17.2 L9.4 16 L6.9 10.2 L12 10.2 Z" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* ---- RIGHT: copy ---- */}
        <div className="gd-hero-content">
          <motion.span
            className="gd-eyebrow"
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="gd-eyebrow-dot" />
            Graphic Design
          </motion.span>

          <h1 className="gd-hero-title">
            <span className="gd-hero-line">
              <motion.span
                className="gd-hero-line-in"
                initial={{ y: "115%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                Design That
              </motion.span>
            </span>
            <span className="gd-hero-line">
              <motion.span
                className="gd-hero-line-in gd-hero-accent"
                initial={{ y: "115%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
              >
                Gets Remembered
                {/*<svg
                  className="gd-hero-underline"
                  viewBox="0 0 340 18"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M7 12 C 80 4, 168 4, 244 9 C 288 12, 316 13, 333 7"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.9, delay: 1.15, ease: "easeInOut" }}
                  />
                </svg> */}
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="gd-hero-sub"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Logos, brand identities, marketing collateral, and digital design —
            crafted by our in-house studio to make your business look as good as
            it works.
          </motion.p>

          <motion.div
            className="gd-hero-actions"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
          >
            <Link to="/contact" className="hero-btn primary">
              Start a Project <ArrowRight size={16} />
            </Link>
            <a href="#capabilities" className="gd-hero-text-link">
              Our Services <ArrowRight size={14} />
            </a>
          </motion.div>

          <motion.ul
            className="gd-hero-points"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <li>
              <CheckCircle2 size={15} strokeWidth={2} />
              100% original artwork
            </li>
            <li>
              <CheckCircle2 size={15} strokeWidth={2} />
              Source files included
            </li>
            <li>
              <CheckCircle2 size={15} strokeWidth={2} />
              Print &amp; digital ready
            </li>
          </motion.ul>
        </div>
      </div>
    </section>

    {/* ============ TAG MARQUEE ============ */}
    <div className="gd-marquee" aria-hidden="true">
      <div className="gd-marquee-track">
        {[...TAGS, ...TAGS].map((tag, i) => (
          <span key={`${tag}-${i}`} className="gd-marquee-item">
            {tag}
            <span className="gd-marquee-star">◆</span>
          </span>
        ))}
      </div>
    </div>

    {/* ============ RESULTS BAR ============ */}
    <section className="gd-results">
      <div className="gd-results-inner">
        {RESULTS.map((r, i) => (
          <motion.div
            key={r.label}
            className="gd-result"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ amount: 0.5 }}
          >
            <strong className="gd-result-num">{r.num}</strong>
            <span className="gd-result-label">{r.label}</span>
          </motion.div>
        ))}
      </div>
    </section>

    {/* ============ CAPABILITIES ============ */}
    <section className="gd-capabilities" id="capabilities">
      <div className="gd-cap-inner">
        <motion.div className="gd-cap-header" {...fadeUp(0.1)}>
          <span className="gd-eyebrow">
            <span className="gd-eyebrow-dot" />
            What We Design
          </span>
          <h2 className="gd-cap-title">
            Creative <span className="gd-hero-accent">Services</span>
          </h2>
          <p className="gd-cap-sub">
            From a single logo to a full brand system — every piece designed
            with intent and delivered ready to use.
          </p>
        </motion.div>

        <div className="gd-cap-grid">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.title}
              className="gd-cap-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ amount: 0.3 }}
            >
              <span className="gd-cap-icon">
                <cap.icon size={22} strokeWidth={1.8} />
              </span>
              <h4 className="gd-cap-card-title">{cap.title}</h4>
              <p className="gd-cap-card-desc">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ============ PROCESS — DESIGN RULER ROADMAP ============ */}
    <section className="gd-process" id="process">
      <div className="gd-process-inner">
        <motion.div className="gd-process-header" {...fadeUp(0.1)}>
          <span className="gd-eyebrow">
            <span className="gd-eyebrow-dot" />
            Our Process
          </span>
          <h2 className="gd-process-title">
            How We <span className="gd-hero-accent">Design</span>
          </h2>
          <p className="gd-process-sub">
            Six checkpoints on the studio ruler — from brief to brand kit.
            Every phase has a deadline and lands a file you can open.
          </p>
        </motion.div>

        <div className="gd-ruler" ref={rulerRef}>
          {/* the ruler itself: ticks + scroll-driven palette fill */}
          <div className="gd-ruler-track" aria-hidden="true">
            <span className="gd-ruler-line" />
            <span className="gd-ruler-ticks" />
            <motion.span
              className="gd-ruler-fill"
              style={{ scaleX: rulerFill }}
            />
            <motion.span
              className="gd-ruler-fill gd-ruler-fill--v"
              style={{ scaleY: rulerFill }}
            />
            <span className="gd-ruler-cap gd-ruler-cap--start">
              <PenTool size={13} strokeWidth={2} />
            </span>
            <span className="gd-ruler-cap gd-ruler-cap--end">
              <Package size={13} strokeWidth={2} />
            </span>
          </div>

          {PROCESS.map((step, i) => (
            <motion.div
              key={step.num}
              className={[
                "gd-check",
                i % 2 === 0 ? "gd-check--up" : "gd-check--down",
                i === 0 ? "gd-check--first" : "",
                i === PROCESS.length - 1 ? "gd-check--last" : "",
              ].join(" ")}
              style={{ "--i": i }}
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ amount: 0.3, once: true }}
            >
              {/* pin on the ruler */}
              <span className="gd-check-pin">
                <span className="gd-check-pin-halo" aria-hidden="true" />
                <span className="gd-check-pin-core">
                  <step.icon size={17} strokeWidth={1.9} />
                </span>
              </span>

              {/* dashed drop line to the card */}
              <motion.span
                className="gd-check-stem"
                aria-hidden="true"
                initial={reduceMotion ? false : { scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 0.35, delay: i * 0.08 + 0.18 }}
                viewport={{ amount: 0.3, once: true }}
              />

              {/* spec card */}
              <article className="gd-check-card">
                <span className="gd-check-tab">{step.file}</span>
                <header className="gd-check-head">
                  <span className="gd-check-num">{step.num}</span>
                  <span className="gd-check-time">{step.timeline}</span>
                </header>
                <h4 className="gd-check-title">{step.title}</h4>
                <p className="gd-check-desc">{step.desc}</p>
                <span className="gd-check-out">
                  <CheckCircle2 size={13} strokeWidth={2} />
                  {step.out}
                </span>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ============ PLATFORM ============ */}
    <PlatformFeatures />    

    {/* ============ DELIVERABLES ============ */}
    <section className="gd-deliverables">
      <div className="gd-deliverables-inner">
        <motion.div className="gd-deliverables-header" {...fadeUp(0.1)}>
          <span className="gd-eyebrow">
            <span className="gd-eyebrow-dot" />
            What You Get
          </span>
          <h2 className="gd-deliverables-title">
            Files Ready to <span className="gd-hero-accent">Use</span>
          </h2>
        </motion.div>

        <div className="gd-deliverables-grid">
          {DELIVERABLES.map((item, i) => (
            <motion.div
              key={item.name}
              className="gd-deliverable"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ amount: 0.4 }}
            >
              <span className="gd-deliverable-icon">
                <item.icon size={18} strokeWidth={1.8} />
              </span>
              <span className="gd-deliverable-name">{item.name}</span>
              <span className="gd-deliverable-desc">{item.desc}</span>
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

export default GraphicDesignPage;
