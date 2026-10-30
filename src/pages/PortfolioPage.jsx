import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars -- motion is used via <motion.div> JSX member expressions
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  HardHat,
  Code2,
  Layers,
  Headset,
  MapPin,
  CalendarDays,
  Clock,
  Briefcase,
  X,
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  FileText,
  Users,
  Target,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../sections/CTA";
import { REVIEWS } from "../data/constants";
import { fadeUp, zoomIn } from "../utils/animations";

import realEstateImg from "../assets/Real-Estate.jpg";
import retailImg from "../assets/City Centre Retail Space.jpg";
import infrastructureImg from "../assets/services/infrastructure.jpg";
import masterPlanImg from "../assets/services/master-planning.jpg";
import portalImg from "../assets/services/client-portal.jpg";
import interiorImg from "../assets/services/interior-design.jpg";
import apartmentImg from "../assets/Modern Apartment.jpg";
import supportImg from "../assets/services/dedicated-support.jpg";
import "./PortfolioPage.css";

const DISCIPLINES = [
  { name: "All", icon: Sparkles },
  { name: "Real Estate", icon: Building2 },
  { name: "Infrastructure", icon: HardHat },
  { name: "Master Planning", icon: Layers },
  { name: "Software & IT", icon: Code2 },
  { name: "Interiors", icon: Users },
  { name: "BPO & Support", icon: Headset },
];

