import React, { useState, useEffect, useCallback } from "react";
// eslint-disable-next-line no-unused-vars -- motion is used via <motion.div> JSX member expressions
import { motion, AnimatePresence } from "motion/react";
import {
  LayoutDashboard,
  Users,
  BarChart3,
  FileText,
  Shield,
  Headphones,
} from "lucide-react";
import { FEATURES } from "../data/constants";
import "./PlatformFeatures.css";

const FEATURE_ICONS = {
  LayoutDashboard,
  Users,
  BarChart3,
  FileText,
  Shield,
  Headphones,
};

const PlatformFeatures = () => {
  const [idx, setIdx] = useState(0);
  const data = FEATURES[idx];
  const feat = { ...data, icon: FEATURE_ICONS[data.icon] };

  const next = useCallback(() => {
    setIdx((p) => (p + 1) % FEATURES.length);
  }, []);

  const prev = useCallback(() => {
    setIdx((p) => (p - 1 + FEATURES.length) % FEATURES.length);
  }, []);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next, idx]);

  return (
    <section className="pf-section">
      <div className="pf-container">

        {/* ---- Header ---- */}
        <motion.div
          className="pf-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.5 }}
        >
          <span className="pf-eyebrow">What We&apos;re Building</span>
          <h2 className="pf-title">
            Platform <span className="pf-accent">Features</span>
          </h2>
        </motion.div>

        {/* ---- Hero card ---- */}
        <motion.div
          className="pf-hero"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ amount: 0.2 }}
        >
          <div className="pf-hero-inner">

            {/* Image side */}
            <div className="pf-hero-image-side">
              <AnimatePresence mode="wait">
                <motion.img
                  key={feat.id}
                  src={feat.image}
                  alt={feat.title}
                  className="pf-hero-img"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
              <div className="pf-hero-img-overlay" />
              <span className="pf-hero-img-label">{feat.label}</span>
            </div>

            {/* Content side */}
            <div className="pf-hero-content">
              <AnimatePresence mode="wait">
                <motion.div
                  key={feat.id}
                  className="pf-hero-text"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="pf-hero-head">
                    {/*<span className="pf-hero-icon"><Icon size={28} strokeWidth={1.5} /></span>*/}
                    <span className="pf-hero-tag">{feat.tag}</span>
                  </div>
                  <h3 className="pf-hero-title">{feat.title}</h3>
                  <p className="pf-hero-desc">{feat.desc}</p>

                  <ul className="pf-hero-list">
                    {feat.items.map((item) => (
                      <li key={item} className="pf-hero-list-item">
                        <span className="pf-hero-bullet" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom bar: arrows + timeline */}
          <div className="pf-hero-bottom">
            <button className="pf-arrow" onClick={prev} type="button">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 11.25a.75.75 0 0 1 0 1.5h-9.25V18a.75.75 0 0 1-1.28.53l-6-6a.75.75 0 0 1 0-1.06l6-6A.75.75 0 0 1 10.75 7v5.25z"/></svg>
            </button>

            <div className="pf-timeline">
              {/*{FEATURES.map((f, i) => (
                <button
                  key={f.id}
                  className={`pf-timeline-seg${i === idx ? " pf-timeline-seg--active" : ""}${i < idx ? " pf-timeline-seg--done" : ""}`}
                  onClick={() => setIdx(i)}
                  type="button"
                  aria-label={f.title}
                >
                  <span className="pf-timeline-dot" />
                  {i < FEATURES.length - 1 && <span className="pf-timeline-line" />}
                </button>
              ))} */}
            </div> 

            <button className="pf-arrow" onClick={next} type="button">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 11.25a.75.75 0 0 0 0 1.5h9.25V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6A.75.75 0 0 0 13.25 7v5.25z"/></svg>
            </button>

            <span className="pf-counter">{feat.label} / {FEATURES.length < 10 ? `0${FEATURES.length}` : FEATURES.length}</span>
          </div>

          {/* Auto-progress bar */}
          <div className="pf-progress-track">
            <div
              key={idx}
              className="pf-progress-fill"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformFeatures;
