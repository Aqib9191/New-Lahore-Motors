import React from 'react';
import { Phone, ArrowRight, MapPin, Star, Building2 } from 'lucide-react';
import { DEALERSHIP_INFO } from '../data/vehicles';

interface HeroProps {
  onExploreCars: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCars }) => {
  return (
    <section id="home" className="relative bg-white pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-[#E5EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#1D5D8F]">
              <span className="w-2 h-2 rounded-full bg-[#D6A84F]" />
              <span>NEW LAHORE MOTORS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#17202A] leading-[1.1] text-balance font-display">
              FIND THE RIGHT CAR <br />
              <span className="text-[#123B63]">FOR YOUR NEXT JOURNEY</span>
            </h1>

            <p className="text-base sm:text-lg text-[#667085] max-w-xl leading-relaxed">
              Explore quality vehicles in Lahore and connect directly with New Lahore Motors for vehicle enquiries and showroom visits.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onExploreCars}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#123B63] hover:bg-[#1D5D8F] text-white text-base font-bold rounded-md shadow-md hover:shadow-lg transition-all transform active:scale-98 cursor-pointer whitespace-nowrap"
              >
                <span>VIEW AVAILABLE CARS</span>
                <ArrowRight className="w-5 h-5 text-[#D6A84F]" />
              </button>

              <a
                href={DEALERSHIP_INFO.phoneTel}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white hover:bg-[#F7F9FC] text-[#123B63] border-2 border-[#123B63] text-base font-bold rounded-md transition-all active:scale-98 whitespace-nowrap"
              >
                <Phone className="w-5 h-5 text-[#1D5D8F]" />
                <span>CALL NOW</span>
              </a>
            </div>

            {/* Trust Markers */}
            <div className="pt-6 border-t border-[#E5EAF0] grid grid-cols-2 gap-4 max-w-md">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#1D5D8F] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase font-bold tracking-wider text-[#667085]">Location</div>
                  <div className="text-sm font-semibold text-[#17202A]">Jail Rd, Mozang Chungi</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-[#D6A84F] fill-[#D6A84F] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase font-bold tracking-wider text-[#667085]">Google Rating</div>
                  <div className="text-sm font-semibold text-[#17202A]">{DEALERSHIP_INFO.googleRating}/5 <span className="text-xs text-[#667085]">({DEALERSHIP_INFO.reviewsCount} reviews)</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Background architectural framing */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#123B63]/10 to-[#D6A84F]/10 rounded-2xl filter blur-xl opacity-70 -z-10" />

              <div className="overflow-hidden rounded-xl border border-[#E5EAF0] bg-white shadow-xl">
                <img
                  src="/src/assets/images/hero_car_showroom_1790135158558.jpg"
                  alt="New Lahore Motors car showroom on Jail Road, Lahore"
                  className="w-full h-[320px] sm:h-[400px] lg:h-[440px] object-cover object-center transform hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Showroom Direct Info Bar */}
                <div className="p-5 bg-white border-t border-[#E5EAF0] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#F7F9FC] text-[#123B63]">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-[#17202A]">Showroom Open in Lahore</h2>
                      <p className="text-xs text-[#667085]">Jail Rd, Mozang Chungi, Lahore, 54000</p>
                    </div>
                  </div>

                  <a
                    href={DEALERSHIP_INFO.phoneTel}
                    className="shrink-0 text-xs font-bold text-[#123B63] hover:text-[#1D5D8F] flex items-center gap-1.5 border border-[#E5EAF0] px-3 py-2 rounded-md hover:bg-[#F7F9FC] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#D6A84F]" />
                    <span>042-37423355</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
