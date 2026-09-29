import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, MapPin, Sparkles, ArrowRight } from 'lucide-react';

const timelineEvents = [
  {
    id: 1,
    title: "Mehendi Ceremony",
    time: "10:00",
    location: "Rose Garden Courtyard",
    description: "A lively kickoff celebration featuring traditional henna artistry, soothing acoustic music, herbal teas, and morning pastries in the estate gardens.",
    attire: "Pastel & Floral Chic",
  },
  {
    id: 2,
    title: "Haldi (Yellow Paradise)",
    time: "12:00",
    location: "Manor Front Lawn",
    description: "An auspicious ceremony of turmeric, floral showers, cheerful music, and joyful blessings beneath the afternoon sun.",
    attire: "Warm Yellows & Ochre",
  },
  {
    id: 3,
    title: "Sangeet (The Musical)",
    time: "19:00",
    location: "Palace Grand Ballroom",
    description: "An enchanting evening of choreographed family performances, live jazz & classical melodies, artisan cocktails, and celebratory toasts.",
    attire: "Evening Glamour / Festive Formal",
  },
  {
    id: 4,
    title: "Wedding Ceremony",
    time: "16:00",
    location: "Neoclassical Portico",
    description: "The sacred union and exchange of vows between Martin & Alena surrounded by centuries-old oaks and timeless neoclassical columns.",
    attire: "Black Tie / Elegant Formal",
  },
  {
    id: 5,
    title: "Reception",
    time: "19:30",
    location: "Estate Glasshouse Pavilion",
    description: "A candlelit gala dinner, cake cutting, heartfelt speeches, champagne toasts, and dancing late into the night beneath the stars.",
    attire: "Black Tie / Evening Cocktail",
  },
];

export const TimelineSection = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Section header variants
  const headerVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // Container animation variants for items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.25,
      },
    },
  };

  // Node item animation variants
  const itemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative w-full py-24 sm:py-28 px-7 min-h-[680px] flex flex-col justify-center bg-[#141415] text-white select-none overflow-hidden">
      {/* Section Header: EVENTS */}
      <motion.div
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="flex flex-col items-center justify-center mb-16"
      >
        <motion.h2
          className="font-serif-luxury text-[18px] sm:text-[20px] tracking-[0.3em] text-white uppercase font-light text-center"
        >
          EVENTS
        </motion.h2>
        
        {/* Subtle Accent Underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-10 h-[1px] bg-neutral-400 mt-3 origin-center"
        />

        <motion.span
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-[10.5px] uppercase tracking-[0.2em] text-neutral-400 font-light mt-2"
        >
          tap any event for details
        </motion.span>
      </motion.div>

      {/* Timeline Interactive Track & Nodes */}
      <div className="relative w-full max-w-[340px] mx-auto py-2">
        {/* Continuous Vertical Timeline Track Line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-[5px] top-[10px] bottom-[10px] w-[1px] bg-neutral-700/80 origin-top"
        />

        {/* Staggered Event Items Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="flex flex-col space-y-14 sm:space-y-16"
        >
          {timelineEvents.map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedEvent(event)}
              className="relative flex items-center justify-between pl-8 pr-1 group cursor-pointer"
            >
              {/* Hollow Circular Node Intersecting Track */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-[12px] h-[12px] rounded-full border-[1.5px] border-white/90 bg-[#141415] transition-all duration-300 group-hover:scale-130 group-hover:border-white group-hover:bg-white"
                />
              </div>

              {/* Event Title (Left Column) */}
              <div className="text-left flex-1 pr-3 flex items-center gap-1.5">
                <span className="font-sans-clean text-[14px] sm:text-[15px] text-neutral-200 font-light tracking-wide block transition-colors group-hover:text-white">
                  {event.title}
                </span>
                <ArrowRight size={12} className="text-neutral-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>

              {/* Event Time (Right-Aligned Column) */}
              <div className="text-right shrink-0">
                <span className="font-serif-luxury text-[14px] sm:text-[15px] text-neutral-400 font-light tracking-wider block group-hover:text-neutral-200 transition-colors">
                  {event.time}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Minimal Event Details Popup Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-black/75 backdrop-blur-xs">
            {/* Backdrop Dismiss */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="absolute inset-0"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[340px] bg-[#1a1a1c] border border-neutral-700/70 p-6 rounded-[2px] shadow-2xl z-10 text-left"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 p-1.5 text-neutral-400 hover:text-white transition-colors rounded-full hover:bg-neutral-800 cursor-pointer"
              >
                <X size={16} />
              </motion.button>

              {/* Time & Location Badge */}
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-neutral-400 mb-3 font-light"
              >
                <span className="flex items-center gap-1 text-white">
                  <Clock size={12} className="text-neutral-300" />
                  {selectedEvent.time}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin size={12} className="text-neutral-300" />
                  {selectedEvent.location}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="font-serif-luxury text-[22px] sm:text-[24px] text-white font-light tracking-wide leading-tight mb-3"
              >
                {selectedEvent.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[13px] sm:text-[13.5px] text-neutral-300 font-light leading-relaxed mb-5"
              >
                {selectedEvent.description}
              </motion.p>

              {/* Recommended Attire Note */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="pt-3.5 border-t border-neutral-800/80 flex items-start gap-2"
              >
                <Sparkles size={13} className="text-neutral-400 mt-0.5 shrink-0" />
                <div className="text-[11.5px] font-light text-neutral-400">
                  <span className="text-neutral-200">Recommended Attire:</span> {selectedEvent.attire}
                </div>
              </motion.div>

              {/* Close Action */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedEvent(null)}
                className="mt-6 w-full py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white text-[11.5px] uppercase tracking-[0.18em] font-light transition-all rounded-[1px] cursor-pointer"
              >
                Close
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TimelineSection;
