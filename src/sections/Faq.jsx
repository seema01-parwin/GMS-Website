import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars -- motion is used via <motion.div> JSX member expressions
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import "./Faq.css";

const FAQ_ITEMS = [
  {
    id: "q1",
    q: "What services does Grow More Solutions offer?",
    a: "We provide end-to-end solutions across infrastructure, master planning, software development, interior design, real estate, and marketing — all under one roof.",
  },
  {
    id: "q2",
    q: "How long does a typical project take?",
    a: "Project timelines vary based on scope and complexity. A software platform may take 8–12 weeks, while an infrastructure project could span several months. We provide a detailed roadmap during onboarding.",
  },
  {
    id: "q3",
    q: "Do you work with small businesses or only large enterprises?",
    a: "We serve clients of all sizes — from startups needing a custom CRM to enterprise groups requiring full-scale infrastructure delivery. Our solutions scale to match your needs.",
  },
  {
    id: "q4",
    q: "What makes GMS different from other firms?",
    a: "Our multidisciplinary approach means you get infrastructure, design, software, and marketing expertise in a single partnership — eliminating coordination gaps and ensuring consistency from blueprint to launch.",
  },
  {
    id: "q5",
    q: "Can I get a custom quote for my project?",
    a: "Absolutely. Contact us through our contact page or email with your project details and we'll provide a tailored proposal within 48 hours.",
  },
  {
    id: "q6",
    q: "Do you offer ongoing support after project delivery?",
    a: "Yes. Every engagement includes a support period, and we offer long-term maintenance plans, SLA-backed response times, and dedicated account managers for ongoing partnerships.",
  },
];

const FaqItem = ({ item, isOpen, onToggle }) => (
  <motion.div
    className={`faq-item${isOpen ? " faq-item--open" : ""}`}
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45 }}
    viewport={{ amount: 0.2 }}
  >
    <button
      type="button"
      className="faq-item-trigger"
      onClick={onToggle}
      aria-expanded={isOpen}
    >
      <span className="faq-item-q">{item.q}</span>
      <span className={`faq-item-icon${isOpen ? " faq-item-icon--open" : ""}`}>
        <Plus size={18} strokeWidth={2} />
      </span>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          className="faq-item-body"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          <p className="faq-item-a">{item.a}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const Faq = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* Left column */}
        <motion.div
          className="faq-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
        >
          <span className="faq-eyebrow">
            <span className="faq-eyebrow-dot" />
            FAQ
          </span>
          <h2 className="faq-title">
            Frequently
            <br />
            Asked
            <br />
            <span className="faq-title-accent">Questions</span>
          </h2>
          <p className="faq-sub">
            Everything you need to know before getting started. Can&apos;t
            find what you&apos;re looking for? Reach out on our
            <a href="/contact"> contact page</a>.
          </p>
        </motion.div>

        {/* Right column — accordion */}
        <div className="faq-right">
          {FAQ_ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 * i }}
              viewport={{ amount: 0.2 }}
            >
              <FaqItem
                item={item}
                isOpen={openId === item.id}
                onToggle={() => toggle(item.id)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
