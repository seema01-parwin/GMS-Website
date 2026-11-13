import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars -- motion is used via <motion.div> JSX member expressions
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../sections/CTA";
import "./ContactPage.css";

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Visit Us",
    title: "Our Office",
    value: "3rd Floor, 3A, Meeghawatta Road, Nugegoda, Sri Lanka, 10250",
    detail: "Grow More Solutions (Pvt) Ltd",
    href: "https://maps.google.com/?q=3rd+Floor,+3A,+Meeghawatta+Road,+Nugegoda,+Sri+Lanka,+10250",
    external: true,
  },
  {
    icon: Phone,
    label: "Call Us",
    title: "Phone",
    value: "+94 72 328 0097",
    detail: "Mon – Fri, 9:00 AM – 6:00 PM",
    href: "tel:+94723280097",
  },
  {
    icon: Mail,
    label: "Email Us",
    title: "Email",
    value: "info@growmoresolutions.lk",
    detail: "We reply within 24 hours",
    href: "mailto:info@growmoresolutions.lk",
  },
  {
    icon: Clock,
    label: "Working Hours",
    title: "Business Hours",
    value: "Mon – Fri: 9AM – 6PM",
    detail: "Saturday: 9AM – 1PM",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { amount: 0.3 },
});

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Navbar />

      {/* ============ HERO ============ */}
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="contact-hero-title">Get in Touch</h1>
            <p className="contact-hero-sub">
              Have a project in mind or just want to chat? We&apos;d love to hear
              from you.
            </p>
            <div className="contact-breadcrumb">
              <span className="contact-breadcrumb-link">Home</span>
              <ChevronRight size={14} strokeWidth={2} />
              <span className="contact-breadcrumb-current">Contact Us</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ CONTACT INFO CARDS ============ */}
      <section className="contact-info">
        <div className="contact-info-inner">
          {CONTACT_INFO.map((item, i) => (
            <motion.div
              key={item.title}
              className="contact-info-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              viewport={{ amount: 0.3 }}
            >
              <span className="contact-info-icon">
                <item.icon size={22} strokeWidth={1.8} />
              </span>
              <span className="contact-info-label">{item.label}</span>
              <h3 className="contact-info-title">{item.title}</h3>
              {item.href ? (
                <a
                  href={item.href}
                  className="contact-info-value contact-info-value--link"
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item.value}
                </a>
              ) : (
                <span className="contact-info-value">{item.value}</span>
              )}
              <span className="contact-info-detail">{item.detail}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============ FORM + MAP ============ */}
      <section className="contact-main">
        <div className="contact-main-inner">
          {/* ---- Form ---- */}
          <motion.div className="contact-form-wrap" {...fadeUp(0.1)}>
            <span className="contact-eyebrow">
              <span className="contact-eyebrow-dot" />
              Send a Message
            </span>
            <h2 className="contact-form-title">Let&apos;s Start a Conversation</h2>
            <p className="contact-form-sub">
              Fill out the form below and our team will get back to you within 24
              hours.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-field">
                  <label className="contact-label" htmlFor="contact-name">
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    className="contact-input"
                    type="text"
                    name="name"
                    placeholder="John Perera"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact-field">
                  <label className="contact-label" htmlFor="contact-email">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    className="contact-input"
                    type="email"
                    name="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-field">
                  <label className="contact-label" htmlFor="contact-phone">
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    className="contact-input"
                    type="tel"
                    name="phone"
                    placeholder="+94 77 123 4567"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="contact-field">
                  <label className="contact-label" htmlFor="contact-service">
                    Service Interested In
                  </label>
                  <select
                    id="contact-service"
                    className="contact-input contact-select"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="infrastructure">Infrastructure</option>
                    <option value="software">Software Development</option>
                    <option value="interior">Interior Design</option>
                    <option value="planning">Master Planning</option>
                    <option value="realestate">Real Estate</option>
                    <option value="marketing">Marketing</option>
                  </select>
                </div>
              </div>

              <div className="contact-field">
                <label className="contact-label" htmlFor="contact-message">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  className="contact-input contact-textarea"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project or inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="contact-submit">
                Send Message
                <Send size={16} strokeWidth={2.5} />
              </button>
            </form>
          </motion.div>

          {/* ---- Map / Office Info ---- */}
          <motion.div className="contact-map-wrap" {...fadeUp(0.2)}>
            <div className="contact-map-placeholder">
              <div className="contact-map-overlay">
                <span className="contact-map-icon">
                  <MapPin size={32} strokeWidth={1.5} />
                </span>
                <h3 className="contact-map-title">Our Headquarters</h3>
                <p className="contact-map-address">
                  3rd Floor, 3A, Meeghawatta Road
                  <br />
                  Nugegoda, Sri Lanka, 10250
                </p>
                <a
                  href="https://maps.google.com/?q=3rd+Floor,+3A,+Meeghawatta+Road,+Nugegoda,+Sri+Lanka,+10250"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-map-link"
                >
                  Open in Google Maps
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default ContactPage;
