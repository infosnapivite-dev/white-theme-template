import React from 'react';
import { motion } from 'framer-motion';

export const LoveTypography = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.94 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.0,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative w-full max-w-[290px] mx-auto py-2 flex items-center justify-center select-none"
    >
      <svg
        viewBox="0 0 330 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-sm"
        style={{ overflow: 'visible' }}
      >
        {/* Letter L - Top Left */}
        <motion.text
          variants={letterVariants}
          x="28"
          y="180"
          fontFamily="'Bodoni Moda', 'Playfair Display', serif"
          fontSize="210"
          fontWeight="400"
          fill="#1c1c1c"
          letterSpacing="-0.05em"
        >
          L
        </motion.text>

        {/* Letter O - Top Right */}
        <motion.text
          variants={letterVariants}
          x="148"
          y="315"
          fontFamily="'Bodoni Moda', 'Playfair Display', serif"
          fontSize="240"
          fontWeight="300"
          fill="#1c1c1c"
          letterSpacing="-0.03em"
        >
          O
        </motion.text>

        {/* Letter V - Bottom Left */}
        <motion.text
          variants={letterVariants}
          x="24"
          y="405"
          fontFamily="'Bodoni Moda', 'Playfair Display', serif"
          fontSize="220"
          fontWeight="400"
          fill="#1c1c1c"
          letterSpacing="-0.05em"
        >
          V
        </motion.text>

        {/* Letter E - Bottom Right */}
        <motion.text
          variants={letterVariants}
          x="162"
          y="490"
          fontFamily="'Bodoni Moda', 'Playfair Display', serif"
          fontSize="220"
          fontWeight="400"
          fill="#1c1c1c"
          letterSpacing="-0.03em"
        >
          E
        </motion.text>
      </svg>
    </motion.div>
  );
};

export default LoveTypography;
