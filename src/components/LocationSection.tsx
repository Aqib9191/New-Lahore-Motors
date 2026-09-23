import React from 'react';
import { MapPin, Phone, ExternalLink, Star, Clock, Car } from 'lucide-react';
import { DEALERSHIP_INFO } from '../data/vehicles';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-16 sm:py-24 bg-white border-b border-[#E5EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold tracking-widest uppercase text-[#1D5D8F]">
            SHOWROOM IN LAHORE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17202A] tracking-tight mt-2 font-display">
            VISIT NEW LAHORE MOTORS
          </h2>
          <p className="text-base text-[#667085] mt-3">
            Conveniently situated on Jail Road in Mozang Chungi. Stop by during showroom hours or call ahead to plan your visit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Business Details & Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#F7F9FC] rounded-2xl border border-[#E5EAF0] p-6 sm:p-8 space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white border border-[#E5EAF0] text-[#123B63] shrink-0">
                  <MapPin className="w-6 h-6 text-[#123B63]" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#667085]">
                    Dealership Address
                  </div>
                  <h3 className="text-base font-bold text-[#17202A] mt-0.5">
                    NEW LAHORE MOTORS
                  </h3>
                  <p className="text-sm text-[#17202A] mt-1 leading-relaxed">
                    Jail Rd, Mozang Chungi,
                    <br />
                    Lahore, 54000, Pakistan
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#E5EAF0]">
                <div className="p-3 rounded-lg bg-white border border-[#E5EAF0] text-[#123B63] shrink-0">
                  <Phone className="w-6 h-6 text-[#123B63]" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#667085]">
                    Telephone Enquiries
                  </div>
                  <a
                    href={DEALERSHIP_INFO.phoneTel}
                    className="text-lg font-bold text-[#123B63] hover:text-[#1D5D8F] transition-colors mt-0.5 inline-block"
                  >
                    {DEALERSHIP_INFO.phoneDisplay}
                  </a>
                  <p className="text-xs text-[#667085] mt-0.5">
                    Click to connect directly from your phone
                  </p>
                </div>
              </div>

              {/* Google Maps Rating */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#E5EAF0]">
                <div className="p-3 rounded-lg bg-white border border-[#E5EAF0] text-[#D6A84F] shrink-0">
                  <Star className="w-6 h-6 fill-[#D6A84F]" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#667085]">
                    Google Business Listing
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-base font-bold text-[#17202A]">
                      {DEALERSHIP_INFO.googleRating} / 5.0
                    </span>
                    <span className="text-xs text-[#667085]">
                      ({DEALERSHIP_INFO.reviewsCount} Google Reviews)
                    </span>
                  </div>
                  <p className="text-xs text-[#667085] mt-0.5">
                    Listed as a car dealer on Jail Road, Lahore
                  </p>
                </div>
              </div>

              {/* Showroom Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#E5EAF0]">
                <div className="p-3 rounded-lg bg-white border border-[#E5EAF0] text-[#123B63] shrink-0">
                  <Clock className="w-6 h-6 text-[#123B63]" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#667085]">
                    Showroom Timings
                  </div>
                  <div className="text-sm font-semibold text-[#17202A] mt-0.5">
                    Monday – Saturday
                  </div>
                  <p className="text-xs text-[#667085]">
                    10:00 AM – 8:00 PM (Call to verify current showroom schedule)
                  </p>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="pt-2 flex flex-col gap-3">
                <a
                  href={DEALERSHIP_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#123B63] hover:bg-[#1D5D8F] text-white text-sm font-bold rounded-lg shadow-sm transition-transform active:scale-98"
                >
                  <MapPin className="w-4 h-4 text-[#D6A84F]" />
                  <span>GET DIRECTIONS</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <a
                  href={DEALERSHIP_INFO.phoneTel}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-[#123B63] text-[#123B63] hover:bg-[#F7F9FC] text-sm font-bold rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#1D5D8F]" />
                  <span>CALL 042-37423355 BEFORE VISITING</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Interactive Google Map */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#E5EAF0] overflow-hidden shadow-lg bg-white flex flex-col">
              {/* Map Title Bar */}
              <div className="px-5 py-3.5 bg-[#F7F9FC] border-b border-[#E5EAF0] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#123B63]" />
                  <span className="text-xs font-bold text-[#17202A]">
                    Jail Road, Mozang Chungi, Lahore
                  </span>
                </div>
                <a
                  href={DEALERSHIP_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#1D5D8F] hover:underline flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Iframe */}
              <div className="relative w-full h-[380px] sm:h-[460px] bg-[#E5EAF0]">
                <iframe
                  title="New Lahore Motors Location Map"
                  src={DEALERSHIP_INFO.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Map Card Footer Note */}
              <div className="p-4 bg-white border-t border-[#E5EAF0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#667085]">
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-[#1D5D8F]" />
                  <span>Centrally located on Jail Road with parking and easy road access.</span>
                </div>
                <a
                  href={DEALERSHIP_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#123B63] hover:text-[#1D5D8F] shrink-0"
                >
                  Get Route Directions &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