const CASES = [
  {
    id: "mixed-use-nugegoda",
    index: "01",
    title: "Mixed-Use Development, Nugegoda",
    sector: "Real Estate",
    client: "Horizon Properties",
    location: "Nugegoda, Sri Lanka",
    year: "2025",
    duration: "14 months",
    services: ["Master Planning", "Infrastructure", "Interior Design"],
    brief:
      "A fragmented two-acre plot with no road access, needing both residential and commercial value extracted from the same footprint.",
    approach:
      "We ran master planning, civil access works, and vertical construction as one programme — phasing the site so trading continued throughout, with a shared drawing and costing model across all three disciplines.",
    outcome:
      "Delivered, occupied, and handed over with commercial units trading from the first phase.",
    metrics: [
      { num: "18", label: "Residential Units" },
      { num: "2", label: "Retail Units" },
      { num: "0", label: "Site Stoppages" },
    ],
    image: realEstateImg,
  },
  {
    id: "highway-section-4",
    index: "02",
    title: "Highway Expansion — Section 4",
    sector: "Infrastructure",
    client: "Lanka Construction Ltd.",
    location: "Colombo, Sri Lanka",
    year: "2024",
    duration: "11 months",
    services: ["Infrastructure", "Project Management", "Site Documentation"],
    brief:
      "Two point four kilometres of road widening to be delivered against live traffic, with utilities that had to be relocated before a single barrier could move.",
    approach:
      "Night-shift working with staged diversions, a weekly progress photo record tied to the programme, and a joint quality protocol signed off with the client engineers at every stage.",
    outcome:
      "Completed two weeks ahead of the contracted programme and under the submitted budget.",
    metrics: [
      { num: "2.4km", label: "Delivered" },
      { num: "2 wks", label: "Ahead of Schedule" },
      { num: "98%", label: "Quality Checks Passed" },
    ],
    image: infrastructureImg,
  },
  {
    id: "master-plan-50-acre",
    index: "03",
    title: "50-Acre Master Plan",
    sector: "Master Planning",
    client: "Island Infrastructure Co.",
    location: "Outer Colombo",
    year: "2023",
    duration: "9 months",
    services: ["Master Planning", "Infrastructure", "Real Estate Advisory"],
    brief:
      "Raw land with a development ambition but no framework — no road hierarchy, no phasing, and no way to sell or fund it as a single parcel.",
    approach:
      "We produced a full development roadmap: zoning, road and utility corridors, a four-phase build sequence, and a costed infrastructure strategy, then handed it to execution partners with a monitoring framework.",
    outcome:
      "The plan moved from drawing to funded development, with the first phase already in delivery.",
    metrics: [
      { num: "50 ac", label: "Planned" },
      { num: "4", label: "Phases Defined" },
      { num: "3", label: "Delivery Partners" },
    ],
    image: masterPlanImg,
  },
  {
    id: "client-portal-platform",
    index: "04",
    title: "Client Portal & Programme Tracking",
    sector: "Software & IT",
    client: "Skyline Developers",
    location: "Nugegoda, Sri Lanka",
    year: "2025",
    duration: "16 weeks",
    services: ["Software Development", "UI/UX Design", "Hosting & Support"],
    brief:
      "Project status was scattered across email threads and spreadsheets, so nobody could answer a simple question about a live site without a phone call.",
    approach:
      "We designed and built a role-based client portal with live milestone tracking, in-platform approvals, document control, and automated reporting — deployed and handed over with training.",
    outcome:
      "Status reporting became a pull from live data instead of a weekly chase, and it runs as a maintained service.",
    metrics: [
      { num: "10+ hrs", label: "Saved Weekly" },
      { num: "100%", label: "Approvals Tracked" },
      { num: "16 wks", label: "To Launch" },
    ],
    image: portalImg,
  },
  {
    id: "head-office-fitout",
    index: "05",
    title: "Head Office Interior Fit-Out",
    sector: "Interiors",
    client: "Urban Spaces Colombo",
    location: "Colombo 07, Sri Lanka",
    year: "2024",
    duration: "10 weeks",
    services: ["Interior Design", "Project Management", "Fit-Out Execution"],
    brief:
      "A 2,400 square foot headquarters that had to feel like the brand it houses, without closing the business for a single working day.",
    approach:
      "Space planning and 3D renders first, then a phased fit-out with night works and weekend access — furniture, services, and finishes sequenced to keep the floors live.",
    outcome:
      "Delivered on a live building with no interruption to operations, and signed off on the final day.",
    metrics: [
      { num: "2,400", label: "Sq Ft" },
      { num: "2", label: "Floors Live" },
      { num: "0", label: "Days Closed" },
    ],
    image: interiorImg,
  },
  {
    id: "modern-apartment-residences",
    index: "06",
    title: "Modern Apartment Residences",
    sector: "Interiors",
    client: "Horizon Properties",
    location: "Colombo, Sri Lanka",
    year: "2024",
    duration: "7 months",
    services: ["Interior Design", "Fit-Out Execution", "Furnishing"],
    brief:
      "An apartment block where every unit had to feel considered rather than catalogue-specified, within a fixed per-unit cost ceiling.",
    approach:
      "A standardised material palette with a rotating scheme per floor, detailed once and repeated across units, so quality held while the programme stayed short.",
    outcome:
      "Every unit delivered to the same standard, and the developer moved the specification across the next block.",
    metrics: [
      { num: "12", label: "Units Delivered" },
      { num: "1", label: "Standardised Palette" },
      { num: "7 mo", label: "Programme" },
    ],
    image: apartmentImg,
  },
  {
    id: "retail-space-positioning",
    index: "07",
    title: "City Centre Retail Space",
    sector: "Real Estate",
    client: "TechVentures SL",
    location: "Nugegoda, Sri Lanka",
    year: "2024",
    duration: "4 months",
    services: ["Real Estate Advisory", "Interior Design", "Brand Fit-Out"],
    brief:
      "A landlord with a high-footfall unit and no tenant, needing a brand-matched concept that could be presented to serious occupiers.",
    approach:
      "We repositioned the space with a branded fit-out proposal, footfall and catchment analysis, and a leasing package, then ran the fit-out for the incoming occupier.",
    outcome:
      "Let within the first quarter of launch, with the interior executed to the agreed specification.",
    metrics: [
      { num: "< 3 mo", label: "To Let" },
      { num: "1", label: "Tenant Signed" },
      { num: "4 mo", label: "To Fit-Out" },
    ],
    image: retailImg,
  },
  {
    id: "support-operations",
    index: "08",
    title: "24/7 Support Operations",
    sector: "BPO & Support",
    client: "TechVentures SL",
    location: "Nugegoda, Sri Lanka",
    year: "2025",
    duration: "Ongoing",
    services: ["Customer Support", "IT Help Desk", "Compliance"],
    brief:
      "Support demand that never stopped, and no in-house team able to carry it without pushing quality down at the night-shift edges.",
    approach:
      "A dedicated floor in Nugegoda with domain-trained agents, a ticketing and escalation framework, and a monthly quality review — with follow-the-sun coverage for the queues that run overnight.",
    outcome:
      "A stable, audited operation running at agreed service levels without adding headcount to the client.",
    metrics: [
      { num: "98%", label: "SLA Adherence" },
      { num: "24/7", label: "Coverage" },
      { num: "40%", label: "Lower Cost / Ticket" },
    ],
    image: supportImg,
  },
];

