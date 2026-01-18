import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-64 pb-32 px-6 overflow-hidden min-h-screen flex items-center justify-center">
      {/* Dynamic Background Glows using the palette */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#af000d]/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#c64d3b]/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        {/* Continuous Video Placeholder Container */}
        <div className="relative w-full aspect-[21/9] border-2 border-[#af000d] bg-[#1e0d11] overflow-hidden shadow-[0_0_50px_rgba(175,0,13,0.2)] flex items-center justify-center">
          
          {/* Looping Atmospheric Video from User Link */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source 
              src="/attached_assets/GlKJAGLPwEpdHVpE_1768772949095.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>

          {/* Cinematic Overlay - Surprise! */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            {/* Soft vignette to focus on the center character */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(30,13,17,0.4)_100%)]"></div>
            
            {/* Subtle CRT-style scanlines for a technical/mystical feel */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(245,188,140,0.1)_50%,transparent_50%)] bg-[length:100%_4px]"></div>
            
            {/* Floating particles/dust effect (simulated with a soft gradient) */}
            <div className="absolute inset-0 opacity-[0.1] mix-blend-screen bg-[radial-gradient(rgba(245,188,140,0.2)_1px,transparent_1px)] bg-[length:40px_40px]"></div>
            
            {/* Red accent glow in the corners to match the border */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(175,0,13,0.15),transparent_40%),radial-gradient(circle_at_100%_100%,rgba(175,0,13,0.15),transparent_40%)]"></div>
          </div>

          {/* Decorative Corner Accents - Higher Z-index to stay on top */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#af000d] z-20"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#af000d] z-20"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#af000d] z-20"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#af000d] z-20"></div>
        </div>
        
        {/* Eye-catching Quote Area */}
        <div className="mt-8 relative py-16 px-8 sm:px-12 lg:px-16 bg-[#020202]/50 backdrop-blur-md shadow-2xl overflow-hidden group border border-[#f5bc8c]/5">
          {/* Subtle grid background for the quote area */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          
          <div className="relative z-10 text-left">
             <blockquote className="max-w-4xl">
                <h3 
                  className="text-[#f5bc8c] text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-snug"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Yoh, now why might you be looking for me, hm?
                </h3>
             </blockquote>
             
             <div className="mt-8 flex items-center justify-start space-x-4 opacity-30">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#f5bc8c]"></div>
                <div 
                  className="text-[#f5bc8c] text-xl italic tracking-widest"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Hehe~
                </div>
                <div className="h-px w-48 bg-gradient-to-l from-transparent to-[#f5bc8c]"></div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;