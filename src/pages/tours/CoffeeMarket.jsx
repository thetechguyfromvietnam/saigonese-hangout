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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 ${
            isMorning ? 'text-[#0f3e2c]' : 'text-white'
          }`}>
            Coffee & Market Tour Experience
          </h2>
          <p className={`text-sm sm:text-base md:text-lg ${
            isMorning ? 'text-gray-700' : 'text-gray-300'
          } max-w-3xl mx-auto`}>
            Discover Saigon's coffee culture and vibrant markets with our guided tours, featuring authentic local experiences.
          </p>
        </div>

        {/* Single Tour Option */}
        <div className={`max-w-2xl mx-auto rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 ${
          isMorning 
            ? 'bg-white border border-gray-200' 
            : 'bg-gray-800 border border-gray-700'
        }`}>
          <div className="p-6 sm:p-8">
            <h3 className={`text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center ${
              isMorning ? 'text-[#0f3e2c]' : 'text-white'
            }`}>
              Coffee & Market Tour
            </h3>
            <p className={`text-base sm:text-lg mb-6 sm:mb-8 text-center ${
              isMorning ? 'text-gray-600' : 'text-gray-300'
            }`}>
              Perfect introduction to Vietnamese coffee culture and local market experiences.
            </p>
            <ul className={`text-sm sm:text-base space-y-3 mb-8 sm:mb-10 ${
              isMorning ? 'text-gray-600' : 'text-gray-300'
            }`}>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Visit 3 traditional coffee shops</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Local market exploration</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Tropical fruit tasting</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Vietnamese coffee brewing demo</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Professional English-speaking guide</span>
              </li>
            </ul>
            <Link
              to="/booking/coffee/basic"
              className={`block w-full text-center px-6 sm:px-8 py-4 sm:py-5 rounded-lg font-semibold transition-all duration-300 text-lg sm:text-xl ${
                isMorning
                  ? 'bg-[#0f3e2c] text-white hover:bg-[#0f3e2c]/90 hover:shadow-lg'
                  : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg'
              }`}
            >
              Book Coffee & Market Tour
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeMarket;