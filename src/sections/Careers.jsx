import React from "react";
// eslint-disable-next-line no-unused-vars -- motion is used via <motion.div> JSX member expressions
import { motion } from "motion/react";
import {
  Briefcase,
  CalendarDays,
  HeartPulse,
  ShieldCheck,
  GraduationCap,
  Users,
  ArrowRight,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Careers.css";

const TALL_CARD = {
  icon: Briefcase,
  title: "Real-World Projects",
  desc: "Get hands-on exposure to live client work from day one — and build a portfolio that speaks for itself.",
  points: [
    "Software & web development",
    "Mobile app delivery",
    "BPO & IT consulting",
    "Graphic design & marketing",
  ],
};

const CARDS = [
  {
    icon: CalendarDays,
    num: "01",
    title: "Annual & Casual Leave",
    desc: "Seven days of annual leave after one year of service, plus seven days of casual leave a year — in line with the Shop and Office Employees Act.",
  },
  {
    icon: HeartPulse,
    num: "02",
    title: "Medical Leave",
    desc: "Seven days of paid medical leave per year, with a medical certificate needed only for absences beyond two consecutive days.",
  },
  {
    icon: ShieldCheck,
    num: "03",
    title: "EPF & ETF",
    desc: "EPF of 8% + 12% plus an employer-funded ETF of 3% of your monthly basic salary, securing your long-term future.",
  },
  {
    icon: GraduationCap,
    num: "04",
    title: "Professional Development",
    desc: "Continuous learning, technical training, and mentoring that help you build practical skills and real professional experience.",
  },
];

const WIDE_CARD = {
  icon: Users,
  title: "Culture & Welfare",
  desc: "An annual party, a festive Secret Santa, and a collaborative workplace that values innovation, teamwork, and continuous improvement.",
};

const STAMPS = [
  { icon: ShieldCheck, label: "EPF & ETF" },
  { icon: CalendarDays, label: "Paid leave" },
  { icon: GraduationCap, label: "Learning" },
  { icon: Zap, label: "Real work" },
];

const STEPS = [
  { num: "01", title: "Apply", desc: "Send your application via job portals or social channels." },
  { num: "02", title: "Screening", desc: "CVs reviewed for qualifications, skills, and experience." },
  { num: "03", title: "Assessment", desc: "A written exam plus a practical task for shortlisted candidates." },
  { num: "04", title: "Interview", desc: "Technical & HR interviews assess your fit and attitude." },
  { num: "05", title: "Offer", desc: "The most suitable candidates receive an offer to join the team." },
];

const Careers = () => (
  <section className="careers-section">
    <div className="careers-glow careers-glow--a" aria-hidden="true" />
    <div className="careers-glow careers-glow--b" aria-hidden="true" />
    <div className="careers-gridline" aria-hidden="true" />
    <span className="careers-watermark" aria-hidden="true">JOIN US</span>

    <div className="careers-inner">
      {/* ---- Header: split layout ---- */}
      <div className="careers-header">
        <motion.div
          className="careers-header-main"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.4 }}
        >
          <span className="careers-pill">
            <span className="careers-pill-dot" />
            Careers &#47; Grow More Solutions
          </span>
          <h2 className="careers-title">
            Where <em>ambition</em> meets<br />
            <span className="careers-title-accent">real-world projects</span>
          </h2>
          <p className="careers-sub">
            We&apos;re a team of specialists across software, BPO, graphic
            design, and marketing — building real products for real clients
            while we grow together.
          </p>
          <div className="careers-actions">
            <Link to="/contact" className="careers-btn">
              Apply Now <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
            <span className="careers-actions-note">No agencies · Direct team · Fast replies</span>
          </div>
        </motion.div>

        {/* pledge panel: rotating badge + stamps */}
        <motion.div
          className="careers-header-side"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ amount: 0.4 }}
        >
          <div className="careers-panel">
            <span className="careers-panel-corner careers-panel-corner--tl" aria-hidden="true" />
            <span className="careers-panel-corner careers-panel-corner--tr" aria-hidden="true" />
            <span className="careers-panel-corner careers-panel-corner--bl" aria-hidden="true" />
            <span className="careers-panel-corner careers-panel-corner--br" aria-hidden="true" />

            <div className="careers-panel-head">
              <div className="careers-panel-headline">
                <span className="careers-panel-kicker">Our pledge</span>
                <strong className="careers-panel-title">
                  Grow with the tech, <br />
                  not just along with it.
                </strong>
              </div>
            </div>

            <ul className="careers-stamps">
              {STAMPS.map((stamp) => (
                <li className="careers-stamp" key={stamp.label}>
                  <stamp.icon size={14} strokeWidth={2.2} />
                  {stamp.label}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* ---- Bento grid ---- */}
      <div className="careers-bento">
        <motion.div
          className="careers-card careers-card--tall"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.3 }}
        >
          <span className="careers-card-glow" aria-hidden="true" />
          <span className="careers-card-icon">
            <TALL_CARD.icon size={22} strokeWidth={1.7} />
          </span>
          <h4 className="careers-card-title">{TALL_CARD.title}</h4>
          <p className="careers-card-desc">{TALL_CARD.desc}</p>
          <ul className="careers-card-list">
            {TALL_CARD.points.map((point) => (
              <li key={point}>
                <CheckCircle2 size={14} strokeWidth={2.2} />
                {point}
              </li>
            ))}
          </ul>
        </motion.div>

        {CARDS.map((card, i) => (
          <motion.div
            key={card.title}
            className="careers-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ amount: 0.3 }}
          >
            <span className="careers-card-num">{card.num}</span>
            <span className="careers-card-icon">
              <card.icon size={20} strokeWidth={1.7} />
            </span>
            <h4 className="careers-card-title">{card.title}</h4>
            <p className="careers-card-desc">{card.desc}</p>
          </motion.div>
        ))}

        <motion.div
          className="careers-card careers-card--wide"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ amount: 0.3 }}
        >
          <span className="careers-card-icon">
            <WIDE_CARD.icon size={22} strokeWidth={1.7} />
          </span>
          <div className="careers-wide-text">
            <h4 className="careers-card-title">{WIDE_CARD.title}</h4>
            <p className="careers-card-desc">{WIDE_CARD.desc}</p>
          </div>
        </motion.div>
      </div>

      {/* ---- How to apply rail ---- */}
      <div className="careers-steps">
        <motion.span
          className="careers-pill"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.5 }}
        >
          How to apply
        </motion.span>
        <div className="careers-rail">
          <span className="careers-rail-line" aria-hidden="true" />
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              className="careers-step"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ amount: 0.5 }}
            >
              <span className="careers-step-num">{step.num}</span>
              <span className="careers-step-title">{step.title}</span>
              <span className="careers-step-desc">{step.desc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Careers;