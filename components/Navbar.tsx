import React, { useState, useRef, useEffect } from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const socialLinks = [
    {
      label: '@bottomdragging',
      icon: 'fa-brands fa-x-twitter',
      url: 'https://x.com/bottomdragging',
      clickable: true,
    },
    {
      label: '@bottomdrag',
      icon: 'fa-brands fa-discord',
      url: '#',
      clickable: false,
    },
    {
      label: '@bottomdragg',
      icon: 'fa-brands fa-telegram',
      url: 'https://t.me/bottomdragg',
      clickable: true,
    },
    {
      label: '@bottomdrag',
      icon: 'fas fa-mug-hot',
      url: 'https://ko-fi.com/bottomdrag',
      clickable: true,
    }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="w-full flex items-center justify-between bg-[#1e0d11] px-4 sm:px-12 py-4 sm:py-7 border-b border-[#f5bc8c]/10 shadow-xl">
        <div className="flex items-center space-x-3 sm:space-x-4 cursor-pointer group shrink-0" onClick={() => scrollTo('home')}>
          {/* Square Logo - Responsive Size */}
          <div className="w-12 h-12 sm:w-16 h-16 overflow-hidden bg-transparent">
            <img 
              src="/attached_assets/G1eFOyPaoAIZoHL_1768773066068.png" 
              alt="Logo" 
              className="w-full h-full object-cover opacity-100 group-hover:opacity-90 transition-opacity"
            />
          </div>
          <span className="font-bold text-xl sm:text-3xl tracking-[0.1em] text-[#f5bc8c] marcellus lowercase">
            bottomdrag.
          </span>
        </div>
        
        {/* Decorative Line - Responsive Visibility */}
        <div className="hidden md:block flex-grow mx-8 lg:mx-12 relative">
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#f5bc8c]/20 to-[#af000d]/60"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border-t border-r border-[#af000d]/80"></div>
        </div>

        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={toggleDropdown}
            className={`marcellus text-[10px] sm:text-[12px] tracking-widest bg-[#af000d]/10 border border-[#af000d]/30 text-[#f5bc8c] px-4 py-2 sm:px-8 sm:py-3 hover:bg-[#af000d] hover:text-[#f5bc8c] transition-all uppercase font-bold shrink-0 flex items-center gap-2 ${isDropdownOpen ? 'bg-[#af000d] text-[#f5bc8c]' : ''}`}
          >
            Enter Gate
            <i className={`fas fa-chevron-down text-[8px] sm:text-[10px] transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}></i>
          </button>

          {/* Dropdown Menu - Optimized Width for Mobile */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-3 w-56 sm:w-64 bg-[#1e0d11] border border-[#af000d]/40 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="py-1">
                {socialLinks.map((link, index) => (
                  link.clickable ? (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 sm:space-x-4 px-4 sm:px-6 py-3 sm:py-4 hover:bg-[#af000d]/20 transition-colors group"
                    >
                      <div className="w-7 h-7 sm:w-8 h-8 rounded-full bg-[#f5bc8c] flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg shrink-0">
                        <i className={`${link.icon} text-black text-xs sm:text-sm`}></i>
                      </div>
                      <span className="marcellus text-[13px] sm:text-sm text-[#f5bc8c]/80 group-hover:text-[#f5bc8c] tracking-wider truncate">{link.label}</span>
                    </a>
                  ) : (
                    <div
                      key={index}
                      className="flex items-center space-x-3 sm:space-x-4 px-4 sm:px-6 py-3 sm:py-4 opacity-40 cursor-not-allowed"
                    >
                      <div className="w-7 h-7 sm:w-8 h-8 rounded-full bg-[#f5bc8c] flex items-center justify-center shrink-0">
                        <i className={`${link.icon} text-black text-xs sm:text-sm`}></i>
                      </div>
                      <span className="marcellus text-[13px] sm:text-sm text-[#f5bc8c]/80 tracking-wider truncate">{link.label}</span>
                    </div>
                  )
                ))}
              </div>
              
              {/* Decorative base of dropdown */}
              <div className="h-1 bg-gradient-to-r from-[#af000d]/0 via-[#af000d] to-[#af000d]/0"></div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;