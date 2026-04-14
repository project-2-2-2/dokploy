import React from "react";
import { motion } from "framer-motion";

const TEXT = "GOCKER";

const Footer = () => {
  const letters = TEXT.split("");
  const center = (letters.length - 1) / 2;

  const charVariants = {
    initial: (i) => {
      const distanceFromCenter = Math.abs(i - center);
      const tiltDirection = i < center ? -1 : 1;

      return {
        x: tiltDirection * (16 + distanceFromCenter * 7),
        y: 150 + distanceFromCenter * 42,
        scaleY: 2.5,
        scaleX: 0.7,
        rotateX: -80,
        rotateZ: tiltDirection * (12 + distanceFromCenter * 4),
        skewY: tiltDirection * 16,
      };
    },
    animate: (i) => {
      const distanceFromCenter = Math.abs(i - center);
      const tiltDirection = i < center ? -1 : 1;

      return {
        x: [tiltDirection * 18, tiltDirection * -7, tiltDirection * 2, 0],
        y: [0, -54 - distanceFromCenter * 5, 16, 0],
        scaleY: [0.66, 1.24, 0.92, 1],
        scaleX: [1.4, 0.86, 1.06, 1],
        rotateX: [34, -12, 4, 0],
        rotateZ: [tiltDirection * 12, tiltDirection * -5, tiltDirection * 2, 0],
        skewY: [tiltDirection * -10, tiltDirection * 4, 0],
      };
    },
  };

  const transitionForChar = (i) => {
    const distanceFromCenter = Math.abs(i - center);

    return {
      delay: distanceFromCenter * 0.07,
      times: [0, 0.42, 0.78, 1],
      duration: 1.08,
      ease: [0.12, 0.95, 0.22, 1],
    };
  };

  return (
    <footer className="relative overflow-hidden bg-[#0b0b10] py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-[#00000070] to-transparent" />

      <motion.h2
        aria-label={TEXT}
        initial="initial"
        whileInView="animate"
        viewport={{ amount: 0.7, once: false }}
        className="mx-auto flex w-full max-w-[100vw] justify-center px-2 font-[heading] uppercase leading-[0.72] tracking-[-0.04em] text-[#f5f5f3]"
        style={{ perspective: 1100 }}
      >
        {letters.map((letter, i) => (
          <motion.span
            key={`${letter}-${i}`}
            custom={i}
            variants={charVariants}
            transition={transitionForChar(i)}
            className="inline-block origin-bottom text-[clamp(6.2rem,24vw,24rem)]"
          >
            {letter}
          </motion.span>
        ))}
      </motion.h2>
    </footer>
  );
};

export default Footer;
