import { motion } from 'motion/react';

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-crave-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-square lg:aspect-[4/5]"
            >
              <img 
                src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=1000&auto=format&fit=crop" 
                alt="Chef preparing food" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-crave-black/20"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -bottom-10 -right-10 w-2/3 rounded-3xl overflow-hidden border-8 border-crave-dark hidden md:block"
            >
              <img 
                src="https://images.unsplash.com/photo-1529543544282-ea669408eec3?q=80&w=800&auto=format&fit=crop" 
                alt="Friends enjoying food" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                Crave Studio isn't just food — <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-crave-gold to-yellow-300">
                  it's an experience.
                </span>
              </h2>
              
              <div className="space-y-6 text-gray-300 text-lg">
                <p>
                  We believe that fast food doesn't have to be boring. We've taken street food classics and elevated them with premium ingredients, artistic plating, and bold, unapologetic flavors.
                </p>
                <p>
                  Every donar is carved fresh. Every pizza is hand-tossed. Every muffin is a miniature work of art. We don't just feed your hunger; we satisfy your deepest cravings.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="border-l-2 border-crave-neon pl-4">
                  <h4 className="text-3xl font-heading font-bold text-white mb-1">100%</h4>
                  <p className="text-sm text-gray-400 uppercase tracking-wider">Fresh Ingredients</p>
                </div>
                <div className="border-l-2 border-crave-gold pl-4">
                  <h4 className="text-3xl font-heading font-bold text-white mb-1">Artisan</h4>
                  <p className="text-sm text-gray-400 uppercase tracking-wider">Crafted Daily</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
