import React from 'react';
import { motion } from 'framer-motion';

export const VenueSection = () => {
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Pa%C5%82ac+Ma%C5%82a+Wie%C5%9B+Poland';

  return (
    <section className="relative w-full py-10 px-6 bg-white flex flex-col items-center justify-center text-center gpu-layer">
      {/* Cursive Header: Venue */}
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
          Venue
        </h2>
      </motion.div>

      {/* Address & Guest Arrival Info */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="text-[#4a4a4a] text-[13.5px] sm:text-[14px] leading-relaxed font-light mb-6 space-y-1 max-w-[300px]"
      >
        <p className="font-medium text-[#1c1c1c]">Pałac Mała Wieś</p>
        <p>Mała Wieś 40, 05-622 Mała Wieś, Poland</p>
        <p className="text-[#666] pt-1">guest arrival at 15:00</p>
      </motion.div>

      {/* Architectural Palace Photo with Matching Mat Frame */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[340px] border border-[#1c1c1c] bg-[#faf8f5] p-[6px] shadow-xs mb-6"
      >
        <div className="w-full aspect-square overflow-hidden bg-[#eee]">
          <img
            src="/images/palace_venue.jpg"
            alt="Pałac Mała Wieś estate"
            className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            draggable="false"
          />
        </div>
      </motion.div>

      {/* Solid Dark Button: Direction */}
      <motion.a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[200px] py-3.5 px-6 bg-[#1a1a1a] text-white text-[12.5px] uppercase tracking-[0.16em] font-light text-center transition-all duration-300 hover:bg-[#333] active:scale-[0.98] shadow-sm rounded-[1px] block select-none"
      >
        Direction
      </motion.a>
    </section>
  );
};

export default VenueSection;
