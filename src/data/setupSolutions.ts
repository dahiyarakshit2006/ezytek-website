export interface SetupSolution {
  id: number;
  name: string;
  slug: string;
  description: string;
  idealFor: string;
  spaceRequirement: string;
  equipment: string[];
  businessType: string;
  image: string;
}

export const setupSolutions: SetupSolution[] = [
  {
    id: 1,
    name: "Automatic Car Washing Setup",
    slug: "automatic-car-washing-setup",
    description: "Full automated car wash bay with conveyor/rollover systems, automated chemical dispensing, and drying. Ideal for high-volume operations.",
    idealFor: "High-volume operations",
    spaceRequirement: "1500-3000 sq ft",
    equipment: ["Automatic Wash Plant", "Chemical Dispensers", "Drying System"],
    businessType: "Commercial Wash Center",
    image: "/assets/images/setup-automatic.jpg"
  },
  {
    id: 2,
    name: "Manual Car Washing Setup",
    slug: "manual-car-washing-setup",
    description: "Professional-grade manual washing bay with pressure washers, foam cannons, and drainage systems. Ideal for startup businesses.",
    idealFor: "Startup businesses",
    spaceRequirement: "500-1000 sq ft",
    equipment: ["Pressure Washer", "Foam Cannon", "Vacuum Cleaner"],
    businessType: "Professional Car Wash",
    image: "/assets/images/setup-manual.jpg"
  },
  {
    id: 3,
    name: "Robotic Underbody with Boom Setup",
    slug: "robotic-underbody-boom-setup",
    description: "Specialized underbody cleaning system with robotic arms and boom-mounted pressure washers. Ideal for service centers.",
    idealFor: "Service centers",
    spaceRequirement: "800-1500 sq ft",
    equipment: ["Underbody Washer", "Boom Arm", "High Pressure Pump"],
    businessType: "Service Center",
    image: "/assets/images/setup-underbody.jpg"
  },
  {
    id: 4,
    name: "Mobile Car Spa Setup",
    slug: "mobile-car-spa-setup",
    description: "Portable car detailing and spa equipment for on-site services. Ideal for mobile car care businesses.",
    idealFor: "Mobile car care businesses",
    spaceRequirement: "Flexible/mobile",
    equipment: ["Portable Vacuum", "Portable Pressure Washer", "Detailing Kit"],
    businessType: "Mobile Detailing",
    image: "/assets/images/setup-mobile.jpg"
  },
  {
    id: 5,
    name: "ABC Setup",
    slug: "abc-setup",
    description: "Comprehensive all-in-one business configuration combining wash, detail, and service capabilities. Ideal for multi-service centers.",
    idealFor: "Multi-service centers",
    spaceRequirement: "2000-4000 sq ft",
    equipment: ["Wash Bay", "Detailing Bay", "Service Lift", "Wheel Balancer"],
    businessType: "Comprehensive Auto Center",
    image: "/assets/images/setup-abc.jpg"
  }
];
