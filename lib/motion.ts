export const easeOut = [0.22, 1, 0.36, 1] as const;

export const duration = {
  fast: 0.15,
  base: 0.22,
  slow: 0.4,
} as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: easeOut },
  },
};

export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.04,
    },
  },
};
