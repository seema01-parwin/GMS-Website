import React, { useState, useEffect } from "react";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import { Link } from "react-router-dom";

import {
  Code,
  Megaphone,
  ChevronDown,
  Server,
  Map,
  Palette,
  Building2,
  PenTool,
  Headset,
  Menu,
  X,
} from "lucide-react";

import "./Navbar.css";
import logo from "../assets/Logo1.png";

// splits text into per-letter spans with staggered hover delay
const AnimatedText = ({ text }) => (
  <>
    {text.split("").map((char, i) => (
      <span
        key={i}
        className="nav-letter"
        style={{ transitionDelay: `${i * 30}ms` }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ))}
  </>
);

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => window.scrollY > 10);

  // sync the DOM class whenever the theme state changes
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  // toggle the "scrolled" style while the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleTheme = () => {
    const newTheme = !darkMode;

    setDarkMode(newTheme);

    if (newTheme) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>

      <div className="navbar-left">
        <img
          src={logo}
          alt="GMS Logo"
          className="navbar-logo"
        />
      </div>

      {/* ---- DESKTOP CENTER MENU (hidden on mobile) ---- */}
      <div className="navbar-center">

        <Link to="/" className="navbar-link">
          <AnimatedText text="Home" />
        </Link>

        <Link to="/about" className="navbar-link">
          <AnimatedText text="About Us" />
        </Link>

        <div className="dropdown">

          <span className="navbar-link services-link">
            <span className="services-text">
              <AnimatedText text="Services" />
            </span>
            <ChevronDown className="dropdown-icon" size={14} />
          </span>

          <div className="mega-menu">

            <div className="mega-menu-header">
              <h4>Our Services</h4>
              <Link to="/services" className="mega-menu-viewall">
                View All →
              </Link>
            </div>

            <div className="mega-menu-grid">

              <Link to="/software" className="service-card">
                <div className="service-icon"><Code size={18} /></div>
                <div className="service-text">
                  <span className="service-title">Software</span>
                  <span className="service-desc">Custom software for every business</span>
                </div>
              </Link>

              <Link to="/marketing" className="service-card">
                <div className="service-icon"><Megaphone size={18} /></div>
                <div className="service-text">
                  <span className="service-title">Marketing</span>
                  <span className="service-desc">Digital strategies that drive growth</span>
                </div>
              </Link>

              <Link to="/graphic-design" className="service-card">
                <div className="service-icon"><PenTool size={18} /></div>
                <div className="service-text">
                  <span className="service-title">Graphic Design</span>
                  <span className="service-desc">Branding, UI/UX & creative content</span>
                </div>
              </Link>

              <Link to="/infrastructure" className="service-card">
                <div className="service-icon"><Server size={18} /></div>
                <div className="service-text">
                  <span className="service-title">Infrastructure</span>
                  <span className="service-desc">Reliable IT and network solutions</span>
                </div>
              </Link>

              <Link to="/master-planning" className="service-card">
                <div className="service-icon"><Map size={18} /></div>
                <div className="service-text">
                  <span className="service-title">Master Planning</span>
                  <span className="service-desc">Strategic planning for developments</span>
                </div>
              </Link>

              <Link to="/interior-design" className="service-card">
                <div className="service-icon"><Palette size={18} /></div>
                <div className="service-text">
                  <span className="service-title">Interior Design</span>
                  <span className="service-desc">Modern interiors with lasting style</span>
                </div>
              </Link>

              <Link to="/real-estate" className="service-card">
                <div className="service-icon"><Building2 size={18} /></div>
                <div className="service-text">
                  <span className="service-title">Real Estate</span>
                  <span className="service-desc">Trusted property and investment solutions</span>
                </div>
              </Link>

              <Link to="/bpo" className="service-card">
                <div className="service-icon"><Headset size={18} /></div>
                <div className="service-text">
                  <span className="service-title">BPO</span>
                  <span className="service-desc">Business process outsourcing services</span>
                </div>
              </Link>

            </div>

            <div className="mega-menu-footer">
              <p>Solutions designed for your business growth</p>
            </div>

          </div>

        </div>

        <Link to="/career" className="navbar-link">
          <AnimatedText text="Career" />
        </Link>

        <div className="dropdown">

          <span className="navbar-link services-link">
            <span className="services-text">
              <AnimatedText text="Other" />
            </span>
            <ChevronDown className="dropdown-icon" size={14} />
          </span>

          <div className="mega-menu">

            <div className="mega-menu-header">
              <h4>Other Services</h4>
              <Link to="/other" className="mega-menu-viewall">
                View All →
              </Link>
            </div>

            <div className="mega-menu-grid">

              <Link to="/gallery" className="service-card">
                <div className="service-icon"><Palette size={18} /></div>
                <div className="service-text">
                  <span className="service-title">Gallery</span>
                  <span className="service-desc">Explore our latest projects</span>
                </div>
              </Link>

              <Link to="/portfolio" className="service-card">
                <div className="service-icon"><Building2 size={18} /></div>
                <div className="service-text">
                  <span className="service-title">Portfolio</span>
                  <span className="service-desc">Our completed success stories</span>
                </div>
              </Link>

              <Link to="/blog" className="service-card">
                <div className="service-icon"><Code size={18} /></div>
                <div className="service-text">
                  <span className="service-title">Blog</span>
                  <span className="service-desc">Industry news and insights</span>
                </div>
              </Link>

              <Link to="/news" className="service-card">
                <div className="service-icon"><Megaphone size={18} /></div>
                <div className="service-text">
                  <span className="service-title">News</span>
                  <span className="service-desc">Latest company updates</span>
                </div>
              </Link>

            </div>

            <div className="mega-menu-footer">
              <p>Discover more about Grow More Solutions</p>
            </div>

          </div>

        </div>

      </div>

      {/* ---- RIGHT SIDE (theme toggle always visible; contact swaps for hamburger on mobile) ---- */}
      <div className="navbar-right">

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle Theme"
        >
          <IconSun
            className={`theme-icon sun-icon ${!darkMode ? "active" : ""}`}
            size={22}
            stroke={2}
          />

          <IconMoonStars
            className={`theme-icon moon-icon ${darkMode ? "active" : ""}`}
            size={22}
            stroke={2}
          />
        </button>

        <Link to="/contact" className="contact-btn navbar-contact-desktop">
          Contact Us
        </Link>

        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* ---- MOBILE OVERLAY + SLIDE-IN PANEL ---- */}
      <div
        className={`mobile-overlay${mobileOpen ? " open" : ""}`}
        onClick={closeMobile}
        aria-hidden="true"
      />

      <div className={`mobile-panel${mobileOpen ? " open" : ""}`}>
        <div className="mobile-panel-inner">

          <Link to="/" className="mobile-link" onClick={closeMobile}>Home</Link>
          <Link to="/about" className="mobile-link" onClick={closeMobile}>About Us</Link>

          <div className="mobile-group">
            <span className="mobile-group-label">Services</span>
            <Link to="/software" className="mobile-sublink" onClick={closeMobile}>
              <Code size={15} /> Software
            </Link>
            <Link to="/marketing" className="mobile-sublink" onClick={closeMobile}>
              <Megaphone size={15} /> Marketing
            </Link>
            <Link to="/graphic-design" className="mobile-sublink" onClick={closeMobile}>
              <PenTool size={15} /> Graphic Design
            </Link>
            <Link to="/infrastructure" className="mobile-sublink" onClick={closeMobile}>
              <Server size={15} /> Infrastructure
            </Link>
            <Link to="/master-planning" className="mobile-sublink" onClick={closeMobile}>
              <Map size={15} /> Master Planning
            </Link>
            <Link to="/interior-design" className="mobile-sublink" onClick={closeMobile}>
              <Palette size={15} /> Interior Design
            </Link>
            <Link to="/real-estate" className="mobile-sublink" onClick={closeMobile}>
              <Building2 size={15} /> Real Estate
            </Link>
            <Link to="/bpo" className="mobile-sublink" onClick={closeMobile}>
              <Headset size={15} /> BPO
            </Link>
          </div>

          <Link to="/career" className="mobile-link" onClick={closeMobile}>Career</Link>

          <div className="mobile-group">
            <span className="mobile-group-label">Other</span>
            <Link to="/gallery" className="mobile-sublink" onClick={closeMobile}>
              <Palette size={15} /> Gallery
            </Link>
            <Link to="/portfolio" className="mobile-sublink" onClick={closeMobile}>
              <Building2 size={15} /> Portfolio
            </Link>
            <Link to="/blog" className="mobile-sublink" onClick={closeMobile}>
              <Code size={15} /> Blog
            </Link>
            <Link to="/news" className="mobile-sublink" onClick={closeMobile}>
              <Megaphone size={15} /> News
            </Link>
          </div>

          <Link to="/contact" className="contact-btn mobile-contact" onClick={closeMobile}>
            Contact Us
          </Link>

        </div>
      </div>

    </nav>
  );
};

export default Navbar;