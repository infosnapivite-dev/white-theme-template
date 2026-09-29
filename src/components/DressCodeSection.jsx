import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

export const DressCodeSection = () => {
  const [activeSwatch, setActiveSwatch] = useState(null);

  const swatches = [
    { name: 'Beige', hex: '#e5d5c0', label: 'Champagne Beige', textDark: true },
    { name: 'Taupe', hex: '#978572', label: 'Warm Mocha / Taupe', textDark: false },
    { name: 'Slate', hex: '#3d3f42', label: 'Dark Slate Charcoal', textDark: false },
    { name: 'Black', hex: '#0a0a0a', label: 'Classic Noir', textDark: false },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const swatchContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.25,
      },
    },
  };

  const swatchItemVariants = {
    hidden: { opacity: 0, scale: 0.7, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="relative w-full pt-10 pb-16 px-6 bg-white flex flex-col items-center justify-center text-center select-none"
    >
      {/* Cursive Header: Wardrobe */}
      <motion.div variants={itemVariants} className="mb-3">
        <h2
          className="font-script-latin text-[#1c1c1c] text-[48px] sm:text-[54px] font-normal leading-tight select-none"
          style={{ fontFamily: "'Alex Brush', cursive" }}
        >
          Wardrobe
        </h2>
      </motion.div>

      {/* Subtext */}
      <motion.p
        variants={itemVariants}
        className="max-w-[290px] text-[#555] text-[13px] sm:text-[13.5px] font-light leading-relaxed mb-8 tracking-wide select-none"
      >
        we would be delighted if you
        <br />
        support the aesthetic of our
        <br />
        wedding in your attire
      </motion.p>

      {/* 4 Swatch Color Palette Flexbox */}
      <motion.div
        variants={swatchContainerVariants}
        className="flex items-center justify-center gap-3 w-full max-w-[280px]"
      >
        {swatches.map((swatch, index) => {
          const isActive = activeSwatch === index;
          return (
            <motion.button
              key={index}
              variants={swatchItemVariants}
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => setActiveSwatch(isActive ? null : index)}
              className={`flex-1 aspect-square rounded-[3px] transition-all duration-300 relative group cursor-pointer flex items-center justify-center ${
                isActive ? 'ring-2 ring-offset-2 ring-[#1c1c1c] shadow-md' : 'shadow-xs'
              }`}
              style={{ backgroundColor: swatch.hex }}
              title={swatch.label}
            >
              {isActive && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Check
                    size={14}
                    className={swatch.textDark ? 'text-neutral-800' : 'text-white'}
                  />
                </motion.div>
              )}
              <span className="sr-only">{swatch.name}</span>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Dynamic Swatch Detail Note */}
      <motion.div variants={itemVariants} className="h-6 mt-4 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {activeSwatch !== null ? (
            <motion.span
              key={activeSwatch}
              initial={{ opacity: 0, y: -6, filter: 'blur(2px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: 6, filter: 'blur(2px)' }}
              transition={{ duration: 0.25 }}
              className="text-[11px] uppercase tracking-[0.18em] text-[#333] font-light"
            >
              {swatches[activeSwatch].name} • {swatches[activeSwatch].label}
            </motion.span>
          ) : (
            <motion.span
              key="default-cue"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-[10px] uppercase tracking-[0.2em] text-[#999] font-light"
            >
              tap any shade to explore
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
};

export default DressCodeSection;
