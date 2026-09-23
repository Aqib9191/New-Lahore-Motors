export interface Vehicle {
  id: string;
  make: 'Suzuki' | 'Honda' | 'Toyota' | 'Changan';
  model: string;
  variant: string;
  category: 'Hatchback' | 'Sedan';
  transmission: '5-Speed Manual' | 'Auto Gear Shift (AGS)' | 'CVT Automatic' | 'M-CVT Automatic' | 'Super CVT-i' | '5-Speed Dual Clutch (DCT)';
  transmissionType: 'Manual' | 'Automatic';
  engine: string;
  displacementCc: number;
  fuelType: 'Petrol';
  seats: number;
  officialReferencePricePkr: number;
  formattedPrice: string;
  priceTypeLabel: 'Official Manufacturer Reference Price';
  image: string;
  features: string[];
  dimensions?: string;
  fuelEconomyEst?: string;
}
