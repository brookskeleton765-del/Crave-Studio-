import { motion } from 'motion/react';
import { ChevronRight, Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bouquet-fries.jpg"
          alt="Delicious Food Background"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-crave-black via-crave-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-crave-black via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-crave-brown/50 border border-crave-gold/30 text-crave-gold text-sm font-medium mb-6 uppercase tracking-wider backdrop-blur-sm">
              Premium Fast Food Fusion
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-[1.1] mb-6">
              Taste That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-crave-gold to-yellow-300">
                Hits Different
              </span> 🍟🔥
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              From juicy donar kababs to artistic muffins — your cravings start here. 
              Experience the perfect blend of bold flavors and premium ingredients.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button className="w-full sm:w-auto bg-crave-neon hover:bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,59,48,0.4)]">
                Order Now
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all backdrop-blur-sm flex items-center justify-center gap-2">
                <Play className="w-5 h-5 fill-current" />
                View Menu
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs text-gray-400 uppercase tracking-widest">Scroll</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-crave-gold to-transparent"></div>
      </motion.div>
    </section>
  );
}
