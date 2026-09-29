import React, { Fragment, useMemo } from "react";
// eslint-disable-next-line no-unused-vars -- motion is used via <motion.div> JSX member expressions
import { motion } from "motion/react";
import {
  Database,
  Activity,
  Cookie,
  Share2,
  ShieldCheck,
  UserCheck,
  Link2,
  Baby,
  RefreshCw,
  Mail,
  Paperclip,
  CalendarCheck,
  FileText,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LegalProgress, LegalToc } from "../components/LegalPrimitives";
import "./LegalPages.css";

const SECTIONS = [
  {
    id: "sec-1",
    icon: Database,
    no: 1,
    title: "Information We Collect",
    lead: "We collect only the information needed to respond to you and operate this website.",
    points: [
      "Contact details — your name, email address, phone number, and message when you use our contact form.",
      "Technical data — IP address, browser type, device, and the pages you visit.",
      "Cookies and analytics — anonymised usage statistics that help us understand how the site is used.",
    ],
  },
  {
    id: "sec-2",
    icon: Activity,
    no: 2,
    title: "How We Use Your Information",
    lead: "We use the information we collect for clear business purposes.",
    points: [
      "To respond to your enquiries and provide quotes or proposals.",
      "To deliver the services you request and manage our relationship with you.",
      "To improve our website, services, and overall user experience.",
      "To meet legal, regulatory, and accounting obligations.",
    ],
  },
  {
    id: "sec-3",
    icon: Cookie,
    no: 3,
    title: "Cookies",
    lead: "Our website uses cookies to keep the site working and to understand how visitors use it.",
    points: [
      "Essential cookies that make the website function correctly.",
      "Preference cookies that remember your settings, such as your preferred theme.",
      "Analytics cookies that help us improve the site. These are aggregated and not personally identifying.",
      "You can disable cookies in your browser at any time — most of the website will still work.",
    ],
  },
  {
    id: "sec-4",
    icon: Share2,
    no: 4,
    title: "Sharing & Disclosure",
    lead: "We do not sell, rent, or trade your personal information.",
    points: [
      "We only share data with trusted service providers who help us operate the website (hosting, analytics, and email).",
      "We may disclose information where required by law, regulation, or to protect our legal rights.",
    ],
  },
  {
    id: "sec-5",
    icon: ShieldCheck,
    no: 5,
    title: "Security & Retention",
    lead: "We apply reasonable technical and organisational safeguards to protect your data, and we keep it only as long as needed.",
    points: [
      "Data is stored securely and access is limited to authorised staff.",
      "Information is retained only for as long as necessary for the purposes above, or as required by law.",
    ],
  },
  {
    id: "sec-6",
    icon: UserCheck,
    no: 6,
    title: "Your Rights",
    lead: "You can request access to, correction of, or deletion of your personal information at any time.",
    points: [
      "Request a copy of the data we hold about you.",
      "Ask us to correct or update inaccurate information.",
      "Ask us to delete your information or restrict how it is used.",
      "To exercise any of these rights, email us at hello@gms.lk.",
    ],
  },
  {
    id: "sec-7",
    icon: Link2,
    no: 7,
    title: "Third-Party Links",
    lead: "Our website may link to external websites. We are not responsible for the privacy practices or content of those sites.",
  },
  {
    id: "sec-8",
    icon: Baby,
    no: 8,
    title: "Children's Privacy",
    lead: "Our website is not directed at children under the age of 13, and we do not knowingly collect personal information from them.",
  },
  {
    id: "sec-9",
    icon: RefreshCw,
    no: 9,
    title: "Changes to This Policy",
    lead: "We may update this Privacy Policy from time to time. The latest version will always be published on this page, with the date below.",
  },
  {
    id: "sec-10",
    icon: Mail,
    no: 10,
    title: "Contact Us",
    lead: "Questions about this policy? Our team is happy to help.",
    points: [
      "Email: hello@gms.lk",
      "Phone: +94 11 234 5678",
      "Grow More Solutions (Pvt) Ltd, Nugegoda, Sri Lanka",
      "We reply within 24 business hours.",
    ],
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
  viewport: { amount: 0.3 },
});

