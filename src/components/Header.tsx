import React, { useState } from 'react';
import { Phone, Menu, X, MapPin } from 'lucide-react';
import { DEALERSHIP_INFO } from '../data/vehicles';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5EAF0] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="text-xl sm:text-2xl font-bold tracking-tight text-[#123B63] font-display hover:text-[#1D5D8F] transition-colors whitespace-nowrap"
          >
            NEW LAHORE MOTORS
          </a>

          {/* Zone 2: 4–6 nav links, 1–2 word labels */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-[#17202A]">
            <button
              onClick={() => handleNavClick('home')}
              className="hover:text-[#1D5D8F] transition-colors cursor-pointer py-1"
            >
              HOME
            </button>
            <button
              onClick={() => handleNavClick('cars')}
              className="hover:text-[#1D5D8F] transition-colors cursor-pointer py-1"
            >
              CARS
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="hover:text-[#1D5D8F] transition-colors cursor-pointer py-1"
            >
              ABOUT
            </button>
            <button
              onClick={() => handleNavClick('why-us')}
              className="hover:text-[#1D5D8F] transition-colors cursor-pointer py-1"
            >
              WHY US
            </button>
            <button
              onClick={() => handleNavClick('location')}
              className="hover:text-[#1D5D8F] transition-colors cursor-pointer py-1"
            >
              LOCATION
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="hover:text-[#1D5D8F] transition-colors cursor-pointer py-1"
            >
              CONTACT
            </button>
          </nav>

          {/* Zone 3: Primary Action (CALL NOW) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={DEALERSHIP_INFO.phoneTel}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-[#123B63] hover:bg-[#1D5D8F] text-white text-sm font-bold tracking-wide rounded-md shadow-sm transition-all transform active:scale-95 whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-[#D6A84F]" />
              <span>CALL NOW: {DEALERSHIP_INFO.phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={DEALERSHIP_INFO.phoneTel}
              aria-label="Call New Lahore Motors"
              className="p-2.5 bg-[#123B63] text-white rounded-md active:bg-[#1D5D8F]"
            >
              <Phone className="w-4 h-4 text-[#D6A84F]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2.5 text-[#17202A] hover:bg-[#F7F9FC] rounded-md transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E5EAF0] bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 font-semibold text-base text-[#17202A]">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left py-2 px-3 rounded hover:bg-[#F7F9FC] transition-colors"
            >
              HOME
            </button>
            <button
              onClick={() => handleNavClick('cars')}
              className="text-left py-2 px-3 rounded hover:bg-[#F7F9FC] transition-colors"
            >
              CARS
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-left py-2 px-3 rounded hover:bg-[#F7F9FC] transition-colors"
            >
              ABOUT
            </button>
            <button
              onClick={() => handleNavClick('why-us')}
              className="text-left py-2 px-3 rounded hover:bg-[#F7F9FC] transition-colors"
            >
              WHY US
            </button>
            <button
              onClick={() => handleNavClick('location')}
              className="text-left py-2 px-3 rounded hover:bg-[#F7F9FC] transition-colors"
            >
              LOCATION
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-left py-2 px-3 rounded hover:bg-[#F7F9FC] transition-colors"
            >
              CONTACT
            </button>
          </div>

          <div className="mt-5 pt-4 border-t border-[#E5EAF0] flex flex-col gap-2.5">
            <a
              href={DEALERSHIP_INFO.phoneTel}
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#123B63] text-white font-bold rounded-md shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#D6A84F]" />
              <span>CALL NOW: {DEALERSHIP_INFO.phoneDisplay}</span>
            </a>
            <a
              href={DEALERSHIP_INFO.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 border border-[#E5EAF0] text-sm font-semibold text-[#17202A] rounded-md hover:bg-[#F7F9FC]"
            >
              <MapPin className="w-4 h-4 text-[#1D5D8F]" />
              <span>Get Directions to Jail Road</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
