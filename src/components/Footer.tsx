import { Link } from 'react-router-dom';

const socialLinks = [
  { name: 'Facebook', href: '#', icon: 'Fb' },
  { name: 'Instagram', href: '#', icon: 'Ig' },
  { name: 'YouTube', href: '#', icon: 'Yt' },
  { name: 'X', href: '#', icon: 'X' },
  { name: 'LinkedIn', href: '#', icon: 'Li' },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="font-serif text-5xl md:text-7xl text-white mb-4">EzyTek Clean</h2>
          <p className="text-secondary font-serif italic text-xl">Engineering cleaner possibilities.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div>
            <h4 className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-white/35 mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm text-secondary hover:text-white transition-colors block">Home</Link></li>
              <li><Link to="/about" className="text-sm text-secondary hover:text-white transition-colors block">About Us</Link></li>
              <li><Link to="/videos" className="text-sm text-secondary hover:text-white transition-colors block">Videos</Link></li>
              <li><Link to="/contact" className="text-sm text-secondary hover:text-white transition-colors block">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-white/35 mb-6">Products</h4>
            <ul className="space-y-3">
              <li><Link to="/products" className="text-sm text-secondary hover:text-white transition-colors block">Automatic Car Wash</Link></li>
              <li><Link to="/products" className="text-sm text-secondary hover:text-white transition-colors block">Pressure Washers</Link></li>
              <li><Link to="/products" className="text-sm text-secondary hover:text-white transition-colors block">Vacuum Systems</Link></li>
              <li><Link to="/products" className="text-sm text-secondary hover:text-white transition-colors block">Garage Equipment</Link></li>
              <li><Link to="/products" className="text-sm text-secondary hover:text-white transition-colors block">Cleaning Machines</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-white/35 mb-6">Solutions</h4>
            <ul className="space-y-3">
              <li><Link to="/car-wash-setup" className="text-sm text-secondary hover:text-white transition-colors block">Automatic Setup</Link></li>
              <li><Link to="/car-wash-setup" className="text-sm text-secondary hover:text-white transition-colors block">Manual Setup</Link></li>
              <li><Link to="/car-wash-setup" className="text-sm text-secondary hover:text-white transition-colors block">Mobile Car Spa</Link></li>
              <li><Link to="/car-wash-setup" className="text-sm text-secondary hover:text-white transition-colors block">Robotic Underbody</Link></li>
              <li><Link to="/car-wash-setup" className="text-sm text-secondary hover:text-white transition-colors block">ABC Setup</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-white/35 mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="text-sm text-secondary leading-relaxed">
                A0-29/39, Amrit Steel Compound,<br />
                South Side G.T. Road Industrial Area,<br />
                Ghaziabad, Uttar Pradesh – 201009
              </li>
              <li><a href="tel:+919821491403" className="text-sm text-secondary hover:text-white transition-colors block">+91 9821491403</a></li>
              <li><a href="mailto:info@ezytekclean.com" className="text-sm text-secondary hover:text-white transition-colors block">info@ezytekclean.com</a></li>
            </ul>
            
            <div className="flex gap-3 mt-8">
              {socialLinks.map((link) => (
                <a href={link.href} key={link.name} className="liquid-glass rounded-full w-10 h-10 flex items-center justify-center text-xs font-sans text-white/60 hover:text-white transition-colors" aria-label={link.name}>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/35">© 2026 EzyTek Clean. All rights reserved.</p>
          <p className="text-xs text-white/35">GST: 09AAACQ2953R1ZR</p>
        </div>
      </div>
    </footer>
  );
}
