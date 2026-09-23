import React, { useEffect } from 'react';
import { X, Phone, MapPin, CheckCircle2, AlertCircle, Fuel, Gauge, Settings2, Users } from 'lucide-react';
import { Vehicle } from '../types/vehicle';
import { DEALERSHIP_INFO, PRICE_DISCLAIMER_TEXT } from '../data/vehicles';

interface VehicleDetailModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
  onNavigateToLocation: () => void;
}

export const VehicleDetailModal: React.FC<VehicleDetailModalProps> = ({
  vehicle,
  onClose,
  onNavigateToLocation,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (vehicle) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [vehicle, onClose]);

  if (!vehicle) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="vehicle-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden border border-[#E5EAF0] z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5EAF0] bg-[#F7F9FC]">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#1D5D8F]">
              Reference Vehicle Specification
            </div>
            <h2 id="vehicle-modal-title" className="text-xl sm:text-2xl font-bold text-[#17202A] font-display">
              {vehicle.make} {vehicle.model} {vehicle.variant}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close vehicle details modal"
            className="p-2 text-[#667085] hover:text-[#17202A] hover:bg-white rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
          {/* Main Visual */}
          <div className="relative rounded-xl overflow-hidden bg-[#F7F9FC] border border-[#E5EAF0]">
            <img
              src={vehicle.image}
              alt={`${vehicle.make} ${vehicle.model} ${vehicle.variant}`}
              className="w-full h-64 sm:h-80 object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-md border border-[#E5EAF0] text-xs font-semibold text-[#17202A]">
              Market Reference Model
            </div>
          </div>

          {/* Pricing Highlight Card */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#F7F9FC] border border-[#E5EAF0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#667085]">
                {vehicle.priceTypeLabel}
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#123B63] font-display tabular-nums mt-0.5">
                {vehicle.formattedPrice}
              </div>
            </div>

            <a
              href={DEALERSHIP_INFO.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#123B63] hover:bg-[#1D5D8F] text-white text-sm font-bold rounded-lg shadow-sm transition-transform active:scale-95"
            >
              <Phone className="w-4 h-4 text-[#D6A84F]" />
              <span>Call to Confirm Price</span>
            </a>
          </div>

          {/* Price Disclaimer Alert Box */}
          <div className="flex items-start gap-3 p-4 bg-amber-50/70 border border-amber-200/80 rounded-xl text-xs text-amber-900 leading-relaxed">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Important Notice: </span>
              {PRICE_DISCLAIMER_TEXT}
            </div>
          </div>

          {/* Key Quick Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-[#F7F9FC] rounded-lg border border-[#E5EAF0]">
              <div className="flex items-center gap-1.5 text-xs text-[#667085] mb-1">
                <Gauge className="w-3.5 h-3.5 text-[#1D5D8F]" />
                <span>Engine</span>
              </div>
              <div className="text-sm font-bold text-[#17202A]">{vehicle.displacementCc} cc</div>
            </div>

            <div className="p-3 bg-[#F7F9FC] rounded-lg border border-[#E5EAF0]">
              <div className="flex items-center gap-1.5 text-xs text-[#667085] mb-1">
                <Settings2 className="w-3.5 h-3.5 text-[#1D5D8F]" />
                <span>Transmission</span>
              </div>
              <div className="text-sm font-bold text-[#17202A] truncate">{vehicle.transmissionType}</div>
            </div>

            <div className="p-3 bg-[#F7F9FC] rounded-lg border border-[#E5EAF0]">
              <div className="flex items-center gap-1.5 text-xs text-[#667085] mb-1">
                <Fuel className="w-3.5 h-3.5 text-[#1D5D8F]" />
                <span>Fuel Type</span>
              </div>
              <div className="text-sm font-bold text-[#17202A]">{vehicle.fuelType}</div>
            </div>

            <div className="p-3 bg-[#F7F9FC] rounded-lg border border-[#E5EAF0]">
              <div className="flex items-center gap-1.5 text-xs text-[#667085] mb-1">
                <Users className="w-3.5 h-3.5 text-[#1D5D8F]" />
                <span>Seating</span>
              </div>
              <div className="text-sm font-bold text-[#17202A]">{vehicle.seats} Persons</div>
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#123B63] mb-3">
              Official Technical Specifications
            </h3>
            <div className="border border-[#E5EAF0] rounded-xl overflow-hidden divide-y divide-[#E5EAF0] text-sm">
              <div className="flex justify-between py-2.5 px-4 bg-white">
                <span className="text-[#667085]">Manufacturer</span>
                <span className="font-semibold text-[#17202A]">{vehicle.make}</span>
              </div>
              <div className="flex justify-between py-2.5 px-4 bg-[#F7F9FC]">
                <span className="text-[#667085]">Model & Variant</span>
                <span className="font-semibold text-[#17202A]">{vehicle.model} {vehicle.variant}</span>
              </div>
              <div className="flex justify-between py-2.5 px-4 bg-white">
                <span className="text-[#667085]">Body Configuration</span>
                <span className="font-semibold text-[#17202A]">{vehicle.category}</span>
              </div>
              <div className="flex justify-between py-2.5 px-4 bg-[#F7F9FC]">
                <span className="text-[#667085]">Engine Specification</span>
                <span className="font-semibold text-[#17202A]">{vehicle.engine}</span>
              </div>
              <div className="flex justify-between py-2.5 px-4 bg-white">
                <span className="text-[#667085]">Transmission Gearbox</span>
                <span className="font-semibold text-[#17202A]">{vehicle.transmission}</span>
              </div>
              {vehicle.dimensions && (
                <div className="flex justify-between py-2.5 px-4 bg-[#F7F9FC]">
                  <span className="text-[#667085]">Exterior Dimensions (L x W x H)</span>
                  <span className="font-semibold text-[#17202A]">{vehicle.dimensions}</span>
                </div>
              )}
              {vehicle.fuelEconomyEst && (
                <div className="flex justify-between py-2.5 px-4 bg-white">
                  <span className="text-[#667085]">Fuel Economy (Manufacturer Est.)</span>
                  <span className="font-semibold text-[#17202A]">{vehicle.fuelEconomyEst}</span>
                </div>
              )}
            </div>
          </div>

          {/* Model Features */}
          {vehicle.features.length > 0 && (
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#123B63] mb-3">
                Key Variant Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                {vehicle.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[#17202A]">
                    <CheckCircle2 className="w-4 h-4 text-[#1D5D8F] shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Dealership Action Prompt */}
          <div className="p-4 rounded-xl bg-[#123B63]/5 border border-[#123B63]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold text-[#123B63]">
                Inquire about this vehicle at New Lahore Motors
              </div>
              <div className="text-xs text-[#667085] mt-0.5">
                Call 042-37423355 or visit our showroom on Jail Road, Mozang Chungi.
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  onNavigateToLocation();
                }}
                className="w-full sm:w-auto px-4 py-2.5 border border-[#123B63] text-xs font-bold text-[#123B63] rounded-md hover:bg-white transition-colors"
              >
                <span className="flex items-center justify-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  Showroom Map
                </span>
              </button>

              <a
                href={DEALERSHIP_INFO.phoneTel}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#123B63] text-white text-xs font-bold rounded-md hover:bg-[#1D5D8F] transition-colors whitespace-nowrap flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#D6A84F]" />
                <span>Call Dealership</span>
              </a>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#F7F9FC] border-t border-[#E5EAF0] flex items-center justify-between">
          <span className="text-xs text-[#667085]">
            New Lahore Motors · Jail Rd, Lahore
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white border border-[#E5EAF0] text-xs font-semibold text-[#17202A] rounded-md hover:bg-[#F7F9FC] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
