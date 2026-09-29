import React from "react";
// eslint-disable-next-line no-unused-vars -- motion is used via <motion.div> JSX member expressions
import { motion } from "motion/react";
import {
  Code2,
  Smartphone,
  Globe,
  Database,
  Cloud,
  Lock,
  ArrowRight,
  Layers,
  Cpu,
  GitBranch,
  Workflow,
  TestTube,
  Briefcase,
  MessagesSquare,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PlatformFeatures from "../components/PlatformFeatures";
import FloatingIcons from "../components/FloatingIcons";
import CTA from "../sections/CTA";
import "./SoftwarePage.css";

const CAPABILITIES = [
  {
    icon: Globe,
    title: "Web Applications",
    desc: "Modern, responsive web apps built with React, Next.js, and cutting-edge frameworks — fast, scalable, and maintainable.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Native and cross-platform mobile applications for iOS and Android that deliver seamless user experiences.",
  },
  {
    icon: Database,
    title: "Backend & APIs",
    desc: "Robust REST and GraphQL APIs, microservices architecture, and database design built for scale and reliability.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "AWS, Azure, and GCP deployments with CI/CD pipelines, containerisation, and infrastructure-as-code.",
  },
  {
    icon: Lock,
    title: "Security",
    desc: "Enterprise-grade security with encryption, authentication, authorization, and compliance standards baked in from day one.",
  },
  {
    icon: Code2,
    title: "Custom Software",
    desc: "Tailored solutions for unique business needs — CRMs, ERPs, dashboards, and internal tools built around your workflow.",
  },
  {
    icon: Briefcase,
    title: "Business Process Outsourcing",
    desc: "Reliable back-office support and operational services that help clients streamline processes, cut costs, and scale confidently.",
  },
  {
    icon: MessagesSquare,
    title: "IT Consulting",
    desc: "Strategic technology advisory — architecture reviews, digital transformation roadmaps, and technology selection to guide your decisions.",
  },
];

const PROCESS = [
  {
    icon: Layers,
    num: "01",
    title: "Discovery & Planning",
    desc: "We dive deep into your business goals, user needs, and technical requirements to map out a clear roadmap.",
  },
  {
    icon: Cpu,
    num: "02",
    title: "Architecture & Design",
    desc: "System architecture, database schemas, API contracts, and UI/UX wireframes — all designed for scalability.",
  },
  {
    icon: GitBranch,
    num: "03",
    title: "Development",
    desc: "Agile sprints with regular demos. Clean, tested code delivered iteratively so you see progress every week.",
  },
  {
    icon: TestTube,
    num: "04",
    title: "Testing & QA",
    desc: "Automated testing, performance profiling, security audits, and user acceptance testing before launch.",
  },
  {
    icon: Cloud,
    num: "05",
    title: "Deployment",
    desc: "Zero-downtime deployments, monitoring setup, and production hardening across your chosen cloud platform.",
  },
  {
    icon: Workflow,
    num: "06",
    title: "Support & Evolution",
    desc: "Post-launch support, performance monitoring, feature iterations, and ongoing maintenance to keep things running.",
  },
];

const STACK = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "GraphQL", category: "API" },
  { name: "React Native", category: "Mobile" },
  { name: "Tailwind CSS", category: "Styling" },
];

const RESULTS = [
  { num: "80+", label: "Apps Delivered" },
  { num: "99.9%", label: "Uptime SLA" },
  { num: "40%", label: "Faster Time to Market" },
  { num: "24/7", label: "Support Coverage" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { amount: 0.3 },
});

