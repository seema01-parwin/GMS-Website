import infrastructureImg from "../assets/services/infrastructure.jpg";
import planningImg from "../assets/services/master-planning.jpg";
import softwareImg from "../assets/services/software-development.jpg";
import interiorImg from "../assets/services/interior-design.jpg";
import realEstateImg from "../assets/services/real-estate.jpg";
import marketingImg from "../assets/services/marketing.jpg";
import ecommerceImg from "../assets/services/ecommerce.jpg";
import gemstoneImg from "../assets/services/gemstone-marketplace.jpg";
import bpoImg from "../assets/services/bpo-services.jpg";

import dashImg from "../assets/services/project-dashboard.jpg";
import portalImg from "../assets/services/client-portal.jpg";
import analyticsImg from "../assets/services/analytics-reporting.jpg";
import docsImg from "../assets/services/document-management.jpg";
import securityImg from "../assets/services/security-compliance.jpg";
import supportImg from "../assets/services/dedicated-support.jpg";

export const SERVICES = [
  {
    key: "software",
    label: "Software Development",
    image: softwareImg,
    desc: "Custom web and business software built to streamline operations — from CRMs to customer-facing platforms — tailored to how your business actually works.",
    features: [
      "Custom CRM & internal tools",
      "Web & mobile application development",
      "API integrations & automation",
      "Ongoing support & maintenance",
    ],
    link: "/software",
  },
    {
    key: "marketing",
    label: "Marketing",
    image: analyticsImg,
    desc: "Data-driven marketing strategies that build brand visibility and drive measurable growth — from digital campaigns to full brand positioning.",
    features: [
      "Brand strategy & positioning",
      "Digital & social media campaigns",
      "SEO & content marketing",
      "Performance tracking & analytics",
    ],
    link: "/marketing",
  },
    {
    key: "graphic",
    label: "Graphic Design",
    image: marketingImg,
    desc: "Creative branding, UI/UX design, and digital content that give your business a polished, consistent visual identity across every touchpoint.",
    features: [
      "Logo & brand identity design",
      "UI/UX design for web & mobile",
      "Print & digital content creation",
      "Social media creatives & marketing assets",
    ],
    link: "/graphic-design",
  },
  {
    key: "infrastructure",
    label: "Infrastructure",
    image: infrastructureImg,
    desc: "We design and deliver robust infrastructure projects — from roadworks to utilities — engineered for durability and long-term performance across Sri Lanka.",
    features: [
      "Site survey & feasibility studies",
      "Civil & structural engineering",
      "Utility & road network development",
      "Project supervision & quality control",
    ],
    link: "/infrastructure",
  },
  {
    key: "planning",
    label: "Master Planning",
    image: planningImg,
    desc: "Strategic land-use and development planning that turns raw sites into cohesive, future-ready communities and commercial zones.",
    features: [
      "Land-use & zoning strategy",
      "Urban & site master plans",
      "Regulatory & approval support",
      "Phased development roadmaps",
    ],
    link: "/master-planning",
  },
  {
    key: "interior",
    label: "Interior Design",
    image: interiorImg,
    desc: "Modern, Professional, functional interiors for residential and commercial spaces, balancing aesthetics with practicality and lasting quality.",
    features: [
      "Space planning & concept design",
      "3D visualization & material selection",
      "Furniture & fit-out coordination",
      "Turnkey project delivery",
    ],
    link: "/interior-design",
  },
  {
    key: "realestate",
    label: "Real Estate",
    image: realEstateImg,
    desc: "Trusted guidance across property investment, development, and sales — helping clients make confident, well-informed real estate decisions.",
    features: [
      "Property investment advisory",
      "Residential & commercial sales",
      "Development partnerships",
      "Site acquisition support",
    ],
    link: "/real-estate",
  },
  {
    key: "bpo",
    label: "BPO",
    image: bpoImg,
    desc: "Reliable business process outsourcing — dedicated teams handling customer support, back-office operations, and data workflows so you can focus on growth.",
    features: [
      "Dedicated support & back-office teams",
      "Customer service & helpdesk operations",
      "Data processing & quality assurance",
      "SLA-backed delivery & reporting",
    ],
    link: "/bpo",
  },
  {
    key: "ecommerce",
    label: "E-Commerce",
    image: ecommerceImg,
    desc: "Conversion-focused online stores and marketplace platforms — designed to sell, scale, and connect with the tools your business already runs on.",
    features: [
      "Custom storefront design & build",
      "Secure payments & checkout flows",
      "Product & order management",
      "Marketplace integrations & analytics",
    ],
    link: "/ecommerce",
  },
  {
    key: "gemstone",
    label: "Gemstone Marketplace",
    image: gemstoneImg,
    desc: "A trusted digital marketplace for gemstone trading — verified listings, secure transactions, and full traceability from seller to buyer.",
    features: [
      "Verified seller & listing management",
      "Secure transactions & escrow flow",
      "Certification & provenance records",
      "Buyer–seller messaging & insights",
    ],
    link: "/gemstone-marketplace",
  },
];

