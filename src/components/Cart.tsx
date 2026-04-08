import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag, Instagram, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

export function Cart() {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    phone: '',
    address: '',
  });

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (items.length === 0) return;

    // Format the order details
    let orderText = `*New Order from Crave Studio!* 🍟🔥\n`;
    orderText += `------------------------\n`;
    orderText += `*Customer Details:*\n`;
    orderText += `Name: ${customerDetails.name}\n`;
    orderText += `Phone: ${customerDetails.phone}\n`;
    orderText += `Address: ${customerDetails.address}\n`;
    orderText += `------------------------\n`;
    orderText += `*Order Items:*\n`;
    
    items.forEach(item => {
      orderText += `${item.quantity}x ${item.name} - Rs ${item.price * item.quantity}\n`;
    });
    
    orderText += `------------------------\n`;
    orderText += `*Total: Rs ${cartTotal}*\n`;

    // Instagram does not support auto-pasting, so we use the clipboard
    try {
      await navigator.clipboard.writeText(orderText);
      alert("Order details copied to your clipboard! 📋\n\nInstagram doesn't allow automatic pasting, so please PASTE the message in the chat to send your order!");
      window.open("https://www.instagram.com/cravestudio55", "_blank");
      
      clearCart();
      setIsCartOpen(false);
      setCustomerDetails({ name: '', phone: '', address: '' });
    } catch (err) {
      alert("Failed to copy order details. Please try again.");
    }
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Cart Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-crave-dark border-l border-gray-800 shadow-2xl z-[101] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-800 flex items-center justify-between bg-crave-black">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-crave-gold" />
                <h2 className="text-2xl font-heading font-bold text-white">Your Cravings</h2>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
                  <ShoppingBag className="w-16 h-16 opacity-20" />
                  <p className="text-lg">Your cart is empty.</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="text-crave-gold hover:underline"
                  >
                    Start adding items
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between bg-crave-black p-4 rounded-2xl border border-gray-800">
                      <div className="flex-1">
                        <h4 className="text-white font-bold">{item.name}</h4>
                        <p className="text-crave-gold font-medium">Rs {item.price}</p>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3 bg-crave-dark rounded-full p-1 border border-gray-700">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-crave-neon transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="text-white font-medium w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-crave-gold hover:text-black transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-500 hover:text-crave-neon transition-colors p-2"
                          title="Remove item"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Checkout Section */}
            {items.length > 0 && (
              <div className="p-6 bg-crave-black border-t border-gray-800">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-400 text-lg">Total</span>
                  <span className="text-3xl font-heading font-bold text-white">Rs {cartTotal}</span>
                </div>

                <form onSubmit={handleCheckout} className="space-y-4">
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={customerDetails.name}
                    onChange={(e) => setCustomerDetails({...customerDetails, name: e.target.value})}
                    className="w-full bg-crave-dark border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-crave-gold transition-colors"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    value={customerDetails.phone}
                    onChange={(e) => setCustomerDetails({...customerDetails, phone: e.target.value})}
                    className="w-full bg-crave-dark border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-crave-gold transition-colors"
                  />
                  <textarea
                    required
                    placeholder="Delivery Address"
                    value={customerDetails.address}
                    onChange={(e) => setCustomerDetails({...customerDetails, address: e.target.value})}
                    className="w-full bg-crave-dark border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-crave-gold transition-colors resize-none h-24"
                  />
                  
                  <div className="flex flex-col gap-3 mt-4">
                    <button 
                      type="submit"
                      disabled={!customerDetails.name || !customerDetails.phone || !customerDetails.address}
                      className="w-full bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 hover:opacity-90 disabled:opacity-50 text-white py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg"
                    >
                      <Instagram className="w-5 h-5" />
                      Checkout via Instagram
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
