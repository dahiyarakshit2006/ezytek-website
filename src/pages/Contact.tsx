import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import LiquidButton from '../components/LiquidButton';
import SectionLabel from '../components/SectionLabel';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Contact EzyTek Clean | Car Wash Equipment Experts';
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main>
      <section className="min-h-[50vh] flex items-center bg-gradient-to-b from-black to-brand-accent/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl md:text-7xl text-white">
            Let's build<br />
            something <em className="italic">cleaner.</em>
          </h1>
          <p className="text-white/55 mt-6 max-w-xl mx-auto">
            Ready to upgrade your car wash business? Reach out to our experts for a consultation.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <SectionLabel>CONTACT INFORMATION</SectionLabel>
            <div className="mt-8 space-y-8">
              <div>
                <MapPin className="w-5 h-5 text-brand-accent mb-2" />
                <h4 className="text-xs uppercase tracking-wider text-white/35 mb-2">Address</h4>
                <p className="text-white/80 leading-relaxed">
                  A0-29/39, Amrit Steel Compound,<br />
                  South Side G.T. Road Industrial Area,<br />
                  Ghaziabad, Uttar Pradesh – 201009
                </p>
              </div>
              <div>
                <Phone className="w-5 h-5 text-brand-accent mb-2" />
                <h4 className="text-xs uppercase tracking-wider text-white/35 mb-2">Phone</h4>
                <div className="flex flex-col space-y-1">
                  <a href="tel:+919821491403" className="text-white/80 hover:text-white transition">+91 9821491403</a>
                  <a href="tel:+919205989865" className="text-white/80 hover:text-white transition">+91 9205989865</a>
                  <a href="tel:+919205989864" className="text-white/80 hover:text-white transition">+91 9205989864</a>
                </div>
              </div>
              <div>
                <Mail className="w-5 h-5 text-brand-accent mb-2" />
                <h4 className="text-xs uppercase tracking-wider text-white/35 mb-2">Email</h4>
                <div className="flex flex-col space-y-1">
                  <a href="mailto:info@ezytekclean.com" className="text-white/80 hover:text-white transition">info@ezytekclean.com</a>
                  <a href="mailto:sales@ezytekclean.com" className="text-white/80 hover:text-white transition">sales@ezytekclean.com</a>
                  <a href="mailto:service@ezytekclean.com" className="text-white/80 hover:text-white transition">service@ezytekclean.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="liquid-glass rounded-3xl p-8">
            <h3 className="font-serif text-2xl text-white mb-6">Send us a message</h3>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <CheckCircle className="w-16 h-16 text-brand-accent mb-4" />
                <h4 className="font-serif text-2xl text-white mb-2">Message Sent</h4>
                <p className="text-white/55">Thank you for reaching out. Our team will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/35 focus:outline-none focus:border-brand-accent" />
                  <input type="text" placeholder="Company Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/35 focus:outline-none focus:border-brand-accent" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="tel" placeholder="Phone Number" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/35 focus:outline-none focus:border-brand-accent" />
                  <input type="email" placeholder="Email Address" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/35 focus:outline-none focus:border-brand-accent" />
                </div>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/80 focus:outline-none focus:border-brand-accent appearance-none">
                  <option value="" disabled selected>Interested In</option>
                  <option value="car-wash">Automatic Car Wash Plant</option>
                  <option value="setup">Complete Setup Solutions</option>
                  <option value="equipment">Cleaning Equipment</option>
                  <option value="other">Other</option>
                </select>
                <textarea placeholder="Your Message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/35 focus:outline-none focus:border-brand-accent resize-none"></textarea>
                <div className="pt-2">
                  <LiquidButton variant="solid" className="w-full justify-center">Request Consultation</LiquidButton>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="mt-16 rounded-3xl overflow-hidden aspect-[21/9] liquid-glass flex items-center justify-center">
          <p className="text-white/35">Google Maps Embed — EzyTek Clean, Ghaziabad, UP</p>
        </div>
      </section>
    </main>
  );
}
