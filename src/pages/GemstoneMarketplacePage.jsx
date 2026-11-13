import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars -- motion is used via <motion.div> JSX member expressions
import { motion } from "motion/react";
import {
  Gem,
  BadgeCheck,
  Wallet,
  FileCheck2,
  Gavel,
  MessageSquare,
  TrendingUp,
  ArrowRight,
  Check,
  ShieldCheck,
  Lock,
  Fingerprint,
  ChevronDown,
  Globe,
  Search,
  Truck,
  Sparkles,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { fadeUp, zoomIn, fadeRight } from "../utils/animations";
import gemHeroImg from "../assets/services/gemstone-marketplace.jpg";
import gemShowcaseImg from "../assets/gem_img.jpg";
import securityImg from "../assets/gem_trade.png";
import insightsImg from "../assets/gem_img2.png";
import gemVideo from "../assets/src_v/gem_vid.mp4";
import "./GemstoneMarketplacePage.css";

const MARQUEE = [
  "Blue Sapphire",
  "Ruby",
  "Padparadscha",
  "Star Sapphire",
  "Spinel",
  "Alexandrite",
  "Tourmaline",
  "Cat's Eye",
  "Zircon",
  "Garnet",
];

const STATS = [
  { num: "12k+", label: "Verified Listings", icon: BadgeCheck },
  { num: "100%", label: "Escrow-Backed Deals", icon: ShieldCheck },
  { num: "45+", label: "Countries Trading", icon: Globe },
  { num: "24/7", label: "Market Monitoring", icon: Fingerprint },
];

const FEATURES = [
  {
    icon: BadgeCheck,
    title: "Verified Sellers",
    desc: "Every seller clears identity, business, and source verification before a single stone goes live.",
  },
  {
    icon: Wallet,
    title: "Escrow-Secured Payments",
    desc: "Funds are held safely until the buyer approves the stone. Nothing ships, nothing moves — until both sides are happy.",
  },
  {
    icon: FileCheck2,
    title: "Certification & Provenance",
    desc: "Lab reports, origin records, and a tamper-proof history attached to every listing.",
  },
  {
    icon: Gavel,
    title: "Live Auctions & Offers",
    desc: "Run timed auctions or accept private offers — with real-time bidding alerts for every watcher.",
  },
  {
    icon: MessageSquare,
    title: "Direct Messaging",
    desc: "Negotiate inside the platform with encrypted buyer–seller chat and a full offer history.",
  },
  {
    icon: TrendingUp,
    title: "Market Insights",
    desc: "Live price benchmarks per carat by gem type, colour grade, and origin — so you never overpay.",
  },
];

const CATEGORIES = [
  { name: "Ruby", count: "2,140 listings", c1: "#ef4444", c2: "#7f1d1d" },
  { name: "Blue Sapphire", count: "3,480 listings", c1: "#3b82f6", c2: "#1e3a8a" },
  { name: "Padparadscha", count: "860 listings", c1: "#fb923c", c2: "#be185d" },
  { name: "Spinel", count: "1,275 listings", c1: "#d946ef", c2: "#6d28d9" },
  { name: "Tourmaline", count: "1,930 listings", c1: "#22c55e", c2: "#065f46" },
  { name: "Alexandrite", count: "540 listings", c1: "#14b8a6", c2: "#6d28d9" },
];

const PROCESS = [
  {
    num: "01",
    icon: Search,
    title: "List Your Stones",
    desc: "Upload photos, carat, cut, and certificates in minutes.",
  },
  {
    num: "02",
    icon: BadgeCheck,
    title: "Expert Verification",
    desc: "Our gemologists confirm every claim before it goes live.",
  },
  {
    num: "03",
    icon: Sparkles,
    title: "Publish & Promote",
    desc: "Listings surface in search, auctions, and buyer shortlists.",
  },
  {
    num: "04",
    icon: MessageSquare,
    title: "Negotiate Securely",
    desc: "Chat, offer, and counter-offer seamlessly inside the platform.",
  },
  {
    num: "05",
    icon: Lock,
    title: "Escrow Payment",
    desc: "Buyer funds lock in escrow — protected on both sides.",
  },
  {
    num: "06",
    icon: Truck,
    title: "Ship & Release",
    desc: "Insured delivery, buyer approval, instant payout.",
  },
];

const SECURITY_POINTS = [
  "Lab certificates verified with the issuing lab before a stone is listed",
  "Escrow holds payment until the buyer approves the stone in hand",
  "Fully insured, tracked shipping on every high-value stone",
  "Independent gemologist review of treatments, cut, and origin",
  "Tamper-proof provenance that follows each stone to its next owner",
];

const FAQ = [
  {
    q: "How do I know a seller is legitimate?",
    a: "Every seller completes identity, business, and source verification before listing. Verified sellers carry a badge, and their transaction history, ratings, and response times are public on their profile.",
  },
  {
    q: "How does the escrow process work?",
    a: "When a buyer commits, their funds are locked in a protected escrow account. The stone ships fully insured, the buyer inspects it, and only then are funds released to the seller. If the stone isn't as described, the buyer can open a dispute and the funds stay protected.",
  },
  {
    q: "Are gemstone certificates verified?",
    a: "Yes. Every certified listing is checked against the issuing laboratory's records, and the certificate ID is stored with a tamper-proof record of the stone's provenance and chain of custody.",
  },
  {
    q: "What fees does the marketplace charge?",
    a: "Listing is free. A flat success fee is charged only when a deal completes — no subscriptions, no upfront costs, and no hidden charges on either side of the transaction.",
  },
  {
    q: "Can I trade internationally?",
    a: "Absolutely. The marketplace supports traders in 45+ countries with multi-currency payments, export documentation support, and insured international shipping partners.",
  },
];

const GemstoneMarketplacePage = () => {
  const videoRef = useRef(null);

  // Respect the OS reduced-motion preference — poster image only.
  useEffect(() => {
    const video = videoRef.current;
    if (video && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      video.removeAttribute("autoplay");
    }
  }, []);

  return (
    <div>
      <Navbar />

      {/* ============ HERO ============ */}
      <section className="gm-hero">
        <video
          ref={videoRef}
          className="gm-hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster={gemHeroImg}
          aria-hidden="true"
        >
          <source src={gemVideo} type="video/mp4" />
        </video>
        <span className="gm-hero-overlay" aria-hidden="true" />

        <div className="gm-hero-inner">
          <motion.div className="gm-hero-content" {...fadeUp(0.1)}>
            <span className="gm-eyebrow">
              <span className="gm-eyebrow-dot" />
              Gemstone Marketplace
            </span>
            <h1 className="gm-hero-title">
              Trade Gems with
              <br />
              <span className="gm-hero-accent">Complete Confidence</span>
            </h1>
            <p className="gm-hero-sub">
              Verified sellers, certified stones, and escrow-protected deals —
              a trusted digital marketplace that brings transparency, security,
              and global reach to every gemstone transaction.
            </p>
            <div className="gm-hero-actions">
              <Link to="/contact" className="gm-btn-primary">
                Start Trading <ArrowRight size={16} />
              </Link>
              <a href="#how-it-works" className="gm-hero-text-link">
                See How It Works <ArrowRight size={14} />
              </a>
            </div>
            <div className="gm-hero-chips">
              <span className="gm-hero-chip">
                <ShieldCheck size={13} /> Escrow Protected
              </span>
              <span className="gm-hero-chip">
                <BadgeCheck size={13} /> Lab-Certified Stones
              </span>
              <span className="gm-hero-chip">
                <Globe size={13} /> Ships Worldwide
              </span>
            </div>
          </motion.div>

          <motion.div className="gm-hero-visual" {...zoomIn(0.25)}>
            <article className="gm-listing-card">
              <div className="gm-listing-media">
                <img src={gemHeroImg} alt="Certified blue sapphire listing" />
                <span className="gm-listing-badge">
                  <BadgeCheck size={13} /> Verified
                </span>
                <span className="gm-listing-tag">Live Auction</span>
              </div>
              <div className="gm-listing-body">
                <span className="gm-listing-kicker">Ceylon · 3.42 ct</span>
                <h3 className="gm-listing-title">Blue Sapphire — Oval Cut</h3>
                <div className="gm-listing-row">
                  <div>
                    <span className="gm-listing-label">Current Bid</span>
                    <strong className="gm-listing-price">$4,850</strong>
                  </div>
                  <div className="gm-listing-bidders">
                    <span className="gm-listing-avatar">RK</span>
                    <span className="gm-listing-avatar">AM</span>
                    <span className="gm-listing-avatar gm-listing-avatar--more">+7</span>
                  </div>
                </div>
                <div className="gm-listing-progress">
                  <span style={{ width: "72%" }} />
                </div>
                <span className="gm-listing-meta">
                  <TrendingUp size={13} /> 14 bids · closes in 2h 18m
                </span>
              </div>
            </article>

            <motion.span className="gm-escrow-chip" {...fadeUp(0.5)}>
              <Lock size={14} />
              <span>
                <strong>$182,400</strong>
                held in escrow today
              </span>
            </motion.span>
          </motion.div>
        </div>
      </section>

      {/* ============ GEM MARQUEE ============ */}
      <div className="gm-marquee" aria-hidden="true">
        <div className="gm-marquee-track">
          {[...MARQUEE, ...MARQUEE].map((gem, i) => (
            <span key={`${gem}-${i}`} className="gm-marquee-item">
              <Gem size={13} strokeWidth={2} />
              {gem}
            </span>
          ))}
        </div>
      </div>

      {/* ============ STATS ============ */}
      <section className="gm-stats">
        <div className="gm-stats-inner">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              className="gm-stat"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ amount: 0.5 }}
            >
              <span className="gm-stat-icon">
                <s.icon size={18} strokeWidth={1.9} />
              </span>
              <strong className="gm-stat-num">{s.num}</strong>
              <span className="gm-stat-label">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section className="gm-features" id="features">
        <div className="gm-features-inner">
          <motion.div className="gm-sec-head" {...fadeUp(0.1)}>
            <span className="gm-eyebrow">
              <span className="gm-eyebrow-dot" />
              Why Trade Here
            </span>
            <h2 className="gm-sec-title">
              Built for <span className="gm-hero-accent">Trust</span>
            </h2>
            <p className="gm-sec-sub">
              Every layer of the marketplace exists to remove the old risks of
              gemstone trading — unverified sellers, unclear provenance, and
              payments that nobody can see.
            </p>
          </motion.div>

          <div className="gm-feat-grid">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                className="gm-feat-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ amount: 0.3 }}
              >
                <span className="gm-feat-icon">
                  <f.icon size={22} strokeWidth={1.8} />
                </span>
                <h4 className="gm-feat-title">{f.title}</h4>
                <p className="gm-feat-desc">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TRACEABILITY SHOWCASE ============ */}
      <section className="gm-showcase">
        <div className="gm-showcase-inner">
          <motion.div className="gm-showcase-media" {...fadeUp(0.1)}>
            <div className="gm-showcase-img">
              <img
                src={gemShowcaseImg}
                alt="Assorted certified gemstones on display"
                loading="lazy"
              />
            </div>
            <motion.div
              className="gm-showcase-metric gm-showcase-metric--one"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.25 }}
              viewport={{ amount: 0.4 }}
            >
              <strong>100%</strong>
              <span>Traceable Origin</span>
            </motion.div>
            <motion.div
              className="gm-showcase-metric gm-showcase-metric--two"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.35 }}
              viewport={{ amount: 0.4 }}
            >
              <strong>48h</strong>
              <span>Certificate Check</span>
            </motion.div>
          </motion.div>

          <motion.div className="gm-showcase-content" {...fadeRight(0.15)}>
            <span className="gm-eyebrow">
              <span className="gm-eyebrow-dot" />
              Full Traceability
            </span>
            <h2 className="gm-sec-title">
              Every Stone Tells a <span className="gm-hero-accent">Story</span>
            </h2>
            <p className="gm-showcase-text">
              Origin, certification, and chain of custody travel with the stone.
              Buyers see exactly where a gem came from — and sellers prove it in
              one click, instead of trading on trust alone.
            </p>
            <ul className="gm-check-list">
              <li className="gm-check-item">
                <span className="gm-check-bullet">
                  <Check size={13} strokeWidth={3} />
                </span>
                Mine-to-market origin records on every certified listing
              </li>
              <li className="gm-check-item">
                <span className="gm-check-bullet">
                  <Check size={13} strokeWidth={3} />
                </span>
                Certificate IDs verified directly with the issuing lab
              </li>
              <li className="gm-check-item">
                <span className="gm-check-bullet">
                  <Check size={13} strokeWidth={3} />
                </span>
                Tamper-proof chain-of-custody history for each stone
              </li>
              <li className="gm-check-item">
                <span className="gm-check-bullet">
                  <Check size={13} strokeWidth={3} />
                </span>
                Grading photos and reports stored with the listing forever
              </li>
            </ul>
            <Link to="/contact" className="gm-showcase-btn">
              Request a Demo <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============ CATEGORIES ============ */}
      <section className="gm-cats">
        <div className="gm-cats-inner">
          <motion.div className="gm-sec-head" {...fadeUp(0.1)}>
            <span className="gm-eyebrow">
              <span className="gm-eyebrow-dot" />
              Browse the Market
            </span>
            <h2 className="gm-sec-title">
              Featured <span className="gm-hero-accent">Categories</span>
            </h2>
            <p className="gm-sec-sub">
              From Ceylon sapphires to Burmese rubies — explore live inventory
              across the stones traders ask for most.
            </p>
          </motion.div>

          <div className="gm-cats-grid">
            {CATEGORIES.map((c, i) => (
              <motion.a
                key={c.name}
                href="#features"
                className="gm-cat"
                style={{ "--gem-1": c.c1, "--gem-2": c.c2 }}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ amount: 0.3 }}
              >
                <span className="gm-cat-gem" aria-hidden="true">
                  <Gem size={30} strokeWidth={1.4} />
                </span>
                <span className="gm-cat-info">
                  <strong className="gm-cat-name">{c.name}</strong>
                  <span className="gm-cat-count">{c.count}</span>
                </span>
                <span className="gm-cat-arrow" aria-hidden="true">
                  <ArrowRight size={15} />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="gm-process" id="how-it-works">
        <div className="gm-process-inner">
          <motion.div className="gm-sec-head" {...fadeUp(0.1)}>
            <span className="gm-eyebrow">
              <span className="gm-eyebrow-dot" />
              How It Works
            </span>
            <h2 className="gm-sec-title">
              From Listing to <span className="gm-hero-accent">Payout</span>
            </h2>
            <p className="gm-sec-sub">
              Six clear steps between a stone in your safe and money in your
              account — with a checkpoint at every stage.
            </p>
          </motion.div>

          <div className="gm-steps">
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.num}
                className="gm-step"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                viewport={{ amount: 0.3, once: true }}
              >
                <div className="gm-step-node">
                  <span className="gm-step-num">{step.num}</span>
                  <span className="gm-step-core">
                    <step.icon size={17} strokeWidth={1.9} />
                  </span>
                </div>
                <article className="gm-step-card">
                  <h4 className="gm-step-title">{step.title}</h4>
                  <p className="gm-step-desc">{step.desc}</p>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECURITY (dark) ============ */}
      <section className="gm-security">
        <div className="gm-security-inner">
          <motion.div className="gm-security-media" {...fadeUp(0.1)}>
            <img
              src={securityImg}
              alt="Secure gemstone trading and certification concept"
              loading="lazy"
            />
            <span className="gm-security-glow" aria-hidden="true" />
          </motion.div>

          <motion.div className="gm-security-content" {...fadeRight(0.15)}>
            <span className="gm-eyebrow">
              <span className="gm-eyebrow-dot" />
              Stone Protection
            </span>
            <h2 className="gm-sec-title">
              Security Built for <span className="gm-hero-accent">Gemstone Trading</span>
            </h2>
            <p className="gm-security-text">
              A gemstone is only worth what its certificate and provenance
              prove. From lab reports to insured delivery, every stone, payment,
              and message on the marketplace is protected at each step of the
              trade.
            </p>
            <ul className="gm-security-list">
              {SECURITY_POINTS.map((point) => (
                <li key={point} className="gm-security-li">
                  <span className="gm-security-bullet">
                    <ShieldCheck size={15} strokeWidth={2} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ============ INSIGHTS ============ */}
      <section className="gm-insights">
        <div className="gm-insights-inner">
          <motion.div className="gm-insights-content" {...fadeUp(0.1)}>
            <span className="gm-eyebrow">
              <span className="gm-eyebrow-dot" />
              Gem Market Intelligence
            </span>
            <h2 className="gm-sec-title">
              Know What Every <span className="gm-hero-accent">Carat</span> Is
              Worth
            </h2>
            <p className="gm-insights-text">
              Live per-carat benchmarks from real completed sales — auction
              results, dealer trades, and closed marketplace deals, never
              asking prices. Know what a Ceylon sapphire or Burmese ruby
              should cost before you negotiate, and what to list it for before
              you sell.
            </p>
            <ul className="gm-check-list">
              <li className="gm-check-item">
                <span className="gm-check-bullet">
                  <Check size={13} strokeWidth={3} />
                </span>
                Per-carat price curves by gem type, origin, and colour grade
              </li>
              <li className="gm-check-item">
                <span className="gm-check-bullet">
                  <Check size={13} strokeWidth={3} />
                </span>
                Heated vs. unheated valuations — treatments priced into every
                benchmark
              </li>
              <li className="gm-check-item">
                <span className="gm-check-bullet">
                  <Check size={13} strokeWidth={3} />
                </span>
                Auction results and sell-through trends with average days on
                market
              </li>
              <li className="gm-check-item">
                <span className="gm-check-bullet">
                  <Check size={13} strokeWidth={3} />
                </span>
                Weekly price alerts on the stones and parcels you watch
              </li>
            </ul>
            <a href="#features" className="gm-showcase-btn">
              Explore Gem Insights <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div className="gm-insights-media" {...zoomIn(0.15)}>
            <div className="gm-insights-img">
              <img
                src={insightsImg}
                alt="Gemstone price analytics dashboard"
                loading="lazy"
              />
            </div>
            <motion.div
              className="gm-metric-card gm-metric-card--one"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.25 }}
              viewport={{ amount: 0.4 }}
            >
              <strong>+14%</strong>
              <span>Sapphire $/ct</span>
            </motion.div>
            <motion.div
              className="gm-metric-card gm-metric-card--two"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.35 }}
              viewport={{ amount: 0.4 }}
            >
              <strong>$182k</strong>
              <span>Escrow Today</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="gm-faq">
        <div className="gm-faq-inner">
          <motion.div className="gm-sec-head" {...fadeUp(0.1)}>
            <span className="gm-eyebrow">
              <span className="gm-eyebrow-dot" />
              Questions
            </span>
            <h2 className="gm-sec-title">
              Good to <span className="gm-hero-accent">Know</span>
            </h2>
          </motion.div>

          <motion.div
            className="gm-faq-list"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ amount: 0.2 }}
          >
            {FAQ.map((item) => (
              <details key={item.q} className="gm-faq-item">
                <summary className="gm-faq-q">
                  {item.q}
                  <span className="gm-faq-icon" aria-hidden="true">
                    <ChevronDown size={17} strokeWidth={2.2} />
                  </span>
                </summary>
                <p className="gm-faq-a">{item.a}</p>
              </details>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="gm-cta">
        <div className="gm-cta-inner">
          <motion.div className="gm-cta-content" {...fadeUp(0.1)}>
            <div className="gm-cta-text">
              <span className="gm-eyebrow">
                <span className="gm-eyebrow-dot" />
                Start Trading
              </span>
              <h2 className="gm-cta-title">
                Ready to List Your <span className="gm-hero-accent">First Stone?</span>
              </h2>
              <p className="gm-cta-desc">
                Create a seller profile, upload your inventory with its
                certificates, and reach verified buyers in 45+ countries —
                listing is free, and you only pay when you sell.
              </p>
            </div>
            <div className="gm-cta-actions">
              <Link to="/contact" className="gm-btn-primary">
                Start Selling <ArrowRight size={16} />
              </Link>
              <a href="#how-it-works" className="gm-cta-link">
                See How It Works <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GemstoneMarketplacePage;
