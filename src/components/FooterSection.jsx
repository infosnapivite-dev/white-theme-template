import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

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

  return (
    <footer className="relative w-full pt-8 pb-16 px-6 bg-white flex flex-col items-center justify-center text-center gpu-layer">
      {/* Calendar Export Button */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[240px] mb-10"
      >
        <button
          onClick={downloadICS}
          className="w-full py-3 px-5 bg-neutral-50 text-neutral-800 text-[11.5px] uppercase tracking-[0.14em] font-light text-center transition-all duration-300 hover:bg-neutral-100 active:scale-[0.98] border border-neutral-200 rounded-[1px] cursor-pointer flex items-center justify-center gap-2"
        >
          <Calendar size={13} />
          <span>Add to Calendar</span>
        </button>
      </motion.div>

      {/* Monogram & Couple Signoff */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-2 select-none"
      >
        <p
          className="font-script-latin text-[#1c1c1c] text-[34px] sm:text-[38px] leading-tight"
          style={{ fontFamily: "'Alex Brush', cursive" }}
        >
          Martin & Alena
        </p>
        <p className="text-[10.5px] uppercase tracking-[0.25em] text-[#999] font-light">
          26 • 10 • 2025
        </p>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
