import React, { useState } from 'react';
import Footer from "../components/Footer.jsx";

const Saigonir = ({ theme }) => {
  const isMorning = theme === "morning";
  
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    notes: ''
  });

  const products = [
    {
      id: 1,
      name: "Saigonese Hang-out T-Shirt",
      description: "Premium cotton t-shirt with our signature Saigonese Hang-out logo. Perfect for remembering your Saigon adventure!",
      price: 199000,
      images: [
        "/images/sourvenirs/shirts/shirt1.jpg",
        "/images/sourvenirs/shirts/shirt2.jpg",
        "/images/sourvenirs/shirts/shirt3.jpg"
      ],
      category: "Apparel",
      sizes: ["L", "XL", "2XL", "3XL"],
      colors: ["Black"]
    },
    {
      id: 2,
      name: "Vietnamese Coffee Beans",
      description: "Authentic Vietnamese coffee beans from the Central Highlands. Rich, bold flavor that captures the essence of Saigon's coffee culture.",
      price: 249000,
      images: [
        "/images/sourvenirs/coffee/1.jpg",
        "/images/sourvenirs/coffee/2.jpg",
        "/images/sourvenirs/coffee/3.jpg",
        "/images/sourvenirs/coffee/4.jpg",
        "/images/sourvenirs/coffee/5.jpg",
        "/images/sourvenirs/coffee/6.jpg",
      ],
      category: "Food & Beverages",
      weight: "500g",
      origin: "Central Highlands, Vietnam"
    },
    {
      id: 3,
      name: "Small Vietnamese Traditional Hat",
      description: "Buy for your lovely pet at home. Truly Vietnamese",
      price: 50000,
      images: [
        "/images/sourvenirs/hat/2.png",
        "/images/sourvenirs/hat/3.png",
        "/images/sourvenirs/hat/1.png",
      ],
      category: "Hat",
      weight: "5g",
    }
  ];

  const addToCart = (product, selectedOptions = {}) => {
    const cartItem = {
      ...product,
      quantity: 1,
      selectedOptions
    };
    
    // Check if item already exists in cart with same options
    const existingItemIndex = cart.findIndex(item => 
      item.id === product.id && 
      JSON.stringify(item.selectedOptions) === JSON.stringify(selectedOptions)
    );

    if (existingItemIndex > -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, cartItem]);
    }
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(index);
      return;
    }
    const updatedCart = [...cart];
    updatedCart[index].quantity = newQuantity;
    setCart(updatedCart);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const sendOrderToWhatsApp = () => {
    let message = "🛍️ *NEW ORDER - Saigonese Hang-out Souvenirs*\n\n";
    message += `👤 *Customer Information:*\n`;
    message += `Name: ${customerInfo.name}\n`;
    message += `Phone: ${customerInfo.phone}\n`;
    message += `Email: ${customerInfo.email}\n`;
    message += `Address: ${customerInfo.address}\n`;
    if (customerInfo.notes) {
      message += `Notes: ${customerInfo.notes}\n`;
    }
    
    message += `\n📦 *Order Details:*\n`;
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   Quantity: ${item.quantity}\n`;
      message += `   Price: ${formatPrice(item.price)} each\n`;
      if (item.selectedOptions.size) {
        message += `   Size: ${item.selectedOptions.size}\n`;
      }
      if (item.selectedOptions.color) {
        message += `   Color: ${item.selectedOptions.color}\n`;
      }
      message += `   Subtotal: ${formatPrice(item.price * item.quantity)}\n\n`;
    });
    
    message += `💰 *Total Amount: ${formatPrice(getTotalPrice())}*\n\n`;
    message += `Thank you for choosing Saigonese Hang-out! 🇻🇳`;

    const whatsappUrl = `https://wa.me/+84978270038?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form and cart
    setCart([]);
    setCustomerInfo({ name: '', phone: '', email: '', address: '', notes: '' });
    setShowOrderForm(false);
    setShowCart(false);
  };

  const ProductCard = ({ product }) => {
    const [selectedOptions, setSelectedOptions] = useState({});
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleMouseEnter = () => {
      if (product.images && product.images.length > 1) {
        setCurrentImageIndex(1);
      }
    };

    const handleMouseLeave = () => {
      setCurrentImageIndex(0);
    };

    const handleImageClick = () => {
      if (product.images && product.images.length > 2) {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
        );
      }
    };

  return (
      <div
        className={`rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
          isMorning
            ? "bg-white border border-gray-100"
            : "bg-white/10 border border-white/20 backdrop-blur-sm"
        }`}
      >
        <div 
          className="aspect-square bg-gray-100 rounded-xl mb-4 overflow-hidden relative cursor-pointer group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleImageClick}
        >
          <img
            src={product.images ? product.images[currentImageIndex] : product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          />
          
          {/* Image indicator dots */}
          {product.images && product.images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
              {product.images.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? "bg-white shadow-lg" 
                      : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
          
          {/* Hover overlay with instructions */}
          {product.images && product.images.length > 1 && (
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                Click to view more
              </div>
            </div>
          )}
        </div>
        
        <h3
          className={`text-xl font-bold mb-2 ${
            isMorning ? "text-[#0f3e2c]" : "text-white"
          }`}
        >
          {product.name}
        </h3>
        
        <p
          className={`text-sm mb-4 leading-relaxed ${
            isMorning ? "text-gray-700" : "text-gray-300"
          }`}
        >
          {product.description}
        </p>

        {product.sizes && (
          <div className="mb-4">
            <label
              className={`block text-sm font-semibold mb-2 ${
                isMorning ? "text-[#0f3e2c]" : "text-white"
              }`}
            >
              Size:
            </label>
            <div className="flex gap-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedOptions({...selectedOptions, size})}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition ${
                    selectedOptions.size === size
                      ? isMorning
                        ? "bg-[#0f3e2c] text-white"
                        : "bg-[#4cc9f0] text-[#0b0b14]"
                      : isMorning
                        ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {product.colors && (
          <div className="mb-4">
            <label
              className={`block text-sm font-semibold mb-2 ${
                isMorning ? "text-[#0f3e2c]" : "text-white"
              }`}
            >
              Color:
            </label>
            <div className="flex gap-2">
              {product.colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedOptions({...selectedOptions, color})}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition ${
                    selectedOptions.color === color
                      ? isMorning
                        ? "bg-[#0f3e2c] text-white"
                        : "bg-[#4cc9f0] text-[#0b0b14]"
                      : isMorning
                        ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  {color}
                </button>
          ))}
        </div>
      </div>
        )}

        {product.weight && (
          <p
            className={`text-sm mb-4 ${
              isMorning ? "text-gray-600" : "text-gray-400"
            }`}
          >
            Weight: {product.weight}
          </p>
        )}

        <div className="flex justify-between items-center">
          <span
            className={`text-2xl font-bold ${
              isMorning ? "text-[#0f3e2c]" : "text-[#ffcd3c]"
            }`}
          >
            {formatPrice(product.price)}
          </span>
          <button
            onClick={() => addToCart(product, selectedOptions)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
              isMorning
                ? "bg-[#0f3e2c] text-white hover:bg-[#1a5a3f]"
                : "bg-[#4cc9f0] text-[#0b0b14] hover:bg-[#3ab5d9]"
            }`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className={`relative w-full h-[60vh] bg-center bg-cover flex items-center justify-center transition-all duration-700 ${
          isMorning ? "bg-gradient-to-br from-[#fffaf4] to-[#f0e6d2]" : "bg-gradient-to-br from-[#0b0b14] to-[#1a1a2e]"
        }`}
      >
        <div className="text-center px-6">
          <h1
            className={`text-5xl md:text-7xl font-extrabold mb-6 ${
              isMorning ? "text-[#0f3e2c]" : "text-[#4cc9f0]"
            }`}
          >
            Saigon{" "}
            <span
              className={`${
                isMorning ? "text-[#c2a46b]" : "text-[#ffcd3c]"
              }`}
            >
              Souvenirs
            </span>
          </h1>
          <p
            className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
              isMorning ? "text-gray-700" : "text-gray-300"
            }`}
          >
            Take a piece of Saigon home with you! Premium souvenirs and local products 
            that capture the essence of our beautiful city. 🇻🇳
          </p>
        </div>
      </section>

      {/* Shopping Cart Button */}
      {cart.length > 0 && (
        <button
          onClick={() => setShowCart(true)}
          className={`fixed bottom-6 right-6 z-50 px-6 py-3 rounded-full shadow-lg font-semibold transition-all duration-300 hover:scale-105 ${
            isMorning
              ? "bg-[#0f3e2c] text-white hover:bg-[#1a5a3f]"
              : "bg-[#4cc9f0] text-[#0b0b14] hover:bg-[#3ab5d9]"
          }`}
        >
          🛒 Cart ({cart.length}) - {formatPrice(getTotalPrice())}
        </button>
      )}

      {/* Products Section */}
      <section
        className={`py-20 px-6 md:px-16 transition-all duration-700 ${
          isMorning ? "bg-[#fffaf4] text-gray-800" : "bg-[#0b0b14] text-white"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-6 ${
                isMorning ? "text-[#0f3e2c]" : "text-[#4cc9f0]"
              }`}
            >
              Featured Products
            </h2>
            <p
              className={`text-lg md:text-xl max-w-4xl mx-auto leading-relaxed ${
                isMorning ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Carefully selected items that represent the best of Saigon culture and flavors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div
            className={`w-full max-w-2xl max-h-[80vh] rounded-2xl p-6 overflow-y-auto ${
              isMorning ? "bg-white" : "bg-[#1a1a2e]"
            }`}
          >
            <div className="flex justify-between items-center mb-6">
              <h3
                className={`text-2xl font-bold ${
                  isMorning ? "text-[#0f3e2c]" : "text-white"
                }`}
              >
                Shopping Cart
              </h3>
              <button
                onClick={() => setShowCart(false)}
                className={`text-2xl ${
                  isMorning ? "text-gray-600" : "text-gray-400"
                }`}
              >
                ×
              </button>
            </div>

            {cart.length === 0 ? (
              <p
                className={`text-center py-8 ${
                  isMorning ? "text-gray-600" : "text-gray-400"
                }`}
              >
                Your cart is empty
              </p>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cart.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-4 p-4 rounded-xl ${
                        isMorning ? "bg-gray-50" : "bg-white/10"
                      }`}
                    >
                      <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden">
                        <img
                          src={item.images ? item.images[0] : item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4
                          className={`font-semibold ${
                            isMorning ? "text-[#0f3e2c]" : "text-white"
                          }`}
                        >
                          {item.name}
                        </h4>
                        {item.selectedOptions.size && (
                          <p
                            className={`text-sm ${
                              isMorning ? "text-gray-600" : "text-gray-400"
                            }`}
                          >
                            Size: {item.selectedOptions.size}
                          </p>
                        )}
                        {item.selectedOptions.color && (
                          <p
                            className={`text-sm ${
                              isMorning ? "text-gray-600" : "text-gray-400"
                            }`}
                          >
                            Color: {item.selectedOptions.color}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(index, item.quantity - 1)}
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            isMorning
                              ? "bg-gray-200 text-gray-700"
                              : "bg-white/20 text-white"
                          }`}
                        >
                          -
                        </button>
                        <span
                          className={`w-8 text-center ${
                            isMorning ? "text-[#0f3e2c]" : "text-white"
                          }`}
                        >
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            isMorning
                              ? "bg-gray-200 text-gray-700"
                              : "bg-white/20 text-white"
                          }`}
                        >
                          +
                        </button>
                      </div>
                      <div className="text-right">
                        <p
                          className={`font-semibold ${
                            isMorning ? "text-[#0f3e2c]" : "text-[#ffcd3c]"
                          }`}
                        >
                          {formatPrice(item.price * item.quantity)}
                        </p>
                        <button
                          onClick={() => removeFromCart(index)}
                          className={`text-sm ${
                            isMorning ? "text-red-600" : "text-red-400"
                          }`}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span
                      className={`text-xl font-bold ${
                        isMorning ? "text-[#0f3e2c]" : "text-white"
                      }`}
                    >
                      Total:
                    </span>
                    <span
                      className={`text-2xl font-bold ${
                        isMorning ? "text-[#0f3e2c]" : "text-[#ffcd3c]"
                      }`}
                    >
                      {formatPrice(getTotalPrice())}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setShowCart(false);
                    setShowOrderForm(true);
                  }}
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                    isMorning
                      ? "bg-[#0f3e2c] text-white hover:bg-[#1a5a3f]"
                      : "bg-[#4cc9f0] text-[#0b0b14] hover:bg-[#3ab5d9]"
                  }`}
                >
                  Proceed to Order
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Order Form Modal */}
      {showOrderForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div
            className={`w-full max-w-2xl max-h-[80vh] rounded-2xl p-6 overflow-y-auto ${
              isMorning ? "bg-white" : "bg-[#1a1a2e]"
            }`}
          >
            <div className="flex justify-between items-center mb-6">
              <h3
                className={`text-2xl font-bold ${
                  isMorning ? "text-[#0f3e2c]" : "text-white"
                }`}
              >
                Order Information
              </h3>
              <button
                onClick={() => setShowOrderForm(false)}
                className={`text-2xl ${
                  isMorning ? "text-gray-600" : "text-gray-400"
                }`}
              >
                ×
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label
                  className={`block text-sm font-semibold mb-2 ${
                    isMorning ? "text-[#0f3e2c]" : "text-white"
                  }`}
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  value={customerInfo.name}
                  onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    isMorning
                      ? "border-gray-300 bg-white text-gray-900"
                      : "border-white/20 bg-white/10 text-white"
                  }`}
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-semibold mb-2 ${
                    isMorning ? "text-[#0f3e2c]" : "text-white"
                  }`}
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={customerInfo.phone}
                  onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    isMorning
                      ? "border-gray-300 bg-white text-gray-900"
                      : "border-white/20 bg-white/10 text-white"
                  }`}
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-semibold mb-2 ${
                    isMorning ? "text-[#0f3e2c]" : "text-white"
                  }`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  value={customerInfo.email}
                  onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    isMorning
                      ? "border-gray-300 bg-white text-gray-900"
                      : "border-white/20 bg-white/10 text-white"
                  }`}
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-semibold mb-2 ${
                    isMorning ? "text-[#0f3e2c]" : "text-white"
                  }`}
                >
                  Delivery Address *
                </label>
                <textarea
                  value={customerInfo.address}
                  onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                  rows={3}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    isMorning
                      ? "border-gray-300 bg-white text-gray-900"
                      : "border-white/20 bg-white/10 text-white"
                  }`}
                  placeholder="Enter your delivery address"
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-semibold mb-2 ${
                    isMorning ? "text-[#0f3e2c]" : "text-white"
                  }`}
                >
                  Special Instructions
                </label>
                <textarea
                  value={customerInfo.notes}
                  onChange={(e) => setCustomerInfo({...customerInfo, notes: e.target.value})}
                  rows={3}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    isMorning
                      ? "border-gray-300 bg-white text-gray-900"
                      : "border-white/20 bg-white/10 text-white"
                  }`}
                  placeholder="Any special requests or notes for your order"
                />
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-green-50 border border-green-200">
              <p className="text-sm text-green-800">
                <strong>📱 Order Process:</strong> After filling this form, we'll send your order details to our WhatsApp. 
                We'll confirm your order and arrange delivery within 24-48 hours.
              </p>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setShowOrderForm(false)}
                className={`flex-1 py-3 rounded-xl font-semibold border-2 ${
                  isMorning
                    ? "border-gray-300 text-gray-700 hover:bg-gray-50"
                    : "border-white/20 text-white hover:bg-white/10"
                }`}
              >
                Back to Cart
              </button>
              <button
                onClick={sendOrderToWhatsApp}
                disabled={!customerInfo.name || !customerInfo.phone || !customerInfo.address}
                className={`flex-1 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  !customerInfo.name || !customerInfo.phone || !customerInfo.address
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-green-500 text-white hover:bg-green-600"
                }`}
              >
                📱 Send Order via WhatsApp
              </button>
        </div>
      </div>
    </div>
      )}

      <Footer />
    </>
  );
};

export default Saigonir;