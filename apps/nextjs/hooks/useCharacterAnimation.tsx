import { useCallback } from "react";
import { characterCardAnimationVariants } from "~/constants/animations";

export const useCharacterAnimation = (index: number) => {
  const getAnimationProps = useCallback(
    () => ({
      layout: true,
      variants: characterCardAnimationVariants,
      initial: "hidden",
      whileInView: "visible",
      exit: "exit",
      custom: index,
      viewport: {
        once: true,
        amount: 0,
        margin: "200px 0px",
      },
    }),
    [index],
  );

  return { getAnimationProps };
};
