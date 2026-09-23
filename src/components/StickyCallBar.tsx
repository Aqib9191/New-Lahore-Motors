import React, { useState, useEffect } from 'react';
import { Phone, ChevronUp } from 'lucide-react';
import { DEALERSHIP_INFO } from '../data/vehicles';

export const StickyCallBar: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Fixed Bottom CTA Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E5EAF0] px-4 py-2.5 shadow-lg">
        <a
          href={DEALERSHIP_INFO.phoneTel}
          className="flex items-center justify-between w-full px-5 py-3 bg-[#123B63] hover:bg-[#1D5D8F] text-white font-bold rounded-xl shadow-md active:scale-98 transition-transform"
        >
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-full bg-[#D6A84F] text-[#123B63]">
              <Phone className="w-4 h-4 fill-current" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold leading-tight">CALL NEW LAHORE MOTORS</div>
              <div className="text-xs text-slate-300 font-normal">{DEALERSHIP_INFO.phoneDisplay}</div>
            </div>
          </div>
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#D6A84F] bg-white/10 px-2.5 py-1 rounded">
            CALL NOW
          </span>
        </a>
      </div>

      {/* Desktop Floating Phone CTA & Back to Top */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2.5 bg-white hover:bg-[#F7F9FC] text-[#667085] hover:text-[#17202A] rounded-full border border-[#E5EAF0] shadow-md transition-all cursor-pointer"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        )}

        <a
          href={DEALERSHIP_INFO.phoneTel}
          className="group flex items-center gap-3 p-3 bg-[#123B63] hover:bg-[#1D5D8F] text-white rounded-full shadow-xl transition-all duration-300 hover:pr-5 active:scale-95"
          aria-label="Direct phone call to New Lahore Motors"
        >
          <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-[#D6A84F]">
            <Phone className="w-5 h-5" />
          </div>
          <div className="hidden group-hover:block pr-1">
            <div className="text-[10px] uppercase font-bold tracking-wider text-[#D6A84F]">
              Call New Lahore Motors
            </div>
            <div className="text-xs font-bold whitespace-nowrap">
              {DEALERSHIP_INFO.phoneDisplay}
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
