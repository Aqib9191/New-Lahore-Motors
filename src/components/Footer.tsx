import React from 'react';
import { Phone, MapPin, ExternalLink, ShieldAlert } from 'lucide-react';
import { DEALERSHIP_INFO } from '../data/vehicles';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white border-t border-[#E5EAF0] pb-24 md:pb-12 pt-14 text-sm text-[#17202A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#E5EAF0]">
          {/* Brand & Address Column */}
          <div className="md:col-span-5 space-y-4">
            <h2 className="text-xl font-extrabold text-[#123B63] tracking-tight font-display">
              NEW LAHORE MOTORS
            </h2>
            <p className="text-xs font-semibold text-[#1D5D8F] uppercase tracking-wider">
              Car Dealership in Lahore
            </p>
            <p className="text-xs sm:text-sm text-[#667085] leading-relaxed max-w-sm">
              Jail Rd, Mozang Chungi,
              <br />
              Lahore, 54000, Pakistan
            </p>

            <div className="pt-1 flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4 text-[#123B63]" />
              <a
                href={DEALERSHIP_INFO.phoneTel}
                className="font-bold text-[#123B63] hover:text-[#1D5D8F] transition-colors"
              >
                {DEALERSHIP_INFO.phoneDisplay}
              </a>
              <span className="text-xs text-[#667085]">(Call Only)</span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#123B63]">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#667085]">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#123B63] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('cars')}
                  className="hover:text-[#123B63] transition-colors cursor-pointer"
                >
                  Cars & Reference Prices
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#123B63] transition-colors cursor-pointer"
                >
                  About New Lahore Motors
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('why-us')}
                  className="hover:text-[#123B63] transition-colors cursor-pointer"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('location')}
                  className="hover:text-[#123B63] transition-colors cursor-pointer"
                >
                  Showroom Location
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#123B63] transition-colors cursor-pointer"
                >
                  Contact Dealership
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Call Action Column */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#123B63]">
              Showroom Inquiries
            </h3>
            <p className="text-xs text-[#667085] leading-relaxed">
              Connect directly with our showroom team on Jail Road for vehicle availability, market specifications, and visiting hours.
            </p>

            <a
              href={DEALERSHIP_INFO.phoneTel}
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#123B63] hover:bg-[#1D5D8F] text-white text-xs font-bold rounded-lg shadow-sm transition-transform active:scale-95"
            >
              <Phone className="w-4 h-4 text-[#D6A84F]" />
              <span>CALL NOW: {DEALERSHIP_INFO.phoneDisplay}</span>
            </a>

            <div className="pt-1">
              <a
                href={DEALERSHIP_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D5D8F] hover:underline"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal & Disclaimer Row */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#667085]">
          <p>© 2026 New Lahore Motors. All rights reserved.</p>
          <p className="max-w-xl text-[11px] leading-relaxed text-[#667085]">
            Disclaimer: Vehicle prices displayed are official manufacturer reference prices and may change. Actual dealership inventory, model year, condition, and selling prices should be verified by telephone.
          </p>
        </div>
      </div>
    </footer>
  );
};
