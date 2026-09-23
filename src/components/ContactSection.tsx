import React from 'react';
import { Phone, MapPin, Building, Clock, ArrowRight } from 'lucide-react';
import { DEALERSHIP_INFO } from '../data/vehicles';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-[#E5EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#123B63] to-[#0B2540] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-xl relative overflow-hidden">
          {/* Subtle decorative background pattern */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-white/5 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 rounded-full bg-[#D6A84F]/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider text-[#D6A84F] backdrop-blur-xs">
              <Phone className="w-3.5 h-3.5" />
              <span>DIRECT PHONE ENQUIRIES ONLY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-balance">
              READY TO FIND YOUR NEXT CAR?
            </h2>

            <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Call New Lahore Motors for current vehicle availability, prices and showroom information.
            </p>

            {/* Primary Action Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={DEALERSHIP_INFO.phoneTel}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D6A84F] hover:bg-[#c4963f] text-[#0B2540] text-lg font-extrabold rounded-xl shadow-lg hover:shadow-xl transition-all transform active:scale-95 whitespace-nowrap"
              >
                <Phone className="w-6 h-6 text-[#0B2540]" />
                <span>CALL 042-37423355</span>
              </a>

              <a
                href={DEALERSHIP_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-white/10 hover:bg-white/15 text-white border border-white/20 text-base font-bold rounded-xl backdrop-blur-xs transition-colors"
              >
                <MapPin className="w-5 h-5 text-[#D6A84F]" />
                <span>GET SHOWROOM DIRECTIONS</span>
              </a>
            </div>

            {/* Factual Address & Schedule Information */}
            <div className="pt-10 mt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D6A84F] shrink-0 mt-1" />
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-slate-300 font-bold">Location</h3>
                  <p className="text-xs sm:text-sm text-white mt-1">
                    Jail Rd, Mozang Chungi, Lahore, 54000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#D6A84F] shrink-0 mt-1" />
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-slate-300 font-bold">Contact Method</h3>
                  <p className="text-xs sm:text-sm text-white mt-1">
                    Telephone: 042-37423355 (Call Only)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#D6A84F] shrink-0 mt-1" />
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-slate-300 font-bold">Operating Hours</h3>
                  <p className="text-xs sm:text-sm text-white mt-1">
                    Mon – Sat: 10:00 AM – 8:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
