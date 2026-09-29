import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export const VenueSection = () => {
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Pa%C5%82ac+Ma%C5%82a+Wie%C5%9B+Poland';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 25 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="relative w-full py-12 px-6 bg-white flex flex-col items-center justify-center text-center gpu-layer select-none"
    >
      {/* Cursive Header: Venue */}
      <motion.div variants={itemVariants} className="mb-3">
        <h2
          className="font-script-latin text-[#1c1c1c] text-[48px] sm:text-[54px] font-normal leading-tight select-none"
          style={{ fontFamily: "'Alex Brush', cursive" }}
        >
          Venue
        </h2>
      </motion.div>

      {/* Address & Guest Arrival Info */}
      <motion.div
        variants={itemVariants}
        className="text-[#4a4a4a] text-[13.5px] sm:text-[14px] leading-relaxed font-light mb-6 space-y-1 max-w-[300px]"
      >
        <motion.p variants={itemVariants} className="font-medium text-[#1c1c1c]">
          Pałac Mała Wieś
        </motion.p>
        <motion.p variants={itemVariants}>
          Mała Wieś 40, 05-622 Mała Wieś, Poland
        </motion.p>
        <motion.p variants={itemVariants} className="text-[#666] pt-1 text-[12.5px] tracking-wide">
          guest arrival at 15:00
        </motion.p>
      </motion.div>

      {/* Architectural Palace Photo with Matching Mat Frame */}
      <motion.div
        variants={imageVariants}
        whileHover={{ y: -4, transition: { duration: 0.3 } }}
        className="w-full max-w-[340px] border border-[#1c1c1c] bg-[#faf8f5] p-[6px] shadow-xs mb-6"
      >
        <div className="w-full aspect-square overflow-hidden bg-[#eee]">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            src="/images/palace_venue.jpg"
            alt="Pałac Mała Wieś estate"
            className="w-full h-full object-cover object-center"
            draggable="false"
          />
        </div>
      </motion.div>

      {/* Solid Dark Button: Direction */}
      <motion.a
        variants={itemVariants}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-[200px] py-3.5 px-6 bg-[#1a1a1a] text-white text-[12.5px] uppercase tracking-[0.16em] font-light text-center transition-all duration-300 hover:bg-[#333] shadow-sm rounded-[1px] flex items-center justify-center gap-2 select-none"
      >
        <MapPin size={13} className="text-neutral-300" />
        <span>Direction</span>
      </motion.a>
    </motion.section>
  );
};

export default VenueSection;
