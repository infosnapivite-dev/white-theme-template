import React from 'react';
import { motion } from 'framer-motion';
import LoveTypography from './LoveTypography';

export const HeroSection = () => {
  return (
    <section className="relative w-full pt-10 pb-12 px-6 flex flex-col justify-between min-h-[540px] bg-white gpu-layer">
      {/* Pinned Header: Names */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex justify-end items-center pr-2"
      >
        <h1 className="font-serif-luxury text-[17px] tracking-[0.22em] text-[#1c1c1c] uppercase font-light select-none">
          MARTIN&ALENA
        </h1>
      </motion.div>

      {/* Main Body: Margin text on Left + Central LOVE Lockup */}
      <div className="relative w-full my-auto flex items-center justify-center py-6">
        {/* Vertical Cursive Margin Text on Left */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 origin-center select-none"
        >
          <span
            className="font-script-latin text-[#1c1c1c] text-[28px] tracking-wide block whitespace-nowrap"
            style={{
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              fontFamily: "'Alex Brush', cursive",
            }}
          >
            Love governs the world
          </span>
        </motion.div>

        {/* Central LOVE Poster Typography */}
        <div className="pl-6 w-full flex justify-center">
          <LoveTypography />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
