import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const menuItems = [
  {
    id: 'donar',
    name: 'Donar Kabab',
    description: 'Juicy, slow-roasted meat carved fresh, wrapped in warm artisan bread with our signature garlic sauce.',
    price: 850,
    priceDisplay: 'Rs 850',
    image: '/donar-kabab.jpg',
    tag: 'Signature'
  },
  {
    id: 'pizza',
    name: 'Potato Pizza',
    description: 'Crispy potato base crust topped with thinly sliced roasted potatoes, melted mozzarella, and truffle oil.',
    price: 750,
    priceDisplay: 'Rs 750',
    image: '/potato-pizza.jpg',
    tag: 'New'
  },
  {
    id: 'fries',
    name: 'Bouquet Fries',
    description: 'A massive cone of extra-crispy fries loaded with melted cheese, jalapeños, and spicy mayo drip.',
    price: 450,
    priceDisplay: 'Rs 450',
    image: '/bouquet-fries.jpg',
    tag: 'Hot Seller'
  },
  {
    id: 'muffins',
    name: 'Artistic Muffins',
    description: 'A savory fusion delight! Spicy, flavor-packed fast food baked into a fun muffin shape with a zesty kick.',
    price: 350,
    priceDisplay: 'Rs 350',
    image: '/artistic-muffins.jpg',
    tag: 'Fusion'
  }
];

export function Menu() {
  const { addToCart } = useCart();
  return (
    <section id="menu" className="py-24 bg-crave-dark relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-white mb-4"
          >
            Crave The <span className="text-crave-gold">Menu</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Handcrafted to perfection. Every bite is designed to trigger your senses and satisfy your deepest cravings.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-crave-black rounded-2xl overflow-hidden border border-gray-800 hover:border-crave-gold/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(245,166,35,0.1)]"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-crave-black to-transparent opacity-80"></div>
                <div className="absolute top-4 left-4 bg-crave-neon text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {item.tag}
                </div>
              </div>
              
              <div className="p-6 relative">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-crave-gold transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-crave-gold font-bold text-lg">{item.priceDisplay}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
                
                <button 
                  onClick={() => addToCart({ id: item.id, name: item.name, price: item.price })}
                  className="w-full bg-white/5 hover:bg-crave-gold text-white hover:text-crave-black border border-white/10 hover:border-crave-gold py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <Plus className="w-4 h-4 transition-transform group-hover/btn:rotate-90" />
                  Add to Order
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
