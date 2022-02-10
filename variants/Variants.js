export const MainVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 1.25,
      staggerChildren: 0.15,
    },
    exit: { y: -100, opacity: 0 },
  },
};

export const MainItem = {
  initial: { opacity: 0.1, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    ease: [0.645, 0.045, 0.355, 1],
  },
  exit: { y: -100, opacity: 0 },
};
