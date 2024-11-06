export const characterCardAnimationVariants = {
  hidden: {
    x: -50,
    opacity: 0,
    scale: 0.9,
  },
  visible: () => ({
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      delay: 0.2,
    },
  }),
  exit: {
    x: 50,
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.2,
    },
  },
};
