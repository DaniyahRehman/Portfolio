import { Variants, MotionProps } from "framer-motion";

// Variants (for initial/animate/exit states)
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const pageTransition: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

export const slideInLeft: Variants = {
  initial: { x: -60, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const slideInRight: Variants = {
  initial: { x: 60, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const scaleIn: Variants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

// Hover-only props (MotionProps, no initial/animate/variants)
export const cardHover: Pick<MotionProps, 'whileHover' | 'transition'> = {
  whileHover: {
    scale: 1.05,
  },
  transition: {
    type: 'spring',
    stiffness: 100,
  },
};

export const cardHoverSmall: Pick<MotionProps, 'whileHover' | 'transition'> = {
  whileHover: { scale: 1.02 },
  transition: { type: "spring", stiffness: 300 },
};
