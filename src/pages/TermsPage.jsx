import React, { Fragment, useMemo } from "react";
// eslint-disable-next-line no-unused-vars -- motion is used via <motion.div> JSX member expressions
import { motion } from "motion/react";
import {
  Scale,
  Monitor,
  Copyright,
  Briefcase,
  Handshake,
  Link2,
  AlertTriangle,
  ShieldCheck,
  Landmark,
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
    icon: Scale,
    no: 1,
    title: "Acceptance of Terms",
    lead: "By accessing or using this website, you agree to be bound by these Terms of Service. If you do not agree, please do not use the website.",
  },
  {
    id: "sec-2",
    icon: Monitor,
    no: 2,
    title: "Use of the Website",
    lead: "You may use this website for lawful purposes only, in line with these terms.",
    points: [
      "Do not use the website in any way that breaches any applicable law or regulation.",
      "Do not attempt to interfere with, reverse engineer, or disrupt the website or its underlying systems.",
      "Do not attempt to gain unauthorised access to any part of the website or our networks.",
    ],
  },
  {
    id: "sec-3",
    icon: Copyright,
    no: 3,
    title: "Intellectual Property",
    lead: "All content on this website — including text, graphics, logos, icons, and software — is the property of Grow More Solutions (Pvt) Ltd or its licensors and is protected by applicable intellectual property laws.",
    points: [
      "You may view and print content for your own personal, non-commercial use.",
      "You must not copy, reproduce, distribute, or modify any content without our prior written permission.",
    ],
  },
  {
    id: "sec-4",
    icon: Briefcase,
    no: 4,
    title: "Services & Proposals",
    lead: "Information on this website provides an overview of our products and services. It does not constitute a binding offer, contract, or professional advice.",
    points: [
      "Specific scope, pricing, and deliverables for any engagement are agreed in a separate written contract.",
      "We may update or discontinue services or product information at any time.",
    ],
  },
  {
    id: "sec-5",
    icon: Handshake,
    no: 5,
    title: "Acceptable Conduct",
    lead: "When interacting with our website, you agree to behave responsibly.",
    points: [
      "Do not transmit unlawful, defamatory, or malicious content through the website.",
      "Do not introduce viruses, malware, or other harmful code.",
      "Do not impersonate any person or entity, or misrepresent your affiliation.",
    ],
  },
  {
    id: "sec-6",
    icon: Link2,
    no: 6,
    title: "Third-Party Links",
    lead: "Our website may contain links to third-party websites. We do not control and are not responsible for the content, privacy practices, or availability of those sites. Access them at your own risk.",
  },
  {
    id: "sec-7",
    icon: AlertTriangle,
    no: 7,
    title: "Disclaimer & Limitation of Liability",
    lead: "This website is provided on an \u201cas is\u201d and \u201cas available\u201d basis, without warranties of any kind.",
    points: [
      "To the fullest extent permitted by law, we are not liable for any direct, indirect, incidental, or consequential damages arising from your use of this website.",
      "Nothing in these terms limits or excludes liability that cannot be limited or excluded under applicable law.",
    ],
  },
  {
    id: "sec-8",
    icon: ShieldCheck,
    no: 8,
    title: "Indemnification",
    lead: "You agree to indemnify and hold Grow More Solutions (Pvt) Ltd and its personnel harmless from any claims, losses, or expenses arising out of your misuse of this website or breach of these terms.",
  },
  {
    id: "sec-9",
    icon: Landmark,
    no: 9,
    title: "Governing Law",
    lead: "These Terms of Service are governed by and construed in accordance with the laws of the Democratic Socialist Republic of Sri Lanka. Any disputes shall be subject to the exclusive jurisdiction of the courts of Sri Lanka.",
  },
  {
    id: "sec-10",
    icon: RefreshCw,
    no: 10,
    title: "Changes to These Terms",
    lead: "We may revise these terms from time to time. The latest version will always be published on this page, with the date below. Continued use of the website after changes means you accept the revised terms.",
  },
  {
    id: "sec-11",
    icon: Mail,
    no: 11,
    title: "Contact Us",
    lead: "If you have any questions about these Terms of Service, please get in touch.",
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

const TermsPage = () => {
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
        <span className="legal-hero-filigree" aria-hidden="true">TERMS</span>
        <div className="legal-hero-inner">
          <nav className="legal-tabs" aria-label="Legal documents">
            <Link to="/privacy" className="legal-tab">
              <FileText size={15} /> Privacy Policy
            </Link>
            <Link to="/terms" className="legal-tab legal-tab--active">
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
                Clear terms for <span className="legal-accent">using our website</span>
              </h1>
              <p className="legal-hero-sub">
                These terms set out the rules for using our website and for the
                products and services we describe.
              </p>
            </header>

            <div className="legal-cover-meta">
              <div className="legal-meta-chips">
                <span className="legal-meta-chip">
                  <CalendarCheck size={14} /> Last Updated: 09.2026
                </span>
                <span className="legal-meta-chip">
                  <FileText size={14} /> 11 Sections
                </span>
                <span className="legal-meta-chip">
                  <Landmark size={14} /> Sri Lanka Law
                </span>
              </div>
              <span className="legal-cover-stamp" aria-hidden="true">Terms</span>
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
                This website is for information about our products and services.
                Browse freely and responsibly — the specifics of any project are
                agreed in a written contract, and these terms are governed by the
                laws of Sri Lanka.
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
              <h2 className="legal-cta-title">Questions about these terms?</h2>
              <p className="legal-cta-sub">
                Reach out to our team and we&apos;ll clarify how these terms
                apply to your use of the website.
              </p>
            </div>
            <div className="legal-cta-actions">
              <Link to="/contact" className="legal-btn legal-btn--primary">
                Contact Us <ArrowRight size={16} />
              </Link>
              <Link to="/privacy" className="legal-btn legal-btn--ghost">
                View Privacy Policy
              </Link>
            </div>
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default TermsPage;