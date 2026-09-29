import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import "./Footer.css";

const NAV_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const SERVICE_LINKS = [
  { label: "Infrastructure", href: "/services/infrastructure" },
  { label: "Master Planning", href: "/services/master-planning" },
  { label: "Software Development", href: "/services/software" },
  { label: "Interior Design", href: "/services/interior-design" },
  { label: "Real Estate", href: "/services/real-estate" },
  { label: "Marketing", href: "/services/marketing" },
  { label: "Graphic Design", href: "/services/graphic-design" },
];

const SOCIALS = [
  { Icon: IconBrandLinkedin, label: "LinkedIn", href: "#" },
  { Icon: IconBrandFacebook, label: "Facebook", href: "#" },
  { Icon: IconBrandX, label: "X", href: "#" },
  { Icon: IconBrandInstagram, label: "Instagram", href: "#" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      {/* ---- Animated wave border ---- */}
      <div className="footer-wave">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path className="footer-wave-path footer-wave-path--1" d="M0,60 C240,0 480,120 720,60 C960,0 1200,120 1440,60 L1440,120 L0,120 Z" />
          <path className="footer-wave-path footer-wave-path--2" d="M0,80 C320,20 640,100 960,60 C1120,40 1280,90 1440,70 L1440,120 L0,120 Z" />
          <path className="footer-wave-path footer-wave-path--3" d="M0,90 C180,50 360,110 720,80 C1080,50 1260,100 1440,80 L1440,120 L0,120 Z" />
        </svg>
      </div>

      {/* ---- Main footer ---- */}
      <div className="footer-main">
        <div className="footer-inner">

          {/* Row 1: brand + columns */}
          <div className="footer-grid">

            {/* Brand */}
            <div className="footer-brand">
              <span className="footer-logo">GMS</span>
              <p className="footer-tagline">
                End-to-end partner for infrastructure, design, and digital
                growth — from blueprint to delivery across Sri Lanka.
              </p>
              <div className="footer-socials">
                {SOCIALS.map((s) => (
                  <a key={s.label} href={s.href} aria-label={s.label} className="footer-social-link">
                    <s.Icon size={16} stroke={1.8} />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="footer-col">
              <h4 className="footer-col-title">Company</h4>
              <ul className="footer-links">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-link">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-col">
              <h4 className="footer-col-title">Services</h4>
              <ul className="footer-links">
                {SERVICE_LINKS.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-link">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col footer-contact-col">
              <h4 className="footer-col-title">Contact</h4>
              <ul className="footer-contact-list">
                <li className="footer-contact-item">
                  <span className="footer-contact-icon"><MapPin size={15} strokeWidth={1.8} /></span>
                  <div>
                    <span className="footer-contact-label">Office</span>
                    <span className="footer-contact-value">Nugegoda, Sri Lanka</span>
                  </div>
                </li>
                <li className="footer-contact-item">
                  <span className="footer-contact-icon"><Phone size={15} strokeWidth={1.8} /></span>
                  <div>
                    <span className="footer-contact-label">Phone</span>
                    <a href="tel:+94112345678" className="footer-contact-value">+94 11 234 5678</a>
                  </div>
                </li>
                <li className="footer-contact-item">
                  <span className="footer-contact-icon"><Mail size={15} strokeWidth={1.8} /></span>
                  <div>
                    <span className="footer-contact-label">Email</span>
                    <a href="mailto:hello@gms.lk" className="footer-contact-value">hello@gms.lk</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Row 2: bottom bar */}
          <div className="footer-bottom">
            <span className="footer-copy">&copy; {year} Grow More Solutions (Pvt) Ltd. All rights reserved.</span>
            <div className="footer-bottom-links">
              <Link to="/privacy">Privacy Policy</Link>
              <span className="footer-sep">/</span>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
