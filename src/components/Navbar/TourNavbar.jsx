
const TourNavbar = ({ theme }) => {
  const isMorning = theme === "morning";

  const tipCategories = isMorning
    ? [
        { name: "Cafes", icon: "☕", description: "Best local coffee spots" },
        { name: "Breakfast", icon: "🥐", description: "Morning food recommendations" },
        { name: "Clothes", icon: "👕", description: "Shopping for clothing" },
        { name: "Shoes", icon: "👟", description: "Footwear shopping tips" }
      ]
    : [
        { name: "Restaurant", icon: "🍽️", description: "Fine dining experiences" },
        { name: "Street Food", icon: "🍜", description: "Local street food gems" },
        { name: "Bar", icon: "🍺", description: "Best bars in Saigon" },
        { name: "Clubs", icon: "🎵", description: "Nightlife and clubs" }
      ];


  const handleTipClick = (category) => {
    const message = `🔓 *UNLOCK TIPS: ${category.name}*\n\n` +
      `${category.icon} ${category.description}\n\n` +
      `💰 Price: 24,000 VND (≈ $1 USD)\n` +
      `📖 Get insider tips for ${category.name.toLowerCase()} in Vietnam!\n\n` +
      `I would like to purchase this digital guide for ${category.name.toLowerCase()} tips.\n\n` +
      `Thank you! 🇻🇳`;
    
    const whatsappUrl = `https://wa.me/+84978270038?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <nav
      className={`fixed top-14 left-0 w-full py-3 z-40 backdrop-blur-md ${
        isMorning
          ? "bg-yellow-100/80 text-[#0f3e2c]"
          : "bg-[#0b0b14]/90 text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Unlock Tips Section */}
        <div className="text-center mb-3">
          <span
            className={`text-lg font-bold ${
              isMorning ? "text-[#0f3e2c]" : "text-[#4cc9f0]"
            }`}
          >
            🔓 Unlock Insider Tips - $1 each
          </span>
        </div>

        {/* Tip Categories */}
        <div className="flex justify-center gap-3 flex-wrap">
          {tipCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => handleTipClick(category)}
              className={`px-4 py-3 rounded-full text-sm font-medium border transition-all duration-300 shadow-sm hover:scale-105 ${
                isMorning
                  ? "border-[#c2a46b] bg-white/50 hover:bg-[#c2a46b] hover:text-white"
                  : "border-[#ffcd3c] bg-white/10 hover:bg-[#ffcd3c] hover:text-[#0b0b14]"
              }`}
              title={category.description}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default TourNavbar;
