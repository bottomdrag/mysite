import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Gallery from './components/Gallery';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'gallery'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#60242a]">
      <Navbar activeSection={activeSection} />
      
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        
        <section id="experience" className="py-24 border-y border-[#f5bc8c]/5 bg-[#1e0d11]">
          <Experience />
        </section>

        <section id="gallery" className="pt-24 pb-12 bg-[#60242a]">
          <Gallery />
        </section>
      </main>
    </div>
  );
};

export default App;