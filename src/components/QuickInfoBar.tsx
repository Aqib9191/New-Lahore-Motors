import React from 'react';
import { Car, Building, PhoneCall, MapPin } from 'lucide-react';

export const QuickInfoBar: React.FC = () => {
  const items = [
    {
      icon: Car,
      title: 'QUALITY VEHICLES',
      description: 'Explore popular Pakistani automotive models',
    },
    {
      icon: Building,
      title: 'LOCAL LAHORE DEALERSHIP',
      description: 'Established presence on Jail Road, Mozang Chungi',
    },
    {
      icon: PhoneCall,
      title: 'DIRECT PHONE ENQUIRIES',
      description: 'Call directly to confirm current stock & pricing',
    },
    {
      icon: MapPin,
      title: 'SHOWROOM LOCATION',
      description: 'Convenient central location in Lahore',
    },
  ];

  return (
    <div className="bg-[#F7F9FC] border-b border-[#E5EAF0] py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-lg bg-white border border-[#E5EAF0] shadow-2xs hover:shadow-xs transition-shadow"
              >
                <div className="p-2.5 rounded-md bg-[#123B63]/10 text-[#123B63] shrink-0">
                  <Icon className="w-5 h-5 text-[#123B63]" />
                </div>
                <div>
                  <h3 className="text-xs font-bold tracking-wider text-[#123B63] font-display uppercase">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#667085] mt-1 leading-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
