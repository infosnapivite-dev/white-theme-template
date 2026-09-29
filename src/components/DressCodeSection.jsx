import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const DressCodeSection = () => {
  const [activeSwatch, setActiveSwatch] = useState(null);

  const swatches = [
    { name: 'Beige', hex: '#e5d5c0', label: 'Champagne Beige' },
    { name: 'Taupe', hex: '#978572', label: 'Warm Mocha / Taupe' },
    { name: 'Slate', hex: '#3d3f42', label: 'Dark Slate Charcoal' },
    { name: 'Black', hex: '#0a0a0a', label: 'Classic Noir' },
  ];

  return (
    <section className="relative w-full pt-10 pb-16 px-6 bg-white flex flex-col items-center justify-center text-center gpu-layer">
      {/* Cursive Header: Wardrobe */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-3"
      >
        <h2
          className="font-script-latin text-[#1c1c1c] text-[48px] sm:text-[54px] font-normal leading-tight select-none"
          style={{ fontFamily: "'Alex Brush', cursive" }}
        >
          Wardrobe
        </h2>
      </motion.div>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
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
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-center gap-2.5 w-full max-w-[280px]"
      >
        {swatches.map((swatch, index) => (
          <button
            key={index}
            onClick={() => setActiveSwatch(activeSwatch === index ? null : index)}
            className="flex-1 aspect-square rounded-[2px] transition-transform duration-300 hover:scale-105 active:scale-95 focus:outline-none relative group cursor-pointer shadow-xs"
            style={{ backgroundColor: swatch.hex }}
            title={swatch.label}
          >
            <span className="sr-only">{swatch.name}</span>
          </button>
        ))}
      </motion.div>

      {/* Dynamic Swatch Detail Note */}
      <div className="h-6 mt-3 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {activeSwatch !== null ? (
            <motion.span
              key={activeSwatch}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.2 }}
              className="text-[11px] uppercase tracking-[0.18em] text-[#666] font-light"
            >
              {swatches[activeSwatch].name} • {swatches[activeSwatch].label}
            </motion.span>
          ) : (
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#bbb] font-light">
              tap any shade to explore
            </span>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default DressCodeSection;
