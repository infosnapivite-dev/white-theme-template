import React from 'react';
import { motion } from 'framer-motion';

export const GallerySection = () => {
  return (
    <section className="relative w-full pt-16 pb-20 sm:pt-20 sm:pb-24 px-5 min-h-[580px] flex flex-col justify-center bg-white gpu-layer overflow-hidden">
      {/* Vertical Cursive Margin Text on Right Edge */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 origin-center select-none z-10 pointer-events-none">
        <span
          className="font-script-latin text-[#1c1c1c] text-[28px] sm:text-[30px] tracking-wide block whitespace-nowrap"
          style={{
            writingMode: 'vertical-rl',
            transform: 'rotate(0deg)',
            fontFamily: "'Alex Brush', cursive",
          }}
        >
          Love governs the world
        </span>
      </div>

      {/* Asymmetric Overlapping Photo Grid */}
      <div className="relative w-full flex flex-col space-y-7 pr-7">
        {/* Photo 1: Top Image (Right-aligned / Centered-right) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-[80%] ml-auto border border-[#1c1c1c] bg-[#faf8f5] p-[7px] shadow-xs relative"
        >
          <div className="w-full aspect-[4/5] overflow-hidden bg-[#eee]">
            <img
              src="/images/couple_embrace.jpg"
              alt="Martin & Alena embrace"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              draggable="false"
            />
          </div>
        </motion.div>

        {/* Photo 2: Bottom Image (Left-aligned / Overlapping stagger) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-[76%] mr-auto border border-[#1c1c1c] bg-[#faf8f5] p-[7px] shadow-sm relative -mt-10 z-10"
        >
          <div className="w-full aspect-square overflow-hidden bg-[#eee]">
            <img
              src="/images/couple_dancing.jpg"
              alt="Martin & Alena dancing"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              draggable="false"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
