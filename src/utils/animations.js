// Shared animation helpers — import these instead of re-declaring
// the same variants in every section.

export const EASE = [0.22, 1, 0.36, 1];

export const VIEWPORT = { once: true, amount: 0.3 };

// ---- Entrance variants (spread straight onto a motion element) ----
export const fadeUp = (delay = 0, distance = 28) => ({
  initial: { opacity: 0, y: distance },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: EASE },
  viewport: VIEWPORT,
});

export const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.6, delay, ease: EASE },
  viewport: VIEWPORT,
});

export const fadeLeft = (delay = 0, distance = 32) => ({
  initial: { opacity: 0, x: -distance },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, delay, ease: EASE },
  viewport: VIEWPORT,
});

export const fadeRight = (delay = 0, distance = 32) => ({
  initial: { opacity: 0, x: distance },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, delay, ease: EASE },
  viewport: VIEWPORT,
});

export const zoomIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.94 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, delay, ease: EASE },
  viewport: VIEWPORT,
});

// ---- Hover / tap micro-interactions ----
// Transition lives inside each gesture so spreading these never
// overrides an element's own entrance transition.
export const hoverLift = {
  whileHover: { y: -6, transition: { type: "spring", stiffness: 320, damping: 22 } },
  whileTap: { scale: 0.98, transition: { type: "spring", stiffness: 420, damping: 20 } },
};

export const hoverScale = {
  whileHover: { scale: 1.04, transition: { type: "spring", stiffness: 320, damping: 22 } },
  whileTap: { scale: 0.98, transition: { type: "spring", stiffness: 420, damping: 20 } },
};

export const hoverTag = {
  whileHover: { y: -3, scale: 1.06, transition: { type: "spring", stiffness: 380, damping: 18 } },
  whileTap: { scale: 0.96, transition: { type: "spring", stiffness: 500, damping: 20 } },
};

export const pressable = {
  whileTap: { scale: 0.96, transition: { type: "spring", stiffness: 420, damping: 20 } },
};

// ---- Stagger orchestration ----
export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0) => ({
  initial: "hidden",
  whileInView: "show",
  viewport: VIEWPORT,
  variants: {
    hidden: {},
    show: {
      transition: { staggerChildren, delayChildren },
    },
  },
});

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};
