import React from "react";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

const CardWrapper = ({ children, className = "" }) => (
  <motion.div
    initial={{ scale: 1.03, y: 12, filter: "blur(8px)" }}
    animate={{ scale: 1, y: 0, filter: "blur(0px)" }}
    transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
    className={twMerge(
      "group relative overflow-hidden rounded-[2rem] border border-white/75 bg-white/80 p-5 md:p-4 flex flex-col justify-between h-full backdrop-blur-xl",
      className,
    )}
  >
    {children}
  </motion.div>
);

export default CardWrapper;