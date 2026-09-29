import React from 'react';
import { motion } from 'framer-motion';
import DateMotif from './DateMotif';

export const InvitationSection = () => {
  // Stagger container for section contents
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

  const itemFadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="relative w-full pt-14 pb-8 px-6 flex flex-col items-center justify-center bg-white text-center gpu-layer select-none"
    >
      {/* Decorative Top Flourish Dot */}
      <motion.div
        variants={itemFadeUp}
        className="w-1.5 h-1.5 rounded-full bg-[#1c1c1c]/40 mb-3"
      />

      {/* Cursive Header: We invite you */}
      <motion.div variants={itemFadeUp} className="mb-4">
        <h2
          className="font-script-latin text-[#1c1c1c] text-[48px] sm:text-[54px] leading-tight select-none font-normal"
          style={{ fontFamily: "'Alex Brush', cursive" }}
        >
          We invite you
        </h2>
      </motion.div>

      {/* Delicate Invitation Paragraphs with line-by-line staggered reveal */}
      <motion.div
        variants={itemFadeUp}
        className="max-w-[320px] mx-auto text-[#4a4a4a] space-y-4 text-[13.5px] sm:text-[14px] leading-[1.7] font-light tracking-wide"
      >
        <motion.p variants={lineVariants}>
          to share the joy
          <br />
          of this unforgettable day —
          <br />
          <span className="text-[#1c1c1c] font-normal">our wedding day</span>
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-8 h-[1px] bg-[#1c1c1c]/15 mx-auto my-3 origin-center"
        />

        <motion.p variants={lineVariants} className="pt-0.5">
          we warmly invite you to join us
          <br />
          in celebrating our love and grace us
          <br />
          with your presence!
        </motion.p>
      </motion.div>

      {/* Massive Stylized Date Motif (26 10 25) */}
      <motion.div variants={itemFadeUp} className="w-full my-6">
        <DateMotif />
      </motion.div>
    </motion.section>
  );
};

export default InvitationSection;
