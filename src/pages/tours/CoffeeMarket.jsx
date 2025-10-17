import React from 'react';

const CoffeeMarket = ({ theme }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Coffee & Market Tour</h1>
        <p className="text-lg">Taste Vietnamese coffee and explore hidden markets to try tropical fruits.</p>
        <div className="mt-8">
          <a 
            href="/booking/coffee/basic" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg mr-4 transition-colors"
          >
            Book Basic Tour
          </a>
          <a 
            href="/booking/coffee/premium" 
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Book Premium Tour
          </a>
        </div>
      </div>
    </div>
  );
};

export default CoffeeMarket;
