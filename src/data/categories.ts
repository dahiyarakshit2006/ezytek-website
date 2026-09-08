export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  productCount: number;
  featured: boolean;
}

export const categories: Category[] = [
  { id: '1', name: 'Automatic Car Wash Plant', slug: 'automatic-car-wash-plant', description: 'Intelligent automated washing systems.', productCount: 6, featured: true },
  { id: '2', name: 'High Pressure Washer', slug: 'high-pressure-washer', description: 'Powerful cleaning equipment.', productCount: 3, featured: true },
  { id: '3', name: 'Car Underbody Washer', slug: 'car-underbody-washer', description: 'Specialized underbody cleaning.', productCount: 2, featured: false },
  { id: '4', name: 'Vacuum Cleaners', slug: 'vacuum-cleaners', description: 'High-suction cleaning solutions.', productCount: 3, featured: true },
  { id: '5', name: 'Accessories', slug: 'accessories', description: 'Essential washing accessories.', productCount: 10, featured: false },
  { id: '6', name: 'Chemicals', slug: 'chemicals', description: 'Premium cleaning agents.', productCount: 5, featured: false },
  { id: '7', name: 'Sweepers', slug: 'sweepers', description: 'Industrial floor sweeping machines.', productCount: 2, featured: false },
  { id: '8', name: 'Scrubber & Dryer', slug: 'scrubber-dryer', description: 'Efficient floor cleaning equipment.', productCount: 2, featured: false },
  { id: '9', name: 'Upholstery Cleaner', slug: 'upholstery-cleaner', description: 'Deep fabric cleaning systems.', productCount: 2, featured: false },
  { id: '10', name: 'Garage Equipment', slug: 'garage-equipment', description: 'Comprehensive workshop solutions.', productCount: 4, featured: true },
  { id: '11', name: 'Wheel Balancer', slug: 'wheel-balancer', description: 'Precision wheel balancing.', productCount: 2, featured: false },
  { id: '12', name: '3D Wheel Alignment', slug: '3d-wheel-alignment', description: 'Advanced alignment systems.', productCount: 2, featured: false },
  { id: '13', name: 'Tyre Changer', slug: 'tyre-changer', description: 'Professional tyre changing machines.', productCount: 2, featured: false },
  { id: '14', name: 'Truck Wheel Wash System', slug: 'truck-wheel-wash', description: 'Heavy-duty vehicle washing.', productCount: 2, featured: false },
  { id: '15', name: 'Steam Cleaner', slug: 'steam-cleaner', description: 'High-temperature steam cleaning.', productCount: 2, featured: false },
  { id: '16', name: 'Automatic Bike Wash Plant', slug: 'automatic-bike-wash-plant', description: 'Dedicated two-wheeler washing systems.', productCount: 2, featured: false },
];
