import { transform } from "framer-motion";

export const MainVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.15,
    },
    exit: { y: -100, opacity: 0 },
  },
};

export const MainItem = {
  initial: { opacity: 0.05, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    ease: [0.645, 0.045, 0.355, 1],
  },
  exit: { y: -100, opacity: 0 },
};

// SVG COMPONENT ANIMATION
export const SvgVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { delay: 2, staggerChildren: 0.15, delayChildren: 2 },
  },
};

export const SvgItem = {
  initial: { opacity: 0.15, y: 70 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      ease: [0.645, 0.045, 0.355, 1],
    },
  },
};

// Mobile Navigation
export const MobileNavVariant = {
  initial: { opacity: 0, x: 400 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
    },
  },
  exit: {
    opacity: 0,
    x: 500,
    transition: {
      duration: 0.55,
    },
  },
};
