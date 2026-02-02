import { motion } from "framer-motion";
import React from "react";
export default function Line() {
  return (
    <motion.svg
      initial={{
        scale: 0.1,
      }}
      whileInView={{
        scale: 1.1,
        // rotateY: 360,
      }}
      transition={{
        duration: 1,
        // repeat: Infinity,
        // repeatType: "loop",
        // ease: "easeInOut",
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="174"
      height="12"
      viewBox="0 0 174 12"
      fill="none"
    >
      <path
        d="M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM162.667 6C162.667 8.94552 165.054 11.3333 168 11.3333C170.946 11.3333 173.333 8.94552 173.333 6C173.333 3.05448 170.946 0.666667 168 0.666667C165.054 0.666667 162.667 3.05448 162.667 6ZM6 7H168V5H6V7Z"
        fill="#e11d74"
      />
    </motion.svg>
  );
}
