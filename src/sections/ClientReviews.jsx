import React from "react";
// eslint-disable-next-line no-unused-vars -- motion is used via <motion.div> JSX member expressions
import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { REVIEWS } from "../data/constants";
import "./ClientReviews.css";

const VISIBLE_REVIEWS = REVIEWS.slice(0, 4);

const ClientReviews = () => (
  <section className="reviews-section">
    <div className="reviews-inner">
      <motion.div
        className="reviews-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.5 }}
      >
        <span className="reviews-eyebrow">
          <span className="reviews-eyebrow-dot" />
          Client Testimonials
        </span>
        <h2 className="reviews-title">What Our Clients Say</h2>
      </motion.div>

      <div className="reviews-grid">
        {VISIBLE_REVIEWS.map((review, i) => (
          <motion.div
            className="reviews-card"
            key={review.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ amount: 0.2 }}
          >
            <div className="reviews-quote-icon">
              <Quote size={28} strokeWidth={1.5} />
            </div>

            <div className="reviews-stars">
              {Array.from({ length: review.rating }, (_, si) => (
                <Star key={si} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>

            <p className="reviews-text">{review.text}</p>

            <div className="reviews-author">
              <div className="reviews-avatar">
                <span>{review.avatar}</span>
              </div>
              <div className="reviews-author-info">
                <strong className="reviews-author-name">{review.name}</strong>
                <span className="reviews-author-role">
                  {review.role}, {review.company}
                </span>
              </div>
            </div>

            <span className="reviews-service-badge">{review.service}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ClientReviews;
