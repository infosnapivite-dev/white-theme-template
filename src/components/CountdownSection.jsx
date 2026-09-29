import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

// Target date: October 26, 2025, 15:00:00 CET
const TARGET_DATE = new Date('2025-10-26T15:00:00').getTime();

const calculateTimeRemaining = () => {
  const now = new Date().getTime();
  const difference = TARGET_DATE - now;

  if (difference <= 0) {
    return {
      days: '90',
      hours: '14',
      minutes: '49',
      seconds: '11',
    };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return {
    days: String(days).padStart(2, '0'),
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0'),
  };
};

export const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeRemaining);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#1c1c1c', '#e5d5c0', '#978572', '#ffffff'],
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
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

  const digitVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
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
      className="relative w-full py-20 sm:py-24 px-6 min-h-[320px] bg-white flex flex-col items-center justify-center text-center select-none"
    >
      {/* Introductory text */}
      <motion.p
        variants={itemVariants}
        className="text-[#6c6c6c] text-[13.5px] sm:text-[14.5px] font-light tracking-[0.1em] mb-7 select-none leading-relaxed"
      >
        very little
        <br />
        time left
      </motion.p>

      {/* Large Serif Countdown Display: 90:14:49:11 */}
      <motion.div
        variants={itemVariants}
        onClick={triggerConfetti}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full max-w-[340px] mx-auto select-none cursor-pointer group"
        title="Tap for celebration confetti!"
      >
        {/* Numbers Row */}
        <div className="flex items-center justify-between font-serif-luxury text-[#1c1c1c] text-[42px] sm:text-[48px] font-light leading-none tracking-tight">
          {/* Days */}
          <motion.div variants={digitVariants} className="w-[62px] h-[52px] flex items-center justify-center text-center overflow-hidden">
            <span className="block">{timeLeft.days}</span>
          </motion.div>

          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="text-[#999] -mt-1 font-serif-luxury font-light text-[36px]"
          >
            :
          </motion.span>

          {/* Hours */}
          <motion.div variants={digitVariants} className="w-[62px] h-[52px] flex items-center justify-center text-center overflow-hidden">
            <span className="block">{timeLeft.hours}</span>
          </motion.div>

          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            className="text-[#999] -mt-1 font-serif-luxury font-light text-[36px]"
          >
            :
          </motion.span>

          {/* Minutes */}
          <motion.div variants={digitVariants} className="w-[62px] h-[52px] flex items-center justify-center text-center overflow-hidden">
            <span className="block">{timeLeft.minutes}</span>
          </motion.div>

          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="text-[#999] -mt-1 font-serif-luxury font-light text-[36px]"
          >
            :
          </motion.span>

          {/* Seconds */}
          <motion.div variants={digitVariants} className="w-[62px] h-[52px] flex items-center justify-center text-center overflow-hidden">
            <span className="block text-[#1c1c1c]">{timeLeft.seconds}</span>
          </motion.div>
        </div>

        {/* Labels Row */}
        <div className="flex items-center justify-between text-[#888] font-sans-clean text-[10px] sm:text-[10.5px] tracking-[0.1em] mt-3 px-1 font-light">
          <motion.div variants={itemVariants} className="w-[62px] text-center">Days</motion.div>
          <div className="w-[10px]"></div>
          <motion.div variants={itemVariants} className="w-[62px] text-center">Hours</motion.div>
          <div className="w-[10px]"></div>
          <motion.div variants={itemVariants} className="w-[62px] text-center">Minutes</motion.div>
          <div className="w-[10px]"></div>
          <motion.div variants={itemVariants} className="w-[62px] text-center">Seconds</motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default CountdownSection;
