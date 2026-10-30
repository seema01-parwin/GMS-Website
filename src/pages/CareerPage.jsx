import React, { useState } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars -- motion is used via <motion.div> JSX member expressions
import { motion, AnimatePresence } from "motion/react";
import {
  Code2,
  Headset,
  Briefcase,
  MapPin,
  Clock,
  GraduationCap,
  ChevronDown,
  ArrowRight,
  Mail,
  Phone,
  CheckCircle2,
  CalendarDays,
  HeartPulse,
  ShieldCheck,
  Users,
  Zap,
  MonitorSmartphone,
  PenTool,
  Megaphone,
  LifeBuoy,
  Search,
  CheckCircle,
  Award,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { fadeUp, zoomIn } from "../utils/animations";
import supportImg from "../assets/services/dedicated-support.jpg";
import "./CareerPage.css";

const DEPARTMENTS = [
  "Web Development",
  "BPO & Support",
  "Design",
  "Marketing",
  "IT & Infrastructure",
];

const STATS = [
  { num: "8+", label: "Open Roles" },
  { num: "40+", label: "Team Members" },
  { num: "5", label: "Departments" },
  { num: "100%", label: "Direct Hire" },
];

const ROLES = [
  {
    id: "fullstack-web-developer",
    title: "Full-Stack Web Developer",
    dept: "Web Development",
    icon: Code2,
    type: "Full-time",
    location: "Nugegoda, Sri Lanka",
    experience: "2+ years",
    featured: true,
    summary:
      "Build and maintain customer-facing web applications end to end — from Laravel APIs to React interfaces — for real client products.",
    responsibilities: [
      "Design, build, and maintain responsive web applications and APIs",
      "Translate client requirements into clean, documented technical solutions",
      "Work directly with clients and project managers on scoping and estimates",
      "Write secure, tested code and review work across the team",
      "Support deployments, fixes, and enhancements after go-live",
    ],
    requirements: [
      "Strong PHP and Laravel experience, or equivalent in another stack",
      "Working knowledge of JavaScript and React",
      "Solid HTML and CSS fundamentals with attention to detail",
      "Familiarity with MySQL, Git, and REST APIs",
      "Able to work from our Nugegoda office during working hours",
    ],
    tags: ["Laravel", "PHP", "React", "MySQL", "REST", "Git"],
  },
  {
    id: "frontend-developer",
    title: "Front-End Developer (React)",
    dept: "Web Development",
    icon: MonitorSmartphone,
    type: "Full-time",
    location: "Nugegoda / Hybrid",
    experience: "1+ year",
    summary:
      "Turn designs into fast, accessible interfaces and keep our web products sharp across every device and browser.",
    responsibilities: [
      "Build pixel-accurate, responsive interfaces from approved designs",
      "Componentise UI for reuse across our products and client projects",
      "Improve page speed, accessibility, and Core Web Vitals",
      "Work with backend developers to connect APIs cleanly",
    ],
    requirements: [
      "Hands-on React and modern JavaScript (hooks, context, state management)",
      "Strong CSS fundamentals — layout, flexbox, grid, responsive design",
      "Familiarity with Tailwind CSS or a comparable utility framework",
      "A portfolio of shipped interfaces is a strong plus",
    ],
    tags: ["React", "JavaScript", "Tailwind", "UI", "Responsive"],
  },
  {
    id: "junior-web-developer",
    title: "Junior Web Developer",
    dept: "Web Development",
    icon: GraduationCap,
    type: "Full-time / Internship",
    location: "Nugegoda, Sri Lanka",
    experience: "Fresher / Final-year student",
    summary:
      "Start your development career on live client projects with structured training, real code reviews, and a mentor beside you.",
    responsibilities: [
      "Support feature development and bug fixes on client websites and apps",
      "Build and maintain simple landing pages and CMS-driven sites",
      "Follow code review feedback and improve your fundamentals weekly",
      "Participate in internal knowledge-sharing sessions",
    ],
    requirements: [
      "Basic HTML, CSS, and JavaScript — you are willing to learn fast",
      "Familiarity with any backend language (PHP, Node, Python, Java)",
      "A personal project, coursework, or internship you can talk us through",
      "Clear written English and a genuine interest in building things",
    ],
    tags: ["HTML", "CSS", "JavaScript", "PHP", "Learning"],
  },
  {
    id: "call-center-agent",
    title: "Call Center Agent (Voice & Chat Support)",
    dept: "BPO & Support",
    icon: Headset,
    type: "Full-time",
    location: "Nugegoda, Sri Lanka (on-site)",
    experience: "1+ year",
    featured: true,
    summary:
      "Handle inbound and outbound customer calls and chats for our clients — resolving issues, processing requests, and representing our brand well.",
    responsibilities: [
      "Answer inbound calls and live chat, resolve enquiries, and escalate correctly",
      "Process customer requests, data updates, and service requests accurately",
      "Maintain accurate call logs and customer records in the CRM",
      "Follow client-specific scripts, compliance rules, and quality standards",
    ],
    requirements: [
      "Clear spoken and written English and Sinhala",
      "A calm, patient, professional manner on the phone",
      "Basic computer literacy and comfort with CRM and ticketing tools",
      "Previous call-centre or customer-facing experience is a plus, not a must",
      "Availability for shift work, including weekends on a roster",
    ],
    tags: ["Voice Support", "Chat", "CRM", "English", "Sinhala"],
  },
  {
    id: "senior-call-center-agent",
    title: "Senior Call Center Agent / Team Lead",
    dept: "BPO & Support",
    icon: LifeBuoy,
    type: "Full-time",
    location: "Nugegoda, Sri Lanka (on-site)",
    experience: "3+ years",
    summary:
      "Lead a small floor of agents, own escalations, and keep quality and SLA numbers where our clients need them.",
    responsibilities: [
      "Supervise a team of agents and run daily briefings and quality reviews",
      "Own escalations and resolve issues the team cannot close",
      "Monitor SLA, AHT, CSAT, and backlog — and act on the numbers",
      "Coach agents on call handling, product knowledge, and compliance",
      "Report daily performance to the client and to GMS management",
    ],
    requirements: [
      "3+ years in a customer support or call-centre environment",
      "Experience leading or coaching a team of agents",
      "Strong grasp of call-centre metrics and reporting discipline",
      "Confident in English and Sinhala, with working knowledge of Tamil",
    ],
    tags: ["Team Lead", "SLA", "Quality", "Coaching", "Reporting"],
  },
  {
    id: "it-support-officer",
    title: "IT Support Officer",
    dept: "IT & Infrastructure",
    icon: LifeBuoy,
    type: "Full-time",
    location: "Nugegoda, Sri Lanka",
    experience: "1+ year",
    summary:
      "Keep our people, systems, and network running — from workstations and accounts to printer, network, and software issues.",
    responsibilities: [
      "Provide first-line IT support to staff across sites",
      "Manage user accounts, access rights, and endpoint setup",
      "Maintain hardware, software, and network availability",
      "Keep asset, warranty, and licensing records up to date",
    ],
    requirements: [
      "Solid working knowledge of Windows, Microsoft 365, and networking basics",
      "Hands-on troubleshooting across hardware and software issues",
      "Clear communication and a service-first attitude",
      "Experience with ticketing or helpdesk tools is an advantage",
    ],
    tags: ["Windows", "Microsoft 365", "Networking", "Helpdesk"],
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    dept: "Design",
    icon: PenTool,
    type: "Full-time",
    location: "Nugegoda / Hybrid",
    experience: "2+ years",
    summary:
      "Design interfaces that clients love and developers can actually build — from wireframe to polished, documented handoff.",
    responsibilities: [
      "Own the design process from discovery and wireframes to final handoff",
      "Produce design systems and reusable component libraries",
      "Run usability reviews and refine designs against real feedback",
      "Work with developers through build to keep quality intact",
    ],
    requirements: [
      "A strong portfolio of product, web, and mobile interface work",
      "Fluent in Figma and comfortable with design systems",
      "Understanding of usability principles and accessibility standards",
      "Ability to explain design decisions to technical stakeholders",
    ],
    tags: ["Figma", "Design Systems", "Prototyping", "UX Research"],
  },
  {
    id: "digital-marketing-executive",
    title: "Digital Marketing Executive",
    dept: "Marketing",
    icon: Megaphone,
    type: "Full-time",
    location: "Nugegoda, Sri Lanka",
    experience: "1+ year",
    summary:
      "Plan, run, and report on campaigns for our clients across search, social, email, and content.",
    responsibilities: [
      "Build and run client campaigns across Google, Meta, and email",
      "Produce content calendars and coordinate creative production",
      "Track performance with analytics tools and report on results clearly",
      "Run keyword, competitor, and audience research",
    ],
    requirements: [
      "Hands-on experience with at least one major ad platform",
      "Strong written English and Sinhala for content and client communication",
      "Working knowledge of Google Analytics and SEO fundamentals",
      "A data-first mindset — you care about cost, reach, and return",
    ],
    tags: ["Google Ads", "Meta Ads", "SEO", "Analytics", "Content"],
  },
];

const FILTER_DEPARTMENTS = ["All Roles", "Web Development", "BPO & Support", "Design", "Marketing", "IT & Infrastructure"];

const ENG_STACK = [
  "React",
  "Next.js",
  "Laravel",
  "PHP",
  "MySQL",
  "Tailwind CSS",
  "JavaScript",
  "Node.js",
  "Git",
  "REST APIs",
  "Figma",
  "Postman",
];

const BPO_STACK = [
  "CRM Systems",
  "Ticketing Tools",
  "KYC / AML",
  "Excel",
  "Google Workspace",
  "Quality Reviews",
  "SLA Tracking",
  "Call Recording",
  "Live Chat",
  "Data Entry",
];

const BENEFITS = [
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
    title: "Training & Growth",
    desc: "Continuous learning, technical training, and mentoring that build practical skills and real professional experience.",
  },
];

