import React from "react";
import Footer from "../components/Footer.jsx";

const Tours = ({ theme }) => {
  const isMorning = theme === "morning";

  const tours = [
    {
      category: "🌅 Morning Tours",
      tours: [
        {
          title: "History Tour",
          description: "Learn about the history and culture life of Sài Gòn. Visit historic landmarks, learn about Vietnam's past, and discover the stories that shaped this vibrant city.",
          duration: "3-4 hours",
          price: "From $25",
          highlights: ["Independence Palace", "War Remnants Museum", "Notre Dame Cathedral", "Central Post Office"],
          image: "/images/morning-tours/history-tour/background.jpg",
          slug: "history",
          options: ["Basic", "Premium"]
        },
        {
          title: "Coffee & Market",
          description: "Taste Vietnamese coffee and explore hidden markets to try tropical fruits. Experience authentic Vietnamese coffee culture and local trading customs.",
          duration: "2-3 hours", 
          price: "From $20",
          highlights: ["Local Coffee Shops", "Ben Thanh Market", "Tropical Fruits", "Coffee Tasting"],
          image: "/images/morning-tours/coffee-market-tour/background.jpg",
          slug: "coffee",
          options: ["Basic", "Premium"]
        },
      ]
    },
    {
      category: "🌙 Night Tours",
      tours: [
        {
          title: "Street Food Tour",
          description: "Taste authentic Saigonese dishes in neon-lit alleys. Discover Saigon's incredible street food scene with a local guide.",
          duration: "2-3 hours",
          price: "From $25",
          highlights: ["Pho", "Banh Mi", "Spring Rolls", "Local Desserts"],
          image: "/images/night-tours/street-food-tour/munchies-bg.jpg",
          slug: "food",
          options: ["Basic", "Premium"]
        },
        {
          title: "Night-Life Tour",
          description: "Drinking, Bar, Karaoke, Club. Experience Saigon's vibrant nightlife! Visit the best bars, clubs, and entertainment venues.",
          duration: "4-6 hours",
          price: "From $30",
          highlights: ["Rooftop Bars", "Nightclubs", "Live Music", "Karaoke"],
          image: "/images/night-tours/night-life-tour.jpg",
          slug: "nightlife",
          options: ["Basic", "Premium"]
        },
      ]
    },
    {
      category: "🎯 Specialized Tours",
      tours: [
        {
          title: "Photography Tour",
          description: "Capture the beauty of Saigon with a professional photography tour. Visit the most photogenic spots and learn photography techniques from local experts.",
          duration: "4-5 hours",
          price: "From $35",
          highlights: ["Golden Hour Shots", "Street Photography", "Architecture", "Local Life"],
          image: "/images/morning-tours/morning-background.jpg",
          slug: "photography",
          options: ["Basic", "Premium"]
        },
        {
          title: "Cu Chi Tunnel on Motorcycle",
          description: "Adventure to Cu Chi Tunnels by motorcycle! Experience the historic underground network and learn about Vietnam's wartime history with an exciting motorcycle journey.",
          duration: "6-8 hours",
          price: "From $45",
          highlights: ["Motorcycle Adventure", "Cu Chi Tunnels", "War History", "Underground Exploration"],
          image: "/images/morning-tours/history-tour/background.jpg",
          slug: "cu-chi-motorcycle",
          options: ["Basic", "Premium"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-28">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] bg-gradient-to-br from-[#fffaf4] to-[#f0e6d2] flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-[#0f3e2c]">
            All <span className="text-[#c2a46b]">Tours</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-700">
            Discover Saigon with our amazing tour collection! 
            From morning explorations to night adventures - we have the perfect tour for every traveler! 🇻🇳
          </p>
        </div>
      </section>

      {/* Tours Content */}
      <section className="py-20 px-6 md:px-16 bg-[#fffaf4] text-gray-800">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0f3e2c]">
              Explore Saigon Your Way
            </h2>
            <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-gray-700">
              Choose from our carefully curated collection of tours. Each experience is designed to show you the real Saigon - 
              authentic, vibrant, and unforgettable.
            </p>
          </div>

          {/* Tours Grid */}
          <div className="space-y-12">
            {tours.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3
                  className={`text-3xl font-bold mb-8 text-center ${
                    isMorning ? "text-[#0f3e2c]" : "text-[#ffcd3c]"
                  }`}
                >
                  {category.category}
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
                  {category.tours.map((tour, tourIndex) => (
                    <div
                      key={tourIndex}
                      className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ${
                        isMorning
                          ? "bg-white border border-gray-100"
                          : "bg-white/10 border border-white/20 backdrop-blur-sm"
                      }`}
                    >
                      {/* Tour Image */}
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={tour.image}
                          alt={tour.title}
                          className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                        />
                      </div>
                      
                      {/* Tour Content */}
                      <div className="p-6">
                        <h4
                          className={`text-xl font-bold mb-3 ${
                            isMorning ? "text-[#0f3e2c]" : "text-white"
                          }`}
                        >
                          {tour.title}
                        </h4>
                        
                        <p
                          className={`text-sm mb-4 leading-relaxed ${
                            isMorning ? "text-gray-700" : "text-gray-300"
                          }`}
                        >
                          {tour.description}
                        </p>

                        {/* Tour Details */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <span
                              className={`text-xs font-semibold ${
                                isMorning ? "text-[#0f3e2c]" : "text-[#4cc9f0]"
                              }`}
                            >
                              ⏱️ Duration
                            </span>
                            <p
                              className={`text-sm ${
                                isMorning ? "text-gray-600" : "text-gray-400"
                              }`}
                            >
                              {tour.duration}
                            </p>
                          </div>
                          <div>
                            <span
                              className={`text-xs font-semibold ${
                                isMorning ? "text-[#0f3e2c]" : "text-[#4cc9f0]"
                              }`}
                            >
                              💰 Price
                            </span>
                            <p
                              className={`text-sm ${
                                isMorning ? "text-gray-600" : "text-gray-400"
                              }`}
                            >
                              {tour.price}
                            </p>
                          </div>
                        </div>

                        {/* Highlights */}
                        <div className="mb-6">
                          <span
                            className={`text-xs font-semibold block mb-2 ${
                              isMorning ? "text-[#0f3e2c]" : "text-[#4cc9f0]"
                            }`}
                          >
                            ✨ Highlights
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {tour.highlights.map((highlight, index) => (
                              <span
                                key={index}
                                className={`text-xs px-2 py-1 rounded-full ${
                                  isMorning
                                    ? "bg-[#fffaf4] text-[#0f3e2c] border border-[#e6d7c3]"
                                    : "bg-white/10 text-gray-300 border border-white/20"
                                }`}
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Booking Options */}
                        <div className="space-y-2">
                          {tour.options.map((option, optionIndex) => (
                            <button
                              key={optionIndex}
                              onClick={() => {
                                if (tour.slug === "history") {
                                  window.location.href = option.toLowerCase() === "basic" 
                                    ? "/booking/history/basic" 
                                    : "/booking/history/premium";
                                } else if (tour.slug === "coffee") {
                                  window.location.href = option.toLowerCase() === "basic" 
                                    ? "/booking/coffee/basic" 
                                    : "/booking/coffee/premium";
                                } else {
                                  // For other tours, use WhatsApp booking
                                  const message = `🎯 *BOOK TOUR: ${tour.title} - ${option}*\n\n` +
                                    `📝 ${tour.description}\n\n` +
                                    `⏱️ Duration: ${tour.duration}\n` +
                                    `💰 Price: ${tour.price}\n` +
                                    `✨ Highlights: ${tour.highlights.join(', ')}\n\n` +
                                    `I would like to book the ${option} option for this tour. Please provide more details and availability.\n\n` +
                                    `Thank you! 🇻🇳`;
                                  
                                  const whatsappUrl = `https://wa.me/+84978270038?text=${encodeURIComponent(message)}`;
                                  window.open(whatsappUrl, '_blank');
                                }
                              }}
                              className={`w-full py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                                option.toLowerCase() === "basic"
                                  ? isMorning
                                    ? "bg-[#c2a46b] text-white hover:bg-[#b8945a]"
                                    : "bg-[#ffcd3c] text-[#0b0b14] hover:bg-[#e6b835]"
                                  : isMorning
                                    ? "bg-[#0f3e2c] text-white hover:bg-[#1a5a3f]"
                                    : "bg-[#4cc9f0] text-[#0b0b14] hover:bg-[#3ab5d9]"
                              }`}
                            >
                              {option === "Basic" ? "📋 Basic Package" : "⭐ Premium Package"}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Us Section */}
          <div
            className={`mt-16 rounded-2xl p-8 text-center ${
              isMorning
                ? "bg-gradient-to-r from-[#c2a46b] to-[#d4b574] text-white"
                : "bg-gradient-to-r from-[#4cc9f0] to-[#4361ee] text-white"
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              🎯 Why Choose Our Tours?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="font-semibold mb-2">🏠 Local Expertise</h4>
                <p className="text-sm">Born and raised in Saigon, we know every hidden gem, best food spot, and local secret!</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="font-semibold mb-2">👥 Small Groups</h4>
                <p className="text-sm">Maximum 8 people per tour for a personalized, intimate experience with locals.</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="font-semibold mb-2">💯 Authentic Experience</h4>
                <p className="text-sm">No tourist traps! We take you where locals go and show you the real Saigon.</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p
              className={`text-lg md:text-xl mb-8 ${
                isMorning ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Ready to experience the real Saigon? Book your perfect tour today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const message = `🎯 *INTERESTED IN TOURS*\n\n` +
                    `I'm interested in booking a tour with Saigonese Hang-out!\n\n` +
                    `Please provide me with:\n` +
                    `- Available dates\n` +
                    `- Tour recommendations\n` +
                    `- Pricing details\n\n` +
                    `Thank you! 🇻🇳`;
                  
                  const whatsappUrl = `https://wa.me/+84978270038?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 ${
                  isMorning
                    ? "bg-[#0f3e2c] text-white hover:bg-[#1a5a3f]"
                    : "bg-[#4cc9f0] text-[#0b0b14] hover:bg-[#3ab5d9]"
                }`}
              >
                📞 Contact Us for Tours
              </button>
              <a
                href="/saigonir"
                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 border-2 ${
                  isMorning
                    ? "border-[#0f3e2c] text-[#0f3e2c] hover:bg-[#0f3e2c] hover:text-white"
                    : "border-[#4cc9f0] text-[#4cc9f0] hover:bg-[#4cc9f0] hover:text-[#0b0b14]"
                }`}
              >
                🛍️ Shop Souvenirs
              </a>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Tours;
