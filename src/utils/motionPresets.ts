export const fadeIn = ({ delay = 0, duration = 0.8, y = 30 } = {}) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration,
    delay,
    // type: "spring" as const,
    // stiffness: 100,
    ease: "easeInOut" as const,
  },
  viewport: {
    once: false,
    amount: 0.2,
  },
});
