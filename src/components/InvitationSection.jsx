import React from 'react';
import { motion } from 'framer-motion';
import DateMotif from './DateMotif';

export const InvitationSection = () => {
  return (
    <section className="relative w-full pt-12 pb-8 px-6 flex flex-col items-center justify-center bg-white text-center gpu-layer">
      {/* Cursive Header: We invite you */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-4"
      >
        <h2
          className="font-script-latin text-[#1c1c1c] text-[48px] sm:text-[54px] leading-tight select-none font-normal"
          style={{ fontFamily: "'Alex Brush', cursive" }}
        >
          We invite you
        </h2>
      </motion.div>

      {/* Delicate Invitation Paragraphs */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[310px] mx-auto text-[#4a4a4a] space-y-4 text-[13.5px] sm:text-[14px] leading-[1.65] font-light tracking-wide"
      >
        <p>
          to share the joy
          <br />
          of this unforgettable day —
          <br />
          our wedding day
        </p>

        <p className="pt-1">
          we warmly invite you to join us
          <br />
          in celebrating our love and grace us
          <br />
          with your presence!
        </p>
      </motion.div>

      {/* Massive Stylized Date Motif (26 10 25) */}
      <div className="w-full my-6">
        <DateMotif />
      </div>
    </section>
  );
};

export default InvitationSection;
