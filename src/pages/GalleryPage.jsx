import React, { useCallback, useEffect, useMemo, useState } from "react";
// eslint-disable-next-line no-unused-vars -- motion is used via <motion.div> JSX member expressions
import { motion, AnimatePresence } from "motion/react";
import {
  Images,
  Building2,
  HardHat,
  Layers,
  Code2,
  PenTool,
  Headset,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Camera,
  Plane,
  Box,
  FolderOpen,
  Quote,
  Star,
  Plus,
  CheckCircle2,
  Download,
  MapPin,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../sections/CTA";
import { REVIEWS } from "../data/constants";
import { fadeUp } from "../utils/animations";

import realEstateImg from "../assets/Real-Estate.jpg";
import realEstate1Img from "../assets/Real-Estate1.jpg";
import apartmentImg from "../assets/Modern Apartment.jpg";
import retailImg from "../assets/City Centre Retail Space.jpg";
import rentalImg from "../assets/Rental Investment Unit.jpg";
import plotImg from "../assets/Residential Plot.jpg";
import infrastructureImg from "../assets/services/infrastructure.jpg";
import masterPlanImg from "../assets/services/master-planning.jpg";
import interiorImg from "../assets/services/interior-design.jpg";
import softwareImg from "../assets/services/software-development.jpg";
import dashboardImg from "../assets/services/project-dashboard.jpg";
import portalImg from "../assets/services/client-portal.jpg";
import marketingImg from "../assets/services/marketing.jpg";
import analyticsImg from "../assets/services/analytics-reporting.jpg";
import supportImg from "../assets/services/dedicated-support.jpg";
import docsImg from "../assets/services/document-management.jpg";
import securityImg from "../assets/services/security-compliance.jpg";
import site1Img from "../assets/d1.jpg";
import site2Img from "../assets/d2.jpg";
import site3Img from "../assets/d3.jpg";
import site4Img from "../assets/d4.jpg";
import "./GalleryPage.css";

const CATEGORIES = [
  { name: "All", icon: Images },
  { name: "Real Estate", icon: Building2 },
  { name: "Infrastructure & Projects", icon: HardHat },
  { name: "Interiors", icon: Layers },
  { name: "Software & IT", icon: Code2 },
  { name: "Design & Marketing", icon: PenTool },
  { name: "BPO & Support", icon: Headset },
];

const GALLERY = [
  {
    id: "re-mixed-use",
    src: realEstateImg,
    title: "Mixed-Use Development",
    category: "Real Estate",
    location: "Nugegoda",
    year: "2025",
    desc: "A combined residential and commercial development delivered from master plan to handover.",
    featured: true,
  },
  {
    id: "re-residential-dev",
    src: realEstate1Img,
    title: "Residential Development",
    category: "Real Estate",
    location: "Malabe",
    year: "2025",
    desc: "Multi-unit residential blocks planned, engineered, and delivered under one roof.",
  },
  {
    id: "re-apartment",
    src: apartmentImg,
    title: "Modern Apartment",
    category: "Real Estate",
    location: "Colombo 07",
    year: "2024",
    desc: "Contemporary apartment interiors with space-efficient layouts and premium finishes.",
  },
  {
    id: "re-retail",
    src: retailImg,
    title: "City Centre Retail Space",
    category: "Real Estate",
    location: "Nugegoda",
    year: "2024",
    desc: "High-footfall retail unit positioned at a key city-centre junction.",
  },
  {
    id: "re-rental",
    src: rentalImg,
    title: "Rental Investment Unit",
    category: "Real Estate",
    location: "Dehiwala",
    year: "2024",
    desc: "A rental-ready investment unit optimised for yield and low maintenance.",
  },
  {
    id: "re-plot",
    src: plotImg,
    title: "Residential Plot",
    category: "Real Estate",
    location: "Malabe",
    year: "2025",
    desc: "Serviced residential land prepared for immediate development.",
  },
  {
    id: "inf-works",
    src: infrastructureImg,
    title: "Infrastructure Works",
    category: "Infrastructure & Projects",
    location: "Colombo",
    year: "2024",
    desc: "Civil and utility infrastructure delivered with full quality and safety control.",
  },
  {
    id: "inf-master-plan",
    src: masterPlanImg,
    title: "Master Plan Development",
    category: "Infrastructure & Projects",
    location: "Nugegoda",
    year: "2025",
    desc: "Large-scale master planning that ties design, engineering, and phasing into one roadmap.",
  },
  {
    id: "inf-site-01",
    src: site1Img,
    title: "Project Site — Colombo",
    category: "Infrastructure & Projects",
    location: "Colombo",
    year: "2024",
    desc: "On-site project progress captured during active delivery.",
  },
  {
    id: "inf-site-02",
    src: site2Img,
    title: "Project Site — Nugegoda",
    category: "Infrastructure & Projects",
    location: "Nugegoda",
    year: "2025",
    desc: "On-site project progress captured during active delivery.",
  },
  {
    id: "inf-site-03",
    src: site3Img,
    title: "Project Site — Malabe",
    category: "Infrastructure & Projects",
    location: "Malabe",
    year: "2024",
    desc: "On-site project progress captured during active delivery.",
  },
  {
    id: "inf-site-04",
    src: site4Img,
    title: "Project Site — Kandy",
    category: "Infrastructure & Projects",
    location: "Kandy",
    year: "2023",
    desc: "On-site project progress captured during active delivery.",
  },
  {
    id: "int-fitout",
    src: interiorImg,
    title: "Interior Fit-Out",
    category: "Interiors",
    location: "Colombo",
    year: "2025",
    desc: "Full interior fit-out executed to drawing, finish, and lighting specification.",
  },
  {
    id: "soft-platform",
    src: softwareImg,
    title: "Custom Software Platform",
    category: "Software & IT",
    location: "Nugegoda",
    year: "2025",
    desc: "Bespoke software built around the client's real operational workflow.",
  },
  {
    id: "soft-dashboard",
    src: dashboardImg,
    title: "Project Dashboard",
    category: "Software & IT",
    location: "Nugegoda",
    year: "2025",
    desc: "Live programme tracking with cost, schedule, and resource visibility.",
  },
  {
    id: "soft-portal",
    src: portalImg,
    title: "Client Portal",
    category: "Software & IT",
    location: "Nugegoda",
    year: "2024",
    desc: "A secure client portal for approvals, documents, and reporting in one place.",
  },
  {
    id: "des-campaign",
    src: marketingImg,
    title: "Brand Campaign",
    category: "Design & Marketing",
    location: "Colombo",
    year: "2025",
    desc: "A full-funnel brand campaign built on research, creative, and media planning.",
  },
  {
    id: "des-analytics",
    src: analyticsImg,
    title: "Marketing Analytics",
    category: "Design & Marketing",
    location: "Colombo",
    year: "2024",
    desc: "Performance reporting that ties spend to measurable pipeline and revenue.",
  },
  {
    id: "bpo-support-ops",
    src: supportImg,
    title: "Support Operations",
    category: "BPO & Support",
    location: "Nugegoda",
    year: "2025",
    desc: "A dedicated support floor running client operations around the clock.",
  },
  {
    id: "bpo-documents",
    src: docsImg,
    title: "Document Management",
    category: "BPO & Support",
    location: "Nugegoda",
    year: "2024",
    desc: "Digitised document flows with indexing, retrieval, and audit-ready records.",
  },
  {
    id: "bpo-security",
    src: securityImg,
    title: "Security & Compliance",
    category: "BPO & Support",
    location: "Nugegoda",
    year: "2024",
    desc: "Access control, encryption, and audit trails across every account we operate.",
  },
];

const COLLECTIONS = [
  {
    title: "Property & Development",
    category: "Real Estate",
    desc: "Serviced plots, retail units, apartments, and mixed-use blocks — planned and delivered in-house.",
    images: [realEstateImg, apartmentImg, retailImg],
  },
  {
    title: "Sites & Infrastructure",
    category: "Infrastructure & Projects",
    desc: "Master plans, civil works, and live site delivery captured on the ground by our own crews.",
    images: [infrastructureImg, masterPlanImg, site1Img],
  },
  {
    title: "Platforms & Digital",
    category: "Software & IT",
    desc: "Custom software, live dashboards, and client portals that are running in production right now.",
    images: [softwareImg, dashboardImg, portalImg],
  },
  {
    title: "Operations & Support",
    category: "BPO & Support",
    desc: "Support floors, document flows, and compliance handling running from our Nugegoda centre.",
    images: [supportImg, docsImg, securityImg],
  },
];

const DOCUMENTATION = [
  {
    icon: Camera,
    title: "Site Progress Reporting",
    desc: "Scheduled photo documentation tied to your project milestones, so progress is evidenced, not reported.",
    note: "Included on every GMS project",
  },
  {
    icon: Plane,
    title: "Drone & Aerial Capture",
    desc: "Aerial coverage of large sites and completed developments for reviews, handover, and marketing.",
    note: "Scheduled on request",
  },
  {
    icon: Box,
    title: "3D Walkthroughs & Renders",
    desc: "Photorealistic views of spaces before they are built, so decisions get made on evidence.",
    note: "Design & pre-sales phase",
  },
  {
    icon: FolderOpen,
    title: "Handover Albums",
    desc: "A structured photo and document album delivered with the final handover pack.",
    note: "Delivered with every close-out",
  },
];

const CAPTURE_STEPS = [
  {
    num: "01",
    title: "Site Visit & Survey",
    desc: "We walk the site, measure, and document the starting condition before a single drawing is issued.",
    image: site2Img,
  },
  {
    num: "02",
    title: "Design & Documentation",
    desc: "Plans, renders, and technical documentation are produced and reviewed with you sign by sign.",
    image: masterPlanImg,
  },
  {
    num: "03",
    title: "Build & Progress Capture",
    desc: "Work is photographed at every milestone so progress, quality, and variations stay provable.",
    image: site1Img,
  },
  {
    num: "04",
    title: "Handover & Archive",
    desc: "Final finishes are captured, the album is compiled, and everything is archived against the project file.",
    image: interiorImg,
  },
];

const GA_FAQ = [
  {
    id: "gq1",
    q: "Can I get high-resolution versions of these photos?",
    a: "Yes. Tell us which project you need and we will share print-resolution files, along with the complete project album, on request.",
  },
  {
    id: "gq2",
    q: "Do you also produce drone footage and video?",
    a: "We do. Drone capture, site walkthrough video, and 3D renders are produced for client reviews, handover packs, and marketing use.",
  },
  {
    id: "gq3",
    q: "Can I see the case studies behind these projects?",
    a: "Absolutely. Case studies, drawings, cost summaries, and delivery records are shared on request through our contact page.",
  },
  {
    id: "gq4",
    q: "How often is the gallery updated?",
    a: "Every completed milestone is documented and added, so the gallery grows as projects are handed over and new ones are signed off.",
  },
  {
    id: "gq5",
    q: "Can I use these photos in my own marketing?",
    a: "Images of your own project are yours to use freely. For reuse of GMS-produced content in third-party material, let us know and we will confirm permission in writing.",
  },
];

const GalleryPage = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const items = useMemo(
    () => (filter === "All" ? GALLERY : GALLERY.filter((i) => i.category === filter)),
    [filter]
  );

  const featured = GALLERY.find((i) => i.featured) || GALLERY[0];

  const applyFilter = useCallback((cat) => {
    setFilter(cat);
    setLightbox(null);
    const el = document.getElementById("gallery");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const toggleFaq = useCallback(
    (id) => setOpenFaq((prev) => (prev === id ? null : id)),
    []
  );

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const step = useCallback(
    (dir) => setLightbox((cur) => (cur === null ? cur : (cur + dir + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (lightbox === null) return undefined;

    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
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
  }, [lightbox, closeLightbox, step]);

  const counts = useMemo(() => {
    const map = { All: GALLERY.length };
    GALLERY.forEach((i) => {
      map[i.category] = (map[i.category] || 0) + 1;
    });
    return map;
  }, []);

  const active = lightbox === null ? null : items[lightbox];

  return (
    <div>
      <Navbar />

      {/* ============ HERO ============ */}
      <section className="ga-hero">
        <div className="ga-hero-inner">
          <motion.span className="ga-eyebrow" {...fadeUp(0.05)}>
            <span className="ga-eyebrow-dot" />
            Gallery
          </motion.span>

          <motion.h1 className="ga-hero-title" {...fadeUp(0.12)}>
            Work We Have
            <br />
            <span className="ga-hero-accent">Put On Record</span>
          </motion.h1>

          <motion.p className="ga-hero-sub" {...fadeUp(0.2)}>
            A visual index of the projects, platforms, and operations we have
            delivered — from construction sites in Nugegoda to software running
            in production for clients across Sri Lanka.
          </motion.p>

          <motion.div className="ga-hero-stats" {...fadeUp(0.28)}>
            <div className="ga-hero-stat">
              <strong>{GALLERY.length}</strong>
              <span>Images</span>
            </div>
            <div className="ga-hero-stat">
              <strong>{CATEGORIES.length - 1}</strong>
              <span>Categories</span>
            </div>
            <div className="ga-hero-stat">
              <strong>100%</strong>
              <span>In-house delivery</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ FEATURED ============ */}
      <section className="ga-featured">
        <motion.button
          type="button"
          className="ga-featured-media"
          onClick={() => {
            setFilter("All");
            setLightbox(GALLERY.indexOf(featured));
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
          aria-label={`Open featured project: ${featured.title}`}
        >
          <img src={featured.src} alt={featured.title} loading="eager" />
          <span className="ga-featured-overlay" />
          <span className="ga-featured-tag">
            <Sparkles size={13} strokeWidth={2} />
            Featured Project
          </span>
          <span className="ga-featured-caption">
            <span className="ga-featured-cat">{featured.category}</span>
            <strong className="ga-featured-title">{featured.title}</strong>
            <span className="ga-featured-meta">
              {featured.location} &middot; {featured.year}
            </span>
          </span>
          <span className="ga-featured-zoom">
            <ZoomIn size={20} strokeWidth={1.8} />
          </span>
        </motion.button>
      </section>

      {/* ============ FILTERS ============ */}
      <section className="ga-grid-section" id="gallery">
        <div className="ga-grid-inner">
          <motion.div className="ga-filters" {...fadeUp(0.1)}>
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.name}
                  type="button"
                  className={`ga-filter${filter === cat.name ? " ga-filter--active" : ""}`}
                  onClick={() => {
                    setFilter(cat.name);
                    setLightbox(null);
                  }}
                  aria-pressed={filter === cat.name}
                >
                  <Icon size={14} strokeWidth={1.9} />
                  {cat.name}
                  <span className="ga-filter-count">{counts[cat.name] || 0}</span>
                </button>
              );
            })}
          </motion.div>

          <motion.p className="ga-count" {...fadeUp(0.15)}>
            Showing <strong>{items.length}</strong> image{items.length === 1 ? "" : "s"}
            {filter !== "All" && <> in {filter}</>}
          </motion.p>

          <div className="ga-grid">
            {items.map((item, i) => (
              <motion.button
                key={`${filter}-${item.id}`}
                type="button"
                className="ga-item"
                onClick={() => setLightbox(i)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: Math.min(i, 8) * 0.05 }}
                aria-label={`View ${item.title}`}
              >
                <img src={item.src} alt={item.title} loading="lazy" />
                <span className="ga-item-overlay" />
                <span className="ga-item-zoom">
                  <ZoomIn size={18} strokeWidth={1.9} />
                </span>
                <span className="ga-item-caption">
                  <span className="ga-item-cat">{item.category}</span>
                  <strong className="ga-item-title">{item.title}</strong>
                  <span className="ga-item-meta">
                    {item.location} &middot; {item.year}
                  </span>
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LIGHTBOX ============ */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="ga-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
          >
            <button
              type="button"
              className="ga-lb-close"
              onClick={closeLightbox}
              aria-label="Close gallery"
            >
              <X size={20} strokeWidth={1.9} />
            </button>

            <button
              type="button"
              className="ga-lb-nav ga-lb-nav--prev"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={26} strokeWidth={1.8} />
            </button>

            <button
              type="button"
              className="ga-lb-nav ga-lb-nav--next"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next image"
            >
              <ChevronRight size={26} strokeWidth={1.8} />
            </button>

            <motion.figure
              className="ga-lb-figure"
              key={active.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={active.src} alt={active.title} />
              <figcaption className="ga-lb-caption">
                <span className="ga-lb-cat">{active.category}</span>
                <h3 className="ga-lb-title">{active.title}</h3>
                <p className="ga-lb-desc">{active.desc}</p>
                <span className="ga-lb-meta">
                  {active.location} &middot; {active.year}
                </span>
              </figcaption>
            </motion.figure>

            <span className="ga-lb-counter">
              {String(lightbox + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============ COLLECTIONS ============ */}
      <section className="ga-collections">
        <div className="ga-collections-inner">
          <motion.div className="ga-sec-header" {...fadeUp(0.1)}>
            <span className="ga-eyebrow">
              <span className="ga-eyebrow-dot" />
              Curated Collections
            </span>
            <h2 className="ga-sec-title">
              Start With a <span className="ga-hero-accent">Collection</span>
            </h2>
            <p className="ga-sec-sub">
              The gallery is organised the way our work actually runs — by
              discipline. Pick a collection to jump straight to the images that
              matter to you.
            </p>
          </motion.div>

          <div className="ga-collection-grid">
            {COLLECTIONS.map((col, i) => (
              <motion.button
                key={col.title}
                type="button"
                className="ga-collection"
                onClick={() => applyFilter(col.category)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ amount: 0.2 }}
              >
                <span className="ga-collection-media">
                  <span className="ga-collection-thumb ga-collection-thumb--main">
                    <img src={col.images[0]} alt={col.title} loading="lazy" />
                  </span>
                  <span className="ga-collection-side">
                    <span className="ga-collection-thumb">
                      <img src={col.images[1]} alt="" loading="lazy" />
                    </span>
                    <span className="ga-collection-thumb">
                      <img src={col.images[2]} alt="" loading="lazy" />
                    </span>
                  </span>
                </span>

                <span className="ga-collection-body">
                  <span className="ga-collection-cat">{col.category}</span>
                  <strong className="ga-collection-title">{col.title}</strong>
                  <span className="ga-collection-desc">{col.desc}</span>
                  <span className="ga-collection-link">
                    View collection
                    <ArrowRight size={15} />
                  </span>
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DOCUMENTATION SERVICES ============ */}
      <section className="ga-doc">
        <div className="ga-doc-inner">
          <motion.div className="ga-doc-head" {...fadeUp(0.1)}>
            <span className="ga-eyebrow">
              <span className="ga-eyebrow-dot" />
              Beyond The Frame
            </span>
            <h2 className="ga-sec-title">
              Documentation We <span className="ga-hero-accent">Deliver</span>
            </h2>
            <p className="ga-sec-sub">
              Every image here comes from a documentation discipline we run
              ourselves — not from a stock library.
            </p>
          </motion.div>

          <div className="ga-doc-grid">
            {DOCUMENTATION.map((doc, i) => (
              <motion.div
                key={doc.title}
                className="ga-doc-card"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ amount: 0.25 }}
              >
                <span className="ga-doc-icon">
                  <doc.icon size={22} strokeWidth={1.8} />
                </span>
                <h3 className="ga-doc-title">{doc.title}</h3>
                <p className="ga-doc-desc">{doc.desc}</p>
                <span className="ga-doc-note">
                  <CheckCircle2 size={13} strokeWidth={2} />
                  {doc.note}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CAPTURE PROCESS ============ */}
      <section className="ga-process">
        <div className="ga-process-inner">
          <motion.div className="ga-sec-header" {...fadeUp(0.1)}>
            <span className="ga-eyebrow">
              <span className="ga-eyebrow-dot" />
              How It Gets Captured
            </span>
            <h2 className="ga-sec-title">
              How a Project Becomes
              <br />
              a <span className="ga-hero-accent">Gallery Entry</span>
            </h2>
            <p className="ga-sec-sub">
              Four stages, one continuous record. Nothing is staged after the
              fact — it is photographed as it is built.
            </p>
          </motion.div>

          <div className="ga-process-grid">
            {CAPTURE_STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                className="ga-step"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ amount: 0.2 }}
              >
                <div className="ga-step-media">
                  <img src={step.image} alt={step.title} loading="lazy" />
                  <span className="ga-step-num">{step.num}</span>
                </div>
                <h3 className="ga-step-title">{step.title}</h3>
                <p className="ga-step-desc">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIAL ============ */}
      <section className="ga-quote">
        <motion.div
          className="ga-quote-inner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
        >
          <span className="ga-quote-mark">
            <Quote size={30} strokeWidth={1.4} />
          </span>

          <div className="ga-quote-stars">
            {Array.from({ length: 5 }, (_, si) => (
              <Star key={si} size={15} fill="currentColor" strokeWidth={0} />
            ))}
          </div>

          <blockquote className="ga-quote-text">
            {REVIEWS[0].text}
          </blockquote>

          <div className="ga-quote-author">
            <span className="ga-quote-avatar">{REVIEWS[0].avatar}</span>
            <span className="ga-quote-author-info">
              <strong>{REVIEWS[0].name}</strong>
              <span>
                {REVIEWS[0].role}, {REVIEWS[0].company}
              </span>
            </span>
            <span className="ga-quote-service">{REVIEWS[0].service}</span>
          </div>
        </motion.div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="ga-faq">
        <div className="ga-faq-inner">
          <motion.div className="ga-sec-header" {...fadeUp(0.1)}>
            <span className="ga-eyebrow">
              <span className="ga-eyebrow-dot" />
              Gallery FAQ
            </span>
            <h2 className="ga-sec-title">
              Questions About <span className="ga-hero-accent">These Images</span>
            </h2>
            <p className="ga-sec-sub">
              Need something specific — a file, a case study, or a site visit?
              This is the fastest way to get it.
            </p>
          </motion.div>

          <div className="ga-faq-list">
            {GA_FAQ.map((item, i) => {
              const isOpen = openFaq === item.id;
              return (
                <motion.div
                  key={item.id}
                  className={`ga-faq-item${isOpen ? " ga-faq-item--open" : ""}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  viewport={{ amount: 0.2 }}
                >
                  <button
                    type="button"
                    className="ga-faq-trigger"
                    onClick={() => toggleFaq(item.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="ga-faq-q">{item.q}</span>
                    <span className="ga-faq-icon">
                      <Plus size={17} strokeWidth={2} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="ga-faq-body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: "easeInOut" }}
                      >
                        <p className="ga-faq-a">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="ga-cta">
        <div className="ga-cta-inner">
          <motion.div {...fadeUp(0.1)}>
            <h2 className="ga-cta-title">
              Want the <span className="ga-hero-accent">Full Portfolio?</span>
            </h2>
            <p className="ga-cta-sub">
              Detailed case studies, drawings, and delivery records are shared
              on request. Tell us what you are planning and we will walk you
              through comparable work.
            </p>
            <div className="ga-cta-meta">
              <span>
                <MapPin size={14} strokeWidth={1.9} />
                Nugegoda, Sri Lanka
              </span>
              <span>
                <Download size={14} strokeWidth={1.9} />
                Albums sent as PDF
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default GalleryPage;
