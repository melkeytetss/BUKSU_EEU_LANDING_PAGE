import { motion } from "motion/react";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "fade" | "scale";
  className?: string;
  style?: React.CSSProperties;
}

export function AnimatedSection({
  children,
  delay = 0,
  direction = "up",
  className,
  style,
}: AnimatedSectionProps) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : 0,
      x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
      scale: direction === "scale" ? 0.92 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      variants={variants}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// Stagger container for child animations
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className,
  style,
  staggerDelay = 0.12,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          },
        },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// Individual stagger child
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  direction?: "up" | "left" | "right" | "scale";
}

export function StaggerItem({
  children,
  className,
  style,
  direction = "up",
}: StaggerItemProps) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 36 : 0,
      x: direction === "left" ? -30 : direction === "right" ? 30 : 0,
      scale: direction === "scale" ? 0.9 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div variants={variants} className={className} style={style}>
      {children}
    </motion.div>
  );
}