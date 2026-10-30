import React, { useEffect, useMemo, useState } from "react";
// eslint-disable-next-line no-unused-vars -- motion is used via <motion.div> JSX member expressions
import { motion, AnimatePresence } from "motion/react";
import {
  Newspaper,
  Search,
  Clock,
  ArrowUpRight,
  ArrowRight,
  ChevronRight,
  Mail,
  Send,
  CheckCircle2,
  Sparkles,
  Quote,
  HardHat,
  Code2,
  Building2,
  PenTool,
  Megaphone,
  Headset,
  Bookmark,
  Share2,
  Eye,
  Hash,
  TrendingUp,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../sections/CTA";
import { fadeUp, zoomIn } from "../utils/animations";

import infrastructureImg from "../assets/services/infrastructure.jpg";
import masterPlanImg from "../assets/services/master-planning.jpg";
import softwareImg from "../assets/services/software-development.jpg";
import portalImg from "../assets/services/client-portal.jpg";
import interiorImg from "../assets/services/interior-design.jpg";
import marketingImg from "../assets/services/marketing.jpg";
import supportImg from "../assets/services/dedicated-support.jpg";
import realEstateImg from "../assets/Real-Estate.jpg";
import apartmentImg from "../assets/Modern Apartment.jpg";
import "./BlogPage.css";

const CATEGORIES = [
  { name: "All Topics", icon: Newspaper },
  { name: "Infrastructure & Planning", icon: HardHat },
  { name: "Software & IT", icon: Code2 },
  { name: "Real Estate", icon: Building2 },
  { name: "Design & Interiors", icon: PenTool },
  { name: "Marketing", icon: Megaphone },
  { name: "BPO & Operations", icon: Headset },
];

const POSTS = [
  {
    id: "miss-programme",
    title: "Why Most Construction Projects Miss Their Programme — and How We Fix It",
    excerpt:
      "Programme slippage is rarely a productivity problem. It is a coordination problem wearing a productivity costume. Here is the four-part discipline we put on every live site.",
    category: "Infrastructure & Planning",
    date: "18 Oct 2025",
    readTime: "9 min",
    author: "Kasun Wickramasinghe",
    authorRole: "Head of Infrastructure",
    image: infrastructureImg,
    tags: ["delivery", "programme", "site management"],
    featured: true,
    picks: true,
  },
  {
    id: "master-vs-site-planning",
    title: "Master Planning vs Site Planning: Where Budgets Actually Leak",
    excerpt:
      "Most budget surprises in development were decided in the drawing stage, months before a single machine arrived on site. A look at the decisions that cost the most money.",
    category: "Infrastructure & Planning",
    date: "12 Oct 2025",
    readTime: "7 min",
    author: "Nimasha Perera",
    authorRole: "Lead, Master Planning",
    image: masterPlanImg,
    tags: ["master planning", "budget", "zoning"],
    picks: true,
  },
  {
    id: "scoped-software",
    title: "The Real Cost of a Software Project Nobody Scoped",
    excerpt:
      "Unscoped work is not free — it is a loan against your launch date. What we insist on specifying before a single line of code is written, and why clients resist it.",
    category: "Software & IT",
    date: "05 Oct 2025",
    readTime: "8 min",
    author: "Rohan Jayasuriya",
    authorRole: "Head of Software",
    image: softwareImg,
    tags: ["scoping", "delivery", "platforms"],
    picks: true,
  },
  {
    id: "apartment-buyer",
    title: "What Buyers Actually Look For in an Apartment in 2025",
    excerpt:
      "We reviewed the handover preferences of buyers across our recent Colombo developments. Storage, daylight, and lift wait times mattered more than almost anything on the brochure.",
    category: "Real Estate",
    date: "28 Sep 2025",
    readTime: "6 min",
    author: "Amali Gunasekara",
    authorRole: "Design Lead",
    image: apartmentImg,
    tags: ["residential", "buyer trends", "handover"],
  },
  {
    id: "fitout-live-building",
    title: "Fitting Out a Building That Cannot Stop Trading",
    excerpt:
      "Night works, weekend access, and floor-by-floor sequencing: how we deliver an office fit-out without a single day of downtime for the business inside it.",
    category: "Design & Interiors",
    date: "22 Sep 2025",
    readTime: "7 min",
    author: "Tharindu Fernando",
    authorRole: "Engineering Lead",
    image: interiorImg,
    tags: ["fit-out", "phasing", "operations"],
  },
  {
    id: "marketing-compounds",
    title: "Beyond the Click: Building a Marketing Function That Compounds",
    excerpt:
      "Campaigns stop the day the budget does. We look at what a durable marketing function looks like — owned channels, content systems, and a reporting rhythm teams actually keep.",
    category: "Marketing",
    date: "16 Sep 2025",
    readTime: "8 min",
    author: "Shanika Jayawardena",
    authorRole: "Head of Growth",
    image: marketingImg,
    tags: ["growth", "channels", "measurement"],
  },
  {
    id: "support-burnout",
    title: "Running a 24/7 Support Operation Without Burning the Team Out",
    excerpt:
      "Overnight shifts quietly destroy retention. The roster, the incentives, and the handovers that keep a follow-the-sun floor healthy for years rather than quarters.",
    category: "BPO & Operations",
    date: "09 Sep 2025",
    readTime: "9 min",
    author: "Krishanthan Keerthi",
    authorRole: "Director, Head of Retention — BPO",
    image: supportImg,
    tags: ["support", "retention", "operations"],
  },
  {
    id: "site-records",
    title: "Five Site Records Every Project Should Keep",
    excerpt:
      "A short, practical list: the documents that protect your margin, defend your variations, and make handover painless. Most of them cost nothing to maintain.",
    category: "Infrastructure & Planning",
    date: "02 Sep 2025",
    readTime: "5 min",
    author: "Kasun Wickramasinghe",
    authorRole: "Head of Infrastructure",
    image: infrastructureImg,
    tags: ["documentation", "variations", "handover"],
  },
  {
    id: "portal-visibility",
    title: "Client Portals: Visibility Is the Cheapest Retention Tool You Own",
    excerpt:
      "Most disputes we saw were not about money — they were about not knowing. Why a transparent, always-on view of progress outperforms a weekly status meeting.",
    category: "Software & IT",
    date: "26 Aug 2025",
    readTime: "6 min",
    author: "Rohan Jayasuriya",
    authorRole: "Head of Software",
    image: portalImg,
    tags: ["portals", "client experience", "transparency"],
  },
  {
    id: "vacant-land-walkthrough",
    title: "From Vacant Land to Development Roadmap: A 50-Acre Walkthrough",
    excerpt:
      "A step-by-step account of taking a raw parcel through zoning, road hierarchy, utility corridors, and phasing — until it could be sold, funded, and built.",
    category: "Infrastructure & Planning",
    date: "19 Aug 2025",
    readTime: "10 min",
    author: "Nimasha Perera",
    authorRole: "Lead, Master Planning",
    image: masterPlanImg,
    tags: ["master planning", "development", "zoning"],
  },
  {
    id: "interior-principles",
    title: "Colour, Light, and Restraint: The Principles We Apply to Every Interior",
    excerpt:
      "Three ideas do most of the work in every space we deliver. They are unglamorous, repeatable, and the reason our interiors age well.",
    category: "Design & Interiors",
    date: "12 Aug 2025",
    readTime: "6 min",
    author: "Amali Gunasekara",
    authorRole: "Design Lead",
    image: interiorImg,
    tags: ["design", "principles", "fit-out"],
  },
  {
    id: "one-page-report",
    title: "The One-Page Site Report That Cut Our Client Queries by 60%",
    excerpt:
      "One document, sent every Friday, replaced most of the status chasing. The structure, the photos, and the three numbers that actually change decisions.",
    category: "Infrastructure & Planning",
    date: "05 Aug 2025",
    readTime: "5 min",
    author: "Tharindu Fernando",
    authorRole: "Engineering Lead",
    image: realEstateImg,
    tags: ["reporting", "communication", "site"],
  },
];

const ARTICLE_BODIES = {
  "miss-programme": {
    body: [
      "On every project we have taken over mid-flight, the same pattern appears: the work is not slow, the site is not badly managed, and the people are not incapable. What is missing is a single, shared answer to the question of what is happening this week and what it costs.",
      "We address that with four disciplines. A frozen three-week look-ahead that only the project team can change. A one-page report issued every Friday, with the same structure every time. A variation log that is updated the day it happens, not at the end of the month. And a weekly photo record tied to the programme, so progress is evidenced rather than asserted.",
      "None of this is dramatic, and that is the point. Programmes slip when information moves slowly between people who are each busy. Removing the delay from the information does more for a programme than adding another machine to the site.",
    ],
    takeaways: [
      "A three-week frozen look-ahead is more useful than a twelve-month plan nobody updates.",
      "The same report format every week beats a better report format every month.",
      "Log variations on the day they happen, while the memory and the evidence are both fresh.",
    ],
  },
  "master-vs-site-planning": {
    body: [
      "A master plan decides what a site can become. A site plan decides what a site will cost. The distance between those two documents is where development budgets leak — quietly, and long before anyone notices.",
      "The three decisions that cost the most money are made early: road hierarchy, utility corridors, and phasing. Change the road network after a survey and the earthworks, drainage, and access costs all move. Change it before the survey and you can optimise the whole site around it.",
      "We now run a cost sanity-check on every master plan before it is presented — not a full cost plan, but an order-of-magnitude test of whether the road and utility strategy is proportionate to the land value it is expected to unlock.",
    ],
    takeaways: [
      "Road hierarchy and utility corridors are the two most expensive decisions on any site.",
      "Test a master plan against land value before you present it, not after.",
      "Phasing is a cost decision, not just a delivery one — the wrong order of phases can strand a road network.",
    ],
  },
  "scoped-software": {
    body: [
      "Unscoped work feels cheap at the start, because nothing is being written down. The cost arrives later, as a launch date that moves, a feature that was assumed rather than agreed, and a client who is paying for a platform that does not match how their people actually work.",
      "Before we write a line of code, we insist on three artefacts: a written process map of how the work happens today, a prioritised list of what the platform must do on day one, and an explicit list of what it will deliberately not do. That last one is the one clients resist, and the one that saves the project.",
      "The cost of these conversations is a few days. The cost of skipping them is usually a scope argument halfway through delivery, at the most expensive possible moment to have one.",
    ],
    takeaways: [
      "Document the current process before designing the future one — the gap is where scope hides.",
      "Write down what the platform will not do, and get that agreed in writing.",
      "A week of scoping routinely saves months of delivery.",
    ],
  },
  "apartment-buyer": {
    body: [
      "We logged the handover preferences of buyers across our recent Colombo developments, then compared them against what we had originally assumed mattered. Three things were consistently undervalued in our own early designs.",
      "Storage was the first. Buyers do not ask for luxury finishes; they ask where the luggage, the stock, and the washing machine live. The second was daylight — specifically cross-ventilation, which buyers can sense immediately and which we can measure on the plan. The third was lift wait time at peak hours, which was never modelled at all until we started treating it as a design input rather than a building-services detail.",
      "None of these are expensive to improve if they are considered at the planning stage, and all of them are expensive to retrofit afterwards. That is the recurring lesson of our residential work: the cheapest upgrade happens on the drawing.",
    ],
    takeaways: [
      "Buyers rank storage, daylight, and lift wait time above decorative finishes.",
      "Cross-ventilation can be measured on the plan — check it before you commit to a layout.",
      "Peak-hour lift wait time is a design input, not a services detail.",
    ],
  },
  "fitout-live-building": {
    body: [
      "A fit-out inside a trading building is a logistics problem wearing a construction costume. Everyone understands the finishes; almost nobody plans the access, the noise, or the interruptions that come with them.",
      "Our approach is to treat the building as a live environment with rules, not a site with obstacles. Access windows are agreed with building management in writing before the first delivery. Noisy works are restricted to nights and weekends. Deliveries are sequenced so that the lobby, the goods lift, and the fire stairs are never occupied at the same time by two trades.",
      "The finish is that most of our live-building fit-outs are completed with the client never moving a desk and never losing a working day. That is not a flourish — for a business, it is usually the most valuable line in the handover report.",
    ],
    takeaways: [
      "Agree access windows in writing before mobilising, and honour them like a contract.",
      "Sequence deliveries so the lobby, goods lift, and fire stairs are never double-booked.",
      "Quiet works at night turn a disruptive project into a background one.",
    ],
  },
  "marketing-compounds": {
    body: [
      "Most marketing activity is designed to be judged in a fortnight. A campaign runs, the report is pulled, the budget is reallocated, and everything starts again from zero. The team is busy and the brand is going nowhere.",
      "The alternative is a marketing function with three layers: an always-on owned layer (content, search, lifecycle), a campaign layer for launches and moments, and a measurement layer that ties spend to pipeline rather than to impressions. The campaign layer is the visible part, but it is the smallest one that matters most for growth.",
      "What separates the two is not budget, it is rhythm. A function with a monthly content commitment, a quarterly review of what actually generated revenue, and a two-year plan for the channels it intends to own will out-perform a larger operation that starts from scratch every quarter.",
    ],
    takeaways: [
      "Build an owned layer first — campaigns amplify it, they cannot replace it.",
      "Report on pipeline and revenue, not on impressions that flatter the campaign.",
      "A monthly content rhythm and a quarterly revenue review beat a large but stateless budget.",
    ],
  },
  "support-burnout": {
    body: [
      "Support operations rarely fail because of capability. They fail because the roster treats humans as interchangeable overnights, and attrition takes the accumulated experience of the team with it.",
      "The three things that keep a follow-the-sun floor healthy are unglamorous. Rosters are published two months ahead so people can plan their lives, not just their shifts. Night work is compensated at a rate that reflects what it actually costs, not an amount that was set once in 2019. And handovers are structured — a written summary, a named owner on both sides of the boundary, and a quality check on the first week of every new agent.",
      "The metric that tells you it is working is not headcount or ticket volume. It is the six-month tenure rate on the night shift. When it climbs, quality stops being a monthly fight.",
    ],
    takeaways: [
      "Publish rosters two months ahead — uncertainty, not workload, drives attrition.",
      "Compensate night work honestly; under-compensation hides in retention costs.",
      "Measure six-month night-shift tenure as your leading quality indicator.",
    ],
  },
  "site-records": {
    body: [
      "A site record is not paperwork for its own sake. It is the difference between a variation you can prove and one you can only assert — and between a handover that closes in a week and one that drags on for a season.",
      "The five we keep on every project are: a dated photographic baseline of the site before works begin, a daily labour and plant return, a running variation register with supporting evidence attached, a weekly progress report issued in a fixed format, and a snag register that closes with photographic proof rather than a signature.",
      "None of these take long if they are built into the weekly rhythm from the first day. All of them take a long time to reconstruct if they are not. That is the entire argument.",
    ],
    takeaways: [
      "Photograph the site before works start — it is the cheapest evidence you will ever hold.",
      "Attach evidence to variations when they happen, not when they are claimed.",
      "Close snags with photographic proof, not a signature on a sheet.",
    ],
  },
  "portal-visibility": {
    body: [
      "Most of the disputes we have reviewed were not about money. They were about a client not knowing what was happening, and a contractor being unable to prove what they had done. Visibility solves both, and it is cheaper than any alternative.",
      "A client portal that shows live milestones, holds approvals in one place, and lets the client see the same programme the site team sees removes the most common source of friction: the status email chain. It also removes the contractor's burden of compiling a weekly update from scratch.",
      "The failure mode is a portal that is a reporting tool rather than a working one. If the client has to request a document rather than find it, and if the programme updates weekly without anyone being asked, it will be used. If not, it will be ignored and you will be back to email.",
    ],
    takeaways: [
      "Most project disputes are visibility failures, not cost failures.",
      "A portal earns adoption by being the default path, not an extra one.",
      "Live programme data removes a whole category of weekly status work.",
    ],
  },
  "vacant-land-walkthrough": {
    body: [
      "A raw parcel looks simple from the road: a boundary, some access, and a great deal of uncertainty. Turning it into a development roadmap is a sequence of decisions, and each one constrains the ones that follow.",
      "We start with the constraints — access, utilities, drainage, and the shape of the land — because a plan drawn before those are understood is a drawing we will redraw. Then zoning and density, then the road and utility network, then the phasing that lets early parts of the site be sold or funded while later parts are still being planned.",
      "The last step is the hardest and the most valuable: a costed infrastructure strategy that tells the client what has to be spent before the first sale, and what can wait. That is the document that turns a plan into a project someone can finance.",
    ],
    takeaways: [
      "Start with access, utilities, and drainage — a plan drawn before these is a plan to be redrawn.",
      "Phasing is what turns a land parcel into a fundable project.",
      "A costed infrastructure strategy is the document that makes the plan financeable.",
    ],
  },
  "interior-principles": {
    body: [
      "Every interior we deliver is the result of a small number of decisions applied consistently. None of them are fashionable, which is precisely why the spaces still look right five years later.",
      "The first is restraint: a limited palette, used consistently, ages better than a varied one. The second is light, treated as structure rather than decoration — where it comes from, how it is layered, and how it lands on the working surfaces. The third is proportion, which is nearly impossible to change once joinery is drawn, and which determines whether a room feels calm or crowded.",
      "None of these are expensive. They are simply easier to do when they are decided at concept stage and harder to do when they are decided at procurement stage, which is where most fit-outs end up.",
    ],
    takeaways: [
      "A limited palette, used consistently, ages better than variety.",
      "Treat light as structure, not decoration.",
      "Proportion is fixed at joinery stage — decide it at concept.",
    ],
  },
  "one-page-report": {
    body: [
      "A weekly site report should be readable in ninety seconds. When it is not, it gets skimmed, and a report that is skimmed is a report nobody acts on.",
      "The structure that works for us is fixed every week and never varies: a one-line summary of status, three numbers that changed, a short block on what is at risk, a progress photo against the programme, and decisions we need from the client. Nothing else.",
      "The numbers are deliberately few. Progress against programme, cost against budget, and open variations. Every extra metric adds a question and rarely adds a decision. When we cut the reporting to three numbers, the queries from the client dropped by more than half — because the answers were already on the page.",
    ],
    takeaways: [
      "A weekly report must be readable in ninety seconds or it will be skimmed.",
      "Fix the structure once and never vary it — variation is what makes reports unreadable.",
      "Three numbers that change beat thirty that do not.",
    ],
  },
};

POSTS.forEach((p) => {
  const a = ARTICLE_BODIES[p.id];
  if (a) {
    p.body = a.body;
    p.takeaways = a.takeaways;
  }
});

const TAGS = [
  "delivery",
  "documentation",
  "master planning",
  "programme",
  "handover",
  "scoping",
  "fit-out",
  "support",
  "design",
  "growth",
  "residential",
  "variations",
];

const PICK_COUNT = 3;
const PAGE_SIZE = 6;

const BlogPage = () => {
  const [category, setCategory] = useState("All Topics");
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [readPost, setReadPost] = useState(null);

  const counts = useMemo(() => {
    const map = { "All Topics": POSTS.length };
    POSTS.forEach((p) => {
      map[p.category] = (map[p.category] || 0) + 1;
    });
    return map;
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return POSTS.filter((p) => {
      const matchCat = category === "All Topics" || p.category === category;
      if (!matchCat) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [category, query]);

  useEffect(() => {
    if (!readPost) return undefined;

    const onKey = (e) => {
      if (e.key === "Escape") setReadPost(null);
    };

    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [readPost]);

  const applyCategory = (cat) => {    setCategory(cat);
    setVisibleCount(PAGE_SIZE);
  };

  const applyQuery = (q) => {
    setQuery(q);
    setVisibleCount(PAGE_SIZE);
  };

  const featured = POSTS.find((p) => p.featured) || POSTS[0];
  const picks = POSTS.filter((p) => p.picks).slice(0, PICK_COUNT);
  const shown = filtered.slice(0, visibleCount);
  const hasMore = filtered.length > visibleCount;

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <div>
      <Navbar />

      {/* ============ MASTHEAD ============ */}
      <section className="bl-masthead">
        <div className="bl-masthead-inner">
          <motion.div className="bl-masthead-bar" {...fadeUp(0.05)}>
            <span className="bl-masthead-brand">
              <span className="bl-masthead-brand-mark">GMS</span>
              Journal
            </span>
            <span className="bl-masthead-rule" />
            <span className="bl-masthead-issue">Issue 04 — October 2025</span>
          </motion.div>

          <div className="bl-masthead-grid">
            <motion.div {...fadeUp(0.12)}>
              <h1 className="bl-masthead-title">
                Field Notes on
                <br />
                <span className="bl-masthead-accent">Building & Running</span>
              </h1>
              <p className="bl-masthead-sub">
                Methods, numbers, and lessons pulled from live GMS projects —
                infrastructure, software, interiors, marketing, and the
                operations that keep them standing.
              </p>
            </motion.div>

            <motion.aside className="bl-in-this-issue" {...fadeUp(0.2)}>
              <span className="bl-in-label">
                <TrendingUp size={13} strokeWidth={2} />
                In this issue
              </span>
              <ul>
                {POSTS.slice(0, 4).map((p, i) => (
                  <li key={p.id}>
                    <span className="bl-in-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="bl-in-title">{p.title}</span>
                    <ChevronRight size={14} strokeWidth={1.9} />
                  </li>
                ))}
              </ul>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* ============ LEAD STORY ============ */}
      <section className="bl-lead">
        <div className="bl-lead-inner">
          <motion.div className="bl-lead-card" {...fadeUp(0.1)}>
            <div className="bl-lead-media">
              <img src={featured.image} alt={featured.title} loading="eager" />
              <span className="bl-lead-ribbon">
                <Sparkles size={13} strokeWidth={2} />
                Lead Story
              </span>
            </div>

            <div className="bl-lead-body">
              <span className="bl-lead-cat">{featured.category}</span>
              <h2 className="bl-lead-title">{featured.title}</h2>
              <p className="bl-lead-excerpt">{featured.excerpt}</p>

              <div className="bl-lead-byline">
                <span className="bl-avatar">
                  {featured.author
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <span className="bl-byline-info">
                  <strong>{featured.author}</strong>
                  <span>{featured.authorRole}</span>
                </span>
                <span className="bl-byline-meta">
                  <span>
                    <Clock size={13} strokeWidth={1.9} />
                    {featured.readTime}
                  </span>
                  <span>{featured.date}</span>
                </span>
              </div>

              <div className="bl-lead-actions">
                <button type="button" className="bl-btn" onClick={() => setReadPost(featured)}>
                  Read the article <ArrowRight size={15} />
                </button>
                <button type="button" className="bl-icon-btn" aria-label="Save article">
                  <Bookmark size={16} strokeWidth={1.9} />
                </button>
                <button type="button" className="bl-icon-btn" aria-label="Share article">
                  <Share2 size={16} strokeWidth={1.9} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ EDITOR'S PICKS ============ */}
      <section className="bl-picks">
        <div className="bl-picks-inner">
          <motion.div className="bl-picks-head" {...fadeUp(0.1)}>
            <h2 className="bl-sec-title">
              Editor&apos;s <span className="bl-masthead-accent">Picks</span>
            </h2>
            <span className="bl-picks-note">Three reads worth your morning</span>
          </motion.div>

          <div className="bl-picks-rail">
            {picks.map((p, i) => (
              <motion.button
                key={p.id}
                type="button"
                className="bl-pick"
                onClick={() => setReadPost(p)}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                viewport={{ amount: 0.2 }}
              >
                <span className="bl-pick-media">
                  <img src={p.image} alt={p.title} loading="lazy" />
                  <span className="bl-pick-num">{String(i + 1).padStart(2, "0")}</span>
                </span>
                <span className="bl-pick-cat">{p.category}</span>
                <strong className="bl-pick-title">{p.title}</strong>
                <span className="bl-pick-meta">
                  {p.readTime} read &middot; {p.date}
                </span>
                <span className="bl-pick-link">
                  Open article <ArrowUpRight size={14} strokeWidth={2} />
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TOOLBAR ============ */}
      <section className="bl-toolbar-section">
        <div className="bl-toolbar-inner">
          <div className="bl-toolbar">
            <div className="bl-search">
              <Search size={16} strokeWidth={2} />
              <input
                type="search"
                value={query}
                onChange={(e) => applyQuery(e.target.value)}
                placeholder="Search articles, topics, authors…"
                aria-label="Search articles"
              />
              {query && (
                <button type="button" onClick={() => applyQuery("")} aria-label="Clear search">
                  ×
                </button>
              )}
            </div>

            <div className="bl-chips">
              {CATEGORIES.map((c) => {
                const Icon = c.icon;
                return (
                  <button
                    key={c.name}
                    type="button"
                    className={`bl-chip${category === c.name ? " bl-chip--active" : ""}`}
                    onClick={() => applyCategory(c.name)}
                    aria-pressed={category === c.name}
                  >
                    <Icon size={13} strokeWidth={1.9} />
                    {c.name}
                    <span className="bl-chip-count">{counts[c.name] || 0}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <p className="bl-results">
            <strong>{filtered.length}</strong> article{filtered.length === 1 ? "" : "s"}
            {category !== "All Topics" && <> in {category}</>}
            {query && <> matching “{query}”</>}
          </p>
        </div>
      </section>

      {/* ============ POST GRID ============ */}
      <section className="bl-listing">
        <div className="bl-listing-inner">
          {shown.length === 0 ? (
            <div className="bl-empty">
              <Search size={26} strokeWidth={1.5} />
              <h3>No articles matched that search</h3>
              <p>Try a different keyword, or browse a topic from the filter row.</p>
              <button
                type="button"
                className="bl-btn bl-btn--ghost"
                onClick={() => {
                  setQuery("");
                  setCategory("All Topics");
                  setVisibleCount(PAGE_SIZE);
                }}
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="bl-grid">
              {shown.map((p, i) => (
                <motion.article
                  key={p.id}
                  className={`bl-card${i === 0 ? " bl-card--wide" : ""}`}
                  layout
                  initial={{ opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: Math.min(i, 5) * 0.05 }}
                >
                  <div className="bl-card-media">
                    <img src={p.image} alt={p.title} loading="lazy" />
                    <span className="bl-card-cat">{p.category}</span>
                    <span className="bl-card-read">
                      <Clock size={12} strokeWidth={2} />
                      {p.readTime}
                    </span>
                  </div>

                  <div className="bl-card-body">
                    <span className="bl-card-date">{p.date}</span>
                    <h3 className="bl-card-title">
                      <button type="button" onClick={() => setReadPost(p)}>
                        {p.title}
                      </button>
                    </h3>
                    <p className="bl-card-excerpt">{p.excerpt}</p>

                    <div className="bl-card-foot">
                      <span className="bl-card-author">
                        <span className="bl-avatar bl-avatar--sm">
                          {p.author
                            .split(" ")
                            .map((w) => w[0])
                            .join("")
                            .slice(0, 2)}
                        </span>
                        {p.author}
                      </span>
                      <button
                        type="button"
                        className="bl-card-link"
                        onClick={() => setReadPost(p)}
                      >
                        Read <ArrowUpRight size={14} strokeWidth={2} />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          {hasMore && (
            <div className="bl-more">
              <button
                type="button"
                className="bl-btn bl-btn--ghost"
                onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              >
                Load more articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ============ EDITOR'S NOTE ============ */}
      <section className="bl-note">
        <div className="bl-note-inner">
          <motion.div className="bl-note-card" {...zoomIn(0.15)}>
            <span className="bl-note-quote">
              <Quote size={26} strokeWidth={1.4} />
            </span>
            <h2 className="bl-note-title">From the Editor&apos;s Desk</h2>
            <p className="bl-note-text">
              We publish what we learn on live projects, not what sounds good in
              a pitch deck. Every article in this journal comes from work our own
              teams delivered, with the numbers we actually measured. If a method
              did not survive a real site, it does not belong here.
            </p>
            <span className="bl-note-sign">
              <span className="bl-avatar">GE</span>
              <span className="bl-byline-info">
                <strong>GMS Editorial</strong>
                <span>Nugegoda, Sri Lanka</span>
              </span>
            </span>
          </motion.div>
        </div>
      </section>

      {/* ============ TOPICS ============ */}
      <section className="bl-topics">
        <div className="bl-topics-inner">
          <motion.div className="bl-topics-head" {...fadeUp(0.1)}>
            <span className="bl-topics-label">
              <Hash size={14} strokeWidth={2} />
              Browse by topic
            </span>
            <p>Pick a topic and we will pull every article tagged with it.</p>
          </motion.div>

          <div className="bl-tag-cloud">
            {TAGS.map((t, i) => (
              <motion.button
                key={t}
                type="button"
                className="bl-tag"
                onClick={() => applyQuery(t)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                viewport={{ amount: 0.3 }}
              >
                #{t}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ============ NEWSLETTER ============ */}
      <section className="bl-news">
        <div className="bl-news-inner">
          <motion.div className="bl-news-copy" {...fadeUp(0.1)}>
            <span className="bl-news-label">
              <Mail size={14} strokeWidth={2} />
              The GMS Brief
            </span>
            <h2 className="bl-news-title">
              One useful email. <span className="bl-masthead-accent">Once a month.</span>
            </h2>
            <p className="bl-news-sub">
              New articles, project notes, and the numbers behind them. No
              promotions, no noise — unsubscribe in one click.
            </p>
          </motion.div>

          <motion.div className="bl-news-form-wrap" {...fadeUp(0.2)}>
            {subscribed ? (
              <div className="bl-news-done">
                <CheckCircle2 size={22} strokeWidth={1.8} />
                <div>
                  <strong>You are on the list.</strong>
                  <span>The next brief lands at the start of the month.</span>
                </div>
              </div>
            ) : (
              <form className="bl-news-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  aria-label="Email address"
                  required
                />
                <button type="submit" className="bl-btn">
                  Subscribe <Send size={15} strokeWidth={2} />
                </button>
              </form>
            )}
            <span className="bl-news-fine">
              <Eye size={13} strokeWidth={1.9} />
              We never share your address. Read our privacy policy.
            </span>
          </motion.div>
        </div>
      </section>

      {/* ============ ARTICLE READER ============ */}
      <AnimatePresence>
        {readPost && (
          <motion.div
            className="bl-reader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setReadPost(null)}
            role="dialog"
            aria-modal="true"
            aria-label={readPost.title}
          >
            <motion.article
              className="bl-reader-paper"
              key={readPost.id}
              initial={{ opacity: 0, y: 24, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.985 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="bl-reader-close"
                onClick={() => setReadPost(null)}
                aria-label="Close article"
              >
                ×
              </button>

              <div className="bl-reader-hero">
                <img src={readPost.image} alt={readPost.title} />
              </div>

              <div className="bl-reader-body">
                <span className="bl-reader-cat">{readPost.category}</span>
                <h2 className="bl-reader-title">{readPost.title}</h2>

                <div className="bl-reader-byline">
                  <span className="bl-avatar">
                    {readPost.author
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                  <span className="bl-byline-info">
                    <strong>{readPost.author}</strong>
                    <span>{readPost.authorRole}</span>
                  </span>
                  <span className="bl-byline-meta">
                    <span>
                      <Clock size={13} strokeWidth={1.9} />
                      {readPost.readTime}
                    </span>
                    <span>{readPost.date}</span>
                  </span>
                </div>

                <p className="bl-reader-lede">{readPost.excerpt}</p>

                {readPost.body?.map((para, i) => (
                  <p key={i} className="bl-reader-para">
                    {para}
                  </p>
                ))}

                {readPost.takeaways?.length > 0 && (
                  <div className="bl-reader-takeaways">
                    <h4>Key Takeaways</h4>
                    <ul>
                      {readPost.takeaways.map((t) => (
                        <li key={t}>
                          <CheckCircle2 size={15} strokeWidth={1.9} />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="bl-reader-tags">
                  {readPost.tags.map((t) => (
                    <button key={t} type="button" onClick={() => {
                      setReadPost(null);
                      applyQuery(t);
                    }}>
                      #{t}
                    </button>
                  ))}
                </div>

                <div className="bl-reader-foot">
                  <span className="bl-reader-share">
                    <Share2 size={15} strokeWidth={1.9} />
                    Share this article
                  </span>
                  <button
                    type="button"
                    className="bl-btn bl-btn--ghost"
                    onClick={() => setReadPost(null)}
                  >
                    Back to articles
                  </button>
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>

      <CTA />
      <Footer />
    </div>
  );
};

export default BlogPage;
