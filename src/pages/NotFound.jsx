import React from "react";
// eslint-disable-next-line no-unused-vars -- motion is used via <motion.div> JSX member expressions
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./NotFound.css";

const NotFound = () => (
  <div>
    <Navbar />

    <section className="nf-section">
      <div className="nf-inner">
        <motion.div
          className="nf-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.span
            className="nf-code"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            404
          </motion.span>

          <span className="nf-eyebrow">
            <span className="nf-eyebrow-dot" />
            Page Not Found
          </span>

          <h1 className="nf-title">
            Looks like you&apos;ve
            <br />
            <span className="nf-accent">lost your way</span>
          </h1>

          <p className="nf-sub">
            The page you&apos;re looking for doesn&apos;t exist, was moved, or
            is still under construction. Let&apos;s get you back on track.
          </p>

          <Link to="/" className="nf-btn">
            <ArrowLeft size={16} strokeWidth={2.5} />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default NotFound;