const PrivacyPage = () => {
  const tocItems = useMemo(
    () => SECTIONS.map((sec) => ({ id: sec.id, no: sec.no, title: sec.title })),
    []
  );

  return (
    <div className="legal-page" id="top">
      <Navbar />
      <LegalProgress />

      {/* ============ HERO ============ */}
      <section className="legal-hero">
        <div className="legal-hero-grid" aria-hidden="true" />
        <span className="legal-hero-filigree" aria-hidden="true">PRIVACY</span>
        <div className="legal-hero-inner">
          <nav className="legal-tabs" aria-label="Legal documents">
            <Link to="/privacy" className="legal-tab legal-tab--active">
              <FileText size={15} /> Privacy Policy
            </Link>
            <Link to="/terms" className="legal-tab">
              <ShieldCheck size={15} /> Terms of Service
            </Link>
          </nav>

          <motion.div
            className="legal-cover"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <header>
              <span className="legal-eyebrow">
                <span className="legal-eyebrow-dot" />
                Grow More Solutions (Pvt) Ltd
              </span>
              <h1 className="legal-hero-title">
                How we handle <span className="legal-accent">your data</span>
              </h1>
              <p className="legal-hero-sub">
                This policy explains what information we collect, why we collect
                it, and the choices you have over your data.
              </p>
            </header>

            <div className="legal-cover-meta">
              <div className="legal-meta-chips">
                <span className="legal-meta-chip">
                  <CalendarCheck size={14} /> Last Updated: 09.2026
                </span>
                <span className="legal-meta-chip">
                  <FileText size={14} /> 10 Sections
                </span>
                <span className="legal-meta-chip">
                  <ShieldCheck size={14} /> No Data Selling
                </span>
              </div>
              <span className="legal-cover-stamp" aria-hidden="true">Policy</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ BODY ============ */}
      <main className="legal-body">
        <LegalToc
          items={tocItems}
          pageLabel="Contents"
          note="Skip ahead to the section you need — every clause is one click away."
        />

        <article className="legal-doc">
          <motion.div className="legal-note" {...fadeUp(0.05)}>
            <span className="legal-note-icon">
              <Paperclip size={17} />
            </span>
            <div>
              <strong>In short</strong>
              <p>
                We collect only what we need to answer your enquiries and operate
                this website. We never sell your personal information, keep it
                only as long as required, and you can contact us any time to see,
                fix, or delete what we hold.
              </p>
            </div>
          </motion.div>

          <div className="legal-doc-body">
            {SECTIONS.map((sec, i) => (
              <Fragment key={sec.id}>
                {i > 0 && (
                  <div className="legal-doc-divider" aria-hidden="true">
                    <span />
                    <i>&#9670;</i>
                    <span />
                  </div>
                )}
                <article className="legal-clause" id={sec.id}>
                  <div className="legal-clause-mark" aria-hidden="true">
                    <span className="legal-clause-num">
                      {String(sec.no).padStart(2, "0")}
                    </span>
                    <motion.span
                      className="legal-clause-keyline"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>

                  <motion.div className="legal-clause-body" {...fadeUp(0.04)}>
                    <div className="legal-clause-head">
                      <span className="legal-clause-icon">
                        <sec.icon size={18} strokeWidth={1.8} />
                      </span>
                      <span className="legal-clause-code">
                        Clause {String(sec.no).padStart(2, "0")}
                      </span>
                      <h2 className="legal-clause-title">{sec.title}</h2>
                    </div>
                    <p className="legal-clause-lead">{sec.lead}</p>
                    {sec.points && (
                      <ul className="legal-clause-list">
                        {sec.points.map((point, j) => (
                          <li key={j}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                </article>
              </Fragment>
            ))}
          </div>

          {/* ============ END ============ */}
          <div className="legal-end">
            <div className="legal-end-mark">End of document</div>
            <div className="legal-end-grid">
              <div className="legal-end-cell">
                <span className="legal-end-label">Adopted by</span>
                <strong>Grow More Solutions (Pvt) Ltd</strong>
              </div>
              <div className="legal-end-cell">
                <span className="legal-end-label">Issued at</span>
                <strong>Nugegoda, Sri Lanka</strong>
                <span>Version 1.0 · September 2026</span>
              </div>
              <div className="legal-end-cell">
                <span className="legal-end-label">Questions</span>
                <strong>hello@gms.lk</strong>
                <span>+94 11 234 5678</span>
              </div>
            </div>
          </div>

          {/* ============ CTA ============ */}
          <motion.div className="legal-cta" {...fadeUp(0.05)}>
            <div>
              <h2 className="legal-cta-title">Questions about your data?</h2>
              <p className="legal-cta-sub">
                Our team can clarify what we collect, how it&apos;s used, or
                help you exercise your data rights.
              </p>
            </div>
            <div className="legal-cta-actions">
              <Link to="/contact" className="legal-btn legal-btn--primary">
                Contact Us <ArrowRight size={16} />
              </Link>
              <Link to="/terms" className="legal-btn legal-btn--ghost">
                View Terms of Service
              </Link>
            </div>
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPage;