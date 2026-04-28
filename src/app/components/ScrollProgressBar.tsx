import { useScroll, useSpring, motion } from "motion/react";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        background: "linear-gradient(90deg, #0515AB 0%, #4F6EF7 50%, #8990CB 100%)",
        transformOrigin: "0%",
        zIndex: 9999,
        boxShadow: "0 0 10px rgba(79, 110, 247, 0.8), 0 0 24px rgba(5, 21, 171, 0.5)",
      }}
    />
  );
}
