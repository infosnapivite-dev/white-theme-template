import React from 'react';
import { motion } from 'framer-motion';

export const DateMotif = () => {
  return (
    <div className="relative w-full max-w-[240px] mx-auto py-6 flex flex-col items-center justify-center select-none gpu-layer">
      <svg
        viewBox="0 0 260 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-sm"
        style={{ overflow: 'visible' }}
      >
        {/* Number 26 */}
        <motion.text
          x="30"
          y="130"
          fontFamily="'Bodoni Moda', 'Playfair Display', serif"
          fontSize="145"
          fontWeight="400"
          fill="#1c1c1c"
          letterSpacing="-0.08em"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          26
        </motion.text>

        {/* Number 10 - offset slightly right */}
        <motion.text
          x="120"
          y="235"
          fontFamily="'Bodoni Moda', 'Playfair Display', serif"
          fontSize="145"
          fontWeight="300"
          fill="#1c1c1c"
          letterSpacing="-0.08em"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          10
        </motion.text>

        {/* Number 25 - below 26, offset left/center */}
        <motion.text
          x="45"
          y="340"
          fontFamily="'Bodoni Moda', 'Playfair Display', serif"
          fontSize="145"
          fontWeight="400"
          fill="#1c1c1c"
          letterSpacing="-0.08em"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          25
        </motion.text>
      </svg>
    </div>
  );
};

export default DateMotif;
