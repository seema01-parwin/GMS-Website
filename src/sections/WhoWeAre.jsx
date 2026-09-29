import React from "react";
// eslint-disable-next-line no-unused-vars -- motion is used via <motion.div> JSX member expressions
import { motion } from "motion/react";
import { ArrowRight, Building2, Users, Star, MapPin } from "lucide-react";
import "./WhoWeAre.css";

const STATS = [
  { icon: Building2, num: "120+", label: "Projects Delivered" },
  { icon: Users, num: "25+", label: "Team Members" },
  { icon: Star, num: "4.9", label: "Client Rating" },
  { icon: MapPin, num: "12+", label: "Cities Covered" },
];

const WhoWeAre = () => (
  <section className="who-section">
    <div className="who-container">
      <motion.div
        className="who-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.5 }}
      >
        <span className="who-eyebrow">
          <span className="who-eyebrow-dot" />
          Who We Are
        </span>
        <h2 className="who-title">
          Building Sri Lanka&apos;s Future,
          <br />
          <span className="who-title-accent">One Project at a Time</span>
        </h2>
      </motion.div>

      <div className="who-middle">
        <motion.div
          className="who-text"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ amount: 0.3 }}
        >
          <p>
            Grow More Solutions (Pvt) Ltd is a multidisciplinary company based in
            Nugegoda, Sri Lanka — operating across infrastructure development,
            master planning, interior design, real estate, graphic design, and
            information technology solutions.
          </p>
          <p>
            We combine creative vision with modern technologies and industry best
            practices to deliver innovative, reliable, and customer-focused
            solutions — from blueprint to delivery.
          </p>
          <a href="/about" className="who-link">
            Learn more about us <ArrowRight size={15} />
          </a>
        </motion.div>

        <motion.div
          className="who-visual"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ amount: 0.3 }}
        >
          <div className="who-quote-block">
            <span className="who-quote-mark">&ldquo;</span>
            <p className="who-quote-text">
              Engineering precision and creative vision — delivered together,
              every time.
            </p>
            <span className="who-quote-attr">— Our Mission</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="who-stats"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ amount: 0.3 }}
      >
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="who-stat"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
            viewport={{ amount: 0.5 }}
          >
            <span className="who-stat-icon"><stat.icon size={18} strokeWidth={1.8} /></span>
            <strong className="who-stat-num">{stat.num}</strong>
            <span className="who-stat-label">{stat.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default WhoWeAre;
