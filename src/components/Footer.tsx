import { MapPin, Phone, MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-crave-black pt-20 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="text-3xl font-heading font-bold tracking-tighter text-white mb-4 block">
              CRAVE<span className="text-crave-gold">STUDIO</span>
            </a>
            <p className="text-gray-400 mb-6">
              Where Taste Meets Art. Elevating fast food to a premium, unforgettable experience.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-crave-neon transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-crave-neon transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-crave-neon transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#menu" className="text-gray-400 hover:text-crave-gold transition-colors">Full Menu</a></li>
              <li><a href="#signature" className="text-gray-400 hover:text-crave-gold transition-colors">Signature Items</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-crave-gold transition-colors">Our Story</a></li>
              <li><a href="#reviews" className="text-gray-400 hover:text-crave-gold transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-crave-neon shrink-0 mt-0.5" />
                <span>Superior University Rahim Yar Khan</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MessageCircle className="w-5 h-5 text-crave-neon shrink-0" />
                <span>WhatsApp: +1 (555) 987-6543</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Crave Studio. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
