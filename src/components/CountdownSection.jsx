import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const CountdownSection = () => {
  // Target date: October 26, 2025, 15:00:00 CET
  const targetDate = new Date('2025-10-26T15:00:00').getTime();

  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    let difference = targetDate - now;

    // For preview aesthetic or dynamic counting
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

  const [timeLeft, setTimeLeft] = useState(calculateTimeRemaining);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-20 sm:py-24 px-6 min-h-[320px] bg-white flex flex-col items-center justify-center text-center gpu-layer">
      {/* Introductory text */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-[#6c6c6c] text-[13.5px] sm:text-[14.5px] font-light tracking-[0.1em] mb-7 select-none leading-relaxed"
      >
        very little
        <br />
        time left
      </motion.p>

      {/* Large Serif Countdown Display: 90:14:49:11 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[340px] mx-auto select-none"
      >
        {/* Numbers Row */}
        <div className="flex items-center justify-between font-serif-luxury text-[#1c1c1c] text-[42px] sm:text-[48px] font-light leading-none tracking-tight">
          <div className="w-[62px] text-center">{timeLeft.days}</div>
          <span className="text-[#999] -mt-1 font-serif-luxury font-light text-[36px]">:</span>
          <div className="w-[62px] text-center">{timeLeft.hours}</div>
          <span className="text-[#999] -mt-1 font-serif-luxury font-light text-[36px]">:</span>
          <div className="w-[62px] text-center">{timeLeft.minutes}</div>
          <span className="text-[#999] -mt-1 font-serif-luxury font-light text-[36px]">:</span>
          <div className="w-[62px] text-center">{timeLeft.seconds}</div>
        </div>

        {/* Labels Row */}
        <div className="flex items-center justify-between text-[#888] font-sans-clean text-[10px] sm:text-[10.5px] tracking-[0.1em] mt-3 px-1 font-light">
          <div className="w-[62px] text-center">Days</div>
          <div className="w-[10px]"></div>
          <div className="w-[62px] text-center">Hours</div>
          <div className="w-[10px]"></div>
          <div className="w-[62px] text-center">Minutes</div>
          <div className="w-[10px]"></div>
          <div className="w-[62px] text-center">Seconds</div>
        </div>
      </motion.div>
    </section>
  );
};

export default CountdownSection;