export const MARQUEE_LABELS = [
  "Infrastructure", "Master Planning", "Software Dev", "Interior Design",
  "Real Estate", "Marketing", "Graphic Design", "IT Solutions", "Planning",
  "Design & Build", "Digital", "Analytics", "Property",
];

export const FEATURES = [
  {
    id: "dashboard",
    label: "01",
    tag: "Core",
    title: "Project Dashboard",
    desc: "Real-time oversight of every project — budgets, timelines, and milestones at a glance.",
    icon: "LayoutDashboard",
    image: dashImg,
    items: [
      "Live budget & cost tracking",
      "Milestone progress indicators",
      "Team workload overview",
      "Automated status reports",
    ],
  },
  {
    id: "portal",
    label: "02",
    tag: "Clients",
    title: "Client Portal",
    desc: "Give your clients a branded portal to track progress, approve documents, and communicate.",
    icon: "Users",
    image: portalImg,
    items: [
      "Branded client login",
      "Document approval workflow",
      "Real-time project timeline",
      "Secure messaging system",
    ],
  },
  {
    id: "analytics",
    label: "03",
    tag: "Intelligence",
    title: "Analytics & Reporting",
    desc: "AI-powered insights across all projects — forecast risks, optimise costs, and track KPIs.",
    icon: "BarChart3",
    image: analyticsImg,
    items: [
      "Predictive cost forecasting",
      "Risk assessment engine",
      "Custom report builder",
      "Export to PDF & Excel",
    ],
  },
  {
    id: "documents",
    label: "04",
    tag: "Documents",
    title: "Document Management",
    desc: "Centralised storage for plans, contracts, and approvals — version-controlled and searchable.",
    icon: "FileText",
    image: docsImg,
    items: [
      "Version-controlled files",
      "Approval & sign-off flows",
      "Full-text search across projects",
      "Automatic backup & sync",
    ],
  },
  {
    id: "security",
    label: "05",
    tag: "Enterprise",
    title: "Security & Compliance",
    desc: "Bank-grade encryption, role-based access, and full audit trails for every action.",
    icon: "Shield",
    image: securityImg,
    items: [
      "End-to-end encryption",
      "Role-based permissions",
      "Full audit trail logging",
      "SOC 2 compliance ready",
    ],
  },
  {
    id: "support",
    label: "06",
    tag: "24/7",
    title: "Dedicated Support",
    desc: "Round-the-clock technical support with a dedicated account manager for every client.",
    icon: "Headphones",
    image: supportImg,
    items: [
      "24/7 live chat & phone",
      "Dedicated account manager",
      "SLA-backed response times",
      "On-site training available",
    ],
  },
];

export const REVIEWS = [
  {
    id: 1,
    name: "Amara Perera",
    role: "CEO",
    company: "Lanka Construction Ltd.",
    rating: 5,
    text: "Grow More Solutions transformed our project management entirely. Their infrastructure team delivered our highway expansion project 2 weeks ahead of schedule and under budget. Exceptional quality.",
    service: "Infrastructure",
    avatar: "AP",
  },
  {
    id: 2,
    name: "Dinesh Fernando",
    role: "Director of Operations",
    company: "Skyline Developers",
    rating: 5,
    text: "The software platform they built for us streamlined our entire workflow. Client portal access, real-time tracking, and automated reporting have saved us countless hours every week.",
    service: "Software Development",
    avatar: "DF",
  },
  {
    id: 3,
    name: "Nisha Wijesinghe",
    role: "Head of Design",
    company: "Urban Spaces Colombo",
    rating: 5,
    text: "Their interior design team understood our vision perfectly. The office renovation exceeded expectations — modern, functional, and exactly aligned with our brand identity.",
    service: "Interior Design",
    avatar: "NW",
  },
  {
    id: 4,
    name: "Rajith Kumara",
    role: "Managing Director",
    company: "Horizon Properties",
    rating: 5,
    text: "Professional, responsive, and genuinely invested in our success. Their real estate advisory helped us identify and close 3 prime commercial properties in record time.",
    service: "Real Estate",
    avatar: "RK",
  },
  {
    id: 5,
    name: "Kavisha de Silva",
    role: "Marketing Manager",
    company: "TechVentures SL",
    rating: 5,
    text: "Our digital presence tripled within 6 months. The marketing team's data-driven approach and creative campaigns delivered measurable results that exceeded all targets.",
    service: "Marketing",
    avatar: "KS",
  },
  {
    id: 6,
    name: "Mohamed Farhan",
    role: "Project Director",
    company: "Island Infrastructure Co.",
    rating: 5,
    text: "Outstanding master planning expertise. They took our raw 50-acre site and created a comprehensive development roadmap that's now being executed flawlessly.",
    service: "Master Planning",
    avatar: "MF",
  },
];
