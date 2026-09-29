import React from "react";
// eslint-disable-next-line no-unused-vars -- motion is used via <motion.div> JSX member expressions
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import "./CTA.css";

const CTA = () => (
  <section className="cta-section">
    <div className="cta-inner">
      <motion.div
        className="cta-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.3 }}
      >
        <motion.div
          className="cta-text"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ amount: 0.5 }}
        >
          <h2 className="cta-title">Ready to start your next project?</h2>
          <p className="cta-desc">
            From blueprint to delivery — we bring infrastructure, design, and
            digital together under one roof.
          </p>
        </motion.div>
        <motion.a
          href="/contact"
          className="cta-btn"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ amount: 0.5 }}
        >
          Get in Touch
          <ArrowUpRight size={16} strokeWidth={2.5} />
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default CTA;
