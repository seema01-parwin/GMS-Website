import React from "react";
// eslint-disable-next-line no-unused-vars -- motion is used via <motion.div> JSX member expressions
import { motion } from "motion/react";
import {
  HardHat, Map, Code, Palette, Building2, Megaphone,
  Server, Compass, Ruler, Laptop, BarChart3, Landmark, PenTool,
} from "lucide-react";
import { MARQUEE_LABELS } from "../data/constants";
import "./IconMarquee.css";

const ICONS = [
  HardHat, Map, Code, Palette, Building2, Megaphone,
  Server, Compass, Ruler, Laptop, BarChart3, Landmark, PenTool,
];

const IconMarquee = () => (
  <section className="icon-marquee-section">
    <div className="icon-marquee-container">
      <motion.div
        className="icon-marquee-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.5 }}
      >
        <h2 className="icon-marquee-title">Trusted Across Every Industry</h2>
      </motion.div>

      <motion.div
        className="pay-marquee"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        viewport={{ amount: 0.3 }}
      >
        <div className="pay-marquee__track">
          <div className="pay-marquee__set">
            {ICONS.map((Icon, i) => (
              <div className="pay-logo" key={i} title={MARQUEE_LABELS[i]}>
                <Icon size={30} strokeWidth={1.5} />
                <span>{MARQUEE_LABELS[i]}</span>
              </div>
            ))}
          </div>
          <div className="pay-marquee__set" aria-hidden="true">
            {ICONS.map((Icon, i) => (
              <div className="pay-logo" key={`dup-${i}`} title={MARQUEE_LABELS[i]}>
                <Icon size={30} strokeWidth={1.5} />
                <span>{MARQUEE_LABELS[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default IconMarquee;
