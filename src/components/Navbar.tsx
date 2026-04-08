import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Menu as MenuIcon, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '../context/CartContext';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setIsCartOpen, items } = useCart();
  
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Signature', href: '#signature' },
    { name: 'Experience', href: '#experience' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-crave-black/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="text-2xl md:text-3xl font-heading font-bold tracking-tighter text-white">
          CRAVE<span className="text-crave-gold">STUDIO</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-crave-gold transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="hidden md:flex items-center gap-2 bg-crave-neon hover:bg-red-600 text-white px-6 py-2.5 rounded-full font-medium transition-colors relative"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Order Now</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-crave-neon w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shadow-md">
                {totalItems}
              </span>
            )}
          </button>
          
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-crave-dark border-t border-gray-800 p-4 md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-crave-gold transition-colors p-2"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsCartOpen(true);
                }}
                className="flex items-center justify-center gap-2 bg-crave-neon text-white px-6 py-3 rounded-full font-medium mt-4 relative"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Order Now</span>
                {totalItems > 0 && (
                  <span className="absolute top-1 right-4 bg-white text-crave-neon w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shadow-md">
                    {totalItems}
                  </span>
                )}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
