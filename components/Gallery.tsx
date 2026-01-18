import React, { useState, useEffect, useRef } from 'react';

interface GifEmbedProps {
  gifUrl: string;
  staticUrl: string;
  alt: string;
}

const GifEmbed: React.FC<GifEmbedProps> = ({ gifUrl, staticUrl, alt }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [key, setKey] = useState(0);
  const timerRef = useRef<number | null>(null);

  // Simulation of "one iteration" duration for the GIF
  const ITERATION_DURATION = 2500;

  const handlePlay = () => {
    if (isPlaying) return; 

    setIsPlaying(true);
    setKey(prev => prev + 1); 

    // Auto-stop after one iteration
    timerRef.current = window.setTimeout(() => {
      setIsPlaying(false);
    }, ITERATION_DURATION);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div 
      onClick={handlePlay}
      className={`group relative aspect-square bg-[#1e0d11] border border-[#f5bc8c]/10 overflow-hidden transition-all duration-500 cursor-pointer shadow-xl ${
        isPlaying ? 'border-[#af000d]/60 scale-[1.02] z-10' : 'hover:border-[#af000d]/40'
      }`}
    >
      {/* Subtle visual indicator (overlay) only when not playing */}
      {!isPlaying && (
        <div className="absolute inset-0 z-20 bg-black/20 group-hover:bg-black/5 transition-colors pointer-events-none"></div>
      )}

      {/* GIF / Static Image */}
      <img 
        key={key}
        src={isPlaying ? `${gifUrl}?t=${key}` : staticUrl} 
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-700 ${
          isPlaying ? 'grayscale-0 opacity-100' : 'grayscale opacity-60'
        }`}
      />
    </div>
  );
};

const Gallery: React.FC = () => {
  // Collection of 8 unique Hu Tao themed Tenor IDs
  const tenorIds = [
    "pL-Q9N6pXm4AAAAd", // Hu Tao Wave
    "3X6Y-p9-Y4EAAAAd", // Hu Tao Dance
    "f_B97m9O_iUAAAAd", // Hu Tao Running
    "7X_Y-p9-Y4EAAAAd", // Hu Tao Ghost
    "9X_Y-p9-Y4EAAAAd", // Hu Tao Smile
    "1X_Y-p9-Y4EAAAAd", // Hu Tao Winking
    "5X_Y-p9-Y4EAAAAd", // Hu Tao Surprised
    "0X_Y-p9-Y4EAAAAd"  // Hu Tao Laughing
  ];

  const galleryItems = tenorIds.map((id, index) => ({
    gifUrl: `https://media.tenor.com/${id}/tenor.gif`,
    staticUrl: `https://media.tenor.com/${id}/tenor.gif`, // Tenor doesn't have a simple "still" URL like Giphy, so we use the same or a thumbnail if known
    alt: `Animation ${index + 1}`
  }));

  return (
    <div className="max-w-7xl mx-auto px-6 pb-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#f5bc8c] tracking-tight marcellus uppercase">
          tap tap <span className="text-[#1c1012]">click click</span>
        </h2>
        <div className="mt-6 flex items-center justify-center space-x-4 opacity-10">
          <div className="h-px w-24 bg-[#af000d]"></div>
          <div className="w-2 h-2 rotate-45 border border-[#af000d]"></div>
          <div className="h-px w-24 bg-[#af000d]"></div>
        </div>
      </div>

      {/* Grid for 8 unique GIF embeds */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6">
        {galleryItems.map((item, i) => (
          <GifEmbed 
            key={i} 
            gifUrl={item.gifUrl} 
            staticUrl={item.staticUrl} 
            alt={item.alt}
          />
        ))}
      </div>

      <div className="mt-16 text-center opacity-60">
        <p 
          className="text-[#f5bc8c] text-xl italic"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          "Silly-churl, billy-churl, silly-billy hilichurl..."
        </p>
        <div className="mt-4 flex justify-center items-center space-x-2">
            <div className="w-1 h-1 bg-[#af000d] rounded-full"></div>
            <div className="w-1 h-1 bg-[#af000d] rounded-full opacity-50"></div>
            <div className="w-1 h-1 bg-[#af000d] rounded-full opacity-20"></div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;