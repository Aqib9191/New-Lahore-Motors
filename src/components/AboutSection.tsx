import React from 'react';
import { Phone, MapPin, Building2, Clock, CheckCircle } from 'lucide-react';
import { DEALERSHIP_INFO } from '../data/vehicles';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-[#E5EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#E5EAF0] shadow-lg bg-[#F7F9FC]">
              <img
                src="/src/assets/images/dealership_exterior_1790135207888.jpg"
                alt="New Lahore Motors dealership facility on Jail Road Lahore"
                className="w-full h-[360px] sm:h-[420px] object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-white/95 border-t border-[#E5EAF0] flex items-center justify-between text-xs text-[#17202A]">
                <span className="font-semibold">Automobile Dealership Facility</span>
                <span className="text-[#667085]">Jail Road, Mozang Chungi, Lahore</span>
              </div>
            </div>
          </div>

          {/* Right Column: Factual Text & Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-bold tracking-widest uppercase text-[#1D5D8F]">
              ESTABLISHED CAR DEALERSHIP
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17202A] tracking-tight font-display">
              ABOUT NEW LAHORE MOTORS
            </h2>

            {/* Exact factual conservative content as specified in prompt */}
            <p className="text-base sm:text-lg text-[#17202A] leading-relaxed">
              New Lahore Motors is a car dealership located on Jail Road in the Mozang Chungi area of Lahore. The showroom provides a convenient location for customers looking to explore vehicle options and contact the dealership directly.
            </p>

            {/* Address & Contact Cards */}
            <div className="p-5 bg-[#F7F9FC] rounded-xl border border-[#E5EAF0] space-y-3.5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#123B63] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#667085]">Showroom Address</div>
                  <div className="font-semibold text-[#17202A]">{DEALERSHIP_INFO.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-[#E5EAF0]">
                <Phone className="w-5 h-5 text-[#123B63] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#667085]">Direct Contact</div>
                  <a
                    href={DEALERSHIP_INFO.phoneTel}
                    className="font-bold text-[#123B63] hover:text-[#1D5D8F] text-base"
                  >
                    {DEALERSHIP_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-[#E5EAF0]">
                <Clock className="w-5 h-5 text-[#123B63] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#667085]">Showroom Schedule</div>
                  <div className="text-xs sm:text-sm text-[#17202A]">{DEALERSHIP_INFO.showroomHours}</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={DEALERSHIP_INFO.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#123B63] hover:bg-[#1D5D8F] text-white text-sm font-bold rounded-lg shadow-sm transition-transform active:scale-95"
              >
                <Phone className="w-4 h-4 text-[#D6A84F]" />
                <span>CALL NOW</span>
              </a>

              <a
                href={DEALERSHIP_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#123B63] text-[#123B63] hover:bg-[#F7F9FC] text-sm font-bold rounded-lg transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#1D5D8F]" />
                <span>GET DIRECTIONS</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
