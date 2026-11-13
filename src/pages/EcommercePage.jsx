import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars -- motion is used via <motion.div> JSX member expressions
import { motion } from "motion/react";
import {
  ShoppingBag,
  ShieldCheck,
  Zap,
  CreditCard,
  TrendingUp,
  ArrowRight,
  Check,
  Lock,
  Globe,
  Package,
  Palette,
  BarChart3,
  Megaphone,
  Store,
  Layers,
  Star,
  Search,
  Sparkles,
  Smartphone,
  Shirt,
  Sofa,
  Dumbbell,
  ShoppingCart,
  BadgeCheck,
  ChevronDown,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { fadeUp, zoomIn, fadeRight } from "../utils/animations";
import ecommerceHeroImg from "../assets/services/E-Commerce.jpg";
import ecommerceCardImg from "../assets/services/ecommerce.jpg";
import securityImg from "../assets/services/security-compliance.jpg";
import insightsImg from "../assets/services/analytics-reporting.jpg";
import ecommerceVideo from "../assets/src_v/ecommerce.mp4";
import "./EcommercePage.css";

const MARQUEE = [
  "One-Click Checkout",
  "Abandoned Cart Recovery",
  "Multi-Channel Sync",
  "Real-Time Inventory",
  "Free Shipping Thresholds",
  "Product Reviews",
  "Loyalty Programs",
  "Order Tracking",
  "Discount Codes",
  "Wishlist",
];

const STATS = [
  { num: "2.4x", label: "Avg. Conversion Lift", icon: TrendingUp },
  { num: "40+", label: "Payment Methods", icon: CreditCard },
  { num: "99.99%", label: "Store Uptime", icon: Zap },
  { num: "180+", label: "Integrations", icon: Layers },
];

const FEATURES = [
  {
    icon: Palette,
    title: "Storefront Design",
    desc: "Conversion-focused themes built around your brand, your catalogue, and the way your customers actually shop.",
  },
  {
    icon: Lock,
    title: "Secure Checkout",
    desc: "One-page checkout with PCI-DSS payments, digital wallets, and buy-now-pay-later — fewer steps, fewer abandoned carts.",
  },
  {
    icon: Package,
    title: "Inventory & Orders",
    desc: "Sync stock across warehouse, marketplace, and retail — with picking, packing, and shipping labels in one dashboard.",
  },
  {
    icon: Store,
    title: "Multi-Channel Selling",
    desc: "Publish once to your site, marketplaces, and social storefronts. Orders, pricing, and stock stay in sync everywhere.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    desc: "Track conversion rate, average order value, and cart abandonment with live dashboards and cohort reports.",
  },
  {
    icon: Megaphone,
    title: "Marketing & SEO",
    desc: "Built-in SEO, discount codes, and abandoned-cart email and SMS flows that recover revenue on autopilot.",
  },
];

const CATEGORIES = [
  { name: "Fashion & Apparel", count: "4,280 products", c1: "#f43f5e", c2: "#881337", Icon: Shirt },
  { name: "Electronics", count: "3,150 products", c1: "#3b82f6", c2: "#1e3a8a", Icon: Smartphone },
  { name: "Beauty & Wellness", count: "2,640 products", c1: "#ec4899", c2: "#831843", Icon: Sparkles },
  { name: "Home & Living", count: "1,970 products", c1: "#f59e0b", c2: "#78350f", Icon: Sofa },
  { name: "Sports & Outdoors", count: "1,420 products", c1: "#22c55e", c2: "#065f46", Icon: Dumbbell },
  { name: "Grocery & Gourmet", count: "2,310 products", c1: "#14b8a6", c2: "#134e4a", Icon: ShoppingCart },
];

const PROCESS = [
  {
    num: "01",
    icon: Search,
    title: "Discovery",
    desc: "We map your products, customers, and current bottlenecks.",
  },
  {
    num: "02",
    icon: Palette,
    title: "Design",
    desc: "Wireframes and a branded theme built for conversion.",
  },
  {
    num: "03",
    icon: Layers,
    title: "Build",
    desc: "Catalogue, checkout, and custom features engineered.",
  },
  {
    num: "04",
    icon: Zap,
    title: "Integrate",
    desc: "Payments, shipping, ERP, and marketing tools connected.",
  },
  {
    num: "05",
    icon: BadgeCheck,
    title: "Launch",
    desc: "QA, data migration, and go-live with zero downtime.",
  },
  {
    num: "06",
    icon: TrendingUp,
    title: "Grow",
    desc: "CRO tests, campaigns, and analytics after launch.",
  },
];

const SECURITY_POINTS = [
  "PCI-DSS Level 1 payment processing — card data never touches your servers",
  "SSL/TLS encryption on every page, session, and API call",
  "Fraud scoring with 3D Secure and AVS checks at checkout",
  "Daily automated backups with one-click restore",
  "Role-based admin access and full audit logs for your team",
];

const FAQ = [
  {
    q: "How long does it take to launch a store?",
    a: "A standard catalogue store goes live in 4–6 weeks. Custom builds with ERP integrations, headless architecture, or large migrations typically take 8–12 weeks. You get a fixed timeline before work begins.",
  },
  {
    q: "Can you migrate my existing store?",
    a: "Yes. Products, customers, orders, reviews, and SEO URLs are migrated from Shopify, WooCommerce, Magento, or any custom platform — with 301 redirects in place so your search rankings don't drop on day one.",
  },
  {
    q: "Which payment providers do you support?",
    a: "Stripe, PayPal, Adyen, Razorpay, and most regional gateways — plus digital wallets like Apple Pay and Google Pay, and buy-now-pay-later providers such as Klarna and Afterpay.",
  },
  {
    q: "Do you integrate with my ERP and shipping carriers?",
    a: "We build connectors for SAP, NetSuite, Odoo, and custom ERPs, plus live rates and label printing with DHL, FedEx, UPS, and regional couriers — so orders flow from checkout to doorstep without manual entry.",
  },
  {
    q: "How are returns and refunds handled?",
    a: "A built-in RMA flow lets customers request returns from their order page, generates return labels automatically, restocks inventory on receipt, and issues refunds through the original payment method — all tracked in one dashboard.",
  },
];

const EcommercePage = () => {
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
      <section className="ec-hero">
        <video
          ref={videoRef}
          className="ec-hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster={ecommerceHeroImg}
          aria-hidden="true"
        >
          <source src={ecommerceVideo} type="video/mp4" />
        </video>
        <span className="ec-hero-overlay" aria-hidden="true" />

        <div className="ec-hero-inner">
          <motion.div className="ec-hero-content" {...fadeUp(0.1)}>
            <span className="ec-eyebrow">
              <span className="ec-eyebrow-dot" />
              E-Commerce
            </span>
            <h1 className="ec-hero-title">
              Launch Your Store.
              <br />
              <span className="ec-hero-accent">Scale Without Limits</span>
            </h1>
            <p className="ec-hero-sub">
              Custom storefronts, secure checkout, and unified inventory — a
              full commerce platform engineered to turn visitors into loyal
              customers on every channel you sell through.
            </p>
            <div className="ec-hero-actions">
              <Link to="/contact" className="ec-btn-primary">
                Start Selling <ArrowRight size={16} />
              </Link>
              <a href="#how-it-works" className="ec-hero-text-link">
                See How It Works <ArrowRight size={14} />
              </a>
            </div>
            <div className="ec-hero-chips">
              <span className="ec-hero-chip">
                <ShieldCheck size={13} /> PCI-DSS Compliant
              </span>
              <span className="ec-hero-chip">
                <Zap size={13} /> Sub-Second Loads
              </span>
              <span className="ec-hero-chip">
                <Globe size={13} /> Sell in 30+ Countries
              </span>
            </div>
          </motion.div>

          <motion.div className="ec-hero-visual" {...zoomIn(0.25)}>
            <article className="ec-listing-card">
              <div className="ec-listing-media">
                <img src={ecommerceCardImg} alt="Fashion product ready to sell online" />
                <span className="ec-listing-badge">
                  <Star size={13} /> Top Rated
                </span>
                <span className="ec-listing-tag">Flash Sale</span>
              </div>
              <div className="ec-listing-body">
                <span className="ec-listing-kicker">Streetwear · Unisex</span>
                <h3 className="ec-listing-title">Aero Runner Sneakers — Volt</h3>
                <div className="ec-listing-row">
                  <div>
                    <span className="ec-listing-label">Order Total</span>
                    <strong className="ec-listing-price">$129.00</strong>
                  </div>
                  <div className="ec-listing-bidders">
                    <span className="ec-listing-avatar">JT</span>
                    <span className="ec-listing-avatar">MK</span>
                    <span className="ec-listing-avatar ec-listing-avatar--more">+9</span>
                  </div>
                </div>
                <div className="ec-listing-progress">
                  <span style={{ width: "76%" }} />
                </div>
                <span className="ec-listing-meta">
                  <TrendingUp size={13} /> 342 sold this week · 12 in cart
                </span>
              </div>
            </article>

            <motion.span className="ec-escrow-chip" {...fadeUp(0.5)}>
              <Lock size={14} />
              <span>
                <strong>$48,210</strong>
                processed securely today
              </span>
            </motion.span>
          </motion.div>
        </div>
      </section>

      {/* ============ COMMERCE MARQUEE ============ */}
      <div className="ec-marquee" aria-hidden="true">
        <div className="ec-marquee-track">
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <span key={`${item}-${i}`} className="ec-marquee-item">
              <ShoppingBag size={13} strokeWidth={2} />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ============ STATS ============ */}
      <section className="ec-stats">
        <div className="ec-stats-inner">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              className="ec-stat"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ amount: 0.5 }}
            >
              <span className="ec-stat-icon">
                <s.icon size={18} strokeWidth={1.9} />
              </span>
              <strong className="ec-stat-num">{s.num}</strong>
              <span className="ec-stat-label">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section className="ec-features" id="features">
        <div className="ec-features-inner">
          <motion.div className="ec-sec-head" {...fadeUp(0.1)}>
            <span className="ec-eyebrow">
              <span className="ec-eyebrow-dot" />
              Why Build Here
            </span>
            <h2 className="ec-sec-title">
              Everything a Store Needs to <span className="ec-hero-accent">Sell</span>
            </h2>
            <p className="ec-sec-sub">
              Storefront, checkout, inventory, and growth tools in one platform —
              so you spend your time selling instead of stitching plugins
              together.
            </p>
          </motion.div>

          <div className="ec-feat-grid">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                className="ec-feat-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ amount: 0.3 }}
              >
                <span className="ec-feat-icon">
                  <f.icon size={22} strokeWidth={1.8} />
                </span>
                <h4 className="ec-feat-title">{f.title}</h4>
                <p className="ec-feat-desc">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONVERSION SHOWCASE ============ */}
      <section className="ec-showcase">
        <div className="ec-showcase-inner">
          <motion.div className="ec-showcase-media" {...fadeUp(0.1)}>
            <div className="ec-showcase-img">
              <img
                src={ecommerceHeroImg}
                alt="Shopper browsing an online store"
                loading="lazy"
              />
            </div>
            <motion.div
              className="ec-showcase-metric ec-showcase-metric--one"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.25 }}
              viewport={{ amount: 0.4 }}
            >
              <strong>+38%</strong>
              <span>Checkout Conversion</span>
            </motion.div>
            <motion.div
              className="ec-showcase-metric ec-showcase-metric--two"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.35 }}
              viewport={{ amount: 0.4 }}
            >
              <strong>-24%</strong>
              <span>Cart Abandonment</span>
            </motion.div>
          </motion.div>

          <motion.div className="ec-showcase-content" {...fadeRight(0.15)}>
            <span className="ec-eyebrow">
              <span className="ec-eyebrow-dot" />
              Conversion First
            </span>
            <h2 className="ec-sec-title">
              Turn Visitors Into <span className="ec-hero-accent">Repeat Buyers</span>
            </h2>
            <p className="ec-showcase-text">
              Every extra second and every extra click costs a sale. The
              storefront is engineered around speed, clarity, and trust — so
              shoppers reach checkout before doubt sets in.
            </p>
            <ul className="ec-check-list">
              <li className="ec-check-item">
                <span className="ec-check-bullet">
                  <Check size={13} strokeWidth={3} />
                </span>
                Sub-second page loads with edge caching and image optimisation
              </li>
              <li className="ec-check-item">
                <span className="ec-check-bullet">
                  <Check size={13} strokeWidth={3} />
                </span>
                One-page checkout with wallets, cards, and buy-now-pay-later
              </li>
              <li className="ec-check-item">
                <span className="ec-check-bullet">
                  <Check size={13} strokeWidth={3} />
                </span>
                Abandoned-cart recovery with automated email and SMS flows
              </li>
              <li className="ec-check-item">
                <span className="ec-check-bullet">
                  <Check size={13} strokeWidth={3} />
                </span>
                Personalised recommendations from on-site browsing behaviour
              </li>
            </ul>
            <Link to="/contact" className="ec-showcase-btn">
              Request a Demo <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============ CATEGORIES ============ */}
      <section className="ec-cats">
        <div className="ec-cats-inner">
          <motion.div className="ec-sec-head" {...fadeUp(0.1)}>
            <span className="ec-eyebrow">
              <span className="ec-eyebrow-dot" />
              What We Build
            </span>
            <h2 className="ec-sec-title">
              Stores for Every <span className="ec-hero-accent">Aisle</span>
            </h2>
            <p className="ec-sec-sub">
              From fashion drops to grocery delivery — catalogue, checkout, and
              fulfilment tuned to how each category is actually bought.
            </p>
          </motion.div>

          <div className="ec-cats-grid">
            {CATEGORIES.map((c, i) => (
              <motion.a
                key={c.name}
                href="#features"
                className="ec-cat"
                style={{ "--gem-1": c.c1, "--gem-2": c.c2 }}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ amount: 0.3 }}
              >
                <span className="ec-cat-gem" aria-hidden="true">
                  <c.Icon size={28} strokeWidth={1.5} />
                </span>
                <span className="ec-cat-info">
                  <strong className="ec-cat-name">{c.name}</strong>
                  <span className="ec-cat-count">{c.count}</span>
                </span>
                <span className="ec-cat-arrow" aria-hidden="true">
                  <ArrowRight size={15} />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="ec-process" id="how-it-works">
        <div className="ec-process-inner">
          <motion.div className="ec-sec-head" {...fadeUp(0.1)}>
            <span className="ec-eyebrow">
              <span className="ec-eyebrow-dot" />
              How It Works
            </span>
            <h2 className="ec-sec-title">
              From Blueprint to <span className="ec-hero-accent">Launch Day</span>
            </h2>
            <p className="ec-sec-sub">
              Six clear steps between your first call and your first order —
              with a checkpoint and a demo at every stage.
            </p>
          </motion.div>

          <div className="ec-steps">
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.num}
                className="ec-step"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                viewport={{ amount: 0.3, once: true }}
              >
                <div className="ec-step-node">
                  <span className="ec-step-num">{step.num}</span>
                  <span className="ec-step-core">
                    <step.icon size={17} strokeWidth={1.9} />
                  </span>
                </div>
                <article className="ec-step-card">
                  <h4 className="ec-step-title">{step.title}</h4>
                  <p className="ec-step-desc">{step.desc}</p>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECURITY (themed band) ============ */}
      <section className="ec-security">
        <div className="ec-security-inner">
          <motion.div className="ec-security-media" {...fadeUp(0.1)}>
            <img
              src={securityImg}
              alt="Secure e-commerce checkout and payment protection concept"
              loading="lazy"
            />
            <span className="ec-security-glow" aria-hidden="true" />
          </motion.div>

          <motion.div className="ec-security-content" {...fadeRight(0.15)}>
            <span className="ec-eyebrow">
              <span className="ec-eyebrow-dot" />
              Store Protection
            </span>
            <h2 className="ec-sec-title">
              Security Built for <span className="ec-hero-accent">Online Retail</span>
            </h2>
            <p className="ec-security-text">
              A store is only as trusted as its checkout. From card data to
              customer records, every layer of the platform is protected — so
              shoppers buy with confidence and chargebacks stay low.
            </p>
            <ul className="ec-security-list">
              {SECURITY_POINTS.map((point) => (
                <li key={point} className="ec-security-li">
                  <span className="ec-security-bullet">
                    <ShieldCheck size={15} strokeWidth={2} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ============ ANALYTICS ============ */}
      <section className="ec-insights">
        <div className="ec-insights-inner">
          <motion.div className="ec-insights-content" {...fadeUp(0.1)}>
            <span className="ec-eyebrow">
              <span className="ec-eyebrow-dot" />
              Commerce Analytics
            </span>
            <h2 className="ec-sec-title">
              Know What Sells <span className="ec-hero-accent">Before You Stock Up</span>
            </h2>
            <p className="ec-insights-text">
              Live dashboards on revenue, conversion, and inventory — so you
              reorder what moves, drop what doesn't, and price with data
              instead of instinct.
            </p>
            <ul className="ec-check-list">
              <li className="ec-check-item">
                <span className="ec-check-bullet">
                  <Check size={13} strokeWidth={3} />
                </span>
                Real-time revenue, AOV, and conversion by channel and device
              </li>
              <li className="ec-check-item">
                <span className="ec-check-bullet">
                  <Check size={13} strokeWidth={3} />
                </span>
                Best-seller and dead-stock reports down to the SKU
              </li>
              <li className="ec-check-item">
                <span className="ec-check-bullet">
                  <Check size={13} strokeWidth={3} />
                </span>
                Cohort retention and repeat-purchase rate per campaign
              </li>
              <li className="ec-check-item">
                <span className="ec-check-bullet">
                  <Check size={13} strokeWidth={3} />
                </span>
                Low-stock and price-change alerts on the products you watch
              </li>
            </ul>
            <a href="#features" className="ec-showcase-btn">
              Explore Analytics <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div className="ec-insights-media" {...zoomIn(0.15)}>
            <div className="ec-insights-img">
              <img
                src={insightsImg}
                alt="E-commerce analytics dashboard"
                loading="lazy"
              />
            </div>
            <motion.div
              className="ec-metric-card ec-metric-card--one"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.25 }}
              viewport={{ amount: 0.4 }}
            >
              <strong>+18%</strong>
              <span>Revenue MoM</span>
            </motion.div>
            <motion.div
              className="ec-metric-card ec-metric-card--two"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.35 }}
              viewport={{ amount: 0.4 }}
            >
              <strong>3.4x</strong>
              <span>Return on Ad Spend</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="ec-faq">
        <div className="ec-faq-inner">
          <motion.div className="ec-sec-head" {...fadeUp(0.1)}>
            <span className="ec-eyebrow">
              <span className="ec-eyebrow-dot" />
              Questions
            </span>
            <h2 className="ec-sec-title">
              Good to <span className="ec-hero-accent">Know</span>
            </h2>
          </motion.div>

          <motion.div
            className="ec-faq-list"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ amount: 0.2 }}
          >
            {FAQ.map((item) => (
              <details key={item.q} className="ec-faq-item">
                <summary className="ec-faq-q">
                  {item.q}
                  <span className="ec-faq-icon" aria-hidden="true">
                    <ChevronDown size={17} strokeWidth={2.2} />
                  </span>
                </summary>
                <p className="ec-faq-a">{item.a}</p>
              </details>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="ec-cta">
        <div className="ec-cta-inner">
          <motion.div className="ec-cta-content" {...fadeUp(0.1)}>
            <div className="ec-cta-text">
              <span className="ec-eyebrow">
                <span className="ec-eyebrow-dot" />
                Start Selling
              </span>
              <h2 className="ec-cta-title">
                Ready to Launch <span className="ec-hero-accent">Your Store?</span>
              </h2>
              <p className="ec-cta-desc">
                Tell us about your products and your customers — we'll send
                back a store blueprint, a timeline, and a fixed quote within
                three business days.
              </p>
            </div>
            <div className="ec-cta-actions">
              <Link to="/contact" className="ec-btn-primary">
                Get a Free Quote <ArrowRight size={16} />
              </Link>
              <a href="#how-it-works" className="ec-cta-link">
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

export default EcommercePage;
