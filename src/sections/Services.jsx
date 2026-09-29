import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars -- motion is used via <motion.div> JSX member expressions
import { motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { SERVICES } from "../data/constants";
import "./Services.css";

const Services = () => {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState("next");

  const data = SERVICES[active];
  const reversed = active % 2 === 1;

  const goNext = () => { setDir("next"); setActive((p) => (p + 1) % SERVICES.length); };
  const goPrev = () => { setDir("prev"); setActive((p) => (p - 1 + SERVICES.length) % SERVICES.length); };
  const goTo = (i) => { setDir(i > active ? "next" : "prev"); setActive(i); };

  return (
    <section className="services-section">
      <div className="services-inner">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.5 }}
        >
          <span className="services-eyebrow">Our Expertise</span>
          <h2 className="services-title">What We Offer</h2>
        </motion.div>

        <div className="services-slider">
          <div className="services-slide-viewport" aria-live="polite" aria-atomic="true">
            <motion.div
              key={data.key}
              className={`service-row${reversed ? " reversed" : ""} service-slide-${dir}`}
              initial={{ opacity: 0, x: dir === "next" ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ amount: 0.2 }}
            >
              <motion.div
                className="service-row-visual"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ amount: 0.3 }}
              >
                <img src={data.image} alt={data.label} className="service-row-image" />
              </motion.div>

              <div className="service-row-text">
                <motion.span
                  className="service-row-number"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  viewport={{ amount: 0.5 }}
                >
                  0{active + 1}
                </motion.span>
                <motion.h3
                  className="service-row-title"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ amount: 0.5 }}
                >
                  {data.label}
                </motion.h3>
                <motion.p
                  className="service-row-desc"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ amount: 0.5 }}
                >
                  {data.desc}
                </motion.p>

                <ul className="service-row-features">
                  {data.features.map((feature, fi) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.35 + fi * 0.08 }}
                      viewport={{ amount: 0.5 }}
                    >
                      <Check size={14} />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <motion.a
                  href={data.link}
                  className="hero-btn primary service-row-btn"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.55 }}
                  viewport={{ amount: 0.5 }}
                >
                  Learn More <ArrowRight size={16} />
                </motion.a>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="services-controls"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ amount: 0.5 }}
          >
            <button type="button" className="services-nav-btn services-nav-prev" onClick={goPrev} aria-label="Previous service">
              <ArrowRight size={18} style={{ transform: "rotate(180deg)" }} />
            </button>

            <div className="services-dots">
              {SERVICES.map((s, i) => (
                <button
                  type="button"
                  key={s.key}
                  className={`services-dot${i === active ? " active" : ""}`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to ${s.label}`}
                />
              ))}
            </div>

            <button type="button" className="services-nav-btn services-nav-next" onClick={goNext} aria-label="Next service">
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