const ENGAGEMENT_MODELS = [
  {
    icon: Target,
    title: "Full Delivery",
    desc: "We own the outcome end to end — survey, design, build, documentation, and handover — and carry the accountability with it.",
  },
  {
    icon: Users,
    title: "Joint Delivery",
    desc: "We pair with your programme team, supplying the technical and delivery capacity your in-house side does not have.",
  },
  {
    icon: FileText,
    title: "Advisory & Documentation",
    desc: "Drawings, cost plans, site recording, and reporting only — for clients who run delivery themselves and need a rigorous record.",
  },
];

const PortfolioPage = () => {
  const [filter, setFilter] = useState("All");
  const [openCase, setOpenCase] = useState(null);

  const visible = useMemo(
    () => (filter === "All" ? CASES : CASES.filter((c) => c.sector === filter)),
    [filter]
  );

  const counts = useMemo(() => {
    const map = { All: CASES.length };
    CASES.forEach((c) => {
      map[c.sector] = (map[c.sector] || 0) + 1;
    });
    return map;
  }, []);

  const close = useCallback(() => setOpenCase(null), []);

  const step = useCallback(
    (dir) =>
      setOpenCase((cur) => (cur === null ? cur : (cur + dir + visible.length) % visible.length)),
    [visible.length]
  );

  useEffect(() => {
    if (openCase === null) return undefined;

    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };

    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [openCase, close, step]);

  const scrollToCase = (id) => {
    const el = document.getElementById(`pf-case-${id}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const active = openCase === null ? null : visible[openCase];

  return (
    <div>
      <Navbar />

      {/* ============ HERO / DOSSIER COVER ============ */}
      <section className="pf-hero">
        <div className="pf-hero-inner">
          <motion.div className="pf-hero-copy" {...fadeUp(0.1)}>
            <span className="pf-eyebrow">
              <span className="pf-eyebrow-dot" />
              Selected Work 2023 — 2025
            </span>

            <h1 className="pf-hero-title">
              A Portfolio of
              <br />
              <span className="pf-hero-accent">Delivered Work</span>
            </h1>

            <p className="pf-hero-sub">
              Eight projects documented end to end — from a fifty-acre master
              plan to a support floor running every night of the year. Every
              entry below is work our own teams planned, built, and handed over.
            </p>

            <div className="pf-hero-actions">
              <Link to="/contact" className="hero-btn primary">
                Discuss a Project <ArrowRight size={16} />
              </Link>
              <a href="#pf-work" className="pf-hero-text">
                Open the Index <ArrowRight size={14} />
              </a>
            </div>

            <div className="pf-hero-facts">
              <span>
                <Briefcase size={14} strokeWidth={1.9} />
                8 selected projects
              </span>
              <span>
                <MapPin size={14} strokeWidth={1.9} />
                Delivered in Sri Lanka
              </span>
              <span>
                <CheckCircle2 size={14} strokeWidth={1.9} />
                In-house delivery
              </span>
            </div>
          </motion.div>

          {/* Index panel */}
          <motion.aside className="pf-index" {...fadeUp(0.2)}>
            <div className="pf-index-head">
              <span>Index</span>
              <span className="pf-index-count">{String(visible.length).padStart(2, "0")} / {String(CASES.length).padStart(2, "0")}</span>
            </div>

            <ul className="pf-index-list">
              {visible.map((c) => (
                <li key={c.id}>
                  <button type="button" className="pf-index-item" onClick={() => scrollToCase(c.id)}>
                    <span className="pf-index-num">{c.index}</span>
                    <span className="pf-index-title">{c.title}</span>
                    <span className="pf-index-sector">{c.sector}</span>
                    <ArrowUpRight className="pf-index-arrow" size={15} strokeWidth={1.9} />
                  </button>
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>
      </section>

      {/* ============ NUMBERS ============ */}
      <section className="pf-numbers">
        <div className="pf-numbers-inner">
          {[
            { num: "8", label: "Selected Projects" },
            { num: "6", label: "Disciplines" },
            { num: "24/7", label: "Operations Run" },
            { num: "0", label: "Subcontracted Delivery" },
          ].map((n, i) => (
            <motion.div
              key={n.label}
              className="pf-number"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ amount: 0.4 }}
            >
              <strong className="pf-number-num">{n.num}</strong>
              <span className="pf-number-label">{n.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============ FILTERS ============ */}
      <section className="pf-work" id="pf-work">
        <div className="pf-work-inner">
          <motion.div className="pf-work-head" {...fadeUp(0.1)}>
            <div>
              <span className="pf-eyebrow">
                <span className="pf-eyebrow-dot" />
                Case Studies
              </span>
              <h2 className="pf-work-title">
                The Work, <span className="pf-hero-accent">Dossier by Dossier</span>
              </h2>
            </div>

            <div className="pf-filters">
              {DISCIPLINES.map((d) => {
                const Icon = d.icon;
                return (
                  <button
                    key={d.name}
                    type="button"
                    className={`pf-filter${filter === d.name ? " pf-filter--active" : ""}`}
                    onClick={() => {
                      setFilter(d.name);
                      setOpenCase(null);
                    }}
                    aria-pressed={filter === d.name}
                  >
                    <Icon size={13} strokeWidth={1.9} />
                    {d.name}
                    <span className="pf-filter-count">{counts[d.name] || 0}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          <div className="pf-cases">
            {visible.map((c, i) => (
              <motion.article
                key={c.id}
                id={`pf-case-${c.id}`}
                className="pf-case"
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: Math.min(i, 3) * 0.08 }}
                viewport={{ amount: 0.15 }}
              >
                <div className="pf-case-grid">
                  <div className="pf-case-media">
                    <img src={c.image} alt={c.title} loading="lazy" />
                    <span className="pf-case-index-badge">{c.index}</span>
                    <button
                      type="button"
                      className="pf-case-open"
                      onClick={() => setOpenCase(i)}
                      aria-label={`Open dossier: ${c.title}`}
                    >
                      <FileText size={17} strokeWidth={1.9} />
                      Open Dossier
                    </button>
                  </div>

                  <div className="pf-case-body">
                    <span className="pf-case-sector">{c.sector}</span>
                    <h3 className="pf-case-title">{c.title}</h3>

                    <dl className="pf-case-meta">
                      <div>
                        <dt>Client</dt>
                        <dd>{c.client}</dd>
                      </div>
                      <div>
                        <dt>Location</dt>
                        <dd>{c.location}</dd>
                      </div>
                      <div>
                        <dt>Year</dt>
                        <dd>{c.year}</dd>
                      </div>
                      <div>
                        <dt>Duration</dt>
                        <dd>{c.duration}</dd>
                      </div>
                    </dl>

                    <p className="pf-case-brief">{c.brief}</p>

                    <div className="pf-case-metrics">
                      {c.metrics.map((m) => (
                        <div key={m.label} className="pf-case-metric">
                          <strong>{m.num}</strong>
                          <span>{m.label}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pf-case-tags">
                      {c.services.map((s) => (
                        <span key={s} className="pf-case-tag">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ENGAGEMENT MODELS ============ */}
      <section className="pf-models">
        <div className="pf-models-inner">
          <motion.div className="pf-sec-head" {...fadeUp(0.1)}>
            <span className="pf-eyebrow">
              <span className="pf-eyebrow-dot" />
              How We Engage
            </span>
            <h2 className="pf-sec-title">
              Three Ways to <span className="pf-hero-accent">Work With Us</span>
            </h2>
            <p className="pf-sec-sub">
              The portfolio above was delivered under all three models. Pick the
              one that matches your programme.
            </p>
          </motion.div>

          <div className="pf-model-grid">
            {ENGAGEMENT_MODELS.map((m, i) => (
              <motion.div
                key={m.title}
                className="pf-model"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ amount: 0.25 }}
              >
                <span className="pf-model-icon">
                  <m.icon size={22} strokeWidth={1.8} />
                </span>
                <h3 className="pf-model-title">{m.title}</h3>
                <p className="pf-model-desc">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CLIENT MARQUEE ============ */}
      <section className="pf-clients" aria-label="Clients we have worked with">
        <div className="pf-clients-track">
          {[...REVIEWS, ...REVIEWS].map((r, i) => (
            <span key={`${r.id}-${i}`} className="pf-client-item">
              {r.company}
              <span className="pf-client-dot" />
            </span>
          ))}
        </div>
      </section>

      {/* ============ TESTIMONIAL ============ */}
      <section className="pf-quote">
        <motion.div
          className="pf-quote-inner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
        >
          <span className="pf-quote-mark">
            <Quote size={28} strokeWidth={1.4} />
          </span>

          <div className="pf-quote-stars">
            {Array.from({ length: 5 }, (_, si) => (
              <Star key={si} size={14} fill="currentColor" strokeWidth={0} />
            ))}
          </div>

          <blockquote className="pf-quote-text">{REVIEWS[5].text}</blockquote>

          <div className="pf-quote-author">
            <span className="pf-quote-avatar">{REVIEWS[5].avatar}</span>
            <span className="pf-quote-author-info">
              <strong>{REVIEWS[5].name}</strong>
              <span>
                {REVIEWS[5].role}, {REVIEWS[5].company}
              </span>
            </span>
            <span className="pf-quote-service">{REVIEWS[5].service}</span>
          </div>
        </motion.div>
      </section>

      {/* ============ CTA ============ */}
      <section className="pf-cta">
        <div className="pf-cta-inner">
          <motion.div {...fadeUp(0.1)}>
            <span className="pf-eyebrow">
              <span className="pf-eyebrow-dot" />
              Next Project
            </span>
            <h2 className="pf-cta-title">
              Let's Build the Next <span className="pf-hero-accent">Case Study</span>
            </h2>
            <p className="pf-cta-sub">
              Send us the brief, the site, or the half-formed idea. We will come
              back with a plan, a programme, and a price.
            </p>
          </motion.div>

          <motion.div className="pf-cta-actions" {...zoomIn(0.2)}>
            <Link to="/contact" className="hero-btn primary">
              Start a Conversation <ArrowRight size={16} />
            </Link>
            <Link to="/gallery" className="pf-cta-text">
              See the photo gallery
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============ DOSSIER OVERLAY ============ */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="pf-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
          >
            <button
              type="button"
              className="pf-overlay-close"
              onClick={close}
              aria-label="Close dossier"
            >
              <X size={20} strokeWidth={1.9} />
            </button>

            <button
              type="button"
              className="pf-overlay-nav pf-overlay-nav--prev"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous project"
            >
              <ChevronLeft size={26} strokeWidth={1.8} />
            </button>

            <button
              type="button"
              className="pf-overlay-nav pf-overlay-nav--next"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next project"
            >
              <ChevronRight size={26} strokeWidth={1.8} />
            </button>

            <motion.div
              className="pf-overlay-grid"
              key={active.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pf-overlay-media">
                <img src={active.image} alt={active.title} />
                <span className="pf-overlay-index">{active.index}</span>
              </div>

              <aside className="pf-overlay-side">
                <span className="pf-overlay-sector">{active.sector}</span>
                <h2 className="pf-overlay-title">{active.title}</h2>

                <dl className="pf-overlay-meta">
                  <div>
                    <dt>
                      <Briefcase size={13} strokeWidth={1.9} />
                      Client
                    </dt>
                    <dd>{active.client}</dd>
                  </div>
                  <div>
                    <dt>
                      <MapPin size={13} strokeWidth={1.9} />
                      Location
                    </dt>
                    <dd>{active.location}</dd>
                  </div>
                  <div>
                    <dt>
                      <CalendarDays size={13} strokeWidth={1.9} />
                      Year
                    </dt>
                    <dd>{active.year}</dd>
                  </div>
                  <div>
                    <dt>
                      <Clock size={13} strokeWidth={1.9} />
                      Duration
                    </dt>
                    <dd>{active.duration}</dd>
                  </div>
                </dl>

                <div className="pf-overlay-block">
                  <h4>The Brief</h4>
                  <p>{active.brief}</p>
                </div>

                <div className="pf-overlay-block">
                  <h4>What We Did</h4>
                  <p>{active.approach}</p>
                </div>

                <div className="pf-overlay-block">
                  <h4>Outcome</h4>
                  <p>{active.outcome}</p>
                </div>

                <div className="pf-overlay-metrics">
                  {active.metrics.map((m) => (
                    <div key={m.label}>
                      <strong>{m.num}</strong>
                      <span>{m.label}</span>
                    </div>
                  ))}
                </div>

                <div className="pf-overlay-tags">
                  {active.services.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </aside>
            </motion.div>

            <span className="pf-overlay-counter">
              {String(openCase + 1).padStart(2, "0")} / {String(visible.length).padStart(2, "0")}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <CTA />
      <Footer />
    </div>
  );
};

export default PortfolioPage;
