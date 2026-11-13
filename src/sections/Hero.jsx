import React, { useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars -- motion is used via <motion.*> JSX member expressions
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "../data/constants";
import { EASE } from "../utils/animations";
import "./Hero.css";

// (e.g. "/master-planning" -> master-planning.mp4).
import softwareVid from "../assets/src_v/software.mp4";
import marketingVid from "../assets/src_v/marketing.mp4";
import graphicVid from "../assets/src_v/graphic-design.mp4";
import infrastructureVid from "../assets/src_v/infrastructure.mp4";
import planningVid from "../assets/src_v/master-planning.mp4";
import interiorVid from "../assets/src_v/interior-design.mp4";
import realEstateVid from "../assets/src_v/real-estate.mp4";
import bpoVid from "../assets/src_v/bpo.mp4";
import ecommerceVid from "../assets/src_v/ecommerce.mp4";
import gemstoneVid from "../assets/src_v/gem_vid.mp4";

const VIDEOS = {
  software: softwareVid,
  marketing: marketingVid,
  graphic: graphicVid,
  infrastructure: infrastructureVid,
  planning: planningVid,
  interior: interiorVid,
  realestate: realEstateVid,
  bpo: bpoVid,
  ecommerce: ecommerceVid,
  gemstone: gemstoneVid,
};

// All 10 services, split across the two drifting rows (top 5 / bottom 5).
const ROW_ONE = SERVICES.slice(0, 5);
const ROW_TWO = SERVICES.slice(5);

const pad = (value) => String(value).padStart(2, "0");

const ServiceCard = ({ service, number, duplicate }) => {
  const videoRef = useRef(null);

  // The clips are large, so a card only fetches and decodes its video while
  // it is close to the viewport — everything else rests on the poster image.
  useEffect(() => {
    const video = videoRef.current;
    const src = VIDEOS[service.key];
    if (video) video.dataset.fx = "ran";
    if (!video || !src) {
      if (video) video.dataset.fx = src ? "noRef" : `noSrc:${service.key}`;
      return undefined;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.dataset.fx = "reduced";
      return undefined; // static posters only
    }

    const attach = () => {
      if (!video.src) {
        video.src = src;
        video.load();
      }
      video.muted = true;
      video.defaultMuted = true;
      const started = video.play();
      if (started) started.catch(() => {});
      video.dataset.fx = `attached:${video.readyState}`;
    };

    const release = () => {
      video.pause();
      if (video.src) {
        video.removeAttribute("src");
        video.load(); // frees the buffered media + decoder
        video.dataset.fx = "released";
      }
    };

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => (entry.isIntersecting ? attach() : release())),
      { rootMargin: "120px 300px", threshold: 0 }
    );

    // Cards already in view on mount start immediately, without waiting for
    // the observer's first (frame-driven) callback.
    const rect = video.getBoundingClientRect();
    video.dataset.rect = `${Math.round(rect.left)},${Math.round(rect.top)},${Math.round(rect.right)},${Math.round(rect.bottom)}`;
    if (
      rect.right > -300 &&
      rect.left < window.innerWidth + 300 &&
      rect.bottom > -120 &&
      rect.top < window.innerHeight + 120
    ) {
      attach();
      video.dataset.fx = video.dataset.fx ?? "mountAttached";
    } else {
      video.dataset.fx = "mountOutOfView";
    }

    observer.observe(video);
    video.dataset.fx = `${video.dataset.fx}|observed`;

    return () => {
      observer.disconnect();
      release();
    };
  }, [service.key]);

  return (
    <Link
      className={`hero-card${duplicate ? " hero-card-dup" : ""}`}
      to={service.link}
      aria-hidden={duplicate || undefined}
      tabIndex={duplicate ? -1 : undefined}
    >
      <video
        ref={videoRef}
        className="hero-card-media"
        poster={service.image}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        tabIndex={-1}
      />
      <span className="hero-card-shade" aria-hidden="true" />
      <span className="hero-card-meta">
        <span className="hero-card-index">{pad(number)}</span>
        <span className="hero-card-title">{service.label}</span>
      </span>
      <span className="hero-card-go" aria-hidden="true">
        <ArrowUpRight size={15} strokeWidth={2.4} />
      </span>
    </Link>
  );
};

// One endless strip: the card set is rendered twice so the -50% loop is seamless.
const MarqueeRow = ({ items, offset, reverse }) => (
  <div className="hero-row">
    <div className={`hero-track${reverse ? " hero-track-reverse" : ""}`}>
      {[...items, ...items].map((service, i) => (
        <ServiceCard
          key={`${service.key}-${i}`}
          service={service}
          number={offset + (i % items.length) + 1}
          duplicate={i >= items.length}
        />
      ))}
    </div>
  </div>
);

const Hero = () => {
  const reduce = useReducedMotion();

  // Entrance choreography for the copy; skipped entirely for reduced motion.
  const enter = (delay, distance = 24) =>
    reduce
      ? { initial: false }
      : {
          initial: { opacity: 0, y: distance },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: EASE },
        };

  return (
    <section className="hero" aria-label="Our services">
      <div className="hero-copy">
        {/*<motion.span className="hero-eyebrow" {...enter(0, 16)}>
          Our Services
        </motion.span> */}

        <motion.h1 className="hero-title" {...enter(0.1)}>
          Transforming Ideas Into Innovation.
        </motion.h1>

        <motion.p className="hero-desc" {...enter(0.2, 18)}>
          The end-to-end partner Sri Lankan businesses rely on — built for
          infrastructure, design, and digital growth, from blueprint to
          delivery.
        </motion.p>
      </div>

      {/* Full-bleed wall of service clips drifting behind the copy */}
      <div className="hero-wall">
        <MarqueeRow items={ROW_ONE} offset={0} />
        <MarqueeRow items={ROW_TWO} offset={5} reverse />
        <div className="hero-veil" aria-hidden="true" />
      </div>
    </section>
  );
};

export default Hero;
