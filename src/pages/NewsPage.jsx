import React, { useMemo, useState } from "react";
// eslint-disable-next-line no-unused-vars -- motion is used via <motion.div> JSX member expressions
import { motion, AnimatePresence } from "motion/react";
import {
  Radio,
  Search,
  X,
  Plus,
  Minus,
  Mail,
  Phone,
  MapPin,
  Download,
  FileText,
  Image as ImageIcon,
  Archive,
  ArrowUpRight,
  Circle,
  Rss,
  Clock,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../sections/CTA";
import { fadeUp } from "../utils/animations";

import realEstateImg from "../assets/Real-Estate.jpg";
import softwareImg from "../assets/services/software-development.jpg";
import interiorImg from "../assets/services/interior-design.jpg";
import infrastructureImg from "../assets/services/infrastructure.jpg";
import marketingImg from "../assets/services/marketing.jpg";
import masterPlanImg from "../assets/services/master-planning.jpg";
import "./NewsPage.css";

const FILTERS = ["All", "Expansion", "Milestone", "Partnership", "Award", "People", "Product"];

const DISPATCHES = [
  {
    id: "colombo-studio",
    date: "18 Oct 2025",
    time: "09:40",
    category: "Expansion",
    title: "Second delivery floor opens in Colombo 07",
    summary:
      "A 6,200 sq ft floor dedicated to design, engineering and BIM takes the Nugegoda studio past 34,000 sq ft of combined workspace.",
    body: [
      "Grow More Solutions has taken on additional floor space adjacent to its existing Nugegoda studio, creating a dedicated design and engineering floor that opens this month.",
      "The new floor is fitted for live BIM coordination rather than static drawing — every project desk carries a shared model viewer, so structural, architectural and MEP decisions are made against one coordinated file rather than three separate PDFs.",
      "Recruitment for the expanded team is already underway, with the first four appointments confirmed and a further nine roles advertised across the design and project-controls disciplines.",
    ],
    points: [
      "6,200 sq ft of additional design and engineering space",
      "Shared live-model coordination across all disciplines",
      "13 new roles advertised across design and project controls",
    ],
    location: "Colombo 07, Sri Lanka",
    image: interiorImg,
    lead: true,
  },
  {
    id: "riverfront-handover",
    date: "02 Oct 2025",
    time: "15:15",
    category: "Milestone",
    title: "Riverfront mixed-use scheme handed over two weeks early",
    summary:
      "The 148-unit residential component of the Riverfront development has been certified and handed to the managing owner.",
    body: [
      "The Riverfront residential scheme has been completed and certified, with the handover to the managing owner recorded two weeks ahead of the contract programme.",
      "The early completion was driven by the frozen three-week look-ahead agreed at mobilisation, together with the weekly reporting rhythm that flagged a long-lead drainage package while there was still time to reorder it.",
      "Snagging is now closed with photographic evidence against every item, and the defects liability period begins on handover rather than on an internal sign-off date.",
    ],
    points: [
      "148 residential units certified and handed over",
      "Two weeks ahead of the contract programme",
      "Snag register closed with photographic proof",
    ],
    location: "Sri Lanka",
    image: realEstateImg,
  },
  {
    id: "port-network",
    date: "21 Sep 2025",
    time: "11:05",
    category: "Partnership",
    title: "Network fabric partnership signed with regional carrier",
    summary:
      "A three-year agreement adds redundant transit capacity and a second points-of-presence for clients running always-on operations.",
    body: [
      "Grow More Solutions has signed a three-year network agreement with a regional carrier, adding redundant transit capacity and a second points-of-presence to the estate.",
      "The agreement is deliberately more than a capacity purchase. Clients in banking, healthcare and logistics have asked for network designs that survive a single-site failure, and the second point of presence is what makes that achievable without doubling their costs.",
      "Migration is planned in three waves over the coming quarter, with dual-running throughout so that no client faces a cutover without a tested fallback.",
    ],
    points: [
      "Redundant transit plus a second points-of-presence",
      "Dual-running migration across three waves",
      "No single-site failure path for clients on the estate",
    ],
    location: "Colombo, Sri Lanka",
    image: infrastructureImg,
  },
  {
    id: "construction-award",
    date: "09 Sep 2025",
    time: "18:30",
    category: "Award",
    title: "Infrastructure practice shortlisted for national construction award",
    summary:
      "The award recognises delivery of a mixed-use masterplan delivered under a fixed programme with no recorded variation claims.",
    body: [
      "The infrastructure and planning practice has been shortlisted in the contractor category of a national construction award, for a mixed-use masterplan delivered under a fixed programme.",
      "The submission focused on the parts of delivery that are usually left out of an award entry: the number of variations raised against the contract, the ratio of instructed to approved variations, and the programme deviation at handover.",
      "The award itself is presented next month. Whatever the outcome, the same measurement framework is now used internally on every project we run.",
    ],
    points: [
      "Shortlisted in the contractor category",
      "Zero recorded variation claims on the submitted project",
      "Delivery completed under a fixed programme",
    ],
    location: "Sri Lanka",
  },
  {
    id: "client-portal-release",
    date: "28 Aug 2025",
    time: "10:30",
    category: "Product",
    title: "Client portal v2 ships with live programme and approval trails",
    summary:
      "The rebuilt portal now carries the same weekly programme the site team works to, with approvals and documentation in one place.",
    body: [
      "Version 2 of the client portal is now live for every project, replacing the monthly report archive with a live view of milestones, approvals and site documentation.",
      "The central change is that the portal now shows the same programme the site team works to, updated weekly without anyone having to ask. Approvals that used to arrive by email as attachments now sit against the decision they relate to.",
      "A weekly adoption report is shared internally. Where a client has not logged in for three weeks, the account manager makes contact — a portal that is ignored is worse than no portal at all.",
    ],
    points: [
      "Live programme updated weekly, no requests required",
      "Approvals attached to the decision they relate to",
      "Adoption tracked, with proactive follow-up when clients disengage",
    ],
    location: "Product",
    image: softwareImg,
  },
  {
    id: "bpo-floor",
    date: "12 Aug 2025",
    time: "16:45",
    category: "Expansion",
    title: "BPO delivery floor expands to 140 seats with follow-the-sun coverage",
    summary:
      "A new night-shift floor in Nugegoda extends coverage into six additional time zones without moving the existing team's rosters.",
    body: [
      "The BPO practice has expanded its Nugegoda delivery floor to 140 seats, adding a dedicated night-shift desk that extends coverage into six additional time zones.",
      "The expansion was designed around the existing roster rather than against it. Night-shift entitlements were rebuilt first, and the rosters that were already published were left untouched, so no existing agent had their life rearranged to accommodate the growth.",
      "Recruitment runs in two intakes, with a structured first week and a named owner on both sides of every handover boundary.",
    ],
    points: [
      "140 seats with a dedicated night-shift desk",
      "Six additional time zones covered",
      "Existing published rosters left unchanged through the expansion",
    ],
    location: "Nugegoda, Sri Lanka",
    image: marketingImg,
  },
  {
    id: "portfolio-launch",
    date: "30 Jul 2025",
    time: "12:00",
    category: "Milestone",
    title: "Public portfolio launches with eight completed case studies",
    summary:
      "Eight projects are now documented publicly with client, brief, scope and outcome — including the numbers behind each delivery.",
    body: [
      "The public portfolio is live with eight completed case studies spanning infrastructure, software, marketing, interiors, real estate and outsourcing.",
      "Each case study carries the brief, the scope, the constraints and the measured outcome, including the metrics that were not flattering. We publish the underperforming ones for the same reason we publish the successful ones — a portfolio that only contains wins is a brochure, not a record.",
      "The portfolio will grow as projects close, with a minimum of two new entries each quarter.",
    ],
    points: [
      "Eight case studies across six service lines",
      "Client, brief, scope and measured outcome published per project",
      "Minimum of two new entries per quarter",
    ],
    location: "Public",
  },
  {
    id: "engineering-leadership",
    date: "15 Jul 2025",
    time: "08:15",
    category: "People",
    title: "New director of engineering joins to lead the delivery disciplines",
    summary:
      "The appointment brings twenty-two years of construction delivery and programme controls into the delivery leadership team.",
    body: [
      "A new director of engineering has joined the leadership team, bringing twenty-two years across construction delivery, programme controls and quality assurance.",
      "The role was created for a specific reason: as the company grew, the disciplines that manage delivery — planning, controls, quality and handover — had started to be spread too thin across project teams.",
      "The remit is deliberately narrow. The new director owns the delivery standards, the reporting rhythm and the handover process, and works with the practice leads rather than replacing them.",
    ],
    points: [
      "Twenty-two years across delivery, controls and quality",
      "Owns delivery standards, reporting rhythm and handover process",
      "Works alongside practice leads rather than replacing them",
    ],
    location: "Colombo, Sri Lanka",
  },
  {
    id: "green-certification",
    date: "26 Jun 2025",
    time: "14:20",
    category: "Product",
    title: "Sustainable design package added to every master planning engagement",
    summary:
      "Energy, water, waste and daylight modelling is now standard scope on master planning work rather than an optional extra.",
    body: [
      "Energy, water, waste and daylight modelling is now standard scope on every master planning engagement, rather than an add-on that only appears when a client asks.",
      "The decision removes a familiar negotiation. When the analysis is built into the plan from the start, there is nothing left to price and nothing to argue about — the numbers are simply part of the design.",
      "Outputs are reported in the same one-page format used for cost and programme, so a client can see all three side by side.",
    ],
    points: [
      "Energy, water, waste and daylight modelling in base scope",
      "No separate pricing conversation required",
      "Reported alongside cost and programme in one format",
    ],
    location: "Service",
    image: masterPlanImg,
  },
  {
    id: "annual-report",
    date: "10 Jun 2025",
    time: "17:00",
    category: "Milestone",
    title: "Annual report published with full delivery metrics",
    summary:
      "Revenue, delivery volume, client retention and quality figures are published without rounding in the company's favour.",
    body: [
      "The annual report is published, covering the year to March across all six service lines, with delivery metrics reported alongside the commercial ones.",
      "Alongside growth figures, the report states retention rate, the number of projects delivered late, and the average cost of a change order — the three numbers that describe delivery quality more honestly than revenue does.",
      "Two metrics moved the wrong way this year. Both are explained in the report rather than omitted, and both have an owner and a target attached.",
    ],
    points: [
      "Full-year metrics across all six service lines",
      "Retention, late-delivery and change-order cost published",
      "Unfavourable metrics explained with named owners",
    ],
    location: "Corporate",
  },
  {
    id: "marketing-practice",
    date: "22 May 2025",
    time: "11:30",
    category: "Expansion",
    title: "Marketing practice moves to a retained performance model",
    summary:
      "Fixed-fee retainers replace project billing across the practice, tying the team to pipeline rather than to hours logged.",
    body: [
      "The marketing practice has moved from project billing to retained performance engagements, with a minimum six-month term on every new account.",
      "The model removes the mismatch that quietly damages agency work: under a project fee, the incentive is to deliver activity, while under a retainer tied to pipeline, the incentive is to deliver outcomes that survive the quarter.",
      "Existing clients have been migrated on their renewal dates rather than mid-contract, with the scope of work written down before the fee changed.",
    ],
    points: [
      "Retained performance model with a six-month minimum term",
      "Commercial model aligned to pipeline rather than hours",
      "Migration handled at renewal, never mid-contract",
    ],
    location: "Colombo, Sri Lanka",
    image: marketingImg,
  },
  {
    id: "support-certification",
    date: "05 May 2025",
    time: "13:10",
    category: "Award",
    title: "Dedicated support desk achieves ISO 27001 certification",
    summary:
      "The support operation was independently audited and certified for information security management, covering all client data handled.",
    body: [
      "The dedicated support operation has been independently audited and certified to ISO 27001 for information security management, covering every client account and every data set the desk handles.",
      "The audit examined access control, incident response, and the handover procedure for staff rotation — the area most likely to fail an audit, and the one the desk had rebuilt six months earlier.",
      "The certificate covers the support desk only. A separate audit of the wider infrastructure estate is scheduled for the second half of the year.",
    ],
    points: [
      "ISO 27001 certification for information security management",
      "Audit covered access control, incident response and staff handover",
      "Wider infrastructure estate audit scheduled separately",
    ],
    location: "Nugegoda, Sri Lanka",
  },
];

const PRESS_KIT = [
  { name: "Company fact sheet", type: "PDF", size: "1.2 MB", icon: FileText },
  { name: "Logotype suite", type: "SVG", size: "24 KB", icon: ImageIcon },
  { name: "Brand mark pack", type: "PNG", size: "480 KB", icon: ImageIcon },
  { name: "Project imagery", type: "ZIP", size: "48 MB", icon: Archive },
  { name: "Leadership portraits", type: "ZIP", size: "12 MB", icon: Archive },
];

const TICKER = DISPATCHES.slice(0, 7);

const NewsPage = () => {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const counts = useMemo(() => {
    const map = { All: DISPATCHES.length };
    DISPATCHES.forEach((d) => {
      map[d.category] = (map[d.category] || 0) + 1;
    });
    return map;
  }, []);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return DISPATCHES.filter((d) => {
      const matchCat = filter === "All" || d.category === filter;
      const matchQ =
        !q ||
        d.title.toLowerCase().includes(q) ||
        d.summary.toLowerCase().includes(q) ||
        d.category.toLowerCase().includes(q) ||
        d.location.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [filter, query]);

  const lead = DISPATCHES.find((d) => d.lead);
  const logItems = visible.filter((d) => d.id !== lead.id);

  return (
    <div className="nw-page">
      <Navbar />

      {/* ============ HERO / DESK ============ */}
      <section className="nw-hero">
        <div className="nw-hero-inner">
          <motion.div className="nw-hero-main" {...fadeUp(0.05)}>
            <span className="nw-dateline">
              <Radio size={12} strokeWidth={2.4} />
              NEWSROOM — COLOMBO, SRI LANKA
            </span>

            <h1 className="nw-hero-title">
              THE
              <br />
              WIRE
            </h1>

            <p className="nw-hero-lede">
              Company dispatches, project milestones and announcements from Grow More
              Solutions — filed as they happen, dated to the minute, and published without
              rounding in our favour.
            </p>

            <div className="nw-hero-meta">
              <span>
                <Clock size={12} strokeWidth={2} />
                UPDATED 18 OCT 2025, 09:40
              </span>
              <span>
                <Rss size={12} strokeWidth={2} />
                {DISPATCHES.length} DISPATCHES ON FILE
              </span>
            </div>
          </motion.div>

          <motion.aside className="nw-hero-desk" {...fadeUp(0.2)}>
            <span className="nw-desk-label">LATEST ON THE WIRE</span>
            <ol className="nw-desk-list">
              {TICKER.map((d, i) => (
                <li key={d.id}>
                  <span className="nw-desk-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="nw-desk-body">
                    <span className="nw-desk-time">{d.time}</span>
                    <span className="nw-desk-title">{d.title}</span>
                  </span>
                </li>
              ))}
            </ol>
          </motion.aside>
        </div>

        {/* ticker */}
        <div className="nw-ticker" aria-hidden="true">
          <div className="nw-ticker-track">
            {[0, 1].map((dup) => (
              <div className="nw-ticker-group" key={dup}>
                {TICKER.map((d) => (
                  <span className="nw-ticker-item" key={`${dup}-${d.id}`}>
                    <Circle size={7} strokeWidth={3} />
                    {d.date} {d.time} — {d.title}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LEAD DISPATCH ============ */}
      <section className="nw-lead">
        <div className="nw-lead-inner">
          <motion.div className="nw-lead-media" {...fadeUp(0.05)}>
            {lead.image && <img src={lead.image} alt={lead.title} loading="eager" />}
            <span className="nw-lead-stamp">LEAD DISPATCH</span>
          </motion.div>

          <motion.div className="nw-lead-text" {...fadeUp(0.15)}>
            <div className="nw-tagline">
              <span className="nw-tag">{lead.category}</span>
              <span className="nw-tag-date">
                {lead.date} — {lead.time}
              </span>
            </div>

            <h2 className="nw-lead-title">{lead.title}</h2>
            <p className="nw-lead-summary">{lead.summary}</p>

            <ul className="nw-lead-points">
              {lead.points.map((p) => (
                <li key={p}>
                  <span className="nw-bullet" />
                  {p}
                </li>
              ))}
            </ul>

            <div className="nw-lead-foot">
              <span className="nw-lead-loc">
                <MapPin size={13} strokeWidth={2} />
                {lead.location}
              </span>
              <button
                type="button"
                className="nw-wire-btn"
                onClick={() => setOpenId(openId === lead.id ? null : lead.id)}
              >
                {openId === lead.id ? "CLOSE DISPATCH" : "OPEN FULL DISPATCH"}
                {openId === lead.id ? (
                  <Minus size={14} strokeWidth={2.4} />
                ) : (
                  <Plus size={14} strokeWidth={2.4} />
                )}
              </button>
            </div>

            <AnimatePresence initial={false}>
              {openId === lead.id && (
                <motion.div
                  className="nw-expand"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="nw-expand-inner">
                    {lead.body.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ============ WIRE LOG ============ */}
      <section className="nw-log">
        <div className="nw-log-inner">
          <div className="nw-log-head">
            <div>
              <span className="nw-section-label">SECTION 02 — DISPATCH LOG</span>
              <h2 className="nw-section-title">Every filing, in order</h2>
            </div>

            <div className="nw-log-tools">
              {searchOpen ? (
                <div className="nw-search">
                  <Search size={15} strokeWidth={2} />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search the wire…"
                    aria-label="Search dispatches"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setQuery("");
                      setSearchOpen(false);
                    }}
                    aria-label="Close search"
                  >
                    <X size={15} strokeWidth={2} />
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  className="nw-search-btn"
                  onClick={() => setSearchOpen(true)}
                >
                  <Search size={15} strokeWidth={2} />
                  SEARCH
                </button>
              )}
            </div>
          </div>

          <nav className="nw-filters" aria-label="Filter dispatches">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                className={`nw-filter${filter === f ? " nw-filter--on" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f}
                <span className="nw-filter-count">{counts[f] || 0}</span>
              </button>
            ))}
          </nav>

          {logItems.length === 0 ? (
            <div className="nw-noresult">
              {visible.length === 0 ? (
                <>
                  <span>NO DISPATCHES MATCH THAT QUERY.</span>
                  <button
                    type="button"
                    onClick={() => {
                      setQuery("");
                      setFilter("All");
                    }}
                  >
                    CLEAR FILTERS
                  </button>
                </>
              ) : (
                <span>THE ONLY MATCHING DISPATCH IS THE LEAD FILING ABOVE.</span>
              )}
            </div>
          ) : (
            <div className="nw-log-list">
              {logItems.map((d, i) => (
                <motion.article
                  key={d.id}
                  className={`nw-row${openId === d.id ? " nw-row--open" : ""}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: Math.min(i, 6) * 0.04 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="nw-row-gutter">
                    <span className="nw-row-date">{d.date}</span>
                    <span className="nw-row-time">{d.time}</span>
                  </div>

                  <div className="nw-row-body">
                    <span className="nw-row-cat">{d.category}</span>
                    <div className="nw-row-top">
                      <h3 className="nw-row-title">{d.title}</h3>
                      {d.image && (
                        <span className="nw-row-thumb">
                          <img src={d.image} alt="" loading="lazy" />
                        </span>
                      )}
                    </div>
                    <p className="nw-row-summary">{d.summary}</p>

                    <AnimatePresence initial={false}>
                      {openId === d.id && (
                        <motion.div
                          className="nw-expand"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <div className="nw-expand-inner">
                            {d.body.map((para, j) => (
                              <p key={j}>{para}</p>
                            ))}
                            {d.points && (
                              <ul className="nw-expand-points">
                                {d.points.map((p) => (
                                  <li key={p}>
                                    <span className="nw-bullet" />
                                    {p}
                                  </li>
                                ))}
                              </ul>
                            )}
                            <span className="nw-expand-loc">
                              <MapPin size={12} strokeWidth={2} />
                              {d.location}
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <button
                    type="button"
                    className="nw-row-toggle"
                    onClick={() => setOpenId(openId === d.id ? null : d.id)}
                    aria-label={openId === d.id ? "Close dispatch" : "Open dispatch"}
                  >
                    {openId === d.id ? (
                      <Minus size={16} strokeWidth={2.4} />
                    ) : (
                      <Plus size={16} strokeWidth={2.4} />
                    )}
                  </button>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ============ PRESS DESK ============ */}
      <section className="nw-desk-section">
        <div className="nw-desk-inner">
          <div className="nw-desk-col">
            <span className="nw-section-label">SECTION 03 — PRESS DESK</span>
            <h2 className="nw-section-title">For editors and journalists</h2>
            <p className="nw-desk-copy">
              Media enquiries are handled by our communications desk within one working
              day. Technical questions on a specific project are routed straight to the
              delivery lead who ran it.
            </p>

            <div className="nw-contact">
              <a href="mailto:press@gms.lk" className="nw-contact-row">
                <Mail size={15} strokeWidth={2} />
                <span>
                  <strong>press@gms.lk</strong>
                  <em>General and media enquiries</em>
                </span>
              </a>
              <a href="tel:+94112345678" className="nw-contact-row">
                <Phone size={15} strokeWidth={2} />
                <span>
                  <strong>+94 11 234 5678</strong>
                  <em>Weekdays, 09:00 – 18:00 IST</em>
                </span>
              </a>
              <div className="nw-contact-row">
                <MapPin size={15} strokeWidth={2} />
                <span>
                  <strong>Head office</strong>
                  <em>Nugegoda, Sri Lanka</em>
                </span>
              </div>
            </div>
          </div>

          <div className="nw-desk-col">
            <span className="nw-section-label">BOILERPLATE</span>
            <h3 className="nw-desk-sub">About Grow More Solutions</h3>
            <p className="nw-desk-copy">
              Grow More Solutions is a Sri Lankan multidisciplinary firm delivering
              infrastructure, master planning, interior and graphic design, software,
              marketing, real estate and business process outsourcing. The company operates
              from a 34,000 sq ft studio in Nugegoda and supports clients across South Asia,
              the Middle East and Europe.
            </p>
            <p className="nw-desk-copy">
              The firm is structured around a single delivery standard — one programme, one
              reporting rhythm and one handover process — applied identically whether a
              project is a software platform, a building site or an outsourced operation.
            </p>

            <span className="nw-section-label nw-kit-label">PRESS KIT</span>
            <ul className="nw-kit">
              {PRESS_KIT.map((k) => (
                <li key={k.name}>
                  <span className="nw-kit-icon">
                    <k.icon size={15} strokeWidth={1.9} />
                  </span>
                  <span className="nw-kit-name">{k.name}</span>
                  <span className="nw-kit-meta">
                    {k.type} · {k.size}
                  </span>
                </li>
              ))}
            </ul>
            <p className="nw-kit-note">
              <Download size={13} strokeWidth={2} />
              Press assets are released on request — email the press desk and confirm your
              publication and deadline.
            </p>
          </div>
        </div>
      </section>

      {/* ============ CLOSING ============ */}
      <section className="nw-close">
        <div className="nw-close-inner">
          <span className="nw-close-label">END OF WIRE</span>
          <h2 className="nw-close-title">
            Something you would like covered on the record?
          </h2>
          <p className="nw-close-copy">
            Requests for comment, confirmation of a figure, or access to a project lead
            go through the press desk — not through the delivery teams.
          </p>
          <a href="mailto:press@gms.lk" className="nw-wire-btn nw-wire-btn--solid">
            CONTACT THE PRESS DESK
            <ArrowUpRight size={14} strokeWidth={2.4} />
          </a>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default NewsPage;
