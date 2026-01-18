import React from 'react';
import { DESIGNATIONS } from '../constants';

const Experience: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-20 text-left flex flex-col sm:flex-row items-end justify-between">
        <div className="max-w-3xl">
          <p 
            className="text-[#f5bc8c] text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight leading-relaxed italic"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            By the looks of you... Radiant glow, healthy posture... Yes, you're definitely here for something which falls within my regular line of work, aren't you?
          </p>
          <p 
            className="mt-6 text-[#f5bc8c]/80 text-lg sm:text-xl lg:text-2xl font-light tracking-wide leading-relaxed italic"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Hu specializes in <span className="underline decoration-[#af000d]/60 underline-offset-4">Community Lead</span> roles and <span className="underline decoration-[#af000d]/60 underline-offset-4">Social Growth</span> with excellent communication, usually acting as a bridge between the <span className="underline decoration-[#af000d]/60 underline-offset-4">Project team</span> and the <span className="underline decoration-[#af000d]/60 underline-offset-4">Community</span>.
          </p>
        </div>
        <div className="mt-8 sm:mt-0">
          <div 
            className="text-[10px] text-[#f5bc8c]/40 uppercase tracking-widest border border-[#f5bc8c]/10 px-4 py-2"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            TOTAL PRANKS: 3
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-6">
        {DESIGNATIONS.map((exp) => {
          const hasSkills = exp.skills && exp.skills.length > 0;
          return (
            <div 
              key={exp.id} 
              className="group relative bg-[#1e0d11] border border-[#f5bc8c]/5 hover:border-[#af000d]/40 transition-all duration-500 overflow-hidden"
            >
              {/* Pointy Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#af000d] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#af000d] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#af000d] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#af000d] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Background Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#af000d]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <a 
                href={exp.company.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`relative z-10 flex flex-col md:flex-row items-start ${
                  !hasSkills ? 'px-8 pt-8 pb-5 sm:px-10 sm:pt-10 sm:pb-7' : 'p-8 sm:p-10'
                }`}
                aria-label={`Visit ${exp.company.name}`}
              >
                {/* Content Area - Aligned Left */}
                <div className="flex-grow text-left marcellus">
                  <div className="mb-4">
                    <h4 className="text-[#af000d] text-xs tracking-[0.3em] uppercase font-bold mb-1">{exp.company.name}</h4>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#f5bc8c] group-hover:text-white transition-colors tracking-tight">
                      {exp.title}
                    </h3>
                  </div>
                  
                  <p className="text-[#f5bc8c]/60 text-sm sm:text-base leading-relaxed max-w-3xl group-hover:text-[#f5bc8c]/80 transition-colors">
                    {exp.description}
                  </p>

                  {hasSkills && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {exp.skills.map(skill => (
                        <span key={skill} className="mono text-[8px] px-3 py-1 bg-[#1e0d11] border border-[#f5bc8c]/10 text-[#f5bc8c]/40 uppercase font-bold tracking-widest group-hover:border-[#af000d]/30 group-hover:text-[#f5bc8c]/70 transition-all">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Meta Area */}
                <div className="mt-8 md:mt-0 md:ml-8 flex flex-col items-start md:items-end justify-between self-stretch flex-shrink-0">
                  <div className="mono text-[11px] text-[#f5bc8c]/40 font-bold uppercase tracking-widest bg-[#f5bc8c]/5 px-3 py-1 border border-transparent group-hover:border-[#af000d]/20 transition-all">
                    {exp.period}
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center space-x-2 text-[#af000d] opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                    <span className="mono text-[10px] font-bold tracking-widest uppercase">Visit Project</span>
                    <i className="fas fa-external-link-alt text-[10px]"></i>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
      
      {/* Visual terminal-style footer for the list */}
      <div className="mt-12 flex items-center justify-between opacity-20">
        <div className="h-px bg-gradient-to-r from-transparent to-[#f5bc8c] flex-grow mr-8"></div>
        <div 
          className="text-base sm:text-lg tracking-widest text-[#f5bc8c] italic whitespace-nowrap"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          My hat's gonna get blown away!
        </div>
        <div className="h-px bg-gradient-to-l from-transparent to-[#f5bc8c] flex-grow ml-8"></div>
      </div>
    </div>
  );
};

export default Experience;