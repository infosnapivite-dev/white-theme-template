import React from 'react';
import { motion } from 'framer-motion';

export const LoveTypography = () => {
  return (
    <div className="relative w-full max-w-[290px] mx-auto py-2 flex items-center justify-center select-none gpu-layer">
      <svg
        viewBox="0 0 330 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-sm"
        style={{ overflow: 'visible' }}
      >
        {/* Letter L - Top Left */}
        <motion.text
          x="28"
          y="180"
          fontFamily="'Bodoni Moda', 'Playfair Display', serif"
          fontSize="210"
          fontWeight="400"
          fill="#1c1c1c"
          letterSpacing="-0.05em"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          L
        </motion.text>

        {/* Letter O - Top Right (Shifted slightly right for gentle horizontal gap from V) */}
        <motion.text
          x="148"
          y="315"
          fontFamily="'Bodoni Moda', 'Playfair Display', serif"
          fontSize="240"
          fontWeight="300"
          fill="#1c1c1c"
          letterSpacing="-0.03em"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          O
        </motion.text>

        {/* Letter V - Bottom Left (Shifted slightly left to create gap with O) */}
        <motion.text
          x="24"
          y="405"
          fontFamily="'Bodoni Moda', 'Playfair Display', serif"
          fontSize="220"
          fontWeight="400"
          fill="#1c1c1c"
          letterSpacing="-0.05em"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          V
        </motion.text>

        {/* Letter E - Bottom Right */}
        <motion.text
          x="162"
          y="490"
          fontFamily="'Bodoni Moda', 'Playfair Display', serif"
          fontSize="220"
          fontWeight="400"
          fill="#1c1c1c"
          letterSpacing="-0.03em"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          E
        </motion.text>
      </svg>
    </div>
  );
};

export default LoveTypography;
