import React from 'react';
import { Link } from 'react-router-dom';

const CoffeeMarket = ({ theme }) => {
  const isMorning = theme === "morning";

  return (
    <div className={`min-h-screen ${isMorning ? 'bg-gradient-to-br from-amber-50 to-orange-50' : 'bg-gradient-to-br from-slate-900 to-gray-900'} transition-all duration-500`}>
      {/* Hero Section */}
      <div className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        <img 
          src="/images/morning-tours/coffee-market-tour/background.jpg" 
          alt="Coffee & Market Tour" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 sm:px-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Coffee & Market Tour
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              Taste Vietnamese coffee and explore hidden markets to try tropical fruits in authentic local settings.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 ${
            isMorning ? 'text-[#0f3e2c]' : 'text-white'
          }`}>
            Choose Your Experience
          </h2>
          <p className={`text-sm sm:text-base md:text-lg ${
            isMorning ? 'text-gray-700' : 'text-gray-300'
          } max-w-3xl mx-auto`}>
            Discover Saigon's coffee culture and vibrant markets with our guided tours, featuring authentic local experiences.
          </p>
        </div>

        {/* Tour Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Basic Tour */}
          <div className={`rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 ${
            isMorning 
              ? 'bg-white border border-gray-200' 
              : 'bg-gray-800 border border-gray-700'
          }`}>
            <div className="p-4 sm:p-6">
              <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 ${
                isMorning ? 'text-[#0f3e2c]' : 'text-white'
              }`}>
                Basic Coffee & Market Tour
              </h3>
              <p className={`text-sm sm:text-base mb-4 sm:mb-6 ${
                isMorning ? 'text-gray-600' : 'text-gray-300'
              }`}>
                Perfect introduction to Vietnamese coffee culture and local market experiences.
              </p>
              <ul className={`text-xs sm:text-sm space-y-2 mb-6 sm:mb-8 ${
                isMorning ? 'text-gray-600' : 'text-gray-300'
              }`}>
                <li>• Visit 3 traditional coffee shops</li>
                <li>• Local market exploration</li>
                <li>• Tropical fruit tasting</li>
                <li>• Vietnamese coffee brewing demo</li>
                <li>• Professional English-speaking guide</li>
              </ul>
              <Link
                to="/booking/coffee/basic"
                className={`block w-full text-center px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 ${
                  isMorning
                    ? 'bg-[#0f3e2c] text-white hover:bg-[#0f3e2c]/90 hover:shadow-lg'
                    : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg'
                }`}
              >
                Book Basic Tour
              </Link>
            </div>
          </div>

          {/* Premium Tour */}
          <div className={`rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 ${
            isMorning 
              ? 'bg-white border border-gray-200' 
              : 'bg-gray-800 border border-gray-700'
          }`}>
            <div className="p-4 sm:p-6">
              <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 ${
                isMorning ? 'text-[#0f3e2c]' : 'text-white'
              }`}>
                Premium Coffee & Market Tour
              </h3>
              <p className={`text-sm sm:text-base mb-4 sm:mb-6 ${
                isMorning ? 'text-gray-600' : 'text-gray-300'
              }`}>
                Exclusive experience with private coffee tastings and premium market access.
              </p>
              <ul className={`text-xs sm:text-sm space-y-2 mb-6 sm:mb-8 ${
                isMorning ? 'text-gray-600' : 'text-gray-300'
              }`}>
                <li>• All Basic Tour inclusions</li>
                <li>• Private coffee cupping session</li>
                <li>• Premium coffee bean selection</li>
                <li>• Exclusive market vendor access</li>
                <li>• Traditional Vietnamese breakfast</li>
                <li>• Coffee beans souvenir pack</li>
                <li>• Small group (max 6 people)</li>
              </ul>
              <Link
                to="/booking/coffee/premium"
                className={`block w-full text-center px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 ${
                  isMorning
                    ? 'bg-gradient-to-r from-[#ffcd3c] to-[#ff914d] text-[#0f3e2c] hover:opacity-90 hover:shadow-lg'
                    : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90 hover:shadow-lg'
                }`}
              >
                Book Premium Tour
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeMarket;