const SoftwarePage = () => (
  <div>
    <Navbar />
    <FloatingIcons />

    {/* ============ HERO ============ */}
    <section className="sw-hero">
      <div className="sw-hero-inner">
        <motion.div className="sw-hero-content" {...fadeUp(0.1)}>
          <span className="sw-eyebrow">
            <span className="sw-eyebrow-dot" />
            Software Development
          </span>
          <h1 className="sw-hero-title">
            Custom Software
            <br />
            <span className="sw-hero-accent">Built for Your Business</span>
          </h1>
          <p className="sw-hero-sub">
            From web platforms to mobile apps, CRMs to enterprise systems — we
            build software that streamlines operations, delights users, and
            scales with your growth.
          </p>
          <div className="sw-hero-actions">
            <a href="/contact" className="hero-btn primary">
              Start a Project <ArrowRight size={16} />
            </a>
            <a href="#capabilities" className="sw-hero-text-link">
              See What We Build <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>

        <motion.div className="sw-hero-visual" {...fadeUp(0.2)}>
          <div className="sw-hero-code-block">
            <div className="sw-code-bar">
              <span className="sw-code-dot sw-dot-red" />
              <span className="sw-code-dot sw-dot-yellow" />
              <span className="sw-code-dot sw-dot-green" />
              <span className="sw-code-filename">app.tsx</span>
            </div>
            <pre className="sw-code">
              <code>
                <span className="sw-code-kw">const</span>{" "}
                <span className="sw-code-fn">Dashboard</span>{" "}
                <span className="sw-code-op">=</span>{" "}
                <span className="sw-code-kw">()</span>{" "}
                <span className="sw-code-op">=&gt;</span>{" "}
                <span className="sw-code-br">{"{"}</span>
                {"\n"}
                {"  "}
                <span className="sw-code-kw">const</span>{" "}
                <span className="sw-code-var">data</span>{" "}
                <span className="sw-code-op">=</span>{" "}
                <span className="sw-code-fn">useAnalytics</span>
                <span className="sw-code-br">()</span>;
                {"\n"}
                {"  "}
                <span className="sw-code-kw">return</span>{" "}
                <span className="sw-code-br">{"("}</span>
                {"\n"}
                {"    "}
                <span className="sw-code-tag">&lt;Layout&gt;</span>
                {"\n"}
                {"      "}
                <span className="sw-code-tag">&lt;MetricsGrid</span>{" "}
                <span className="sw-code-attr">data</span>
                <span className="sw-code-op">=</span>
                <span className="sw-code-br">{"{"}</span>
                <span className="sw-code-var">data</span>
                <span className="sw-code-br">{"}"}</span>{" "}
                <span className="sw-code-tag">/&gt;</span>
                {"\n"}
                {"      "}
                <span className="sw-code-tag">&lt;ChartPanel</span>{" "}
                <span className="sw-code-attr">realtime</span>{" "}
                <span className="sw-code-tag">/&gt;</span>
                {"\n"}
                {"    "}
                <span className="sw-code-tag">&lt;/Layout&gt;</span>
                {"\n"}
                {"  "}
                <span className="sw-code-br">{")"}</span>;
                {"\n"}
                <span className="sw-code-br">{"}"}</span>;
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>

    {/* ============ RESULTS BAR ============ */}
    <section className="sw-results">
      <div className="sw-results-inner">
        {RESULTS.map((r, i) => (
          <motion.div
            key={r.label}
            className="sw-result"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ amount: 0.5 }}
          >
            <strong className="sw-result-num">{r.num}</strong>
            <span className="sw-result-label">{r.label}</span>
          </motion.div>
        ))}
      </div>
    </section>

    {/* ============ CAPABILITIES ============ */}
    <section className="sw-capabilities" id="capabilities">
      <div className="sw-cap-inner">
        <motion.div className="sw-cap-header" {...fadeUp(0.1)}>
          <span className="sw-eyebrow">
            <span className="sw-eyebrow-dot" />
            What We Build
          </span>
          <h2 className="sw-cap-title">
            End-to-End <span className="sw-hero-accent">Development</span>
          </h2>
          <p className="sw-cap-sub">
            Full-stack capabilities across web, mobile, backend, cloud, and
            security — everything you need to launch and scale.
          </p>
        </motion.div>

        <div className="sw-cap-grid">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.title}
              className="sw-cap-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ amount: 0.3 }}
            >
              <span className="sw-cap-icon">
                <cap.icon size={22} strokeWidth={1.8} />
              </span>
              <h4 className="sw-cap-card-title">{cap.title}</h4>
              <p className="sw-cap-card-desc">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ============ PROCESS ============ */}
    <section className="sw-process">
      <div className="sw-process-inner">
        <motion.div className="sw-process-header" {...fadeUp(0.1)}>
          <span className="sw-eyebrow">
            <span className="sw-eyebrow-dot" />
            Our Process
          </span>
          <h2 className="sw-process-title">
            How We <span className="sw-hero-accent">Build</span>
          </h2>
        </motion.div>

        <div className="sw-process-grid">
          {PROCESS.map((step, i) => (
            <motion.div
              key={step.num}
              className="sw-process-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ amount: 0.3 }}
            >
              <span className="sw-process-num">{step.num}</span>
              <span className="sw-process-icon">
                <step.icon size={20} strokeWidth={1.8} />
              </span>
              <h4 className="sw-process-card-title">{step.title}</h4>
              <p className="sw-process-card-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ============ PLATFORM ============ */}
    <PlatformFeatures />

    {/* ============ TECH STACK ============ */}
    <section className="sw-stack">
      <div className="sw-stack-inner">
        <motion.div className="sw-stack-header" {...fadeUp(0.1)}>
          <span className="sw-eyebrow">
            <span className="sw-eyebrow-dot" />
            Tech Stack
          </span>
          <h2 className="sw-stack-title">
            Tools of the <span className="sw-hero-accent">Trade</span>
          </h2>
        </motion.div>

        <div className="sw-stack-grid">
          {STACK.map((tech, i) => (
            <motion.div
              key={tech.name}
              className="sw-stack-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ amount: 0.5 }}
            >
              <span className="sw-stack-name">{tech.name}</span>
              <span className="sw-stack-cat">{tech.category}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CTA />
    <Footer />
  </div>
);

export default SoftwarePage;
