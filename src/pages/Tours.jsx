import React from "react";
import Footer from "../components/Footer.jsx";
import TourCard from "../components/TourCard.jsx";

const Tours = ({ theme }) => {
  const isMorning = theme === "morning";

  const tours = [
    {
      category: "🌅 Morning Tours",
      tours: [
        {
          title: "History Tour",
          desc: "Learn about the history and culture life of Sài Gòn. Visit historic landmarks, learn about Vietnam's past, and discover the stories that shaped this vibrant city.",
          img: "/images/morning-tours/history-tour/background.jpg",
          slug: "history",
        },
        {
          title: "Coffee & Market",
          desc: "Taste Vietnamese coffee and explore hidden markets to try tropical fruits. Experience authentic Vietnamese coffee culture and local trading customs.",
          img: "/images/morning-tours/coffee-market-tour/background.jpg",
          slug: "coffee",
        },
      ]
    },
    {
      category: "🌙 Night Tours",
      tours: [
        {
          title: "Street Food Tour",
          desc: "Taste authentic Saigonese dishes in neon-lit alleys. Discover Saigon's incredible street food scene with a local guide.",
          img: "/images/night-tours/street-food-tour/munchies-bg.jpg",
          slug: "streetfood",
        },
        {
          title: "Night-Life Tour",
          desc: "Drinking, Bar, Karaoke, Club. Experience Saigon's vibrant nightlife! Visit the best bars, clubs, and entertainment venues.",
          img: "/images/night-tours/night-life-tour/night-life-tour.jpg",
          slug: "nightlife",
        },
      ]
    },
    {
      category: "🎯 Specialized Tours",
      tours: [
        {
          title: "Photography Tour",
          desc: "Capture the beauty of Saigon with a professional photography tour. Visit the most photogenic spots and learn photography techniques from local experts.",
          img: "/images/morning-tours/morning-background.jpg",
          slug: "photography",
        },
        {
          title: "Cu Chi Tunnel on Motorcycle",
          desc: "Adventure to Cu Chi Tunnels by motorcycle! Experience the historic underground network and learn about Vietnam's wartime history with an exciting motorcycle journey.",
          img: "/images/morning-tours/history-tour/background.jpg",
          slug: "cu-chi-motorcycle",
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20 sm:pt-24 md:pt-28">
      {/* Hero Section */}
      <section className={`relative w-full h-[50vh] sm:h-[55vh] md:h-[60vh] flex items-center justify-center ${
        isMorning ? "bg-gradient-to-br from-[#fffaf4] to-[#f0e6d2]" : "bg-gradient-to-br from-[#0b0b14] via-[#1a052e] to-[#3d0f55]"
      }`}>
        <div className="text-center px-4 sm:px-6">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6 ${
            isMorning ? "text-[#0f3e2c]" : "text-white"
          }`}>
            All <span className={isMorning ? "text-[#c2a46b]" : "text-[#ffcd3c]"}>Tours</span>
          </h1>
          <p className={`text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed ${
            isMorning ? "text-gray-700" : "text-gray-300"
          }`}>
            Discover Saigon with our amazing tour collection! 
            From morning explorations to night adventures - we have the perfect tour for every traveler! 🇻🇳
          </p>
        </div>
      </section>

      {/* Tours Content */}
      <section className={`py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16 ${
        isMorning ? "bg-[#fffaf4] text-gray-800" : "bg-[#0b0b14] text-gray-200"
      }`}>
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 ${
              isMorning ? "text-[#0f3e2c]" : "text-white"
            }`}>
              Explore Saigon Your Way
            </h2>
            <p className={`text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed ${
              isMorning ? "text-gray-700" : "text-gray-300"
            }`}>
              Choose from our carefully curated collection of tours. Each experience is designed to show you the real Saigon - 
              authentic, vibrant, and unforgettable.
            </p>
          </div>

          {/* Tours Grid */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {tours.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3
                  className={`text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center ${
                    isMorning ? "text-[#0f3e2c]" : "text-[#ffcd3c]"
                  }`}
                >
                  {category.category}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 justify-items-center">
                  {category.tours.map((tour, tourIndex) => (
                    <TourCard 
                      key={tourIndex}
                      title={tour.title}
                      desc={tour.desc}
                      img={tour.img}
                      slug={tour.slug}
                      theme={theme}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Us Section */}
          <div
            className={`mt-12 sm:mt-16 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center ${
              isMorning
                ? "bg-gradient-to-r from-[#c2a46b] to-[#d4b574] text-white"
                : "bg-gradient-to-r from-[#4cc9f0] to-[#4361ee] text-white"
            }`}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
              🎯 Why Choose Our Tours?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-left">
              <div className="bg-white/20 rounded-lg sm:rounded-xl p-4 sm:p-6 backdrop-blur-sm">
                <h4 className="font-semibold mb-2 text-sm sm:text-base">🏠 Local Expertise</h4>
                <p className="text-xs sm:text-sm">Born and raised in Saigon, we know every hidden gem, best food spot, and local secret!</p>
              </div>
              <div className="bg-white/20 rounded-lg sm:rounded-xl p-4 sm:p-6 backdrop-blur-sm">
                <h4 className="font-semibold mb-2 text-sm sm:text-base">👥 Small Groups</h4>
                <p className="text-xs sm:text-sm">Maximum 8 people per tour for a personalized, intimate experience with locals.</p>
              </div>
              <div className="bg-white/20 rounded-lg sm:rounded-xl p-4 sm:p-6 backdrop-blur-sm">
                <h4 className="font-semibold mb-2 text-sm sm:text-base">💯 Authentic Experience</h4>
                <p className="text-xs sm:text-sm">No tourist traps! We take you where locals go and show you the real Saigon.</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 sm:mt-16">
            <p
              className={`text-base sm:text-lg md:text-xl mb-6 sm:mb-8 ${
                isMorning ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Ready to experience the real Saigon? Book your perfect tour today!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
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
                className={`px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 ${
                  isMorning
                    ? "bg-[#0f3e2c] text-white hover:bg-[#1a5a3f]"
                    : "bg-[#4cc9f0] text-[#0b0b14] hover:bg-[#3ab5d9]"
                }`}
              >
                📞 Contact Us for Tours
              </button>
              <a
                href="/saigonir"
                className={`px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 border-2 ${
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
