import React, { useRef } from "react";
// eslint-disable-next-line no-unused-vars -- motion is used via <motion.div> JSX member expressions
import { motion, useScroll, useTransform } from "motion/react";
import globeImg from "../assets/globe-network1.png";
import "./Hero.css";

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroVisualY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const heroVisualScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section className="hero" ref={heroRef}>
      <motion.div
        className="hero-inner"
        style={{ opacity: heroOpacity }}
      >
        {/* LEFT: text */}
        <div className="hero-text">
          <motion.h1
            initial={{ opacity: 0, y: 40, x: -30 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
            style={{ y: heroTextY }}
          >
            Transforming <br />
            <span className="hero-highlight"> Ideas Into </span> <br />
            Innovation.
          </motion.h1>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
            style={{ y: heroTextY }}
          >
            The end-to-end partner Sri Lankan businesses rely on — built
            for infrastructure, design, and digital growth, from
            blueprint to delivery.
          </motion.p>

          <motion.div
            className="hero-tags"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ amount: 0.3 }}
          >
            <motion.span
              className="feature-tag tag-orange"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              viewport={{ amount: 0.5 }}
            >Infrastructure</motion.span>
            <motion.span
              className="feature-tag tag-green"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.43 }}
              viewport={{ amount: 0.5 }}
            >Master Planning</motion.span>
            <motion.span
              className="feature-tag tag-pink"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.51 }}
              viewport={{ amount: 0.5 }}
            >Software Development</motion.span>
          </motion.div>
          <motion.div
            className="hero-tags hero-tags-row2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            viewport={{ amount: 0.3 }}
          >
            <motion.span
              className="feature-tag tag-purple"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.55 }}
              viewport={{ amount: 0.5 }}
            >Interior Design</motion.span>
            <motion.span
              className="feature-tag tag-gray"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.63 }}
              viewport={{ amount: 0.5 }}
            >Real Estate</motion.span>
          </motion.div>
        </div>

        {/* RIGHT: globe visual */}
        <motion.div
          className="hero-visual"
          aria-hidden="true"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ amount: 0.2 }}
          style={{ y: heroVisualY, scale: heroVisualScale }}
        >
          <div className="globe-scene">
            <div className="visual-grid-bg"></div>

            <div className="globe-float-wrap">
              <div className="globe-spin-wrap">
                <img src={globeImg} alt="" className="globe-photo" draggable="false" />
                <div className="globe-photo-shade"></div>
                <div className="globe-photo-rim"></div>
              </div>
            </div>

            <div className="globe-label">
              <span className="globe-label-title">GMS</span>
              <span className="globe-label-sub">EST. 2023 · SRI LANKA</span>
            </div>
          </div>

          <motion.div
            className="data-chip chip-tl"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5, type: "spring", stiffness: 200 }}
            viewport={{ amount: 0.5 }}
          >
            <span className="chip-dot up"></span> PROJECTS <b className="up">&#9650; 120+</b>
          </motion.div>
          <motion.div
            className="data-chip chip-tr"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.62, type: "spring", stiffness: 200 }}
            viewport={{ amount: 0.5 }}
          >
            <span className="chip-dot up"></span> TEAM <b className="up">&#9650; 25+</b>
          </motion.div>
          <motion.div
            className="data-chip chip-bl"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.74, type: "spring", stiffness: 200 }}
            viewport={{ amount: 0.5 }}
          >
            <span className="chip-dot up"></span> RATING <b className="up">&#9650; 4.9</b>
          </motion.div>
          <motion.div
            className="data-chip chip-br"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.86, type: "spring", stiffness: 200 }}
            viewport={{ amount: 0.5 }}
          >
            <span className="chip-dot up"></span> CITIES <b className="up">&#9650; 12+</b>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
