import { motion } from 'motion/react';
import { Phone, MessageCircle, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function CTA() {
  const { setIsCartOpen } = useCart();

  return (
    <section className="py-24 bg-crave-neon relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 uppercase tracking-tight">
            Hungry Yet?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 font-medium">
            Order Now & Satisfy Your Cravings. <br className="hidden md:block" />
            <span className="bg-crave-black text-crave-gold px-3 py-1 rounded-md text-lg inline-block mt-2">Limited Time Special: Free Delivery on Orders Over Rs 2000</span>
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="w-full sm:w-auto bg-crave-black hover:bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-xl hover:-translate-y-1"
            >
              <ShoppingBag className="w-5 h-5" />
              Online Order
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1ebd5c] text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-xl hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Order
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
