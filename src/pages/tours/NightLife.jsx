import React from 'react';
import { Link } from 'react-router-dom';

const NightLife = ({ theme }) => {
  const isMorning = theme === "morning";

  return (
    <div className={`min-h-screen ${isMorning ? 'bg-gradient-to-br from-amber-50 to-orange-50' : 'bg-gradient-to-br from-slate-900 to-gray-900'} transition-all duration-500`}>
      {/* Hero Section */}
      <div className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        <img 
          src="/images/night-tours/night-life-tour/night-life-tour.jpg" 
          alt="Night Life Tour" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 sm:px-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Night Life Tour
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              Discover Saigon's legendary nightlife scene from sunset rooftop bars to premier clubs and experience the city's electric night atmosphere.
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
            Night Life Tour Experience
          </h2>
          <p className={`text-sm sm:text-base md:text-lg ${
            isMorning ? 'text-gray-700' : 'text-gray-300'
          } max-w-3xl mx-auto`}>
            Experience Saigon's legendary nightlife scene with our premium guided tours, featuring sunset rooftop bars, popular bars, restaurants with live EDM music, and premier clubs in the city's most vibrant districts.
          </p>
        </div>

        {/* Single Tour Option */}
        <div className={`max-w-2xl mx-auto rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 ${
          isMorning 
            ? 'bg-white border border-gray-200' 
            : 'bg-gray-800 border border-gray-700'
        }`}>
          <div className="p-4 sm:p-6">
            <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 ${
              isMorning ? 'text-[#0f3e2c]' : 'text-white'
            }`}>
              Night Life Tour
            </h3>
            <p className={`text-sm sm:text-base mb-4 sm:mb-6 ${
              isMorning ? 'text-gray-600' : 'text-gray-300'
            }`}>
              Experience Saigon's legendary nightlife scene from sunset rooftop bars to premier clubs.
            </p>
            <ul className={`text-xs sm:text-sm space-y-2 mb-6 sm:mb-8 ${
              isMorning ? 'text-gray-600' : 'text-gray-300'
            }`}>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Rooftop bar sunset experience (Chạng Vạng) - 4PM-5PM drinks with spectacular city views</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Visit popular bars in Saigon's most vibrant districts</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Dine at restaurant featuring live Vietnamese EDM music</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>End the night at a premier club for the ultimate Saigon party experience</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Professional English-speaking guide</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Small group experience (max 6 people)</span>
              </li>
            </ul>
            <Link
              to="/booking/nightlife"
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
  );
};

export default NightLife;