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
  ArrowLeft,
  ArrowRight,
  Check,
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

const CYCLE = 6500;

const PlatformFeatures = () => {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  const feat = FEATURES[idx];
  const Icon = FEATURE_ICONS[feat.icon];
  const total = String(FEATURES.length).padStart(2, "0");

  const next = useCallback(() => {
    setIdx((p) => (p + 1) % FEATURES.length);
  }, []);

  const prev = useCallback(() => {
    setIdx((p) => (p - 1 + FEATURES.length) % FEATURES.length);
  }, []);

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(next, CYCLE);
    return () => clearInterval(id);
  }, [paused, next, idx]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      next();
    }
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
    if (e.key === "Home") {
      e.preventDefault();
      setIdx(0);
    }
    if (e.key === "End") {
      e.preventDefault();
      setIdx(FEATURES.length - 1);
    }
  };

  return (
    <section
      className={`plf-section${paused ? " is-paused" : ""}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() =>
        setPaused(
          window.matchMedia("(prefers-reduced-motion: reduce)").matches
        )
      }
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() =>
        setPaused(
          window.matchMedia("(prefers-reduced-motion: reduce)").matches
        )
      }
    >
      <div className="plf-glow" aria-hidden="true" />
      <div className="plf-grid-lines" aria-hidden="true" />

      <div className="plf-container">
        {/* ---- Header ---- */}
        <motion.div
          className="plf-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ amount: 0.4 }}
        >
          <div className="plf-head-left">
            <span className="plf-eyebrow">
              <span className="plf-eyebrow-dot" />
              What We&apos;re Building
            </span>
            <h2 className="plf-title">
              Platform <span className="plf-title-accent">Features</span>
            </h2>
            <p className="plf-sub">
              Six modules that run underneath every engagement — project control,
              client collaboration and delivery intelligence in one place.
            </p>
          </div>

          <div className="plf-head-right">
            <span className="plf-count">
              <strong>{feat.label}</strong>
              <span className="plf-count-sep">/</span>
              {total}
            </span>
            <div className="plf-nav-btns">
              <button
                type="button"
                className="plf-nav-btn"
                onClick={prev}
                aria-label="Previous feature"
              >
                <ArrowLeft size={16} strokeWidth={2} />
              </button>
              <button
                type="button"
                className="plf-nav-btn"
                onClick={next}
                aria-label="Next feature"
              >
                <ArrowRight size={16} strokeWidth={2} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* ---- Stage: 16:9 viewer + detail panel ---- */}
        <div
          className="plf-stage"
          role="group"
          aria-label="Platform feature showcase"
          tabIndex={0}
          onKeyDown={onKeyDown}
        >
          <motion.div
            className="plf-frame"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            viewport={{ amount: 0.15 }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={feat.id}
                src={feat.image}
                alt={feat.title}
                className="plf-frame-img"
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.55 }}
              />
            </AnimatePresence>

            <div className="plf-frame-shade" aria-hidden="true" />
            <span className="plf-ghost" aria-hidden="true">
              {feat.label}
            </span>

            <span className="plf-corner plf-corner--tl" aria-hidden="true" />
            <span className="plf-corner plf-corner--tr" aria-hidden="true" />
            <span className="plf-corner plf-corner--bl" aria-hidden="true" />
            <span className="plf-corner plf-corner--br" aria-hidden="true" />

            <div className="plf-frame-top">
              <span className="plf-live">
                <i aria-hidden="true" />
                Live module
              </span>
              <span className="plf-frame-tag">{feat.tag}</span>
            </div>

            <div className="plf-plate">
              <div className="plf-plate-left">
                <span className="plf-plate-tag">{feat.tag}</span>
                <strong className="plf-plate-title">{feat.title}</strong>
              </div>
              <span className="plf-plate-icon" aria-hidden="true">
                <Icon size={18} strokeWidth={1.7} />
              </span>
            </div>

            <div className="plf-progress" aria-hidden="true">
              <i key={idx} />
            </div>
          </motion.div>

          <motion.aside
            className="plf-panel"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            viewport={{ amount: 0.15 }}
          >
            <div className="plf-panel-top">
              <span className="plf-panel-index">{feat.label}</span>
              <span className="plf-panel-icon" aria-hidden="true">
                <Icon size={19} strokeWidth={1.7} />
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={feat.id}
                className="plf-panel-body"
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="plf-panel-tag">{feat.tag}</span>
                <h3 className="plf-panel-title">{feat.title}</h3>
                <p className="plf-panel-desc">{feat.desc}</p>

                <ul className="plf-panel-list">
                  {feat.items.map((item) => (
                    <li key={item}>
                      <span className="plf-panel-check" aria-hidden="true">
                        <Check size={11} strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

            <div className="plf-panel-foot">
              <span>MODULE {feat.label}</span>
              <span className="plf-panel-foot-sep" />
              <span className={paused ? "" : "is-running"}>
                {paused ? "PAUSED" : "AUTO-ADVANCE"}
              </span>
            </div>
          </motion.aside>
        </div>

        {/* ---- Thumbnail filmstrip ---- */}
        <motion.div
          className="plf-strip"
          role="tablist"
          aria-label="Platform features"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          viewport={{ amount: 0.1 }}
        >
          {FEATURES.map((f, i) => {
            const isActive = i === idx;
            return (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`plf-thumb${isActive ? " is-active" : ""}`}
                onClick={() => setIdx(i)}
              >
                <span className="plf-thumb-media">
                  <img src={f.image} alt="" loading="lazy" />
                  <span className="plf-thumb-num">{f.label}</span>
                  <span className="plf-thumb-wash" aria-hidden="true" />
                </span>
                <span className="plf-thumb-label">{f.title}</span>
              </button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformFeatures;
