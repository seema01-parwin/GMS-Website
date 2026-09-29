import React from "react";
// eslint-disable-next-line no-unused-vars -- motion is used via <motion.div> JSX member expressions
import { motion } from "motion/react";
import {
  Armchair,
  Paintbrush,
  Lamp,
  Sofa,
  Frame,
  Lightbulb,
  ArrowRight,
  Palette,
  Ruler,
  Eye,
  Truck,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PlatformFeatures from "../components/PlatformFeatures";
import CTA from "../sections/CTA";
import "./InteriorDesignPage.css";

const CAPABILITIES = [
  {
    icon: Ruler,
    title: "Space Planning",
    desc: "Strategic layouts that maximise every square metre — traffic flow, zoning, and spatial hierarchy tailored to how you live and work.",
  },
  {
    icon: Eye,
    title: "3D Visualization",
    desc: "Photorealistic renders and walkthroughs so you can see your space before a single wall is moved. No surprises, only confidence.",
  },
  {
    icon: Palette,
    title: "Material Selection",
    desc: "Curated palettes of finishes, fabrics, and fixtures — sourced locally and internationally for quality, durability, and style.",
  },
  {
    icon: Sofa,
    title: "Furniture & Fit-Out",
    desc: "Custom furniture design, procurement, and installation coordinated end-to-end. Every piece placed with purpose.",
  },
  {
    icon: Paintbrush,
    title: "Concept Design",
    desc: "Mood boards, design narratives, and aesthetic direction that capture your vision and translate it into a cohesive interior language.",
  },
  {
    icon: Truck,
    title: "Turnkey Delivery",
    desc: "We manage the entire project — demolition through final styling — so you walk into a finished space, not a punch list.",
  },
];

const PROCESS = [
  {
    icon: Lightbulb,
    num: "01",
    title: "Consultation & Brief",
    desc: "We listen to your lifestyle, preferences, and functional needs to establish a clear design brief and project scope.",
  },
  {
    icon: Eye,
    num: "02",
    title: "Concept Development",
    desc: "Mood boards, material samples, and initial layout concepts presented for your review and refinement.",
  },
  {
    icon: Frame,
    num: "03",
    title: "Design & Visualization",
    desc: "Detailed 3D renders, floor plans, and elevation drawings that bring the design to life before execution begins.",
  },
  {
    icon: Palette,
    num: "04",
    title: "Material & Procurement",
    desc: "Sourcing, ordering, and quality checking of all materials, furniture, and fixtures on your behalf.",
  },
  {
    icon: Armchair,
    num: "05",
    title: "Execution & Installation",
    desc: "On-site supervision of contractors, carpenters, and installers — every detail placed exactly as designed.",
  },
  {
    icon: Lamp,
    num: "06",
    title: "Final Styling & Handover",
    desc: "Accessorising, styling, and a final walkthrough to ensure every element meets our standards and your expectations.",
  },
];

const STYLES = [
  { name: "Modern Minimalist", desc: "Clean lines, open spaces, and intentional simplicity" },
  { name: "Contemporary", desc: "Current trends balanced with timeless sophistication" },
  { name: "Tropical Luxe", desc: "Natural materials, warm tones, and indoor-outdoor living" },
  { name: "Industrial Chic", desc: "Raw textures, exposed elements, and urban character" },
  { name: "Scandinavian", desc: "Light, functional, and beautifully understated" },
  { name: "Bespoke", desc: "A unique fusion crafted entirely around your vision" },
];

const RESULTS = [
  { num: "200+", label: "Spaces Transformed" },
  { num: "95%", label: "Client Satisfaction" },
  { num: "15+", label: "Design Awards" },
  { num: "30+", label: "Expert Designers" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { amount: 0.3 },
});

const InteriorDesignPage = () => (
  <div>
    <Navbar />

    {/* ============ HERO ============ */}
    <section className="id-hero">
      <div className="id-hero-inner">
        <motion.div className="id-hero-content" {...fadeUp(0.1)}>
          <span className="id-eyebrow">
            <span className="id-eyebrow-dot" />
            Interior Design
          </span>
          <h1 className="id-hero-title">
            Spaces That
            <br />
            <span className="id-hero-accent">Inspire Living</span>
          </h1>
          <p className="id-hero-sub">
            Modern, professional interiors that balance aesthetics with
            practicality — residential, commercial, and hospitality spaces
            designed to elevate everyday experiences.
          </p>
          <div className="id-hero-actions">
            <a href="/contact" className="hero-btn primary">
              Start a Project <ArrowRight size={16} />
            </a>
            <a href="#capabilities" className="id-hero-text-link">
              Our Services <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>

        <motion.div className="id-hero-visual" {...fadeUp(0.2)}>
          <div className="id-hero-room">
            <div className="id-room-wall" />
            <div className="id-room-floor" />
            <div className="id-room-window">
              <div className="id-window-pane" />
              <div className="id-window-pane" />
            </div>
            <div className="id-room-sofa">
              <div className="id-sofa-back" />
              <div className="id-sofa-seat" />
              <div className="id-sofa-arm id-sofa-arm-l" />
              <div className="id-sofa-arm id-sofa-arm-r" />
            </div>
            <div className="id-room-table" />
            <div className="id-room-lamp">
              <div className="id-lamp-shade" />
              <div className="id-lamp-pole" />
              <div className="id-lamp-base" />
            </div>
            <div className="id-room-plant">
              <div className="id-plant-leaf id-leaf-1" />
              <div className="id-plant-leaf id-leaf-2" />
              <div className="id-plant-leaf id-leaf-3" />
              <div className="id-plant-pot" />
            </div>
            <div className="id-room-badge">
              <Armchair size={20} strokeWidth={1.8} />
              <span>GMS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* ============ RESULTS BAR ============ */}
    <section className="id-results">
      <div className="id-results-inner">
        {RESULTS.map((r, i) => (
          <motion.div
            key={r.label}
            className="id-result"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ amount: 0.5 }}
          >
            <strong className="id-result-num">{r.num}</strong>
            <span className="id-result-label">{r.label}</span>
          </motion.div>
        ))}
      </div>
    </section>

    {/* ============ CAPABILITIES ============ */}
    <section className="id-capabilities" id="capabilities">
      <div className="id-cap-inner">
        <motion.div className="id-cap-header" {...fadeUp(0.1)}>
          <span className="id-eyebrow">
            <span className="id-eyebrow-dot" />
            What We Do
          </span>
          <h2 className="id-cap-title">
            Complete <span className="id-hero-accent">Interior Solutions</span>
          </h2>
          <p className="id-cap-sub">
            From initial concept through final styling — every detail managed
            under one roof for a seamless design experience.
          </p>
        </motion.div>

        <div className="id-cap-grid">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.title}
              className="id-cap-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ amount: 0.3 }}
            >
              <span className="id-cap-icon">
                <cap.icon size={22} strokeWidth={1.8} />
              </span>
              <h4 className="id-cap-card-title">{cap.title}</h4>
              <p className="id-cap-card-desc">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ============ PROCESS ============ */}
    <section className="id-process">
      <div className="id-process-inner">
        <motion.div className="id-process-header" {...fadeUp(0.1)}>
          <span className="id-eyebrow">
            <span className="id-eyebrow-dot" />
            Our Process
          </span>
          <h2 className="id-process-title">
            How We <span className="id-hero-accent">Design</span>
          </h2>
        </motion.div>

        <div className="id-process-grid">
          {PROCESS.map((step, i) => (
            <motion.div
              key={step.num}
              className="id-process-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ amount: 0.3 }}
            >
              <span className="id-process-num">{step.num}</span>
              <span className="id-process-icon">
                <step.icon size={20} strokeWidth={1.8} />
              </span>
              <h4 className="id-process-card-title">{step.title}</h4>
              <p className="id-process-card-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ============ PLATFORM ============ */}
    <PlatformFeatures />

    {/* ============ STYLES ============ */}
    <section className="id-styles">
      <div className="id-styles-inner">
        <motion.div className="id-styles-header" {...fadeUp(0.1)}>
          <span className="id-eyebrow">
            <span className="id-eyebrow-dot" />
            Design Styles
          </span>
          <h2 className="id-styles-title">
            Aesthetic <span className="id-hero-accent">Directions</span>
          </h2>
        </motion.div>

        <div className="id-styles-grid">
          {STYLES.map((style, i) => (
            <motion.div
              key={style.name}
              className="id-style-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              viewport={{ amount: 0.5 }}
            >
              <span className="id-style-name">{style.name}</span>
              <span className="id-style-desc">{style.desc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CTA />
    <Footer />
  </div>
);

export default InteriorDesignPage;
