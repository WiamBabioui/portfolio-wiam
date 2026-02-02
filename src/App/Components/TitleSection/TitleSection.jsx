import React from "react";
import Line from "../../SVGs/Line";
import ScrollBar from "../../SVGs/Scroll";
import { motion } from "framer-motion";
import "./titleSection.css";
export default function TitleSections({ title, desc }) {
  return (
    <>
      <div className="row">
        <ScrollBar />
      </div>
      <div className="row ">
        <div className="col-md-12 titleSection">
          <motion.h2
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              scale: 1.1,
            }}
            transition={{
              duration: 1,
            }}
            className="m-0"
          >
            {title}
          </motion.h2>
          <Line />
          <motion.p
            className="m-0"
            initial={{ scale: 0.1 }}
            whileInView={{
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
          >
            {desc}
          </motion.p>
        </div>
      </div>
    </>
  );
}
