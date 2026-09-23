import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import categorySedanLuxImg from '../assets/images/category_sedan_lux_1790135172324.jpg';
import categoryHatchbackImg from '../assets/images/category_hatchback_compact_1790135196904.jpg';
import categorySuvImg from '../assets/images/category_suv_modern_1790135184402.jpg';
import vehicleToyotaImg from '../assets/images/vehicle_toyota_sedan_1790135268149.jpg';
import vehicleAltoImg from '../assets/images/vehicle_alto_hatchback_1790135291788.jpg';
import heroCarShowroomImg from '../assets/images/hero_car_showroom_1790135158558.jpg';

interface CarCategoriesProps {
  onSelectCategory: (categoryKey: string) => void;
}

export const CarCategories: React.FC<CarCategoriesProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      id: 'Sedan',
      title: 'SEDANS',
      subtitle: 'Executive & City Sedans',
      image: categorySedanLuxImg,
      models: 'Honda Civic, City, Corolla, Alsvin',
    },
    {
      id: 'Hatchback',
      title: 'HATCHBACKS',
      subtitle: 'Compact City Hatchbacks',
      image: categoryHatchbackImg,
      models: 'Suzuki Alto VXR, VXL',
    },
    {
      id: 'SUV',
      title: 'SUVs',
      subtitle: 'Sport Utility Vehicles',
      image: categorySuvImg,
      models: 'Modern Crossover & Utility options',
    },
    {
      id: 'Family',
      title: 'FAMILY CARS',
      subtitle: 'Spacious & Comfortable Seating',
      image: vehicleToyotaImg,
      models: 'Reliable 5-seater family transportation',
    },
    {
      id: 'Economical',
      title: 'ECONOMICAL CARS',
      subtitle: 'Fuel Efficient Daily Drivers',
      image: vehicleAltoImg,
      models: 'Low maintenance, optimal mileage',
    },
    {
      id: 'Premium',
      title: 'PREMIUM CARS',
      subtitle: 'High Specification & Turbocharged',
      image: heroCarShowroomImg,
      models: 'Flagship Honda Civic, City Aspire',
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-[#E5EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold tracking-widest uppercase text-[#1D5D8F]">
            AUTOMOTIVE SELECTION
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17202A] tracking-tight mt-2 font-display">
            EXPLORE VEHICLE CATEGORIES
          </h2>
          <p className="text-sm sm:text-base text-[#667085] mt-3">
            Browse through common market categories and discover vehicle options that match your lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group text-left relative overflow-hidden rounded-xl border border-[#E5EAF0] bg-white shadow-2xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col"
            >
              {/* Category Image */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#F7F9FC]">
                <img
                  src={cat.image}
                  alt={`${cat.title} at New Lahore Motors`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute top-3 right-3 p-2 rounded-full bg-white/90 text-[#123B63] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-xs font-medium text-white/80 uppercase tracking-wider">
                    {cat.subtitle}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-white font-display">
                    {cat.title}
                  </h3>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-4 flex items-center justify-between border-t border-[#E5EAF0] bg-white">
                <span className="text-xs text-[#667085] font-medium truncate">
                  {cat.models}
                </span>
                <span className="text-xs font-bold text-[#1D5D8F] group-hover:underline whitespace-nowrap ml-2">
                  View Reference Models &rarr;
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
