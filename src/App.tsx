/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { SignatureItems } from './components/SignatureItems';
import { Experience } from './components/Experience';
import { SocialProof } from './components/SocialProof';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { CartProvider, useCart } from './context/CartContext';
import { ShoppingBag } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';

function AppContent() {
  const { scrollY } = useScroll();
  const [showStickyOrder, setShowStickyOrder] = useState(false);
  const { setIsCartOpen, items } = useCart();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 800) {
      setShowStickyOrder(true);
    } else {
      setShowStickyOrder(false);
    }
  });

  return (
    <div className="min-h-screen bg-crave-black text-crave-light selection:bg-crave-neon selection:text-white relative">
      <Navbar />
      <Cart />
      <main>
        <Hero />
        <Menu />
        <SignatureItems />
        <Experience />
        <SocialProof />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      
      {/* Sticky Order Button for Mobile/Desktop */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ 
          y: showStickyOrder ? 0 : 100, 
          opacity: showStickyOrder ? 1 : 0 
        }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button 
          onClick={() => setIsCartOpen(true)}
          className="bg-crave-neon hover:bg-red-600 text-white p-4 rounded-full shadow-[0_0_20px_rgba(255,59,48,0.5)] transition-transform hover:scale-110 flex items-center justify-center group relative"
        >
          <ShoppingBag className="w-6 h-6" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-white text-crave-neon w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shadow-md">
              {totalItems}
            </span>
          )}
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold group-hover:ml-2 group-hover:mr-1">
            Order Now
          </span>
        </button>
      </motion.div>
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

