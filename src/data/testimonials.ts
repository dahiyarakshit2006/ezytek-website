export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  location: string;
  business: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "The automatic wash system from EzyTek has transformed our operations. The consistency and speed are exactly what our customers expect from a premium car wash.",
    name: "Car Wash Operator",
    location: "Punjab",
    business: "Multi-bay Car Wash Facility"
  },
  {
    id: 2,
    quote: "Three years with EzyTek equipment and the performance remains as reliable as day one. The build quality and after-sales support are outstanding.",
    name: "Business Owner",
    location: "Delhi NCR",
    business: "Automotive Service Center"
  },
  {
    id: 3,
    quote: "The team at EzyTek is technically sound and understands the real-world challenges of running a car wash business. Their expertise made the entire setup process smooth.",
    name: "Mr. Sangram",
    location: "Maharashtra",
    business: "Professional Car Care Studio"
  }
];
