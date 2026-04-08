import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Ali Raza",
    handle: "@ali_foodie_pk",
    text: "Best fries in town! The Bouquet Fries are literally a work of art and taste even better than they look. Zabardast!",
    rating: 5
  },
  {
    id: 2,
    name: "Fatima Tariq",
    handle: "@fatima_eats",
    text: "That muffin? Unreal! I thought it was sweet, but it's a spicy, savory fusion explosion. Bohat aala!",
    rating: 5
  },
  {
    id: 3,
    name: "Usman Khan",
    handle: "@usman_bites",
    text: "The Ultimate Donar is exactly what it claims to be. Juicy, flavorful, and absolutely massive. Highly recommend!",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-crave-dark relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-white mb-4"
          >
            Don't Just Take <span className="text-crave-gold">Our Word</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-crave-black p-8 rounded-3xl border border-gray-800 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-800" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-crave-gold text-crave-gold" />
                ))}
              </div>
              
              <p className="text-gray-300 text-lg mb-8 relative z-10 italic">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-crave-gold bg-gray-800 flex items-center justify-center text-crave-gold font-bold text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold">{review.name}</h4>
                  <span className="text-gray-500 text-sm">{review.handle}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
