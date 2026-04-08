import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

const socialImages = [
  "/Artistic muffins.jpg",
  "/Bouqet fries.jpg",
  "/Bouquet fries.jpg",
  "/Bouquetfries.jpg",
  "/Donar kabab ..jpg",
  "/Donar kabab.jpg",
  "/Potatao pizza.jpg",
  "/artisticmuffins.jpg"
];

export function SocialProof() {
  return (
    <section className="py-20 bg-crave-black border-y border-gray-800">
      <div className="container mx-auto px-4 md:px-6 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center gap-2 bg-white/5 px-4 py-2 rounded-full mb-4"
        >
          <Instagram className="w-5 h-5 text-pink-500" />
          <span className="text-white font-medium">@cravestudio</span>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-heading font-bold text-white"
        >
          Follow Us for Daily Cravings
        </motion.h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4 px-2 md:px-4">
        {socialImages.map((img, index) => (
          <motion.a
            href="#"
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative aspect-square overflow-hidden rounded-xl block"
          >
            <img 
              src={img} 
              alt="Social post" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-crave-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
              <Instagram className="w-8 h-8 text-white" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
