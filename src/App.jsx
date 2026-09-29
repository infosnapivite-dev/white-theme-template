import React, { useEffect } from 'react';
import Lenis from 'lenis';
import HeroSection from './components/HeroSection';
import InvitationSection from './components/InvitationSection';
import TimelineSection from './components/TimelineSection';
import GallerySection from './components/GallerySection';
import CountdownSection from './components/CountdownSection';
import VenueSection from './components/VenueSection';
import DressCodeSection from './components/DressCodeSection';
import FooterSection from './components/FooterSection';
import AudioPlayer from './components/AudioPlayer';

export function App() {
  // Initialize Lenis smooth scroll on the page
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    let animId;
    const raf = (time) => {
      lenis.raf(time);
      animId = requestAnimationFrame(raf);
    };
    animId = requestAnimationFrame(raf);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#f6f4f0] flex justify-center selection:bg-[#222] selection:text-[#fff]">
      {/* Mobile-First Centered Container (native full width on mobile, elegant constrained column on desktop) */}
      <main className="relative w-full max-w-[430px] min-h-screen bg-white shadow-[0_0_50px_rgba(0,0,0,0.06)] flex flex-col">
        {/* 1. Hero Section: Names header, Left cursive text, LOVE typographic lockup, Wedding date */}
        <HeroSection />

        {/* 2. Invitation & Stylized Date Motif (26 10 25) */}
        <InvitationSection />

        {/* 3. Event / Timeline Section: Dark theme vertical timeline with animated nodes */}
        <TimelineSection />

        {/* 4. Gallery Section: Asymmetric B&W Photos + Right margin cursive text */}
        <GallerySection />

        {/* 5. Countdown Section: Live timer & Luxury serif numbers */}
        <CountdownSection />

        {/* 6. Venue Section: Pałac Mała Wieś, Estate architecture photo, Map CTA button */}
        <VenueSection />

        {/* 7. Wardrobe / Dress Code Section: 4 Color Swatches */}
        <DressCodeSection />

        {/* 8. Footer Section: Calendar invite & Couple monogram */}
        <FooterSection />
      </main>

      {/* Floating Romantic Background Music Toggle */}
      <AudioPlayer />
    </div>
  );
}

export default App;
