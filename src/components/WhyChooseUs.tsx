import React from 'react';
import { Layers, MapPin, PhoneCall, Navigation } from 'lucide-react';
import { DEALERSHIP_INFO } from '../data/vehicles';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: Layers,
      title: 'WIDE VEHICLE OPTIONS',
      description: 'Explore different vehicle categories and models.',
      detail: 'From economical hatchbacks to executive sedans and family cars.',
    },
    {
      icon: MapPin,
      title: 'LAHORE SHOWROOM LOCATION',
      description: 'Conveniently located on Jail Road, Mozang Chungi.',
      detail: 'Centrally situated for accessible visits from anywhere across Lahore.',
    },
    {
      icon: PhoneCall,
      title: 'DIRECT PHONE CONTACT',
      description: 'Speak directly with the dealership for vehicle enquiries.',
      detail: 'Clear, direct communication without third-party middlemen or wait times.',
    },
    {
      icon: Navigation,
      title: 'EASY SHOWROOM VISIT',
      description: 'Get directions and visit the dealership in person.',
      detail: 'Inspect available vehicles in our showroom and discuss your requirements.',
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-[#F7F9FC] border-b border-[#E5EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-bold tracking-widest uppercase text-[#1D5D8F]">
            OUR COMMITMENT
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17202A] tracking-tight mt-2 font-display">
            WHY NEW LAHORE MOTORS
          </h2>
          <p className="text-base text-[#667085] mt-3">
            Providing straightforward automotive guidance, convenient showroom access, and direct telephone service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#E5EAF0] p-6 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#123B63]/10 text-[#123B63] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold text-[#17202A] font-display">
                    {pt.title}
                  </h3>

                  <p className="text-sm font-medium text-[#17202A] mt-2 leading-relaxed">
                    {pt.description}
                  </p>

                  <p className="text-xs text-[#667085] mt-2 leading-normal">
                    {pt.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E5EAF0]">
                  <span className="text-[11px] font-semibold text-[#1D5D8F] uppercase tracking-wider">
                    Factual Service
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Connect CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-2 bg-white rounded-xl border border-[#E5EAF0] shadow-xs px-6 py-4">
            <span className="text-xs sm:text-sm text-[#17202A] font-medium">
              Have questions about vehicle options or showroom visits?
            </span>
            <a
              href={DEALERSHIP_INFO.phoneTel}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#123B63] hover:bg-[#1D5D8F] text-white text-xs font-bold rounded-md shadow-xs transition-colors whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#D6A84F]" />
              <span>Call 042-37423355</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
