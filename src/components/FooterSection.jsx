import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Heart } from 'lucide-react';

export const FooterSection = () => {
  const downloadICS = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Martin & Alena Wedding//EN',
      'BEGIN:VEVENT',
      'SUMMARY:Martin & Alena Wedding',
      'DESCRIPTION:Wedding celebration of Martin & Alena at Pałac Mała Wieś, Poland.',
      'LOCATION:Pałac Mała Wieś, Mała Wieś 40, 05-622 Mała Wieś, Poland',
      'DTSTART:20251026T130000Z',
      'DTEND:20251026T220000Z',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Martin_Alena_Wedding_2025.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      className="relative w-full pt-8 pb-16 px-6 bg-white flex flex-col items-center justify-center text-center gpu-layer select-none"
    >
      {/* Calendar Export Button */}
      <motion.div variants={itemVariants} className="w-full max-w-[240px] mb-10">
        <motion.button
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          onClick={downloadICS}
          className="w-full py-3 px-5 bg-neutral-50 text-neutral-800 text-[11.5px] uppercase tracking-[0.14em] font-light text-center transition-all duration-300 hover:bg-neutral-100 hover:shadow-xs border border-neutral-200 rounded-[1px] cursor-pointer flex items-center justify-center gap-2"
        >
          <Calendar size={13} className="text-neutral-600" />
          <span>Add to Calendar</span>
        </motion.button>
      </motion.div>

      {/* Decorative Small Heart Divider */}
      <motion.div
        variants={itemVariants}
        className="flex items-center justify-center gap-3 mb-6 opacity-40"
      >
        <div className="w-8 h-[1px] bg-[#1c1c1c]" />
        <Heart size={10} className="fill-[#1c1c1c] text-[#1c1c1c]" />
        <div className="w-8 h-[1px] bg-[#1c1c1c]" />
      </motion.div>

      {/* Monogram & Couple Signoff */}
      <motion.div variants={itemVariants} className="space-y-2 select-none">
        <motion.p
          variants={itemVariants}
          className="font-script-latin text-[#1c1c1c] text-[36px] sm:text-[40px] leading-tight"
          style={{ fontFamily: "'Alex Brush', cursive" }}
        >
          Martin & Alena
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="text-[10.5px] uppercase tracking-[0.25em] text-[#888] font-light"
        >
          26 • 10 • 2025
        </motion.p>
      </motion.div>
    </motion.footer>
  );
};

export default FooterSection;
