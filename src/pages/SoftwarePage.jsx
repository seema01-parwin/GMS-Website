import React, { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars -- motion is used via <motion.div> JSX member expressions
import { motion, useScroll, useTransform } from "motion/react";
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
  Flag,
  Rocket,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PlatformFeatures from "../components/PlatformFeatures";
import FloatingIcons from "../components/FloatingIcons";
import CTA from "../sections/CTA";
import crmImg from "../assets/CRM Platforms.png";
import portfolioImg from "../assets/Portfolio Websites.png";
import companySiteImg from "../assets/Company Websites.png";
import mobileAppImg from "../assets/Mobile Applications.png";
import tradingImg from "../assets/Trading Platforms.png";
import "./SoftwarePage.css";

const CAPABILITIES = [
  {
    icon: Globe,
    title: "Web Applications",
    desc: "Modern, responsive web apps built with React, Next.js, and cutting-edge frameworks — fast, scalable, and maintainable.",
    details: [
      "Responsive, SEO-friendly interfaces",
      "Server-side rendering & static generation",
      "Reusable design systems & component libraries",
      "Progressive web apps (PWA) with offline support",
    ],
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Native and cross-platform mobile applications for iOS and Android that deliver seamless user experiences.",
    details: [
      "Native iOS & Android development",
      "Cross-platform builds from a single codebase",
      "Offline-first data & push notifications",
      "App Store and Play Store release support",
    ],
    stack: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    icon: Database,
    title: "Backend & APIs",
    desc: "Robust REST and GraphQL APIs, microservices architecture, and database design built for scale and reliability.",
    details: [
      "REST & GraphQL API development",
      "Microservices and event-driven design",
      "Database modelling, indexing & optimisation",
      "Third-party integrations & secure webhooks",
    ],
    stack: ["Node.js", "Laravel", "PostgreSQL", "Redis"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "AWS, Azure, and GCP deployments with CI/CD pipelines, containerisation, and infrastructure-as-code.",
    details: [
      "Cloud architecture on AWS, Azure & GCP",
      "CI/CD pipelines & release automation",
      "Containers and orchestration",
      "Infrastructure-as-code, monitoring & alerting",
    ],
    stack: ["Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  },
  {
    icon: Lock,
    title: "Security",
    desc: "Enterprise-grade security with encryption, authentication, authorization, and compliance standards baked in from day one.",
    details: [
      "Authentication & authorization (SSO, MFA)",
      "Encryption at rest and in transit",
      "Vulnerability assessment & hardening",
      "Secure coding and compliance-ready practices",
    ],
    stack: ["OAuth 2.0", "JWT", "OWASP", "TLS"],
  },
  {
    icon: Code2,
    title: "Custom Software",
    desc: "Tailored solutions for unique business needs — CRMs, ERPs, dashboards, and internal tools built around your workflow.",
    details: [
      "CRM & ERP systems built to fit your process",
      "Admin dashboards & internal tools",
      "Workflow automation & reporting",
      "Legacy system modernisation",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "REST"],
  },
  {
    icon: Briefcase,
    title: "Business Process Outsourcing",
    desc: "Reliable back-office support and operational services that help clients streamline processes, cut costs, and scale confidently.",
    details: [
      "Back-office & data operations",
      "Customer support workflows",
      "Process documentation & SLAs",
      "Scalable dedicated teams",
    ],
    stack: ["Helpdesk", "CRM", "Data Ops", "QA"],
  },
  {
    icon: MessagesSquare,
    title: "IT Consulting",
    desc: "Strategic technology advisory — architecture reviews, digital transformation roadmaps, and technology selection to guide your decisions.",
    details: [
      "Architecture & code reviews",
      "Digital transformation roadmaps",
      "Technology selection & due diligence",
      "Team augmentation & training",
    ],
    stack: ["Advisory", "Audits", "Roadmaps", "Training"],
  },
];

const PROCESS = [
  {
    icon: Layers,
    num: "01",
    phase: "Phase 01",
    timeline: "Week 1 – 2",
    progress: "15%",
    title: "Discovery & Planning",
    desc: "We dive deep into your business goals, user needs, and technical requirements to map out a clear roadmap.",
    deliverables: ["Project roadmap", "Requirements doc", "Scope & estimate"],
  },
  {
    icon: Cpu,
    num: "02",
    phase: "Phase 02",
    timeline: "Week 2 – 4",
    progress: "30%",
    title: "Architecture & Design",
    desc: "System architecture, database schemas, API contracts, and UI/UX wireframes — all designed for scalability.",
    deliverables: ["System architecture", "UI/UX prototypes", "Database schema"],
  },
  {
    icon: GitBranch,
    num: "03",
    phase: "Phase 03",
    timeline: "Week 4 – 10",
    progress: "60%",
    title: "Development",
    desc: "Agile sprints with regular demos. Clean, tested code delivered iteratively so you see progress every week.",
    deliverables: ["Sprint demos", "API contracts", "Weekly builds"],
  },
  {
    icon: TestTube,
    num: "04",
    phase: "Phase 04",
    timeline: "Week 10 – 12",
    progress: "80%",
    title: "Testing & QA",
    desc: "Automated testing, performance profiling, security audits, and user acceptance testing before launch.",
    deliverables: ["Automated test suites", "Security audit", "UAT sign-off"],
  },
  {
    icon: Cloud,
    num: "05",
    phase: "Phase 05",
    timeline: "Week 12 – 13",
    progress: "95%",
    title: "Deployment",
    desc: "Zero-downtime deployments, monitoring setup, and production hardening across your chosen cloud platform.",
    deliverables: ["Zero-downtime launch", "Live monitoring", "Runbooks"],
  },
  {
    icon: Workflow,
    num: "06",
    phase: "Phase 06",
    timeline: "Ongoing",
    progress: "100%",
    title: "Support & Evolution",
    desc: "Post-launch support, performance monitoring, feature iterations, and ongoing maintenance to keep things running.",
    deliverables: ["24/7 monitoring", "Monthly iterations", "SLA support"],
  },
];

const STACK = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Laravel", category: "Backend" },
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

// Placeholder imagery — swap these for real project screens when ready.
const BUILDS = [
  {
    title: "CRM Platforms",
    tag: "Business Systems",
    desc: "Pipelines, client records, task tracking, and reporting in one operational system.",
    image: crmImg,
  },
  {
    title: "Portfolio Websites",
    tag: "Website",
    desc: "Fast, visual portfolio sites that present your work and turn visits into enquiries.",
    image: portfolioImg,
  },
  {
    title: "Company Websites",
    tag: "Website",
    desc: "Corporate sites with services, careers, content management, and lead capture built in.",
    image: companySiteImg,
  },
  {
    title: "Mobile Applications",
    tag: "Mobile App",
    desc: "iOS and Android apps with offline support, notifications, and secure sync.",
    image: mobileAppImg,
  },
  {
    title: "Trading Platforms",
    tag: "Fintech",
    desc: "Real-time market data, order flows, charts, and account dashboards in one place.",
    image: tradingImg,
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { amount: 0.3 },
});

const SoftwarePage = () => {
  const [capPaused, setCapPaused] = useState(false);
  const capTrackRef = useRef(null);
  const roadmapRef = useRef(null);

  // roadmap "road" fills in as the user scrolls through the phases
  const { scrollYProgress: roadProgress } = useScroll({
    target: roadmapRef,
    offset: ["start 0.75", "end 0.55"],
  });
  const roadHeight = useTransform(roadProgress, [0, 1], ["0%", "100%"]);

  // auto-advance the capabilities rail one card at a time
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || capPaused) return undefined;

    const id = setInterval(() => {
      const track = capTrackRef.current;
      if (!track) return;

      const card = track.querySelector(".sw-cap-card");
      if (!card) return;

      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      const step = card.offsetWidth + gap;
      const max = track.scrollWidth - track.clientWidth;
      if (max <= 0 || step <= 0) return;

      const current = Math.round(track.scrollLeft / step);
      const maxIndex = Math.round(max / step);
      const next = current >= maxIndex ? 0 : current + 1;

      track.scrollTo({ left: Math.min(next * step, max), behavior: "smooth" });
    }, 3600);

    return () => clearInterval(id);
  }, [capPaused]);

  return (
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
          <div className="sw-cap-head-main">
            <span className="sw-eyebrow">
              <span className="sw-eyebrow-dot" />
              What We Build
            </span>
            <h2 className="sw-cap-title">
              End-to-End <span className="sw-hero-accent">Development</span>
            </h2>
          </div>
          <div className="sw-cap-head-side">
            <p className="sw-cap-sub">
              Full-stack capabilities across web, mobile, backend, cloud, and
              security — everything you need to launch and scale.
            </p>
            <span className="sw-cap-count">
              <strong>{String(CAPABILITIES.length).padStart(2, "0")}</strong>
              core capabilities
            </span>
          </div>
        </motion.div>

        <div
          className="sw-cap-grid"
          ref={capTrackRef}
          onMouseEnter={() => setCapPaused(true)}
          onMouseLeave={() => setCapPaused(false)}
        >
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.title}
              className={`sw-cap-card${i === 0 ? " sw-cap-card--feature" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              viewport={{ amount: 0.3, once: true }}
            >
              <span className="sw-cap-index">{String(i + 1).padStart(2, "0")}</span>
              <span className="sw-cap-icon">
                <cap.icon size={22} strokeWidth={1.8} />
              </span>
              <h4 className="sw-cap-card-title">{cap.title}</h4>
              <p className="sw-cap-card-desc">{cap.desc}</p>
              {i === 0 && (
                <span className="sw-cap-chips">
                  {cap.stack.map((tech) => (
                    <span key={tech} className="sw-cap-chip">
                      {tech}
                    </span>
                  ))}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ============ EXAMPLE BUILDS ============ */}
    <section className="sw-builds" id="examples">
      <div className="sw-builds-inner">
        <motion.div className="sw-builds-header" {...fadeUp(0.1)}>
          <div className="sw-builds-head-main">
            <h2 className="sw-builds-title">
              Solutions We <span className="sw-hero-accent">Build</span>
            </h2>
          </div>
          <div className="sw-builds-head-side">
            <p className="sw-builds-sub">
              A snapshot of the products we design and ship — from business CRMs
              and portfolio sites to mobile apps and trading platforms.
            </p>
          </div>
        </motion.div>

        <div className="sw-builds-grid">
          {BUILDS.map((item, i) => (
            <motion.article
              key={item.title}
              className={`sw-build-card${i < 2 ? " sw-build-card--wide" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ amount: 0.2 }}
            >
              <div className="sw-build-media">
                <img src={item.image} alt={item.title} loading="lazy" />
                <span className="sw-build-wash" aria-hidden="true" />
                <span className="sw-build-tag">{item.tag}</span>
                <span className="sw-build-index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="sw-build-body">
                <h3 className="sw-build-title">{item.title}</h3>
                <p className="sw-build-desc">{item.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    {/* ============ PROCESS — BUILD ROADMAP ============ */}
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
          <p className="sw-process-sub">
            A six-phase roadmap that turns an idea into a shipped, supported
            product — with clear checkpoints at every milestone.
          </p>
        </motion.div>

        <div className="sw-roadmap" ref={roadmapRef}>
          {/* the road */}
          <span className="sw-road-track" aria-hidden="true" />
          <motion.span
            className="sw-road-fill"
            style={{ height: roadHeight }}
            aria-hidden="true"
          />

          {/* start marker */}
          <motion.div className="sw-road-cap sw-road-cap--start" {...fadeUp(0)}>
            <span className="sw-road-cap-icon">
              <Flag size={15} strokeWidth={2} />
            </span>
            <span className="sw-road-cap-label">Kick-off</span>
          </motion.div>

          {PROCESS.map((step, i) => (
            <motion.div
              key={step.num}
              className={`sw-road-step${i % 2 === 1 ? " sw-road-step--alt" : ""}`}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              viewport={{ amount: 0.35, once: true }}
            >
              {/* milestone node on the road */}
              <div className="sw-road-node" aria-hidden="true">
                <span className="sw-road-node-ring" />
                <span className="sw-road-node-core">
                  <step.icon size={18} strokeWidth={1.9} />
                </span>
              </div>

              {/* content card */}
              <article className="sw-road-card">
                <header className="sw-road-card-head">
                  <span className="sw-road-num">{step.num}</span>
                  <div className="sw-road-meta">
                    <span className="sw-road-phase">{step.phase}</span>
                    <span className="sw-road-timeline">{step.timeline}</span>
                  </div>
                  <span className="sw-road-progress">
                    <span
                      className="sw-road-progress-fill"
                      style={{ width: step.progress }}
                    />
                  </span>
                </header>
                <h4 className="sw-road-card-title">{step.title}</h4>
                <p className="sw-road-card-desc">{step.desc}</p>
                <ul className="sw-road-tags">
                  {step.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </motion.div>
          ))}

          {/* end marker */}
          <motion.div className="sw-road-cap sw-road-cap--end" {...fadeUp(0)}>
            <span className="sw-road-cap-icon">
              <Rocket size={15} strokeWidth={2} />
            </span>
            <span className="sw-road-cap-label">Launch &amp; Beyond</span>
          </motion.div>
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
};

export default SoftwarePage;
