import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars -- motion is used via <motion.div> JSX member expressions
import { motion } from "motion/react";
import "./ServiceBanner.css";

const ServiceBanner = () => {
  const [inView, setInView] = useState(false);

  return (
    <section className="service-banner-section">
      <motion.div
        className={`service-banner${inView ? " banner-in-view" : ""}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
        onViewportEnter={() => setInView(true)}
        onViewportLeave={() => setInView(false)}
      >
        <div className="service-banner-chevrons" aria-hidden="true">
          <span className="chevron c1" />
          <span className="chevron c2" />
          <span className="chevron c3" />
        </div>

        <div className="service-banner-content">
          <motion.h2
            className="service-banner-title"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ amount: 0.5 }}
          >
            Where Innovation Meets Excellence
          </motion.h2>

          <motion.p
            className="service-banner-sub"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ amount: 0.5 }}
          >
            From visionary planning and modern construction to digital transformation,
            our multidisciplinary team delivers end-to-end solutions tailored to every
            client&apos;s goals. We build lasting value through quality, creativity, and
            sustainable development.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceBanner;
