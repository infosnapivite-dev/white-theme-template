import React from 'react';
import { motion } from 'framer-motion';
import LoveTypography from './LoveTypography';

export const HeroSection = () => {
  // Container animation variants for staggered load
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.08,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: -10, letterSpacing: '0.4em' },
    visible: {
      opacity: 1,
      y: 0,
      letterSpacing: '0.22em',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const verticalTextVariants = {
    hidden: { opacity: 0, x: -25, rotate: 180 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 180,
      transition: {
        duration: 1.1,
        delay: 0.35,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const scrollCueVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 0.7,
      y: 0,
      transition: { duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative w-full pt-10 pb-8 px-6 flex flex-col justify-between min-h-[580px] bg-white select-none overflow-hidden">
      {/* Pinned Header: Names with character animation */}
      <motion.div
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className="w-full flex flex-col items-end pr-2"
      >
        <motion.h1
          variants={letterVariants}
          className="font-serif-luxury text-[17px] tracking-[0.22em] text-[#1c1c1c] uppercase font-light select-none"
        >
          MARTIN&ALENA
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-12 h-[1px] bg-[#1c1c1c]/20 mt-1 origin-right"
        />
      </motion.div>

      {/* Main Body: Margin text on Left + Central LOVE Lockup */}
      <div className="relative w-full my-auto flex items-center justify-center py-6">
        {/* Vertical Cursive Margin Text on Left */}
        <motion.div
          variants={verticalTextVariants}
          initial="hidden"
          animate="visible"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 origin-center select-none"
        >
          <span
            className="font-script-latin text-[#1c1c1c] text-[28px] tracking-wide block whitespace-nowrap"
            style={{
              writingMode: 'vertical-rl',
              fontFamily: "'Alex Brush', cursive",
            }}
          >
            Love governs the world
          </span>
        </motion.div>

        {/* Central LOVE Poster Typography */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="pl-6 w-full flex justify-center"
        >
          <LoveTypography />
        </motion.div>
      </div>

      {/* Subtle Animated Scroll Cue at bottom */}
      <motion.div
        variants={scrollCueVariants}
        initial="hidden"
        animate="visible"
        className="w-full flex flex-col items-center justify-center pt-2 pb-1"
      >
        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="text-[9.5px] uppercase tracking-[0.3em] text-[#888] font-light"
        >
          scroll to explore
        </motion.span>
        <div className="h-[22px] flex items-center justify-center mt-2">
          <motion.div
            animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            style={{ originY: 0 }}
            className="w-[1px] h-[18px] bg-[#1c1c1c]/40"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
