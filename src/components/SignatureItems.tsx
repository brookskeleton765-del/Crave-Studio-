import { motion } from 'motion/react';
import { Star, Flame, Crown } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function SignatureItems() {
  const { addToCart } = useCart();
  return (
    <section id="signature" className="py-24 bg-crave-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-crave-neon/5 blur-[120px]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-crave-gold/5 blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-crave-gold mb-4"
            >
              <Crown className="w-5 h-5" />
              <span className="font-bold uppercase tracking-widest text-sm">Customer Favorites</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-bold text-white"
            >
              Signature <span className="text-crave-neon">Masterpieces</span>
            </motion.h2>
          </div>
          
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white border-b border-crave-gold pb-1 hover:text-crave-gold transition-colors font-medium"
          >
            View Full Menu
          </motion.button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Item 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl overflow-hidden h-[400px] md:h-[500px]"
          >
            <img 
              src="/donar-kabab-signature.jpg" 
              alt="The Ultimate Donar" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-crave-black via-crave-black/40 to-transparent"></div>
            
            <div className="absolute top-6 left-6 flex gap-2">
              <span className="bg-crave-neon text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1">
                <Flame className="w-3 h-3" /> Hot Seller
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-3xl font-heading font-bold text-white mb-2 group-hover:text-crave-gold transition-colors">
                The Ultimate Donar
              </h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Double meat, extra cheese, and our secret spicy garlic sauce. A flavor explosion in every bite.
              </p>
              <button 
                onClick={() => addToCart({ id: 'donar-ultimate', name: 'The Ultimate Donar', price: 950 })}
                className="bg-white text-crave-black px-6 py-3 rounded-full font-bold hover:bg-crave-gold transition-colors"
              >
                Order for Rs 950
              </button>
            </div>
          </motion.div>

          {/* Featured Item 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative rounded-3xl overflow-hidden h-[400px] md:h-[500px]"
          >
            <img 
              src="/potato-pizza.jpg" 
              alt="Combo Deal" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-crave-black via-crave-black/40 to-transparent"></div>
            
            <div className="absolute top-6 left-6 flex gap-2">
              <span className="bg-crave-gold text-crave-black px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1">
                <Star className="w-3 h-3 fill-current" /> Most Loved
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-3xl font-heading font-bold text-white mb-2 group-hover:text-crave-gold transition-colors">
                Combo Deal
              </h3>
              <p className="text-gray-300 mb-6 max-w-md">
                The perfect feast. Get our signature Potato Pizza along with a side of crispy fries and a refreshing drink.
              </p>
              <button 
                onClick={() => addToCart({ id: 'combo-deal', name: 'Combo Deal', price: 1000 })}
                className="bg-white text-crave-black px-6 py-3 rounded-full font-bold hover:bg-crave-gold transition-colors"
              >
                Order for Rs 1000
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
