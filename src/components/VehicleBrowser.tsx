import React, { useState, useMemo } from 'react';
import { Search, Phone, Eye, AlertCircle, RotateCcw, ChevronRight } from 'lucide-react';
import { OFFICIAL_REFERENCE_VEHICLES, PRICE_DISCLAIMER_TEXT, DEALERSHIP_INFO } from '../data/vehicles';
import { Vehicle } from '../types/vehicle';
import { VehicleDetailModal } from './VehicleDetailModal';

interface VehicleBrowserProps {
  selectedCategoryFilter?: string | null;
  onClearCategoryFilter?: () => void;
  onNavigateToLocation: () => void;
}

export const VehicleBrowser: React.FC<VehicleBrowserProps> = ({
  selectedCategoryFilter,
  onClearCategoryFilter,
  onNavigateToLocation,
}) => {
  const [selectedMake, setSelectedMake] = useState<string>('All');
  const [selectedBodyType, setSelectedBodyType] = useState<string>('All');
  const [selectedTransmission, setSelectedTransmission] = useState<string>('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalVehicle, setActiveModalVehicle] = useState<Vehicle | null>(null);

  // Sync category filter if passed from CarCategories component
  React.useEffect(() => {
    if (selectedCategoryFilter) {
      if (selectedCategoryFilter === 'Sedan' || selectedCategoryFilter === 'Hatchback') {
        setSelectedBodyType(selectedCategoryFilter);
      } else {
        setSelectedBodyType('All');
      }
    }
  }, [selectedCategoryFilter]);

  // Distinct Filter Options
  const makes = ['All', 'Suzuki', 'Honda', 'Toyota', 'Changan'];
  const bodyTypes = ['All', 'Sedan', 'Hatchback'];
  const transmissions = ['All', 'Automatic', 'Manual'];
  const priceRanges = [
    { label: 'All Prices', value: 'All' },
    { label: 'Under PKR 4,000,000', value: 'under-4m' },
    { label: 'PKR 4,000,000 – 6,000,000', value: '4m-6m' },
    { label: 'Above PKR 6,000,000', value: 'above-6m' },
  ];

  // Filtering Logic
  const filteredVehicles = useMemo(() => {
    return OFFICIAL_REFERENCE_VEHICLES.filter((v) => {
      // Make filter
      if (selectedMake !== 'All' && v.make !== selectedMake) return false;

      // Body Type filter
      if (selectedBodyType !== 'All' && v.category !== selectedBodyType) return false;

      // Transmission filter
      if (selectedTransmission !== 'All' && v.transmissionType !== selectedTransmission) return false;

      // Price filter
      if (selectedPriceRange === 'under-4m' && v.officialReferencePricePkr >= 4000000) return false;
      if (
        selectedPriceRange === '4m-6m' &&
        (v.officialReferencePricePkr < 4000000 || v.officialReferencePricePkr > 6000000)
      ) {
        return false;
      }
      if (selectedPriceRange === 'above-6m' && v.officialReferencePricePkr <= 6000000) return false;

      // Text Search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchName = `${v.make} ${v.model} ${v.variant}`.toLowerCase().includes(query);
        const matchEngine = v.engine.toLowerCase().includes(query);
        const matchFeatures = v.features.some((f) => f.toLowerCase().includes(query));
        if (!matchName && !matchEngine && !matchFeatures) return false;
      }

      return true;
    });
  }, [selectedMake, selectedBodyType, selectedTransmission, selectedPriceRange, searchQuery]);

  const handleResetFilters = () => {
    setSelectedMake('All');
    setSelectedBodyType('All');
    setSelectedTransmission('All');
    setSelectedPriceRange('All');
    setSearchQuery('');
    if (onClearCategoryFilter) onClearCategoryFilter();
  };

  const hasActiveFilters =
    selectedMake !== 'All' ||
    selectedBodyType !== 'All' ||
    selectedTransmission !== 'All' ||
    selectedPriceRange !== 'All' ||
    searchQuery.trim().length > 0;

  return (
    <section id="cars" className="py-16 sm:py-24 bg-[#F7F9FC] border-b border-[#E5EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold tracking-widest uppercase text-[#1D5D8F]">
            MARKET REFERENCE DATA & PRICING
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17202A] tracking-tight mt-2 font-display">
            FEATURED VEHICLES
          </h2>
          <p className="text-base text-[#667085] mt-3 max-w-2xl mx-auto">
            Explore popular vehicle options and current market reference prices.
          </p>
        </div>

        {/* Mandatory Official Reference Price Disclaimer Banner */}
        <div className="mb-10 bg-white border border-[#E5EAF0] rounded-xl p-5 shadow-2xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#1D5D8F] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#123B63]">
                  Official Market Reference Notice
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] mt-1 leading-relaxed">
                  {PRICE_DISCLAIMER_TEXT}
                </p>
              </div>
            </div>

            <a
              href={DEALERSHIP_INFO.phoneTel}
              className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 bg-[#123B63] hover:bg-[#1D5D8F] text-white text-xs font-bold rounded-md shadow-xs transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#D6A84F]" />
              <span>Call to Confirm Price</span>
            </a>
          </div>
        </div>

        {/* Filter & Search Bar Container */}
        <div className="bg-white rounded-xl border border-[#E5EAF0] p-4 sm:p-6 mb-10 shadow-xs space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {/* Search Input */}
            <div className="relative lg:col-span-2">
              <Search className="w-4 h-4 text-[#667085] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by model (e.g. Alto, City, Civic, Yaris)..."
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#F7F9FC] border border-[#E5EAF0] rounded-lg text-[#17202A] placeholder-[#667085] focus:outline-hidden focus:border-[#123B63] focus:ring-1 focus:ring-[#123B63] transition-colors"
              />
            </div>

            {/* Make Selector */}
            <div>
              <label htmlFor="make-filter" className="sr-only">Filter by Make</label>
              <select
                id="make-filter"
                value={selectedMake}
                onChange={(e) => setSelectedMake(e.target.value)}
                className="w-full px-3 py-2.5 text-sm bg-[#F7F9FC] border border-[#E5EAF0] rounded-lg text-[#17202A] focus:outline-hidden focus:border-[#123B63]"
              >
                <option value="All">All Makes</option>
                {makes.filter((m) => m !== 'All').map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>

            {/* Body Type Selector */}
            <div>
              <label htmlFor="body-filter" className="sr-only">Filter by Body Type</label>
              <select
                id="body-filter"
                value={selectedBodyType}
                onChange={(e) => setSelectedBodyType(e.target.value)}
                className="w-full px-3 py-2.5 text-sm bg-[#F7F9FC] border border-[#E5EAF0] rounded-lg text-[#17202A] focus:outline-hidden focus:border-[#123B63]"
              >
                <option value="All">All Body Types</option>
                <option value="Sedan">Sedans</option>
                <option value="Hatchback">Hatchbacks</option>
              </select>
            </div>

            {/* Price Range Selector */}
            <div>
              <label htmlFor="price-filter" className="sr-only">Filter by Price Range</label>
              <select
                id="price-filter"
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full px-3 py-2.5 text-sm bg-[#F7F9FC] border border-[#E5EAF0] rounded-lg text-[#17202A] focus:outline-hidden focus:border-[#123B63]"
              >
                {priceRanges.map((pr) => (
                  <option key={pr.value} value={pr.value}>{pr.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Secondary Quick Transmission Filter & Active Indicator */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#E5EAF0]">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              <span className="text-xs font-semibold text-[#667085] mr-2">Transmission:</span>
              {transmissions.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTransmission(t)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                    selectedTransmission === t
                      ? 'bg-[#123B63] text-white shadow-2xs'
                      : 'bg-[#F7F9FC] text-[#667085] hover:text-[#17202A] hover:bg-slate-200'
                  }`}
                >
                  {t === 'All' ? 'All Transmissions' : t}
                </button>
              ))}
            </div>

            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D5D8F] hover:text-[#123B63] hover:underline cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs text-[#667085]">
            Showing <span className="font-semibold text-[#17202A] tabular-nums">{filteredVehicles.length}</span> reference model{filteredVehicles.length !== 1 ? 's' : ''}
          </p>
          <span className="text-xs text-[#667085]">
            Official Manufacturer Reference Data
          </span>
        </div>

        {/* Vehicles Grid */}
        {filteredVehicles.length === 0 ? (
          <div className="bg-white rounded-xl border border-[#E5EAF0] p-12 text-center max-w-md mx-auto">
            <p className="text-sm font-semibold text-[#17202A]">No reference vehicles match your current filters.</p>
            <p className="text-xs text-[#667085] mt-2">
              Try adjusting your search query, price range, or category filter to view other models.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-4 px-4 py-2 bg-[#123B63] text-white text-xs font-bold rounded-md hover:bg-[#1D5D8F] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="group flex flex-col bg-white rounded-xl border border-[#E5EAF0] shadow-2xs hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                {/* Image Showcase */}
                <div
                  onClick={() => setActiveModalVehicle(vehicle)}
                  className="relative h-52 sm:h-56 overflow-hidden bg-[#F7F9FC] cursor-pointer"
                >
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.make} ${vehicle.model} ${vehicle.variant}`}
                    className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Clean unboxed tag over photo with subtle glass backdrop */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[11px] font-semibold text-[#123B63] px-2.5 py-1 rounded-sm border border-[#E5EAF0]">
                    Reference Model
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Make & Category Metadata - Zero-pill discipline */}
                    <div className="flex items-center gap-2 text-xs font-medium text-[#667085]">
                      <span>{vehicle.make}</span>
                      <span aria-hidden="true">·</span>
                      <span>{vehicle.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{vehicle.fuelType}</span>
                    </div>

                    {/* Model Name */}
                    <h3
                      onClick={() => setActiveModalVehicle(vehicle)}
                      className="text-lg font-bold text-[#17202A] hover:text-[#123B63] transition-colors mt-1 cursor-pointer font-display"
                    >
                      {vehicle.make} {vehicle.model} <span className="font-semibold text-[#1D5D8F]">{vehicle.variant}</span>
                    </h3>

                    {/* Clean unboxed specifications */}
                    <div className="mt-3 py-2 border-y border-[#E5EAF0] text-xs text-[#667085] flex items-center justify-between">
                      <span className="truncate">{vehicle.engine}</span>
                      <span className="shrink-0 font-medium text-[#17202A] ml-2">{vehicle.transmissionType}</span>
                    </div>

                    {/* Price Section */}
                    <div className="mt-4">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#667085]">
                        Market Reference Price
                      </div>
                      <div className="text-xl sm:text-2xl font-extrabold text-[#123B63] font-display tabular-nums mt-0.5">
                        {vehicle.formattedPrice}
                      </div>
                    </div>
                  </div>

                  {/* Action CTAs */}
                  <div className="mt-6 pt-4 border-t border-[#E5EAF0] grid grid-cols-2 gap-2.5">
                    <button
                      onClick={() => setActiveModalVehicle(vehicle)}
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 border border-[#E5EAF0] hover:border-[#123B63] text-xs font-bold text-[#17202A] rounded-md hover:bg-[#F7F9FC] transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#1D5D8F]" />
                      <span>View Details</span>
                    </button>

                    <a
                      href={DEALERSHIP_INFO.phoneTel}
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#123B63] hover:bg-[#1D5D8F] text-xs font-bold text-white rounded-md shadow-2xs transition-colors whitespace-nowrap"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#D6A84F]" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Specific Car Enquiry Lead Strip */}
        <div className="mt-14 bg-white border border-[#E5EAF0] rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-[#17202A] font-display">
                Looking for a specific car?
              </h3>
              <p className="text-sm text-[#667085] max-w-xl">
                Call New Lahore Motors directly to inquire about current used or new vehicle availability, inspect showroom models, or request pricing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <a
                href={DEALERSHIP_INFO.phoneTel}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#123B63] hover:bg-[#1D5D8F] text-white text-sm font-bold rounded-lg shadow-sm transition-transform active:scale-95"
              >
                <Phone className="w-4 h-4 text-[#D6A84F]" />
                <span>CALL NEW LAHORE MOTORS</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <VehicleDetailModal
        vehicle={activeModalVehicle}
        onClose={() => setActiveModalVehicle(null)}
        onNavigateToLocation={onNavigateToLocation}
      />
    </section>
  );
};
