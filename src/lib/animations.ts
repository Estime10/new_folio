export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const headerGroupVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const bottomGroupVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.4, 0, 0.2, 1],
      delay: 0.3,
    },
  },
};

export const menuItemVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5 + i * 0.15,
      duration: 1,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

export const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const imagePresenceVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const projectCardVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

export const projectGridVariants = {
  hidden: { scale: 0.8, y: 50 },
  visible: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  exit: {
    scale: 0.8,
    y: 50,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const projectTabVariants = {
  web: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
  mobile: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};

export const projectItemVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
};

export const projectCardItemVariants = {
  desktop: {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  },
  mobile: {
    initial: { scale: 1 },
    hover: {
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  },
};

export const projectModalVariants = {
  overlay: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
  content: {
    initial: { scale: 0.95, opacity: 0, y: 20 },
    animate: { scale: 1, opacity: 1, y: 0 },
    exit: { scale: 0.95, opacity: 0, y: 20 },
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
      opacity: { duration: 0.3 },
    },
  },
  header: {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { delay: 0.1, duration: 0.3 },
  },
  closeButton: {
    initial: { opacity: 0, rotate: 0 },
    animate: { opacity: 1, rotate: 180 },
    exit: { opacity: 0, rotate: 0 },
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
  body: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { delay: 0.2, duration: 0.3 },
  },
  image: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { delay: 0.3, duration: 0.4 },
  },
};
