import type { Testimonial } from '../data/testimonials';

export interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive?: boolean;
}

export default function TestimonialCard({ testimonial, isActive = true }: TestimonialCardProps) {
  return (
    <div className={`text-center max-w-3xl mx-auto transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      <div className="font-serif text-6xl text-white/10 mb-4 leading-none">"</div>
      <p className="font-serif text-xl md:text-2xl italic text-white/90 leading-relaxed">
        {testimonial.quote}
      </p>
      <div className="mt-8">
        <h4 className="font-sans text-sm font-medium text-white">{testimonial.name}</h4>
        <p className="text-secondary text-sm mt-1">
          {testimonial.business} • {testimonial.location}
        </p>
      </div>
    </div>
  );
}
