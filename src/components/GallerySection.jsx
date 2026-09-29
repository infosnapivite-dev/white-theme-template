import React from 'react';
import { motion } from 'framer-motion';

export const GallerySection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.1,
      },
    },
  };

  const photoVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
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

  const verticalTextVariants = {
    hidden: { opacity: 0, x: 25 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.0,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="relative w-full pt-16 pb-20 sm:pt-20 sm:pb-24 px-5 min-h-[580px] flex flex-col justify-center bg-white gpu-layer overflow-hidden"
    >
      {/* Vertical Cursive Margin Text on Right Edge */}
      <motion.div
        variants={verticalTextVariants}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 origin-center select-none z-10 pointer-events-none"
      >
        <span
          className="font-script-latin text-[#1c1c1c] text-[28px] sm:text-[30px] tracking-wide block whitespace-nowrap"
          style={{
            writingMode: 'vertical-rl',
            fontFamily: "'Alex Brush', cursive",
          }}
        >
          Love governs the world
        </span>
      </motion.div>

      {/* Asymmetric Overlapping Photo Grid */}
      <div className="relative w-full flex flex-col space-y-7 pr-7">
        {/* Photo 1: Top Image (Right-aligned / Centered-right) */}
        <motion.div
          variants={photoVariants}
          whileHover={{ y: -4, transition: { duration: 0.3 } }}
          className="w-[80%] ml-auto border border-[#1c1c1c] bg-[#faf8f5] p-[7px] shadow-xs relative"
        >
          <div className="w-full aspect-[4/5] overflow-hidden bg-[#eee]">
            <motion.img
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              src="/images/couple_embrace.jpg"
              alt="Martin & Alena embrace"
              className="w-full h-full object-cover object-center"
              draggable="false"
            />
          </div>
        </motion.div>

        {/* Photo 2: Bottom Image (Left-aligned / Overlapping stagger) */}
        <motion.div
          variants={photoVariants}
          whileHover={{ y: -4, transition: { duration: 0.3 } }}
          className="w-[76%] mr-auto border border-[#1c1c1c] bg-[#faf8f5] p-[7px] shadow-sm relative -mt-10 z-10"
        >
          <div className="w-full aspect-square overflow-hidden bg-[#eee]">
            <motion.img
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              src="/images/couple_dancing.jpg"
              alt="Martin & Alena dancing"
              className="w-full h-full object-cover object-center"
              draggable="false"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GallerySection;
