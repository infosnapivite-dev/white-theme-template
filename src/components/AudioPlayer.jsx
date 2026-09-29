import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const intervalRef = useRef(null);

  // Synthesize an ultra-soothing, warm ambient acoustic piano chord progression in C major / A minor
  const playRomanticChord = () => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const chords = [
      [261.63, 329.63, 392.00, 523.25], // C Major: C4, E4, G4, C5
      [220.00, 261.63, 329.63, 440.00], // A Minor: A3, C4, E4, A4
      [174.61, 220.00, 261.63, 349.23], // F Major: F3, A3, C4, F4
      [196.00, 246.94, 293.66, 392.00], // G Major: G3, B3, D4, G4
    ];

    const currentChordIndex = Math.floor(Math.random() * chords.length);
    const frequencies = chords[currentChordIndex];

    frequencies.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Soft triangle + sine wave for acoustic electric piano / rhodes feel
      osc.type = i % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Gentle envelope with slow attack and graceful decay
      const now = ctx.currentTime + i * 0.15;
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.04, now + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 4.5);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 4.6);
    });
  };

  const toggleMusic = () => {
    if (!isPlaying) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      playRomanticChord();
      intervalRef.current = setInterval(playRomanticChord, 4500);
      setIsPlaying(true);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close();
    };
  }, []);

  return (
    <button
      onClick={toggleMusic}
      title={isPlaying ? 'Mute ambient sound' : 'Play ambient romantic soundtrack'}
      className={`fixed bottom-6 right-6 z-40 p-3 rounded-full shadow-lg border backdrop-blur-md transition-all duration-300 flex items-center justify-center cursor-pointer ${
        isPlaying
          ? 'bg-neutral-900 text-white border-neutral-700 ring-2 ring-neutral-400/30'
          : 'bg-white/80 text-neutral-700 border-neutral-200 hover:bg-white'
      }`}
    >
      {isPlaying ? (
        <div className="flex items-center gap-1.5 px-0.5">
          <Volume2 size={16} className="animate-pulse" />
          <div className="flex items-end gap-[2px] h-3">
            <span className="w-[2px] h-3 bg-white animate-bounce" style={{ animationDuration: '0.6s' }}></span>
            <span className="w-[2px] h-2 bg-white animate-bounce" style={{ animationDuration: '0.8s', animationDelay: '0.2s' }}></span>
            <span className="w-[2px] h-3 bg-white animate-bounce" style={{ animationDuration: '0.5s', animationDelay: '0.4s' }}></span>
          </div>
        </div>
      ) : (
        <VolumeX size={16} />
      )}
    </button>
  );
};

export default AudioPlayer;
