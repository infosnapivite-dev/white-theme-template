import React from 'react';
import { motion } from 'framer-motion';

export const DateMotif = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const numberVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="relative w-full max-w-[240px] mx-auto py-4 flex flex-col items-center justify-center select-none"
    >
      <svg
        viewBox="0 0 260 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-sm"
        style={{ overflow: 'visible' }}
      >
        {/* Number 26 */}
        <motion.text
          variants={numberVariants}
          x="30"
          y="130"
          fontFamily="'Bodoni Moda', 'Playfair Display', serif"
          fontSize="145"
          fontWeight="400"
          fill="#1c1c1c"
          letterSpacing="-0.08em"
        >
          26
        </motion.text>

        {/* Number 10 - offset slightly right */}
        <motion.text
          variants={numberVariants}
          x="120"
          y="235"
          fontFamily="'Bodoni Moda', 'Playfair Display', serif"
          fontSize="145"
          fontWeight="300"
          fill="#1c1c1c"
          letterSpacing="-0.08em"
        >
          10
        </motion.text>

        {/* Number 25 - below 26, offset left/center */}
        <motion.text
          variants={numberVariants}
          x="45"
          y="340"
          fontFamily="'Bodoni Moda', 'Playfair Display', serif"
          fontSize="145"
          fontWeight="400"
          fill="#1c1c1c"
          letterSpacing="-0.08em"
        >
          25
        </motion.text>
      </svg>
    </motion.div>
  );
};

export default DateMotif;