const CULTURE = {
  icon: Users,
  title: "Culture & Welfare",
  desc: "An annual party, a festive Secret Santa, and a collaborative workplace that values innovation, teamwork, and continuous improvement.",
};

const STEPS = [
  { num: "01", title: "Apply", desc: "Send your CV through the apply link, a job portal, or our email." },
  { num: "02", title: "Screening", desc: "We review your CV for qualifications, skills, and fit with the role." },
  { num: "03", title: "Assessment", desc: "A short written exercise — and a practical task for technical roles." },
  { num: "04", title: "Interview", desc: "Technical and HR interviews to understand your strengths and attitude." },
  { num: "05", title: "Offer", desc: "The most suitable candidates receive an offer to join the team." },
];

const CareerPage = () => {
  const [activeDept, setActiveDept] = useState("All Roles");
  const [openRole, setOpenRole] = useState(null);

  const visibleRoles = ROLES.filter(
    (role) => activeDept === "All Roles" || role.dept === activeDept
  );

  return (
    <div>
      <Navbar />

      {/* ============ HERO ============ */}
      <section className="cr-hero">
        <div className="cr-hero-inner">
          <motion.div className="cr-hero-content" {...fadeUp(0.1)}>
            <span className="cr-eyebrow">
              <span className="cr-eyebrow-dot" />
              Careers
            </span>
            <h1 className="cr-hero-title">
              Build Your Career
              <br />
              <span className="cr-hero-accent">On Real Work</span>
            </h1>
            <p className="cr-hero-sub">
              Developers, call centre agents, designers, and specialists — join a
              team that ships live client products from Nugegoda and grows while
              it delivers.
            </p>
            <div className="cr-hero-actions">
              <a href="#roles" className="hero-btn primary">
                View Open Roles <ArrowRight size={16} />
              </a>
              <a href="#apply" className="cr-hero-text-link">
                How to Apply <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>

          <motion.div className="cr-hero-visual" {...fadeUp(0.2)}>
            <div className="cr-hero-media">
              <img
                src={supportImg}
                alt="Grow More Solutions support and delivery team"
                loading="eager"
              />
              <span className="cr-hero-chip">
                <span className="cr-hero-chip-dot" />
                We're Hiring
              </span>
            </div>
            <motion.div className="cr-hero-card" {...zoomIn(0.35)}>
              <span className="cr-hero-card-label">Open Positions</span>
              <strong className="cr-hero-card-value">{ROLES.length}</strong>
              <span className="cr-hero-card-note">Across {FILTER_DEPARTMENTS.length - 1} departments</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============ DEPARTMENT MARQUEE ============ */}
      <div className="cr-marquee" aria-hidden="true">
        <div className="cr-marquee-track">
          {[...DEPARTMENTS, ...DEPARTMENTS].map((dept, i) => (
            <span key={`${dept}-${i}`} className="cr-marquee-item">
              {dept}
              <span className="cr-marquee-dot" />
            </span>
          ))}
        </div>
      </div>

      {/* ============ STATS BAR ============ */}
      <section className="cr-stats">
        <div className="cr-stats-inner">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              className="cr-stat"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ amount: 0.5 }}
            >
              <strong className="cr-stat-num">{s.num}</strong>
              <span className="cr-stat-label">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============ OPEN ROLES ============ */}
      <section className="cr-roles" id="roles">
        <div className="cr-roles-inner">
          <motion.div className="cr-roles-header" {...fadeUp(0.1)}>
            <span className="cr-eyebrow">
              <span className="cr-eyebrow-dot" />
              Open Roles
            </span>
            <h2 className="cr-roles-title">
              Find Your <span className="cr-hero-accent">Role</span>
            </h2>
            <p className="cr-roles-sub">
              Every posting is a real, open position in our Nugegoda team. Tap a
              role to see the full responsibilities and requirements.
            </p>
          </motion.div>

          <div className="cr-filters" role="tablist" aria-label="Filter roles by department">
            {FILTER_DEPARTMENTS.map((dept) => (
              <button
                key={dept}
                type="button"
                role="tab"
                aria-selected={activeDept === dept}
                className={`cr-filter${activeDept === dept ? " cr-filter--active" : ""}`}
                onClick={() => setActiveDept(dept)}
              >
                {dept}
              </button>
            ))}
          </div>

          <motion.div className="cr-role-list" layout>
            <AnimatePresence mode="popLayout">
              {visibleRoles.map((role, i) => {
                const isOpen = openRole === role.id;
                return (
                  <motion.article
                    key={role.id}
                    layout
                    className={`cr-role${role.featured ? " cr-role--featured" : ""}${
                      isOpen ? " cr-role--open" : ""
                    }`}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, delay: Math.min(i * 0.05, 0.3) }}
                  >
                    <button
                      type="button"
                      className="cr-role-head"
                      onClick={() => setOpenRole(isOpen ? null : role.id)}
                      aria-expanded={isOpen}
                    >
                      <span className="cr-role-icon">
                        <role.icon size={20} strokeWidth={1.8} />
                      </span>

                      <span className="cr-role-headings">
                        <span className="cr-role-title">{role.title}</span>
                        <span className="cr-role-summary">{role.summary}</span>
                      </span>

                      <span className="cr-role-meta">
                        <span className="cr-role-dept">{role.dept}</span>
                        <span className="cr-role-meta-item">
                          <Briefcase size={13} strokeWidth={1.9} />
                          {role.type}
                        </span>
                        <span className="cr-role-meta-item">
                          <MapPin size={13} strokeWidth={1.9} />
                          {role.location}
                        </span>
                        <span className="cr-role-meta-item">
                          <Clock size={13} strokeWidth={1.9} />
                          {role.experience}
                        </span>
                      </span>

                      <span className="cr-role-toggle" aria-hidden="true">
                        <ChevronDown size={18} />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          className="cr-role-detail"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <div className="cr-role-detail-inner">
                            <div className="cr-role-col">
                              <h5 className="cr-role-col-title">Responsibilities</h5>
                              <ul className="cr-role-list-items">
                                {role.responsibilities.map((r) => (
                                  <li key={r}>
                                    <CheckCircle2 size={14} strokeWidth={2.1} />
                                    {r}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="cr-role-col">
                              <h5 className="cr-role-col-title">Requirements</h5>
                              <ul className="cr-role-list-items">
                                {role.requirements.map((r) => (
                                  <li key={r}>
                                    <CheckCircle size={14} strokeWidth={2.1} />
                                    {r}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="cr-role-footer">
                            <div className="cr-role-tags">
                              {role.tags.map((tag) => (
                                <span key={tag} className="cr-role-tag">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <a
                              className="cr-role-apply"
                              href={`mailto:hello@gms.lk?subject=${encodeURIComponent(
                                `Application — ${role.title}`
                              )}`}
                            >
                              Apply for this role <ArrowRight size={15} />
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {visibleRoles.length === 0 && (
            <p className="cr-role-empty">
              No open roles in this department right now — send us your CV and
              we&apos;ll keep you in mind.
            </p>
          )}
        </div>
      </section>

      {/* ============ TOOLS & STACK ============ */}
      <section className="cr-stack">
        <div className="cr-stack-inner">
          <motion.div className="cr-stack-header" {...fadeUp(0.1)}>
            <span className="cr-eyebrow">
              <span className="cr-eyebrow-dot" />
              What You&apos;ll Work With
            </span>
            <h2 className="cr-stack-title">
              The <span className="cr-hero-accent">Toolkit</span>
            </h2>
          </motion.div>

          <div className="cr-stack-grid">
            <motion.div
              className="cr-stack-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ amount: 0.3 }}
            >
              <span className="cr-stack-col-head">
                <Code2 size={18} strokeWidth={1.8} />
                Development Stack
              </span>
              <div className="cr-stack-chips">
                {ENG_STACK.map((tool) => (
                  <span key={tool} className="cr-stack-chip">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="cr-stack-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ amount: 0.3 }}
            >
              <span className="cr-stack-col-head">
                <Headset size={18} strokeWidth={1.8} />
                BPO &amp; Support Stack
              </span>
              <div className="cr-stack-chips">
                {BPO_STACK.map((tool) => (
                  <span key={tool} className="cr-stack-chip">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ BENEFITS ============ */}
      <section className="cr-benefits">
        <div className="cr-benefits-inner">
          <motion.div className="cr-benefits-header" {...fadeUp(0.1)}>
            <span className="cr-eyebrow">
              <span className="cr-eyebrow-dot" />
              What You Get
            </span>
            <h2 className="cr-benefits-title">
              Benefits &amp; <span className="cr-hero-accent">Welfare</span>
            </h2>
          </motion.div>

          <div className="cr-benefits-grid">
            {BENEFITS.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                className="cr-benefit"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ amount: 0.3 }}
              >
                <span className="cr-benefit-num">{benefit.num}</span>
                <span className="cr-benefit-icon">
                  <benefit.icon size={20} strokeWidth={1.8} />
                </span>
                <h4 className="cr-benefit-title">{benefit.title}</h4>
                <p className="cr-benefit-desc">{benefit.desc}</p>
              </motion.div>
            ))}

            <motion.div
              className="cr-benefit cr-benefit--wide"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              viewport={{ amount: 0.3 }}
            >
              <span className="cr-benefit-icon">
                <CULTURE.icon size={22} strokeWidth={1.8} />
              </span>
              <div className="cr-benefit-wide-text">
                <h4 className="cr-benefit-title">{CULTURE.title}</h4>
                <p className="cr-benefit-desc">{CULTURE.desc}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ HIRING PROCESS ============ */}
      <section className="cr-process" id="apply">
        <div className="cr-process-inner">
          <motion.div className="cr-process-header" {...fadeUp(0.1)}>
            <span className="cr-eyebrow">
              <span className="cr-eyebrow-dot" />
              How to Apply
            </span>
            <h2 className="cr-process-title">
              Five Steps to <span className="cr-hero-accent">Your Desk</span>
            </h2>
          </motion.div>

          <div className="cr-process-rail">
            <span className="cr-process-line" aria-hidden="true" />
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                className="cr-process-step"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ amount: 0.5 }}
              >
                <span className="cr-process-num">{step.num}</span>
                <span className="cr-process-step-title">{step.title}</span>
                <span className="cr-process-step-desc">{step.desc}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="cr-apply-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ amount: 0.4 }}
          >
            <div className="cr-apply-text">
              <span className="cr-apply-kicker">No matching role?</span>
              <h3 className="cr-apply-title">Send us your CV anyway</h3>
              <p className="cr-apply-sub">
                We review every application and keep strong profiles on file for
                upcoming roles.
              </p>
            </div>
            <div className="cr-apply-actions">
              <a
                className="cr-apply-btn"
                href="mailto:hello@gms.lk?subject=Career%20Application"
              >
                <Mail size={16} />
                hello@gms.lk
              </a>
              <a className="cr-apply-phone" href="tel:+94112345678">
                <Phone size={15} />
                +94 11 234 5678
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareerPage;
